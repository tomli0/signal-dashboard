/**
 * Simple fetch-based API client. No heavy state.
 */

const getApiUrl = () =>
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_API_URL) ||
  "http://localhost:8000";

async function fetchApi<T>(path: string): Promise<T> {
  const url = `${getApiUrl()}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url);
  if (!res.ok) {
    if (res.status === 404) {
      const e = new Error("Not found") as Error & { status: number };
      e.status = 404;
      throw e;
    }
    throw new Error(`API error: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

// --- Response types (match backend camelCase) ---

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

export type PortfolioKpis = {
  activeProjects: number;
  needsAttention: number;
  upcomingMilestones: number;
  openDecisions: number;
  averageProgress: number;
  drawingsPendingReview: number;
};

export type PortfolioProjectItem = {
  id: string;
  name: string;
  status: string;
  phase: string;
  progress: number;
  nextMilestone: string;
  lastUpdated: string;
};

export type PortfolioNeedsAttentionItem = {
  project: string;
  projectId: string;
  issue: string;
  priority: string;
};

export type PortfolioMilestoneItem = {
  date: string;
  project: string;
  projectId: string;
  title: string;
};

export type PortfolioDecisionItem = {
  date: string;
  project: string;
  projectId: string;
  summary: string;
};

export type PortfolioResponse = {
  kpis: PortfolioKpis;
  projects: PortfolioProjectItem[];
  needsAttention: PortfolioNeedsAttentionItem[];
  upcomingMilestones: PortfolioMilestoneItem[];
  recentDecisions: PortfolioDecisionItem[];
};

export type ProjectDashboardKpis = {
  progress: number;
  openDecisions: number;
  openRisks: number;
  activeDrawings: number;
  budgetUsed: string;
  hoursThisMonth: number;
};

export type ProjectDashboardResponse = {
  project: ProjectRow | null;
  kpis: ProjectDashboardKpis;
  needsAttention: { title: string; description: string }[];
  upcomingMilestones: { date: string; title: string }[];
  recentUpdates: { date: string; summary: string }[];
};

// --- API functions ---

export async function fetchPortfolio(): Promise<PortfolioResponse> {
  return fetchApi<PortfolioResponse>("/api/v1/dashboard/portfolio");
}

export async function fetchProjects(): Promise<ProjectRow[]> {
  return fetchApi<ProjectRow[]>("/api/v1/projects");
}

export async function fetchProjectDashboard(
  projectId: string
): Promise<ProjectDashboardResponse> {
  return fetchApi<ProjectDashboardResponse>(
    `/api/v1/dashboard/projects/${encodeURIComponent(projectId)}`
  );
}
