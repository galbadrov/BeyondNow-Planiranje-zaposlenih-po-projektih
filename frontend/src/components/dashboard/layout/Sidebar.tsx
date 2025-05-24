import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Briefcase,
  BarChart3,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, active }) => {
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center w-full gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
          active
            ? "bg-blue-100 text-blue-700"
            : "text-gray-600 hover:bg-gray-100"
        }`}>
        <span className='flex-shrink-0'>{icon}</span>
        <span className='truncate'>{label}</span>
      </Link>
    </li>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2] || ""; // e.g., "projects"

  const mainNavItems = [
    {
      id: "",
      label: "Nadzorna plošča",
      icon: <LayoutDashboard size={18} />,
    },
    { id: "timeline", label: "Časovnica", icon: <Calendar size={18} /> },
    { id: "employees", label: "Zaposleni", icon: <Users size={18} /> },
    { id: "projects", label: "Projekti", icon: <Briefcase size={18} /> },
    { id: "reports", label: "Poročila", icon: <BarChart3 size={18} /> },
    { id: "requests", label: "Zahteve", icon: <FileText size={18} /> },
  ];

  const otherNavItems = [
    { id: "settings", label: "Nastavitve", icon: <Settings size={18} /> },
    { id: "help", label: "Pomoč", icon: <HelpCircle size={18} /> },
  ];

  return (
    <aside className='hidden lg:flex flex-col w-56 h-screen border-r border-gray-200 bg-white'>
      <div className='p-4 border-b border-gray-200'>
        <h1 className='text-lg font-semibold text-gray-900'>
          Planiranje zaposlenih
        </h1>
      </div>

      <nav className='flex-1 overflow-y-auto py-4 px-3'>
        <ul className='space-y-1'>
          {mainNavItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              to={`/dashboard${item.id ? `/${item.id}` : ""}`}
              active={currentPath === item.id}
            />
          ))}
        </ul>

        <div className='pt-4 mt-4 border-t border-gray-200'>
          <ul className='space-y-1'>
            {otherNavItems.map((item) => (
              <NavItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                to={`/dashboard/${item.id}`}
                active={currentPath === item.id}
              />
            ))}
          </ul>
        </div>
      </nav>

      <div className='p-3 border-t border-gray-200'>
        <button className='flex items-center w-full gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 transition-colors'>
          <LogOut size={18} />
          <span>Odjava</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
