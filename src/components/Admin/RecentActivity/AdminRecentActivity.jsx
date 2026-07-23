import "./AdminRecentActivity.css";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

import {
  FaUserPlus,
  FaLaptop,
  FaCheckCircle,
  FaEdit,
  FaThumbsUp,
  FaCommentDots,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const iconMap = {
  user_registered: { icon: <FaUserPlus />, color: "green" },
  vote: { icon: <FaThumbsUp />, color: "purple" },
  comment: { icon: <FaCommentDots />, color: "yellow" },
  laptop_added: { icon: <FaLaptop />, color: "blue" },
  tier_changed: { icon: <FaArrowUp />, color: "purple" },
  favorited: { icon: <FaHeart />, color: "pink" },
};

function AdminRecentActivity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/api/admin/activity-logs?limit=6`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setActivities(res.data);
      } catch (err) {
        console.error("Gagal memuat aktivitas admin:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchActivities();
  }, []);

  return (
    <div className="admin-activity-container">
      <div className="admin-activity-header">
        <h3>Aktivitas Terbaru</h3>
      </div>

      <div className="admin-activity-list">
        {loading ? (
          <p style={{ color: "#888", fontSize: "13px" }}>Memuat aktivitas...</p>
        ) : activities.length === 0 ? (
          <p style={{ color: "#888", fontSize: "13px" }}>Belum ada aktivitas.</p>
        ) : (
          activities.map((item) => {
            const meta = iconMap[item.type] || { icon: <FaEdit />, color: "blue" };

            return (
              <div key={item.id} className="admin-activity-item">
                <div className={`admin-activity-icon ${meta.color}`}>
                  {meta.icon}
                </div>

                <div className="admin-activity-content">
                  <h4>{item.user?.name || "Sistem"}</h4>
                  <p>{item.description}</p>
                </div>

                <span>{dayjs(item.created_at).format("D MMM YYYY, HH:mm")}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default AdminRecentActivity;