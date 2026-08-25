import re
import json

new_mcqs = [
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
        "options": ["React", "LangChain", "Spring Boot", "Express"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "question": "What does RAG stand for in AI systems?",
        "options": ["Random Access Generation", "Retrieval-Augmented Generation", "Routing and Generation", "Recurrent AI Graphs"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "question": "What is the purpose of a vector database in an AI pipeline?",
        "options": ["To store relational tables", "To host a frontend application", "To store and search high-dimensional embeddings efficiently", "To manage user passwords"],
        "correctAnswer": 2
    },
    {
        "id": 9,
        "question": "What is a 'prompt injection' attack?",
        "options": ["Injecting a virus into a database", "Manipulating an AI model by providing malicious input to override instructions", "Updating an AI model with new data", "Creating a new prompt template"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "question": "What does human-in-the-loop (HITL) mean?",
        "options": ["The AI model works completely autonomously", "Humans must write every line of code", "A human reviews or guides the AI at critical decision points", "A human physically inputs the data"],
        "correctAnswer": 2
    },
    {
        "id": 11,
        "question": "Why is tokenization important for LLMs?",
        "options": ["It creates cryptographic tokens", "It breaks text into manageable pieces for the model to process", "It adds watermarks to images", "It manages API billing"],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "question": "What is few-shot prompting?",
        "options": ["Providing zero examples in a prompt", "Providing a small number of examples in the prompt to guide the model's output", "Providing millions of examples to fine-tune the model", "Taking a few screenshots of the output"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "question": "Which of these is a common metric to evaluate LLM responses in RAG?",
        "options": ["Frames per second", "Relevance, groundedness, and coherence", "Bandwidth speed", "Database transaction rate"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "question": "What is the function of an AI agent's 'tool' or 'action'?",
        "options": ["To paint a UI", "To allow the agent to interact with external environments or APIs", "To compile the model", "To reboot the server"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "question": "What is temperature in the context of LLM inference?",
        "options": ["The physical heat of the server", "A parameter controlling the randomness or creativity of the output", "A measure of how fast the response is generated", "The length of the prompt"],
        "correctAnswer": 1
    },
    {
        "id": 16,
        "question": "What is the primary benefit of fine-tuning an LLM?",
        "options": ["Making it smaller to run on a phone", "Teaching it a highly specific tone, format, or niche knowledge domain", "Making it faster to respond to general queries", "Removing the need for prompts entirely"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "question": "What is hallucination in AI?",
        "options": ["When an AI sees images in text", "When an AI produces a confident but factually incorrect or nonsensical response", "When an AI deletes data by mistake", "When an AI becomes self-aware"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "question": "In multi-agent systems, what is a 'state machine' used for?",
        "options": ["Generating realistic graphics", "Managing the deterministic transitions between different steps or agents", "Cooling the GPU", "Parsing JSON files"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "question": "Which architecture forms the basis of modern LLMs like GPT-4?",
        "options": ["Convolutional Neural Networks", "Recurrent Neural Networks", "Transformer architecture", "Decision Trees"],
        "correctAnswer": 2
    },
    {
        "id": 20,
        "question": "What is the main challenge of deploying autonomous agents in production?",
        "options": ["Finding enough training data", "Ensuring predictable, safe, and cost-effective behavior in open-ended scenarios", "Installing Python on servers", "Designing the user interface"],
        "correctAnswer": 1
    }
]

file_path = 'D:/Internship/Teach-ai/Backend/seed/generate_sector_20.py'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_mcqs_str = "'mcqs': " + json.dumps(new_mcqs, indent=6)

# Match 'mcqs': [ ... ] 
new_content = re.sub(r'\'mcqs\': \[\s*\{.*?\}\s*\]', new_mcqs_str, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print('Updated generate_sector_20.py with 20 questions for all problems!')
