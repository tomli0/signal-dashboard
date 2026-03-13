export const KPI = {
  activeProjects: 8,
  needsAttention: 2,
  upcomingMilestones: 5,
  openDecisions: 3,
  averageProgress: 67,
  drawingsPendingReview: 12,
} as const;

export const PROJECTS = [
  {
    id: "north-corridor-2",
    name: "North Corridor Phase 2",
    status: "On track",
    phase: "Construction",
    progress: 72,
    nextMilestone: "Cabling complete",
    lastUpdated: "2025-03-12",
  },
  {
    id: "east-loop",
    name: "East Loop Signal Upgrade",
    status: "At risk",
    phase: "Commissioning",
    progress: 88,
    nextMilestone: "FAT sign-off",
    lastUpdated: "2025-03-11",
  },
  {
    id: "central-its",
    name: "Central Interchange ITS",
    status: "On track",
    phase: "Design",
    progress: 45,
    nextMilestone: "Design review 2",
    lastUpdated: "2025-03-12",
  },
  {
    id: "westgate-tm",
    name: "Westgate Traffic Management",
    status: "On hold",
    phase: "Design",
    progress: 28,
    nextMilestone: "Client approval",
    lastUpdated: "2025-03-05",
  },
  {
    id: "harbour-crossing",
    name: "Harbour Crossing Signals",
    status: "On track",
    phase: "Construction",
    progress: 61,
    nextMilestone: "Controller install",
    lastUpdated: "2025-03-10",
  },
  {
    id: "metro-line-3",
    name: "Metro Line 3 Detection",
    status: "On track",
    phase: "Commissioning",
    progress: 94,
    nextMilestone: "Handover",
    lastUpdated: "2025-03-12",
  },
  {
    id: "regional-coord",
    name: "Regional Coordination System",
    status: "At risk",
    phase: "Construction",
    progress: 55,
    nextMilestone: "Integration test",
    lastUpdated: "2025-03-09",
  },
  {
    id: "downtown-ped",
    name: "Downtown Pedestrian Phase",
    status: "On track",
    phase: "Design",
    progress: 38,
    nextMilestone: "Stakeholder sign-off",
    lastUpdated: "2025-03-11",
  },
] as const;

export const NEEDS_ATTENTION = [
  {
    project: "East Loop Signal Upgrade",
    projectId: "east-loop",
    issue: "FAT delayed — supplier lead time",
    priority: "high",
  },
  {
    project: "Regional Coordination System",
    projectId: "regional-coord",
    issue: "Integration test environment not ready",
    priority: "high",
  },
  {
    project: "Westgate Traffic Management",
    projectId: "westgate-tm",
    issue: "Awaiting client approval (2 weeks)",
    priority: "medium",
  },
] as const;

export const UPCOMING_MILESTONES = [
  { date: "2025-03-18", project: "North Corridor Phase 2", projectId: "north-corridor-2", title: "Cabling complete" },
  { date: "2025-03-20", project: "East Loop Signal Upgrade", projectId: "east-loop", title: "FAT sign-off" },
  { date: "2025-03-22", project: "Central Interchange ITS", projectId: "central-its", title: "Design review 2" },
  { date: "2025-03-25", project: "Metro Line 3 Detection", projectId: "metro-line-3", title: "Handover" },
  { date: "2025-03-28", project: "Harbour Crossing Signals", projectId: "harbour-crossing", title: "Controller install" },
] as const;

export const RECENT_DECISIONS = [
  {
    date: "2025-03-12",
    project: "North Corridor Phase 2",
    projectId: "north-corridor-2",
    summary: "Approved cable tray routing change for zone B.",
  },
  {
    date: "2025-03-11",
    project: "Central Interchange ITS",
    projectId: "central-its",
    summary: "Detector type confirmed; proceed with inductive loops.",
  },
  {
    date: "2025-03-10",
    project: "Regional Coordination System",
    projectId: "regional-coord",
    summary: "Defer SCADA integration to Phase 2.",
  },
] as const;
