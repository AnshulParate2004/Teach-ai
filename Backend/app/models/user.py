import uuid
from sqlalchemy import Column, String, DateTime
from sqlalchemy import Uuid as UUID
from datetime import datetime, timezone
from app.core.db import Base

class User(Base):
    __tablename__ = "users"

    id = Column(UUID, primary_key=True, default=uuid.uuid4, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    role = Column(String, default="student")
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
