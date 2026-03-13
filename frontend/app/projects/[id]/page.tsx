import Link from "next/link";
import Card from "@/components/Card";
import KpiCard from "@/components/KpiCard";
import { fetchProjectDashboard } from "@/lib/api";

type Props = { params: Promise<{ id: string }> };

function statusClass(status: string) {
  if (status === "At risk") return "text-dashboard-kpi";
  if (status === "On hold") return "text-white/60";
  return "text-white/90";
}

export default async function ProjectOverviewPage({ params }: Props) {
  const { id } = await params;
  let data;
  try {
    data = await fetchProjectDashboard(id);
  } catch (e) {
    const is404 = e instanceof Error && "status" in e && (e as Error & { status: number }).status === 404;
    return (
      <div className="space-y-6">
        <h1 className="text-xl font-semibold text-white">Project not found</h1>
        <Card title="Error">
          <p className="text-white/80 text-sm">
            {is404
              ? `No project with id "${id}". `
              : "Failed to load project. "}
            <Link href="/projects" className="text-dashboard-kpi hover:underline">
              Back to project register
            </Link>
          </p>
        </Card>
      </div>
    );
  }

  const { project, kpis, needsAttention, upcomingMilestones, recentUpdates } = data;

  if (!project) {
    return (
      <div className="space-y-6">
        <h1 className="text-xl font-semibold text-white">Project not found</h1>
        <Card title="Error">
          <p className="text-white/80 text-sm">
            No project with id &quot;{id}&quot;.{" "}
            <Link href="/projects" className="text-dashboard-kpi hover:underline">
              Back to project register
            </Link>
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div>
          <h1 className="text-xl font-semibold text-white">{project.name}</h1>
          <p className="mt-0.5 text-sm text-white/70 tabular-nums">
            {project.projectNumber}
          </p>
        </div>
        <dl className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
          <div>
            <dt className="inline text-white/60">Phase </dt>
            <dd className="inline text-white/90">{project.phase}</dd>
          </div>
          <div>
            <dt className="inline text-white/60">Status </dt>
            <dd className={`inline font-medium ${statusClass(project.status)}`}>
              {project.status}
            </dd>
          </div>
          <div>
            <dt className="inline text-white/60">Next milestone </dt>
            <dd className="inline text-white/90">{project.nextMilestone}</dd>
          </div>
        </dl>
      </header>

      <section aria-label="Key metrics" className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <KpiCard value={`${kpis.progress}%`} label="Progress" />
        <KpiCard value={kpis.openDecisions} label="Open decisions" />
        <KpiCard value={kpis.openRisks} label="Open risks" />
        <KpiCard value={kpis.activeDrawings} label="Active drawings" />
        <KpiCard value={kpis.budgetUsed} label="Budget used" />
        <KpiCard value={kpis.hoursThisMonth} label="Hours this month" />
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Needs attention">
          {needsAttention.length === 0 ? (
            <p className="text-sm text-white/60">Nothing requiring attention.</p>
          ) : (
            <ul className="space-y-3" role="list">
              {needsAttention.map((item) => (
                <li key={item.title}>
                  <span className="font-medium text-white/90">{item.title}</span>
                  <p className="mt-0.5 text-sm text-white/80">{item.description}</p>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="Upcoming milestones">
          {upcomingMilestones.length === 0 ? (
            <p className="text-sm text-white/60">No milestones scheduled.</p>
          ) : (
            <ul className="space-y-3" role="list">
              {upcomingMilestones.map((m) => (
                <li key={`${m.date}-${m.title}`} className="flex gap-3 text-sm">
                  <span className="shrink-0 w-16 tabular-nums text-white/70">
                    {m.date}
                  </span>
                  <span className="text-white/90">{m.title}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="Recent updates">
          {recentUpdates.length === 0 ? (
            <p className="text-sm text-white/60">No recent updates.</p>
          ) : (
            <ul className="space-y-3" role="list">
              {recentUpdates.map((u) => (
                <li key={`${u.date}-${u.summary}`} className="text-sm">
                  <span className="tabular-nums text-white/70">{u.date}</span>
                  <p className="mt-0.5 text-white/80">{u.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}
