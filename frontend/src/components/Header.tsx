import { useState, type SetStateAction } from "react";

export function Header() {
  const organizations = [
    { id: 1, name: "Organizacija A" },
    { id: 2, name: "Organizacija B" },
    { id: 3, name: "Organizacija C" },
  ];

  const [selectedOrg, setSelectedOrg] = useState(organizations[0].id);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrg(Number(event.target.value));
  };

  return (
    <div>
      <div className='flex flex-row sticky top-0 p-5 text-2xl'>
        <div className='text w-auto mr-4'>User: </div>
        <div className='currentUser w-auto mr-5'> </div>
        <hr className='border-t-35 w-1 rounded-xl mr-5 border-slate-300'></hr>
        <form className='bg-gray-300 rounded-md'>
          <select
            id='orgDropdown'
            value={selectedOrg}
            onChange={handleChange}
            className='text-gray-700 rounded-md text-[18px] w-full cursor-pointer'>
            {organizations.map((org) => (
              <option key={org.id} value={org.id}>
                {org.name}
              </option>
            ))}
          </select>
        </form>
        <button className='bg-gray-900 text-white px-4 rounded-md ml-auto mr-5 cursor-pointer'>
          LOGOUT
        </button>
      </div>
      <hr className='border-t-4 border-slate-300' />
    </div>
  );
}
