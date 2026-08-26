import uuid
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from pydantic import BaseModel
from sqlalchemy.orm import selectinload

from app.core.db import get_db
from app.api.deps import get_current_user
from app.models.user import User
from app.models.submission import Submission

router = APIRouter()

class ProgressUpdate(BaseModel):
    completed_task_indices: List[int]

class ProgressResponse(BaseModel):
    id: uuid.UUID
    problem_id: uuid.UUID
    completed_task_indices: List[int]

async def _calculate_progress(db: AsyncSession, current_user: User, problem_id: uuid.UUID) -> List[int]:
    stmt = (
        select(Submission)
        .options(selectinload(Submission.grade))
        .where(
            Submission.user_id == current_user.id,
            Submission.problem_id == problem_id
        )
    )
    result = await db.execute(stmt)
    submissions = result.scalars().all()
    
    completed = set()
    for sub in submissions:
        if sub.is_passed:
            completed.add(sub.task_index)
            
    return sorted(list(completed))

@router.get("/{problem_id}", response_model=ProgressResponse)
async def get_progress(
    problem_id: uuid.UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    completed = await _calculate_progress(db, current_user, problem_id)
    return ProgressResponse(
        id=uuid.uuid4(),
        problem_id=problem_id,
        completed_task_indices=completed
    )

@router.post("/{problem_id}", response_model=ProgressResponse)
async def update_progress(
    problem_id: uuid.UUID,
    progress_in: ProgressUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Deprecated: Frontend should no longer tell us what is complete.
    # We just return the calculated truth based on grades.
    completed = await _calculate_progress(db, current_user, problem_id)
    return ProgressResponse(
        id=uuid.uuid4(),
        problem_id=problem_id,
        completed_task_indices=completed
    )
