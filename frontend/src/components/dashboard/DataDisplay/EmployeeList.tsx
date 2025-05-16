type Employee = {
    id: number;
    name: string;
    role: string;
    avatar: string;
  };
  
  const testEmployees: Employee[] = [
    { id: 1, name: "Janez Novak", role: "Frontend Developer", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Ana Kovač", role: "Backend Developer", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: 3, name: "Marko Horvat", role: "UI Designer", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: 4, name: "Ivana Petrović", role: "Project Manager", avatar: "https://i.pravatar.cc/150?img=4" },
  ];
  
  export function EmployeeList() {
    return (
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h3 className="p-4 bg-[#111827] text-white font-medium">Project Team</h3>
        <ul className="divide-y divide-gray-200">
          {testEmployees.map(employee => (
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