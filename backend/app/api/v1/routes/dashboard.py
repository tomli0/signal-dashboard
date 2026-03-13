from fastapi import APIRouter, HTTPException

from app.data.dummy import (
    DEFAULT_OVERVIEW,
    OVERVIEW_BY_ID,
    PORTFOLIO_KPIS,
    PORTFOLIO_NEEDS_ATTENTION,
    PORTFOLIO_PROJECTS,
    PORTFOLIO_RECENT_DECISIONS,
    PORTFOLIO_UPCOMING_MILESTONES,
    PROJECTS,
)
from app.schemas.dashboard import (
    MilestoneItem,
    NeedsAttentionItem,
    ProjectDashboardKpis,
    ProjectDashboardResponse,
    RecentUpdateItem,
)
from app.schemas.portfolio import (
    PortfolioDecisionItem,
    PortfolioKpis,
    PortfolioMilestoneItem,
    PortfolioNeedsAttentionItem,
    PortfolioProjectItem,
    PortfolioResponse,
)
from app.schemas.project import ProjectResponse

router = APIRouter()


@router.get("/portfolio", response_model=PortfolioResponse)
def get_portfolio():
    """Portfolio dashboard: KPIs, projects table, needs attention, milestones, decisions."""
    return PortfolioResponse(
        kpis=PortfolioKpis(**PORTFOLIO_KPIS),
        projects=[PortfolioProjectItem(**p) for p in PORTFOLIO_PROJECTS],
        needs_attention=[PortfolioNeedsAttentionItem(**n) for n in PORTFOLIO_NEEDS_ATTENTION],
        upcoming_milestones=[PortfolioMilestoneItem(**m) for m in PORTFOLIO_UPCOMING_MILESTONES],
        recent_decisions=[PortfolioDecisionItem(**d) for d in PORTFOLIO_RECENT_DECISIONS],
    )


@router.get("/projects/{project_id}", response_model=ProjectDashboardResponse)
def get_project_dashboard(project_id: str):
    """Single project dashboard: project, KPIs, needs attention, milestones, recent updates."""
    project_dict = next((p for p in PROJECTS if p["id"] == project_id), None)
    project = ProjectResponse(**project_dict) if project_dict else None
    overview = OVERVIEW_BY_ID.get(project_id, DEFAULT_OVERVIEW)
    kpis_data = overview["kpis"].copy()
    if project_dict:
        kpis_data["progress"] = project_dict["progress"]
    return ProjectDashboardResponse(
        project=project,
        kpis=ProjectDashboardKpis(**kpis_data),
        needs_attention=[NeedsAttentionItem(**n) for n in overview["needs_attention"]],
        upcoming_milestones=[MilestoneItem(**m) for m in overview["upcoming_milestones"]],
        recent_updates=[RecentUpdateItem(**u) for u in overview["recent_updates"]],
    )
