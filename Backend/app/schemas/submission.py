from typing import Optional
from pydantic import BaseModel
from datetime import datetime
import uuid
from app.schemas.grade import GradeReport

class SubmissionBase(BaseModel):
    file_path: str
    status: str

class SubmissionCreate(BaseModel):
    problem_id: uuid.UUID
    # Note: user_id will be derived from the auth token in the route

class SubmissionResponse(SubmissionBase):
    id: uuid.UUID
    user_id: uuid.UUID
    problem_id: uuid.UUID
    submitted_at: datetime
    is_passed: bool = False
    
    # We will include grade if it exists, but usually that's fetched separately or as a nested dict
    # grade: Optional[GradeReport] = None

    class Config:
        from_attributes = True
