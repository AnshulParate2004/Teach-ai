import uuid
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from pydantic import BaseModel

from app.core.db import get_db
from app.api.deps import get_current_user
from app.models.user import User
from app.models.progress import UserProblemProgress

router = APIRouter()

class ProgressUpdate(BaseModel):
    completed_task_indices: List[int]

class ProgressResponse(BaseModel):
    id: uuid.UUID
    problem_id: uuid.UUID
    completed_task_indices: List[int]

@router.get("/{problem_id}", response_model=ProgressResponse)
async def get_progress(
    problem_id: uuid.UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    stmt = select(UserProblemProgress).where(
        UserProblemProgress.user_id == current_user.id,
        UserProblemProgress.problem_id == problem_id
    )
    result = await db.execute(stmt)
    progress = result.scalars().first()
    
    if not progress:
        return ProgressResponse(
            id=uuid.uuid4(),
            problem_id=problem_id,
            completed_task_indices=[]
        )
    
    return ProgressResponse(
        id=progress.id,
        problem_id=progress.problem_id,
        completed_task_indices=progress.completed_task_indices or []
    )

@router.post("/{problem_id}", response_model=ProgressResponse)
async def update_progress(
    problem_id: uuid.UUID,
    progress_in: ProgressUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    stmt = select(UserProblemProgress).where(
        UserProblemProgress.user_id == current_user.id,
        UserProblemProgress.problem_id == problem_id
    )
    result = await db.execute(stmt)
    progress = result.scalars().first()
    
    if not progress:
        progress = UserProblemProgress(
            user_id=current_user.id,
            problem_id=problem_id,
            completed_task_indices=progress_in.completed_task_indices
        )
        db.add(progress)
    else:
        progress.completed_task_indices = progress_in.completed_task_indices
        
    await db.commit()
    await db.refresh(progress)
    
    return ProgressResponse(
        id=progress.id,
        problem_id=progress.problem_id,
        completed_task_indices=progress.completed_task_indices or []
    )
