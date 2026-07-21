import "./Stats.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaLaptop,
  FaVoteYea,
  FaComments,
  FaStar,
} from "react-icons/fa";

function Stats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/stats`
        );
        setStats(response.data);
      } catch (err) {
        console.error("Gagal memuat statistik:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statsData = [
    {
      icon: <FaLaptop />,
      color: "blue",
      title: "Laptop Terdaftar",
      value: loading ? "..." : stats?.total_laptops ?? 0,
      desc: "Total laptop dalam sistem",
    },
    {
      icon: <FaVoteYea />,
      color: "green",
      title: "Total Vote",
      value: loading ? "..." : (stats?.total_votes ?? 0).toLocaleString("id-ID"),
      desc: "Vote dari semua pengguna",
    },
    {
      icon: <FaComments />,
      color: "orange",
      title: "Komentar",
      value: loading ? "..." : stats?.total_comments ?? 0,
      desc: "Komentar pengguna",
    },
    {
      icon: <FaStar />,
      color: "purple",
      title: "Rating",
      value: loading ? "..." : stats?.average_rating ?? 0,
      desc: "Berdasarkan vote",
    },
  ];

  return (
    <section className="stats">
      {statsData.map((item, index) => (
        <div className="stat-card" key={index}>
          <div className={`icon ${item.color}`}>{item.icon}</div>

          <div className="stat-content">
            <span>{item.title}</span>
            <h2>{item.value}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Stats;