import uuid
from sqlalchemy import Column, String, DateTime, ForeignKey
from sqlalchemy import Uuid as UUID
from datetime import datetime, timezone
from sqlalchemy.orm import relationship
from app.core.db import Base

class Submission(Base):
    __tablename__ = "submissions"

    id = Column(UUID, primary_key=True, default=uuid.uuid4, index=True)
    user_id = Column(UUID, ForeignKey("users.id"), nullable=False)
    problem_id = Column(UUID, ForeignKey("problems.id"), nullable=False)
    
    file_path = Column(String, nullable=False)
    status = Column(String, default="pending") # pending | running | grading | complete | failed
    
    submitted_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

    user = relationship("User")
    problem = relationship("Problem")
    grade = relationship("Grade", back_populates="submission", uselist=False)
