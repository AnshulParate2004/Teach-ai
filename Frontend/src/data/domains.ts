export type DomainStatus = "live" | "coming-soon";

export interface Domain {
  slug: string;
  name: string;
  icon: "sparkles" | "chart" | "atom" | "blocks";
  description: string;
  problemCount: number;
  status: DomainStatus;
  topics: string[];
}

export const domains: Domain[] = [
  {
    slug: "generative-ai",
    name: "Generative & Agentic AI",
    icon: "sparkles",
    description:
      "Ship production-shaped LLM systems: LCEL chains, RAG pipelines, LangGraph state machines, multi-agent supervisors and MCP servers.",
    problemCount: 20,
    status: "live",
    topics: ["LangChain", "LangGraph", "RAG", "Multi-Agent", "MCP"],
  },
  {
    slug: "data-science",
    name: "Data Science",
    icon: "chart",
    description:
      "Feature engineering, model selection and evaluation on messy, real-world industry datasets.",
    problemCount: 18,
    status: "coming-soon",
    topics: ["EDA", "Modeling", "Evaluation"],
  },
  {
    slug: "quantum-computing",
    name: "Quantum Computing",
    icon: "atom",
    description:
      "Circuit design, variational algorithms and quantum simulation with Qiskit and PennyLane.",
    problemCount: 12,
    status: "coming-soon",
    topics: ["Qiskit", "VQE", "Circuits"],
  },
  {
    slug: "blockchain",
    name: "Blockchain",
    icon: "blocks",
    description:
      "Smart contracts, on-chain data pipelines and protocol security auditing challenges.",
    problemCount: 15,
    status: "coming-soon",
    topics: ["Solidity", "DeFi", "Auditing"],
  },
];

export const getDomain = (slug: string) => domains.find((d) => d.slug === slug);
