import { DataDisplay } from "../components/dashboard/DataDisplay";
import { Footer } from "../components/dashboard/Footer";
import { Header } from "../components/dashboard/Header";
import { Sidebar } from "../components/dashboard/sidebar";

const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen bg-[#111827]'>
      <Header />
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <DataDisplay />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
