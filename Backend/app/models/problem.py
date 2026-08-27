import uuid
from sqlalchemy import Column, String, Boolean, ForeignKey, ARRAY
from sqlalchemy import JSON
from sqlalchemy import Uuid as UUID
from sqlalchemy.orm import relationship
from app.core.db import Base

class Problem(Base):
    __tablename__ = "problems"

    id = Column(UUID, primary_key=True, default=uuid.uuid4, index=True)
    domain_id = Column(UUID, ForeignKey("domains.id"), nullable=False)
    
    number = Column(String, index=True) # e.g. "genai-01"
    title = Column(String, nullable=False)
    problem_statement = Column(String, nullable=False)
    difficulty = Column(String, nullable=False)
    industry = Column(String, nullable=False)
    company = Column(String, nullable=True, default="")
    role = Column(String, nullable=True, default="")
    about_company = Column(String, nullable=True, default="")
    estimated_time = Column(String)
    
    tags = Column(JSON, default=list)
    learning_outcomes = Column(JSON, default=list)
    task_description = Column(String, nullable=False)
    expected_outcome = Column(JSON, default=list)
    tools = Column(JSON, default=list)
    steps = Column(JSON, default=list)
    knowledge_test = Column(JSON, default=list)
    submission_instructions = Column(JSON, default=list)
    mcqs = Column(JSON, default=list)
    
    submission_format = Column(String, default="ipynb")
    dataset_url = Column(String, nullable=True)
    dataset_filename = Column(String, nullable=True)
    dataset_size = Column(String, nullable=True)
    
    reference_solution_path = Column(String, nullable=True)
    rubric = Column(JSON, nullable=False) # [{criterion, weight, description}]
    is_active = Column(Boolean, default=True)

    domain = relationship("Domain")
