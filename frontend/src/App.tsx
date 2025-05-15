import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default App;
