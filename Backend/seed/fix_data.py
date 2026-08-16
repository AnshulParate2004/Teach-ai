import json

problems_data = [
    {"title": "AI Agent Designer - Build Your First Agent", "industry": "Agentic AI", "role": "Agent Designer", "statement": "You are tasked with designing an AI agent for a productivity app. The agent will assist users in scheduling meetings, tracking tasks, and providing contextual information."},
    {"title": "GenAI Business Analyst - Executive Insight Generator", "industry": "GenAI", "role": "Business Analyst", "statement": "Analyse raw sales data and use Generative AI to extract meaningful insights, generating an automated executive summary."},
    {"title": "Agentic AI Consultant - Automate a Business Process", "industry": "Agentic AI", "role": "AI Consultant", "statement": "Evaluate a client's legacy customer onboarding process and architect a multi-agent AI solution to automate document verification and client communication."},
    {"title": "Multi-Agent AI - Design an AI Workforce", "industry": "Agentic AI", "role": "AI Architect", "statement": "Design a collaborative multi-agent workforce where specialized agents (Researcher, Writer, Reviewer) work together to produce market reports."},
    {"title": "GenAI Prompt Engineer - Enterprise Prompt Lab", "industry": "GenAI", "role": "Prompt Engineer", "statement": "Develop, test, and version-control complex system prompts for an enterprise customer service chatbot to ensure it strictly adheres to brand guidelines."},
    {"title": "Generative AI Data Analyst - Ask Data Questions with GenAI", "industry": "GenAI + Analytics", "role": "Data Analyst", "statement": "Build an AI interface that allows non-technical stakeholders to query a SQL database using natural language and receive visualized answers."},
    {"title": "Healthcare GenAI - Clinical Knowledge Assistant", "industry": "Healthcare AI", "role": "Healthcare AI Analyst", "statement": "Create a RAG-based assistant that can accurately answer clinician queries by retrieving information from medical journals, while maintaining strict guardrails against hallucination."},
    {"title": "GenAI Cybersecurity Analyst - AI SOC Investigation", "industry": "Cybersecurity + AI", "role": "Cybersecurity Analyst", "statement": "Leverage an LLM to automatically parse and summarize complex security incident logs to help analysts respond faster to threats."},
    {"title": "Full Stack Developer - Build an AI Web Application", "industry": "Full Stack", "role": "Full Stack Developer", "statement": "Develop a full-stack React application with a Node backend that integrates with an LLM API to provide real-time translation services."},
    {"title": "Backend Developer - Build an AI API Service", "industry": "Software", "role": "Backend Developer", "statement": "Design a highly scalable and rate-limited FastAPI backend service that serves GenAI completions for multiple downstream client applications."},
    {"title": "AI Developer - Build a RAG Application", "industry": "GenAI", "role": "AI Developer", "statement": "Implement a Retrieval-Augmented Generation pipeline using LangChain, ChromaDB, and OpenAI to answer questions about a massive PDF corpus."},
    {"title": "LangChain Developer - Build an Enterprise AI Workflow", "industry": "GenAI", "role": "LangChain Developer", "statement": "Use LangChain to build a dynamic tool-calling agent capable of querying internal APIs and summarizing the results into an email."},
    {"title": "LangGraph Developer - Build an Agentic Workflow", "industry": "Agentic AI", "role": "Agentic Developer", "statement": "Utilize LangGraph to design a stateful, cyclic AI workflow that recursively improves generated code until it passes all unit tests."},
    {"title": "AI Agent Developer - Customer Support Agent", "industry": "Agentic AI", "role": "AI Agent Developer", "statement": "Build an AI agent capable of answering tier-1 customer support queries and correctly escalating unresolved issues to a human agent."},
    {"title": "AI Agent Developer - Sales Qualification Agent", "industry": "Agentic AI", "role": "Sales AI Developer", "statement": "Develop a conversational agent that qualifies inbound leads by asking targeted questions before scheduling a meeting with a human sales rep."},
    {"title": "AI Agent Developer - HR Recruitment Agent", "industry": "Agentic AI", "role": "HR AI Developer", "statement": "Create an AI agent that screens resumes against job descriptions, identifies missing skills, and generates customized interview questions for candidates."},
    {"title": "AI Customer Service Manager - Design a GenAI Contact Centre", "industry": "CX / AI", "role": "CX Manager", "statement": "Architect a complete transformation plan for upgrading a traditional 500-seat call center into a GenAI-augmented contact center."},
    {"title": "AI Marketing Strategist - Launch a Product with GenAI", "industry": "MarTech", "role": "Marketing Strategist", "statement": "Use Generative AI to rapidly ideate campaign slogans, generate marketing copy, and segment target audiences for a new product launch."},
    {"title": "AI Creative Director - Build a Brand Campaign with GenAI", "industry": "Creative AI", "role": "Creative Director", "statement": "Leverage image and text generation models to prototype a visual brand campaign, including mood boards and social media post mockups."},
    {"title": "AWS AI Architect - Design a GenAI Enterprise Solution", "industry": "Cloud / AI", "role": "Cloud AI Architect", "statement": "Design a secure, enterprise-grade architecture using AWS Bedrock and SageMaker to deploy internal LLMs within a VPC."}
]

problems_raw = []
for i, d in enumerate(problems_data):
    problems_raw.append({
        "number": str(i+1),
        "title": d["title"],
        "industry": d["industry"],
        "role": d["role"],
        "problem_statement": d["statement"],
        "task_description": "Analyze the problem and build an AI-assisted engine to solve it.",
        "steps": [
            "Understand: Review the business objective and key stakeholders.",
            "Map Workflow: Identify where Generative AI can be injected.",
            "Build Engine: Create a simplified AI scoring or generative framework.",
            "Validate: Catch hallucinations and ensure responsible AI practices.",
            "Present: Prepare an executive recommendation."
        ],
        "submission_instructions": ["Completed Jupyter Notebook", "Analytics Report"],
        "knowledge_test": []
    })

if __name__ == "__main__":
    with open("D:/Internship/Teach-ai/Backend/seed/generate_sector_20.py", "w") as f:
        f.write("problems_raw = " + repr(problems_raw))
    print("Fixed corrupted problems!")
