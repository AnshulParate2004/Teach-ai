from typing import List, Optional
from pydantic import BaseModel
import uuid

class DatasetBase(BaseModel):
    fileName: str
    size: str
    url: str

class ProblemBase(BaseModel):
    id: uuid.UUID
    domain_id: uuid.UUID
    number: str
    title: str
    problem_statement: str
    difficulty: str
    industry: str
    estimatedTime: Optional[str] = None
    tags: List[str]
    learn: List[str]
    task: str
    expectedOutcome: List[str]
    tools: List[str]
    steps: List[str]
    knowledgeTest: List[str]
    submissionInstructions: List[str]
    dataset: Optional[DatasetBase] = None
    solved: bool = False

class ProblemStudentResponse(ProblemBase):
    # This schema is safe for students.
    # Excludes `reference_solution_path` and `rubric`.
    domain: str # Domain slug instead of id for the frontend

    class Config:
        from_attributes = True

class ProblemInternalResponse(ProblemBase):
    # This schema is for internal / admin use. Includes everything.
    reference_solution_path: Optional[str] = None
    rubric: List[dict]

    class Config:
        from_attributes = True
