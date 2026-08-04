from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import func
from app.core.db import get_db
from app.models.domain import Domain
from app.models.problem import Problem
from app.schemas.domain import DomainResponse

router = APIRouter()

@router.get("", response_model=List[DomainResponse])
async def read_domains(db: AsyncSession = Depends(get_db)):
    # Fetch domains and count of problems
    stmt = select(Domain, func.count(Problem.id).label("problem_count")).outerjoin(Problem, Domain.id == Problem.domain_id).group_by(Domain.id)
    result = await db.execute(stmt)
    rows = result.all()
    
    response_domains = []
    for domain, p_count in rows:
        d_resp = {
            "id": domain.id,
            "slug": domain.slug,
            "name": domain.name,
            "icon": domain.icon,
            "description": domain.description,
            "topics": domain.topics,
            "is_active": domain.is_active,
            "status": "live" if domain.is_active else "coming-soon",
            "problem_count": p_count
        }
        response_domains.append(d_resp)
        
    return response_domains
