import Card from "@/components/Card";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-white">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        <Card title="Overview">
          <p className="text-white/80 text-sm">
            Infrastructure control for multiple signal projects. Use the sidebar to
            open Portfolio, Projects, or other sections.
          </p>
        </Card>
        <Card title="Quick actions">
          <p className="text-white/60 text-sm">Placeholder for key metrics and actions.</p>
        </Card>
      </div>
    </div>
  );
}
