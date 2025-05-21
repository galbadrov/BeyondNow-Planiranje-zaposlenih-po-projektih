import { useEffect, useState } from "react";
import { AddEmployeeModal } from "./AddEmployeeModal";

type Employee = {
  id: number;
  name: string;
  role: string;
  avatar: string;
};

export function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchEmployees = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/employees");
      if (!res.ok) throw new Error("Napaka pri nalaganju zaposlenih");
      const data = await res.json();
      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-[#111827] text-white font-medium">
        <h3>Project Team</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3 py-1 bg-blue-500 rounded text-sm"
        >
          + Add
        </button>
      </div>

      <ul className="divide-y divide-gray-200">
        {employees.map((employee) => (
          <li
            key={employee.id}
            className="p-4 flex items-center space-x-4 hover:bg-gray-50"
          >
            <img
              src={employee.avatar}
              alt={employee.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{employee.name}</p>
              <p className="text-sm text-gray-500">{employee.role}</p>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <AddEmployeeModal
          onClose={() => {
            setIsModalOpen(false);
            fetchEmployees(); // Osveži seznam ob zaprtju modala
          }}
        />
      )}
    </div>
  );
}
