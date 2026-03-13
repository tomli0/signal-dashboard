"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { fetchProjects } from "@/lib/api";
import type { ProjectRow } from "@/lib/api";

const RECENT_KEY = "signal-dashboard-recent-project-ids";
const RECENT_MAX = 5;

function getRecentIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(RECENT_KEY);
    const ids = raw ? (JSON.parse(raw) as string[]) : [];
    return Array.isArray(ids) ? ids.slice(0, RECENT_MAX) : [];
  } catch {
    return [];
  }
}

function pushRecentId(id: string) {
  try {
    const prev = getRecentIds().filter((x) => x !== id);
    window.localStorage.setItem(RECENT_KEY, JSON.stringify([id, ...prev].slice(0, RECENT_MAX)));
  } catch {
    // ignore
  }
}

function filterProjects(projects: ProjectRow[], query: string): ProjectRow[] {
  const q = query.trim().toLowerCase();
  if (!q) return projects;
  return projects.filter(
    (p) =>
      p.name.toLowerCase().includes(q) || p.projectNumber.toLowerCase().includes(q)
  );
}

export default function ProjectSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [recentIds, setRecentIds] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isProjectPage = pathname?.startsWith("/projects/") && pathname !== "/projects";
  const currentId = isProjectPage ? pathname.replace("/projects/", "").split("/")[0] ?? null : null;
  const currentProject = currentId ? projects.find((p) => p.id === currentId) : null;

  const recentProjects = useMemo(() => {
    const byId = new Map(projects.map((p) => [p.id, p]));
    return recentIds.map((id) => byId.get(id)).filter(Boolean) as ProjectRow[];
  }, [projects, recentIds]);

  const filteredRecent = useMemo(() => filterProjects(recentProjects, search), [recentProjects, search]);
  const filteredAll = useMemo(() => filterProjects(projects, search), [projects, search]);

  useEffect(() => {
    setRecentIds(getRecentIds());
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchProjects()
      .then((data) => {
        if (!cancelled) setProjects(data);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (currentId) {
      pushRecentId(currentId);
      setRecentIds(getRecentIds());
    }
  }, [currentId]);

  useEffect(() => {
    if (!open) return;
    setSearch("");
    const t = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const selectProject = useCallback(
    (project: ProjectRow) => {
      pushRecentId(project.id);
      setRecentIds(getRecentIds());
      setOpen(false);
      router.push(`/projects/${project.id}`);
    },
    [router]
  );

  const label = currentProject
    ? currentProject.name
    : currentId
      ? "Loading…"
      : "Select project";

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-2 rounded border border-white/20 bg-white/5 text-left text-white/90 hover:border-white/30 hover:text-white transition-colors min-w-0 max-w-[220px] sm:max-w-[280px]"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Switch project"
      >
        <span className="truncate text-sm">{label}</span>
        <svg
          className={`w-4 h-4 shrink-0 text-white/60 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute left-0 top-full mt-1 w-80 max-h-[min(400px,70vh)] flex flex-col rounded border border-white/20 bg-dashboard-bg shadow-lg z-50 overflow-hidden"
          role="listbox"
        >
          <div className="p-2 border-b border-white/10">
            <input
              ref={inputRef}
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects…"
              className="w-full px-3 py-2 rounded border border-white/20 bg-white/5 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-1 focus:ring-dashboard-kpi focus:border-dashboard-kpi"
              aria-label="Search projects"
              onKeyDown={(e) => e.stopPropagation()}
            />
          </div>
          <div className="overflow-y-auto flex-1">
            {loading && projects.length === 0 ? (
              <div className="px-3 py-4 text-sm text-white/50">Loading projects…</div>
            ) : (
              <>
                {filteredRecent.length > 0 && (
                  <div className="py-2">
                    <div className="px-3 py-1 text-xs font-medium text-white/50 uppercase tracking-wider">
                      Recent
                    </div>
                    {filteredRecent.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => selectProject(p)}
                        className="w-full px-3 py-2 text-left text-sm hover:bg-white/10 flex flex-col gap-0.5"
                        role="option"
                        aria-selected={p.id === currentId}
                      >
                        <span className="text-white font-medium truncate">{p.name}</span>
                        <span className="text-white/60 text-xs tabular-nums">{p.projectNumber}</span>
                      </button>
                    ))}
                  </div>
                )}
                <div className="py-2 border-t border-white/10">
                  <div className="px-3 py-1 text-xs font-medium text-white/50 uppercase tracking-wider">
                    All projects
                  </div>
                  {filteredAll.length === 0 ? (
                    <div className="px-3 py-4 text-sm text-white/50">No projects match.</div>
                  ) : (
                    filteredAll.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => selectProject(p)}
                        className="w-full px-3 py-2 text-left text-sm hover:bg-white/10 flex flex-col gap-0.5"
                        role="option"
                        aria-selected={p.id === currentId}
                      >
                        <span className="text-white font-medium truncate">{p.name}</span>
                        <span className="text-white/60 text-xs tabular-nums">{p.projectNumber}</span>
                      </button>
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
