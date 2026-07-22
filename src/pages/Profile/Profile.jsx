import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../../layouts/DashboardLayout";
import { FaUserCircle } from "react-icons/fa";
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

function Profile() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        // sinkronkan juga ke localStorage biar Topbar ikut update
        localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch(() => {
        // token invalid/expired
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      });
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

        {/* Breadcrumb */}

        <div className="profile-breadcrumb">

          <span>Dashboard</span>

          <span>/</span>

          <span>Profile</span>

        </div>

        {/* Header */}

        <div className="profile-header">

          <div className="profile-header-icon">

            <FaUser />

          </div>

          <div>

            <h1>PROFILE</h1>

            <p>
              Kelola informasi akunmu.
            </p>

          </div>

        </div>

        {/* Profile Card */}

        <div className="profile-card">

          <div className="profile-image">
            <img src={user.photo || profile} alt="Profile" />
        </div>

          <div className="profile-info">

            <h2>{user.name}</h2>
            <span>{user.email}</span>

            <p>
              <FaMapMarkerAlt />
              {user.location ? user.location : "Lokasi belum diisi"}
            </p>

          </div>

          <button
            className="edit-profile"
            onClick={() => navigate("/edit-profile")}
          >

            <FaEdit />

            Edit Profil

          </button>

        </div>

        {/* Statistik */}

        <div className="profile-stats">

          <div className="profile-stat-card">

            <FaHeart />

            <h2>8</h2>

            <p>Favorite</p>

          </div>

          <div className="profile-stat-card">

            <FaStar />

            <h2>4.8</h2>

            <p>Rating</p>

          </div>

          <div className="profile-stat-card">

            <FaUsers />

            <h2>8540</h2>

            <p>Total Vote</p>

          </div>

          <div className="profile-stat-card">

            <FaCrown />

            <h2>S Tier</h2>

            <p>Tier Favorit</p>

          </div>

        </div>

        {/* Menu */}

        <div className="profile-menu">

          <div
            className="menu-item"
            onClick={() => navigate("/edit-profile")}
          >

            <div>

              <FaUser />

              <span>Informasi Akun</span>

            </div>

            <FaChevronRight />

          </div>

          <div
            className="menu-item"
            onClick={() => navigate("/favorite")}
          >

            <div>

              <FaHeart />

              <span>Laptop Favorit</span>

            </div>

            <FaChevronRight />

          </div>

          <div
            className="menu-item"
            onClick={() => navigate("/TierList")}
          >

            <div>

              <FaCrown />

              <span>Peringkat Laptop</span>

            </div>

            <FaChevronRight />

          </div>

          <div
            className="menu-item logout"
            onClick={handleLogout}
          >

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