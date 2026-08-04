export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Dataset {
  fileName: string;
  size: string;
  url: string;
}

export interface Problem {
  id: string;
  domain: string;
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
    "title": "LCEL Chain Building with LangChain",
    "industry": "IT Services",
    "problem_statement": "You're building an internal tool for a global IT services firm that documents client deliverables in English but needs them translated for offshore teams. Build an LCEL chain that takes a technical topic, generates 3 factual points about it, and translates those points into another language \u2014 all in one pipeline.",
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
      "Prompt templates, output parsers, and how | (pipe) chaining works in LCEL to connect multiple steps."
    ],
    "task": "Given a topic input (e.g. \"Kubernetes autoscaling\"), output a French (or any language) translation of 3 facts about it \u2014 mirroring how an IT services team would auto-localize technical documentation. Outcome: a working .ipynb notebook with a 3-stage chain (facts -> English -> French).",
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
      "Parse output as string and print"
    ],
    "knowledgeTest": [
      "What does LCEL stand for and why is it preferred over manual chaining?",
      "Difference between RunnableSequence and | syntax?",
      "What does StrOutputParser do?"
    ],
    "submissionInstructions": [
      "Submit chain.ipynb + a screenshot of console output + a short README explaining each stage."
    ]
  },
  {
    "id": "genai-02",
    "domain": "generative-ai",
    "title": "Structured Output with Pydantic",
    "industry": "Retail & E-Commerce",
    "problem_statement": "An e-commerce marketplace receives thousands of unstructured product descriptions from third-party sellers. Create a LangChain pipeline that analyzes a raw product description and returns structured catalog data (title, category, price_tier, summary) instead of plain text.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "LangChain",
      "Pydantic",
      "any chat LLM"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "How to enforce structured, type-safe LLM outputs using Pydantic models with LangChain."
    ],
    "task": "Input: a seller-submitted product description paragraph. Output: a validated JSON object matching a Pydantic schema, ready to drop straight into the product catalog database.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + 3 sample outputs (JSON) + explanation of schema fields."
    ],
    "tools": [
      "Python",
      "LangChain",
      "Pydantic",
      "any chat LLM"
    ],
    "steps": [
      "Define a Pydantic BaseModel with fields like title, category, price_tier",
      "Bind it to the LLM using .with_structured_output()",
      "Test with 3 different product descriptions"
    ],
    "knowledgeTest": [
      "Why use Pydantic instead of asking the LLM to 'return JSON' in the prompt?",
      "What happens if the LLM output doesn't match the schema?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + 3 sample outputs (JSON) + explanation of schema fields."
    ]
  },
  {
    "id": "genai-03",
    "domain": "generative-ai",
    "title": "Parallel & Conditional Chains",
    "industry": "Insurance",
    "problem_statement": "An insurance company wants to speed up claims processing. Build a chain that analyzes a claim's damage description and supporting evidence simultaneously (parallel: damage assessment + fraud-risk check), and a second chain that routes the claim to 'auto-approve' or 'manual review' conditionally based on the risk score.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangChain",
      "RunnableParallel",
      "RunnableBranch",
      "any LLM API"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Parallel execution (RunnableParallel) and conditional branching logic in LangChain."
    ],
    "task": "Two working scripts: one that runs 2 LLM calls in parallel (damage assessment + fraud check) and merges results; one that branches a claim to auto-approve or manual-review based on the combined risk output.",
    "expectedOutcome": [
      "Submit both notebooks (.ipynb) + example claims showing both branches triggered."
    ],
    "tools": [
      "LangChain",
      "RunnableParallel",
      "RunnableBranch",
      "any LLM API"
    ],
    "steps": [
      "Build parallel chain: define damage-assessment and fraud-risk prompts, combine with RunnableParallel",
      "Build conditional chain: use the risk score to route to auto-approve or manual-review prompts",
      "Test with sample claim descriptions"
    ],
    "knowledgeTest": [
      "When would you use parallel over conditional chains?",
      "How does RunnableBranch decide which path to take?"
    ],
    "submissionInstructions": [
      "Submit both notebooks (.ipynb) + example claims showing both branches triggered."
    ]
  },
  {
    "id": "genai-04",
    "domain": "generative-ai",
    "title": "RAG Pipeline with ChromaDB",
    "industry": "Healthcare",
    "problem_statement": "A hospital wants clinicians to quickly query internal treatment protocols instead of digging through PDFs. Build a Retrieval-Augmented Generation (RAG) system that answers clinical questions from a custom protocol/guideline document using a vector database.",
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
      "Embeddings, vector similarity search, and how retrieval improves LLM factual accuracy."
    ],
    "task": "Input: a clinical protocol document + a doctor's question. Output: an accurate, context-grounded answer with the source guideline passage shown \u2014 critical for clinical trust and auditability.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + a sample document + 3 Q&A pairs showing retrieved sources."
    ],
    "tools": [
      "LangChain",
      "ChromaDB",
      "HuggingFace/Gemini embeddings",
      "Python"
    ],
    "steps": [
      "Load and chunk a sample clinical guideline document",
      "Generate embeddings and store in ChromaDB",
      "Retrieve top-k relevant chunks for a clinical query",
      "Pass retrieved context + query to the LLM for a final grounded answer"
    ],
    "knowledgeTest": [
      "Why is RAG better than fine-tuning for factual QA?",
      "What is cosine similarity used for here?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + a sample document + 3 Q&A pairs showing retrieved sources."
    ]
  },
  {
    "id": "genai-05",
    "domain": "generative-ai",
    "title": "Metadata-Filtered RAG",
    "industry": "Law Firms",
    "problem_statement": "A law firm's associates need to search case law without wading through irrelevant jurisdictions. Extend a basic RAG system to filter retrieval results using metadata (e.g., only search precedents from a specific jurisdiction/year/court).",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangChain",
      "ChromaDB/Qdrant",
      "Python"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Metadata tagging during embedding and filtered vector search for more precise retrieval."
    ],
    "task": "A legal RAG system where a query like 'what did the Bombay High Court say about X in 2023' only searches chunks tagged jurisdiction: bombay_hc, year: 2023.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + before/after comparison of filtered vs unfiltered retrieval results."
    ],
    "tools": [
      "LangChain",
      "ChromaDB/Qdrant",
      "Python"
    ],
    "steps": [
      "Tag each case-law chunk with metadata (jurisdiction, year, court) during embedding",
      "Use metadata filters in the retriever query",
      "Compare results with vs. without filtering"
    ],
    "knowledgeTest": [
      "What's the benefit of metadata filtering over pure semantic search?",
      "Give an example use case where this is essential."
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + before/after comparison of filtered vs unfiltered retrieval results."
    ]
  },
  {
    "id": "genai-06",
    "domain": "generative-ai",
    "title": "Chatbot with Persistent Memory (LangGraph)",
    "industry": "Banking",
    "problem_statement": "A bank's customer support chatbot keeps forgetting a customer's loan case details between messages, frustrating users. Build a chatbot using LangGraph that remembers conversation history across multiple turns and sessions using SQLite checkpointing.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangGraph",
      "SQLite",
      "Python",
      "any LLM API"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "LangGraph's StateGraph, checkpointing, and how state persists across a conversation."
    ],
    "task": "A CLI banking support chatbot that recalls earlier messages (e.g. loan application ID, prior questions) in the same session, and resumes correctly after a restart \u2014 no repeating themselves for the customer.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + a demo transcript showing memory recall after restart."
    ],
    "tools": [
      "LangGraph",
      "SQLite",
      "Python",
      "any LLM API"
    ],
    "steps": [
      "Define chatbot state schema",
      "Build a single-node graph with a chatbot function",
      "Add SqliteSaver checkpointing",
      "Test memory persistence by restarting the script mid-conversation"
    ],
    "knowledgeTest": [
      "What is a 'checkpoint' in LangGraph?",
      "How is this different from just storing chat history in a list?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + a demo transcript showing memory recall after restart."
    ]
  },
  {
    "id": "genai-07",
    "domain": "generative-ai",
    "title": "ReAct Agent from Scratch",
    "industry": "Supply Chain",
    "problem_statement": "A logistics company wants an assistant that can answer live shipment questions. Implement a ReAct (Reason + Act) agent using LangGraph that answers questions by reasoning step-by-step and calling an external tool (e.g., a shipment-tracking API).",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangGraph",
      "Python",
      "a public REST API",
      "requests"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "The ReAct pattern: how an agent alternates between reasoning, acting (tool calls), and observing results."
    ],
    "task": "Given a question like 'Where is shipment #4521 right now and will it arrive on time?', the agent reasons, calls the tracking API tool, observes the result, and gives a final answer.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + full trace log of one complete reason-act-observe cycle."
    ],
    "tools": [
      "LangGraph",
      "Python",
      "a public REST API",
      "requests"
    ],
    "steps": [
      "Define agent state (question, thoughts, actions, observations)",
      "Build reasoning node and tool-execution node",
      "Loop reason -> act -> observe until final answer",
      "Test with 2-3 different shipment questions"
    ],
    "knowledgeTest": [
      "What are the 3 phases of the ReAct loop?",
      "Why is observation important before the next reasoning step?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + full trace log of one complete reason-act-observe cycle."
    ]
  },
  {
    "id": "genai-08",
    "domain": "generative-ai",
    "title": "Reflexion Agent (Self-Critique Loop)",
    "industry": "Consulting Services",
    "problem_statement": "A consulting firm wants first-draft client deliverables to be sharper before a human reviews them. Build an agent that answers a client question/brief, critiques its own answer, and revises it \u2014 repeating until a quality threshold or max iterations is reached.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangGraph",
      "Pydantic",
      "Python"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Self-reflection patterns in agentic AI: how an LLM can evaluate and improve its own output."
    ],
    "task": "Given a consulting-style question (e.g. 'outline a market-entry strategy for X'), the agent produces an initial answer, generates a critique, revises the answer, and stops after N iterations or when critique says 'good enough.'",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + log showing at least 2 iterations of critique-and-revise."
    ],
    "tools": [
      "LangGraph",
      "Pydantic",
      "Python"
    ],
    "steps": [
      "Define schema for 'responder' and 'reviser' outputs",
      "Build first-responder chain and revision chain",
      "Add a loop with MAX_ITERATIONS control",
      "Log each iteration's answer and critique"
    ],
    "knowledgeTest": [
      "What risk exists if there's no MAX_ITERATIONS limit?",
      "How does self-critique differ from human-in-the-loop review?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + log showing at least 2 iterations of critique-and-revise."
    ]
  },
  {
    "id": "genai-09",
    "domain": "generative-ai",
    "title": "Supervisor Multi-Agent System",
    "industry": "Manufacturing",
    "problem_statement": "A manufacturing plant wants one assistant that can triage production issues end-to-end. Build a hierarchical multi-agent system where a 'Supervisor' agent routes requests to specialized agents (Researcher, Coder, Enhancer) and validates the final output.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangGraph",
      "Pydantic",
      "Tavily Search API",
      "Python REPL tool"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Multi-agent orchestration, dynamic routing, and how specialist agents can collaborate under a supervisor."
    ],
    "task": "Given a mixed query (e.g., 'research causes of downtime on Line 3 and write code to analyze the sensor logs'), the system routes correctly between agents and returns a validated final response.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + architecture diagram + one full run log (query -> routing -> final answer)."
    ],
    "tools": [
      "LangGraph",
      "Pydantic",
      "Tavily Search API",
      "Python REPL tool"
    ],
    "steps": [
      "Define Supervisor, Enhancer, Researcher, Coder, Validator nodes",
      "Add routing logic based on structured output from Supervisor",
      "Connect Researcher to a web search tool and Coder to a Python REPL",
      "Add a Validator node to check output quality and loop back if needed"
    ],
    "knowledgeTest": [
      "Why use a Supervisor pattern instead of one large agent?",
      "What does the Validator node protect against?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + architecture diagram + one full run log (query -> routing -> final answer)."
    ]
  },
  {
    "id": "genai-10",
    "domain": "generative-ai",
    "title": "Human-in-the-Loop Approval Workflow",
    "industry": "Financial Services",
    "problem_statement": "A trading desk needs an AI assistant that can prep trades but must never execute one without a human sign-off. Build a LangGraph workflow that pauses execution and waits for human approval before proceeding with a sensitive action (e.g., executing a trade or sending a client email).",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangGraph",
      "Python"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Interrupt/resume patterns in LangGraph and how to build safe agentic workflows with manual checkpoints."
    ],
    "task": "A graph that stops at a decision node, asks for human input (approve/reject) before a trade or fund transfer proceeds, and continues or halts accordingly.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + two demo runs (one approved, one rejected)."
    ],
    "tools": [
      "LangGraph",
      "Python"
    ],
    "steps": [
      "Design a graph with a 'trade execution' node requiring approval",
      "Use LangGraph's interrupt mechanism to pause execution",
      "Accept user input to resume or reject",
      "Test both approve and reject paths"
    ],
    "knowledgeTest": [
      "Why is human-in-the-loop important for agentic systems?",
      "What's the difference between interrupt and simply pausing with input()?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + two demo runs (one approved, one rejected)."
    ]
  },
  {
    "id": "genai-11",
    "domain": "generative-ai",
    "title": "Comparing Text Chunking Strategies for RAG",
    "industry": "Medical Equipments",
    "problem_statement": "A medical device manufacturer's support team needs fast, accurate answers from thick equipment manuals (IFUs). Implement and compare at least 4 different text chunking strategies (fixed-size, recursive, sliding window, semantic) on the same manual, and measure their effect on RAG answer quality.",
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
      "How chunking strategy affects retrieval precision and downstream answer accuracy in RAG systems."
    ],
    "task": "A report/notebook comparing retrieval results and answer quality across chunking methods for the same set of test questions on a device manual \u2014 where getting the wrong answer has real safety implications.",
    "expectedOutcome": [
      "Submit notebook with comparison table + a short written conclusion."
    ],
    "tools": [
      "LangChain text splitters",
      "ChromaDB",
      "Python",
      "Jupyter Notebook"
    ],
    "steps": [
      "Load a sample document",
      "Apply 4 chunking strategies separately",
      "Build a RAG pipeline for each and run the same 5 test questions",
      "Compare answer accuracy and relevance"
    ],
    "knowledgeTest": [
      "Why might semantic chunking outperform fixed-size chunking?",
      "What's the trade-off of smaller vs larger chunk sizes?"
    ],
    "submissionInstructions": [
      "Submit notebook with comparison table + a short written conclusion."
    ]
  },
  {
    "id": "genai-12",
    "domain": "generative-ai",
    "title": "Building a Custom MCP Server (File Manager)",
    "industry": "Telecommunications",
    "problem_statement": "A telecom NOC team wants an LLM assistant that can safely read and edit network configuration files. Build a Model Context Protocol (MCP) server that exposes file operations (read, write, edit, search) as tools an LLM client can call.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python mcp SDK",
      "FastAPI",
      "UV package manager"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "MCP architecture (client-server), how to define and expose custom tools to an LLM."
    ],
    "task": "A working MCP server that an LLM client (e.g. Claude Desktop or a custom client) can connect to and use to read/edit network config files on request.",
    "expectedOutcome": [
      "Submit server code + a short demo video/log of the client calling at least 2 tools."
    ],
    "tools": [
      "Python mcp SDK",
      "FastAPI",
      "UV package manager"
    ],
    "steps": [
      "Install the MCP Python SDK",
      "Define tool functions scoped to a config directory",
      "Register tools with the MCP server using decorators",
      "Connect a client and test each tool call"
    ],
    "knowledgeTest": [
      "What problem does MCP solve compared to hardcoding tool integrations?",
      "What is the role of stdio transport in MCP servers?"
    ],
    "submissionInstructions": [
      "Submit server code + a short demo video/log of the client calling at least 2 tools."
    ]
  },
  {
    "id": "genai-13",
    "domain": "generative-ai",
    "title": "Full-Stack MCP Application with FastAPI + Gemini",
    "industry": "Automotive",
    "problem_statement": "An automotive dealer network wants a single API that lets service advisors query vehicle diagnostics via chat. Build a full-stack application where a FastAPI backend connects an MCP client to an MCP server and exposes a /query endpoint powered by Gemini.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "FastAPI",
      "MCP SDK",
      "Gemini API",
      "Python",
      "CORS middleware"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "End-to-end integration of LLMs, MCP tool servers, and REST APIs into a deployable application."
    ],
    "task": "A working API where a POST request to /query triggers Gemini to reason and call MCP diagnostic tools as needed, returning a final structured response.",
    "expectedOutcome": [
      "Submit backend code + Postman screenshots showing /tools and /query working."
    ],
    "tools": [
      "FastAPI",
      "MCP SDK",
      "Gemini API",
      "Python",
      "CORS middleware"
    ],
    "steps": [
      "Build an MCP server with diagnostic-lookup tools",
      "Build an MCP client that discovers and calls tools",
      "Wrap the client in a FastAPI /query endpoint",
      "Add CORS config and test with Postman"
    ],
    "knowledgeTest": [
      "What is the flow of a request from frontend -> FastAPI -> MCP client -> MCP server -> LLM?",
      "Why is async lifecycle management important here?"
    ],
    "submissionInstructions": [
      "Submit backend code + Postman screenshots showing /tools and /query working."
    ]
  },
  {
    "id": "genai-14",
    "domain": "generative-ai",
    "title": "Memory-Aware Chatbot with Mem0 + Vector DB",
    "industry": "Tourism",
    "problem_statement": "A travel booking platform wants its chat concierge to remember a traveler's preferences across trips. Build a chatbot with hybrid memory (short-term conversation + long-term vector-searchable memory) using Mem0 and a vector database.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Mem0",
      "Qdrant/ChromaDB",
      "Groq/Gemini",
      "HuggingFace embeddings"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "How long-term memory retrieval works in agents, and how to combine it with short-term conversational context."
    ],
    "task": "A travel-concierge chatbot that remembers preferences mentioned in earlier sessions and recalls them naturally when planning a later trip.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + a 2-session demo showing the bot recalling a preference."
    ],
    "tools": [
      "Mem0",
      "Qdrant/ChromaDB",
      "Groq/Gemini",
      "HuggingFace embeddings"
    ],
    "steps": [
      "Set up Mem0 with a vector DB backend",
      "On each user message, store relevant travel preferences to long-term memory",
      "On new queries, retrieve relevant memories and inject into the prompt",
      "Add basic rate-limit/backoff handling for API calls"
    ],
    "knowledgeTest": [
      "What's the difference between short-term and long-term memory in an agent?",
      "Why use a vector DB instead of a simple key-value store for memory?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + a 2-session demo showing the bot recalling a preference."
    ]
  },
  {
    "id": "genai-15",
    "domain": "generative-ai",
    "title": "Math Reasoning Agent with Structured JSON Output",
    "industry": "Aerospace",
    "problem_statement": "A flight-ops team needs quick, auditable fuel and load calculations. Build an agent that solves step-by-step quantitative problems using a reasoning-focused LLM and outputs the solution as structured JSON (steps + final answer).",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Groq API",
      "Python",
      "json module"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "Using reasoning-optimized models for multi-step problem solving and enforcing structured, parseable output."
    ],
    "task": "Given a fuel/load calculation word problem, output a JSON object with an array of solution steps and a final numeric answer, saved to a file for the flight log.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + 5 solved problems saved as JSON files."
    ],
    "tools": [
      "Groq API",
      "Python",
      "json module"
    ],
    "steps": [
      "Design a prompt requiring step-by-step reasoning in JSON format",
      "Call the reasoning model with 5 different fuel/load problems",
      "Parse and validate JSON output",
      "Save each solution to a .json file"
    ],
    "knowledgeTest": [
      "Why are reasoning-distilled models better suited for this task than general chat models?",
      "What could go wrong if the model doesn't strictly follow the JSON schema?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + 5 solved problems saved as JSON files."
    ]
  },
  {
    "id": "genai-16",
    "domain": "generative-ai",
    "title": "Dynamic Prompt Templating & Dual-LLM Comparison",
    "industry": "Food & Beverages",
    "problem_statement": "A food brand's R&D team wants to compare how two different LLMs answer nutrition/recipe questions before picking one for their consumer app. Build a chatbot that sends the same user message to two different LLMs (e.g., Gemini and Groq Llama-3.3-70B) using dynamic prompt templates, and displays both responses side by side.",
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
      "How to build reusable prompt templates with system + human messages, and how to swap/compare LLM backends without changing the prompt logic."
    ],
    "task": "Given a nutrition/recipe query, the notebook outputs both models' responses in a clearly labeled, side-by-side format, with persistent chat history across turns.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + a transcript showing 3 user turns with both models' responses."
    ],
    "tools": [
      "LangChain",
      "ChatPromptTemplate",
      "Gemini API",
      "Groq API",
      "Python"
    ],
    "steps": [
      "Set up API keys for both Gemini and Groq",
      "Build one shared ChatPromptTemplate with system + human message slots",
      "Call both models with the same formatted prompt",
      "Store and display alternating responses with chat history"
    ],
    "knowledgeTest": [
      "Why use one shared template for two models instead of separate prompts?",
      "What differences might you expect between Gemini and Groq Llama responses?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + a transcript showing 3 user turns with both models' responses."
    ]
  },
  {
    "id": "genai-17",
    "domain": "generative-ai",
    "title": "Persistent Chat History with Firebase",
    "industry": "QSR (Quick Service Restaurants)",
    "problem_statement": "A QSR chain's order-assistant chatbot should remember a regular customer's usual order across visits and devices. Build a chatbot that stores and retrieves conversation history from Firebase Firestore.",
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
      "Cloud-based persistence for conversational AI, and how to structure conversation data in a NoSQL document database."
    ],
    "task": "A QSR ordering chatbot where closing and reopening the app still recalls the full prior order conversation, loaded from Firestore.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + Firestore console screenshot showing saved messages."
    ],
    "tools": [
      "Firebase Firestore",
      "firebase-admin SDK",
      "LangChain",
      "Python"
    ],
    "steps": [
      "Set up a Firebase project and service account credentials",
      "Write functions to save each message to a Firestore collection",
      "Write a function to load chat history at session start",
      "Test by restarting the notebook and confirming history loads"
    ],
    "knowledgeTest": [
      "Why choose Firestore over local storage (e.g., SQLite) for chat history?",
      "What data model would you use to store messages per user/session?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + Firestore console screenshot showing saved messages."
    ]
  },
  {
    "id": "genai-18",
    "domain": "generative-ai",
    "title": "TypeScript MCP Server (Weather Data)",
    "industry": "Tourism",
    "problem_statement": "A trip-planning assistant needs live weather to warn travelers about their destination. Build a Model Context Protocol server in TypeScript/Node.js that exposes a 'get weather by city' tool, using stdio transport and schema validation.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Node.js",
      "@modelcontextprotocol/sdk",
      "Zod",
      "TypeScript",
      "a public weather API"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "How MCP works outside Python \u2014 server setup in Node.js, schema validation with Zod, and stdio-based client-server communication."
    ],
    "task": "A working MCP server that returns weather data for a traveler's destination city when called by an MCP client, feeding straight into a trip-planning workflow.",
    "expectedOutcome": [
      "Submit server code + a demo log/screenshot of a successful tool call from an MCP client."
    ],
    "tools": [
      "Node.js",
      "@modelcontextprotocol/sdk",
      "Zod",
      "TypeScript",
      "a public weather API"
    ],
    "steps": [
      "Set up a Node.js/TypeScript project with the MCP SDK",
      "Define a Zod schema for the tool's input",
      "Implement the tool function calling a weather API",
      "Register the server with stdio transport and test with an MCP client"
    ],
    "knowledgeTest": [
      "Why is schema validation (Zod) important for tool inputs in MCP?",
      "How does stdio transport differ from an HTTP-based MCP server?"
    ],
    "submissionInstructions": [
      "Submit server code + a demo log/screenshot of a successful tool call from an MCP client."
    ]
  },
  {
    "id": "genai-19",
    "domain": "generative-ai",
    "title": "Web Scraping Agent with Search API Integration",
    "industry": "Retail & E-Commerce",
    "problem_statement": "A retail brand's pricing team wants to track competitor pricing and promotions automatically. Build an agent that takes a research query, searches the web using the Serper API, scrapes the top results, and summarizes findings from multiple sources.",
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
      "How to combine a search API with web scraping and LLM summarization to build a lightweight research agent."
    ],
    "task": "Given a query like 'latest discount trends from competing retailers this quarter,' the notebook returns a summarized report combining data from at least 3 scraped sources.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + one sample query with the final summarized report and source links."
    ],
    "tools": [
      "Serper API",
      "requests/BeautifulSoup",
      "LangChain",
      "Python"
    ],
    "steps": [
      "Call the Serper API to get top search results",
      "Scrape and clean text content from each result URL",
      "Pass combined content to an LLM for summarization",
      "Output a structured summary with source links"
    ],
    "knowledgeTest": [
      "Why use a search API instead of scraping search engine pages directly?",
      "What are the risks/limitations of scraping arbitrary websites?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + one sample query with the final summarized report and source links."
    ]
  },
  {
    "id": "genai-20",
    "domain": "generative-ai",
    "title": "Nested Subgraph Multi-Agent Architecture",
    "industry": "Insurance",
    "problem_statement": "An insurer wants an end-to-end claims-processing assistant: one outer flow that manages the whole claim lifecycle, and an inner flow that specifically handles damage assessment. Build a LangGraph system where a top-level supervisor graph calls a nested subgraph as a single node.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "LangGraph",
      "Python",
      "any LLM API"
    ],
    "estimatedTime": "2 hrs",
    "learn": [
      "How to compose complex agent systems by nesting one StateGraph inside another."
    ],
    "task": "A working two-level graph: an outer claims-supervisor routes to a damage-assessment subgraph node, which internally runs its own multi-step process before returning a result.",
    "expectedOutcome": [
      "Submit notebook (.ipynb) + a diagram of the outer graph + subgraph relationship."
    ],
    "tools": [
      "LangGraph",
      "Python",
      "any LLM API"
    ],
    "steps": [
      "Build an inner subgraph with nodes performing damage research + cost estimation",
      "Compile the subgraph and wrap it as a callable node",
      "Build the outer supervisor graph that routes to the subgraph",
      "Test the full flow end-to-end and log state at each level"
    ],
    "knowledgeTest": [
      "What's the benefit of a subgraph over just adding more nodes to one big graph?",
      "How does state get passed between the outer graph and the subgraph?"
    ],
    "submissionInstructions": [
      "Submit notebook (.ipynb) + a diagram of the outer graph + subgraph relationship."
    ]
  }
];

export const industries = Array.from(new Set(problems.map((p) => p.industry))).sort();

export const getProblem = (id: string) => problems.find((p) => p.id === id);

export const problemsByDomain = (domain: string) =>
  problems.filter((p) => p.domain === domain);
