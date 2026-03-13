"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import { fetchProjects } from "@/lib/api";
import type { ProjectRow } from "@/lib/api";
import { STATUS_OPTIONS, PHASE_OPTIONS } from "./data";

function statusClass(status: string) {
  if (status === "At risk") return "text-dashboard-kpi";
  if (status === "On hold") return "text-white/60";
  return "text-white/90";
}

const selectClass =
  "rounded border border-white/20 bg-white/5 text-white text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-dashboard-kpi focus:border-dashboard-kpi";

export default function ProjectsListPage() {
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [phaseFilter, setPhaseFilter] = useState<string>("All");

  useEffect(() => {
    let cancelled = false;
    setError(null);
    fetchProjects()
      .then((data) => {
        if (!cancelled) setProjects(data);
      })
      .catch(() => {
        if (!cancelled) setError("Failed to load projects.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    let list = projects;
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) || p.projectNumber.toLowerCase().includes(q)
      );
    }
    if (statusFilter !== "All") {
      list = list.filter((p) => p.status === statusFilter);
    }
    if (phaseFilter !== "All") {
      list = list.filter((p) => p.phase === phaseFilter);
    }
    return list;
  }, [projects, search, statusFilter, phaseFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl font-semibold text-white">Project register</h1>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex-1 min-w-0">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <input
            id="project-search"
            type="search"
            placeholder="Search by name or project number…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded border border-white/20 bg-white/5 text-white placeholder-white/40 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-dashboard-kpi focus:border-dashboard-kpi"
            aria-label="Search projects"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <label htmlFor="filter-status" className="sr-only">
            Filter by status
          </label>
          <select
            id="filter-status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={selectClass}
            aria-label="Filter by status"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <label htmlFor="filter-phase" className="sr-only">
            Filter by phase
          </label>
          <select
            id="filter-phase"
            value={phaseFilter}
            onChange={(e) => setPhaseFilter(e.target.value)}
            className={selectClass}
            aria-label="Filter by phase"
          >
            {PHASE_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Card title="Projects">
        {loading ? (
          <p className="text-white/70 text-sm">Loading…</p>
        ) : error ? (
          <p className="text-white/80 text-sm">{error}</p>
        ) : (
          <div className="overflow-x-auto -mx-5 sm:mx-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-left text-white/70 uppercase tracking-wider">
                  <th className="py-3 pr-4 font-medium">Project name</th>
                  <th className="py-3 pr-4 font-medium">Project number</th>
                  <th className="py-3 pr-4 font-medium">Status</th>
                  <th className="py-3 pr-4 font-medium">Phase</th>
                  <th className="py-3 pr-4 font-medium">Progress</th>
                  <th className="py-3 pr-4 font-medium">Next milestone</th>
                  <th className="py-3 font-medium">Last updated</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-white/60">
                      No projects match the current filters.
                    </td>
                  </tr>
                ) : (
                  filtered.map((p) => (
                    <tr
                      key={p.id}
                      className="border-b border-white/5 hover:bg-white/5"
                    >
                      <td className="py-3 pr-4">
                        <Link
                          href={`/projects/${p.id}`}
                          className="text-white font-medium hover:text-dashboard-kpi transition-colors"
                        >
                          {p.name}
                        </Link>
                      </td>
                      <td className="py-3 pr-4">
                        <Link
                          href={`/projects/${p.id}`}
                          className="text-white/80 hover:text-dashboard-kpi transition-colors tabular-nums"
                        >
                          {p.projectNumber}
                        </Link>
                      </td>
                      <td className={`py-3 pr-4 font-medium ${statusClass(p.status)}`}>
                        {p.status}
                      </td>
                      <td className="py-3 pr-4 text-white/80">{p.phase}</td>
                      <td className="py-3 pr-4 tabular-nums text-white/90">
                        {p.progress}%
                      </td>
                      <td className="py-3 pr-4 text-white/80">{p.nextMilestone}</td>
                      <td className="py-3 text-white/70">{p.lastUpdated}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
