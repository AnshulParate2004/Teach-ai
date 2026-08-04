from typing import List, Optional
from pydantic import BaseModel
import uuid

class DomainBase(BaseModel):
    slug: str
    name: str
    icon: str
    description: str
    topics: List[str]
    is_active: bool

class DomainResponse(DomainBase):
    id: uuid.UUID
    problem_count: int
    status: str # "live" or "coming-soon" based on is_active

    class Config:
        from_attributes = True
