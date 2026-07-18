import "./Profile.css";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import profile from "../../assets/images/profile.jpeg";

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

            <img
    src={profile}
    alt="Profile"
/>

          </div>

          <div className="profile-info">

            <h2>Rani</h2>

            <span>Frontend Developer</span>

            <p>

              <FaMapMarkerAlt />

              Makassar, Indonesia

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

          <div className="menu-item">

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
  onClick={() => navigate("/")}
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