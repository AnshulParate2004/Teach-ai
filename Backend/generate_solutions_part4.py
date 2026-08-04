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

# 16. Dynamic Prompt Templating & Dual-LLM Comparison
n16_cells = [
    ("markdown", "# 16. Dynamic Prompt Templating & Dual-LLM Comparison\n**Industry:** Food & Beverages\n\nBuild a chatbot that sends the same user message to two different LLMs using dynamic prompt templates."),
    ("code", "!pip install langchain langchain-google-genai"),
    ("code", "from langchain_core.prompts import ChatPromptTemplate\nfrom langchain_google_genai import ChatGoogleGenerativeAI\nimport os\n\nprompt = ChatPromptTemplate.from_messages([\n    (\"system\", \"You are a food and beverage R&D assistant.\"),\n    (\"human\", \"{question}\")\n])\n\n# Simulating two different models (e.g. Gemini Flash and Gemini Pro)\nllm1 = ChatGoogleGenerativeAI(model=\"gemini-1.5-flash\")\nllm2 = ChatGoogleGenerativeAI(model=\"gemini-1.5-pro\")\n\nchain1 = prompt | llm1\nchain2 = prompt | llm2\n\nq = \"What are the nutritional differences between oat milk and almond milk?\"\n\nres1 = chain1.invoke({\"question\": q})\nres2 = chain2.invoke({\"question\": q})\n\nprint(\"--- Model 1 (Flash) ---\\n\", res1.content[:200], \"...\\n\")\nprint(\"--- Model 2 (Pro) ---\\n\", res2.content[:200], \"...\")")
]

# 17. Persistent Chat History with Firebase
n17_cells = [
    ("markdown", "# 17. Persistent Chat History with Firebase\n**Industry:** QSR (Quick Service Restaurants)\n\nBuild a chatbot that stores and retrieves conversation history from Firebase Firestore."),
    ("code", "!pip install langchain langchain-google-genai firebase-admin"),
    ("code", "print(\"To run this, you need a firebase service account JSON file.\")\n# import firebase_admin\n# from firebase_admin import credentials, firestore\n# cred = credentials.Certificate('path/to/serviceAccountKey.json')\n# firebase_admin.initialize_app(cred)\n# db = firestore.client()")
]

# 18. TypeScript MCP Server
n18_cells = [
    ("markdown", "# 18. TypeScript MCP Server (Weather Data)\n**Industry:** Tourism\n\nBuild a Model Context Protocol server in TypeScript/Node.js that exposes a 'get weather by city' tool."),
    ("markdown", "> **Note:** This is a TypeScript project. The solution is provided as a reference `server.ts` file block here."),
    ("code", "\"\"\"\n// server.ts\nimport { FastMCP } from 'fastmcp';\nimport { z } from 'zod';\n\nconst server = new FastMCP('Weather Server');\n\nserver.addTool({\n  name: 'get_weather',\n  description: 'Get weather for a city',\n  parameters: z.object({\n    city: z.string()\n  }),\n  execute: async (args) => {\n    return `The weather in ${args.city} is sunny.`;\n  }\n});\n\nserver.start();\n\"\"\"\nprint(\"Run this using: npm install fastmcp zod && npx ts-node server.ts\")")
]

# 19. Web Scraping Agent
n19_cells = [
    ("markdown", "# 19. Web Scraping Agent with Search API Integration\n**Industry:** Retail & E-Commerce\n\nBuild an agent that takes a research query, searches the web using the Serper API, scrapes the top results, and summarizes findings."),
    ("code", "!pip install langchain langchain-google-genai requests beautifulsoup4"),
    ("code", "import requests\nfrom bs4 import BeautifulSoup\nfrom langchain_google_genai import ChatGoogleGenerativeAI\nfrom langchain_core.prompts import ChatPromptTemplate\n\ndef search_and_scrape(query: str):\n    # Mock search\n    urls = [\"http://example.com/pricing\"]\n    content = \"Competitor A is pricing their shoes at $50. Competitor B at $45.\"\n    return content\n\nllm = ChatGoogleGenerativeAI(model=\"gemini-1.5-flash\")\nprompt = ChatPromptTemplate.from_template(\"Summarize this pricing data: {data}\")\nchain = prompt | llm\n\ndata = search_and_scrape(\"latest discount trends from competing retailers\")\nsummary = chain.invoke({\"data\": data})\nprint(summary.content)")
]

# 20. Nested Subgraph Multi-Agent
n20_cells = [
    ("markdown", "# 20. Nested Subgraph Multi-Agent Architecture\n**Industry:** Insurance\n\nBuild a LangGraph system where a top-level supervisor graph calls a nested subgraph (its own internal multi-step workflow) as a single node."),
    ("code", "!pip install langgraph langchain langchain-google-genai"),
    ("code", "from langgraph.graph import StateGraph, START, END\nfrom typing import TypedDict\n\nclass ClaimState(TypedDict):\n    claim_id: str\n    status: str\n    damage_cost: int\n\n# --- Inner Graph: Damage Assessment ---\ndef research_photos(state: ClaimState):\n    return {\"status\": \"photos_researched\"}\n\ndef estimate_cost(state: ClaimState):\n    return {\"damage_cost\": 500}\n\ninner_graph = StateGraph(ClaimState)\ninner_graph.add_node(\"research\", research_photos)\ninner_graph.add_node(\"estimate\", estimate_cost)\ninner_graph.add_edge(START, \"research\")\ninner_graph.add_edge(\"research\", \"estimate\")\ninner_graph.add_edge(\"estimate\", END)\ninner_app = inner_graph.compile()\n\n# --- Outer Graph: Claims Supervisor ---\ndef supervisor_node(state: ClaimState):\n    return {\"status\": \"assessing_damage\"}\n\nouter_graph = StateGraph(ClaimState)\nouter_graph.add_node(\"supervisor\", supervisor_node)\nouter_graph.add_node(\"damage_assessment\", inner_app)\nouter_graph.add_edge(START, \"supervisor\")\nouter_graph.add_edge(\"supervisor\", \"damage_assessment\")\nouter_graph.add_edge(\"damage_assessment\", END)\nouter_app = outer_graph.compile()\n\nfor event in outer_app.stream({\"claim_id\": \"C123\", \"status\": \"new\", \"damage_cost\": 0}):\n    print(event)")
]

if __name__ == "__main__":
    create_notebook("16_dual_llm_comparison.ipynb", n16_cells)
    create_notebook("17_persistent_chat_firebase.ipynb", n17_cells)
    create_notebook("18_typescript_mcp.ipynb", n18_cells)
    create_notebook("19_web_scraping_agent.ipynb", n19_cells)
    create_notebook("20_nested_subgraph.ipynb", n20_cells)
