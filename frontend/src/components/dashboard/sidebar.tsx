import { useEffect, useState } from "react";

//const projekti = async () => fetch("http://localhost:3000/api/projects");


//const projekti = [];


type project = {
  id: number;
  name: string;
};

// ✅ Testni projekti definirani ločeno zgoraj
const testniProjekti: project[] = [
  { id: 1, name: "Orodje za analizo podatkov" },
  { id: 2, name: "Spletna trgovina za knjige" },
  { id: 3, name: "Blog platforma za razvijalce" },
  { id: 4, name: "Upravljanje nalog" },
  { id: 5, name: "Portfolio za oblikovalca" },
  { id: 6, name: "Aplikacija za fitnes sledenje" },
  { id: 7, name: "CRM sistem za mala podjetja" },
  { id: 8, name: "Dashboard za spletne analitike" },
  { id: 9, name: "Mobilna aplikacija za dogodke" },
  { id: 10, name: "Sistem za rezervacije terminov" },
  { id: 11, name: "Finančni planer" },
  { id: 12, name: "Chat aplikacija s Firebase" },
  { id: 13, name: "Generator QR kod" },
  { id: 14, name: "Sistem za ocenjevanje izdelkov" },
  { id: 15, name: "Preprosta igra s kvizi" },
  { id: 16, name: "Aplikacija za upravljanje sestankov" },
  { id: 17, name: "Spletna aplikacija za recepte" },
  { id: 18, name: "Galerija fotografij z nalaganjem" },
  { id: 19, name: "Sistem za vodenje projektov" },
  { id: 20, name: "Aplikacija za vodenje proračuna" },
  { id: 21, name: "Platforma za e-učenje" },
  { id: 22, name: "Sistem za povratne informacije uporabnikov" },
  { id: 23, name: "Seznam želja za darila" },
  { id: 24, name: "Aplikacija za dnevne navade" },
  { id: 25, name: "Sistem za sledenje napakam" },
  { id: 26, name: "Vizualizator vremenskih podatkov" },
  { id: 27, name: "Ocenjevanje storitev in ponudnikov" },
  { id: 28, name: "Organizator potovanj" },
  { id: 29, name: "Aplikacija za učenje jezikov" },
  { id: 30, name: "Pregledovalnik PDF dokumentov" },
];

export function Sidebar() {
  const [projects, setProjects] = useState<project[]>([]);

  useEffect(() => {
    setProjects(testniProjekti);
  }, []);

  return (
    <div className='w-68 h-[100%] bg-[#111827] overflow-y-auto shadow-md flex flex-col border-r border-[#F9FAFB] scrollbar-none'>
      <div className='p-4 text-[#F9FAFB] text-xl flex justify-between items-center'>
        <span>Projects</span>
        <button
          /*onClick=*/
          className='bg-[#F9FAFB] hover:bg-[#e3e3e3] text-[#111827] rounded text-sm flex items-center justify-center cursor-pointer w-13 h-7'>
          ADD
        </button>
      </div>

      <div className='flex-1 overflow-y-auto p-4 space-y-2'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='bg-white p-3 rounded-lg shadow hover:bg-[#e3e3e3]  cursor-pointer'>
            {project.name}
          </div>
        ))}
      </div>
    </div>
  );
}
