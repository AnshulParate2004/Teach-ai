import uuid
import asyncio
import logging
from app.core.db import AsyncSessionLocal
from sqlalchemy.future import select
from app.models.submission import Submission
from app.models.problem import Problem
from app.models.grade import Grade
from app.services.sandbox import run_notebook_safely
from app.services.grading import grade_notebook

logger = logging.getLogger(__name__)

async def grade_submission(submission_id: uuid.UUID, quiz_score: int = 0):
    logger.info(f"Background worker started for submission {submission_id} with quiz score {quiz_score}")
    
    async with AsyncSessionLocal() as db:
        # Fetch submission and related problem
        result = await db.execute(
            select(Submission).where(Submission.id == submission_id)
        )
        submission = result.scalars().first()
        if not submission:
            logger.error(f"Submission {submission_id} not found")
            return
            
        prob_result = await db.execute(select(Problem).where(Problem.id == submission.problem_id))
        problem = prob_result.scalars().first()
            
        submission.status = "running"
        await db.commit()
        
        # 1. Run in Sandbox (Bypassed by user request)
        # success, execution_log = await run_notebook_safely(submission.file_path)
        success = True
        execution_log = "Execution bypassed. Grade based strictly on the source code, logic, and any pre-existing cell outputs provided in the notebook JSON."

        
        # 2. Grade with AI
        try:
            grade_json = await grade_notebook(
                problem_statement=problem.problem_statement,
                rubric=problem.rubric,
                reference_path=problem.reference_solution_path,
                student_file_path=submission.file_path,
                execution_log=execution_log
            )
            
            task_score = grade_json.get("total_score", 0)
            task_max = grade_json.get("max_score", 100)
            
            # Apply 60/40 split
            task_pct = task_score / task_max if task_max > 0 else 0
            quiz_pct = quiz_score / 10.0
            
            final_total = (task_pct * 0.60 + quiz_pct * 0.40) * 100
            
            criteria = grade_json.get("criteria", [])
            criteria.append({
                "name": "Knowledge Assessment (Quiz)",
                "score": quiz_score * 10,
                "max": 100,
                "comment": f"Scored {quiz_score} out of 10 on the Knowledge Assessment."
            })
            
            # Save grade
            grade = Grade(
                submission_id=submission.id,
                total_score=final_total,
                max_score=100,
                criteria_breakdown=criteria,
                ai_feedback=grade_json.get("overall_feedback", ""),
                execution_log=execution_log
            )
            db.add(grade)
            submission.status = "complete" if success else "failed" 
            # We set it to complete even if there were runtime errors, so the student can see the feedback, unless we want to mark it failed. Let's use "graded" as status.
            submission.status = "graded"
        except Exception as e:
            logger.error(f"Grading failed for {submission_id}: {e}")
            submission.status = "failed"
            submission.error_log = str(e) # Make sure error_log is in model, or just use execution_log

        await db.commit()
        logger.info(f"Finished grading submission {submission_id}")
