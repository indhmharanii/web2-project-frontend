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
import Vote from "./pages/Voting/Voting";
import Compare from "./pages/Compare/Compare";
import VotingDetail from "./pages/VotingDetail/VotingDetail";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import VoteForm from "./pages/VoteForm/VoteForm";
// ================= ADMIN =================
import DashboardAdmin from "./pages/Admin/Dashboard/DashboardAdmin";
import ManageLaptop from "./pages/Admin/Laptop/ManageLaptop";
import ManageRecommendation from "./pages/Admin/Recommendation/ManageRecommendation";
import ManageUser from "./pages/Admin/User/ManageUser";
import AdminProfile from "./pages/Admin/Profile/AdminProfile";
import ManageTierList from "./pages/Admin/TierList/ManageTierList";
import TierListDetailAdmin from "./pages/Admin/TierList/TierListDetailAdmin";
import ManageVoting from "./pages/Admin/Voting/ManageVoting";
import AdminVotingDetail from "./pages/Admin/Voting/VotingDetail/AdminVotingDetail";

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
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/voting/:id" element={<VotingDetail />} />

      {/* ================= ADMIN (PROTECTED) ================= */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <DashboardAdmin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/laptop"
        element={
          <ProtectedRoute allowedRole="admin">
            <ManageLaptop />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/recommendation"
        element={
          <ProtectedRoute allowedRole="admin">
            <ManageRecommendation />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/user"
        element={
          <ProtectedRoute allowedRole="admin">
            <ManageUser />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/profile"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminProfile />
          </ProtectedRoute>
        }
      />
      <Route
  path="/admin/tierlist"
  element={
    <ProtectedRoute allowedRole="admin">
      <ManageTierList />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin/tierlist/:id"
  element={
    <ProtectedRoute allowedRole="admin">
      <TierListDetailAdmin />
    </ProtectedRoute>
  }
/>
      <Route path="/admin" element={<DashboardAdmin />} />
      <Route path="/admin/laptop" element={<ManageLaptop />} />
      <Route path="/admin/recommendation" element={<ManageRecommendation />} />
      <Route path="/admin/user" element={<ManageUser />} />
      <Route path="/admin/profile" element={<AdminProfile />} />
      <Route path="/admin/voting"element={<ManageVoting />}/>
      <Route path="/admin/voting/:id"element={<AdminVotingDetail />}/>
      <Route path="/voting/:id" element={<VotingDetail />} />
      <Route path="/vote/:id"element={<VoteForm />}/>
    </Routes>
  );
}

export default App;