type ProjectDetail = {
    id: number;
    title: string;
    description: string;
    status: "active" | "completed" | "on-hold";
    deadline: string;
  };
  
  const testProjectDetails: ProjectDetail = {
    id: 1,
    title: "Dashboard za spletne analitike",
    description: "Interaktivni dashboard za prikaz in analizo spletnih metrik.",
    status: "active",
    deadline: "2023-12-15",
  };
  
  export function ProjectDetails() {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">{testProjectDetails.title}</h2>
        <p className="text-gray-600 mb-4">{testProjectDetails.description}</p>
        <div className="flex items-center space-x-4">
          <span className={`px-3 py-1 rounded-full text-sm ${
            testProjectDetails.status === "active" ? "bg-green-100 text-green-800" :
            testProjectDetails.status === "completed" ? "bg-blue-100 text-blue-800" :
            "bg-yellow-100 text-yellow-800"
          }`}>
            {testProjectDetails.status === "active" ? "Aktiven" : 
             testProjectDetails.status === "completed" ? "Dokončan" : "V čakanju"}
          </span>
          <span className="text-gray-500">Rok: {new Date(testProjectDetails.deadline).toLocaleDateString()}</span>
        </div>
      </div>
    );
  }