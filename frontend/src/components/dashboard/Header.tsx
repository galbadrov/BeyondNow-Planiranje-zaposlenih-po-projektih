import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Header() {
  const navigate = useNavigate();

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
        <div className='text text-[#F9FAFB] w-auto mr-4'>User: </div>
        <div className='currentUser text-[#F9FAFB] w-auto mr-5'>
          {"Logged in User"}
        </div>
        <hr className='border-t-35 w-1 rounded-xl mr-5 border-[#F9FAFB]'></hr>
        <form className='bg-[#F9FAFB] rounded-md hover:bg-[#e3e3e3]'>
          <select
            id='orgDropdown'
            value={selectedOrg}
            onChange={handleChange}
            className='text-[#111827] rounded-md text-[18px] w-full cursor-pointer'>
            {organizations.map((org) => (
              <option key={org.id} value={org.id}>
                {org.name}
              </option>
            ))}
          </select>
        </form>
        <button
          onClick={() => navigate("/")}
          className='hover:bg-[#e3e3e3] bg-[#F9FAFB] text-[#111827] px-4 rounded-md ml-auto mr-5 cursor-pointer'>
          LOGOUT
        </button>
      </div>
      <hr className='border-t-4 border-[#F9FAFB]' />
    </div>
  );
}
