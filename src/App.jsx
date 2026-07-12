import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Recommendation from "./pages/Recommendation/Recommendation";
import LaptopDetail from "./pages/LaptopDetail/LaptopDetail";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/recommendation" element={<Recommendation />} />
      <Route path="/laptop" element={<LaptopDetail />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;