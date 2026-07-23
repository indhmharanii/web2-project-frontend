import "./DashboardAdmin.css";
import { useState, useEffect } from "react";
import axios from "axios";

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

const API_URL = import.meta.env.VITE_API_URL;

function DashboardAdmin() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/api/admin/stats`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data);
      } catch (err) {
        console.error("Gagal memuat statistik admin:", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <AdminLayout sidebar={<SidebarAdmin />} topbar={<TopbarAdmin />}>
      <div className="dashboard-admin-container">
        <h1 className="dashboard-admin-title">Dashboard Admin</h1>
        <p className="dashboard-admin-subtitle">Selamat datang di Dashboard Admin TIERRA.</p>

        <div className="dashboard-admin-stats">
          <AdminStatCard
            title="Total Laptop"
            value={stats ? stats.total_laptops : "..."}
            icon={<FaLaptop />}
            color="#2563EB"
          />

          <AdminStatCard
            title="Total User"
            value={stats ? stats.total_users.toLocaleString("id-ID") : "..."}
            icon={<FaUsers />}
            color="#10B981"
          />

          <AdminStatCard
            title="Rekomendasi"
            value={stats ? stats.total_submissions : "..."}
            icon={<FaClipboardList />}
            color="#F59E0B"
          />

          <AdminStatCard
            title="Total Vote"
            value={stats ? stats.total_votes.toLocaleString("id-ID") : "..."}
            icon={<FaThumbsUp />}
            color="#8B5CF6"
          />
        </div>

        <div className="dashboard-admin-bottom">
          <AdminQuickAction />
          <AdminRecentActivity />
        </div>
      </div>
    </AdminLayout>
  );
}

export default DashboardAdmin;