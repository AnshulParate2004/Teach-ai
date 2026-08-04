import json
import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
try:
    from Backend.generate_all_20_detailed import problems_raw
except ImportError:
    # If import fails due to path, we will just read the file and extract it via AST or regex.
    pass

import ast

def extract_problems_raw(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        tree = ast.parse(f.read(), filename=filepath)
    for node in tree.body:
        if isinstance(node, ast.Assign):
            for target in node.targets:
                if isinstance(target, ast.Name) and target.id == 'problems_raw':
                    return ast.literal_eval(node.value)
    return []

problems_raw = extract_problems_raw(os.path.join("..", "Backend", "generate_all_20_detailed.py"))

ts_problems = []
for p in problems_raw:
    ts_problems.append({
        "id": p["number"],
        "domain": "generative-ai",
        "title": p["title"],
        "industry": p["industry"],
        "problem_statement": p["problem_statement"],
        "difficulty": "Intermediate" if "intermediate" in p.get("difficulty", "intermediate").lower() else "Advanced",
        "solved": False,
        "tags": p["tools"],
        "estimatedTime": "2 hrs",
        "learn": p["learning_outcomes"],
        "task": p["task_description"],
        "expectedOutcome": p["submission_instructions"],
        "tools": p["tools"],
        "steps": p["steps"],
        "knowledgeTest": p["knowledge_test"],
        "submissionInstructions": p["submission_instructions"]
    })

ts_content = f"""export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Dataset {{
  fileName: string;
  size: string;
  url: string;
}}

export interface Problem {{
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
}}

export const problems: Problem[] = {json.dumps(ts_problems, indent=2)};

export const industries = Array.from(new Set(problems.map((p) => p.industry))).sort();

export const getProblem = (id: string) => problems.find((p) => p.id === id);

export const problemsByDomain = (domain: string) =>
  problems.filter((p) => p.domain === domain);
"""

with open("src/data/problems.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Updated problems.ts with 20 problems!")
