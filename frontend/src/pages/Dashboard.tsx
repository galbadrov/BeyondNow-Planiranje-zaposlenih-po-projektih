import { Header } from "../components/dashboard/Header";
import { Footer } from "../components/dashboard/Footer";
import { Sidebar } from "../components/dashboard/sidebar";

const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen bg-[#111827]'>
      <Header />
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
