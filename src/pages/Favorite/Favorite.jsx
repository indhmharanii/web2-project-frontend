import "./Favorite.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import DashboardLayout from "../../layouts/DashboardLayout";
import LaptopCard from "../../components/LaptopCard/LaptopCard";

import {
  FaHeart,
  FaSearch,
  FaGamepad,
  FaBriefcase,
  FaPaintBrush,
  FaGraduationCap,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function mapLaptop(item) {
  return {
    id: item.id,
    name: item.name,
    brand: item.brand,
    category: item.category,
    processor: item.processor,
    gpu: item.graphics,
    ram: item.ram,
    storage: item.storage,
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
  { label: "Student", value: "Student", icon: <FaGraduationCap /> },
];

function Favorite() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/api/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFavorites(res.data.map((fav) => mapLaptop(fav.laptop)));
    } catch (err) {
      console.error("Gagal memuat favorit:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const handleFavoriteChange = (laptopId, isFavorited) => {
    if (!isFavorited) {
      setFavorites((prev) => prev.filter((l) => l.id !== laptopId));
    }
  };

  const filtered = favorites.filter((laptop) => {
    const matchSearch =
      laptop.name.toLowerCase().includes(search.toLowerCase()) ||
      laptop.brand.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "Semua" || laptop.category === activeCategory;
    return matchSearch && matchCategory;
  });

  const avgRating = favorites.length
    ? (favorites.reduce((sum, l) => sum + Number(l.rating || 0), 0) / favorites.length).toFixed(1)
    : 0;

  const totalVotes = favorites.reduce((sum, l) => sum + Number(l.votes || 0), 0);

  const topTier = (() => {
    const order = ["S", "A", "B", "C"];
    for (const t of order) {
      if (favorites.some((l) => l.tier === t)) return t;
    }
    return "-";
  })();

  return (
    <DashboardLayout>
      <div className="favorite-page">
        <div className="favorite-breadcrumb">
          <span>Dashboard</span>
          <span>/</span>
          <span>Favorite</span>
        </div>

        <div className="favorite-header">
          <div className="favorite-header-icon">
            <FaHeart />
          </div>
          <div>
            <h1>LAPTOP FAVORIT</h1>
            <p>Kelola koleksi laptop favoritmu dan temukan kembali pilihan terbaik dengan mudah.</p>
          </div>
        </div>

        <div className="favorite-stats">
          <div className="favorite-stat-card">
            <div className="stat-icon"><FaHeart /></div>
            <div>
              <h2>{favorites.length}</h2>
              <p>Total Favorite</p>
            </div>
          </div>

          <div className="favorite-stat-card">
            <div className="stat-icon"><FaStar /></div>
            <div>
              <h2>{avgRating}</h2>
              <p>Rating Rata-rata</p>
            </div>
          </div>

          <div className="favorite-stat-card">
            <div className="stat-icon"><FaUsers /></div>
            <div>
              <h2>{totalVotes}</h2>
              <p>Total Vote</p>
            </div>
          </div>

          <div className="favorite-stat-card">
            <div className="stat-icon"><FaHeart /></div>
            <div>
              <h2>{topTier === "-" ? "-" : `${topTier} Tier`}</h2>
              <p>Tier Favorit</p>
            </div>
          </div>
        </div>

        <div className="favorite-toolbar">
          <div className="favorite-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Cari laptop favorit..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="favorite-filter">
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

        {loading ? (
          <p style={{ color: "#888", padding: "20px" }}>Memuat favorit...</p>
        ) : filtered.length === 0 ? (
          <div className="favorite-empty">
            <FaHeart />
            <h2>Belum Ada Laptop Favorit</h2>
            <p>Tambahkan laptop favoritmu dengan menekan ikon ❤️.</p>
          </div>
        ) : (
          <div className="favorite-grid">
            {filtered.map((laptop) => (
              <LaptopCard
                key={laptop.id}
                laptop={laptop}
                compact={true}
                isFavorite={true}
                onFavoriteChange={handleFavoriteChange}
              />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Favorite;