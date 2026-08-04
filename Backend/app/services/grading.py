import json
import logging
import litellm
from typing import Dict, Any
from app.core.config import settings

logger = logging.getLogger(__name__)

# Configure litellm fallback logic
litellm.success_callback = []
litellm.failure_callback = []

def get_grading_prompt(problem_statement: str, rubric_json: str, reference_notebook_code: str, student_notebook_code: str, execution_log: str) -> str:
    return f"""
System: You are a strict but fair grader. Score ONLY against the rubric provided. Return valid JSON only, no markdown, no preamble.
User:
Problem statement: {problem_statement}
Rubric: {rubric_json}
Reference solution (for guidance, not required exact match): {reference_notebook_code}
Student submission: {student_notebook_code}
Execution log: {execution_log}

Return JSON matching this shape exactly:
{{"criteria": [{{"criterion": str, "score": number, "max": number, "feedback": str}}], "total_score": number, "max_score": number, "overall_feedback": str}}
"""

async def call_llm_with_fallback(prompt: str) -> str:
    # Model configuration for LiteLLM
    azure_model = f"azure/{settings.AZURE_OPENAI_API_VERSION}" # Usually it's mapped based on how it's configured in environment
    # Let's specify primary and fallback. 
    # If AZURE_OPENAI_API_KEY is available, we try Azure, else fallback to standard OpenAI.
    
    messages = [{"role": "user", "content": prompt}]
    
    # We will define a fallback list
    fallbacks = [{"model": "gpt-4-turbo"}] # Example fallback
    
    # Attempt primary Azure model
    try:
        response = await litellm.acompletion(
            model="azure/gpt-4o", # Replace with your deployment name
            messages=messages,
            api_key=settings.AZURE_OPENAI_API_KEY,
            api_base=settings.AZURE_OPENAI_ENDPOINT,
            api_version=settings.AZURE_OPENAI_API_VERSION,
            fallbacks=fallbacks,
            temperature=0.2
        )
        return response.choices[0].message.content
    except Exception as e:
        logger.error(f"LiteLLM completion failed: {e}")
        # If it fully fails, we might just return an empty JSON struct to handle gracefully
        raise

async def grade_notebook(problem_statement: str, rubric: list, reference_path: str, student_file_path: str, execution_log: str) -> Dict[str, Any]:
    
    student_notebook_code = ""
    try:
        with open(student_file_path, "r", encoding="utf-8") as f:
            student_notebook_code = f.read()
    except Exception:
        pass
        
    reference_notebook_code = ""
    if reference_path:
        try:
            with open(reference_path, "r", encoding="utf-8") as f:
                reference_notebook_code = f.read()
        except Exception:
            pass

    prompt = get_grading_prompt(
        problem_statement=problem_statement,
        rubric_json=json.dumps(rubric),
        reference_notebook_code=reference_notebook_code,
        student_notebook_code=student_notebook_code,
        execution_log=execution_log
    )
    
    for attempt in range(2):
        try:
            llm_response = await call_llm_with_fallback(prompt)
            # Remove markdown formatting if the LLM leaked it
            if llm_response.startswith("```json"):
                llm_response = llm_response[7:-3]
            elif llm_response.startswith("```"):
                llm_response = llm_response[3:-3]
                
            return json.loads(llm_response.strip())
        except Exception as e:
            logger.error(f"Failed to parse LLM response on attempt {attempt+1}: {e}")
            if attempt == 1:
                raise ValueError("Failed to obtain valid JSON from LLM grader.")
    return {}
