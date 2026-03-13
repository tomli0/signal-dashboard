/**
 * Filter options for project register. Project list is fetched from the API.
 */

export const STATUS_OPTIONS = ["All", "On track", "At risk", "On hold"] as const;
export const PHASE_OPTIONS = ["All", "Design", "Construction", "Commissioning"] as const;

// Re-export type from API layer for use in this app section
export type { ProjectRow } from "@/lib/api";
