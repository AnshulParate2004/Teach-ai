import asyncio
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from sqlalchemy.future import select
from app.core.db import AsyncSessionLocal
from app.models.domain import Domain
from app.models.problem import Problem
from generate_all_20_detailed import problems_raw

RUBRIC = [
    {"criterion": "Implementation & Logic", "max": 60, "description": "Notebook executes correctly and logic meets the task requirements — the agent must process the exact inputs described."},
    {"criterion": "Code Quality",           "max": 20, "description": "Code is clean, well-commented, uses Groq API correctly, and follows Python best practices."},
    {"criterion": "Knowledge Answers",      "max": 20, "description": "Provides accurate, thoughtful answers to the conceptual review questions included in the notebook."}
]

async def seed_data():
    async with AsyncSessionLocal() as db:
        # ── Wipe old data in FK-safe order ─────────────────────────────
        from app.models.grade import Grade
        from app.models.submission import Submission
        await db.execute(Grade.__table__.delete())
        await db.execute(Submission.__table__.delete())
        await db.execute(Problem.__table__.delete())
        await db.execute(Domain.__table__.delete())
        await db.commit()

        # ── Create the single Generative AI domain ─────────────────────
        genai_domain = Domain(
            slug="generative-ai",
            name="Generative & Agentic AI",
            icon="sparkles",
            description="Build real-world AI agents using the Groq API across 20 industry verticals.",
            topics=["Groq API", "Prompt Engineering", "Agent Design", "Business Logic", "LLM Integration"],
            is_active=True
        )
        db.add(genai_domain)
        await db.commit()
        await db.refresh(genai_domain)

        # ── Seed all 20 new NexusAI problems ───────────────────────────
        for p in problems_raw:
            num = p.get("number", "")
            
            # Build a clean, plain-text problem_statement for the grader
            # (the frontend has the fancy structured version; the DB needs the clear task description)
            grader_statement = (
                f"{p.get('title','')}\n\n"
                f"Company: {p.get('company','NexusAI')} | Industry: {p.get('industry','')}\n\n"
                f"Task: {p.get('task_description','')}\n\n"
                f"Steps the student must follow:\n" +
                "\n".join(f"  {i+1}. {s}" for i, s in enumerate(p.get("steps", [])))
            )

            problem = Problem(
                domain_id=genai_domain.id,
                number=num,
                title=p.get("title", ""),
                industry=p.get("industry", ""),
                problem_statement=grader_statement,
                difficulty=p.get("difficulty", "Beginner"),
                estimated_time=p.get("estimated_time", "2 hrs"),
                tags=p.get("tools", []),
                learning_outcomes=p.get("learning_outcomes", []),
                task_description=p.get("task_description", ""),
                expected_outcome=p.get("submission_instructions", []),
                tools=p.get("tools", []),
                steps=p.get("steps", []),
                knowledge_test=p.get("knowledge_test", []),
                submission_instructions=p.get("submission_instructions", []),
                rubric=RUBRIC,
                reference_solution_path="",
                is_active=True
            )
            db.add(problem)

        await db.commit()
        print(f"[OK] Seeded {len(problems_raw)} problems into the database.")

if __name__ == "__main__":
    asyncio.run(seed_data())
