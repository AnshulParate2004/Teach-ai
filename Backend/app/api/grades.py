import uuid
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.core.db import get_db
from app.models.grade import Grade
from app.models.submission import Submission
from app.schemas.grade import GradeReport
from app.api.deps import get_current_user
from app.models.user import User

router = APIRouter()

@router.get("/{submission_id}", response_model=GradeReport)
async def get_grade(
    submission_id: uuid.UUID,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    # Verify the submission belongs to the current user
    sub_result = await db.execute(select(Submission).where(Submission.id == submission_id, Submission.user_id == current_user.id))
    submission = sub_result.scalars().first()
    if not submission:
        raise HTTPException(status_code=404, detail="Submission not found")
        
    if submission.status != "graded":
        raise HTTPException(status_code=400, detail="Submission is not yet graded")

    result = await db.execute(select(Grade).where(Grade.submission_id == submission_id))
    grade = result.scalars().first()
    
    if not grade:
        raise HTTPException(status_code=404, detail="Grade not found for this submission")
        
    return {
        "total": grade.total_score,
        "max": grade.max_score,
        "criteria": grade.criteria_breakdown,
        "overall": grade.ai_feedback or ""
    }
