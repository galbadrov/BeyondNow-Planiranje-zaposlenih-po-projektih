import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <div className='h-screen bg-[#111827]'>
        <Header />
        <Login />
        <Footer />
      </div>
      <Route path='/' element={<Landing />} />
    </Routes>
  );
}

export default App;
