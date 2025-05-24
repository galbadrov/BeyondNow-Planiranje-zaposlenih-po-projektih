export interface Employee {
  id: string;
  name: string;
  role: string;
  skills: string[];
  imageUrl: string;
  department: string;
  email: string;
  availability: AvailabilityRecord[];
}

export interface Project {
  id: string;
  name: string;
  client: string;
  startDate: string;
  endDate: string;
  status: "planned" | "active" | "completed" | "on-hold";
  description: string;
  teamMembers: AssignedEmployee[];
  requiredRoles: ResourceRequest[];
}

export interface AssignedEmployee {
  employeeId: string;
  allocation: number;
  startDate: string;
  endDate: string;
}

export interface ResourceRequest {
  id: string;
  projectId: string;
  role: string;
  skills: string[];
  startDate: string;
  endDate: string;
  allocation: number;
  status: "pending" | "approved" | "fulfilled" | "rejected";
  notes: string;
}

export interface AvailabilityRecord {
  date: string;
  available: number;
  projects: {
    projectId: string;
    allocation: number;
  }[];
}

export type AvailabilityStatus =
  | "available"
  | "partially-booked"
  | "fully-booked"
  | "overbooked";

export interface TimelineCell {
  date: string;
  status: AvailabilityStatus;
  allocation: number;
  projects: {
    projectId: string;
    allocation: number;
  }[];
}

export interface TimelineRow {
  id: string;
  name: string;
  role: string;
  cells: TimelineCell[];
}

export interface ProjectTimelineRow {
  projectId: string;
  projectName: string;
  startDate: string;
  endDate: string;
  employees: {
    employeeId: string;
    name: string;
    role: string;
    allocation: number;
  }[];
  requiredRoles: {
    id: string;
    role: string;
    startDate: string;
    endDate: string;
  }[];
}

export interface UtilizationData {
  date: string;
  utilized: number;
  available: number;
  overallocated: number;
}

export interface DepartmentUtilization {
  department: string;
  utilization: number;
}

export interface Metric {
  label: string;
  value: string | number;
  change?: number;
  status?: "positive" | "negative" | "neutral";
  info?: string;
}
