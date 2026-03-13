import { PROJECTS } from "./data";
import type { ProjectRow } from "./data";

export type ProjectOverview = {
  project: ProjectRow | null;
  kpis: {
    progress: number;
    openDecisions: number;
    openRisks: number;
    activeDrawings: number;
    budgetUsed: string;
    hoursThisMonth: number;
  };
  needsAttention: { title: string; description: string }[];
  upcomingMilestones: { date: string; title: string }[];
  recentUpdates: { date: string; summary: string }[];
};

const OVERVIEW_BY_ID: Record<string, Omit<ProjectOverview, "project">> = {
  "north-corridor-2": {
    kpis: {
      progress: 72,
      openDecisions: 2,
      openRisks: 1,
      activeDrawings: 4,
      budgetUsed: "68%",
      hoursThisMonth: 124,
    },
    needsAttention: [
      { title: "Cable tray routing", description: "Zone B revision pending client sign-off." },
      { title: "Detector delivery", description: "Batch 3 delayed by 5 days; reschedule install." },
    ],
    upcomingMilestones: [
      { date: "2025-03-18", title: "Cabling complete" },
      { date: "2025-03-25", title: "Controller cabinet install" },
      { date: "2025-04-02", title: "Loop testing complete" },
    ],
    recentUpdates: [
      { date: "2025-03-12", summary: "Cable tray routing change approved for zone B." },
      { date: "2025-03-11", summary: "Progress review completed; on track for 18 Mar milestone." },
      { date: "2025-03-10", summary: "Drawing S-204 rev 2 issued for construction." },
    ],
  },
  "east-loop": {
    kpis: {
      progress: 88,
      openDecisions: 1,
      openRisks: 2,
      activeDrawings: 2,
      budgetUsed: "91%",
      hoursThisMonth: 86,
    },
    needsAttention: [
      { title: "FAT delay", description: "Supplier lead time pushed FAT to 20 Mar." },
      { title: "Commissioning plan", description: "Revised plan to be agreed with client by Fri." },
    ],
    upcomingMilestones: [
      { date: "2025-03-20", title: "FAT sign-off" },
      { date: "2025-03-28", title: "Site acceptance" },
    ],
    recentUpdates: [
      { date: "2025-03-11", summary: "FAT date moved to 20 Mar due to supplier delay." },
      { date: "2025-03-09", summary: "Pre-FAT checklist 80% complete." },
    ],
  },
  "central-its": {
    kpis: {
      progress: 45,
      openDecisions: 3,
      openRisks: 0,
      activeDrawings: 8,
      budgetUsed: "42%",
      hoursThisMonth: 156,
    },
    needsAttention: [
      { title: "Design review 2", description: "Scheduled 22 Mar; comments due 20 Mar." },
    ],
    upcomingMilestones: [
      { date: "2025-03-22", title: "Design review 2" },
      { date: "2025-04-05", title: "Design freeze" },
    ],
    recentUpdates: [
      { date: "2025-03-12", summary: "Detector type confirmed; inductive loops approved." },
      { date: "2025-03-10", summary: "Interchange layout rev 1 issued for review." },
    ],
  },
  "westgate-tm": {
    kpis: {
      progress: 28,
      openDecisions: 2,
      openRisks: 1,
      activeDrawings: 6,
      budgetUsed: "25%",
      hoursThisMonth: 42,
    },
    needsAttention: [
      { title: "Client approval", description: "Awaiting approval on scope change (2 weeks)." },
    ],
    upcomingMilestones: [
      { date: "TBC", title: "Client approval" },
      { date: "2025-04-15", title: "Design kick-off" },
    ],
    recentUpdates: [
      { date: "2025-03-05", summary: "Scope change submitted for client approval." },
    ],
  },
  "harbour-crossing": {
    kpis: {
      progress: 61,
      openDecisions: 1,
      openRisks: 0,
      activeDrawings: 3,
      budgetUsed: "58%",
      hoursThisMonth: 98,
    },
    needsAttention: [],
    upcomingMilestones: [
      { date: "2025-03-28", title: "Controller install" },
      { date: "2025-04-10", title: "Detection commissioning" },
    ],
    recentUpdates: [
      { date: "2025-03-10", summary: "Conduit installation 90% complete." },
      { date: "2025-03-08", summary: "Controller delivery confirmed for 25 Mar." },
    ],
  },
  "metro-line-3": {
    kpis: {
      progress: 94,
      openDecisions: 0,
      openRisks: 0,
      activeDrawings: 1,
      budgetUsed: "96%",
      hoursThisMonth: 64,
    },
    needsAttention: [
      { title: "Handover docs", description: "Final O&M manual due 24 Mar." },
    ],
    upcomingMilestones: [
      { date: "2025-03-25", title: "Handover" },
    ],
    recentUpdates: [
      { date: "2025-03-12", summary: "SAT complete; punch list issued." },
      { date: "2025-03-11", summary: "Handover pack draft sent for review." },
    ],
  },
  "regional-coord": {
    kpis: {
      progress: 55,
      openDecisions: 2,
      openRisks: 2,
      activeDrawings: 5,
      budgetUsed: "52%",
      hoursThisMonth: 112,
    },
    needsAttention: [
      { title: "Integration test env", description: "Test environment not ready; target 20 Mar." },
      { title: "SCADA deferral", description: "Phase 2 deferral approved; update schedule." },
    ],
    upcomingMilestones: [
      { date: "2025-03-24", title: "Integration test" },
      { date: "2025-04-01", title: "System integration complete" },
    ],
    recentUpdates: [
      { date: "2025-03-10", summary: "SCADA integration deferred to Phase 2." },
      { date: "2025-03-08", summary: "Coordination logic v2 tested in dev." },
    ],
  },
  "downtown-ped": {
    kpis: {
      progress: 38,
      openDecisions: 2,
      openRisks: 0,
      activeDrawings: 7,
      budgetUsed: "35%",
      hoursThisMonth: 88,
    },
    needsAttention: [
      { title: "Stakeholder sign-off", description: "Council sign-off required before phase 2." },
    ],
    upcomingMilestones: [
      { date: "2025-03-22", title: "Stakeholder sign-off" },
      { date: "2025-04-01", title: "Detail design start" },
    ],
    recentUpdates: [
      { date: "2025-03-11", summary: "Stakeholder pack sent; meeting set 22 Mar." },
      { date: "2025-03-09", summary: "Pedestrian count data received." },
    ],
  },
};

const DEFAULT_OVERVIEW: Omit<ProjectOverview, "project"> = {
  kpis: {
    progress: 0,
    openDecisions: 0,
    openRisks: 0,
    activeDrawings: 0,
    budgetUsed: "—",
    hoursThisMonth: 0,
  },
  needsAttention: [],
  upcomingMilestones: [],
  recentUpdates: [],
};

export function getProjectOverview(id: string): ProjectOverview {
  const project = PROJECTS.find((p) => p.id === id) ?? null;
  const overview = OVERVIEW_BY_ID[id] ?? DEFAULT_OVERVIEW;
  const kpis = overview.kpis;
  return {
    project,
    kpis: project ? { ...kpis, progress: project.progress } : kpis,
    needsAttention: overview.needsAttention,
    upcomingMilestones: overview.upcomingMilestones,
    recentUpdates: overview.recentUpdates,
  };
}
