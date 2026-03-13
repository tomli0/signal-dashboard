type KpiCardProps = {
  value: string | number;
  label: string;
};

export default function KpiCard({ value, label }: KpiCardProps) {
  return (
    <div className="rounded border border-white/10 bg-white/5 px-4 py-4">
      <div className="text-2xl font-semibold tabular-nums text-dashboard-kpi">{value}</div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  );
}
