type Props = { params: Promise<{ id: string }> };

export default async function ProjectOverviewPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-white">
        Project overview
      </h1>
      <p className="text-white/80">
        Project <span className="text-dashboard-kpi font-medium">{id}</span> —
        overview to be implemented.
      </p>
    </div>
  );
}
