import Link from "next/link";
import Card from "@/components/Card";
import KpiCard from "@/components/KpiCard";
import {
  KPI,
  PROJECTS,
  NEEDS_ATTENTION,
  UPCOMING_MILESTONES,
  RECENT_DECISIONS,
} from "./data";

function statusClass(status: string) {
  if (status === "At risk") return "text-dashboard-kpi";
  if (status === "On hold") return "text-white/60";
  return "text-white/90";
}

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-semibold text-white">Portfolio</h1>

      {/* 1. Top KPI row */}
      <section aria-label="Key metrics" className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <KpiCard value={KPI.activeProjects} label="Active projects" />
        <KpiCard value={KPI.needsAttention} label="Projects needing attention" />
        <KpiCard value={KPI.upcomingMilestones} label="Upcoming milestones (30d)" />
        <KpiCard value={KPI.openDecisions} label="Open decisions" />
        <KpiCard value={`${KPI.averageProgress}%`} label="Average progress" />
        <KpiCard value={KPI.drawingsPendingReview} label="Drawings pending review" />
      </section>

      {/* 2. Projects table */}
      <Card title="Projects">
        <div className="overflow-x-auto -mx-5 sm:mx-0">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-left text-white/70 uppercase tracking-wider">
                <th className="py-3 pr-4 font-medium">Project</th>
                <th className="py-3 pr-4 font-medium">Status</th>
                <th className="py-3 pr-4 font-medium">Phase</th>
                <th className="py-3 pr-4 font-medium">Progress</th>
                <th className="py-3 pr-4 font-medium">Next milestone</th>
                <th className="py-3 font-medium">Last updated</th>
              </tr>
            </thead>
            <tbody>
              {PROJECTS.map((p) => (
                <tr key={p.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 pr-4">
                    <Link
                      href={`/projects/${p.id}`}
                      className="text-white font-medium hover:text-dashboard-kpi transition-colors"
                    >
                      {p.name}
                    </Link>
                  </td>
                  <td className={`py-3 pr-4 font-medium ${statusClass(p.status)}`}>
                    {p.status}
                  </td>
                  <td className="py-3 pr-4 text-white/80">{p.phase}</td>
                  <td className="py-3 pr-4">
                    <span className="tabular-nums text-white/90">{p.progress}%</span>
                  </td>
                  <td className="py-3 pr-4 text-white/80">{p.nextMilestone}</td>
                  <td className="py-3 text-white/70">{p.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* 3. Needs attention + 4. Upcoming milestones + 5. Recent decisions */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Needs attention">
          <ul className="space-y-3" role="list">
            {NEEDS_ATTENTION.map((item) => (
              <li key={`${item.projectId}-${item.issue}`}>
                <Link
                  href={`/projects/${item.projectId}`}
                  className="text-white font-medium hover:text-dashboard-kpi transition-colors"
                >
                  {item.project}
                </Link>
                <p className="mt-0.5 text-sm text-white/80">{item.issue}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Upcoming milestones">
          <ul className="space-y-3" role="list">
            {UPCOMING_MILESTONES.map((m) => (
              <li key={`${m.date}-${m.projectId}-${m.title}`} className="flex gap-3 text-sm">
                <span className="shrink-0 w-20 tabular-nums text-white/70">{m.date}</span>
                <span>
                  <Link href={`/projects/${m.projectId}`} className="text-white/90 hover:text-dashboard-kpi transition-colors">{m.title}</Link>
                  <span className="text-white/60"> — {m.project}</span>
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Recent decisions">
          <ul className="space-y-3" role="list">
            {RECENT_DECISIONS.map((d) => (
              <li key={`${d.date}-${d.projectId}`} className="text-sm">
                <span className="tabular-nums text-white/70">{d.date}</span>
                <span className="text-white/60"> · </span>
                <Link
                  href={`/projects/${d.projectId}`}
                  className="text-white/90 hover:text-dashboard-kpi transition-colors"
                >
                  {d.project}
                </Link>
                <p className="mt-0.5 text-white/80">{d.summary}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
