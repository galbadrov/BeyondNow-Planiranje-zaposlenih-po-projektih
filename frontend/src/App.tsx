import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className='h-screen bg-gray-500'>
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
