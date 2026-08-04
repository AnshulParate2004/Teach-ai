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
    id: "genai-01",
    domain: "generative-ai",
    title: "LCEL Chain Building with LangChain",
    industry: "IT Services",
    problem_statement:
      "Build an LCEL chain that takes a technical topic, generates 3 facts about it, and translates those facts into another language, all in one pipeline.",
    difficulty: "Beginner",
    solved: false,
    tags: ["LangChain", "LCEL", "Prompting"],
    estimatedTime: "45 min",
    learn: [
      "How LangChain Expression Language composes runnables with the pipe operator",
      "Prompt templating and structured output parsing",
      "Chaining two dependent LLM calls without glue code",
    ],
    task: "A global IT services firm publishes internal tech briefs in multiple languages. Automate the first draft: given a topic, produce three verified facts and a translated version of them in a single composable chain.",
    expectedOutcome: [
      "A single runnable chain invoked with `{ topic, language }`",
      "Output containing exactly 3 facts in English and 3 translated facts",
      "No manual string concatenation between the two LLM calls",
    ],
    tools: ["Python 3.10+", "langchain", "langchain-openai", "Google Colab"],
    steps: [
      "Create a prompt template that produces exactly three facts about a topic.",
      "Create a second prompt template that translates arbitrary text into a target language.",
      "Compose both with LCEL using `|` and a `RunnablePassthrough` to carry the language through.",
      "Parse the output with `StrOutputParser` and print the final result.",
      "Invoke the chain for at least 3 different topics and capture the outputs in the notebook.",
    ],
    knowledgeTest: [
      "What does the `|` operator actually construct in LCEL?",
      "When would you use `RunnableParallel` instead of a sequential pipe?",
      "Why is `StrOutputParser` preferable to accessing `.content` directly?",
    ],
    submissionInstructions: [
      "Keep all cell outputs visible — the grader reads executed output.",
      "Name your notebook `genai-01-lcel-chain.ipynb`.",
      "Answer the Knowledge Test questions in a final markdown cell.",
    ],
  },
  {
    id: "genai-04",
    domain: "generative-ai",
    title: "RAG Pipeline with ChromaDB",
    industry: "Healthcare",
    problem_statement:
      "Build a Retrieval-Augmented Generation system that answers clinical questions from a custom protocol document using a vector database.",
    difficulty: "Intermediate",
    solved: true,
    tags: ["RAG", "ChromaDB", "Embeddings"],
    estimatedTime: "2 hrs",
    learn: [
      "Chunking strategies and why they dominate retrieval quality",
      "Embedding models and vector similarity search with ChromaDB",
      "Grounding answers with citations to reduce hallucination",
    ],
    task: "A hospital network wants clinicians to query a 60-page treatment protocol in plain English. Build a RAG pipeline that returns grounded answers with the source section cited.",
    expectedOutcome: [
      "A persisted Chroma collection built from the provided protocol document",
      "A `answer(question)` function returning an answer plus source chunks",
      "Evaluation over the 10 provided sample questions with a short accuracy note",
    ],
    tools: ["langchain", "chromadb", "sentence-transformers", "Google Colab"],
    steps: [
      "Load and clean the protocol document.",
      "Experiment with at least two chunk sizes and record the difference in retrieval quality.",
      "Embed chunks and persist them into ChromaDB.",
      "Build a retriever + prompt + LLM chain that cites the retrieved section.",
      "Run the 10 evaluation questions and comment on failures.",
    ],
    knowledgeTest: [
      "Why does chunk overlap matter for clinical documents?",
      "How does cosine similarity differ from an L2 distance ranking here?",
      "What would you change to support 10,000 documents instead of one?",
    ],
    submissionInstructions: [
      "Include your retrieval evaluation table in the notebook.",
      "Do not hardcode answers — the grader re-runs your cells.",
      "Name your notebook `genai-04-rag-chromadb.ipynb`.",
    ],
    dataset: {
      fileName: "clinical_protocol_v3.pdf",
      size: "2.4 MB",
      url: "#",
    },
  },
  {
    id: "genai-07",
    domain: "generative-ai",
    title: "Stateful Claims Agent with LangGraph",
    industry: "Insurance",
    problem_statement:
      "Model an insurance claim triage workflow as a LangGraph state machine with conditional routing, retries and a human-in-the-loop approval node.",
    difficulty: "Intermediate",
    solved: false,
    tags: ["LangGraph", "State", "Routing"],
    estimatedTime: "2.5 hrs",
    learn: [
      "Graph state schemas and reducers",
      "Conditional edges and cycles for retry logic",
      "Interrupting a graph for human approval and resuming it",
    ],
    task: "An insurer triages claims into auto-approve, manual review, or reject. Build a graph that extracts claim fields, validates them, loops back on missing data, and interrupts before any payout above a threshold.",
    expectedOutcome: [
      "A compiled graph with at least 5 nodes and 2 conditional edges",
      "A visualized graph image rendered in the notebook",
      "Three traced runs: auto-approve, retry loop, human interrupt",
    ],
    tools: ["langgraph", "langchain", "pydantic", "Google Colab"],
    steps: [
      "Define a typed state schema for the claim.",
      "Implement extraction, validation, scoring and decision nodes.",
      "Add a conditional edge that loops back when required fields are missing.",
      "Add an interrupt before the payout node and resume it with a checkpointer.",
      "Render the graph and include all three traced runs.",
    ],
    knowledgeTest: [
      "What is the role of a reducer in a LangGraph state key?",
      "How does a checkpointer make interrupts resumable?",
      "How do you prevent an infinite retry cycle?",
    ],
    submissionInstructions: [
      "Include the rendered graph PNG output cell.",
      "Name your notebook `genai-07-langgraph-claims.ipynb`.",
    ],
    dataset: {
      fileName: "claims_sample_500.csv",
      size: "312 KB",
      url: "#",
    },
  },
  {
    id: "genai-09",
    domain: "generative-ai",
    title: "Supervisor Multi-Agent System",
    industry: "Manufacturing",
    problem_statement:
      "Build a hierarchical multi-agent system where a Supervisor agent routes requests to specialized agents and validates the final output.",
    difficulty: "Advanced",
    solved: false,
    tags: ["Multi-Agent", "LangGraph", "Tools"],
    estimatedTime: "3 hrs",
    learn: [
      "Supervisor routing patterns vs. peer-to-peer agent handoff",
      "Tool-calling agents with constrained scopes",
      "Output validation and re-delegation on failure",
    ],
    task: "A factory operations copilot must answer downtime questions by delegating to a Maintenance agent, an Inventory agent and an Analytics agent, then validate the merged answer before returning it.",
    expectedOutcome: [
      "One supervisor and three specialist agents with distinct toolsets",
      "A routing trace showing which agent handled each sub-task",
      "A validation node that rejects and re-delegates at least once in your demo",
    ],
    tools: ["langgraph", "langchain", "Google Colab"],
    steps: [
      "Define the three specialist agents and their tools.",
      "Implement the supervisor with structured routing output.",
      "Wire delegation edges and a shared message state.",
      "Add a validator node that can send work back to the supervisor.",
      "Demonstrate 3 end-to-end queries with full traces.",
    ],
    knowledgeTest: [
      "Why constrain each specialist to its own tool subset?",
      "What failure modes appear when the supervisor sees the full history?",
      "How would you cap total delegation hops?",
    ],
    submissionInstructions: [
      "Include full routing traces in the outputs.",
      "Name your notebook `genai-09-supervisor-agents.ipynb`.",
    ],
  },
  {
    id: "genai-14",
    domain: "generative-ai",
    title: "Build an MCP Server for Internal Tools",
    industry: "Banking",
    problem_statement:
      "Expose three internal banking tools (balance lookup, transaction search, fraud flag) through a Model Context Protocol server and connect it to an agent client.",
    difficulty: "Advanced",
    solved: false,
    tags: ["MCP", "Tools", "Protocol"],
    estimatedTime: "3 hrs",
    learn: [
      "MCP server anatomy: tools, resources and prompts",
      "Schema-first tool definitions and validation",
      "Connecting an LLM client to an MCP server over stdio",
    ],
    task: "A retail bank wants one protocol layer between its LLM assistants and its internal APIs. Implement an MCP server with three typed tools and prove an agent can use them end to end.",
    expectedOutcome: [
      "A runnable MCP server exposing 3 tools with JSON schemas",
      "A client session listing tools and calling each one",
      "Handled error case for an unauthorized account lookup",
    ],
    tools: ["mcp", "python-sdk", "langchain", "Google Colab"],
    steps: [
      "Scaffold the MCP server and register three tools with typed inputs.",
      "Back each tool with the mock banking dataset.",
      "Start the server and connect a client session.",
      "Drive the tools from an agent and capture the transcript.",
      "Demonstrate graceful failure for invalid input.",
    ],
    knowledgeTest: [
      "How do MCP resources differ from MCP tools?",
      "Why is a schema-first contract safer than free-form function calling?",
      "What should the server never expose to the model?",
    ],
    submissionInstructions: [
      "Include server startup logs and the client transcript.",
      "Name your notebook `genai-14-mcp-server.ipynb`.",
    ],
    dataset: {
      fileName: "mock_bank_accounts.json",
      size: "148 KB",
      url: "#",
    },
  },
];

export const industries = Array.from(new Set(problems.map((p) => p.industry))).sort();

export const getProblem = (id: string) => problems.find((p) => p.id === id);

export const problemsByDomain = (domain: string) =>
  problems.filter((p) => p.domain === domain);
