import uuid
from sqlalchemy import Column, String, DateTime, ForeignKey, Float
from sqlalchemy import JSON
from sqlalchemy import Uuid as UUID
from datetime import datetime, timezone
from sqlalchemy.orm import relationship
from app.core.db import Base

class Grade(Base):
    __tablename__ = "grades"

    id = Column(UUID, primary_key=True, default=uuid.uuid4, index=True)
    submission_id = Column(UUID, ForeignKey("submissions.id"), nullable=False, unique=True)
    
    total_score = Column(Float, nullable=False)
    max_score = Column(Float, nullable=False)
    
    criteria_breakdown = Column(JSON, nullable=False) # [{criterion, score, max, feedback}]
    ai_feedback = Column(String, nullable=True)
    execution_log = Column(String, nullable=True)
    
    graded_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

    submission = relationship("Submission", back_populates="grade")
