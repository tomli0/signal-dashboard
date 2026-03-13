from fastapi import APIRouter, HTTPException

from app.data.dummy import PROJECTS
from app.schemas.project import ProjectResponse

router = APIRouter()


@router.get("", response_model=list[ProjectResponse])
def list_projects():
    """List all signal projects."""
    return [ProjectResponse(**p) for p in PROJECTS]


@router.get("/{project_id}", response_model=ProjectResponse)
def get_project(project_id: str):
    """Get a single project by id."""
    for p in PROJECTS:
        if p["id"] == project_id:
            return ProjectResponse(**p)
    raise HTTPException(status_code=404, detail="Project not found")
