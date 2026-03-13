from pydantic import BaseModel, Field

from app.schemas.project import ProjectResponse


class ProjectDashboardKpis(BaseModel):
    progress: int
    open_decisions: int = Field(serialization_alias="openDecisions")
    open_risks: int = Field(serialization_alias="openRisks")
    active_drawings: int = Field(serialization_alias="activeDrawings")
    budget_used: str = Field(serialization_alias="budgetUsed")
    hours_this_month: int = Field(serialization_alias="hoursThisMonth")

    model_config = {"populate_by_name": True}


class NeedsAttentionItem(BaseModel):
    title: str
    description: str


class MilestoneItem(BaseModel):
    date: str
    title: str


class RecentUpdateItem(BaseModel):
    date: str
    summary: str


class ProjectDashboardResponse(BaseModel):
    """Dashboard overview for a single project."""

    project: ProjectResponse | None
    kpis: ProjectDashboardKpis
    needs_attention: list[NeedsAttentionItem] = Field(
        serialization_alias="needsAttention"
    )
    upcoming_milestones: list[MilestoneItem] = Field(
        serialization_alias="upcomingMilestones"
    )
    recent_updates: list[RecentUpdateItem] = Field(
        serialization_alias="recentUpdates"
    )

    model_config = {"populate_by_name": True}
