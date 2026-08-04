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

# 1. LCEL Chain Building
n1_cells = [
    ("markdown", "# 1. LCEL Chain Building with LangChain\n**Industry:** IT Services\n\nBuild an LCEL chain that takes a technical topic, generates 3 factual points about it, and translates those points into French."),
    ("code", "!pip install langchain langchain-google-genai python-dotenv"),
    ("code", "import os\nfrom dotenv import load_dotenv\n\n# Load your API key\nload_dotenv()\n# os.environ['GOOGLE_API_KEY'] = 'your-api-key-here'"),
    ("code", "from langchain_core.prompts import ChatPromptTemplate\nfrom langchain_google_genai import ChatGoogleGenerativeAI\nfrom langchain_core.output_parsers import StrOutputParser\n\nllm = ChatGoogleGenerativeAI(model=\"gemini-1.5-flash\")\n\n# Step 1: Generate facts\nfact_prompt = ChatPromptTemplate.from_template(\"Generate 3 factual points about {topic}.\")\n\n# Step 2: Translate\ntranslate_prompt = ChatPromptTemplate.from_template(\"Translate the following text into French:\\n\\n{text}\")\n\n# Build the LCEL Chain\nchain = (\n    fact_prompt \n    | llm \n    | StrOutputParser() \n    | {\"text\": lambda x: x} \n    | translate_prompt \n    | llm \n    | StrOutputParser()\n)\n\n# Run the chain\nresult = chain.invoke({\"topic\": \"Kubernetes autoscaling\"})\nprint(result)")
]

# 2. Structured Output with Pydantic
n2_cells = [
    ("markdown", "# 2. Structured Output with Pydantic\n**Industry:** Retail & E-Commerce\n\nAnalyze a raw product description and return structured catalog data."),
    ("code", "!pip install langchain langchain-google-genai pydantic python-dotenv"),
    ("code", "from pydantic import BaseModel, Field\nfrom langchain_google_genai import ChatGoogleGenerativeAI\nimport os\n\n# os.environ['GOOGLE_API_KEY'] = 'your-api-key-here'\nllm = ChatGoogleGenerativeAI(model=\"gemini-1.5-flash\")\n\nclass ProductSchema(BaseModel):\n    title: str = Field(description=\"The name of the product\")\n    category: str = Field(description=\"The category of the product (e.g. Electronics, Clothing)\")\n    price_tier: str = Field(description=\"'Budget', 'Mid-range', or 'Premium'\")\n    summary: str = Field(description=\"A short 1-sentence summary of the product\")\n\nstructured_llm = llm.with_structured_output(ProductSchema)\n\ndescription = \"The new QuantumBook Pro 15 features an ultra-fast M4 chip, a stunning 4K OLED display, and costs $2499. Perfect for professional video editors.\"\n\nresult = structured_llm.invoke(description)\nprint(result.model_dump_json(indent=2))")
]

# 3. Parallel & Conditional Chains
n3_cells = [
    ("markdown", "# 3. Parallel & Conditional Chains\n**Industry:** Insurance\n\nAnalyze a claim's damage and fraud risk in parallel, then route to auto-approve or manual review."),
    ("code", "!pip install langchain langchain-google-genai python-dotenv"),
    ("code", "from langchain_core.runnables import RunnableParallel, RunnableBranch, RunnableLambda\nfrom langchain_core.prompts import ChatPromptTemplate\nfrom langchain_google_genai import ChatGoogleGenerativeAI\nfrom langchain_core.output_parsers import StrOutputParser\n\nllm = ChatGoogleGenerativeAI(model=\"gemini-1.5-flash\")\n\ndamage_prompt = ChatPromptTemplate.from_template(\"Assess the damage severity (Low/Medium/High) for: {claim}\")\nfraud_prompt = ChatPromptTemplate.from_template(\"Assess fraud risk (Score 1-10) for: {claim}. Only return the number.\")\n\nparallel_chain = RunnableParallel(\n    damage=damage_prompt | llm | StrOutputParser(),\n    fraud_score=fraud_prompt | llm | StrOutputParser()\n)\n\ndef route_claim(data):\n    try:\n        score = int(data['fraud_score'].strip())\n    except:\n        score = 10\n    if score < 4 and 'High' not in data['damage']:\n        return \"Auto-Approve: Claim seems legitimate and damage is not severe.\"\n    else:\n        return \"Manual Review Required: High fraud risk or severe damage detected.\"\n\nfull_chain = parallel_chain | RunnableLambda(route_claim)\n\nclaim_desc = \"Car was rear-ended at a stop light. Bumper is dented.\"\nprint(full_chain.invoke({\"claim\": claim_desc}))")
]

# 4. RAG Pipeline with ChromaDB
n4_cells = [
    ("markdown", "# 4. RAG Pipeline with ChromaDB\n**Industry:** Healthcare\n\nA RAG system that answers clinical questions from a custom protocol document."),
    ("code", "!pip install langchain langchain-google-genai chromadb sentence-transformers langchain-community"),
    ("code", "from langchain_community.document_loaders import TextLoader\nfrom langchain_text_splitters import RecursiveCharacterTextSplitter\nfrom langchain_community.vectorstores import Chroma\nfrom langchain_community.embeddings import HuggingFaceEmbeddings\nfrom langchain_google_genai import ChatGoogleGenerativeAI\nfrom langchain_core.prompts import ChatPromptTemplate\nfrom langchain_core.runnables import RunnablePassthrough\nfrom langchain_core.output_parsers import StrOutputParser\nimport os\n\n# Create a mock clinical protocol document\nwith open('protocol.txt', 'w') as f:\n    f.write(\"\"\"Clinical Protocol for Hypertension:\\n1. First-line treatment for uncomplicated hypertension is an ACE inhibitor or ARB.\\n2. If patient is over 55 or of African family origin, use Calcium Channel Blocker (CCB) first.\\n3. Target blood pressure is <140/90 mmHg for most patients.\"\"\")\n\nloader = TextLoader(\"protocol.txt\")\ndocs = loader.load()\n\ntext_splitter = RecursiveCharacterTextSplitter(chunk_size=100, chunk_overlap=20)\nsplits = text_splitter.split_documents(docs)\n\nvectorstore = Chroma.from_documents(documents=splits, embedding=HuggingFaceEmbeddings(model_name=\"all-MiniLM-L6-v2\"))\nretriever = vectorstore.as_retriever()\n\ntemplate = \"\"\"Answer the question based only on the following context:\\n{context}\\n\\nQuestion: {question}\\n\"\"\"\nprompt = ChatPromptTemplate.from_template(template)\nllm = ChatGoogleGenerativeAI(model=\"gemini-1.5-flash\")\n\nrag_chain = (\n    {\"context\": retriever, \"question\": RunnablePassthrough()}\n    | prompt\n    | llm\n    | StrOutputParser()\n)\n\nquestion = \"What is the first-line treatment for a 60-year-old patient?\"\nprint(rag_chain.invoke(question))")
]

# 5. Metadata-Filtered RAG
n5_cells = [
    ("markdown", "# 5. Metadata-Filtered RAG\n**Industry:** Law Firms\n\nFilter retrieval results using metadata (e.g., search precedents only from a specific jurisdiction)."),
    ("code", "!pip install langchain langchain-google-genai chromadb sentence-transformers langchain-community"),
    ("code", "from langchain_core.documents import Document\nfrom langchain_community.vectorstores import Chroma\nfrom langchain_community.embeddings import HuggingFaceEmbeddings\nfrom langchain_google_genai import ChatGoogleGenerativeAI\nfrom langchain_core.prompts import ChatPromptTemplate\n\n# Mock Case Law documents with metadata\ndocuments = [\n    Document(page_content=\"Case A: The court ruled that software is not inherently patentable.\", metadata={\"jurisdiction\": \"bombay_hc\", \"year\": 2023}),\n    Document(page_content=\"Case B: Software can be patented if it shows a technical advancement.\", metadata={\"jurisdiction\": \"delhi_hc\", \"year\": 2023}),\n    Document(page_content=\"Case C: Previous ruling reversed. Hardware is required for patent.\", metadata={\"jurisdiction\": \"bombay_hc\", \"year\": 2019})\n]\n\nvectorstore = Chroma.from_documents(documents, embedding=HuggingFaceEmbeddings(model_name=\"all-MiniLM-L6-v2\"))\n\n# Retriever without filtering\nunfiltered_retriever = vectorstore.as_retriever(search_kwargs={\"k\": 2})\nprint(\"Unfiltered Results:\")\nfor doc in unfiltered_retriever.invoke(\"software patentability\"): \n    print(f\"- {doc.page_content} ({doc.metadata})\")\n\nprint(\"\\n---\\n\")\n\n# Retriever WITH metadata filtering\nfiltered_retriever = vectorstore.as_retriever(search_kwargs={\"k\": 2, \"filter\": {\"jurisdiction\": \"bombay_hc\", \"year\": 2023}})\nprint(\"Filtered Results (Bombay HC, 2023):\")\nfor doc in filtered_retriever.invoke(\"software patentability\"): \n    print(f\"- {doc.page_content} ({doc.metadata})\")")
]

if __name__ == "__main__":
    create_notebook("01_lcel_chain.ipynb", n1_cells)
    create_notebook("02_structured_output.ipynb", n2_cells)
    create_notebook("03_parallel_conditional_chains.ipynb", n3_cells)
    create_notebook("04_rag_pipeline_chromadb.ipynb", n4_cells)
    create_notebook("05_metadata_filtered_rag.ipynb", n5_cells)
