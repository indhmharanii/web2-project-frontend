import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Recommendation from "./pages/Recommendation/Recommendation";
import LaptopDetail from "./pages/LaptopDetail/LaptopDetail";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import Laptop from "./pages/Laptop/Laptop";
import TierList from "./pages/TierList/TierList";
import Favorite from "./pages/Favorite/Favorite"; 
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import Vote from "./pages/Vote/Vote";
import Compare from "./pages/Compare/Compare";
// ================= ADMIN =================
import DashboardAdmin from "./pages/Admin/Dashboard/DashboardAdmin";
import ManageLaptop from "./pages/Admin/Laptop/ManageLaptop";
import ManageRecommendation from "./pages/Admin/Recommendation/ManageRecommendation";
import ManageUser from "./pages/Admin/ManageUser/ManageUser";
import AdminProfile from "./pages/Admin/Profile/AdminProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/recommendation" element={<Recommendation />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/laptop" element={<Laptop />} />
      <Route path="/laptop/:id" element={<LaptopDetail />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/tierlist" element={<TierList />} />
      <Route path="/profile"element={<Profile />}/>
      <Route path="/edit-profile"element={<EditProfile />}/>
      <Route path="/vote/:id"element={<Vote />}/>
      <Route path="/compare" element={<Compare />} />
      <Route path="/admin" element={<DashboardAdmin />} />
      <Route path="/admin/laptop" element={<ManageLaptop />} />
      <Route path="/admin/recommendation" element={<ManageRecommendation />} />
      <Route path="/admin/user" element={<ManageUser />} />
      <Route path="/admin/profile" element={<AdminProfile />} />
    </Routes>
  );
}

export default App;