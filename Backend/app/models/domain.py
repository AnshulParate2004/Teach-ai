import uuid
from sqlalchemy import Column, String, Boolean, Integer, JSON
from sqlalchemy import Uuid as UUID
from app.core.db import Base

class Domain(Base):
    __tablename__ = "domains"

    id = Column(UUID, primary_key=True, default=uuid.uuid4, index=True)
    name = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True, nullable=False)
    icon = Column(String, nullable=False)
    description = Column(String, nullable=False)
    topics = Column(JSON, default=list)
    is_active = Column(Boolean, default=True)
