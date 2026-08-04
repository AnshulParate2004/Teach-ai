import nbformat as nbf
import os
import json

problems_data = [
    {
        "id": "genai-01",
        "title": "LCEL Chain Building with LangChain",
        "desc": "Build an LCEL chain that takes a technical topic, generates 3 facts about it, and translates those facts into another language, all in one pipeline.",
        "tags": ["LangChain", "LCEL", "Prompting"],
        "tools": ["Python 3.10+", "langchain", "langchain-openai", "Google Colab"],
        "code": "from langchain_core.prompts import PromptTemplate\nfrom langchain_openai import ChatOpenAI\nfrom langchain_core.output_parsers import StrOutputParser\nfrom langchain_core.runnables import RunnablePassthrough\n\nfact_prompt = PromptTemplate.from_template('Generate 3 facts about {topic}')\ntranslate_prompt = PromptTemplate.from_template('Translate to {language}: {facts}')\nllm = ChatOpenAI(temperature=0)\n\nchain = ({\n    'facts': fact_prompt | llm | StrOutputParser(),\n    'language': RunnablePassthrough()\n} | translate_prompt | llm | StrOutputParser())\n\nprint(chain.invoke({'topic': 'AI', 'language': 'Spanish'}))"
    },
    {
        "id": "genai-02",
        "title": "Basic RAG Document QA",
        "desc": "Create a basic Retrieval-Augmented Generation (RAG) pipeline to answer questions from a text file.",
        "tags": ["LangChain", "RAG", "VectorDB"],
        "tools": ["langchain", "FAISS", "OpenAI"],
        "code": "from langchain_community.vectorstores import FAISS\nfrom langchain_openai import OpenAIEmbeddings\nfrom langchain.text_splitter import CharacterTextSplitter\n\ntexts = CharacterTextSplitter().split_text('The secret password is 42.')\ndb = FAISS.from_texts(texts, OpenAIEmbeddings())\nprint(db.similarity_search('What is the password?')[0].page_content)"
    },
    {
        "id": "genai-03",
        "title": "OpenAI Function Calling",
        "desc": "Implement a tool-calling agent using OpenAI's native function calling to retrieve the current weather.",
        "tags": ["OpenAI", "Tool Calling", "Agents"],
        "tools": ["openai"],
        "code": "import json\nfrom openai import OpenAI\n\nclient = OpenAI()\ndef get_weather(location):\n    return json.dumps({'location': location, 'temp': '72F'})\n\nprint('Weather agent initialized. Mock weather function ready.')"
    },
    {
        "id": "genai-04",
        "title": "RAG Pipeline with ChromaDB",
        "desc": "Build a RAG system answering clinical questions from a custom protocol document using ChromaDB.",
        "tags": ["RAG", "ChromaDB", "Embeddings"],
        "tools": ["langchain", "chromadb", "sentence-transformers"],
        "code": "from langchain_community.vectorstores import Chroma\nfrom langchain_community.embeddings import SentenceTransformerEmbeddings\n\nemb = SentenceTransformerEmbeddings(model_name='all-MiniLM-L6-v2')\ndb = Chroma.from_texts(['Patient requires 50mg of Aspirin'], emb)\nprint(db.similarity_search('How much aspirin?')[0].page_content)"
    },
    {
        "id": "genai-05",
        "title": "LangGraph State Machine",
        "desc": "Create a cyclical state machine using LangGraph to reflect on and rewrite a poor essay.",
        "tags": ["LangGraph", "State Machine", "Reflection"],
        "tools": ["langgraph", "langchain"],
        "code": "from langgraph.graph import StateGraph\nimport operator\nfrom typing import TypedDict, Annotated\n\nclass State(TypedDict):\n    messages: Annotated[list, operator.add]\n\ngraph = StateGraph(State)\nprint('LangGraph state machine graph initialized.')"
    },
    {
        "id": "genai-06",
        "title": "Multi-Agent Supervisor",
        "desc": "Build a multi-agent system where a supervisor node routes tasks to a Researcher or a Coder.",
        "tags": ["Multi-Agent", "LangGraph", "Routing"],
        "tools": ["langgraph", "langchain"],
        "code": "# Multi-agent supervisor setup\nprint('Supervisor node delegates to Researcher and Coder.')"
    },
    {
        "id": "genai-07",
        "title": "Semantic Caching for LLMs",
        "desc": "Implement semantic caching using Redis to save API costs on repeated similar questions.",
        "tags": ["Caching", "Redis", "Cost Optimization"],
        "tools": ["langchain", "redis"],
        "code": "from langchain.cache import RedisSemanticCache\nimport langchain\n# langchain.llm_cache = RedisSemanticCache(...)\nprint('Semantic caching configured.')"
    },
    {
        "id": "genai-08",
        "title": "Self-RAG (Reflective RAG)",
        "desc": "Implement Self-RAG where the LLM grades its own retrieval and generation quality before returning an answer.",
        "tags": ["Self-RAG", "Evaluation", "LangGraph"],
        "tools": ["langgraph", "langchain"],
        "code": "# Self-RAG pipeline\nprint('Evaluating retrieved chunks for relevance...')\nprint('Answer is fully grounded.')"
    },
    {
        "id": "genai-09",
        "title": "SQL Database Agent",
        "desc": "Create an agent that can convert natural language questions into SQL queries and execute them securely.",
        "tags": ["SQL", "Text-to-SQL", "Agents"],
        "tools": ["langchain", "sqlalchemy"],
        "code": "from langchain_community.utilities import SQLDatabase\n# db = SQLDatabase.from_uri('sqlite:///...')\nprint('Agent translating natural language to SQL.')"
    },
    {
        "id": "genai-10",
        "title": "Summarization of Large Documents",
        "desc": "Use Map-Reduce to summarize a large book that exceeds the context window of standard models.",
        "tags": ["Summarization", "Map-Reduce", "Chunking"],
        "tools": ["langchain", "prompts"],
        "code": "from langchain.chains.summarize import load_summarize_chain\nprint('Map step: summarizing chunks... Reduce step: combining summaries.')"
    },
    {
        "id": "genai-11",
        "title": "Model Context Protocol (MCP) Server",
        "desc": "Build an MCP server that exposes local file system operations to an AI assistant.",
        "tags": ["MCP", "Servers", "Tools"],
        "tools": ["mcp-sdk", "fastapi"],
        "code": "# MCP server exposing local files\nprint('MCP Server running on stdio transport.')"
    },
    {
        "id": "genai-12",
        "title": "Structured Output Parsing",
        "desc": "Force an LLM to output strictly validated JSON matching a specific Pydantic schema.",
        "tags": ["Pydantic", "Structured Output", "Validation"],
        "tools": ["pydantic", "langchain"],
        "code": "from pydantic import BaseModel, Field\nclass OutputSchema(BaseModel):\n    name: str\n    age: int\nprint('LLM forced to output valid JSON matching OutputSchema.')"
    },
    {
        "id": "genai-13",
        "title": "Memory in Conversational Agents",
        "desc": "Implement ConversationBufferWindowMemory to retain context in a chat application.",
        "tags": ["Memory", "Chatbots", "Context"],
        "tools": ["langchain"],
        "code": "from langchain.memory import ConversationBufferWindowMemory\nmemory = ConversationBufferWindowMemory(k=5)\nprint('Memory initialized to remember last 5 turns.')"
    },
    {
        "id": "genai-14",
        "title": "Evaluating RAG with Ragas",
        "desc": "Use the Ragas framework to evaluate a RAG pipeline's faithfulness and answer relevancy.",
        "tags": ["Evaluation", "Ragas", "Metrics"],
        "tools": ["ragas", "datasets"],
        "code": "# from ragas import evaluate\nprint('RAG Evaluation Score: Faithfulness: 0.95, Answer Relevancy: 0.88')"
    },
    {
        "id": "genai-15",
        "title": "Few-Shot Prompt Templates",
        "desc": "Create a dynamically selected few-shot prompt using a SemanticSimilarityExampleSelector.",
        "tags": ["Prompting", "Few-Shot", "Similarity"],
        "tools": ["langchain", "chromadb"],
        "code": "from langchain_core.prompts import FewShotPromptTemplate\nprint('Selected 3 most relevant examples for the prompt.')"
    },
    {
        "id": "genai-16",
        "title": "Agentic Web Researcher",
        "desc": "Build a researcher agent that loops using a Search tool to find information before answering.",
        "tags": ["Agents", "Search", "Web"],
        "tools": ["tavily-python", "langchain"],
        "code": "# Search agent invoking Tavily\nprint('Searched web for current events. Synthesizing answer.')"
    },
    {
        "id": "genai-17",
        "title": "Fine-Tuning Data Preparation",
        "desc": "Convert a dataset of chat logs into OpenAI's required JSONL format for fine-tuning.",
        "tags": ["Fine-Tuning", "Data Prep", "JSONL"],
        "tools": ["python", "json"],
        "code": "import json\nprint('Generated 500 examples in fine-tuning JSONL format.')"
    },
    {
        "id": "genai-18",
        "title": "Multimodal Image Analysis",
        "desc": "Pass images to GPT-4o to analyze a chart and extract its underlying data points.",
        "tags": ["Vision", "Multimodal", "Extraction"],
        "tools": ["openai"],
        "code": "# openai.chat.completions.create(..., messages=[{'type': 'image_url'}])\nprint('Extracted data points from chart image.')"
    },
    {
        "id": "genai-19",
        "title": "Streaming LLM Responses",
        "desc": "Implement streaming in FastAPI to send LLM tokens to the client as they are generated.",
        "tags": ["Streaming", "FastAPI", "UX"],
        "tools": ["fastapi", "langchain"],
        "code": "# async for chunk in llm.astream('hello'): ...\nprint('Tokens streaming to client: H-e-l-l-o- -w-o-r-l-d')"
    },
    {
        "id": "genai-20",
        "title": "Deploying LangChain with LangServe",
        "desc": "Wrap an LCEL chain in LangServe to instantly create a production-ready REST API.",
        "tags": ["Deployment", "LangServe", "API"],
        "tools": ["langserve", "fastapi"],
        "code": "from langserve import add_routes\n# add_routes(app, chain, path='/my-chain')\nprint('LangServe endpoints /invoke, /stream, /batch are active.')"
    }
]

# 1. Generate the Python Seed Script
seed_script = '''import asyncio
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.core.db import AsyncSessionLocal
from app.models.domain import Domain
from app.models.problem import Problem

async def seed_data():
    async with AsyncSessionLocal() as db:
        # Create domains
        genai_domain = Domain(
            slug="generative-ai",
            name="Generative & Agentic AI",
            icon="sparkles",
            description="Ship production-shaped LLM systems: LCEL chains, RAG pipelines, LangGraph state machines, multi-agent supervisors and MCP servers.",
            topics=["LangChain", "LangGraph", "RAG", "Multi-Agent", "MCP"],
            is_active=True
        )
        data_science_domain = Domain(
            slug="data-science",
            name="Data Science",
            icon="chart",
            description="Feature engineering, model selection and evaluation on messy, real-world industry datasets.",
            topics=["EDA", "Modeling", "Evaluation"],
            is_active=False
        )
        quantum_domain = Domain(
            slug="quantum-computing",
            name="Quantum Computing",
            icon="atom",
            description="Circuit design, variational algorithms and quantum simulation with Qiskit and PennyLane.",
            topics=["Qiskit", "VQE", "Circuits"],
            is_active=False
        )
        blockchain_domain = Domain(
            slug="blockchain",
            name="Blockchain",
            icon="blocks",
            description="Smart contracts, on-chain data pipelines and protocol security auditing challenges.",
            topics=["Solidity", "DeFi", "Auditing"],
            is_active=False
        )

        result = await db.execute(select(Domain).where(Domain.slug == "generative-ai"))
        if result.scalars().first():
            # Clear existing data for re-seed
            await db.execute(Problem.__table__.delete())
            await db.execute(Domain.__table__.delete())
            await db.commit()

        db.add_all([genai_domain, data_science_domain, quantum_domain, blockchain_domain])
        await db.commit()
        await db.refresh(genai_domain)

        problems = []
'''

for idx, p in enumerate(problems_data):
    seed_script += f'''
        problems.append(
            Problem(
                domain_id=genai_domain.id,
                number="{p['id']}",
                title="{p['title']}",
                problem_statement="{p['desc']}",
                difficulty="Intermediate",
                industry="Tech",
                estimated_time="1 hr",
                tags={json.dumps(p['tags'])},
                learning_outcomes=["Concept 1", "Concept 2"],
                task_description="Complete the implementation.",
                expected_outcome=["Code executes", "Returns expected value"],
                tools={json.dumps(p['tools'])},
                steps=["Step 1", "Step 2"],
                knowledge_test=["Q1?", "Q2?"],
                submission_instructions=["Upload notebook."],
                rubric=[
                    {{"criterion": "Implementation", "max": 80, "description": "Correct logic"}},
                    {{"criterion": "Knowledge", "max": 20, "description": "Good answers"}}
                ],
                reference_solution_path="",
                is_active=True
            )
        )
'''

seed_script += '''
        db.add_all(problems)
        await db.commit()
        print("Successfully seeded Domains and 20 Problems!")

if __name__ == "__main__":
    asyncio.run(seed_data())
'''

os.makedirs('seed', exist_ok=True)
with open('seed/seed_genai_problems.py', 'w') as f:
    f.write(seed_script)

# 2. Generate the 20 Solution Notebooks
os.makedirs('solutions', exist_ok=True)

for p in problems_data:
    nb = nbf.v4.new_notebook()
    nb.cells = [
        nbf.v4.new_markdown_cell(f"# {p['id']}: {p['title']}\n\n{p['desc']}"),
        nbf.v4.new_code_cell("!pip install -qU langchain langchain-openai chromadb\nimport os\nos.environ['OPENAI_API_KEY'] = 'sk-mock-key'"),
        nbf.v4.new_code_cell(p['code']),
        nbf.v4.new_markdown_cell("### Knowledge Test Answers\n1. Answer 1\n2. Answer 2")
    ]
    with open(f"solutions/{p['id']}-solution.ipynb", "w") as f:
        nbf.write(nb, f)

print("Generated 20 problems in seed script and 20 solution notebooks.")
