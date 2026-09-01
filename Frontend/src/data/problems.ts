export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Dataset {
  fileName: string;
  size: string;
  url: string;
}

export interface MCQ {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Problem {
  id: string;
  domain: string;
  company: string;
  role: string;
  about_company: string;
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
  mcqs?: MCQ[];
  dataset?: Dataset;
}

export const problems: Problem[] = [
  {
    "id": "1",
    "domain": "tech-development",
    "company": "NeuralFrontier",
    "role": "Agent Designer",
    "about_company": "**NeuralFrontier**  is a leading global enterprise operating at the cutting edge of the Design & UI/UX sector,\nwith a mission \u2019To revolutionize service delivery and create long-term stakeholder value through trusted\ninnovation\u2019.\nWith an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we\ncollectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, NeuralFrontier Insights & Generative\nTechnologies. You will gain insight into how our multi-disciplinary experts solve some of the\nmost complex business problems using state-of-the-art AI solutions.",
    "title": "AI Agent Designer",
    "industry": "IT",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the IT sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a AI Agent Designer, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "LangGraph / LangChain",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "LangGraph / LangChain",
      "Skillzza AI Mentor"
    ],
    "steps": [
      "**Task 1:** Understand:: You are tasked with designing an AI agent for a productivity app. The agent will assist users in scheduling meetings, tracking tasks, and answering queries.\n\n### What you'll learn\n- Research and define the core functionalities of the agent. Create a user persona and list potential use cases for the agent.\n\n### What you'll do\n- A document outlining the agent\u2019s purpose, target audience, and core functionali- ties. - A list of 5-7 use cases based on the user persona.",
      "**Task 2:** Data/Setup:: To enable memory and goal-oriented behavior, you need to set up the foun- dational architecture of the AI agent. This includes preparing the environment and connecting to the OpenAI API.\n\n### What you'll learn\n- Set up Python, install necessary libraries (OpenAI, LangChain), and con- nect to the GPT model. Design a basic agent skeleton with input/output flow. \n\n### What you'll do\n- Python script with API setup and a basic agent scaffold. - Screenshot of the agent successfully generating sample responses.",
      "**Task 3:** Build/Execute:: You will now integrate memory functionality so the agent can retain and recall user information across sessions. Add goal-setting logic to allow the agent to guide users toward task completion.\n\n### What you'll learn\n- Use LangChain to implement memory and goal-setting modules. Train the agent to store user preferences and recall them in future interactions. Test the agent\u2019s ability to track goals across conversations.\n\n### What you'll do\n- Python script with memory integration and goal-setting logic. - A set of test cases demonstrating that the agent can recall memory and guide users to complete tasks.",
      "**Task 4:** GenAI/Explanation:: Users often need step-by-step instructions for complex processes. Add a generative layer to the agent for explaining multi-step tasks clearly.\n\n### What you'll learn\n- Integrate OpenAI\u2019s GPT capabilities to enable the agent to generate step- by-step instructions for tasks such as scheduling a meeting or organizing a to-do list.\n\n### What you'll do\n- Python script demonstrating generative capabilities for step-by-step instructions. - A test log showing the agent successfully explaining three distinct workflows.",
      "**Task 5:** Audit/Responsible AI:: You must ensure the agent adheres to responsible AI practices. This includes avoiding biased responses, ensuring user data privacy, and providing disclaimers for ambiguous answers.\n\n### What you'll learn\n- Implement filters to detect and manage biased or inappropriate responses. Add user consent mechanisms for data storage and integrate disclaimers for uncertain outputs.\n\n### What you'll do\n- Python script with responsible AI features implemented. - A document outlining responsible AI measures and testing results.",
      "**Task 6:** Present Recommendation:: Your agent is ready for deployment, but you need to present its capabilities to the product team. Create a demo showcasing the agent\u2019s functionalities and explain its design choices.\n\n### What you'll learn\n- Develop a short presentation and record a demo of the agent performing key tasks, showcasing its memory, goal-setting, and instructional capabilities. Highlight responsible AI features.\n\n### What you'll do\n- Presentation slides (5-10 slides) covering agent design, features, and responsible AI considerations."
],
    "knowledgeTest": [],
    "submissionInstructions": [],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "2",
    "domain": "tech-development",
    "company": "Stratagem Consultants",
    "role": "Junior Microfinance Analyst",
    "about_company": "**Stratagem Consultants**  is a leading global enterprise operating at the cutting edge of the Consulting &\nStrategy sector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder value\nthrough trusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over 30\ncountries, we collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Stratagem Consultants Insights &\nGenerative Technologies. You will gain insight into how our multi-disciplinary experts solve some of\nthe most complex business problems using state-of-the-art AI solutions.",
    "title": "Microfinance Analyst",
    "industry": "Banking, Microfinance & FinTech",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the Banking, Microfinance & FinTech sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a Microfinance Analyst, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python / Pandas",
      "Scikit-Learn",
      "Data Analytics",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "**Task 1:** Understand the Scope of Research:: Your manager has provided a vague request: \u201dFind out how AI can transform the logistics industry.\u201d You need to refine the research scope to make it actionable.\n\n### What you'll learn\n- Break down the research question into sub-questions (e.g., \u201dWhat are cur- rent pain points in logistics that AI can address?\u201d). - Research current AI applications in logistics using Google Scholar and ChatGPT. - Identify specific areas (e.g., route optimization, inventory management) for deeper research.\n\n### What you'll do\n- Submit a refined research scope document (1 page) outlining sub-questions, focus areas, and the rationale for choosing logistics as the target industr.",
      "**Task 2:** Data Collection and Setup:: You need reliable data to perform your analysis. Collect information from primary (official reports, industry statistics) and secondary (blogs, AI forums) sources.\n\n### What you'll learn\n- Use AI-powered web scraping tools (or manually search) to collect recent data on logistics trends and challenges. - Organize the data into categories (e.g., pain points, solutions, emerging technologies). - Ensure sources are credible by cross-checking for bias and accuracy.\n\n### What you'll do\n- Submit a structured dataset (Google Sheets or Excel) with at least 20 data points categorized and validated for your analysi.",
      "**Task 3:** Build Insights Using AI Tools:: You now have raw data and need to uncover trends and actionable insights. Leverage AI tools to synthesize information.\n\n### What you'll learn\n- Use ChatGPT to summarize industry trends and challenges based on your data. - Apply NLP techniques to identify recurring terms and themes in textual data. - Highlight correlations between AI adoption and efficiency gains in logistics.\n\n### What you'll do\n- Submit a concise insights report (2 pages) summarizing trends, challenges, and op- portunities derived from the analysi.",
      "**Task 4:** GenAI-Powered Explanation:: You need to explain complex findings to non-experts. Use generative AI tools to craft an engaging summary.\n\n### What you'll learn\n- In ChatGPT, generate a simplified explanation of your insights for stake- holders unfamiliar with AI. - Create a visual representation (infographic) that showcases key points using tools like Canva or Google Slides. \n\n### What you'll do\n- Submit a one-page stakeholder-friendly summary and a visual infographic explain- ing your research finding.",
      "**Task 5:** Audit and Responsible AI Practices:: Your firm emphasizes responsible AI use. Ensure your research adheres to ethical standards and avoids biased data.\n\n### What you'll learn\n- Review your data sources for potential bias or misinformation. - Write a short audit report detailing how you ensured ethical AI practices throughout your research. - Identify any gaps or risks in your findings.\n\n### What you'll do\n- Submit a one-page Responsible AI Audit Report summarizing your validation pro- cess and ethical consideration.",
      "**Task 6:** Present Your Recommendation:: The firm\u2019s leadership team needs your recommendation on whether logistics is a viable market for AI expansion. Prepare and pitch your proposal.\n\n### What you'll learn\n- Combine all your findings into a professional presentation. - Include key insights, visualizations, risks, and actionable recommendations. - Record a 5-minute video pitch summarizing your proposal.\n\n### What you'll do\n- Submit a presentation deck (PDF or PPT) and a video recording of your pitch."
],
    "knowledgeTest": [],
    "submissionInstructions": [],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "3",
    "domain": "tech-development",
    "company": "SynthAI Labs",
    "role": "AI Consultant",
    "about_company": "**SynthAI Labs**  is a leading global enterprise operating at the cutting edge of the Tech & Development\nsector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder value through\ntrusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries,\nwe collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, SynthAI Labs Insights & Gener-\native Technologies. You will gain insight into how our multi-disciplinary experts solve some of the\nmost complex business problems using state-of-the-art AI solutions.",
    "title": "Voice AI Engineer",
    "industry": "IT",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the IT sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a Voice AI Engineer, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "Streamlit",
      "Process Automation",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [
        "Task 1: Submit a 1-page architecture design and conversation flow diagram.",
        "Task 2: Submit a script that successfully transcribes sample audio files into text.",
        "Task 3: Submit the code for the conversational loop and a log of a successful test conversation.",
        "Task 4: Submit a recording of the bot's generated audio response to a sample user query.",
        "Task 5: Submit a performance report detailing latency metrics and the safety filters implemented.",
        "Task 6: Submit a 5-slide presentation and a short video demonstration of the live voice bot handling an inquiry."
],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
        "**Task 1: Understand the Requirements for a Voice Bot:** \n\n You have been hired to build a conversational voice bot that handles customer inquiries over the phone. Your first task is to map out the architecture and the conversational flow.\n\n### What you'll learn\nResearch speech-to-text (ASR) and text-to-speech (TTS) technologies. Map out the conversational flow for a customer inquiry.\n\n### What you'll do\nSubmit a 1-page architecture design and conversation flow diagram.",
        "**Task 2: Setup Speech Recognition (ASR):** \n\n Configure the bot to listen to user audio and convert it to text using APIs like OpenAI Whisper or Google Speech-to-Text.\n\n### What you'll learn\nIntegrate an ASR model. Handle background noise and transcription errors.\n\n### What you'll do\nSubmit a script that successfully transcribes sample audio files into text.",
        "**Task 3: Build the Conversational Logic (LLM):** \n\n Process the transcribed text to extract intent and generate a suitable reply using a Large Language Model (LLM).\n\n### What you'll learn\nConnect transcribed text to an LLM to manage the dialog state and generate dynamic responses based on user queries.\n\n### What you'll do\nSubmit the code for the conversational loop and a log of a successful test conversation.",
        "**Task 4: Integrate Text-to-Speech (TTS):** \n\n The bot needs to speak back to the user naturally. You will convert the LLM text output into synthesized speech.\n\n### What you'll learn\nConnect the LLM text output to a TTS service (like ElevenLabs or OpenAI TTS) to generate audio playback.\n\n### What you'll do\nSubmit a recording of the bot's generated audio response to a sample user query.",
        "**Task 5: Audit for Latency and Responsible AI:** \n\n Voice bots need low latency to feel natural, and must handle inappropriate or abusive language gracefully.\n\n### What you'll learn\nMeasure the end-to-end latency of your ASR to LLM to TTS pipeline. Implement safety guardrails for inappropriate user input.\n\n### What you'll do\nSubmit a performance report detailing latency metrics and the safety filters implemented.",
        "**Task 6: Deploy and Present the Voice Bot:** \n\n Present your fully functional voice bot to the stakeholders and demonstrate its capabilities.\n\n### What you'll learn\nPackage your code into a runnable web app or API and demonstrate a live interaction highlighting low latency and accurate responses.\n\n### What you'll do\nSubmit a 5-slide presentation and a short video demonstration of the live voice bot handling an inquiry."
],
    "knowledgeTest": [],
    "submissionInstructions": [
        "Task 1: Submit a 1-page architecture design and conversation flow diagram.",
        "Task 2: Submit a script that successfully transcribes sample audio files into text.",
        "Task 3: Submit the code for the conversational loop and a log of a successful test conversation.",
        "Task 4: Submit a recording of the bot's generated audio response to a sample user query.",
        "Task 5: Submit a performance report detailing latency metrics and the safety filters implemented.",
        "Task 6: Submit a 5-slide presentation and a short video demonstration of the live voice bot handling an inquiry."
],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "4",
    "domain": "tech-development",
    "company": "NovaCare Health Systems",
    "role": "AI Architect",
    "about_company": "**NovaCare Health Systems**  is a leading global enterprise operating at the cutting edge of the Healthcare\nsector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder value through\ntrusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries,\nwe collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, NovaCare Health Systems Insights\n& Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some\nof the most complex business problems using state-of-the-art AI solutions.",
    "title": "Multi-Agent AI",
    "industry": "IT",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the IT sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a Multi-Agent AI, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "CrewAI / AutoGen",
      "Prompt Engineering",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [
      "Task 1: Submit a report containing: - Key insights about no-show trends (graphs and tables). - Summary of mi...",
      "Task 2: Submit a clean and preprocessed dataset ready for modeling. Include a summary of preprocessing steps...",
      "Task 3: Submit a summary comparing the performance of different models. Include code snippets and visualizat...",
      "Task 4: Submit a document with feature importance graphs and written explana- tions of model predictions.",
      "Task 5: Submit an audit report on model fairness and proposed mitigation strategies.",
      "Task 6: Submit a stakeholder presentation with: - Patient segmentation visualiza- tions. - Intervention stra..."
    ],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "**Task 1:** Understand - Analyze the Problem and Dataset: \n\n You\u2019ve just joined a healthcare analytics team tasked with reducing no-shows for medical appointments. Your first step is to understand the scope of the problem and analyze the provided dataset.\n\n### What you'll learn\n- Analyze the impact of no-shows on healthcare efficiency (research online). - Load the provided appointment dataset and perform an initial review of its fields, data types, 11 and missing values. - Summarize the key trends in no-show rates (e.g., by gender, age, and health condition).\n\n### What you'll do\nSubmit a report containing: - Key insights about no-show trends (graphs and tables). - Summary of missing values and potential data quality issue.",
      "**Task 2:** Data/Setup - Preprocess and Prepare the Dataset: \n\n The dataset needs to be cleaned and prepared for predictive modeling. You\u2019ll handle missing values, encode categorical variables, and address class imbalance.\n\n### What you'll learn\n- Handle missing values using appropriate imputation techniques. - Encode categorical variables like \u2018Gender\u2018 and \u2018HealthCondition\u2018. - Address class imbalance in the \u2018NoShow\u2018 field using techniques such as oversampling or undersampling.\n\n### What you'll do\nSubmit a clean and preprocessed dataset ready for modeling. Include a summary of preprocessing steps take.",
      "**Task 3:** Build/Execute - Train and Evaluate the No-Show Predictor: \n\n Using the prepro- cessed dataset, you\u2019ll train a classification model to predict whether a patient is likely to no-show an appointment.\n\n### What you'll learn\n- Split the dataset into training and testing sets (e.g., 80/20 split). - Train at least two models (e.g., Logistic Regression, Random Forest). - Evaluate model performance using metrics such as accuracy, precision, recall, and F1-score.\n\n### What you'll do\nSubmit a summary comparing the performance of different models. Include code snippets and visualizations of key metrics (e.g., confusion matrix.",
      "**Task 4:** GenAI/Explanation - Interpret Predictions: \n\n Stakeholders need to understand the factors influencing no-show predictions to trust the model\u2019s recommendations. You\u2019ll use explainable AI techniques to interpret predictions.\n\n### What you'll learn\n- Choose one model and explain its predictions using SHAP or LIME. - Identify which features contribute most to the likelihood of a no-show (e.g., age, SMS reminder).\n\n### What you'll do\nSubmit a document with feature importance graphs and written explana- tions of model prediction.",
      "**Task 5:** Audit/Responsible AI - Ensure Ethical Deployment: \n\n AI models in healthcare must adhere to ethical principles. You are tasked with auditing the no-show predictor for biases.\n\n### What you'll learn\n- Analyze model predictions for potential biases (e.g., gender or age bias). - Propose strategies to mitigate any identified biases (e.g., reweighting samples or adding fairness constraints).\n\n### What you'll do\nSubmit an audit report on model fairness and proposed mitigation strategie.",
      "**Task 6:** Present Recommendation - Segment Patients and Propose Interventions: \n\n Based on your predictions, segment patients by no-show risk levels (e.g., high, medium, low). Develop actionable strategies to reduce no-shows for each segment.\n\n### What you'll learn\n- Use segmentation techniques to group patients by risk levels. - Propose intervention strategies for each segment (e.g., SMS reminders, telehealth options for high-risk patients).\n\n### What you'll do\nSubmit a stakeholder presentation with: - Patient segmentation visualiza- tions. - Intervention strategies tailored to each risk group."
],
    "knowledgeTest": [],
    "submissionInstructions": [
      "Task 1: Submit a report containing: - Key insights about no-show trends (graphs and tables). - Summary of mi...",
      "Task 2: Submit a clean and preprocessed dataset ready for modeling. Include a summary of preprocessing steps...",
      "Task 3: Submit a summary comparing the performance of different models. Include code snippets and visualizat...",
      "Task 4: Submit a document with feature importance graphs and written explana- tions of model predictions.",
      "Task 5: Submit an audit report on model fairness and proposed mitigation strategies.",
      "Task 6: Submit a stakeholder presentation with: - Patient segmentation visualiza- tions. - Intervention stra..."
    ],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "5",
    "domain": "tech-development",
    "company": "Cognitive Core",
    "role": "Prompt Engineer",
    "about_company": "**Cognitive Core**  is a leading global enterprise operating at the cutting edge of the Agriculture sector,\nwith a mission \u2019To revolutionize service delivery and create long-term stakeholder value through trusted\ninnovation\u2019.\nWith an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we\ncollectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Cognitive Core Insights & Gen-\nerative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the\nmost complex business problems using state-of-the-art AI solutions.",
    "title": "GenAI Prompt Engineer",
    "industry": "GenAI",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the GenAI sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a GenAI Prompt Engineer, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "Prompt Engineering",
      "OpenAI / Claude APIs",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "You will begin by understanding the foundational requirements for the GenAI Prompt Engineer - Enterprise Prompt Lab project. Analyze the technical specifications provided by the stakeholders to ensure a successful outcome.\n\n### What you'll learn\nIdentify the core objectives and expected deliverables for the GenAI Prompt Engineer - Enterprise Prompt Lab workflow. Map out the necessary architecture and dependencies.\n\n### What you'll do\n- Submit a 1-page design document outlining the architecture and required tools.",
      "Set up your local development environment and gather the necessary data or API keys for GenAI Prompt Engineer - Enterprise Prompt Lab. Ensure all SDKs and libraries are correctly configured.\n\n### What you'll learn\nConfigure a robust environment using virtual environments, API access, and required datasets.\n\n### What you'll do\n- Provide a screenshot of your terminal showing successful environment initialization and API connection.",
      "Begin the core implementation phase for GenAI Prompt Engineer - Enterprise Prompt Lab. You will write the primary code logic to achieve the minimum viable product (MVP).\n\n### What you'll learn\nTranslate the design document into executable code. Handle basic error cases and edge conditions.\n\n### What you'll do\n- Submit your main implementation script (.py or .js) demonstrating the core functionality.",
      "Enhance your implementation by integrating advanced Generative AI capabilities for GenAI Prompt Engineer - Enterprise Prompt Lab. Fine-tune the prompts or logic to improve performance.\n\n### What you'll learn\nApply advanced AI techniques such as context window optimization or prompt chaining.\n\n### What you'll do\n- Submit a comparison report showing the before and after performance of your AI integration.",
      "Perform a comprehensive Responsible AI audit on your GenAI Prompt Engineer - Enterprise Prompt Lab solution. Check for biases, safety guardrails, and data privacy compliance.\n\n### What you'll learn\nIdentify potential ethical concerns and implement safety filters in your application.\n\n### What you'll do\n- Submit an audit checklist and a short paragraph explaining the safety measures added.",
      "Prepare a final presentation for the GenAI Prompt Engineer - Enterprise Prompt Lab project to showcase your work to the engineering team and product managers.\n\n### What you'll learn\nCommunicate complex technical implementations to both technical and non-technical stakeholders effectively.\n\n### What you'll do\n- Submit a 5-slide presentation summarizing your architecture, challenges, and final solution."
],
    "knowledgeTest": [],
    "submissionInstructions": [],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "6",
    "domain": "tech-development",
    "company": "Tech Global Dynamics",
    "role": "Data Analyst",
    "about_company": "**Tech Global Dynamics**  is a leading global enterprise operating at the cutting edge of the Tech & Devel-\nopment sector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder value\nthrough trusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over 30\ncountries, we collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Tech Global Dynamics Insights &\nGenerative Technologies. You will gain insight into how our multi-disciplinary experts solve some of\nthe most complex business problems using state-of-the-art AI solutions.",
    "title": "Generative AI Data Analyst",
    "industry": "GenAI + Analytics",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the GenAI + Analytics sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a Generative AI Data Analyst, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python / Pandas",
      "Data Visualization",
      "SQL",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "You will begin by understanding the foundational requirements for the Generative AI Data Analyst - Ask Data Questions with GenAI project. Analyze the technical specifications provided by the stakeholders to ensure a successful outcome.\n\n### What you'll learn\nIdentify the core objectives and expected deliverables for the Generative AI Data Analyst - Ask Data Questions with GenAI workflow. Map out the necessary architecture and dependencies.\n\n### What you'll do\n- Submit a 1-page design document outlining the architecture and required tools.",
      "Set up your local development environment and gather the necessary data or API keys for Generative AI Data Analyst - Ask Data Questions with GenAI. Ensure all SDKs and libraries are correctly configured.\n\n### What you'll learn\nConfigure a robust environment using virtual environments, API access, and required datasets.\n\n### What you'll do\n- Provide a screenshot of your terminal showing successful environment initialization and API connection.",
      "Begin the core implementation phase for Generative AI Data Analyst - Ask Data Questions with GenAI. You will write the primary code logic to achieve the minimum viable product (MVP).\n\n### What you'll learn\nTranslate the design document into executable code. Handle basic error cases and edge conditions.\n\n### What you'll do\n- Submit your main implementation script (.py or .js) demonstrating the core functionality.",
      "Enhance your implementation by integrating advanced Generative AI capabilities for Generative AI Data Analyst - Ask Data Questions with GenAI. Fine-tune the prompts or logic to improve performance.\n\n### What you'll learn\nApply advanced AI techniques such as context window optimization or prompt chaining.\n\n### What you'll do\n- Submit a comparison report showing the before and after performance of your AI integration.",
      "Perform a comprehensive Responsible AI audit on your Generative AI Data Analyst - Ask Data Questions with GenAI solution. Check for biases, safety guardrails, and data privacy compliance.\n\n### What you'll learn\nIdentify potential ethical concerns and implement safety filters in your application.\n\n### What you'll do\n- Submit an audit checklist and a short paragraph explaining the safety measures added.",
      "Prepare a final presentation for the Generative AI Data Analyst - Ask Data Questions with GenAI project to showcase your work to the engineering team and product managers.\n\n### What you'll learn\nCommunicate complex technical implementations to both technical and non-technical stakeholders effectively.\n\n### What you'll do\n- Submit a 5-slide presentation summarizing your architecture, challenges, and final solution."
],
    "knowledgeTest": [],
    "submissionInstructions": [],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "7",
    "domain": "tech-development",
    "company": "Tech Innovations Ltd",
    "role": "Healthcare AI Analyst",
    "about_company": "**Tech Innovations Ltd**  is a leading global enterprise operating at the cutting edge of the Tech & Devel-\nopment sector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder value\nthrough trusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over 30\ncountries, we collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights &\nGenerative Technologies. You will gain insight into how our multi-disciplinary experts solve some of\nthe most complex business problems using state-of-the-art AI solutions.",
    "title": "Healthcare GenAI",
    "industry": "Healthcare AI",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the Healthcare AI sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a Healthcare GenAI, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "RAG",
      "Vector Databases",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "You will begin by understanding the foundational requirements for the Healthcare GenAI - Clinical Knowledge Assistant project. Analyze the technical specifications provided by the stakeholders to ensure a successful outcome.\n\n### What you'll learn\nIdentify the core objectives and expected deliverables for the Healthcare GenAI - Clinical Knowledge Assistant workflow. Map out the necessary architecture and dependencies.\n\n### What you'll do\n- Submit a 1-page design document outlining the architecture and required tools.",
      "Set up your local development environment and gather the necessary data or API keys for Healthcare GenAI - Clinical Knowledge Assistant. Ensure all SDKs and libraries are correctly configured.\n\n### What you'll learn\nConfigure a robust environment using virtual environments, API access, and required datasets.\n\n### What you'll do\n- Provide a screenshot of your terminal showing successful environment initialization and API connection.",
      "Begin the core implementation phase for Healthcare GenAI - Clinical Knowledge Assistant. You will write the primary code logic to achieve the minimum viable product (MVP).\n\n### What you'll learn\nTranslate the design document into executable code. Handle basic error cases and edge conditions.\n\n### What you'll do\n- Submit your main implementation script (.py or .js) demonstrating the core functionality.",
      "Enhance your implementation by integrating advanced Generative AI capabilities for Healthcare GenAI - Clinical Knowledge Assistant. Fine-tune the prompts or logic to improve performance.\n\n### What you'll learn\nApply advanced AI techniques such as context window optimization or prompt chaining.\n\n### What you'll do\n- Submit a comparison report showing the before and after performance of your AI integration.",
      "Perform a comprehensive Responsible AI audit on your Healthcare GenAI - Clinical Knowledge Assistant solution. Check for biases, safety guardrails, and data privacy compliance.\n\n### What you'll learn\nIdentify potential ethical concerns and implement safety filters in your application.\n\n### What you'll do\n- Submit an audit checklist and a short paragraph explaining the safety measures added.",
      "Prepare a final presentation for the Healthcare GenAI - Clinical Knowledge Assistant project to showcase your work to the engineering team and product managers.\n\n### What you'll learn\nCommunicate complex technical implementations to both technical and non-technical stakeholders effectively.\n\n### What you'll do\n- Submit a 5-slide presentation summarizing your architecture, challenges, and final solution."
],
    "knowledgeTest": [],
    "submissionInstructions": [],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "8",
    "domain": "tech-development",
    "company": "Tech Innovations Ltd",
    "role": "Cybersecurity Analyst",
    "about_company": "**Tech Innovations Ltd**  is a leading global enterprise operating at the cutting edge of the Tech & Devel-\nopment sector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder value\nthrough trusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over 30\ncountries, we collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights &\nGenerative Technologies. You will gain insight into how our multi-disciplinary experts solve some of\nthe most complex business problems using state-of-the-art AI solutions.",
    "title": "GenAI Cybersecurity Analyst",
    "industry": "Cybersecurity + AI",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the Cybersecurity + AI sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a GenAI Cybersecurity Analyst, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "Splunk / SIEM APIs",
      "Cybersecurity Analytics",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [
      "Task 1: Submit a summary document (PDF or Word) explaining crop health indica- tors and their relevance to r...",
      "Task 2: Submit a cleaned dataset (CSV file) along with a Python notebook show- casing data preprocessing ste...",
      "Task 3: Submit your trained model code and a report on the model\u2019s performance (e.g., confusion matrix, key ...",
      "Task 4: Submit SHAP plots for key predictions and a brief report explaining their relevance to farmers.",
      "Task 5: Submit a fairness audit report (PDF) with actionable recommendations for bias mitigation.",
      "Task 6: Submit a farmer advisory report (PDF or PowerPoint) incorporating AI- driven insights and recommenda..."
    ],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "**Task 1:** Understand the Problem - Crop Health Analysis: \n\n A group of farmers from a drought-prone region has provided crop health and environmental datasets, including satellite imagery, soil quality metrics, and weather forecasts. You need to understand the indicators of crop health and the risks involved.\n\n### What you'll learn\n- Research key factors affecting crop health (e.g., pests, climate, soil nutrients). - Explore the provided dataset fields: \u2018Crop ID\u2018, \u2018Region\u2018, \u2018Soil Moisture\u2018, \u2018Temperature\u2018, 20 \u2018Humidity\u2018, \u2018Pest Infestation\u2018, \u2018Yield\u2018. - Identify relationships between environmental factors and crop health.\n\n### What you'll do\nSubmit a summary document (PDF or Word) explaining crop health indica- tors and their relevance to risk prediction. Include visualizations of trends (e.g., temperature vs yield).",
      "**Task 2:** Data Preparation and Setup: \n\n The provided datasets contain missing values, out- liers, and redundant fields. To ensure accurate AI model predictions, you need to clean and preprocess the data.\n\n### What you'll learn\n- Identify and handle missing values using imputation techniques. - Remove irrelevant fields and detect outliers. - Normalize numerical fields (e.g., \u2018Soil Moisture\u2018, \u2018Tem- perature\u2018).\n\n### What you'll do\nSubmit a cleaned dataset (CSV file) along with a Python notebook show- casing data preprocessing steps.",
      "**Task 3:** Build the AI Model - Risk Prediction: \n\n Using the cleaned dataset, it\u2019s time to build an AI model that predicts crop health risks such as pest infestations or drought stress.\n\n### What you'll learn\n- Split the dataset into training and testing sets. - Implement a classification model (e.g., Decision Tree or Random Forest) to predict \u2018Pest Infestation\u2018 risk. - Evaluate model accuracy using metrics like precision, recall, and F1-score.\n\n### What you'll do\nSubmit your trained model code and a report on the model\u2019s performance (e.g., confusion matrix, key metrics).",
      "**Task 4:** Explainable AI - Why Did the Model Predict This?: \n\n Farmers need to under- stand why certain risks are predicted. You must use Explainable AI (XAI) techniques to make model predictions transparent.\n\n### What you'll learn\n- Use the SHAP library to explain your AI model\u2019s predictions. - Generate visual explanations for why specific predictions (e.g., pest infestation or drought stress) were made.\n\n### What you'll do\nSubmit SHAP plots for key predictions and a brief report explaining their relevance to farmers.",
      "**Task 5:** Audit for Responsible AI: \n\n AI models can unintentionally favor certain crops or regions, leading to biased outcomes. You must audit your model for fairness and ensure responsible AI practices are followed.\n\n### What you'll learn\n- Check for biases in predictions across regions (\u2018Region\u2018 field). - Create a fairness report highlighting any disparities and propose solutions (e.g., retraining with balanced data).\n\n### What you'll do\nSubmit a fairness audit report (PDF) with actionable recommendations for bias mitigation.",
      "**Task 6:** Present AI Recommendations to Farmers: \n\n Based on your AI findings, prepare an advisory report for farmers. This report should include preventative measures, intervention strategies, and yield optimization techniques tailored to their crop health risks.\n\n### What you'll learn\n- Summarize key insights from your model\u2019s predictions. - Provide actionable recommendations (e.g., irrigation schedules, pest control techniques). - Create a visually appealing farmer advisory report.\n\n### What you'll do\nSubmit a farmer advisory report (PDF or PowerPoint) incorporating AI- driven insights and recommendations. 2."
],
    "knowledgeTest": [],
    "submissionInstructions": [
      "Task 1: Submit a summary document (PDF or Word) explaining crop health indica- tors and their relevance to r...",
      "Task 2: Submit a cleaned dataset (CSV file) along with a Python notebook show- casing data preprocessing ste...",
      "Task 3: Submit your trained model code and a report on the model\u2019s performance (e.g., confusion matrix, key ...",
      "Task 4: Submit SHAP plots for key predictions and a brief report explaining their relevance to farmers.",
      "Task 5: Submit a fairness audit report (PDF) with actionable recommendations for bias mitigation.",
      "Task 6: Submit a farmer advisory report (PDF or PowerPoint) incorporating AI- driven insights and recommenda..."
    ],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "9",
    "domain": "tech-development",
    "company": "Tech Innovations Ltd",
    "role": "Full Stack Developer",
    "about_company": "**Tech Innovations Ltd**  is a leading global enterprise operating at the cutting edge of the Tech & Devel-\nopment sector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder value\nthrough trusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over 30\ncountries, we collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights &\nGenerative Technologies. You will gain insight into how our multi-disciplinary experts solve some of\nthe most complex business problems using state-of-the-art AI solutions.",
    "title": "Full Stack Developer",
    "industry": "Full Stack",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the Full Stack sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a Full Stack Developer, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Next.js / React",
      "Node.js",
      "OpenAI APIs",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "You will begin by understanding the foundational requirements for the Full Stack Developer - Build an AI Web Application project. Analyze the technical specifications provided by the stakeholders to ensure a successful outcome.\n\n### What you'll learn\nIdentify the core objectives and expected deliverables for the Full Stack Developer - Build an AI Web Application workflow. Map out the necessary architecture and dependencies.\n\n### What you'll do\n- Submit a 1-page design document outlining the architecture and required tools.",
      "Set up your local development environment and gather the necessary data or API keys for Full Stack Developer - Build an AI Web Application. Ensure all SDKs and libraries are correctly configured.\n\n### What you'll learn\nConfigure a robust environment using virtual environments, API access, and required datasets.\n\n### What you'll do\n- Provide a screenshot of your terminal showing successful environment initialization and API connection.",
      "Begin the core implementation phase for Full Stack Developer - Build an AI Web Application. You will write the primary code logic to achieve the minimum viable product (MVP).\n\n### What you'll learn\nTranslate the design document into executable code. Handle basic error cases and edge conditions.\n\n### What you'll do\n- Submit your main implementation script (.py or .js) demonstrating the core functionality.",
      "Enhance your implementation by integrating advanced Generative AI capabilities for Full Stack Developer - Build an AI Web Application. Fine-tune the prompts or logic to improve performance.\n\n### What you'll learn\nApply advanced AI techniques such as context window optimization or prompt chaining.\n\n### What you'll do\n- Submit a comparison report showing the before and after performance of your AI integration.",
      "Perform a comprehensive Responsible AI audit on your Full Stack Developer - Build an AI Web Application solution. Check for biases, safety guardrails, and data privacy compliance.\n\n### What you'll learn\nIdentify potential ethical concerns and implement safety filters in your application.\n\n### What you'll do\n- Submit an audit checklist and a short paragraph explaining the safety measures added.",
      "Prepare a final presentation for the Full Stack Developer - Build an AI Web Application project to showcase your work to the engineering team and product managers.\n\n### What you'll learn\nCommunicate complex technical implementations to both technical and non-technical stakeholders effectively.\n\n### What you'll do\n- Submit a 5-slide presentation summarizing your architecture, challenges, and final solution."
],
    "knowledgeTest": [],
    "submissionInstructions": [],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "10",
    "domain": "tech-development",
    "company": "Tech Innovations Ltd",
    "role": "Backend Developer",
    "about_company": "**Tech Innovations Ltd**  is a leading global enterprise operating at the cutting edge of the Tech & Devel-\nopment sector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder value\nthrough trusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over 30\ncountries, we collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights &\nGenerative Technologies. You will gain insight into how our multi-disciplinary experts solve some of\nthe most complex business problems using state-of-the-art AI solutions.",
    "title": "Backend Developer",
    "industry": "Software",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the Software sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a Backend Developer, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "FastAPI / Flask",
      "PostgreSQL",
      "Docker / Deployment",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "You will begin by understanding the foundational requirements for the Backend Developer - Build an AI API Service project. Analyze the technical specifications provided by the stakeholders to ensure a successful outcome.\n\n### What you'll learn\nIdentify the core objectives and expected deliverables for the Backend Developer - Build an AI API Service workflow. Map out the necessary architecture and dependencies.\n\n### What you'll do\n- Submit a 1-page design document outlining the architecture and required tools.",
      "Set up your local development environment and gather the necessary data or API keys for Backend Developer - Build an AI API Service. Ensure all SDKs and libraries are correctly configured.\n\n### What you'll learn\nConfigure a robust environment using virtual environments, API access, and required datasets.\n\n### What you'll do\n- Provide a screenshot of your terminal showing successful environment initialization and API connection.",
      "Begin the core implementation phase for Backend Developer - Build an AI API Service. You will write the primary code logic to achieve the minimum viable product (MVP).\n\n### What you'll learn\nTranslate the design document into executable code. Handle basic error cases and edge conditions.\n\n### What you'll do\n- Submit your main implementation script (.py or .js) demonstrating the core functionality.",
      "Enhance your implementation by integrating advanced Generative AI capabilities for Backend Developer - Build an AI API Service. Fine-tune the prompts or logic to improve performance.\n\n### What you'll learn\nApply advanced AI techniques such as context window optimization or prompt chaining.\n\n### What you'll do\n- Submit a comparison report showing the before and after performance of your AI integration.",
      "Perform a comprehensive Responsible AI audit on your Backend Developer - Build an AI API Service solution. Check for biases, safety guardrails, and data privacy compliance.\n\n### What you'll learn\nIdentify potential ethical concerns and implement safety filters in your application.\n\n### What you'll do\n- Submit an audit checklist and a short paragraph explaining the safety measures added.",
      "Prepare a final presentation for the Backend Developer - Build an AI API Service project to showcase your work to the engineering team and product managers.\n\n### What you'll learn\nCommunicate complex technical implementations to both technical and non-technical stakeholders effectively.\n\n### What you'll do\n- Submit a 5-slide presentation summarizing your architecture, challenges, and final solution."
],
    "knowledgeTest": [],
    "submissionInstructions": [],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "11",
    "domain": "tech-development",
    "company": "Tech Innovations Ltd",
    "role": "RAG AI Engineer",
    "about_company": "**Tech Innovations Ltd**  is a leading global enterprise operating at the cutting edge of the Tech & Devel-\nopment sector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder value\nthrough trusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over 30\ncountries, we collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights &\nGenerative Technologies. You will gain insight into how our multi-disciplinary experts solve some of\nthe most complex business problems using state-of-the-art AI solutions.",
    "title": "RAG Application Engineer",
    "industry": "GenAI",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the GenAI sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a AI Developer, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "LangChain / LlamaIndex",
      "Vector Databases (Pinecone)",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "You will begin by understanding the foundational requirements for the AI Developer - Build a RAG Application project. Analyze the technical specifications provided by the stakeholders to ensure a successful outcome.\n\n### What you'll learn\nIdentify the core objectives and expected deliverables for the AI Developer - Build a RAG Application workflow. Map out the necessary architecture and dependencies.\n\n### What you'll do\n- Submit a 1-page design document outlining the architecture and required tools.",
      "Set up your local development environment and gather the necessary data or API keys for AI Developer - Build a RAG Application. Ensure all SDKs and libraries are correctly configured.\n\n### What you'll learn\nConfigure a robust environment using virtual environments, API access, and required datasets.\n\n### What you'll do\n- Provide a screenshot of your terminal showing successful environment initialization and API connection.",
      "Begin the core implementation phase for AI Developer - Build a RAG Application. You will write the primary code logic to achieve the minimum viable product (MVP).\n\n### What you'll learn\nTranslate the design document into executable code. Handle basic error cases and edge conditions.\n\n### What you'll do\n- Submit your main implementation script (.py or .js) demonstrating the core functionality.",
      "Enhance your implementation by integrating advanced Generative AI capabilities for AI Developer - Build a RAG Application. Fine-tune the prompts or logic to improve performance.\n\n### What you'll learn\nApply advanced AI techniques such as context window optimization or prompt chaining.\n\n### What you'll do\n- Submit a comparison report showing the before and after performance of your AI integration.",
      "Perform a comprehensive Responsible AI audit on your AI Developer - Build a RAG Application solution. Check for biases, safety guardrails, and data privacy compliance.\n\n### What you'll learn\nIdentify potential ethical concerns and implement safety filters in your application.\n\n### What you'll do\n- Submit an audit checklist and a short paragraph explaining the safety measures added.",
      "Prepare a final presentation for the AI Developer - Build a RAG Application project to showcase your work to the engineering team and product managers.\n\n### What you'll learn\nCommunicate complex technical implementations to both technical and non-technical stakeholders effectively.\n\n### What you'll do\n- Submit a 5-slide presentation summarizing your architecture, challenges, and final solution."
],
    "knowledgeTest": [],
    "submissionInstructions": [],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "12",
    "domain": "tech-development",
    "company": "Tech Innovations Ltd",
    "role": "Financial AI Analyst",
    "about_company": "**Tech Innovations Ltd**  is a leading global enterprise operating at the cutting edge of the Tech & Devel-\nopment sector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder value\nthrough trusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over 30\ncountries, we collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights &\nGenerative Technologies. You will gain insight into how our multi-disciplinary experts solve some of\nthe most complex business problems using state-of-the-art AI solutions.",
    "title": "Investment Banking Analyst",
    "industry": "GenAI",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the GenAI sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs an AI Developer, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "LangChain",
      "Enterprise Data Integration",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [
      "Task 1: A one-page summary of TechNova\u2019s business model, industry trends, and key financial metrics (e.g., r...",
      "Task 2: Create an Excel spreadsheet listing the comparable companies with their financial metrics and valuat...",
      "Task 3: An Excel model showcasing valuation calculations for TechNova using both CCA and PTA methods.",
      "Task 4: A 250-word client-friendly summary explaining TechNova\u2019s valuation and the rationale behind it.",
      "Task 5: An audit report highlighting the checks performed, assumptions validated, and risk considerations.",
      "Task 6: A 3-5 page Investment Memo in PDF format. - A PowerPoint/Google Slides deck with 5-7 slides summariz..."
    ],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "**Task 1:** Understand the Company and Industry: \n\n Your firm has been approached to evaluate TechNova Inc., a mid-sized technology company specializing in AI software solutions. You must first understand the company\u2019s business model and the competitive landscape.\n\n### What you'll learn\n- Research TechNova\u2019s business model, revenue streams, and growth trajectory. - Identify key industry trends affecting the AI software sector. - Review TechNova\u2019s financial statements and summarize the company\u2019s current standing. 29\n\n### What you'll do\nA one-page summary of TechNova\u2019s business model, industry trends, and key financial metrics (e.g., revenue, EBITDA).",
      "**Task 2:** Data Gathering and Setup: \n\n To perform a valuation analysis, you need to gather data for comparable companies in TechNova\u2019s sector. This includes identifying peers based on size, geography, and industry focus.\n\n### What you'll learn\n- Identify 5-7 comparable companies in the AI software sector using publicly available financial data. - Collect key financial metrics for these companies: revenue, EBITDA, net income, market capitalization, P/E ratio, and EV/EBITDA.\n\n### What you'll do\nCreate an Excel spreadsheet listing the comparable companies with their financial metrics and valuation multiples.",
      "**Task 3:** Build Valuation Models: \n\n With the data prepared, you will perform Comparable Company Analysis (CCA) and Precedent Transaction Analysis (PTA) to determine TechNova\u2019s valuation range.\n\n### What you'll learn\n- Calculate TechNova\u2019s implied valuation based on the median and mean EV/EBITDA and P/E ratios of the comparable companies. - Perform Precedent Transaction Analysis by identifying recent M&A transactions in the AI sector and calculating valuation multiples.\n\n### What you'll do\nAn Excel model showcasing valuation calculations for TechNova using both CCA and PTA methods.",
      "**Task 4:** Explain Valuation Insights Using GenAI: \n\n Clients often request simplified explana- tions of complex models. You are tasked with interpreting your valuation results using Generative AI tools to craft a clear narrative.\n\n### What you'll learn\n- Use ChatGPT or similar GenAI tools to generate a client-facing explanation of TechNova\u2019s valuation. - Highlight key insights from the comparable company analysis and precedent transaction analysis.\n\n### What you'll do\nA 250-word client-friendly summary explaining TechNova\u2019s valuation and the rationale behind it.",
      "**Task 5:** Audit and Responsible Valuation: \n\n Accuracy and integrity are critical in investment banking. You must audit your valuation for errors and ensure your recommendations align with ethical standards.\n\n### What you'll learn\n- Cross-check all calculations, ensuring no formula errors or data discrepancies. - Identify any assumptions made in your analysis and validate their reasonability. - Discuss potential risks in using comparable company analysis and precedent transaction methods.\n\n### What you'll do\nAn audit report highlighting the checks performed, assumptions validated, and risk considerations.",
      "**Task 6:** Present Your Recommendations: \n\n You are presenting your findings to the firm\u2019s se- nior leadership team. Your Investment Memo must clearly articulate your valuation analysis and provide actionable recommendations.\n\n### What you'll learn\n- Compile your analysis into a professional-grade Investment Memo. - Include an executive summary, valuation details, comparison charts, and a clear recommendation for TechNova. - Create a visually engaging presentation summarizing your findings.\n\n### What you'll do\n- A 3-5 page Investment Memo in PDF format. - A PowerPoint/Google Slides deck with 5-7 slides summarizing your valuation analysis and recommendations."
],
    "knowledgeTest": [],
    "submissionInstructions": [
      "Task 1: A one-page summary of TechNova\u2019s business model, industry trends, and key financial metrics (e.g., r...",
      "Task 2: Create an Excel spreadsheet listing the comparable companies with their financial metrics and valuat...",
      "Task 3: An Excel model showcasing valuation calculations for TechNova using both CCA and PTA methods.",
      "Task 4: A 250-word client-friendly summary explaining TechNova\u2019s valuation and the rationale behind it.",
      "Task 5: An audit report highlighting the checks performed, assumptions validated, and risk considerations.",
      "Task 6: A 3-5 page Investment Memo in PDF format. - A PowerPoint/Google Slides deck with 5-7 slides summariz..."
    ],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "13",
    "domain": "tech-development",
    "company": "Tech Innovations Ltd",
    "role": "Agentic Developer",
    "about_company": "**Tech Innovations Ltd**  is a leading global enterprise operating at the cutting edge of the Tech & Devel-\nopment sector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder value\nthrough trusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over 30\ncountries, we collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights &\nGenerative Technologies. You will gain insight into how our multi-disciplinary experts solve some of\nthe most complex business problems using state-of-the-art AI solutions.",
    "title": "LangGraph Developer",
    "industry": "IT",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the IT sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a LangGraph Developer, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "LangGraph",
      "State Machines",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "You will begin by understanding the foundational requirements for the LangGraph Developer - Build an Agentic Workflow project. Analyze the technical specifications provided by the stakeholders to ensure a successful outcome.\n\n### What you'll learn\nIdentify the core objectives and expected deliverables for the LangGraph Developer - Build an Agentic Workflow workflow. Map out the necessary architecture and dependencies.\n\n### What you'll do\n- Submit a 1-page design document outlining the architecture and required tools.",
      "Set up your local development environment and gather the necessary data or API keys for LangGraph Developer - Build an Agentic Workflow. Ensure all SDKs and libraries are correctly configured.\n\n### What you'll learn\nConfigure a robust environment using virtual environments, API access, and required datasets.\n\n### What you'll do\n- Provide a screenshot of your terminal showing successful environment initialization and API connection.",
      "Begin the core implementation phase for LangGraph Developer - Build an Agentic Workflow. You will write the primary code logic to achieve the minimum viable product (MVP).\n\n### What you'll learn\nTranslate the design document into executable code. Handle basic error cases and edge conditions.\n\n### What you'll do\n- Submit your main implementation script (.py or .js) demonstrating the core functionality.",
      "Enhance your implementation by integrating advanced Generative AI capabilities for LangGraph Developer - Build an Agentic Workflow. Fine-tune the prompts or logic to improve performance.\n\n### What you'll learn\nApply advanced AI techniques such as context window optimization or prompt chaining.\n\n### What you'll do\n- Submit a comparison report showing the before and after performance of your AI integration.",
      "Perform a comprehensive Responsible AI audit on your LangGraph Developer - Build an Agentic Workflow solution. Check for biases, safety guardrails, and data privacy compliance.\n\n### What you'll learn\nIdentify potential ethical concerns and implement safety filters in your application.\n\n### What you'll do\n- Submit an audit checklist and a short paragraph explaining the safety measures added.",
      "Prepare a final presentation for the LangGraph Developer - Build an Agentic Workflow project to showcase your work to the engineering team and product managers.\n\n### What you'll learn\nCommunicate complex technical implementations to both technical and non-technical stakeholders effectively.\n\n### What you'll do\n- Submit a 5-slide presentation summarizing your architecture, challenges, and final solution."
],
    "knowledgeTest": [],
    "submissionInstructions": [],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "14",
    "domain": "tech-development",
    "company": "CX Solutions",
    "role": "Customer Support AI Engineer",
    "about_company": "**CX Solutions**  is a leading global enterprise operating at the cutting edge of the Customer Service sector,\nwith a mission \u2019To revolutionize service delivery and create long-term stakeholder value through trusted\ninnovation\u2019.\nWith an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we\ncollectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, CX Solutions Insights & Gener-\native Technologies. You will gain insight into how our multi-disciplinary experts solve some of the\nmost complex business problems using state-of-the-art AI solutions.",
    "title": "Customer Support AI Engineer",
    "industry": "IT",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the IT sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a AI Agent Developer, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "LangChain",
      "Dialogflow / Botpress",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "LangGraph / LangChain",
      "Skillzza AI Mentor"
    ],
    "steps": [
      "**Task 1:** Understand - Analyzing Customer Queries:: You need to understand the common issues customers face to design an effective support agent.\n\n### What you'll learn\nAnalyze a sample dataset of customer support tickets to identify the top 5 most common issues.\n\n### What you'll do\n- Submit a brief report outlining the top 5 customer issues and how an AI agent can address them.",
      "**Task 2:** Data/Setup - Preparing the FAQ Dataset:: You need to format the FAQ data for training a conversational AI model. This involves cleaning the text, removing duplicates, and ensuring FAQs are mapped to clear response templates.\n\n### What you'll learn\nPreprocess the FAQ dataset (remove noise, duplicates, and irrelevant data). Structure the data into a Q&A format (e.g., JSON or CSV format) suitable for training. Create sample response templates for each FAQ category.\n\n### What you'll do\n- Submit the cleaned and structured FAQ dataset along with response templates.",
      "**Task 3:** Build/Execute - Developing the AI Agent:: It's time to build the AI agent! Using OpenAI GPT (or an alternative NLP platform), train the model using the FAQ dataset and create dialogue flows to handle customer queries.\n\n### What you'll learn\nTrain the conversational AI model using the prepared dataset. Build logical dialogue flows for handling different FAQ categories. Test the model locally to ensure it responds accurately to queries.\n\n### What you'll do\n- Submit the Python code (or equivalent) for training and deploying the AI model, along with screenshots of test conversations.",
      "**Task 4:** GenAI/Explanation - Handling Escalations:: The AI agent needs to know when to escalate complex issues to a human agent. You will integrate logic to detect frustration or complex queries.\n\n### What you'll learn\nImplement sentiment analysis to detect user frustration. Define trigger conditions for handoff to a human support representative.\n\n### What you'll do\n- Submit a logic flow diagram and code snippet demonstrating the escalation process.",
      "**Task 5:** Audit/Responsible AI - Ensuring Ethical AI Standards:: You must ensure the AI agent operates ethically, avoiding biased or inappropriate responses.\n\n### What you'll learn\nAudit the model's responses against a set of ethical guidelines. Implement safety filters and fallback responses for sensitive topics.\n\n### What you'll do\n- Submit an ethical audit report detailing the safety filters implemented and a log of edge-case tests.",
      "**Task 6:** Present Recommendations - Improving KPIs:: Prepare a final presentation for the Customer Support Director showcasing the AI agent's capabilities and its expected impact on response times.\n\n### What you'll learn\nPrepare a presentation with metrics showing the agent's impact on KPIs. Create a live demo showcasing the agent handling queries and escalating tickets. Recommend further improvements to the AI agent.\n\n### What you'll do\n- Submit the presentation slides and demo video."
],
    "knowledgeTest": [],
    "submissionInstructions": [],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "15",
    "domain": "tech-development",
    "company": "SupportSync",
    "role": "Conversational AI Developer",
    "about_company": "**SupportSync**  is a leading global enterprise operating at the cutting edge of the Customer Service sector,\nwith a mission \u2019To revolutionize service delivery and create long-term stakeholder value through trusted\ninnovation\u2019.\nWith an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we\ncollectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, SupportSync Insights & Genera-\ntive Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most\ncomplex business problems using state-of-the-art AI solutions.",
    "title": "Conversational AI Developer",
    "industry": "IT",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the IT sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a AI Agent Developer, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "LangChain",
      "CRM Integration (Salesforce)",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "**Task 1:** Understand the Problem and Define the Avatar Persona:: The coworking space brand has asked for a friendly and professional virtual receptionist that can handle interactions with users in English. The receptionist must reflect the brand\u2019s values: professionalism, inclusivity, and innovation.\n\n### What you'll learn\n- Study the company background and target audience. - Define a detailed persona for the virtual receptionist, including its appearance, tone, and key personality traits. - Draft a document that outlines the avatar\u2019s objective and scope of interactions (e.g., greeting visitors, answering FAQs, scheduling appointments). \n\n### What you'll do\n- A detailed persona document with at least the following fields: Name, Appearance, Personality Traits, Tone of Voice, and Key Responsibilitie.",
      "**Task 2:** Build the Knowledge Base for the Avatar:: The virtual receptionist will need to answer FAQs and provide assistance to users. You are tasked with building an initial knowledge base that will serve as the foundation for the avatar\u2019s conversational abilities.\n\n### What you'll learn\n- Research common FAQs for coworking spaces (e.g., pricing, amenities, booking rules). - Organize the questions and answers into a structured format using Google Sheets or Airtable. - Include at least 20 questions and answers in the knowledge base.\n\n### What you'll do\n- A knowledge base in Google Sheets or Airtable with fields: Question, Answer, and Tags (e.g., pricing, scheduling.",
      "**Task 3:** Configure the Avatar\u2019s Chatbot and Train the AI:: It\u2019s time to bring the virtual receptionist to life! You will set up a chatbot platform, import the knowledge base, and train the AI to handle user queries.\n\n### What you'll learn\n- Choose a conversational AI platform (e.g., Dialogflow, Rasa). - Create intents and entities based on the knowledge base. - Train the AI using the imported data and refine its ability to understand user queries.\n\n### What you'll do\n- A working chatbot model that can handle the 20 FAQs with appropriate responses. - Screenshots or a short video demonstrating the chatbot\u2019s functionalit.",
      "**Task 4:** Generate AI Avatar Scripts for Conversations:: The virtual receptionist\u2019s conversations must feel natural and engaging. You will design scripted responses and use a generative AI tool to generate variations of these scripts.\n\n### What you'll learn\n- Write a list of 10 scripted dialogues for common scenarios (e.g., greeting visitors, answering FAQs, handling complaints). - Use a generative AI tool like OpenAI\u2019s GPT to create variations of these scripts. - Ensure the scripts align with the persona\u2019s tone and personality.\n\n### What you'll do\n- A document with the original scripts and AI-generated variations for the 10 sce- nario.",
      "**Task 5:** Test and Audit the Avatar for Responsible AI Practices:: Before launching the virtual receptionist, you need to test its performance and ensure it aligns with ethical AI principles, such as avoiding bias and ensuring inclusivity.\n\n### What you'll learn\n- Test the avatar with 10 different user inputs, including edge cases (e.g., ambiguous or offensive queries). - Document the avatar\u2019s responses and identify areas for improvement. - Write a short report on how the avatar adheres to responsible AI principles.\n\n### What you'll do\n- A testing report with user input, avatar output, and identified issues. - A brief summary of the ethical considerations addressed in the avatar\u2019s desig.",
      "**Task 6:** Present Your Final Avatar and Recommendations:: The client is excited to see the final virtual receptionist in action. You will present your work, explain your design choices, and outline recommendations for future improvements.\n\n### What you'll learn\n- Create a presentation (slides or a video) showcasing the avatar\u2019s persona, knowledge base, conversation flow, and testing results. - Include a demo of the avatar handling at least 38 5 different scenarios. - Suggest improvements or future features for the avatar.\n\n### What you'll do\n- A presentation (PDF or video) with the avatar\u2019s demo and recommendations for future iterations."
],
    "knowledgeTest": [],
    "submissionInstructions": [],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "16",
    "domain": "tech-development",
    "company": "ClientFirst Networks",
    "role": "Predictive AI Specialist",
    "about_company": "**ClientFirst Networks**  is a leading global enterprise operating at the cutting edge of the Customer Service\nsector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder value through\ntrusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries,\nwe collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, ClientFirst Networks Insights &\nGenerative Technologies. You will gain insight into how our multi-disciplinary experts solve some of\nthe most complex business problems using state-of-the-art AI solutions.",
    "title": "Predictive Analytics Specialist",
    "industry": "IT",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the IT sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a AI Agent Developer, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "LangChain",
      "ATS Integration",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "**Task 1:** Understand - Explore Customer Churn Dynamics:: Your company has collected customer health data, including engagement metrics, support tickets, product usage, and customer tenure. The leadership team has tasked you with understanding the key factors contributing to customer churn. 40\n\n### What you'll learn\n- Study the dataset provided (\u2018customer health data.csv\u2018). - Identify and define key features (e.g., usage frequency, number of support tickets, NPS scores). - Research and summarize the common drivers of churn in SaaS businesses.\n\n### What you'll do\n- Submit a one-page summary of churn drivers with a brief description of the dataset features.",
      "**Task 2:** Data/Setup - Clean and Prepare the Data:: The raw dataset has missing values and in- consistent entries. To ensure the accuracy of your analysis, you need to clean and preprocess the data.\n\n### What you'll learn\n- Handle missing or null values appropriately. - Encode categorical variables (e.g., customer segment, industry). - Scale numeric features for consistent input to machine learning models. - Split the data into training and testing sets (80/20 split).\n\n### What you'll do\n- Submit a clean dataset and a description of the preprocessing steps you performed.",
      "**Task 3:** Build/Execute - Predict Churn Using Machine Learning:: You are now ready to build a predictive model to classify customers as either \u201dchurn\u201d or \u201dnot churn.\u201d\n\n### What you'll learn\n- Train a Logistic Regression model to predict churn. - Evaluate the model\u2019s performance using metrics like accuracy, precision, recall, and F1-score. - Perform hyperparameter tuning to improve model performance.\n\n### What you'll do\n- Submit the trained model, evaluation metrics, and a short explanation of how you improved model performance.",
      "**Task 4:** GenAI/Explanation - Identify Key Drivers of Churn:: Leadership wants to know *why* your model predicts certain customers are at risk of churning. Use interpretability techniques to explain the predictions.\n\n### What you'll learn\n- Use SHAP (SHapley Additive exPlanations) to identify the top features influencing churn predictions. - Visualize and summarize the contribution of each feature to the model\u2019s decisions. - Highlight one example of a high-risk customer and explain why the model flagged them. \n\n### What you'll do\n- Submit a report with SHAP visualizations and an explanation of key churn drivers.",
      "**Task 5:** Audit/Responsible AI - Ensure Model Fairness:: The leadership team is concerned about potential bias in the model. For instance, are certain customer segments unfairly flagged as high risk?\n\n### What you'll learn\n- Analyze the fairness of your model across different customer demographics (e.g., industry, region). - Identify any biases and adjust the model or preprocessing steps if necessary. - Document your Responsible AI process and findings.\n\n### What you'll do\n- Submit a fairness analysis report with any corrective actions taken.",
      "**Task 6:** Present Recommendation - Propose a Retention Strategy:: You\u2019ve identified high-risk cus- tomers and the key drivers of churn. It\u2019s now time to present a retention strategy to the leadership team.\n\n### What you'll learn\n- Create a customer success plan for one high-risk customer, including engagement strategies, personalized recommendations, and a measurable action plan. - Summarize overall recommendations for reducing churn. 41\n\n### What you'll do\n- Submit a 3-slide presentation or report summarizing: 1. High-risk customer profile and proposed success plan. 2. Insights from churn analysis. 3. Retention strategy recommendations."
],
    "knowledgeTest": [],
    "submissionInstructions": [],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "17",
    "domain": "tech-development",
    "company": "Marketing Global Dynamics",
    "role": "CX Manager",
    "about_company": "**Marketing Global Dynamics**  is a leading global enterprise operating at the cutting edge of the Marketing\n& Branding sector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder\nvalue through trusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over\n30 countries, we collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Marketing Global Dynamics In-\nsights & Generative Technologies. You will gain insight into how our multi-disciplinary experts\nsolve some of the most complex business problems using state-of-the-art AI solutions.",
    "title": "AI Customer Service Manager",
    "industry": "CX / AI",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the CX / AI sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a AI Customer Service Manager, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Conversational AI Design",
      "CX Strategy",
      "Analytics",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [
      "Task 1: Submit a summary report highlighting: 1. Campaigns ranked by performance (e.g., highest ROI). 2. Any...",
      "Task 2: Submit a document with: 1. Defined audience segments and their characteristics. 2. The rationale for...",
      "Task 3: Submit: 1. Three sets of ad copy tailored to each audience segment. 2. Justifi- cation for how the c...",
      "Task 4: Submit: 1. A before-and-after comparison of the campaign metrics (e.g., CTR, ROAS). 2. A short expla...",
      "Task 5: Submit a revised ad copy along with a brief explanation of the changes made and why they were necess...",
      "Task 6: Submit your presentation in PDF format. \u2014 ## MCQs Post Task Completion 1. What does CTR stand for in..."
    ],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "**Task 1:** Understand Campaign Metrics: \n\n You are handed the campaign performance report for a recent marketing initiative. The report includes metrics like impressions, clicks, CTR, CPC, conversions, and ROAS. Your first task is to understand the KPIs and identify which campaigns are underperforming. 43\n\n### What you'll learn\n- Review the dataset provided, which includes metrics for three cam- paigns: *Google Ads*, *Facebook Ads*, and *Email Marketing*. - Calculate key performance metrics and identify trends.\n\n### What you'll do\nSubmit a summary report highlighting: 1. Campaigns ranked by performance (e.g., highest ROI). 2. Any anomalies or trends observe.",
      "**Task 2:** Data Segmentation and Audience Analysis: \n\n The marketing team suspects that poor audience targeting is contributing to underwhelming campaign performance. You are tasked with seg- menting the audience based on demographics, interests, and past purchasing behavior.\n\n### What you'll learn\n- Use the audience data provided (age, gender, location, purchase his- tory). - Create at least three audience segments (e.g., \u201dEco-conscious millennials,\u201d \u201dBudget-friendly families\u201d).\n\n### What you'll do\nSubmit a document with: 1. Defined audience segments and their characteristics. 2. The rationale for selecting these segment.",
      "**Task 3:** Generate AI-Powered Campaign Content: \n\n Once the audience segments are defined, the marketing team needs fresh content tailored to each segment. You\u2019ve been asked to use Generative AI to create ad copy for *Google Ads* and *Facebook Ads*.\n\n### What you'll learn\n- Use a Generative AI tool (e.g., ChatGPT) to create ad copy based on the audience segments defined in Task 2. - Ensure the content aligns with the company\u2019s eco-friendly brand voice.\n\n### What you'll do\nSubmit: 1. Three sets of ad copy tailored to each audience segment. 2. Justifi- cation for how the content aligns with the audience\u2019s needs and the brand\u2019s identit.",
      "**Task 4:** Optimise Campaigns Using AI: \n\n The marketing team has requested you to use an AI- powered optimisation tool to simulate changes to the campaign. Your goal is to increase ROI while staying within the budget.\n\n### What you'll learn\n- Use the provided campaign data and feed it into the AI optimisation tool (e.g., Google Ads Performance Planner). - Adjust variables like budget allocation, bid strategy, and targeting.\n\n### What you'll do\nSubmit: 1. A before-and-after comparison of the campaign metrics (e.g., CTR, ROAS). 2. A short explanation of what changes were made and wh.",
      "**Task 5:** Audit for Responsible AI: \n\n Your manager is concerned about ethical considerations in using Generative AI for marketing. She asks you to assess the AI-generated content for biases and ensure it is inclusive.\n\n### What you'll learn\n- Review the ad copy generated in Task 3 for potential biases (e.g., stereotypes, exclusionary language). - Revise the content to ensure it aligns with ethical marketing practices.\n\n### What you'll do\nSubmit a revised ad copy along with a brief explanation of the changes made and why they were necessar.",
      "**Task 6:** Present Recommendations: \n\n You are required to present your findings and recommen- dations to the Marketing Director and Growth Team. This presentation is critical to securing approval for implementing your optimisation strategy.\n\n### What you'll learn\n- Prepare a 5-slide presentation covering: 1. Campaign performance analysis (Task 1). 2. Audience segmentation (Task 2). 3. AI-generated content (Task 3). 4. Optimisation strategy (Task 4). 5. Responsible AI audit (Task 5).\n\n### What you'll do\nSubmit your presentation in PDF format."
],
    "knowledgeTest": [],
    "submissionInstructions": [
      "Task 1: Submit a summary report highlighting: 1. Campaigns ranked by performance (e.g., highest ROI). 2. Any...",
      "Task 2: Submit a document with: 1. Defined audience segments and their characteristics. 2. The rationale for...",
      "Task 3: Submit: 1. Three sets of ad copy tailored to each audience segment. 2. Justifi- cation for how the c...",
      "Task 4: Submit: 1. A before-and-after comparison of the campaign metrics (e.g., CTR, ROAS). 2. A short expla...",
      "Task 5: Submit a revised ad copy along with a brief explanation of the changes made and why they were necess...",
      "Task 6: Submit your presentation in PDF format. \u2014 ## MCQs Post Task Completion 1. What does CTR stand for in..."
    ],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "18",
    "domain": "marketing-branding",
    "company": "Marketing Innovations Ltd",
    "role": "Social Media Intelligence Analyst",
    "about_company": "**Marketing Innovations Ltd**  is a leading global enterprise operating at the cutting edge of the Marketing\n& Branding sector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder\nvalue through trusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over\n30 countries, we collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Marketing Innovations Ltd In-\nsights & Generative Technologies. You will gain insight into how our multi-disciplinary experts\nsolve some of the most complex business problems using state-of-the-art AI solutions.",
    "title": "Social Media Intelligence Analyst",
    "industry": "Marketing & Branding",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the Marketing & Branding sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a Specialist, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python / Pandas",
      "NLP (Spacy/NLTK)",
      "Web Scraping",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [
      "Task 1: A 2-3 slide summary of FitSphere\u2019s social media presence and its competi- tors\u2019 comparative analysis...",
      "Task 2: A cleaned CSV file with the required fields, ready for analysis.",
      "Task 3: Updated CSV with sentiment scores. - A bar chart or pie chart summa- rizing sentiment distribution.",
      "Task 4: A thematic analysis report with key themes and examples of tweets under each category.",
      "Task 5: A dashboard or set of visualizations comparing FitSphere\u2019s social media metrics with competitors.",
      "Task 6: A presentation deck (PPT or PDF). - A 5-minute recorded video explaining your analysis and recommend..."
    ],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "**Task 1:** Understand the Brand & Competitors: \n\n Your client\u2019s brand, **FitSphere**, is a direct-to-consumer fitness equipment brand. They provide high-quality, portable fitness gear for home workouts. Their key competitors are **HomeFit** and **ActiveEdge**. You need to understand the brand\u2019s market positioning and gather initial data for analysis. 46\n\n### What you'll learn\n1. Research the brand FitSphere, its product offerings, and its target audience. 2. Identify 3 key competitors and compare their social media presence, including platforms they are most active on (e.g., Instagram, Twitter, TikTok). 3. Prepare a summary of FitSphere\u2019s strengths and weaknesses compared to its competitors.\n\n### What you'll do\n- A 2-3 slide summary of FitSphere\u2019s social media presence and its competi- tors\u2019 comparative analysi.",
      "**Task 2:** Collect and Prepare Social Media Data: \n\n Your team has access to FitSphere\u2019s public Twitter data via an API. You need to extract 500 recent tweets mentioning the brand and prepare the data for analysis.\n\n### What you'll learn\n1. Use the Twitter API (or a provided dataset) to extract 500 tweets mentioning FitSphere. 2. Clean and preprocess the data: remove duplicates, stopwords, and irrelevant tweets. 3. Organize the cleaned data in a CSV file with the following columns: - Timestamp - Username - Tweet content - Engagement metrics (likes, retweets, replies)\n\n### What you'll do\n- A cleaned CSV file with the required fields, ready for analysi.",
      "**Task 3:** Analyze Sentiment of the Conversations: \n\n Your client wants to understand how customers feel about their brand. Use NLP-based sentiment analysis to classify the tweets as positive, negative, or neutral.\n\n### What you'll learn\n1. Use Python and the VADER or TextBlob library to perform sentiment analysis on the tweets. 2. Add a new column to the CSV file for sentiment score (positive, negative, neutral). 3. Summarize the overall sentiment distribution for FitSphere.\n\n### What you'll do\n- Updated CSV with sentiment scores. - A bar chart or pie chart summa- rizing sentiment distributio.",
      "**Task 4:** Identify Themes Using Generative AI: \n\n Your client wants to know the major themes in customer conversations. Summarize the key topics and sentiments using an AI-powered tool.\n\n### What you'll learn\n1. Use OpenAI GPT (or another NLP model) to identify and summarize key themes in the tweets. 2. Categorize the themes into positive and negative buckets (e.g., \u201cQuality Issues,\u201d \u201cGreat Customer Service\u201d). 3. Write a 250-word summary highlighting the major themes.\n\n### What you'll do\n- A thematic analysis report with key themes and examples of tweets under each categor.",
      "**Task 5:** Conduct Competitor Benchmarking: \n\n Your client wants to know how their social media performance compares to competitors. Use a provided dataset containing social media metrics for FitSphere, HomeFit, and ActiveEdge.\n\n### What you'll learn\n1. Analyze the dataset for key metrics such as engagement rate, sentiment distribution, and follower growth. 2. Compare FitSphere\u2019s metrics to its competitors and identify areas where the brand is leading or lagging. 3. Create a dashboard or visualizations to showcase the comparative performance.\n\n### What you'll do\n- A dashboard or set of visualizations comparing FitSphere\u2019s social media metrics with competitor.",
      "**Task 6:** Present Recommendations: \n\n Your client expects a comprehensive report with ac- tionable insights. They need your recommendations to improve their social media strategy based on your analysis.\n\n### What you'll learn\n1. Create a 5-7 slide presentation summarizing: - Sentiment analysis and thematic insights. - Competitive benchmarking results. - Key recommendations for improving social media strategy. 2. Record a 5-minute video presenting your findings.\n\n### What you'll do\n- A presentation deck (PPT or PDF). - A 5-minute recorded video explaining your analysis and recommendations. \u2014."
],
    "knowledgeTest": [],
    "submissionInstructions": [
      "Task 1: A 2-3 slide summary of FitSphere\u2019s social media presence and its competi- tors\u2019 comparative analysis...",
      "Task 2: A cleaned CSV file with the required fields, ready for analysis.",
      "Task 3: Updated CSV with sentiment scores. - A bar chart or pie chart summa- rizing sentiment distribution.",
      "Task 4: A thematic analysis report with key themes and examples of tweets under each category.",
      "Task 5: A dashboard or set of visualizations comparing FitSphere\u2019s social media metrics with competitors.",
      "Task 6: A presentation deck (PPT or PDF). - A 5-minute recorded video explaining your analysis and recommend..."
    ],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "19",
    "domain": "design-ui-ux",
    "company": "Design Global Dynamics",
    "role": "UI/UX Designer",
    "about_company": "**Design Global Dynamics**  is a leading global enterprise operating at the cutting edge of the Design &\nUI/UX sector, with a mission \u2019To revolutionize service delivery and create long-term stakeholder value\nthrough trusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a presence in over 30\ncountries, we collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Design Global Dynamics Insights\n& Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some\nof the most complex business problems using state-of-the-art AI solutions.",
    "title": "UI/UX Designer",
    "industry": "Design & UI/UX",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the Design & UI/UX sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a Specialist, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Figma",
      "User Journey Mapping",
      "Prototyping",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "Skillzza AI Mentor",
      "Generative AI APIs (Groq/OpenAI)"
    ],
    "steps": [
      "**Task 1:** Understand - Conduct User Research:: You are tasked with understanding the target audience for the AI mental wellness assistant. You need to uncover user pain points, preferences, and expectations for an AI-powered product that supports mental health.\n\n### What you'll learn\n- Create a Google Form survey with 10 targeted questions to gather insights on user needs (e.g., \u201dWhat challenges do you face in maintaining mental wellness?\u201d). - Conduct 3 virtual interviews with potential users to uncover qualitative insights.\n\n### What you'll do\n- Submit a short report summarizing the survey results and key findings from inter- views. Include charts or graphs representing quantitative dat.",
      "**Task 2:** Data/Setup - Develop Personas:: Based on your user research, you need to create detailed personas that represent the core segments of your audience. These personas will guide your design decisions throughout the project.\n\n### What you'll learn\n- Use Miro or a similar tool to create 3 personas. Include key details: demographics, goals, frustrations, and behaviors. - Highlight how each persona interacts with AI products and their expectations.\n\n### What you'll do\n- Submit a PDF or image export of your personas from Miro, ensuring each persona is well-defined with visual.",
      "**Task 3:** Build/Execute - Design the User Flow:: You need to map out the user journey for inter- acting with the AI mental wellness assistant, from onboarding to using its features (e.g., mood tracking, chatbot conversations).\n\n### What you'll learn\n- Use Miro to create a user flow diagram that highlights key paths like onboarding, accessing features, and receiving insights. - Define decision points and actions at each step (e.g., \u201dUser selects mood tracker \u2192AI provides analysis\u201d).\n\n### What you'll do\n- Submit a user flow diagram exported from Miro. Include annotations explaining each step and decision poin.",
      "**Task 4:** GenAI/Explanation - Create Wireframes:: It\u2019s time to convert your user flow into wire- frames for core screens of the AI product. Focus on intuitive layouts and ensuring users can easily interact with AI features.\n\n### What you'll learn\n- Design wireframes for 3 primary screens: Onboarding, Mood Tracking Dashboard, and Chatbot Interface. - Ensure your designs follow accessibility guidelines (e.g., WCAG contrast standards).\n\n### What you'll do\n- Submit high-quality wireframes created in Figma or Adobe XD. Include annotations describing design choice.",
      "**Task 5:** Audit/Responsible AI - Conduct Usability Testing:: You need to ensure your wireframes deliver a seamless experience. Conduct usability tests to gather feedback and identify areas for improve- ment.\n\n### What you'll learn\n- Share your wireframes with 3 test users and ask them to perform specific tasks (e.g., \u201dNavigate to the Mood Tracker\u201d). - Gather feedback on usability issues and suggestions for improvement.\n\n### What you'll do\n- Submit a usability test report summarizing participant feedback, including a prior- itized list of design improvement.",
      "**Task 6:** Present Recommendation - Final Design Proposal:: You\u2019re presenting your design recom- mendations to the product team. Use data from research, personas, and usability tests to justify your decisions.\n\n### What you'll learn\n- Create a presentation deck showcasing your design process: research findings, personas, user flow, wireframes, and test results. - Include actionable recommendations for the product team. 50\n\n### What you'll do\n- Submit your presentation as a PDF or PowerPoint file. Ensure it\u2019s visually engaging and includes clear, data-driven insights."
],
    "knowledgeTest": [],
    "submissionInstructions": [],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  },
  {
    "id": "20",
    "domain": "government-public-services",
    "company": "Government Global Dynamics",
    "role": "Citizen Services AI Agent",
    "about_company": "**Government Global Dynamics**  is a leading global enterprise operating at the cutting edge of the Gov-\nernment & Public Services sector, with a mission \u2019To revolutionize service delivery and create long-term\nstakeholder value through trusted innovation\u2019. With an annual revenue exceeding $5.4 billion and a\npresence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\n\nThis job simulation is with our advanced innovation division, Government Global Dynamics\nInsights & Generative Technologies. You will gain insight into how our multi-disciplinary experts\nsolve some of the most complex business problems using state-of-the-art AI solutions.",
    "title": "Citizen Services AI Agent",
    "industry": "Government & Public Services",
    "problem_statement": "Tech Innovations Ltd is a leading global enterprise operating at the cutting edge of the Government & Public Services sector, with a mission 'To revolutionize service delivery and create long-term stakeholder value through trusted innovation'. With an annual revenue exceeding $5.4 billion and a presence in over 30 countries, we collectively employ over 42,000 passionate professionals.\n\nThis job simulation is with our advanced innovation division, Tech Innovations Ltd Insights & Generative Technologies. You will gain insight into how our multi-disciplinary experts solve some of the most complex business problems using state-of-the-art AI solutions.\n\nAs a Specialist, you are tasked with delivering an innovative AI-driven solution capable of helping users navigate complex challenges efficiently. From understanding initial requirements to integrating advanced models and evaluating performance, your mission is to design a robust application that balances functionality, usability, and ethical considerations. Imagine working on a groundbreaking AI product for a global enterprise that aims to revolutionize productivity and technological capabilities. Your mission is to design, build, and test a specialized tool equipped with state-of-the-art functionality and a goal-oriented problem-solving approach. The solution should be able to seamlessly integrate into existing workflows, deliver high-quality outputs, and meet the specific needs of the business. You will also focus on responsible AI practices, ensuring that your deliverables meet strict ethical standards while offering a premium user experience.",
    "difficulty": "Intermediate",
    "solved": false,
    "tags": [
      "Python",
      "Data Privacy Frameworks",
      "NLP",
      "Skillzza AI Mentor"
    ],
    "estimatedTime": "12-18 hrs",
    "learn": [],
    "task": "Analyze the problem and build an AI-assisted engine to solve it.",
    "expectedOutcome": [
      "Task 1: Submit a short report (300 words) with: - Key patterns in the dataset. - Suggestions for how AI can ...",
      "Task 2: Submit the cleaned dataset and a summary of your preprocessing steps.",
      "Task 3: Submit the trained model file and a report on model performance (include a confusion matrix).",
      "Task 4: Submit your knowledge retrieval script and an output file showing the top 3 articles for 10 test com...",
      "Task 5: Submit an audit report (300 words) outlining your findings and proposed solutions.",
      "Task 6: Submit your slides and video walkthrough. \u2014 ## 53"
    ],
    "tools": [
      "Python / Jupyter Notebooks",
      "ChatGPT / Claude (Prompting)",
      "LangGraph / LangChain",
      "Skillzza AI Mentor"
    ],
    "steps": [
      "**Task 1:** Understand the Problem: \n\n A government services portal receives 10,000+ citizen complaints every month. These complaints vary from potholes and waste management to utility bill disputes. Your first step is to understand the dataset and problem statement. 52\n\n### What you'll learn\n1. Explore a provided dataset containing complaints with fields: - \u2018Complaint ID\u2018: Unique identifier. - \u2018Citizen Name\u2018: Name of complainant. - \u2018Complaint Text\u2018: The full description of the complaint. - \u2018Department\u2018: Department responsible for resolution (e.g., Waste Management, Public Works). - \u2018Urgency\u2018: Low, Medium, High. - \u2018Status\u2018: Resolved, Pending, Escalated. 2. Analyze the dataset for patterns, such as the most common complaint types and departments with the highest complaint volumes.\n\n### What you'll do\nSubmit a short report (300 words) with: - Key patterns in the dataset. - Suggestions for how AI can reduce backlog and improve response time.",
      "**Task 2:** Prepare the Data: \n\n You must clean and preprocess the complaint data to prepare it for text classification.\n\n### What you'll learn\n1. Perform text preprocessing on the \u2018Complaint Text\u2018 field, in- cluding: - Tokenization. - Stopword removal. - Lemmatization. 2. Split the dataset into training, validation, and test sets. 3. Encode the labels (\u2018Department\u2018) for classification using one-hot encoding or label encoding.\n\n### What you'll do\nSubmit the cleaned dataset and a summary of your preprocessing step.",
      "**Task 3:** Build the Classification Model: \n\n Now, you will build a machine learning model to classify complaints into the correct department.\n\n### What you'll learn\n1. Train a text classification model using Hugging Face Transform- ers (e.g., DistilBERT). 2. Evaluate the model using metrics like accuracy, precision, recall, and F1-score. Aim for an F1-score \u00bf 0.8. 3. Save the trained model for later use in the pipeline.\n\n### What you'll do\nSubmit the trained model file and a report on model performance (include a confusion matrix.",
      "**Task 4:** Integrate Knowledge Retrieval: \n\n Once a complaint is classified, the AI Agent should retrieve relevant knowledge articles to suggest resolutions.\n\n### What you'll learn\n1. Load a provided knowledge base with fields: - \u2018Article ID\u2018: Unique identifier. - \u2018Department\u2018: Associated department. - \u2018Keywords\u2018: Tags for retrieval. - \u2018Arti- cle Text\u2018: Full text of the article. 2. Use embeddings (e.g., SentenceTransformers) to generate vector representations for the articles and complaints. 3. Implement a similarity search algorithm (e.g., cosine similarity) to retrieve the top 3 articles for each complaint.\n\n### What you'll do\nSubmit your knowledge retrieval script and an output file showing the top 3 articles for 10 test complaint.",
      "**Task 5:** Test Responsible AI Practices: \n\n AI systems for citizen services must be fair and unbiased. You need to audit your classification model for potential biases.\n\n### What you'll learn\n1. Analyze model performance across different demographics (e.g., names indicating gender or region). 2. Check for overrepresentation or neglect of certain complaint categories. 3. Propose methods to address any bias found (e.g., rebalancing training data).\n\n### What you'll do\nSubmit an audit report (300 words) outlining your findings and proposed solution.",
      "**Task 6:** Present Final Recommendation: \n\n You are pitching your solution to government stakeholders. Summarize your AI pipeline and demonstrate its impact on complaint resolution efficiency.\n\n### What you'll learn\n1. Create a presentation (5 slides) covering: - Problem statement and dataset analysis. - Classification model results. - Knowledge retrieval accuracy. - Responsible AI findings. - Overall impact and next steps. 2. Record a 3-minute video walkthrough of your presentation.\n\n### What you'll do\nSubmit your slides and video walkthrough."
],
    "knowledgeTest": [],
    "submissionInstructions": [
      "Task 1: Submit a short report (300 words) with: - Key patterns in the dataset. - Suggestions for how AI can ...",
      "Task 2: Submit the cleaned dataset and a summary of your preprocessing steps.",
      "Task 3: Submit the trained model file and a report on model performance (include a confusion matrix).",
      "Task 4: Submit your knowledge retrieval script and an output file showing the top 3 articles for 10 test com...",
      "Task 5: Submit an audit report (300 words) outlining your findings and proposed solutions.",
      "Task 6: Submit your slides and video walkthrough. \u2014 ## 53"
    ],
    "mcqs": [
      {
            "id": 1,
            "question": "What is the primary goal of this business scenario?",
            "options": [
                  "To automate all jobs",
                  "To leverage AI for operational efficiency",
                  "To build a basic website",
                  "To write manual reports"
            ],
            "correctAnswer": 1
      },
      {
            "id": 2,
            "question": "Which of the following is a key Responsible AI principle?",
            "options": [
                  "Ignoring data privacy",
                  "Assuming AI is always correct",
                  "Human oversight and explainability",
                  "Deploying untested models"
            ],
            "correctAnswer": 2
      },
      {
            "id": 3,
            "question": "What does a Generative AI model primarily do?",
            "options": [
                  "Store passwords securely",
                  "Generate new content based on patterns learned from training data",
                  "Fix hardware issues",
                  "Calculate exact mathematical proofs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 4,
            "question": "In the context of AI Agents, what is 'memory' used for?",
            "options": [
                  "Storing the AI model's weights",
                  "Retaining context from past interactions to improve future responses",
                  "Caching web pages for faster browsing",
                  "Increasing the hardware RAM on the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 5,
            "question": "What is the role of an orchestrator in a multi-agent system?",
            "options": [
                  "To design the user interface",
                  "To coordinate tasks between specialized agents",
                  "To manually review all outputs before sending to user",
                  "To write the underlying LLM code"
            ],
            "correctAnswer": 1
      },
      {
            "id": 6,
            "question": "Which framework is commonly used for building AI agents?",
            "options": [
                  "React",
                  "LangChain",
                  "Spring Boot",
                  "Express"
            ],
            "correctAnswer": 1
      },
      {
            "id": 7,
            "question": "What does RAG stand for in AI systems?",
            "options": [
                  "Random Access Generation",
                  "Retrieval-Augmented Generation",
                  "Routing and Generation",
                  "Recurrent AI Graphs"
            ],
            "correctAnswer": 1
      },
      {
            "id": 8,
            "question": "What is the purpose of a vector database in an AI pipeline?",
            "options": [
                  "To store relational tables",
                  "To host a frontend application",
                  "To store and search high-dimensional embeddings efficiently",
                  "To manage user passwords"
            ],
            "correctAnswer": 2
      },
      {
            "id": 9,
            "question": "What is a 'prompt injection' attack?",
            "options": [
                  "Injecting a virus into a database",
                  "Manipulating an AI model by providing malicious input to override instructions",
                  "Updating an AI model with new data",
                  "Creating a new prompt template"
            ],
            "correctAnswer": 1
      },
      {
            "id": 10,
            "question": "What does human-in-the-loop (HITL) mean?",
            "options": [
                  "The AI model works completely autonomously",
                  "Humans must write every line of code",
                  "A human reviews or guides the AI at critical decision points",
                  "A human physically inputs the data"
            ],
            "correctAnswer": 2
      },
      {
            "id": 11,
            "question": "Why is tokenization important for LLMs?",
            "options": [
                  "It creates cryptographic tokens",
                  "It breaks text into manageable pieces for the model to process",
                  "It adds watermarks to images",
                  "It manages API billing"
            ],
            "correctAnswer": 1
      },
      {
            "id": 12,
            "question": "What is few-shot prompting?",
            "options": [
                  "Providing zero examples in a prompt",
                  "Providing a small number of examples in the prompt to guide the model's output",
                  "Providing millions of examples to fine-tune the model",
                  "Taking a few screenshots of the output"
            ],
            "correctAnswer": 1
      },
      {
            "id": 13,
            "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
            "options": [
                  "Frames per second",
                  "Relevance, groundedness, and coherence",
                  "Bandwidth speed",
                  "Database transaction rate"
            ],
            "correctAnswer": 1
      },
      {
            "id": 14,
            "question": "What is the function of an AI agent's 'tool' or 'action'?",
            "options": [
                  "To paint a UI",
                  "To allow the agent to interact with external environments or APIs",
                  "To compile the model",
                  "To reboot the server"
            ],
            "correctAnswer": 1
      },
      {
            "id": 15,
            "question": "What is temperature in the context of LLM inference?",
            "options": [
                  "The physical heat of the server",
                  "A parameter controlling the randomness or creativity of the output",
                  "A measure of how fast the response is generated",
                  "The length of the prompt"
            ],
            "correctAnswer": 1
      },
      {
            "id": 16,
            "question": "What is the primary benefit of fine-tuning an LLM?",
            "options": [
                  "Making it smaller to run on a phone",
                  "Teaching it a highly specific tone, format, or niche knowledge domain",
                  "Making it faster to respond to general queries",
                  "Removing the need for prompts entirely"
            ],
            "correctAnswer": 1
      },
      {
            "id": 17,
            "question": "What is hallucination in AI?",
            "options": [
                  "When an AI sees images in text",
                  "When an AI produces a confident but factually incorrect or nonsensical response",
                  "When an AI deletes data by mistake",
                  "When an AI becomes self-aware"
            ],
            "correctAnswer": 1
      },
      {
            "id": 18,
            "question": "In multi-agent systems, what is a 'state machine' used for?",
            "options": [
                  "Generating realistic graphics",
                  "Managing the deterministic transitions between different steps or agents",
                  "Cooling the GPU",
                  "Parsing JSON files"
            ],
            "correctAnswer": 1
      },
      {
            "id": 19,
            "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
            "options": [
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Transformer architecture",
                  "Decision Trees"
            ],
            "correctAnswer": 2
      },
      {
            "id": 20,
            "question": "What is the main challenge of deploying autonomous agents in production?",
            "options": [
                  "Finding enough training data",
                  "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios",
                  "Installing Python on servers",
                  "Designing the user interface"
            ],
            "correctAnswer": 1
      }
]
  }
];

export const industries = Array.from(new Set(problems.map((p) => p.industry))).sort();

export const getProblem = (id: string) => problems.find((p) => p.id === id);

export const problemsByDomain = (domain: string) =>
  problems.filter((p) => p.domain === domain);
