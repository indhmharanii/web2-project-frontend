import "./SidebarAdmin.css";

import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaLaptop,
  FaClipboardList,
  FaUsers,
  FaUserShield,
  FaSignOutAlt,
  FaVoteYea,
} from "react-icons/fa";

function SidebarAdmin() {
  return (
    <aside className="admin-sidebar-container">

      {/* Logo */}
      <div className="admin-sidebar-logo">

        <h2 className="admin-sidebar-title">
          TIERRA
        </h2>

        <span className="admin-sidebar-subtitle">
          ADMIN PANEL
        </span>

      </div>

      {/* Menu */}
      <nav className="admin-sidebar-menu">

        {/* Dashboard */}
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-link admin-sidebar-link-active"
              : "admin-sidebar-link"
          }
        >
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        {/* Kelola Laptop */}
        <NavLink
          to="/admin/laptop"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-link admin-sidebar-link-active"
              : "admin-sidebar-link"
          }
        >
          <FaLaptop />
          <span>Kelola Laptop</span>
        </NavLink>

        {/* Kelola Voting */}
        <NavLink
          to="/admin/voting"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-link admin-sidebar-link-active"
              : "admin-sidebar-link"
          }
        >
          <FaVoteYea />
          <span>Kelola Voting</span>
        </NavLink>

        {/* Kelola Rekomendasi */}
        <NavLink
          to="/admin/recommendation"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-link admin-sidebar-link-active"
              : "admin-sidebar-link"
          }
        >
          <FaClipboardList />
          <span>Kelola Rekomendasi</span>
        </NavLink>

        {/* Kelola User */}
        <NavLink
          to="/admin/user"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-link admin-sidebar-link-active"
              : "admin-sidebar-link"
          }
        >
          <FaUsers />
          <span>Kelola User</span>
        </NavLink>

        {/* Profil Admin */}
        <NavLink
          to="/admin/profile"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-link admin-sidebar-link-active"
              : "admin-sidebar-link"
          }
        >
          <FaUserShield />
          <span>Profil Admin</span>
        </NavLink>

      </nav>

      {/* Footer */}
      <div className="admin-sidebar-footer">

        <button className="admin-sidebar-logout">

          <FaSignOutAlt />

          <span>Logout</span>

        </button>

      </div>

    </aside>
  );
}

export default SidebarAdmin;