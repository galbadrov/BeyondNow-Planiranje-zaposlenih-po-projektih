import { useState } from "react";

interface AddEmployeeModalProps {
  onClose: () => void;
}

export function AddEmployeeModal({ onClose }: AddEmployeeModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [skill, setSkill] = useState("");

  const handleSubmit = async () => {
    if (!firstName || !lastName || !role) {
      alert("Ime, priimek in vloga so obvezni.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, role, skill }),
      });
  
      if (!response.ok) {
        // Če status ni 2xx, preberi napako iz response in prikaži
        const errorData = await response.json();
        alert(`Napaka: ${errorData.message || "Neznana napaka"}`);
        return;
      }
  
      // Uspešen dodatek
      onClose();
    } catch (error) {
      console.error("Napaka pri pošiljanju podatkov:", error);
      alert("Prišlo je do napake pri pošiljanju podatkov.");
    }
  };
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New Employee</h2>

        <input className="w-full mb-2 p-2 border" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input className="w-full mb-2 p-2 border" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <input className="w-full mb-2 p-2 border" placeholder="Role" value={role} onChange={e => setRole(e.target.value)} />
        <input className="w-full mb-4 p-2 border" placeholder="Skill (optional)" value={skill} onChange={e => setSkill(e.target.value)} />

        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
        </div>
      </div>
    </div>
  );
}
