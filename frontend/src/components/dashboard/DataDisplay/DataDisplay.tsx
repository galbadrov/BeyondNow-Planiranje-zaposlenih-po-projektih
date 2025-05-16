import { useState } from "react";
import { EmployeeList } from "./EmployeeList";
import { ProjectDetails } from "./ProjectDetails";
import { Timeline } from "./Timeline";

export function DataDisplay() {
  const [activeTab, setActiveTab] = useState<"timeline" | "employees" | "project">("project");

  return (
    <div className="flex-1 overflow-y-auto p-6 bg-[#111827]">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("project")}
          className={`px-4 py-2 rounded-lg ${activeTab === "project" ? 'bg-[#111827] text-white' : 'bg-white text-[#111827]'}`}
        >
          Project Details
        </button>
        <button
          onClick={() => setActiveTab("employees")}
          className={`px-4 py-2 rounded-lg ${activeTab === "employees" ? 'bg-[#111827] text-white' : 'bg-white text-[#111827]'}`}
        >
          Developers
        </button>
        <button
          onClick={() => setActiveTab("timeline")}
          className={`px-4 py-2 rounded-lg ${activeTab === "timeline" ? 'bg-[#111827] text-white' : 'bg-white text-[#111827]'}`}
        >
          Timeline
        </button>
      </div>

      {/* Vsebina glede na izbrani tab */}
      <div className="space-y-6">
        {activeTab === "project" && <ProjectDetails />}
        {activeTab === "employees" && <EmployeeList />}
        {activeTab === "timeline" && <Timeline />}
      </div>
    </div>
  );
}