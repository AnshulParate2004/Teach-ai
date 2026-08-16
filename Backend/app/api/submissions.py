import os
import uuid
import shutil
from typing import List
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, BackgroundTasks
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.core.db import get_db
from app.models.submission import Submission
from app.models.problem import Problem
from app.schemas.submission import SubmissionResponse
from app.api.deps import get_current_user
from app.models.user import User
from app.workers.grade_worker import grade_submission

router = APIRouter()

from sqlalchemy.orm import selectinload

@router.get("", response_model=List[SubmissionResponse])
async def list_submissions(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    result = await db.execute(
        select(Submission)
        .options(selectinload(Submission.grade))
        .where(Submission.user_id == current_user.id)
        .order_by(Submission.submitted_at.desc())
    )
    return result.scalars().all()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, BackgroundTasks, Form

@router.post("", response_model=SubmissionResponse)
async def create_submission(
    problem_id: str,
    background_tasks: BackgroundTasks,
    file: UploadFile = File(...),
    quiz_score: int = Form(default=0),
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    from uuid import UUID
    try:
        uuid_obj = UUID(problem_id)
        stmt = select(Problem).where(Problem.id == uuid_obj)
    except ValueError:
        stmt = select(Problem).where(Problem.number == problem_id)
        
    result = await db.execute(stmt)
    problem = result.scalars().first()
    if not problem:
        raise HTTPException(status_code=404, detail="Problem not found")

    # Save file
    file_extension = file.filename.split('.')[-1] if '.' in file.filename else 'ipynb'
    safe_filename = f"{uuid.uuid4()}.{file_extension}"
    file_path = os.path.join(UPLOAD_DIR, safe_filename)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Create submission record
    submission = Submission(
        user_id=current_user.id,
        problem_id=problem.id,
        file_path=file_path,
        status="pending"
    )
    db.add(submission)
    await db.commit()

    # Re-fetch with relationships loaded to avoid MissingGreenlet on schema serialization
    result = await db.execute(
        select(Submission)
        .options(selectinload(Submission.grade))
        .where(Submission.id == submission.id)
    )
    submission_loaded = result.scalars().first()

    # Kick off background job
    # We pass the submission id and quiz_score to the background worker
    background_tasks.add_task(grade_submission, submission_loaded.id, quiz_score)

    return submission_loaded

@router.get("/{id}", response_model=SubmissionResponse)
async def get_submission(
    id: uuid.UUID,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    result = await db.execute(
        select(Submission)
        .options(selectinload(Submission.grade))
        .where(Submission.id == id, Submission.user_id == current_user.id)
    )
    submission = result.scalars().first()
    if not submission:
        raise HTTPException(status_code=404, detail="Submission not found")
    
    return submission
