export default function ProjectOverviewLoading() {
  return (
    <div className="space-y-8">
      <div className="h-8 w-48 bg-white/10 rounded animate-pulse" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-20 bg-white/5 rounded border border-white/10 animate-pulse" />
        ))}
      </div>
      <p className="text-white/70">Loading…</p>
    </div>
  );
}
