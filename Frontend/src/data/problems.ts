export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Dataset {
  fileName: string;
  size: string;
  url: string;
}

export interface Problem {
  id: string;
  domain: string;
  company: string;
  role: string;
  title: string;
  industry: string;
  problem_statement: string;
  difficulty: Difficulty;
  solved: boolean;
  tags: string[];
  estimatedTime: string;
  learn: string[];
  task: string;
  expectedOutcome: string[];
  tools: string[];
  steps: string[];
  knowledgeTest: string[];
  submissionInstructions: string[];
  dataset?: Dataset;
}

export const problems: Problem[] = [
  {
    "id": "genai-01",
    "domain": "generative-ai",
    "company": "GlobalTech Solutions",
    "role": "Localization AI Engineering Intern",
    "title": "LCEL Chain Building with LangChain",
    "industry": "IT Services",
    "problem_statement": "You are building an internal documentation localization tool for GlobalTech Solutions, a global IT services firm. Deliverables written in English must be auto-summarized into 3 factual bullet points and translated into regional target languages for offshore engineering teams using a unified LCEL pipeline.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "LangChain",
      "Groq/Gemini API",
      "ChatPromptTemplate",
      "StrOutputParser"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "LCEL composition using the pipe operator (|)",
      "Dynamic prompt templating with ChatPromptTemplate",
      "Output parsing with StrOutputParser"
    ],
    "task": "Given a technical topic input (e.g. 'Kubernetes autoscaling'), output a French or Japanese translation of 3 factual points about it, mirroring how GlobalTech auto-localizes technical documentation. Deliverable: a working .ipynb notebook with a 3-stage LCEL chain.",
    "expectedOutcome": [
      "Submit chain.ipynb + a screenshot of console output + a short README explaining each stage."
    ],
    "tools": [
      "Python",
      "LangChain",
      "Groq/Gemini API",
      "ChatPromptTemplate",
      "StrOutputParser"
    ],
    "steps": [
      "Set up API keys and install langchain, langchain-groq/langchain-google-genai",
      "Create a prompt template for fact generation on a technical topic",
      "Chain it with a translation prompt using LCEL |",
      "Parse output as string and print results"
    ],
    "knowledgeTest": [
      "What does LCEL stand for and why is it preferred over manual chaining?",
      "What is the difference between RunnableSequence and | syntax in LangChain?",
      "What does StrOutputParser do in an LCEL pipeline?"
    ],
    "submissionInstructions": [
      "Submit chain.ipynb + a screenshot of console output + a short README explaining each stage."
    ]
  },
  {
    "id": "genai-02",
    "domain": "generative-ai",
    "company": "ShopVerse Marketplace",
    "role": "Catalog AI Automation Intern",
    "title": "Structured Output with Pydantic",
    "industry": "Retail & E-Commerce",
    "problem_statement": "ShopVerse Marketplace receives thousands of unstructured product descriptions from third-party sellers every day. Create a LangChain pipeline that parses raw product text into validated, type-safe JSON catalog data (title, category, price_tier, summary) for direct database insertion.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "LangChain",
      "Pydantic",
      "Gemini/Groq LLM API"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Enforcing structured LLM outputs using Pydantic models",
      "Schema binding using .with_structured_output()",
      "Handling schema validation errors in catalog data ingestion"
    ],
    "task": "Input: a seller-submitted product description paragraph. Output: a validated JSON object matching a Pydantic BaseModel schema, ready to drop straight into ShopVerse's product catalog database.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + 3 sample output JSONs + explanation of schema fields."
    ],
    "tools": [
      "Python",
      "LangChain",
      "Pydantic",
      "Gemini/Groq LLM API"
    ],
    "steps": [
      "Define a Pydantic BaseModel with fields title, category, price_tier, summary",
      "Bind the schema to the LLM using .with_structured_output()",
      "Test with 3 distinct raw seller product descriptions"
    ],
    "knowledgeTest": [
      "Why use Pydantic schemas instead of asking the LLM to 'return JSON' in prompt text?",
      "What happens if the LLM output does not match the Pydantic schema validation rules?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + 3 sample output JSONs + explanation of schema fields."
    ]
  },
  {
    "id": "genai-03",
    "domain": "generative-ai",
    "company": "ShieldCover Insurance",
    "role": "Claims Workflow Automation Intern",
    "title": "Parallel & Conditional Chains",
    "industry": "InsurTech",
    "problem_statement": "ShieldCover Insurance wants to accelerate claims processing. Build a chain that analyzes a claim's damage description and supporting evidence simultaneously (parallel: damage assessment + fraud-risk check), and a second chain that routes the claim to 'auto-approve' or 'manual review' conditionally based on risk score.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangChain",
      "RunnableParallel",
      "RunnableBranch",
      "Gemini/Groq API"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Parallel execution with RunnableParallel",
      "Conditional branching logic with RunnableBranch",
      "Claims risk scoring and workflow routing"
    ],
    "task": "Build two working scripts: one running 2 LLM calls in parallel (damage estimation + fraud risk) and merging results; one branching a claim to auto-approve vs manual-review based on combined risk score.",
    "expectedOutcome": [
      "Submit both notebooks (.ipynb) + example claims showing both auto-approve and manual-audit branches."
    ],
    "tools": [
      "LangChain",
      "RunnableParallel",
      "RunnableBranch",
      "Gemini/Groq API"
    ],
    "steps": [
      "Build parallel chain: define damage-assessment and fraud-risk prompts, combine with RunnableParallel",
      "Build conditional chain: use risk score threshold to route to auto-approve or manual-review prompts",
      "Test with sample claim descriptions"
    ],
    "knowledgeTest": [
      "When would you select parallel execution over conditional chains?",
      "How does RunnableBranch evaluate predicate functions to select execution paths?"
    ],
    "submissionInstructions": [
      "Submit both notebooks (.ipynb) + example claims showing both auto-approve and manual-audit branches."
    ]
  },
  {
    "id": "genai-04",
    "domain": "generative-ai",
    "company": "MedCare Health Systems",
    "role": "Clinical RAG Systems Engineer Intern",
    "title": "RAG Pipeline with ChromaDB",
    "industry": "Healthcare",
    "problem_statement": "MedCare Health Systems needs an AI tool for clinicians to query internal medical treatment guidelines quickly. Build a Retrieval-Augmented Generation (RAG) system that answers clinical questions grounded strictly in custom protocol documents stored in a ChromaDB vector database with explicit source citations.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangChain",
      "ChromaDB",
      "HuggingFace/Gemini embeddings",
      "Python"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Vector embeddings and text chunking strategies",
      "Similarity search with ChromaDB vector store",
      "Context injection to prevent medical hallucination"
    ],
    "task": "Input: a clinical guideline PDF document + a doctor's medical query. Output: an accurate, context-grounded answer displaying exact guideline passage citations for clinical auditability.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + sample guideline document + 3 Q&A pairs showing retrieved sources."
    ],
    "tools": [
      "LangChain",
      "ChromaDB",
      "HuggingFace/Gemini embeddings",
      "Python"
    ],
    "steps": [
      "Load and chunk a sample clinical guideline protocol document",
      "Generate embeddings and store in ChromaDB vector database",
      "Retrieve top-k relevant chunks for a clinical query",
      "Pass retrieved context + query to LLM for grounded answer with citations"
    ],
    "knowledgeTest": [
      "Why is RAG preferred over fine-tuning for factual QA over dynamic medical guidelines?",
      "What is cosine similarity and how is it used in vector retrieval?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + sample guideline document + 3 Q&A pairs showing retrieved sources."
    ]
  },
  {
    "id": "genai-05",
    "domain": "generative-ai",
    "company": "LexisClause Legal Partners",
    "role": "Legal Knowledge Systems Intern",
    "title": "Metadata-Filtered RAG",
    "industry": "Legal Tech",
    "problem_statement": "LexisClause associates need to search legal precedent archives without wading through irrelevant court jurisdictions. Extend a vector RAG pipeline to tag document chunks with metadata (jurisdiction, court, filing year) and execute metadata-filtered vector searches.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangChain",
      "ChromaDB/Qdrant",
      "Python"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Metadata tagging during vector embedding",
      "Filtered vector search for precision retrieval",
      "Handling multi-jurisdiction precedent search"
    ],
    "task": "A legal RAG system where a query like 'what did the Bombay High Court rule on contract breach in 2023' only searches vector chunks tagged with jurisdiction: bombay_hc and year: 2023.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + before/after comparison showing filtered vs unfiltered retrieval results."
    ],
    "tools": [
      "LangChain",
      "ChromaDB/Qdrant",
      "Python"
    ],
    "steps": [
      "Tag each legal case chunk with metadata (jurisdiction, court, year) during vector embedding",
      "Apply metadata filters in retriever query parameters",
      "Compare retrieval results with vs. without metadata filtering"
    ],
    "knowledgeTest": [
      "What is the benefit of metadata filtering over pure semantic search?",
      "Give an example legal scenario where metadata filtering is essential to prevent erroneous precedents."
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + before/after comparison showing filtered vs unfiltered retrieval results."
    ]
  },
  {
    "id": "genai-06",
    "domain": "generative-ai",
    "company": "Vertex National Bank",
    "role": "Conversational AI Systems Intern",
    "title": "Chatbot with Persistent Memory (LangGraph)",
    "industry": "Banking & FinTech",
    "problem_statement": "Vertex National Bank's customer support bot keeps forgetting customer loan application details between chat turns. Build a chatbot using LangGraph StateGraph that remembers context across turns and persistent user sessions using SQLite checkpointing.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangGraph",
      "SQLite",
      "Python",
      "Gemini/Groq API"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "LangGraph StateGraph architecture",
      "Durable state checkpointing with SqliteSaver",
      "Multi-session conversational thread management"
    ],
    "task": "A banking support chatbot that recalls earlier messages (loan ID, income details) in the same session, and resumes state cleanly after application restart without asking repetitive questions.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + demo transcript showing memory recall after script restart."
    ],
    "tools": [
      "LangGraph",
      "SQLite",
      "Python",
      "Gemini/Groq API"
    ],
    "steps": [
      "Define StateGraph state schema with messages list and account state",
      "Build graph node with LLM response function",
      "Integrate SqliteSaver checkpointing",
      "Test memory persistence by closing and restarting conversation thread"
    ],
    "knowledgeTest": [
      "What is a checkpoint in LangGraph and how does it differ from in-memory message history lists?",
      "How do thread IDs isolate separate user support sessions in SQLite checkpointers?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + demo transcript showing memory recall after script restart."
    ]
  },
  {
    "id": "genai-07",
    "domain": "generative-ai",
    "company": "OmniRoute Logistics",
    "role": "Agentic Workflow Engineer Intern",
    "title": "ReAct Agent from Scratch",
    "industry": "Supply Chain & Logistics",
    "problem_statement": "OmniRoute Logistics wants an agent that answers live shipment tracking inquiries. Implement a ReAct (Reason + Act) agent from scratch using LangGraph that reasons step-by-step and invokes external tools (e.g., shipment tracking API) to resolve questions.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangGraph",
      "Python",
      "requests/mock REST API"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "The ReAct loop pattern (Reason -> Act -> Observe)",
      "Building tool calling nodes in state graphs",
      "Integrating REST tools into agent workflows"
    ],
    "task": "Given a query like 'Where is shipment #4521 right now and will it arrive on time?', the agent reasons, invokes the mock tracking tool, observes the API payload, and formulates the final answer.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + full trace log showing one complete reason-act-observe loop execution."
    ],
    "tools": [
      "LangGraph",
      "Python",
      "requests/mock REST API"
    ],
    "steps": [
      "Define agent state (question, thoughts, actions, observations)",
      "Build reasoning node and tool-execution node",
      "Loop reason -> act -> observe until final answer is reached",
      "Test with 3 different shipment tracking questions"
    ],
    "knowledgeTest": [
      "What are the 3 phases of the ReAct execution loop?",
      "Why is the observation step critical before the agent proceeds to the next reasoning turn?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + full trace log showing one complete reason-act-observe loop execution."
    ]
  },
  {
    "id": "genai-08",
    "domain": "generative-ai",
    "company": "Apex Strategy Consulting",
    "role": "AI Strategy Advisory Intern",
    "title": "Reflexion Agent (Self-Critique Loop)",
    "industry": "Management Consulting",
    "problem_statement": "Apex Strategy Consulting wants first-draft client strategy deliverables to undergo automated quality critique before human consultant review. Build a Reflexion agent that drafts a strategy brief, critiques its own output against consulting benchmarks, and revises until reaching quality thresholds.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangGraph",
      "Pydantic",
      "Python",
      "Gemini/Groq API"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Reflexion and self-critique agent patterns",
      "Structured critique schema using Pydantic",
      "Iteration bounds control to prevent execution loops"
    ],
    "task": "Given a strategy prompt ('outline a market-entry strategy for EV charging in SE Asia'), the agent produces an initial answer, generates a critique, revises the draft, and stops after N iterations or quality pass.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + log showing at least 2 iterations of critique-and-revise cycles."
    ],
    "tools": [
      "LangGraph",
      "Pydantic",
      "Python",
      "Gemini/Groq API"
    ],
    "steps": [
      "Define output schemas for responder draft and critique evaluator",
      "Build first-responder chain node and revision chain node",
      "Add loop controller with MAX_ITERATIONS limit guard",
      "Log each iteration draft and critique feedback"
    ],
    "knowledgeTest": [
      "What risks arise if a self-critique loop lacks a MAX_ITERATIONS safety limit?",
      "How does automated LLM self-critique differ from human-in-the-loop validation?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + log showing at least 2 iterations of critique-and-revise cycles."
    ]
  },
  {
    "id": "genai-09",
    "domain": "generative-ai",
    "company": "Apex Dynamics Industrial",
    "role": "Multi-Agent Systems Intern",
    "title": "Supervisor Multi-Agent System",
    "industry": "Smart Manufacturing",
    "problem_statement": "Apex Dynamics plant operators need an assistant to triage plant breakdown issues end-to-end. Build a hierarchical multi-agent system where a Supervisor agent routes user requests to specialized worker agents (Researcher, Coder, Validator) and verifies the final answer.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangGraph",
      "Pydantic",
      "Python REPL tool",
      "Web Search API"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Multi-agent orchestration and dynamic routing",
      "Specialized worker agent definition",
      "Supervisor validation and feedback loops"
    ],
    "task": "Given a mixed plant query ('Research causes of downtime on Line 3 and write code to analyze sensor log CSVs'), the system routes between agents correctly and returns a validated diagnosis.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + architecture graph diagram + full trace log (query -> routing -> output)."
    ],
    "tools": [
      "LangGraph",
      "Pydantic",
      "Python REPL tool",
      "Web Search API"
    ],
    "steps": [
      "Define Supervisor, Researcher, Coder, and Validator nodes",
      "Add routing logic based on structured Supervisor decision output",
      "Connect Researcher to search tool and Coder to Python REPL tool",
      "Add Validator node to verify output quality before returning final answer"
    ],
    "knowledgeTest": [
      "Why choose a supervisor multi-agent architecture over one monolithic agent prompt?",
      "What types of failure modes does the Validator node protect against?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + architecture graph diagram + full trace log (query -> routing -> output)."
    ]
  },
  {
    "id": "genai-10",
    "domain": "generative-ai",
    "company": "QuantCapital Trading",
    "role": "AI Risk & Governance Intern",
    "title": "Human-in-the-Loop Approval Workflow",
    "industry": "Financial Services",
    "problem_statement": "QuantCapital trading desks mandate that automated AI assistants prep stock trades but never execute orders without human sign-off. Build a LangGraph workflow that pauses graph execution and waits for human approval before taking sensitive financial actions.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangGraph",
      "interrupt mechanism",
      "Python"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Human-in-the-Loop (HITL) interrupt mechanisms in LangGraph",
      "State graph execution pausing and resume logic",
      "Building compliant agentic risk workflows"
    ],
    "task": "A state graph that stops at a trade execution node, requests human sign-off (approve/reject), and proceeds with trade execution or halts order execution accordingly.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + two demo execution traces (one approved run, one rejected run)."
    ],
    "tools": [
      "LangGraph",
      "interrupt mechanism",
      "Python"
    ],
    "steps": [
      "Design graph with trade preparation node requiring approval",
      "Use LangGraph interrupt() function to pause graph execution",
      "Accept user approval payload to resume or reject execution",
      "Test both approval and rejection execution paths"
    ],
    "knowledgeTest": [
      "Why is human-in-the-loop architecture critical for autonomous financial agentic systems?",
      "What is the difference between graph interrupt() and blocking Python input() calls?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + two demo execution traces (one approved run, one rejected run)."
    ]
  },
  {
    "id": "genai-11",
    "domain": "generative-ai",
    "company": "BioMedix Devices",
    "role": "RAG Evaluation & Bio-AI Intern",
    "title": "Comparing Text Chunking Strategies for RAG",
    "industry": "Medical Equipment",
    "problem_statement": "BioMedix Devices technical support needs accurate answers from thick Instructions for Use (IFU) manuals. Implement and benchmark 4 distinct text chunking strategies (Fixed-size, Recursive Character, Sliding Window, Semantic) on the same manual and evaluate downstream QA accuracy.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangChain text splitters",
      "ChromaDB",
      "Python",
      "Jupyter Notebook"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Text chunking algorithms and document splitting",
      "Measuring retrieval precision and recall",
      "Impact of chunk granularity on RAG accuracy"
    ],
    "task": "A benchmark report comparing retrieval precision and answer quality across 4 chunking methods for 5 medical manual queries where accuracy is safety-critical.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + comparative evaluation table + written technical report."
    ],
    "tools": [
      "LangChain text splitters",
      "ChromaDB",
      "Python",
      "Jupyter Notebook"
    ],
    "steps": [
      "Load sample medical device IFU manual PDF/text",
      "Apply 4 text splitting strategies separately (Fixed, Recursive, Sliding, Semantic)",
      "Build vector RAG pipeline for each chunked dataset",
      "Run 5 test queries and evaluate accuracy and retrieval precision"
    ],
    "knowledgeTest": [
      "Why might semantic chunking outperform fixed-character splitting for technical manuals?",
      "What are the trade-offs between smaller chunk sizes (high precision) and larger chunk sizes (high context)?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + comparative evaluation table + written technical report."
    ]
  },
  {
    "id": "genai-12",
    "domain": "generative-ai",
    "company": "TelcoNet Systems",
    "role": "MCP Protocol Developer Intern",
    "title": "Building a Custom MCP Server (File Manager)",
    "industry": "Telecommunications",
    "problem_statement": "TelcoNet Systems NOC engineers want an LLM assistant that can safely view and edit network router configuration files. Build a Model Context Protocol (MCP) server in Python exposing tool capabilities (read_file, write_file, find_replace, list_dir) over stdio transport.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python mcp SDK",
      "FastAPI (optional)",
      "UV package manager"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Model Context Protocol (MCP) server architecture",
      "Defining tool schemas and tool handlers using MCP SDK",
      "Stdio client-server communication standards"
    ],
    "task": "A functional MCP server that an LLM client (e.g. Claude Desktop or custom MCP client) connects to over stdio transport to manage network configuration files.",
    "expectedOutcome": [
      "Submit server code (mcp_server.py / notebook) + demo execution log of client calling tools."
    ],
    "tools": [
      "Python mcp SDK",
      "FastAPI (optional)",
      "UV package manager"
    ],
    "steps": [
      "Install Python MCP SDK",
      "Define tool functions (read_file, write_file, find_replace, list_dir) scoped to a config folder",
      "Register tools with MCP server instance using decorators",
      "Connect client host and verify tool call responses"
    ],
    "knowledgeTest": [
      "What problem does the Model Context Protocol solve compared to hardcoded API integrations?",
      "What is the role of stdio transport in local MCP server implementations?"
    ],
    "submissionInstructions": [
      "Submit server code (mcp_server.py / notebook) + demo execution log of client calling tools."
    ]
  },
  {
    "id": "genai-13",
    "domain": "generative-ai",
    "company": "DriveTech Motors",
    "role": "Full-Stack GenAI Intern",
    "title": "Full-Stack MCP Application with FastAPI + Gemini",
    "industry": "Automotive Services",
    "problem_statement": "DriveTech Motors dealership network needs an API letting service advisors query vehicle diagnostic telemetry. Build a full-stack REST API in FastAPI connecting an MCP client to a vehicle diagnostic tool server, exposing a /query endpoint powered by Gemini.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "FastAPI",
      "MCP SDK",
      "Gemini API",
      "Python",
      "CORS Middleware"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "End-to-end integration of LLMs, MCP tool servers, and REST APIs",
      "FastAPI async context lifecycle management",
      "Building deployable full-stack MCP backends"
    ],
    "task": "A working API where a POST request to /query (e.g. 'why is check engine light on for VIN X') triggers Gemini to reason, invoke MCP diagnostic tools, and return structured responses.",
    "expectedOutcome": [
      "Submit backend service code + Postman collection / screenshots showing /tools and /query working."
    ],
    "tools": [
      "FastAPI",
      "MCP SDK",
      "Gemini API",
      "Python",
      "CORS Middleware"
    ],
    "steps": [
      "Build an MCP server with diagnostic lookup tool functions",
      "Build an MCP client that connects to the tool server",
      "Wrap client inside FastAPI /query and /tools endpoints",
      "Add CORS middleware and test via Postman or frontend client"
    ],
    "knowledgeTest": [
      "Trace request lifecycle flow: Frontend -> FastAPI -> MCP Client -> MCP Server -> LLM.",
      "Why is async context management essential when handling MCP client connections in FastAPI?"
    ],
    "submissionInstructions": [
      "Submit backend service code + Postman collection / screenshots showing /tools and /query working."
    ]
  },
  {
    "id": "genai-14",
    "domain": "generative-ai",
    "company": "WanderLust Global",
    "role": "Personalization AI Intern",
    "title": "Memory-Aware Chatbot with Mem0 + Vector DB",
    "industry": "Tourism & Hospitality",
    "problem_statement": "WanderLust Global wants its AI concierge to recall traveler preferences (window seats, dietary restrictions, preferred hotel tier) across multiple trip booking sessions using Mem0 hybrid memory backed by a vector database.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Mem0",
      "Qdrant/ChromaDB",
      "Groq/Gemini API",
      "HuggingFace embeddings"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Long-term memory extraction and indexing with Mem0",
      "Combining short-term chat context with long-term vector memory",
      "Building personalized agent workflows"
    ],
    "task": "A travel-concierge chatbot that automatically stores preferences mentioned in session 1 and recalls them naturally during session 2 when planning later itineraries.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + 2-session transcript showing memory recall from session 1 in session 2."
    ],
    "tools": [
      "Mem0",
      "Qdrant/ChromaDB",
      "Groq/Gemini API",
      "HuggingFace embeddings"
    ],
    "steps": [
      "Set up Mem0 with vector store backend",
      "Store user preferences into long-term memory on incoming chat messages",
      "Retrieve and inject relevant memories into system prompt on new user queries",
      "Test multi-session preference recall"
    ],
    "knowledgeTest": [
      "What is the structural difference between short-term context windows and long-term agent memory?",
      "Why use vector stores for long-term memory retrieval instead of key-value databases?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + 2-session transcript showing memory recall from session 1 in session 2."
    ]
  },
  {
    "id": "genai-15",
    "domain": "generative-ai",
    "company": "AeroSpace Dynamics",
    "role": "Flight Operations AI Intern",
    "title": "Math Reasoning Agent with Structured JSON Output",
    "industry": "Aerospace & Flight Ops",
    "problem_statement": "AeroSpace Dynamics flight dispatchers require auditable, step-by-step fuel and load calculations. Build an agent that solves quantitative flight-ops word problems (fuel burn, payload balance) using a reasoning model and outputs validated JSON for flight logs.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Groq API (DeepSeek-R1-Distill/Llama-70B)",
      "Gemini API",
      "Python",
      "json module"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Utilizing reasoning-distilled LLMs (DeepSeek-R1 / Gemini 2.0 Thinking) for math",
      "Enforcing structured JSON step arrays + final answers",
      "Parsing and validating math reasoning steps"
    ],
    "task": "Input: a flight fuel/load calculation problem. Output: a validated JSON object containing solution step reasoning arrays and final numeric values, saved to flight log files.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + 5 solved problem JSON files + console output screenshot."
    ],
    "tools": [
      "Groq API (DeepSeek-R1-Distill/Llama-70B)",
      "Gemini API",
      "Python",
      "json module"
    ],
    "steps": [
      "Design prompt requiring step-by-step reasoning formatted as structured JSON",
      "Call reasoning model with 5 distinct fuel/payload problems",
      "Parse and validate output JSON schemas",
      "Save each solution payload to .json flight log files"
    ],
    "knowledgeTest": [
      "Why are reasoning-distilled models better suited for multi-step math problems than general chat models?",
      "How do you handle schema parsing exceptions if a reasoning model outputs malformed JSON?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + 5 solved problem JSON files + console output screenshot."
    ]
  },
  {
    "id": "genai-16",
    "domain": "generative-ai",
    "company": "FlavorCraft Foods",
    "role": "Prompt Engineering Intern",
    "title": "Dynamic Prompt Templating & Dual-LLM Comparison",
    "industry": "Food & Beverage R&D",
    "problem_statement": "FlavorCraft Foods R&D wants to compare how competing LLMs (Gemini 1.5 vs Groq Llama-3.3) answer recipe and nutrition formulation prompts before choosing an engine for their consumer app. Build a chatbot that dispatches dynamic prompt templates to both models concurrently.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangChain",
      "ChatPromptTemplate",
      "Gemini API",
      "Groq API",
      "Python"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Decoupling prompt templates from LLM execution backends",
      "Concurrent multi-model querying and output evaluation",
      "Managing unified conversational history across distinct models"
    ],
    "task": "Given a formulation query, the system formats a shared ChatPromptTemplate, calls both LLM APIs concurrently, and displays responses side-by-side with multi-turn history.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + transcript showing 3 user turns with side-by-side model responses."
    ],
    "tools": [
      "LangChain",
      "ChatPromptTemplate",
      "Gemini API",
      "Groq API",
      "Python"
    ],
    "steps": [
      "Set up API credentials for Gemini and Groq model providers",
      "Build one shared ChatPromptTemplate with dynamic system + human slots",
      "Dispatch same prompt payload to both model endpoints concurrently",
      "Display side-by-side formatted model responses with chat history"
    ],
    "knowledgeTest": [
      "Why use one shared prompt template for two models instead of custom individual prompts?",
      "What factors cause variations in response structure between Gemini and Groq Llama models?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + transcript showing 3 user turns with side-by-side model responses."
    ]
  },
  {
    "id": "genai-17",
    "domain": "generative-ai",
    "company": "QuickBite QSR",
    "role": "Cloud Conversational AI Intern",
    "title": "Persistent Chat History with Firebase",
    "industry": "Quick Service Restaurants",
    "problem_statement": "QuickBite QSR's ordering assistant bot must remember regular customer order histories across mobile app visits and kiosk devices. Build a chatbot that stores and retrieves chat history in Google Cloud Firebase Firestore NoSQL document database.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Firebase Firestore",
      "firebase-admin SDK",
      "LangChain",
      "Python"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Cloud-native database persistence for conversational AI",
      "Structuring chat session data in document NoSQL databases",
      "Session recovery and chat history synchronization"
    ],
    "task": "A QSR ordering chatbot where closing and reopening the application recalls full prior order conversation history loaded directly from Firestore collections.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + Firebase console screenshot displaying stored message records."
    ],
    "tools": [
      "Firebase Firestore",
      "firebase-admin SDK",
      "LangChain",
      "Python"
    ],
    "steps": [
      "Set up Firebase project and service account credentials",
      "Write helper functions to save message roles and content to Firestore collections keyed by customer ID",
      "Write history loader function to restore chat session state on application start",
      "Test application restart and verify full message recovery"
    ],
    "knowledgeTest": [
      "Why choose cloud NoSQL databases (Firestore) over local databases (SQLite) for customer ordering applications?",
      "What document data model would you structure to isolate user chat history per session?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + Firebase console screenshot displaying stored message records."
    ]
  },
  {
    "id": "genai-18",
    "domain": "generative-ai",
    "company": "SkyWay Travel",
    "role": "TypeScript & Node.js AI Developer Intern",
    "title": "TypeScript MCP Server (Weather Data)",
    "industry": "Tourism Tech",
    "problem_statement": "SkyWay Travel trip-planning assistants need live weather data to alert travelers about destination conditions. Build a Model Context Protocol server in TypeScript/Node.js exposing a get_weather_by_city tool using stdio transport and Zod schema validation.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Node.js",
      "@modelcontextprotocol/sdk",
      "Zod",
      "TypeScript",
      "Weather REST API"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Building MCP servers in TypeScript/Node.js ecosystems",
      "Runtime parameter validation using Zod schemas",
      "Stdio transport for local tool integration"
    ],
    "task": "A working TypeScript MCP server returning live weather data for destination cities when invoked by an MCP client, integrating directly into trip-planning workflows.",
    "expectedOutcome": [
      "Submit TypeScript server codebase + demo log/screenshot of successful tool invocation."
    ],
    "tools": [
      "Node.js",
      "@modelcontextprotocol/sdk",
      "Zod",
      "TypeScript",
      "Weather REST API"
    ],
    "steps": [
      "Set up Node.js/TypeScript project with @modelcontextprotocol/sdk",
      "Define Zod validation schema for city name input",
      "Implement tool function fetching weather data from REST API",
      "Register server handlers over stdio transport and test with MCP client"
    ],
    "knowledgeTest": [
      "Why is runtime schema validation (Zod) essential for tool parameters in MCP servers?",
      "How does stdio transport differ from HTTP-based SSE transport in MCP implementations?"
    ],
    "submissionInstructions": [
      "Submit TypeScript server codebase + demo log/screenshot of successful tool invocation."
    ]
  },
  {
    "id": "genai-19",
    "domain": "generative-ai",
    "company": "PriceWatch Retail",
    "role": "Market Intelligence AI Intern",
    "title": "Web Scraping Agent with Search API Integration",
    "industry": "Retail Intelligence",
    "problem_statement": "PriceWatch Retail pricing analysts track competitor prices and promotions automatically. Build an agent that accepts research queries, searches the web via Serper API, scrapes top result URL pages, and synthesizes findings into structured reports.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Serper API",
      "requests/BeautifulSoup",
      "LangChain",
      "Python"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Chaining Search APIs, web scrapers, and LLMs",
      "Parsing unstructured HTML page text with BeautifulSoup",
      "Multi-source synthesis and link citation"
    ],
    "task": "Given a query ('latest discount trends from competing electronics retailers'), the agent returns a synthesized summary report combining scraped text from at least 3 sources with citations.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + sample research query output report with source link citations."
    ],
    "tools": [
      "Serper API",
      "requests/BeautifulSoup",
      "LangChain",
      "Python"
    ],
    "steps": [
      "Call Serper Search API to retrieve top URL results for competitor pricing query",
      "Scrape and clean raw HTML body text from retrieved result URLs",
      "Pass combined page text to LLM summarization chain",
      "Output formatted market report with original source citations"
    ],
    "knowledgeTest": [
      "Why use a Search API instead of directly scraping search engine results pages?",
      "What technical limitations and risks occur when scraping arbitrary target web pages?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + sample research query output report with source link citations."
    ]
  },
  {
    "id": "genai-20",
    "domain": "generative-ai",
    "company": "OmniInsurance Group",
    "role": "Enterprise Agent Architect Intern",
    "title": "Nested Subgraph Multi-Agent Architecture",
    "industry": "Enterprise Insurance",
    "problem_statement": "OmniInsurance Group wants an enterprise claims workflow: an outer supervisor graph managing overall claim lifecycle, calling a compiled inner damage-assessment subgraph (its own multi-step research workflow) as a single execution node.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangGraph",
      "Python",
      "Gemini/Groq API"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Composing complex agent networks using nested subgraphs in LangGraph",
      "StateGraph nesting and scope encapsulation",
      "Improving system modularity and maintainability"
    ],
    "task": "A functional two-level state graph: outer claims supervisor routes to damage-assessment subgraph node, which internally runs multi-step nodes (photos -> estimate -> summary) before returning to outer graph.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + architectural diagram of parent-child graph relationship + full run log."
    ],
    "tools": [
      "LangGraph",
      "Python",
      "Gemini/Groq API"
    ],
    "steps": [
      "Build inner subgraph with nodes performing damage research + cost estimation + summarization",
      "Compile inner subgraph and mount as callable node inside outer StateGraph",
      "Build outer supervisor graph routing between claims management nodes",
      "Execute end-to-end test run and log state transitions across both levels"
    ],
    "knowledgeTest": [
      "What architectural advantages does nesting subgraphs offer over adding more nodes to one main graph?",
      "How is state passed and isolated between parent supervisor graphs and child subgraphs?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + architectural diagram of parent-child graph relationship + full run log."
    ]
  }
];

export const industries = Array.from(new Set(problems.map((p) => p.industry))).sort();

export const getProblem = (id: string) => problems.find((p) => p.id === id);

export const problemsByDomain = (domain: string) =>
  problems.filter((p) => p.domain === domain);
