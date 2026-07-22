import "./SidebarAdmin.css";

import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaLayerGroup,
  FaLaptop,
  FaClipboardList,
  FaUsers,
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";

function SidebarAdmin() {
  return (
    <aside className="admin-sidebar-container">
      <div className="admin-sidebar-logo">
        <h2 className="admin-sidebar-title">TIERRA</h2>
        <span className="admin-sidebar-subtitle">ADMIN PANEL</span>
      </div>

      <nav className="admin-sidebar-menu">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive ? "admin-sidebar-link admin-sidebar-link-active" : "admin-sidebar-link"
          }
        >
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/tierlist"
          className={({ isActive }) =>
            isActive ? "admin-sidebar-link admin-sidebar-link-active" : "admin-sidebar-link"
          }
        >
          <FaLayerGroup />
          <span>Kelola Tier List</span>
        </NavLink>

        <NavLink
          to="/admin/laptop"
          className={({ isActive }) =>
            isActive ? "admin-sidebar-link admin-sidebar-link-active" : "admin-sidebar-link"
          }
        >
          <FaLaptop />
          <span>Kelola Laptop</span>
        </NavLink>

        <NavLink
          to="/admin/recommendation"
          className={({ isActive }) =>
            isActive ? "admin-sidebar-link admin-sidebar-link-active" : "admin-sidebar-link"
          }
        >
          <FaClipboardList />
          <span>Kelola Rekomendasi</span>
        </NavLink>

        <NavLink
          to="/admin/user"
          className={({ isActive }) =>
            isActive ? "admin-sidebar-link admin-sidebar-link-active" : "admin-sidebar-link"
          }
        >
          <FaUsers />
          <span>Kelola User</span>
        </NavLink>

        <NavLink
          to="/admin/profile"
          className={({ isActive }) =>
            isActive ? "admin-sidebar-link admin-sidebar-link-active" : "admin-sidebar-link"
          }
        >
          <FaUserShield />
          <span>Profil Admin</span>
        </NavLink>
      </nav>

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