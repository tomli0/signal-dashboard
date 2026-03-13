"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/projects", label: "Projects" },
  { href: "/milestones", label: "Milestones" },
  { href: "/drawings", label: "Drawings" },
  { href: "/decisions", label: "Decisions" },
  { href: "/reports", label: "Reports" },
] as const;

export default function Sidebar() {
  const pathname = usePathname();
  const isProjectDetail = pathname.startsWith("/projects/") && pathname !== "/projects";

  return (
    <aside
      className="w-56 shrink-0 border-r border-white/10 bg-dashboard-bg flex flex-col"
      aria-label="Main navigation"
    >
      <div className="p-4 border-b border-white/10">
        <span className="text-xs font-medium uppercase tracking-wider text-white/60">
          Signal Dashboard
        </span>
      </div>
      <nav className="flex-1 p-3 space-y-0.5" aria-label="Primary">
        {NAV_ITEMS.map(({ href, label }) => {
          const isActive =
            href === "/"
              ? pathname === "/"
              : href === "/projects"
                ? pathname === "/projects" || isProjectDetail
                : pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`block px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                isActive
                  ? "bg-white/10 text-dashboard-kpi"
                  : "text-white/80 hover:bg-white/5 hover:text-white"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
