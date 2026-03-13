export type ProjectRow = {
  id: string;
  name: string;
  projectNumber: string;
  status: string;
  phase: string;
  progress: number;
  nextMilestone: string;
  lastUpdated: string;
};

export const PROJECTS: ProjectRow[] = [
  {
    id: "north-corridor-2",
    name: "North Corridor Phase 2",
    projectNumber: "NC-2024-002",
    status: "On track",
    phase: "Construction",
    progress: 72,
    nextMilestone: "Cabling complete",
    lastUpdated: "2025-03-12",
  },
  {
    id: "east-loop",
    name: "East Loop Signal Upgrade",
    projectNumber: "EL-2024-001",
    status: "At risk",
    phase: "Commissioning",
    progress: 88,
    nextMilestone: "FAT sign-off",
    lastUpdated: "2025-03-11",
  },
  {
    id: "central-its",
    name: "Central Interchange ITS",
    projectNumber: "CI-2024-003",
    status: "On track",
    phase: "Design",
    progress: 45,
    nextMilestone: "Design review 2",
    lastUpdated: "2025-03-12",
  },
  {
    id: "westgate-tm",
    name: "Westgate Traffic Management",
    projectNumber: "WG-2024-001",
    status: "On hold",
    phase: "Design",
    progress: 28,
    nextMilestone: "Client approval",
    lastUpdated: "2025-03-05",
  },
  {
    id: "harbour-crossing",
    name: "Harbour Crossing Signals",
    projectNumber: "HC-2024-002",
    status: "On track",
    phase: "Construction",
    progress: 61,
    nextMilestone: "Controller install",
    lastUpdated: "2025-03-10",
  },
  {
    id: "metro-line-3",
    name: "Metro Line 3 Detection",
    projectNumber: "ML3-2024-001",
    status: "On track",
    phase: "Commissioning",
    progress: 94,
    nextMilestone: "Handover",
    lastUpdated: "2025-03-12",
  },
  {
    id: "regional-coord",
    name: "Regional Coordination System",
    projectNumber: "RC-2024-001",
    status: "At risk",
    phase: "Construction",
    progress: 55,
    nextMilestone: "Integration test",
    lastUpdated: "2025-03-09",
  },
  {
    id: "downtown-ped",
    name: "Downtown Pedestrian Phase",
    projectNumber: "DP-2024-002",
    status: "On track",
    phase: "Design",
    progress: 38,
    nextMilestone: "Stakeholder sign-off",
    lastUpdated: "2025-03-11",
  },
];

export const STATUS_OPTIONS = ["All", "On track", "At risk", "On hold"] as const;
export const PHASE_OPTIONS = ["All", "Design", "Construction", "Commissioning"] as const;
