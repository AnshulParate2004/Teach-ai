from typing import List, Optional
from pydantic import BaseModel
import uuid

class RubricCriterion(BaseModel):
    name: str
    score: float
    max: float
    comment: str

class GradeReport(BaseModel):
    total: float
    max: float
    criteria: List[RubricCriterion]
    overall: str

    class Config:
        from_attributes = True
