"use client";

import ProjectSwitcher from "./ProjectSwitcher";

export default function Header() {
  return (
    <header
      className="h-14 shrink-0 border-b border-white/10 bg-dashboard-bg flex items-center justify-between gap-4 px-6"
      role="banner"
    >
      <div className="flex items-center gap-4 min-w-0">
        <ProjectSwitcher />
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
