import "./DashboardAdmin.css";

import AdminLayout from "../../../components/Admin/Layout/AdminLayout";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TopbarAdmin from "../../../components/Admin/TopbarAdmin/TopbarAdmin";
import AdminStatCard from "../../../components/Admin/StatCard/AdminStatCard";
import AdminQuickAction from "../../../components/Admin/QuickAction/AdminQuickAction";
import AdminRecentActivity from "../../../components/Admin/RecentActivity/AdminRecentActivity";

import {
  FaLaptop,
  FaUsers,
  FaClipboardList,
  FaThumbsUp,
} from "react-icons/fa";

function DashboardAdmin() {
  return (
    <AdminLayout
      sidebar={<SidebarAdmin />}
      topbar={<TopbarAdmin />}
    >
      <div className="dashboard-admin-container">

        <h1 className="dashboard-admin-title">
          Dashboard Admin
        </h1>

        <p className="dashboard-admin-subtitle">
          Selamat datang di Dashboard Admin TIERRA.
        </p>

        {/* ===== Statistics ===== */}

        <div className="dashboard-admin-stats">

          <AdminStatCard
            title="Total Laptop"
            value="128"
            icon={<FaLaptop />}
            color="#2563EB"
          />

          <AdminStatCard
            title="Total User"
            value="1.245"
            icon={<FaUsers />}
            color="#10B981"
          />

          <AdminStatCard
            title="Rekomendasi"
            value="342"
            icon={<FaClipboardList />}
            color="#F59E0B"
          />

          <AdminStatCard
            title="Total Vote"
            value="8.521"
            icon={<FaThumbsUp />}
            color="#8B5CF6"
          />

        </div>

        {/* ===== Quick Action ===== */}

       <div className="dashboard-admin-bottom">

    <AdminQuickAction />

    <AdminRecentActivity />

    </div>

      </div>

    </AdminLayout>
  );
}

export default DashboardAdmin;