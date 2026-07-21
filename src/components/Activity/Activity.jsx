import "./Activity.css";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";

import {
  FaThumbsUp,
  FaCommentDots,
  FaLaptop,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

dayjs.extend(relativeTime);
dayjs.locale("id");

const iconMap = {
  vote: { icon: <FaThumbsUp />, color: "green" },
  comment: { icon: <FaCommentDots />, color: "purple" },
  laptop_added: { icon: <FaLaptop />, color: "blue" },
  tier_changed: { icon: <FaArrowUp />, color: "yellow" },
  favorited: { icon: <FaHeart />, color: "pink" },
};

function Activity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/activity-logs?limit=5`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setActivities(response.data);
      } catch (err) {
        console.error("Gagal memuat aktivitas:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="activity">
      <div className="activity-header">
        <h2>Aktivitas Terbaru</h2>
      </div>

      {loading ? (
        <p style={{ color: "#888", fontSize: "13px", padding: "10px" }}>
          Memuat aktivitas...
        </p>
      ) : activities.length === 0 ? (
        <p style={{ color: "#888", fontSize: "13px", padding: "10px" }}>
          Belum ada aktivitas.
        </p>
      ) : (
        activities.map((item) => {
          const meta = iconMap[item.type] || iconMap.vote;

          return (
            <div className="activity-item" key={item.id}>
              <div className={`activity-icon ${meta.color}`}>{meta.icon}</div>

              <div className="activity-info">
                <p>{item.description}</p>
                {item.laptop?.name && <h4>{item.laptop.name}</h4>}
              </div>

              <span>{dayjs(item.created_at).fromNow()}</span>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Activity;