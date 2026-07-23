import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../../layouts/DashboardLayout";
import profile from "../../assets/images/profile.jpg";

import {
  FaUser,
  FaHeart,
  FaStar,
  FaUsers,
  FaCrown,
  FaChevronRight,
  FaMapMarkerAlt,
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ total: 0, avgRating: 0, totalVotes: 0, topTier: "-" });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get(`${API_URL}/api/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      });

    axios
      .get(`${API_URL}/api/favorites`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        const favorites = res.data.map((f) => f.laptop).filter(Boolean);
        const avgRating = favorites.length
          ? (favorites.reduce((sum, l) => sum + Number(l.average_rating || 0), 0) / favorites.length).toFixed(1)
          : 0;
        const totalVotes = favorites.reduce((sum, l) => sum + Number(l.vote_count || 0), 0);
        const order = ["S", "A", "B", "C"];
        const topTier = order.find((t) => favorites.some((l) => l.tier === t)) || "-";

        setStats({ total: favorites.length, avgRating, totalVotes, topTier });
      })
      .catch((err) => console.error("Gagal memuat statistik profil:", err));
  }, [navigate]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <DashboardLayout>
      <div className="profile-page">
        <div className="profile-breadcrumb">
          <span>Dashboard</span>
          <span>/</span>
          <span>Profile</span>
        </div>

        <div className="profile-header">
          <div className="profile-header-icon">
            <FaUser />
          </div>
          <div>
            <h1>PROFILE</h1>
            <p>Kelola informasi akunmu.</p>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-image">
            <img src={user.avatar_url || profile} alt="Profile" />
          </div>

          <div className="profile-info">
            <h2>{user.name}</h2>
            <span>{user.email}</span>
            <p>
              <FaMapMarkerAlt />
              {user.location ? user.location : "Lokasi belum diisi"}
            </p>
          </div>

          <button className="edit-profile" onClick={() => navigate("/edit-profile")}>
            <FaEdit />
            Edit Profil
          </button>
        </div>

        <div className="profile-stats">
          <div className="profile-stat-card">
            <FaHeart />
            <h2>{stats.total}</h2>
            <p>Favorite</p>
          </div>

          <div className="profile-stat-card">
            <FaStar />
            <h2>{stats.avgRating}</h2>
            <p>Rating</p>
          </div>

          <div className="profile-stat-card">
            <FaUsers />
            <h2>{stats.totalVotes}</h2>
            <p>Total Vote</p>
          </div>

          <div className="profile-stat-card">
            <FaCrown />
            <h2>{stats.topTier === "-" ? "-" : `${stats.topTier} Tier`}</h2>
            <p>Tier Favorit</p>
          </div>
        </div>

        <div className="profile-menu">
          <div className="menu-item" onClick={() => navigate("/edit-profile")}>
            <div>
              <FaUser />
              <span>Informasi Akun</span>
            </div>
            <FaChevronRight />
          </div>

          <div className="menu-item" onClick={() => navigate("/favorite")}>
            <div>
              <FaHeart />
              <span>Laptop Favorit</span>
            </div>
            <FaChevronRight />
          </div>

          <div className="menu-item" onClick={() => navigate("/TierList")}>
            <div>
              <FaCrown />
              <span>Peringkat Laptop</span>
            </div>
            <FaChevronRight />
          </div>

          <div className="menu-item logout" onClick={handleLogout}>
            <div>
              <FaSignOutAlt />
              <span>Logout</span>
            </div>
            <FaChevronRight />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;