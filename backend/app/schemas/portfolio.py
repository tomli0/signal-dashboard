from pydantic import BaseModel, Field


class PortfolioKpis(BaseModel):
    active_projects: int = Field(serialization_alias="activeProjects")
    needs_attention: int = Field(serialization_alias="needsAttention")
    upcoming_milestones: int = Field(serialization_alias="upcomingMilestones")
    open_decisions: int = Field(serialization_alias="openDecisions")
    average_progress: int = Field(serialization_alias="averageProgress")
    drawings_pending_review: int = Field(serialization_alias="drawingsPendingReview")

    model_config = {"populate_by_name": True}


class PortfolioNeedsAttentionItem(BaseModel):
    project: str
    project_id: str = Field(serialization_alias="projectId")
    issue: str
    priority: str

    model_config = {"populate_by_name": True}


class PortfolioMilestoneItem(BaseModel):
    date: str
    project: str
    project_id: str = Field(serialization_alias="projectId")
    title: str

    model_config = {"populate_by_name": True}


class PortfolioDecisionItem(BaseModel):
    date: str
    project: str
    project_id: str = Field(serialization_alias="projectId")
    summary: str

    model_config = {"populate_by_name": True}


class PortfolioProjectItem(BaseModel):
    """Project summary for portfolio (no project_number)."""

    id: str
    name: str
    status: str
    phase: str
    progress: int
    next_milestone: str = Field(serialization_alias="nextMilestone")
    last_updated: str = Field(serialization_alias="lastUpdated")

    model_config = {"populate_by_name": True}


class PortfolioResponse(BaseModel):
    kpis: PortfolioKpis
    projects: list[PortfolioProjectItem]
    needs_attention: list[PortfolioNeedsAttentionItem] = Field(
        serialization_alias="needsAttention"
    )
    upcoming_milestones: list[PortfolioMilestoneItem] = Field(
        serialization_alias="upcomingMilestones"
    )
    recent_decisions: list[PortfolioDecisionItem] = Field(
        serialization_alias="recentDecisions"
    )

    model_config = {"populate_by_name": True}
