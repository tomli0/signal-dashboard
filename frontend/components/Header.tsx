"use client";

export default function Header() {
  return (
    <header
      className="h-14 shrink-0 border-b border-white/10 bg-dashboard-bg flex items-center justify-between gap-4 px-6"
      role="banner"
    >
      <div className="flex items-center gap-4 min-w-0">
        <div
          className="flex items-center gap-2 px-3 py-2 rounded border border-white/20 bg-white/5 text-white/80 text-sm cursor-pointer hover:border-white/30 hover:text-white transition-colors"
          role="button"
          tabIndex={0}
          aria-label="Switch project"
        >
          <span className="truncate">Project</span>
          <svg
            className="w-4 h-4 shrink-0 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="hidden sm:block w-64">
          <input
            type="search"
            placeholder="Search…"
            aria-label="Search"
            className="w-full px-3 py-2 rounded border border-white/20 bg-white/5 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-1 focus:ring-dashboard-kpi focus:border-dashboard-kpi"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          className="px-4 py-2 rounded border border-dashboard-kpi bg-dashboard-kpi/10 text-dashboard-kpi text-sm font-medium hover:bg-dashboard-kpi/20 transition-colors"
          aria-label="Open report"
        >
          Report
        </button>
      </div>
    </header>
  );
}
