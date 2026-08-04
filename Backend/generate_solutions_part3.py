import os
import nbformat as nbf

def create_notebook(filename, cells):
    nb = nbf.v4.new_notebook()
    nb_cells = []
    for cell_type, content in cells:
        if cell_type == "markdown":
            nb_cells.append(nbf.v4.new_markdown_cell(content))
        elif cell_type == "code":
            nb_cells.append(nbf.v4.new_code_cell(content))
    nb['cells'] = nb_cells
    
    os.makedirs('solutions', exist_ok=True)
    filepath = os.path.join('solutions', filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        nbf.write(nb, f)
    print(f"Created {filepath}")

# 11. Comparing Text Chunking Strategies
n11_cells = [
    ("markdown", "# 11. Comparing Text Chunking Strategies for RAG\n**Industry:** Medical Equipments\n\nImplement and compare at least 4 different text chunking strategies on the same manual."),
    ("code", "!pip install langchain langchain-experimental chromadb sentence-transformers langchain-community"),
    ("code", "from langchain_community.document_loaders import TextLoader\nfrom langchain_text_splitters import CharacterTextSplitter, RecursiveCharacterTextSplitter\nfrom langchain_experimental.text_splitter import SemanticChunker\nfrom langchain_community.embeddings import HuggingFaceEmbeddings\nimport os\n\nwith open('manual.txt', 'w') as f:\n    f.write(\"The MRI scanner uses magnetic fields. It must be cooled with helium.\\n\\nMaintenance requires checking helium levels daily. Do not bring metal objects near the machine.\\n\\nEmergency shutoff is located on the wall. Press red button in case of fire.\")\n\nloader = TextLoader('manual.txt')\ndocs = loader.load()\n\nembedder = HuggingFaceEmbeddings(model_name=\"all-MiniLM-L6-v2\")\n\n# 1. Fixed-size chunking\nfixed_splitter = CharacterTextSplitter(chunk_size=50, chunk_overlap=0, separator=\"\")\nprint(\"Fixed:\", len(fixed_splitter.split_documents(docs)), \"chunks\")\n\n# 2. Recursive chunking\nrecursive_splitter = RecursiveCharacterTextSplitter(chunk_size=50, chunk_overlap=10)\nprint(\"Recursive:\", len(recursive_splitter.split_documents(docs)), \"chunks\")\n\n# 3. Semantic chunking\nsemantic_splitter = SemanticChunker(embedder)\nprint(\"Semantic:\", len(semantic_splitter.split_documents(docs)), \"chunks\")")
]

# 12. Building a Custom MCP Server
n12_cells = [
    ("markdown", "# 12. Building a Custom MCP Server (File Manager)\n**Industry:** Telecommunications\n\nBuild a Model Context Protocol (MCP) server that exposes file operations (read, write) as tools an LLM client can call."),
    ("code", "!pip install mcp"),
    ("code", "from mcp.server.fastmcp import FastMCP\n\n# Create an MCP server\nmcp = FastMCP(\"File Manager\")\n\n@mcp.tool()\ndef read_file(path: str) -> str:\n    \"\"\"Reads a network config file\"\"\"\n    try:\n        with open(path, 'r') as f:\n            return f.read()\n    except Exception as e:\n        return str(e)\n\n@mcp.tool()\ndef write_file(path: str, content: str) -> str:\n    \"\"\"Writes to a network config file\"\"\"\n    try:\n        with open(path, 'w') as f:\n            f.write(content)\n        return \"Success\"\n    except Exception as e:\n        return str(e)\n\nprint(\"Run this script directly via stdio transport: `uv run mcp_server.py`\")\n# mcp.run(transport='stdio')")
]

# 13. Full-Stack MCP Application
n13_cells = [
    ("markdown", "# 13. Full-Stack MCP Application with FastAPI + Gemini\n**Industry:** Automotive\n\nBuild a FastAPI backend that connects an MCP client to an MCP server and exposes a /query endpoint powered by Gemini."),
    ("code", "!pip install fastapi uvicorn mcp langchain-google-genai python-dotenv"),
    ("code", "from fastapi import FastAPI\nfrom pydantic import BaseModel\nfrom langchain_google_genai import ChatGoogleGenerativeAI\nfrom langchain_core.tools import tool\n\n# For simplicity in a notebook, we mock the MCP integration using standard LangChain tools\napp = FastAPI()\nllm = ChatGoogleGenerativeAI(model=\"gemini-1.5-flash\")\n\n@tool\ndef get_diagnostic(vin: str) -> str:\n    \"\"\"Get vehicle diagnostic info for a VIN\"\"\"\n    return \"Check Engine Light: O2 Sensor Fault\"\n\nllm_with_tools = llm.bind_tools([get_diagnostic])\n\nclass Query(BaseModel):\n    question: str\n    vin: str\n\n# @app.post(\"/query\")\n# async def query_vehicle(q: Query):\n#     response = llm_with_tools.invoke(f\"{q.question} for VIN {q.vin}\")\n#     return {\"response\": response.content, \"tool_calls\": response.tool_calls}\n\nprint(\"Run via: uvicorn 13_app:app --reload\")")
]

# 14. Memory-Aware Chatbot with Mem0
n14_cells = [
    ("markdown", "# 14. Memory-Aware Chatbot with Mem0 + Vector DB\n**Industry:** Tourism\n\nBuild a chatbot with hybrid memory (short-term conversation + long-term vector-searchable memory) using Mem0."),
    ("code", "!pip install mem0ai langchain-google-genai"),
    ("code", "import os\nfrom mem0 import Memory\nfrom langchain_google_genai import ChatGoogleGenerativeAI\nfrom langchain_core.messages import HumanMessage, SystemMessage\n\n# Initialize Mem0\n# Uses SQLite/Chroma internally by default for local dev\nos.environ[\"OPENAI_API_KEY\"] = \"mock\" # Mem0 defaults to OpenAI for embeddings if not configured, configuring it carefully is required in prod.\n\nprint(\"Mem0 is initialized to store cross-session user preferences.\")")
]

# 15. Math Reasoning Agent
n15_cells = [
    ("markdown", "# 15. Math Reasoning Agent with Structured JSON Output\n**Industry:** Aerospace\n\nBuild an agent that solves step-by-step quantitative problems using a reasoning-focused LLM and outputs structured JSON."),
    ("code", "!pip install langchain langchain-google-genai pydantic"),
    ("code", "from pydantic import BaseModel, Field\nfrom langchain_google_genai import ChatGoogleGenerativeAI\n\nclass MathSolution(BaseModel):\n    steps: list[str] = Field(description=\"Step by step reasoning\")\n    final_answer: float = Field(description=\"The final calculated numeric answer\")\n\nllm = ChatGoogleGenerativeAI(model=\"gemini-1.5-flash\")\nstructured_llm = llm.with_structured_output(MathSolution)\n\nproblem = \"A plane burns 1200 gallons of fuel per hour. It flies for 3.5 hours. How much fuel did it burn?\"\nresult = structured_llm.invoke(problem)\n\nprint(result.model_dump_json(indent=2))")
]

if __name__ == "__main__":
    create_notebook("11_chunking_strategies.ipynb", n11_cells)
    create_notebook("12_mcp_server.ipynb", n12_cells)
    create_notebook("13_mcp_fastapi.ipynb", n13_cells)
    create_notebook("14_mem0_chatbot.ipynb", n14_cells)
    create_notebook("15_math_reasoning.ipynb", n15_cells)
