import asyncio
import os
import sys
from sqlalchemy.future import select

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app.core.db import AsyncSessionLocal
from app.models.domain import Domain
from app.models.problem import Problem
from generate_sector_20 import problems_raw

RUBRIC = [
    {"criterion": "Implementation & Logic", "max": 60, "description": "Notebook executes correctly and logic meets the task requirements — the agent must process the exact inputs described."},
    {"criterion": "Code Quality",           "max": 20, "description": "Code is clean, well-commented, and follows Python best practices."},
    {"criterion": "Knowledge Answers",      "max": 20, "description": "Provides accurate, thoughtful answers to the conceptual review questions included in the notebook."}
]

async def seed_data():
    async with AsyncSessionLocal() as db:
        # 1. Wipe old data
        from app.models.grade import Grade
        from app.models.submission import Submission
        await db.execute(Grade.__table__.delete())
        await db.execute(Submission.__table__.delete())
        await db.execute(Problem.__table__.delete())
        await db.execute(Domain.__table__.delete())
        await db.commit()

        # 2. Extract unique industries/sectors
        industries = set([p.get('industry', 'General Tech') for p in problems_raw])
        
        domain_map = {}
        for ind in industries:
            slug = ind.lower().replace(" & ", "-").replace(" ", "-").replace("/", "-")
            icon = "briefcase" # default
            if "healthcare" in slug: icon = "heart"
            elif "marketing" in slug: icon = "megaphone"
            elif "design" in slug: icon = "palette"
            elif "government" in slug: icon = "landmark"
            elif "agriculture" in slug: icon = "leaf"
            elif "customer" in slug: icon = "users"
            
            domain = Domain(
                slug=slug,
                name=ind,
                icon=icon,
                description=f"Job simulations and virtual internships for the {ind} sector.",
                topics=["AI", "Data", "Business Logic"],
                is_active=True
            )
            db.add(domain)
            domain_map[ind] = domain
            
        await db.commit()
        for dom in domain_map.values():
            await db.refresh(dom)

        # 3. Seed the 20 problems
        for p in problems_raw:
            num = p.get("number", "")
            ind = p.get("industry", "General Tech")
            domain_id = domain_map[ind].id
            
            grader_statement = (
                f"{p.get('title','')}\n\n"
                f"Company: {p.get('company','')}\n\n"
                f"Task: {p.get('task_description','')}\n\n"
                f"Steps the student must follow:\n" +
                "\n".join(f"  {i+1}. {s}" for i, s in enumerate(p.get("steps", [])))
            )

            problem = Problem(
                domain_id=domain_id,
                number=num,
                title=p.get("title", ""),
                industry=ind,
                problem_statement=grader_statement,
                difficulty="Intermediate",
                estimated_time="4 hrs",
                tags=["AI", "Python"],
                learning_outcomes=p.get("learning_outcomes", []),
                task_description=p.get("task_description", ""),
                expected_outcome=p.get("submission_instructions", []),
                tools=p.get("tools", []),
                steps=p.get("steps", []),
                knowledge_test=p.get("knowledge_test", []),
                submission_instructions=p.get("submission_instructions", []),
                rubric=RUBRIC,
                reference_solution_path=f"Backend/solutions/{num}.ipynb",
                is_active=True
            )
            db.add(problem)

        await db.commit()
        print(f"[OK] Seeded {len(problems_raw)} problems across {len(industries)} domains.")

if __name__ == "__main__":
    asyncio.run(seed_data())
