from fastapi import APIRouter

router = APIRouter()


@router.get("")
def list_projects():
    """List all signal projects — to be implemented."""
    return []


@router.get("/{project_id}")
def get_project(project_id: str):
    """Get a single project overview — to be implemented."""
    return {"id": project_id}
