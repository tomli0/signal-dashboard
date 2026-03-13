"""Static dummy data matching frontend. No database."""

PROJECTS = [
    {
        "id": "north-corridor-2",
        "name": "North Corridor Phase 2",
        "project_number": "NC-2024-002",
        "status": "On track",
        "phase": "Construction",
        "progress": 72,
        "next_milestone": "Cabling complete",
        "last_updated": "2025-03-12",
    },
    {
        "id": "east-loop",
        "name": "East Loop Signal Upgrade",
        "project_number": "EL-2024-001",
        "status": "At risk",
        "phase": "Commissioning",
        "progress": 88,
        "next_milestone": "FAT sign-off",
        "last_updated": "2025-03-11",
    },
    {
        "id": "central-its",
        "name": "Central Interchange ITS",
        "project_number": "CI-2024-003",
        "status": "On track",
        "phase": "Design",
        "progress": 45,
        "next_milestone": "Design review 2",
        "last_updated": "2025-03-12",
    },
    {
        "id": "westgate-tm",
        "name": "Westgate Traffic Management",
        "project_number": "WG-2024-001",
        "status": "On hold",
        "phase": "Design",
        "progress": 28,
        "next_milestone": "Client approval",
        "last_updated": "2025-03-05",
    },
    {
        "id": "harbour-crossing",
        "name": "Harbour Crossing Signals",
        "project_number": "HC-2024-002",
        "status": "On track",
        "phase": "Construction",
        "progress": 61,
        "next_milestone": "Controller install",
        "last_updated": "2025-03-10",
    },
    {
        "id": "metro-line-3",
        "name": "Metro Line 3 Detection",
        "project_number": "ML3-2024-001",
        "status": "On track",
        "phase": "Commissioning",
        "progress": 94,
        "next_milestone": "Handover",
        "last_updated": "2025-03-12",
    },
    {
        "id": "regional-coord",
        "name": "Regional Coordination System",
        "project_number": "RC-2024-001",
        "status": "At risk",
        "phase": "Construction",
        "progress": 55,
        "next_milestone": "Integration test",
        "last_updated": "2025-03-09",
    },
    {
        "id": "downtown-ped",
        "name": "Downtown Pedestrian Phase",
        "project_number": "DP-2024-002",
        "status": "On track",
        "phase": "Design",
        "progress": 38,
        "next_milestone": "Stakeholder sign-off",
        "last_updated": "2025-03-11",
    },
]

PORTFOLIO_KPIS = {
    "active_projects": 8,
    "needs_attention": 2,
    "upcoming_milestones": 5,
    "open_decisions": 3,
    "average_progress": 67,
    "drawings_pending_review": 12,
}

PORTFOLIO_NEEDS_ATTENTION = [
    {
        "project": "East Loop Signal Upgrade",
        "project_id": "east-loop",
        "issue": "FAT delayed — supplier lead time",
        "priority": "high",
    },
    {
        "project": "Regional Coordination System",
        "project_id": "regional-coord",
        "issue": "Integration test environment not ready",
        "priority": "high",
    },
    {
        "project": "Westgate Traffic Management",
        "project_id": "westgate-tm",
        "issue": "Awaiting client approval (2 weeks)",
        "priority": "medium",
    },
]

PORTFOLIO_UPCOMING_MILESTONES = [
    {"date": "2025-03-18", "project": "North Corridor Phase 2", "project_id": "north-corridor-2", "title": "Cabling complete"},
    {"date": "2025-03-20", "project": "East Loop Signal Upgrade", "project_id": "east-loop", "title": "FAT sign-off"},
    {"date": "2025-03-22", "project": "Central Interchange ITS", "project_id": "central-its", "title": "Design review 2"},
    {"date": "2025-03-25", "project": "Metro Line 3 Detection", "project_id": "metro-line-3", "title": "Handover"},
    {"date": "2025-03-28", "project": "Harbour Crossing Signals", "project_id": "harbour-crossing", "title": "Controller install"},
]

PORTFOLIO_RECENT_DECISIONS = [
    {"date": "2025-03-12", "project": "North Corridor Phase 2", "project_id": "north-corridor-2", "summary": "Approved cable tray routing change for zone B."},
    {"date": "2025-03-11", "project": "Central Interchange ITS", "project_id": "central-its", "summary": "Detector type confirmed; proceed with inductive loops."},
    {"date": "2025-03-10", "project": "Regional Coordination System", "project_id": "regional-coord", "summary": "Defer SCADA integration to Phase 2."},
]

# Portfolio projects (no project_number for table)
PORTFOLIO_PROJECTS = [
    {k: p[k] for k in ("id", "name", "status", "phase", "progress", "next_milestone", "last_updated")}
    for p in PROJECTS
]

# Project dashboard overview by id
OVERVIEW_BY_ID = {
    "north-corridor-2": {
        "kpis": {"progress": 72, "open_decisions": 2, "open_risks": 1, "active_drawings": 4, "budget_used": "68%", "hours_this_month": 124},
        "needs_attention": [
            {"title": "Cable tray routing", "description": "Zone B revision pending client sign-off."},
            {"title": "Detector delivery", "description": "Batch 3 delayed by 5 days; reschedule install."},
        ],
        "upcoming_milestones": [
            {"date": "2025-03-18", "title": "Cabling complete"},
            {"date": "2025-03-25", "title": "Controller cabinet install"},
            {"date": "2025-04-02", "title": "Loop testing complete"},
        ],
        "recent_updates": [
            {"date": "2025-03-12", "summary": "Cable tray routing change approved for zone B."},
            {"date": "2025-03-11", "summary": "Progress review completed; on track for 18 Mar milestone."},
            {"date": "2025-03-10", "summary": "Drawing S-204 rev 2 issued for construction."},
        ],
    },
    "east-loop": {
        "kpis": {"progress": 88, "open_decisions": 1, "open_risks": 2, "active_drawings": 2, "budget_used": "91%", "hours_this_month": 86},
        "needs_attention": [
            {"title": "FAT delay", "description": "Supplier lead time pushed FAT to 20 Mar."},
            {"title": "Commissioning plan", "description": "Revised plan to be agreed with client by Fri."},
        ],
        "upcoming_milestones": [{"date": "2025-03-20", "title": "FAT sign-off"}, {"date": "2025-03-28", "title": "Site acceptance"}],
        "recent_updates": [
            {"date": "2025-03-11", "summary": "FAT date moved to 20 Mar due to supplier delay."},
            {"date": "2025-03-09", "summary": "Pre-FAT checklist 80% complete."},
        ],
    },
    "central-its": {
        "kpis": {"progress": 45, "open_decisions": 3, "open_risks": 0, "active_drawings": 8, "budget_used": "42%", "hours_this_month": 156},
        "needs_attention": [{"title": "Design review 2", "description": "Scheduled 22 Mar; comments due 20 Mar."}],
        "upcoming_milestones": [{"date": "2025-03-22", "title": "Design review 2"}, {"date": "2025-04-05", "title": "Design freeze"}],
        "recent_updates": [
            {"date": "2025-03-12", "summary": "Detector type confirmed; inductive loops approved."},
            {"date": "2025-03-10", "summary": "Interchange layout rev 1 issued for review."},
        ],
    },
    "westgate-tm": {
        "kpis": {"progress": 28, "open_decisions": 2, "open_risks": 1, "active_drawings": 6, "budget_used": "25%", "hours_this_month": 42},
        "needs_attention": [{"title": "Client approval", "description": "Awaiting approval on scope change (2 weeks)."}],
        "upcoming_milestones": [{"date": "TBC", "title": "Client approval"}, {"date": "2025-04-15", "title": "Design kick-off"}],
        "recent_updates": [{"date": "2025-03-05", "summary": "Scope change submitted for client approval."}],
    },
    "harbour-crossing": {
        "kpis": {"progress": 61, "open_decisions": 1, "open_risks": 0, "active_drawings": 3, "budget_used": "58%", "hours_this_month": 98},
        "needs_attention": [],
        "upcoming_milestones": [{"date": "2025-03-28", "title": "Controller install"}, {"date": "2025-04-10", "title": "Detection commissioning"}],
        "recent_updates": [
            {"date": "2025-03-10", "summary": "Conduit installation 90% complete."},
            {"date": "2025-03-08", "summary": "Controller delivery confirmed for 25 Mar."},
        ],
    },
    "metro-line-3": {
        "kpis": {"progress": 94, "open_decisions": 0, "open_risks": 0, "active_drawings": 1, "budget_used": "96%", "hours_this_month": 64},
        "needs_attention": [{"title": "Handover docs", "description": "Final O&M manual due 24 Mar."}],
        "upcoming_milestones": [{"date": "2025-03-25", "title": "Handover"}],
        "recent_updates": [
            {"date": "2025-03-12", "summary": "SAT complete; punch list issued."},
            {"date": "2025-03-11", "summary": "Handover pack draft sent for review."},
        ],
    },
    "regional-coord": {
        "kpis": {"progress": 55, "open_decisions": 2, "open_risks": 2, "active_drawings": 5, "budget_used": "52%", "hours_this_month": 112},
        "needs_attention": [
            {"title": "Integration test env", "description": "Test environment not ready; target 20 Mar."},
            {"title": "SCADA deferral", "description": "Phase 2 deferral approved; update schedule."},
        ],
        "upcoming_milestones": [{"date": "2025-03-24", "title": "Integration test"}, {"date": "2025-04-01", "title": "System integration complete"}],
        "recent_updates": [
            {"date": "2025-03-10", "summary": "SCADA integration deferred to Phase 2."},
            {"date": "2025-03-08", "summary": "Coordination logic v2 tested in dev."},
        ],
    },
    "downtown-ped": {
        "kpis": {"progress": 38, "open_decisions": 2, "open_risks": 0, "active_drawings": 7, "budget_used": "35%", "hours_this_month": 88},
        "needs_attention": [{"title": "Stakeholder sign-off", "description": "Council sign-off required before phase 2."}],
        "upcoming_milestones": [{"date": "2025-03-22", "title": "Stakeholder sign-off"}, {"date": "2025-04-01", "title": "Detail design start"}],
        "recent_updates": [
            {"date": "2025-03-11", "summary": "Stakeholder pack sent; meeting set 22 Mar."},
            {"date": "2025-03-09", "summary": "Pedestrian count data received."},
        ],
    },
}

DEFAULT_OVERVIEW = {
    "kpis": {"progress": 0, "open_decisions": 0, "open_risks": 0, "active_drawings": 0, "budget_used": "—", "hours_this_month": 0},
    "needs_attention": [],
    "upcoming_milestones": [],
    "recent_updates": [],
}
