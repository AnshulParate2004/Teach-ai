from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url="/openapi.json",
    docs_url="/docs"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

from app.api import auth, domains, problems, submissions, grades, users

@app.get("/")
async def root():
    return {"message": "Welcome to SkillForge API"}

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(domains.router, prefix="/domains", tags=["domains"])
app.include_router(problems.router, prefix="/problems", tags=["problems"])
app.include_router(submissions.router, prefix="/submissions", tags=["submissions"])
app.include_router(grades.router, prefix="/grades", tags=["grades"])
