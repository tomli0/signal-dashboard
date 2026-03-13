from pydantic import BaseModel, Field


class ProjectResponse(BaseModel):
    """Single project for list and detail."""

    id: str
    name: str
    project_number: str = Field(serialization_alias="projectNumber")
    status: str
    phase: str
    progress: int
    next_milestone: str = Field(serialization_alias="nextMilestone")
    last_updated: str = Field(serialization_alias="lastUpdated")

    model_config = {"populate_by_name": True}
