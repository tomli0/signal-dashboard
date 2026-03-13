import Link from "next/link";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-white/10 px-8 py-4">
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-white font-medium hover:text-dashboard-kpi transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/portfolio"
            className="text-white/80 hover:text-white transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/projects"
            className="text-white/80 hover:text-white transition-colors"
          >
            Projects
          </Link>
        </nav>
      </header>
      <main className="flex-1 px-8 py-10">{children}</main>
    </div>
  );
}
