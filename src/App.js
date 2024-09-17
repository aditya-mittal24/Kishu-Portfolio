import Navbar from "./components/layouts/Navbar";
import { Routes } from "./routes/AppRoute";

function App() {
  return (
    <div className="App w-full max-w-[1600px] mx-auto">
    <Navbar/>
    <Routes/>
    </div>
  );
}

export default App;
