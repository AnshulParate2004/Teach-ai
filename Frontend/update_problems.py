import json
import sys
import os
import ast

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

def extract_problems_raw(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        tree = ast.parse(f.read(), filename=filepath)
    for node in tree.body:
        if isinstance(node, ast.Assign):
            for target in node.targets:
                if isinstance(target, ast.Name) and target.id == 'problems_raw':
                    return ast.literal_eval(node.value)
    return []

backend_script = os.path.join("..", "Backend", "generate_all_20_detailed.py")
problems_raw = extract_problems_raw(backend_script)

ts_problems = []
for p in problems_raw:
    ts_problems.append({
        "id": p["number"],
        "domain": "generative-ai",
        "company": p.get("company", "Tech Enterprise"),
        "role": p.get("role", "AI Engineering Intern"),
        "about_company": p.get("about_company", ""),
        "title": p["title"],
        "industry": p["industry"],
        "problem_statement": p["problem_statement"],
        "difficulty": "Intermediate",
        "solved": False,
        "tags": p["tools"],
        "estimatedTime": "2 hrs",
        "learn": p["learning_outcomes"],
        "task": p["task_description"],
        "expectedOutcome": p["submission_instructions"],
        "tools": p["tools"],
        "steps": p["steps"],
        "knowledgeTest": p["knowledge_test"],
        "submissionInstructions": p["submission_instructions"],
        "mcqs": p.get("mcqs", [])
    })

ts_content = f"""export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Dataset {{
  fileName: string;
  size: string;
  url: string;
}}

export interface MCQ {{
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}}

export interface Problem {{
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
}}

export const problems: Problem[] = {json.dumps(ts_problems, indent=2)};

export const industries = Array.from(new Set(problems.map((p) => p.industry))).sort();

export const getProblem = (id: string) => problems.find((p) => p.id === id);

export const problemsByDomain = (domain: string) =>
  problems.filter((p) => p.domain === domain);
"""

with open("src/data/problems.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully updated Frontend src/data/problems.ts with {len(ts_problems)} company micro-internship problems!")
