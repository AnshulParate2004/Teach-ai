from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import func
from app.core.db import get_db
from app.models.submission import Submission
from app.models.problem import Problem
from app.models.domain import Domain
from app.api.deps import get_current_user
from app.models.user import User

router = APIRouter()

@router.get("/me/progress")
async def get_user_progress(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    # Fetch all domains
    domain_result = await db.execute(select(Domain))
    domains = domain_result.scalars().all()
    
    # We need to find how many problems each domain has, and how many are solved by this user
    # For now, we'll do a simple loop (could be optimized with group_by)
    progress_list = []
    
    for d in domains:
        # Count total problems in this domain
        prob_count_res = await db.execute(select(func.count(Problem.id)).where(Problem.domain_id == d.id))
        total_probs = prob_count_res.scalar()
        
        # Count solved by this user (status == 'graded' or 'complete' depending on naming, let's say 'graded')
        # We join Submission -> Problem -> Domain
        from app.models.grade import Grade
        solved_res = await db.execute(
            select(func.count(func.distinct(Problem.id)))
            .join(Submission, Submission.problem_id == Problem.id)
            .join(Grade, Grade.submission_id == Submission.id)
            .where(
                Submission.user_id == current_user.id,
                Submission.status == "graded",
                Problem.domain_id == d.id,
                (Grade.total_score / func.nullif(Grade.max_score, 0)) >= 0.70
            )
        )
        solved_count = solved_res.scalar() or 0
        
        progress_list.append({
            "slug": d.slug,
            "name": d.name,
            "solved": solved_count,
            "total": total_probs,
            "status": "live" if d.is_active else "coming-soon"
        })
        
    return progress_list
