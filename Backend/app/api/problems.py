from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
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
    stmt = select(Problem).join(Domain, Problem.domain_id == Domain.id)
    if domain:
        stmt = stmt.where(Domain.slug == domain)
    
    result = await db.execute(stmt)
    problems = result.scalars().all()
    
    response_problems = []
    for p in problems:
        # Fetch the domain slug separately or via join
        # Since we joined Domain, we can access p.domain.slug
        p_dict = {
            "id": p.id,
            "domain_id": p.domain_id,
            "domain": p.domain.slug,
            "number": p.number,
            "title": p.title,
            "problem_statement": p.problem_statement,
            "difficulty": p.difficulty,
            "industry": p.industry,
            "estimatedTime": p.estimated_time,
            "tags": p.tags,
            "learn": p.learning_outcomes,
            "task": p.task_description,
            "expectedOutcome": p.expected_outcome,
            "tools": p.tools,
            "steps": p.steps,
            "knowledgeTest": p.knowledge_test,
            "submissionInstructions": p.submission_instructions,
            "solved": False # We will need to check if current user has solved it if we have a token, but for GET /problems we'll keep it false or fetch it later
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
    # Try to find by UUID or number/slug
    from uuid import UUID
    try:
        uuid_obj = UUID(id)
        stmt = select(Problem).where(Problem.id == uuid_obj)
    except ValueError:
        stmt = select(Problem).where(Problem.number == id)
        
    stmt = stmt.join(Domain, Problem.domain_id == Domain.id)
    result = await db.execute(stmt)
    p = result.scalars().first()
    
    if not p:
        raise HTTPException(status_code=404, detail="Problem not found")
        
    p_dict = {
        "id": p.id,
        "domain_id": p.domain_id,
        "domain": p.domain.slug,
        "number": p.number,
        "title": p.title,
        "problem_statement": p.problem_statement,
        "difficulty": p.difficulty,
        "industry": p.industry,
        "estimatedTime": p.estimated_time,
        "tags": p.tags,
        "learn": p.learning_outcomes,
        "task": p.task_description,
        "expectedOutcome": p.expected_outcome,
        "tools": p.tools,
        "steps": p.steps,
        "knowledgeTest": p.knowledge_test,
        "submissionInstructions": p.submission_instructions,
        "solved": False
    }
    if p.dataset_url:
        p_dict["dataset"] = {
            "fileName": p.dataset_filename or "",
            "size": p.dataset_size or "",
            "url": p.dataset_url
        }
    return p_dict
