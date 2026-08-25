import uuid
from sqlalchemy import Column, String, Boolean, ForeignKey, JSON
from sqlalchemy import Uuid as UUID
from sqlalchemy.orm import relationship
from app.core.db import Base

class UserProblemProgress(Base):
    __tablename__ = "user_problem_progress"

    id = Column(UUID, primary_key=True, default=uuid.uuid4, index=True)
    user_id = Column(UUID, ForeignKey("users.id"), nullable=False)
    problem_id = Column(UUID, ForeignKey("problems.id"), nullable=False)
    
    # Store list of completed task indices: e.g. [0, 1]
    completed_task_indices = Column(JSON, default=list)
    
    user = relationship("User")
    problem = relationship("Problem")
