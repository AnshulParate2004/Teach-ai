// AUTO-GENERATED FILE. DO NOT EDIT.

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface PainPoint { title: string; desc: string; }
export interface RoiStat   { value: string; desc: string; }
export interface Outcome   { title: string; desc: string; }

export interface SimTask {
  number: number;
  title: string;
  description: string;
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
  estimatedTime: string;
  tags: string[];
  learn: string[];
  task: string;
  expectedOutcome: string[];
  tools: string[];
  steps: string[];
  knowledgeTest: string[];
  about_company?: string;
  intro_from_team?: string;
  scenario?: {
    background: string;
    your_role: string[];
    your_goal: string[];
  };
  simulation_tasks?: SimTask[];
  pain_points: PainPoint[];
  roi_stats: RoiStat[];
  outcomes: Outcome[];
  mcqs: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export const problems: Problem[] = [
  {
    "company": "TalentSphere",
    "role": "HR Tech Analyst",
    "title": "HR Skill Gap Detection Agent",
    "industry": "Human Resources",
    "problem_statement": "Optimizing talent acquisition and employee management takes time, deep research, and precise alignment with business requirements. The HR Skill Gap Detection Agent automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: HR Managers, Technical Recruiters, Talent Acquisition Leaders, and HR Tech Analysts.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "TalentSphere is a global leader in human capital management solutions, helping enterprises build, manage, and retain world-class teams. We operate at the intersection of people and technology, providing platforms that streamline talent acquisition, performance management, and compliance reporting.\\n\\nFounded by HR practitioners, TalentSphere understands that employee data is sensitive and contextually rich. We are currently exploring Generative AI to automate manual workflows inside our existing HR systems, acting as intelligent co-pilots that surface insights and flag anomalies before they become problems.\\n\\nOur clients include Fortune 500 companies and rapidly scaling startups who rely on TalentSphere to cut administrative overhead and give HR teams the bandwidth to focus on the work that genuinely requires human judgment.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the primary goal of the HR Skill Gap Detection Agent?",
        "options": [
          "To write code",
          "To compare a resume against a job description",
          "To schedule interviews",
          "To issue payroll"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which Python library is used to interface with the Groq API?",
        "options": [
          "groq",
          "openai",
          "requests",
          "langchain"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "What model are we using for inference with Groq?",
        "options": [
          "gpt-4",
          "llama3-8b-8192",
          "claude-3",
          "gemini-pro"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "How does the agent evaluate the candidate?",
        "options": [
          "By guessing",
          "By passing the resume and job description to the LLM via prompt",
          "By checking LinkedIn",
          "By running Python unit tests"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "What is the role of the system prompt?",
        "options": [
          "To write HTML",
          "To define the persona and constraints of the HR AI",
          "To install pip packages",
          "To connect to a SQL database"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "Why use JSON as the output format?",
        "options": [
          "It looks cool",
          "It is easily parsable by frontend applications",
          "It is required by Python",
          "It is encrypted"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "What happens if a required skill is missing?",
        "options": [
          "The API crashes",
          "The agent outputs it in the missing skills array",
          "The agent writes a rejection email",
          "The agent deletes the resume"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What does temperature=0.0 do?",
        "options": [
          "Makes the output random",
          "Makes the output deterministic and focused",
          "Speeds up the API",
          "Slows down the API"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Who provides the job description input?",
        "options": [
          "The AI generates it",
          "The hiring manager/user",
          "The candidate",
          "Groq"
        ],
        "correctAnswer": 1
      },
      {
        "id": 10,
        "question": "Why use an LLM instead of a keyword search?",
        "options": [
          "Keyword searches don't understand context or synonyms",
          "LLMs are cheaper",
          "LLMs don't need internet",
          "Keyword searches are illegal"
        ],
        "correctAnswer": 0
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive screening",
        "desc": "Recruiters spend days reading resumes manually, missing key skills and delaying critical hiring decisions."
      },
      {
        "title": "Inconsistent evaluations",
        "desc": "Without a unified rubric, candidate scoring varies by reviewer, introducing bias and compliance risk."
      },
      {
        "title": "Missed personalization",
        "desc": "Generic JD-to-resume matching fails to surface nuanced fit, reducing quality-of-hire and increasing attrition."
      },
      {
        "title": "No audit trail",
        "desc": "Manual processes leave no structured log of scoring rationale, creating HR compliance vulnerabilities."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster candidate screening and processing time"
      },
      {
        "value": "50%",
        "desc": "improvement in hiring consistency across reviewers"
      },
      {
        "value": "35%",
        "desc": "increase in quality-of-hire through precision matching"
      },
      {
        "value": "40%",
        "desc": "reduction in HR compliance risk with structured outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Automated Resume Analysis",
        "desc": "Instantly score candidates against job requirements with structured, explainable outputs ready for review."
      },
      {
        "title": "Consistent Evaluation Rubric",
        "desc": "Maintain a unified scoring framework across all candidates, ensuring fairness and compliance."
      },
      {
        "title": "Smarter Candidate Fit",
        "desc": "Surface non-obvious skill matches by analyzing context, not just keyword frequency."
      },
      {
        "title": "Full Audit Visibility",
        "desc": "Track every evaluation decision with structured logs, ready for HR and compliance review."
      }
    ],
    "intro_from_team": "Welcome to the HR Skill Gap Detection Agent Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a HR Tech Analyst and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Human Resources department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a HR Tech Analyst specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the HR Skill Gap Detection Agent.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the HR Skill Gap Detection Agent. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the HR Skill Gap Detection Agent. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the HR Skill Gap Detection Agent. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-01",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Data Analysis",
      "Prompt Engineering",
      "Reporting"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "TalentSphere",
    "role": "HR Automation Intern",
    "title": "Leave & Attendance Query Agent",
    "industry": "Human Resources",
    "problem_statement": "Optimizing talent acquisition and employee management takes time, deep research, and precise alignment with business requirements. The Leave & Attendance Query Agent automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: HR Managers, Technical Recruiters, Talent Acquisition Leaders, and HR Automation Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "TalentSphere is a global leader in human capital management solutions, helping enterprises build, manage, and retain world-class teams. We operate at the intersection of people and technology, providing platforms that streamline talent acquisition, performance management, and compliance reporting.\\n\\nFounded by HR practitioners, TalentSphere understands that employee data is sensitive and contextually rich. We are currently exploring Generative AI to automate manual workflows inside our existing HR systems, acting as intelligent co-pilots that surface insights and flag anomalies before they become problems.\\n\\nOur clients include Fortune 500 companies and rapidly scaling startups who rely on TalentSphere to cut administrative overhead and give HR teams the bandwidth to focus on the work that genuinely requires human judgment.",
    "mcqs": [
      {
        "id": 1,
        "question": "What data does the Leave Query Agent process?",
        "options": [
          "Financial statements",
          "Employee queries and mock HR records",
          "System logs",
          "Resumes"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "If an employee asks about sick days, where does the agent look?",
        "options": [
          "Google",
          "The provided HR record JSON",
          "The company website",
          "Wikipedia"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "Why must the agent's tone be polite?",
        "options": [
          "HR policies require professional internal communication",
          "The API forces politeness",
          "It saves tokens",
          "It processes faster"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "How is the employee record passed to the LLM?",
        "options": [
          "Via a SQL query",
          "Embedded in the user prompt using an f-string",
          "Through a file upload",
          "Via a REST GET request"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "What is the Groq API key used for?",
        "options": [
          "Encrypting data",
          "Authenticating the client with Groq's servers",
          "Unlocking the PC",
          "Logging into HR systems"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What happens if the employee asks about a policy not in the record?",
        "options": [
          "The agent guesses",
          "The agent should state it doesn't have that information based on the prompt constraints",
          "The API crashes",
          "The agent searches the web"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Which class is instantiated to start the Groq client?",
        "options": [
          "Groq()",
          "OpenAI()",
          "Client()",
          "Agent()"
        ],
        "correctAnswer": 0
      },
      {
        "id": 8,
        "question": "What does 'temperature' control in the Groq completion?",
        "options": [
          "Speed",
          "Randomness/Creativity",
          "Cost",
          "Token limit"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Why is this problem statement easy for an intern?",
        "options": [
          "It uses complex LangGraph architecture",
          "It relies on a simple prompt and direct data passing without RAG",
          "It requires 10 years of experience",
          "It uses C++"
        ],
        "correctAnswer": 1
      },
      {
        "id": 10,
        "question": "What is the expected output of the Leave Agent?",
        "options": [
          "A python script",
          "A polite text response answering the query",
          "A PDF document",
          "An audio file"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive screening",
        "desc": "Recruiters spend days reading resumes manually, missing key skills and delaying critical hiring decisions."
      },
      {
        "title": "Inconsistent evaluations",
        "desc": "Without a unified rubric, candidate scoring varies by reviewer, introducing bias and compliance risk."
      },
      {
        "title": "Missed personalization",
        "desc": "Generic JD-to-resume matching fails to surface nuanced fit, reducing quality-of-hire and increasing attrition."
      },
      {
        "title": "No audit trail",
        "desc": "Manual processes leave no structured log of scoring rationale, creating HR compliance vulnerabilities."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster candidate screening and processing time"
      },
      {
        "value": "50%",
        "desc": "improvement in hiring consistency across reviewers"
      },
      {
        "value": "35%",
        "desc": "increase in quality-of-hire through precision matching"
      },
      {
        "value": "40%",
        "desc": "reduction in HR compliance risk with structured outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Automated Resume Analysis",
        "desc": "Instantly score candidates against job requirements with structured, explainable outputs ready for review."
      },
      {
        "title": "Consistent Evaluation Rubric",
        "desc": "Maintain a unified scoring framework across all candidates, ensuring fairness and compliance."
      },
      {
        "title": "Smarter Candidate Fit",
        "desc": "Surface non-obvious skill matches by analyzing context, not just keyword frequency."
      },
      {
        "title": "Full Audit Visibility",
        "desc": "Track every evaluation decision with structured logs, ready for HR and compliance review."
      }
    ],
    "intro_from_team": "Welcome to the Leave & Attendance Query Agent Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a HR Automation Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Human Resources department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a HR Automation Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Leave & Attendance Query Agent.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Leave & Attendance Query Agent. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Leave & Attendance Query Agent. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Leave & Attendance Query Agent. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-02",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Conversational AI",
      "Chatbot Design",
      "Problem Solving"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "ProcureCore",
    "role": "Procurement Analytics Intern",
    "title": "Procurement Renewal Alert Agent",
    "industry": "Procurement",
    "problem_statement": "Optimizing vendor management and contract renewals takes time, deep research, and precise alignment with business requirements. The Procurement Renewal Alert Agent automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Procurement Managers, Vendor Relations Leads, Operations Directors, and Procurement Analytics Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "ProcureCore is a premier supply chain and procurement technology provider, focused on optimizing contract tracking, vendor evaluation, and spend analytics. We help organizations gain visibility into their global supply chains and extract actionable intelligence from complex operational data.\\n\\nWe were built by supply chain consultants who spent years watching organizations lose millions to missed contract renewals, rogue spend, and manual data entry errors. ProcureCore exists to make those problems structurally impossible.\\n\\nAs we embrace the next generation of AI, we are building automated agents to process vendor transactions faster, reduce contract risk exposure, and cut audit preparation time from weeks to hours.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the trigger condition for the Procurement Agent?",
        "options": [
          "A new employee joining",
          "The contract expiration date approaching",
          "A change in weather",
          "A server crash"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What two inputs are required for the agent to make a decision?",
        "options": [
          "Contract details and the current date",
          "Vendor name and CEO name",
          "Cost and Profit",
          "Time and Space"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "How does the agent output its decision?",
        "options": [
          "By sending a real email",
          "By outputting a structured JSON with a boolean 'send_alert' flag",
          "By printing a PDF",
          "By deleting the contract"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What role does the 'reason' field play in the output?",
        "options": [
          "It justifies why the alert was sent or not",
          "It causes a syntax error",
          "It encrypts the message",
          "It pays the vendor"
        ],
        "correctAnswer": 0
      },
      {
        "id": 5,
        "question": "What model architecture powers LLaMA-3?",
        "options": [
          "Transformer",
          "CNN",
          "RNN",
          "LSTM"
        ],
        "correctAnswer": 0
      },
      {
        "id": 6,
        "question": "Why use Groq for this task?",
        "options": [
          "It is slow",
          "It provides ultra-fast LPU inference for quick decisions",
          "It doesn't support Python",
          "It only generates images"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "What is a system prompt?",
        "options": [
          "A Windows command line",
          "The foundational instruction that sets the AI's behavior",
          "A Python error",
          "A type of JSON"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "If the contract expires in 3 years, what should 'send_alert' be?",
        "options": [
          "True",
          "False",
          "Null",
          "Error"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "How do we pass the current date to the prompt?",
        "options": [
          "The LLM always knows the current date",
          "We inject it as a string variable into the prompt",
          "We ask the user",
          "We use a time machine"
        ],
        "correctAnswer": 1
      },
      {
        "id": 10,
        "question": "What does the json.dumps() function do in the fallback response?",
        "options": [
          "Deletes JSON",
          "Converts a Python dictionary into a JSON formatted string",
          "Parses XML",
          "Installs packages"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Missed renewal deadlines",
        "desc": "Tracking hundreds of vendor contracts manually leads to costly auto-renewals on unfavorable terms."
      },
      {
        "title": "Inconsistent vendor scoring",
        "desc": "Without a standard rubric, vendor evaluations vary in quality, creating procurement blind spots."
      },
      {
        "title": "Slow RFP processing",
        "desc": "Manual comparison of vendor bids takes weeks, delaying projects and stalling operations."
      },
      {
        "title": "No performance history",
        "desc": "Teams lack centralized vendor performance data, repeating past mistakes with underperforming suppliers."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster contract review and automated renewal alerting"
      },
      {
        "value": "50%",
        "desc": "reduction in missed renewal deadlines and costly overruns"
      },
      {
        "value": "35%",
        "desc": "improvement in vendor selection quality and consistency"
      },
      {
        "value": "40%",
        "desc": "decrease in time spent on manual RFP comparisons"
      }
    ],
    "outcomes": [
      {
        "title": "Proactive Renewal Alerts",
        "desc": "Automatically monitor contract timelines and surface upcoming renewals before they become problems."
      },
      {
        "title": "Standardized Vendor Scoring",
        "desc": "Apply a consistent evaluation rubric across all vendor bids to ensure fair and defensible decisions."
      },
      {
        "title": "Faster RFP Analysis",
        "desc": "Automatically parse and compare vendor proposals, cutting analysis time from weeks to hours."
      },
      {
        "title": "Centralized Vendor History",
        "desc": "Maintain a structured log of all vendor performance data to inform future procurement decisions."
      }
    ],
    "intro_from_team": "Welcome to the Procurement Renewal Alert Agent Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Procurement Analytics Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Procurement department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Procurement Analytics Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Procurement Renewal Alert Agent.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Procurement Renewal Alert Agent. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Procurement Renewal Alert Agent. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Procurement Renewal Alert Agent. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-03",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Process Automation",
      "Notification Design",
      "Data Extraction"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "RevAccelerate",
    "role": "Sales Operations Intern",
    "title": "AI Proposal Writer Agent",
    "industry": "Sales",
    "problem_statement": "Optimizing client outreach and proposal drafting takes time, deep research, and precise alignment with business requirements. The AI Proposal Writer Agent automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Business Development Managers, Sales Leaders, Bid Managers, and Sales Operations Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "RevAccelerate is a cutting-edge sales enablement platform designed to help revenue teams scale their operations. From intelligent proposals to deal-room intelligence, our solutions operate as a force multiplier for every quota-carrying professional.\\n\\nWe integrate deeply with leading CRMs like Salesforce and HubSpot to provide context-aware, deal-specific insights. RevAccelerate is committed to ensuring every outbound communication is grounded in accurate data and calibrated to a brand's unique voice.\\n\\nTo stay ahead of the curve, we are integrating autonomous AI agents to further reduce proposal preparation time, increase outbound personalization at scale, and drive measurable improvements in win rates.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the main output of the AI Proposal Writer?",
        "options": [
          "A code snippet",
          "A professional business proposal draft",
          "An image of a contract",
          "A SQL database"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which two inputs are cross-referenced by the agent?",
        "options": [
          "Client requirements and company offerings",
          "Stock prices and weather",
          "Employee records and payroll",
          "Server logs and metrics"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why is generative AI well-suited for proposal writing?",
        "options": [
          "It can do complex math",
          "It excels at natural language generation and synthesizing information",
          "It can compile C++ code",
          "It is a relational database"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "What tone should the system prompt enforce?",
        "options": [
          "Sarcastic",
          "Professional and persuasive",
          "Robotic",
          "Angry"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "How does the Groq API handle the chat format?",
        "options": [
          "Using an array of message objects with 'role' and 'content'",
          "Using a single massive string",
          "Using binary files",
          "Using XML"
        ],
        "correctAnswer": 0
      },
      {
        "id": 6,
        "question": "What does the 'user' role represent in the API call?",
        "options": [
          "The AI's identity",
          "The input prompt from the human/system",
          "The system administrator",
          "The database"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "How should estimated costs be handled in the proposal?",
        "options": [
          "Ignored",
          "Calculated based on the provided company offerings",
          "Randomly guessed",
          "Hidden from the client"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens if a client requests a service the company doesn't offer?",
        "options": [
          "The agent should politely state the limitation or omit it based on instructions",
          "The API crashes",
          "The agent invents a service",
          "The computer shuts down"
        ],
        "correctAnswer": 0
      },
      {
        "id": 9,
        "question": "What is LLaMA-3?",
        "options": [
          "An animal",
          "An open-weight LLM by Meta",
          "A Google product",
          "A database"
        ],
        "correctAnswer": 1
      },
      {
        "id": 10,
        "question": "Why use temperature > 0 for proposal writing?",
        "options": [
          "To make it crash",
          "To allow for creative and varied phrasing in the draft",
          "To make it strictly mathematical",
          "To save tokens"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive proposal creation",
        "desc": "Teams spend days collecting data, aligning inputs, and formatting content, delaying submissions and straining deadlines."
      },
      {
        "title": "Inconsistent messaging and tone",
        "desc": "Without a unified knowledge source, proposals vary in quality, tone, and compliance with brand guidelines."
      },
      {
        "title": "Missed personalization",
        "desc": "Manual processes lead to generic proposals that fail to reflect client-specific pain points, reducing win rates."
      },
      {
        "title": "Difficulty tracking past proposals",
        "desc": "Teams lack visibility into proposal performance, forcing them to start from scratch each time."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster proposal turnaround, reducing manual writing time"
      },
      {
        "value": "50%",
        "desc": "improvement in proposal consistency and brand compliance"
      },
      {
        "value": "35%",
        "desc": "higher win rate through personalized, insight-backed proposals"
      },
      {
        "value": "40%",
        "desc": "reduction in review cycles with accurate near-final drafts"
      }
    ],
    "outcomes": [
      {
        "title": "Rapid Proposal Generation",
        "desc": "Generate complete, well-structured drafts using CRM data and past deals \u2014 ready for human fine-tuning."
      },
      {
        "title": "Brand-consistent Messaging",
        "desc": "Maintain tone, structure, and compliance across all proposals with a central AI knowledge base."
      },
      {
        "title": "Smarter Personalization",
        "desc": "Automatically adapt content to each client's priorities, industry context, and past engagement history."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track proposal metrics, analyze win patterns, and reuse high-performing templates for future bids."
      }
    ],
    "intro_from_team": "Welcome to the AI Proposal Writer Agent Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Sales Operations Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Sales department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Sales Operations Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the AI Proposal Writer Agent.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the AI Proposal Writer Agent. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the AI Proposal Writer Agent. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the AI Proposal Writer Agent. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-04",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Generative AI",
      "Business Writing",
      "Template Creation"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "GlobalTech Solutions",
    "role": "Credit Risk Intern",
    "title": "Bank Loan Application Reviewer",
    "industry": "Banking",
    "problem_statement": "Optimizing loan application reviews and risk assessment takes time, deep research, and precise alignment with business requirements. The Bank Loan Application Reviewer automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Credit Risk Managers, Loan Officers, Compliance Directors, and Credit Risk Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "GlobalTech Solutions is an enterprise software provider focused on optimizing high-volume, repetitive, and judgment-intensive workflows so teams can focus on what only humans can do.\\n\\nFounded by seasoned industry practitioners, GlobalTech brings deep operational expertise to every product. We are known for building production-grade solutions that are auditable, explainable, and safe.\\n\\nTrusted by over 200 enterprises, GlobalTech is now integrating cutting-edge LLM engineering to help our clients achieve measurable ROI through AI automation. This simulation gives you a front-row seat to our work.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the primary function of this agent?",
        "options": [
          "To issue credit cards",
          "To evaluate loan applications against bank policy",
          "To print money",
          "To open accounts"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "What is a 'Debt-to-Income' ratio?",
        "options": [
          "Total debt divided by total income",
          "Income minus debt",
          "Debt multiplied by income",
          "A random number"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "If the policy requires a score of 620 and the user has 580, what should the agent do?",
        "options": [
          "Approve the loan",
          "Deny the loan",
          "Ignore the policy",
          "Ask the user to pay a bribe"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "Why must the agent output JSON?",
        "options": [
          "Because English is hard",
          "So the banking software can easily parse the 'Approve/Deny' status",
          "Because it is required by law",
          "To save API credits"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "What is a risk of using AI for loan approvals?",
        "options": [
          "It is too fast",
          "Hallucinations or algorithmic bias",
          "It uses too much electricity",
          "It generates images"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "How do we mitigate hallucinations in this task?",
        "options": [
          "By setting temperature to 0.0 and strictly defining the policy in the prompt",
          "By setting temperature to 1.0",
          "By using a smaller model",
          "By not using a system prompt"
        ],
        "correctAnswer": 0
      },
      {
        "id": 7,
        "question": "What data is injected into the user prompt?",
        "options": [
          "The bank's physical address",
          "The applicant's financial data and the bank policy",
          "The weather",
          "The stock market ticker"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What does the 'explanation' field provide?",
        "options": [
          "The meaning of life",
          "The logical reasoning behind the approval or denial",
          "A Python stack trace",
          "The API key"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which object contains the generated text in the Groq response?",
        "options": [
          "response.text",
          "response.choices[0].message.content",
          "response.data",
          "response.json"
        ],
        "correctAnswer": 1
      },
      {
        "id": 10,
        "question": "Why is this a good use case for an intern?",
        "options": [
          "It requires modifying banking mainframes",
          "It demonstrates how to apply business logic constraints to an LLM",
          "It is impossible",
          "It doesn't use AI"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Slow manual underwriting",
        "desc": "Manual financial audits take hours per application, creating bottlenecks that delay approvals and frustrate customers."
      },
      {
        "title": "Inconsistent risk scoring",
        "desc": "Human error in calculating debt-to-income ratios and risk profiles leads to costly compliance violations."
      },
      {
        "title": "Regulatory compliance pressure",
        "desc": "Keeping up with changing lending regulations manually increases audit risk and slows operational pace."
      },
      {
        "title": "No standardized audit trail",
        "desc": "Unstructured manual reviews leave gaps in documentation, creating vulnerabilities during regulatory audits."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster loan application processing and underwriting cycle"
      },
      {
        "value": "50%",
        "desc": "reduction in human error during financial risk assessment"
      },
      {
        "value": "35%",
        "desc": "improvement in regulatory compliance and audit readiness"
      },
      {
        "value": "40%",
        "desc": "decrease in manual review time per application"
      }
    ],
    "outcomes": [
      {
        "title": "Instant Risk Scoring",
        "desc": "Evaluate applicant financial data against banking policy in seconds to generate structured, explainable risk scores."
      },
      {
        "title": "Regulatory Compliance",
        "desc": "Automatically align every decision with current lending regulations, reducing audit exposure."
      },
      {
        "title": "Consistent Underwriting",
        "desc": "Apply identical logic to every application, eliminating evaluator variance and improving fairness."
      },
      {
        "title": "Full Audit Trail",
        "desc": "Generate structured decision logs for every application, ready for regulatory review at any time."
      }
    ],
    "intro_from_team": "Welcome to the Bank Loan Application Reviewer Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Credit Risk Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Banking department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Credit Risk Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Bank Loan Application Reviewer.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Bank Loan Application Reviewer. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Bank Loan Application Reviewer. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Bank Loan Application Reviewer. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-05",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Document Analysis",
      "Risk Assessment",
      "AI Workflow"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "LedgerIQ",
    "role": "Fraud Prevention Analyst",
    "title": "Financial Fraud Detection AI",
    "industry": "Finance",
    "problem_statement": "Optimizing financial auditing and fraud detection takes time, deep research, and precise alignment with business requirements. The Financial Fraud Detection AI automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Fraud Analysts, Financial Controllers, Risk Managers, and Fraud Prevention Analysts.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "LedgerIQ provides institutional-grade financial analytics and enterprise resource planning solutions. Our platforms streamline financial modeling, anomaly detection, regulatory reporting, and cash flow forecasting \u2014 converting raw ledger data into boardroom-ready intelligence.\\n\\nBuilt alongside CFOs and FP&A directors, LedgerIQ understands that financial outputs must be defensible, traceable, and compliant. Every computation must be logged, and every assumption must be auditable down to the source transaction.\\n\\nWe are currently pioneering AI automation within our financial stack to help our clients reduce month-end close cycles and achieve near-zero manual reconciliation errors, allowing finance teams to focus on strategy.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Financial Fraud Detection AI?",
        "options": [
          "Write code",
          "Automate workflows in Finance",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Financial Fraud Detection AI benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Delayed fraud detection",
        "desc": "Manually sifting through thousands of transactions makes it impossible to catch anomalies in real time, causing massive losses."
      },
      {
        "title": "High false positive rates",
        "desc": "Overly broad rule-based systems flag legitimate transactions, damaging customer trust and increasing investigation costs."
      },
      {
        "title": "Scalability bottlenecks",
        "desc": "As transaction volumes grow, manual review teams cannot scale, leaving financial exposure uncovered."
      },
      {
        "title": "No behavioral context",
        "desc": "Static rules miss sophisticated fraud patterns that only emerge when analyzed against historical customer behavior."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster fraud detection across large transaction datasets"
      },
      {
        "value": "50%",
        "desc": "reduction in false positives, protecting legitimate customers"
      },
      {
        "value": "35%",
        "desc": "improvement in fraud detection accuracy with behavioral analysis"
      },
      {
        "value": "40%",
        "desc": "decrease in fraud investigation resolution time"
      }
    ],
    "outcomes": [
      {
        "title": "Real-Time Anomaly Detection",
        "desc": "Continuously monitor transactions and flag suspicious patterns before they compound into significant losses."
      },
      {
        "title": "Reduced False Positives",
        "desc": "Apply contextual behavioral analysis to distinguish legitimate edge cases from genuine fraud attempts."
      },
      {
        "title": "Infinite Scalability",
        "desc": "Process millions of transactions without adding manual review headcount as your business grows."
      },
      {
        "title": "Explainable Alerts",
        "desc": "Generate structured fraud reports with clear rationale, enabling analysts to act quickly and confidently."
      }
    ],
    "intro_from_team": "Welcome to the Financial Fraud Detection AI Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Fraud Prevention Analyst and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Finance department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Fraud Prevention Analyst specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Financial Fraud Detection AI.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Financial Fraud Detection AI. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Financial Fraud Detection AI. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Financial Fraud Detection AI. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-06",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "GlobalTech Solutions",
    "role": "Claims Processing Intern",
    "title": "Insurance Claim Status Agent",
    "industry": "Insurance",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The Insurance Claim Status Agent automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and Claims Processing Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "GlobalTech Solutions is an enterprise software provider focused on optimizing high-volume, repetitive, and judgment-intensive workflows so teams can focus on what only humans can do.\\n\\nFounded by seasoned industry practitioners, GlobalTech brings deep operational expertise to every product. We are known for building production-grade solutions that are auditable, explainable, and safe.\\n\\nTrusted by over 200 enterprises, GlobalTech is now integrating cutting-edge LLM engineering to help our clients achieve measurable ROI through AI automation. This simulation gives you a front-row seat to our work.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Insurance Claim Status Agent?",
        "options": [
          "Write code",
          "Automate workflows in Insurance",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Insurance Claim Status Agent benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the Insurance Claim Status Agent Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Claims Processing Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Insurance department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Claims Processing Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Insurance Claim Status Agent.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Insurance Claim Status Agent. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Insurance Claim Status Agent. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Insurance Claim Status Agent. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-07",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "MarketPulse",
    "role": "Content Marketing Intern",
    "title": "Social Media Post Generator",
    "industry": "Marketing",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The Social Media Post Generator automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and Content Marketing Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "MarketPulse is an advanced marketing intelligence platform that helps brands move from campaign intuition to data-driven, personalized execution. Our tools manage content workflows, campaign analytics, audience segmentation, and competitive monitoring.\\n\\nBuilt for marketers by marketers, MarketPulse connects directly to major ad networks, analytics tools, and CMS platforms to ensure every campaign is grounded in real performance data \u2014 not guesswork.\\n\\nWe are currently launching AI-driven automation agents to help marketing teams ship campaigns faster, achieve deeper personalization at scale, and spend more time on creative strategy rather than manual reporting.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Social Media Post Generator?",
        "options": [
          "Write code",
          "Automate workflows in Marketing",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Social Media Post Generator benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the Social Media Post Generator Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Content Marketing Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Marketing department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Content Marketing Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Social Media Post Generator.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Social Media Post Generator. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Social Media Post Generator. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Social Media Post Generator. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-08",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "GlobalTech Solutions",
    "role": "Sales Tech Intern",
    "title": "Sales Lead Qualifier Agent",
    "industry": "Sales Operations",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The Sales Lead Qualifier Agent automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and Sales Tech Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "GlobalTech Solutions is an enterprise software provider focused on optimizing high-volume, repetitive, and judgment-intensive workflows so teams can focus on what only humans can do.\\n\\nFounded by seasoned industry practitioners, GlobalTech brings deep operational expertise to every product. We are known for building production-grade solutions that are auditable, explainable, and safe.\\n\\nTrusted by over 200 enterprises, GlobalTech is now integrating cutting-edge LLM engineering to help our clients achieve measurable ROI through AI automation. This simulation gives you a front-row seat to our work.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Sales Lead Qualifier Agent?",
        "options": [
          "Write code",
          "Automate workflows in Sales Operations",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Sales Lead Qualifier Agent benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the Sales Lead Qualifier Agent Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Sales Tech Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Sales Operations department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Sales Tech Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Sales Lead Qualifier Agent.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Sales Lead Qualifier Agent. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Sales Lead Qualifier Agent. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Sales Lead Qualifier Agent. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-09",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "LexGuard",
    "role": "Legal Ops Intern",
    "title": "Legal NDA Review Agent",
    "industry": "Legal",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The Legal NDA Review Agent automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and Legal Ops Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "LexGuard develops sophisticated legal operations software tailored for in-house counsel and compliance teams. Our platforms accelerate contract review, due diligence, and policy drafting by organizing structured data from unstructured legal texts.\\n\\nWe do not replace legal expertise. We amplify it. LexGuard aims to surface what matters so that lawyers can focus their energy on judgment, negotiation, and strategic advisory rather than document-level extraction.\\n\\nBy incorporating AI agents into our ecosystem, LexGuard helps legal teams process contracts faster, reduce outside counsel spend, and enter every transaction with a clearer, quantified view of risk.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Legal NDA Review Agent?",
        "options": [
          "Write code",
          "Automate workflows in Legal",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Legal NDA Review Agent benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the Legal NDA Review Agent Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Legal Ops Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Legal department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Legal Ops Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Legal NDA Review Agent.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Legal NDA Review Agent. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Legal NDA Review Agent. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Legal NDA Review Agent. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-10",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "GlobalTech Solutions",
    "role": "E-Commerce Ops Intern",
    "title": "Refund Processing Agent",
    "industry": "E-Commerce",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The Refund Processing Agent automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and E-Commerce Ops Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "GlobalTech Solutions is an enterprise software provider focused on optimizing high-volume, repetitive, and judgment-intensive workflows so teams can focus on what only humans can do.\\n\\nFounded by seasoned industry practitioners, GlobalTech brings deep operational expertise to every product. We are known for building production-grade solutions that are auditable, explainable, and safe.\\n\\nTrusted by over 200 enterprises, GlobalTech is now integrating cutting-edge LLM engineering to help our clients achieve measurable ROI through AI automation. This simulation gives you a front-row seat to our work.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Refund Processing Agent?",
        "options": [
          "Write code",
          "Automate workflows in E-Commerce",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Refund Processing Agent benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the Refund Processing Agent Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a E-Commerce Ops Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the E-Commerce department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a E-Commerce Ops Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Refund Processing Agent.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Refund Processing Agent. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Refund Processing Agent. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Refund Processing Agent. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-11",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "GlobalTech Solutions",
    "role": "Customer Insights Intern",
    "title": "Feedback Sentiment Analyzer",
    "industry": "Customer Success",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The Feedback Sentiment Analyzer automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and Customer Insights Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "GlobalTech Solutions is an enterprise software provider focused on optimizing high-volume, repetitive, and judgment-intensive workflows so teams can focus on what only humans can do.\\n\\nFounded by seasoned industry practitioners, GlobalTech brings deep operational expertise to every product. We are known for building production-grade solutions that are auditable, explainable, and safe.\\n\\nTrusted by over 200 enterprises, GlobalTech is now integrating cutting-edge LLM engineering to help our clients achieve measurable ROI through AI automation. This simulation gives you a front-row seat to our work.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Feedback Sentiment Analyzer?",
        "options": [
          "Write code",
          "Automate workflows in Customer Success",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Feedback Sentiment Analyzer benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the Feedback Sentiment Analyzer Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Customer Insights Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Customer Success department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Customer Insights Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Feedback Sentiment Analyzer.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Feedback Sentiment Analyzer. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Feedback Sentiment Analyzer. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Feedback Sentiment Analyzer. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-12",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "GlobalTech Solutions",
    "role": "Logistics Analyst",
    "title": "Inventory Alert Agent",
    "industry": "Supply Chain",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The Inventory Alert Agent automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and Logistics Analysts.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "GlobalTech Solutions is an enterprise software provider focused on optimizing high-volume, repetitive, and judgment-intensive workflows so teams can focus on what only humans can do.\\n\\nFounded by seasoned industry practitioners, GlobalTech brings deep operational expertise to every product. We are known for building production-grade solutions that are auditable, explainable, and safe.\\n\\nTrusted by over 200 enterprises, GlobalTech is now integrating cutting-edge LLM engineering to help our clients achieve measurable ROI through AI automation. This simulation gives you a front-row seat to our work.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Inventory Alert Agent?",
        "options": [
          "Write code",
          "Automate workflows in Supply Chain",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Inventory Alert Agent benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the Inventory Alert Agent Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Logistics Analyst and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Supply Chain department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Logistics Analyst specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Inventory Alert Agent.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Inventory Alert Agent. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Inventory Alert Agent. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Inventory Alert Agent. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-13",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "GlobalTech Solutions",
    "role": "PropTech Intern",
    "title": "Property Matcher Agent",
    "industry": "Real Estate",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The Property Matcher Agent automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and PropTech Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "GlobalTech Solutions is an enterprise software provider focused on optimizing high-volume, repetitive, and judgment-intensive workflows so teams can focus on what only humans can do.\\n\\nFounded by seasoned industry practitioners, GlobalTech brings deep operational expertise to every product. We are known for building production-grade solutions that are auditable, explainable, and safe.\\n\\nTrusted by over 200 enterprises, GlobalTech is now integrating cutting-edge LLM engineering to help our clients achieve measurable ROI through AI automation. This simulation gives you a front-row seat to our work.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Property Matcher Agent?",
        "options": [
          "Write code",
          "Automate workflows in Real Estate",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Property Matcher Agent benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the Property Matcher Agent Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a PropTech Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Real Estate department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a PropTech Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Property Matcher Agent.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Property Matcher Agent. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Property Matcher Agent. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Property Matcher Agent. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-14",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "CareBridge Health",
    "role": "Healthcare Admin Intern",
    "title": "Appointment Scheduler",
    "industry": "Healthcare",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The Appointment Scheduler automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and Healthcare Admin Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "CareBridge Health provides secure, scalable administrative solutions for healthcare organizations. We streamline clinical documentation, patient communication, and compliance workflows without compromising the privacy, accuracy, or empathy that healthcare demands.\\n\\nOur platforms are strictly HIPAA-compliant and integrate seamlessly with leading EHR systems including Epic and Cerner. We ensure that every digital interaction is auditable and every patient flag is explainable.\\n\\nCareBridge Health is actively developing AI agents to reduce the administrative burden on clinicians, accelerate prior authorization cycles, and improve patient satisfaction through timely, accurate outreach.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Appointment Scheduler?",
        "options": [
          "Write code",
          "Automate workflows in Healthcare",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Appointment Scheduler benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the Appointment Scheduler Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Healthcare Admin Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Healthcare department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Healthcare Admin Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Appointment Scheduler.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Appointment Scheduler. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Appointment Scheduler. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Appointment Scheduler. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-15",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "GlobalTech Solutions",
    "role": "Accounting Automation Intern",
    "title": "Expense Report Summarizer",
    "industry": "Accounting",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The Expense Report Summarizer automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and Accounting Automation Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "GlobalTech Solutions is an enterprise software provider focused on optimizing high-volume, repetitive, and judgment-intensive workflows so teams can focus on what only humans can do.\\n\\nFounded by seasoned industry practitioners, GlobalTech brings deep operational expertise to every product. We are known for building production-grade solutions that are auditable, explainable, and safe.\\n\\nTrusted by over 200 enterprises, GlobalTech is now integrating cutting-edge LLM engineering to help our clients achieve measurable ROI through AI automation. This simulation gives you a front-row seat to our work.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Expense Report Summarizer?",
        "options": [
          "Write code",
          "Automate workflows in Accounting",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Expense Report Summarizer benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the Expense Report Summarizer Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Accounting Automation Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Accounting department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Accounting Automation Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Expense Report Summarizer.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Expense Report Summarizer. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Expense Report Summarizer. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Expense Report Summarizer. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-16",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "GlobalTech Solutions",
    "role": "Recruiting Coordinator",
    "title": "Interview Scheduling Assistant",
    "industry": "Talent Acquisition",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The Interview Scheduling Assistant automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and Recruiting Coordinators.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "GlobalTech Solutions is an enterprise software provider focused on optimizing high-volume, repetitive, and judgment-intensive workflows so teams can focus on what only humans can do.\\n\\nFounded by seasoned industry practitioners, GlobalTech brings deep operational expertise to every product. We are known for building production-grade solutions that are auditable, explainable, and safe.\\n\\nTrusted by over 200 enterprises, GlobalTech is now integrating cutting-edge LLM engineering to help our clients achieve measurable ROI through AI automation. This simulation gives you a front-row seat to our work.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Interview Scheduling Assistant?",
        "options": [
          "Write code",
          "Automate workflows in Talent Acquisition",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Interview Scheduling Assistant benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the Interview Scheduling Assistant Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Recruiting Coordinator and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Talent Acquisition department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Recruiting Coordinator specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Interview Scheduling Assistant.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Interview Scheduling Assistant. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Interview Scheduling Assistant. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Interview Scheduling Assistant. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-17",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "GlobalTech Solutions",
    "role": "Finance Operations Intern",
    "title": "Vendor Invoice Extractor",
    "industry": "Accounts Payable",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The Vendor Invoice Extractor automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and Finance Operations Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "GlobalTech Solutions is an enterprise software provider focused on optimizing high-volume, repetitive, and judgment-intensive workflows so teams can focus on what only humans can do.\\n\\nFounded by seasoned industry practitioners, GlobalTech brings deep operational expertise to every product. We are known for building production-grade solutions that are auditable, explainable, and safe.\\n\\nTrusted by over 200 enterprises, GlobalTech is now integrating cutting-edge LLM engineering to help our clients achieve measurable ROI through AI automation. This simulation gives you a front-row seat to our work.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Vendor Invoice Extractor?",
        "options": [
          "Write code",
          "Automate workflows in Accounts Payable",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Vendor Invoice Extractor benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the Vendor Invoice Extractor Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Finance Operations Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Accounts Payable department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Finance Operations Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Vendor Invoice Extractor.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Vendor Invoice Extractor. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Vendor Invoice Extractor. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Vendor Invoice Extractor. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-18",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "GlobalTech Solutions",
    "role": "SEO Specialist Intern",
    "title": "SEO Keyword Suggestion Agent",
    "industry": "Digital Marketing",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The SEO Keyword Suggestion Agent automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and SEO Specialist Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "GlobalTech Solutions is an enterprise software provider focused on optimizing high-volume, repetitive, and judgment-intensive workflows so teams can focus on what only humans can do.\\n\\nFounded by seasoned industry practitioners, GlobalTech brings deep operational expertise to every product. We are known for building production-grade solutions that are auditable, explainable, and safe.\\n\\nTrusted by over 200 enterprises, GlobalTech is now integrating cutting-edge LLM engineering to help our clients achieve measurable ROI through AI automation. This simulation gives you a front-row seat to our work.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the SEO Keyword Suggestion Agent?",
        "options": [
          "Write code",
          "Automate workflows in Digital Marketing",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the SEO Keyword Suggestion Agent benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the SEO Keyword Suggestion Agent Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a SEO Specialist Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Digital Marketing department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a SEO Specialist Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the SEO Keyword Suggestion Agent.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the SEO Keyword Suggestion Agent. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the SEO Keyword Suggestion Agent. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the SEO Keyword Suggestion Agent. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-19",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  },
  {
    "company": "GlobalTech Solutions",
    "role": "Internal Comms Intern",
    "title": "Internal Policy FAQ Bot",
    "industry": "Corporate Strategy",
    "problem_statement": "Optimizing workflow automation and data processing takes time, deep research, and precise alignment with business requirements. The Internal Policy FAQ Bot automates analysis and decision-making, generating accurate, customized outputs instantly. Designed for: Operations Managers, Team Leaders, Department Heads, and Internal Comms Interns.",
    "tools": [
      "Python",
      "Groq API",
      "JSON",
      "Prompt Engineering"
    ],
    "steps": [
      "Install groq using pip install groq",
      "Initialize the Groq client with your API key",
      "Define the system prompt and inject the variables into the user prompt",
      "Call the chat completions endpoint and parse the response"
    ],
    "code_snippet": "from groq import Groq\\n\\nclient = Groq()\\n\\n# Define your prompts here...",
    "about_company": "GlobalTech Solutions is an enterprise software provider focused on optimizing high-volume, repetitive, and judgment-intensive workflows so teams can focus on what only humans can do.\\n\\nFounded by seasoned industry practitioners, GlobalTech brings deep operational expertise to every product. We are known for building production-grade solutions that are auditable, explainable, and safe.\\n\\nTrusted by over 200 enterprises, GlobalTech is now integrating cutting-edge LLM engineering to help our clients achieve measurable ROI through AI automation. This simulation gives you a front-row seat to our work.",
    "mcqs": [
      {
        "id": 1,
        "question": "What is the core objective of the Internal Policy FAQ Bot?",
        "options": [
          "Write code",
          "Automate workflows in Corporate Strategy",
          "Generate images",
          "Mine crypto"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Which SDK is used to interact with the LLM in this notebook?",
        "options": [
          "groq",
          "boto3",
          "tensorflow",
          "pytorch"
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "question": "Why do we use an f-string for the user prompt?",
        "options": [
          "To format text dynamically with variables",
          "To execute shell commands",
          "To make it run faster",
          "To encrypt it"
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "question": "What is the purpose of the system message?",
        "options": [
          "To reboot the server",
          "To instruct the LLM on its persona and rules",
          "To catch errors",
          "To print to console"
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "question": "If the API key is missing, what does the mock code do?",
        "options": [
          "Deletes the hard drive",
          "Returns a fallback JSON mock response via a try/except block",
          "Loops infinitely",
          "Sends an email"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "What does JSON stand for?",
        "options": [
          "Java Source Object Notation",
          "JavaScript Object Notation",
          "Just Some Ordinary Notes",
          "Jupyter System Output Network"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Why is temperature=0.0 used in analytical tasks?",
        "options": [
          "To freeze the CPU",
          "To ensure deterministic, consistent, and logical outputs",
          "To maximize creativity",
          "To generate code"
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "question": "What happens during the chat.completions.create call?",
        "options": [
          "The computer shuts down",
          "A synchronous HTTP request is sent to Groq's API",
          "A database is wiped",
          "A frontend UI is rendered"
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "question": "Which of these is a valid LLM model hosted on Groq?",
        "options": [
          "llama3-8b-8192",
          "gpt-5",
          "claude-4",
          "dall-e"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "How can the Internal Policy FAQ Bot benefit a company?",
        "options": [
          "By slowing down workers",
          "By automating repetitive text-based analysis to save time",
          "By breaking the website",
          "By increasing server costs"
        ],
        "correctAnswer": 1
      }
    ],
    "pain_points": [
      {
        "title": "Time-intensive manual work",
        "desc": "Repetitive data extraction and processing drains employee time, reducing capacity for high-value strategic work."
      },
      {
        "title": "Inconsistent output quality",
        "desc": "Without a unified AI framework, outputs vary wildly in quality, tone, and compliance with organizational standards."
      },
      {
        "title": "Missed context and personalization",
        "desc": "Generic processing fails to adapt to the nuances of each specific case, reducing accuracy and stakeholder confidence."
      },
      {
        "title": "No performance tracking",
        "desc": "Teams lack structured visibility into past decisions and outputs, making continuous improvement impossible."
      }
    ],
    "roi_stats": [
      {
        "value": "70%",
        "desc": "faster task completion, freeing teams for strategic work"
      },
      {
        "value": "50%",
        "desc": "improvement in output consistency and organizational compliance"
      },
      {
        "value": "35%",
        "desc": "higher accuracy through context-aware AI processing"
      },
      {
        "value": "40%",
        "desc": "reduction in review and rework cycles with near-final outputs"
      }
    ],
    "outcomes": [
      {
        "title": "Intelligent Task Automation",
        "desc": "Instantly process unstructured inputs and generate structured, actionable outputs ready for review."
      },
      {
        "title": "Consistent Quality Standards",
        "desc": "Maintain output quality and tone across all tasks with a central AI knowledge base and standardized prompts."
      },
      {
        "title": "Context-Aware Processing",
        "desc": "Automatically adapt analysis to the specific domain, use-case, and stakeholder needs of each request."
      },
      {
        "title": "Performance Visibility",
        "desc": "Track output metrics and success patterns to continuously improve agent performance over time."
      }
    ],
    "intro_from_team": "Welcome to the Internal Policy FAQ Bot Job Simulation! We are thrilled to have you here. During this program, you will step into the role of a Internal Comms Intern and complete tasks that replicate the work this role does every day. You'll learn key skills in automation, strategy, and applied Generative AI. We hope this program provides a great resource for you to upskill and strengthen your resume!",
    "scenario": {
      "background": "Your team has been tasked with helping the Corporate Strategy department automate its core workflows to reduce manual overhead and improve response times using GenAI.",
      "your_role": [
        "You are a Internal Comms Intern specializing in AI-driven process optimization.",
        "You work within a larger operations team, collaborating with business leaders to deploy simple, effective AI agents."
      ],
      "your_goal": [
        "Analyze the existing workflow.",
        "Develop a prompt or lightweight blueprint for the Internal Policy FAQ Bot.",
        "Evaluate its accuracy and readiness for production."
      ]
    },
    "simulation_tasks": [
      {
        "number": 1,
        "title": "Workflow Mapping",
        "description": "Review the provided business requirements document and map out the decision tree for the Internal Policy FAQ Bot. Identify exactly where the AI agent will intervene and what data it needs to function correctly."
      },
      {
        "number": 2,
        "title": "Prompt Design & System Instructions",
        "description": "Write the core system prompt for the Internal Policy FAQ Bot. Define its persona, constraints, and the exact output format (e.g., JSON or structured markdown) required by the business stakeholders."
      },
      {
        "number": 3,
        "title": "Agent Blueprint Implementation",
        "description": "Using a simple Python script with the Groq API, implement the Internal Policy FAQ Bot. Feed it 3 test scenarios (e.g., edge cases) and document its responses in your notebook."
      },
      {
        "number": 4,
        "title": "Review & Refine",
        "description": "Review the agent's outputs. Did it hallucinate? Did it follow formatting constraints? Write a short summary of how you would refine the prompt or workflow for production."
      }
    ],
    "id": "genai-20",
    "domain": "generative-ai",
    "estimatedTime": "2 hrs",
    "difficulty": "Beginner",
    "task": "Review the provided inputs, write a system prompt to handle the logic, and implement a Python script calling the Groq API to output the correct response.",
    "tags": [
      "Prompt Engineering",
      "Groq API",
      "Business Logic"
    ],
    "learn": [
      "Prompt Engineering",
      "API Integration",
      "Business Logic"
    ],
    "expectedOutcome": [
      "Submit the completed Jupyter notebook demonstrating the agent successfully processing the mock inputs."
    ],
    "knowledgeTest": [
      "How does the system prompt constrain the AI's behavior?",
      "What is the difference between the system message and user message?",
      "Why is temperature set to 0 for strict business logic tasks?"
    ]
  }
];

export const industries = Array.from(new Set(problems.map((p) => p.industry))).sort();

export const getProblem = (id: string) => problems.find((p) => p.id === id);

export const problemsByDomain = (domain: string) => problems.filter((p) => p.domain === domain);
