import "./TierList.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import TopLaptopCard from "../../components/TopLaptopCard/TopLaptopCard";
import TierRow from "../../components/TierRow/TierRow";
import DashboardLayout from "../../layouts/DashboardLayout";

import {
  FaTrophy,
  FaLaptop,
  FaUsers,
  FaStar,
  FaCrown,
  FaGamepad,
  FaBriefcase,
  FaPaintBrush,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function mapLaptop(item) {
  return {
    id: item.id,
    name: item.name,
    brand: item.brand,
    category: item.category,
    price: item.price,
    rating: item.average_rating,
    votes: item.vote_count,
    tier: item.tier,
    image: item.image_url,
  };
}

const categories = [
  { label: "Semua", value: "Semua", icon: null },
  { label: "Gaming", value: "Gaming", icon: <FaGamepad /> },
  { label: "Office", value: "Office", icon: <FaBriefcase /> },
  { label: "Creator", value: "Creator", icon: <FaPaintBrush /> },
];

function TierList() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [stats, setStats] = useState(null);
  const [topLaptops, setTopLaptops] = useState([]);
  const [tierData, setTierData] = useState({ S: [], A: [], B: [], C: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/stats`);
        setStats(res.data);
      } catch (err) {
        console.error("Gagal memuat statistik:", err);
      }
    };
    fetchStats();
  }, []);

  useEffect(() => {
    const fetchTop = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/laptops/top-all-time?limit=3`);
        setTopLaptops(res.data.map(mapLaptop));
      } catch (err) {
        console.error("Gagal memuat top laptop:", err);
      }
    };
    fetchTop();
  }, []);

  const fetchTierOverview = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/api/laptops/tier-overview-global`, {
        params: { category: activeCategory !== "Semua" ? activeCategory : undefined },
      });

      setTierData({
        S: res.data.S.map(mapLaptop),
        A: res.data.A.map(mapLaptop),
        B: res.data.B.map(mapLaptop),
        C: res.data.C.map(mapLaptop),
      });
    } catch (err) {
      console.error("Gagal memuat tier overview:", err);
    } finally {
      setLoading(false);
    }
  }, [activeCategory]);

  useEffect(() => {
    fetchTierOverview();
  }, [fetchTierOverview]);

  return (
    <DashboardLayout>
      <div className="tier-page">
        <div className="tier-breadcrumb">
          <span>Dashboard</span>
          <span>/</span>
          <span>Peringkat Laptop</span>
        </div>

        <div className="tier-header">
          <div className="tier-header-icon">
            <FaTrophy />
          </div>
          <div>
            <h1>PERINGKAT LAPTOP</h1>
            <p>Peringkat laptop terbaik berdasarkan hasil voting komunitas TIERRA.</p>
          </div>
        </div>

        <div className="tier-stats">
          <div className="tier-stat-card">
            <div className="stat-icon"><FaLaptop /></div>
            <div>
              <h2>{stats ? stats.total_laptops : "..."}</h2>
              <p>Total Laptop</p>
            </div>
          </div>

          <div className="tier-stat-card">
            <div className="stat-icon"><FaUsers /></div>
            <div>
              <h2>{stats ? stats.total_votes : "..."}</h2>
              <p>Total Vote</p>
            </div>
          </div>

          <div className="tier-stat-card">
            <div className="stat-icon"><FaStar /></div>
            <div>
              <h2>{stats ? stats.average_rating : "..."}</h2>
              <p>Rating Rata-rata</p>
            </div>
          </div>

          <div className="tier-stat-card">
            <div className="stat-icon"><FaCrown /></div>
            <div>
              <h2>S Tier</h2>
              <p>Tier Teratas</p>
            </div>
          </div>
        </div>

        <div className="top3-section">
          <div className="section-title">
            <FaTrophy />
            <h2>Top 3 Laptop Sepanjang Masa</h2>
          </div>
          <p>Laptop dengan rating tertinggi dari seluruh pengguna.</p>

          <div className="top3-grid">
            {topLaptops.map((laptop, index) => (
              <TopLaptopCard key={laptop.id} laptop={laptop} rank={index + 1} />
            ))}
          </div>
        </div>

        <div className="tier-toolbar">
          <div className="tier-filter">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={activeCategory === cat.value ? "active" : ""}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <p style={{ color: "#888", padding: "20px" }}>Memuat data tier...</p>
        ) : (
          <>
            <TierRow tier="S" laptops={tierData.S} />
            <TierRow tier="A" laptops={tierData.A} />
            <TierRow tier="B" laptops={tierData.B} />
            <TierRow tier="C" laptops={tierData.C} />
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default TierList;