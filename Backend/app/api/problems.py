from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from app.core.db import get_db
from app.models.problem import Problem
from app.models.domain import Domain
from app.schemas.problem import ProblemStudentResponse

router = APIRouter()

@router.get("", response_model=List[ProblemStudentResponse])
async def read_problems(
    domain: Optional[str] = Query(None, description="Filter by domain slug"),
    db: AsyncSession = Depends(get_db)
):
    stmt = select(Problem).options(selectinload(Problem.domain)).join(Domain, Problem.domain_id == Domain.id)
    if domain:
        stmt = stmt.where(Domain.slug == domain)
    
    result = await db.execute(stmt)
    problems = result.scalars().all()
    
    response_problems = []
    for p in sorted(problems, key=lambda x: int(x.number) if str(x.number).isdigit() else 999):
        # Fetch the domain slug separately or via join
        # Since we joined Domain, we can access p.domain.slug
        p_dict = {
            "id": p.number or str(p.id),
            "domain_id": p.domain_id,
            "domain": p.domain.slug if p.domain else "tech-development",
            "number": p.number,
            "title": p.title,
            "company": getattr(p, "company", "") or "",
            "role": getattr(p, "role", "") or "",
            "about_company": getattr(p, "about_company", "") or "",
            "problem_statement": p.problem_statement,
            "difficulty": p.difficulty,
            "industry": p.industry,
            "estimatedTime": p.estimated_time,
            "tags": p.tags or [],
            "learn": p.learning_outcomes or [],
            "task": p.task_description,
            "expectedOutcome": p.expected_outcome or [],
            "tools": p.tools or [],
            "steps": p.steps or [],
            "knowledgeTest": p.knowledge_test or [],
            "submissionInstructions": p.submission_instructions or [],
            "mcqs": getattr(p, "mcqs", []) or [],
            "solved": False
        }
        if p.dataset_url:
            p_dict["dataset"] = {
                "fileName": p.dataset_filename or "",
                "size": p.dataset_size or "",
                "url": p.dataset_url
            }
        response_problems.append(p_dict)
        
    return response_problems

@router.get("/{id}", response_model=ProblemStudentResponse)
async def read_problem(id: str, db: AsyncSession = Depends(get_db)):
    # Try to find by number first (e.g. "1", "2"), then by UUID
    from uuid import UUID
    stmt = select(Problem).where(Problem.number == id)
    stmt = stmt.options(selectinload(Problem.domain)).outerjoin(Domain, Problem.domain_id == Domain.id)
    result = await db.execute(stmt)
    p = result.scalars().first()
    
    if not p:
        try:
            uuid_obj = UUID(id)
            stmt = select(Problem).where(Problem.id == uuid_obj)
            stmt = stmt.options(selectinload(Problem.domain)).outerjoin(Domain, Problem.domain_id == Domain.id)
            result = await db.execute(stmt)
            p = result.scalars().first()
        except ValueError:
            pass
            
    if not p:
        raise HTTPException(status_code=404, detail="Problem not found")
        
    p_dict = {
        "id": p.number or str(p.id),
        "domain_id": p.domain_id,
        "domain": p.domain.slug if p.domain else "tech-development",
        "number": p.number,
        "title": p.title,
        "company": getattr(p, "company", "") or "",
        "role": getattr(p, "role", "") or "",
        "about_company": getattr(p, "about_company", "") or "",
        "problem_statement": p.problem_statement,
        "difficulty": p.difficulty,
        "industry": p.industry,
        "estimatedTime": p.estimated_time,
        "tags": p.tags or [],
        "learn": p.learning_outcomes or [],
        "task": p.task_description,
        "expectedOutcome": p.expected_outcome or [],
        "tools": p.tools or [],
        "steps": p.steps or [],
        "knowledgeTest": p.knowledge_test or [],
        "submissionInstructions": p.submission_instructions or [],
        "mcqs": getattr(p, "mcqs", []) or [],
        "solved": False
    }
    if p.dataset_url:
        p_dict["dataset"] = {
            "fileName": p.dataset_filename or "",
            "size": p.dataset_size or "",
            "url": p.dataset_url
        }
    return p_dict
