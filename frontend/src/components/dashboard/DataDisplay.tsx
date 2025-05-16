import { useState } from "react";

type Employee = {
  id: number;
  name: string;
  role: string;
  avatar: string;
};

type ProjectDetail = {
  id: number;
  title: string;
  description: string;
  status: "active" | "completed" | "on-hold";
  deadline: string;
};

type TimelineEvent = {
  id: number;
  date: string;
  title: string;
  description: string;
};

// Testni podatki
const testEmployees: Employee[] = [
  { id: 1, name: "Janez Novak", role: "Frontend Developer", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Ana Kovač", role: "Backend Developer", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Marko Horvat", role: "UI Designer", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Ivana Petrović", role: "Project Manager", avatar: "https://i.pravatar.cc/150?img=4" },
];

const testProjectDetails: ProjectDetail = {
  id: 1,
  title: "Dashboard za spletne analitike",
  description: "Interaktivni dashboard za prikaz in analizo spletnih metrik.",
  status: "active",
  deadline: "2023-12-15",
};

const testTimelineEvents: TimelineEvent[] = [
  { id: 1, date: "2023-11-01", title: "Začetek projekta", description: "Projekt se je začel" },
  { id: 2, date: "2023-11-15", title: "Prva faza dokončana", description: "Osnovna funkcionalnost implementirana" },
  { id: 3, date: "2023-12-01", title: "Testiranje", description: "Začetek testiranja aplikacije" },
];

export function DataDisplay() {
  const [activeTab, setActiveTab] = useState<"timeline" | "employees" | "project">("project");

  return (
    <div className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB]">
      {/* Tabovi za izbiro prikaza */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("project")}
          className={`px-4 py-2 rounded-lg ${activeTab === "project" ? 'bg-[#111827] text-white' : 'bg-white text-[#111827]'}`}
        >
          Podrobnosti projekta
        </button>
        <button
          onClick={() => setActiveTab("employees")}
          className={`px-4 py-2 rounded-lg ${activeTab === "employees" ? 'bg-[#111827] text-white' : 'bg-white text-[#111827]'}`}
        >
          Zaposleni
        </button>
        <button
          onClick={() => setActiveTab("timeline")}
          className={`px-4 py-2 rounded-lg ${activeTab === "timeline" ? 'bg-[#111827] text-white' : 'bg-white text-[#111827]'}`}
        >
          Časovnica
        </button>
      </div>

      {/* Vsebina glede na izbrani tab */}
      <div className="space-y-6">
        {activeTab === "project" && <ProjectDetails details={testProjectDetails} />}
        {activeTab === "employees" && <EmployeeList employees={testEmployees} />}
        {activeTab === "timeline" && <Timeline events={testTimelineEvents} />}
      </div>
    </div>
  );
}

// Podkomponente
function ProjectDetails({ details }: { details: ProjectDetail }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">{details.title}</h2>
      <p className="text-gray-600 mb-4">{details.description}</p>
      <div className="flex items-center space-x-4">
        <span className={`px-3 py-1 rounded-full text-sm ${
          details.status === "active" ? "bg-green-100 text-green-800" :
          details.status === "completed" ? "bg-blue-100 text-blue-800" :
          "bg-yellow-100 text-yellow-800"
        }`}>
          {details.status === "active" ? "Aktiven" : details.status === "completed" ? "Dokončan" : "V čakanju"}
        </span>
        <span className="text-gray-500">Rok: {new Date(details.deadline).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

function EmployeeList({ employees }: { employees: Employee[] }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <h3 className="p-4 bg-[#111827] text-white font-medium">Zaposleni na projektu</h3>
      <ul className="divide-y divide-gray-200">
        {employees.map(employee => (
          <li key={employee.id} className="p-4 flex items-center space-x-4 hover:bg-gray-50">
            <img src={employee.avatar} alt={employee.name} className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium">{employee.name}</p>
              <p className="text-sm text-gray-500">{employee.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Časovnica dogodkov</h3>
      <div className="space-y-4">
        {events.map(event => (
          <div key={event.id} className="flex space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-[#111827] rounded-full"></div>
              <div className="w-px h-full bg-gray-300"></div>
            </div>
            <div className="pb-4">
              <p className="font-medium">{event.title}</p>
              <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-600 mt-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}