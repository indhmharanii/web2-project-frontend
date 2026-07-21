import "./Sidebar.css";

import {
  FaHouse,
  FaLaptop,
  FaRankingStar,
  FaHeart,
  FaUser,
  FaRightFromBracket,
} from "react-icons/fa6";

import { FaVoteYea } from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <aside className="sidebar">

      <h2 className="sidebar-logo">

        TIERRA

      </h2>

      <Link className="sidebar-link" to="/dashboard">

        <FaHouse className="sidebar-icon" />

        <span>Dashboard</span>

      </Link>

      <Link className="sidebar-link" to="/laptop">

        <FaLaptop className="sidebar-icon" />

        <span>Jelajahi Laptop</span>

      </Link>

      <Link className="sidebar-link" to="/tierlist">

        <FaRankingStar className="sidebar-icon" />

        <span>Peringkat Laptop</span>

      </Link>

      {/* ================= VOTING ================= */}

      <Link className="sidebar-link" to="/vote">

        <FaVoteYea className="sidebar-icon" />

        <span>Voting</span>

      </Link>

      <Link className="sidebar-link" to="/favorite">

        <FaHeart className="sidebar-icon" />

        <span>Favorit</span>

      </Link>

      <Link className="sidebar-link" to="/profile">

        <FaUser className="sidebar-icon" />

        <span>Profil</span>

      </Link>

      <Link className="sidebar-link sidebar-logout" to="/">

        <FaRightFromBracket className="sidebar-icon" />

        <span>Logout</span>

      </Link>

    </aside>

  );

}

export default Sidebar;