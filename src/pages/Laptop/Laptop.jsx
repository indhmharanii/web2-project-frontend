import "./Laptop.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import DashboardLayout from "../../layouts/DashboardLayout";
import LaptopCard from "../../components/LaptopCard/LaptopCard";
import TierRow from "../../components/TierRow/TierRow";

import {
  FaLaptop,
  FaSearch,
  FaGamepad,
  FaBriefcase,
  FaPaintBrush,
  FaGraduationCap,
  FaStar,
  FaUsers,
  FaFire,
  FaArrowRight,
  FaMoneyBillWave,
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

function Laptop() {
  const [searchType, setSearchType] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const [tierLists, setTierLists] = useState([]);
  const [selectedTierListId, setSelectedTierListId] = useState("");

  const [laptops, setLaptops] = useState([]);
  const [budgetTierData, setBudgetTierData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchTierLists = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/tier-lists`);
        setTierLists(res.data);
      } catch (err) {
        console.error("Gagal memuat daftar tier list:", err);
      }
    };
    fetchTierLists();
  }, []);

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
    if (searchType !== "name") return;

    setLoading(true);
    const timeout = setTimeout(async () => {
      try {
        const res = await axios.get(`${API_URL}/api/laptops`, {
          params: {
            search: searchTerm || undefined,
            category: activeCategory !== "Semua" ? activeCategory : undefined,
          },
        });
        setLaptops(res.data.map(mapLaptop));
      } catch (err) {
        console.error("Gagal memuat laptop:", err);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchType, searchTerm, activeCategory]);

  useEffect(() => {
    if (searchType === "name" && searchTerm === "" && activeCategory === "Semua") {
      const fetchAll = async () => {
        setLoading(true);
        try {
          const res = await axios.get(`${API_URL}/api/laptops`);
          setLaptops(res.data.map(mapLaptop));
        } catch (err) {
          console.error("Gagal memuat laptop:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchAll();
    }
  }, []);

  const handleCariRekomendasi = useCallback(async () => {
    if (!selectedTierListId) return;

    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/api/tier-lists/${selectedTierListId}`);
      const grouped = res.data.laptops;
      setBudgetTierData({
        S: grouped.S.map(mapLaptop),
        A: grouped.A.map(mapLaptop),
        B: grouped.B.map(mapLaptop),
        C: grouped.C.map(mapLaptop),
      });
    } catch (err) {
      console.error("Gagal memuat rekomendasi budget:", err);
      setBudgetTierData(null);
    } finally {
      setLoading(false);
    }
  }, [selectedTierListId]);

  return (
    <DashboardLayout>
      <div className="laptop-page">
        <div className="breadcrumb">
          <span>Dashboard</span>
          <p>/</p>
          <span>Jelajahi Laptop</span>
        </div>

        <div className="page-header">
          <div className="header-left">
            <div className="page-icon">
              <FaLaptop />
            </div>
            <div className="title-wrapper">
              <h1>Jelajahi Laptop</h1>
              <p>Temukan laptop terbaik berdasarkan rekomendasi TIERRA sesuai kebutuhan Anda.</p>
            </div>
          </div>
        </div>

        <div className="search-toolbar">
          <div className="search-mode">
            <button
              className={searchType === "name" ? "mode-btn active" : "mode-btn"}
              onClick={() => setSearchType("name")}
            >
              <FaSearch />
              Cari Berdasarkan Nama
            </button>
            <button
              className={searchType === "budget" ? "mode-btn active" : "mode-btn"}
              onClick={() => setSearchType("budget")}
            >
              <FaMoneyBillWave />
              Cari Berdasarkan Budget
            </button>
          </div>

          {searchType === "name" ? (
            <div className="laptop-search">
              <FaSearch />
              <input
                type="text"
                placeholder="Cari laptop, brand, processor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          ) : (
            <div className="budget-search">
              <div className="budget-input">
                <select
                  value={selectedTierListId}
                  onChange={(e) => setSelectedTierListId(e.target.value)}
                >
                  <option value="">-- Pilih Budget --</option>
                  {tierLists.map((tl) => (
                    <option key={tl.id} value={tl.id}>
                      {tl.title}
                    </option>
                  ))}
                </select>
              </div>
              <button className="budget-button" onClick={handleCariRekomendasi}>
                Cari Rekomendasi
              </button>
            </div>
          )}
        </div>

        {searchType === "name" && (
          <div className="category-wrapper">
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
        )}

        {/* ================= STATS ================= */}

<div className="laptop-stats-grid">

  <div className="laptop-stats-card">
    <FaLaptop />

    <div className="laptop-stats-content">
      <h2>{stats ? stats.total_laptops : "..."}</h2>
      <p>Total Laptop</p>
    </div>
  </div>

  <div className="laptop-stats-card">
    <FaStar />

    <div className="laptop-stats-content">
      <h2>{stats ? stats.average_rating : "..."}</h2>
      <p>Rating</p>
    </div>
  </div>

  <div className="laptop-stats-card">
    <FaUsers />

    <div className="laptop-stats-content">
      <h2>{stats ? stats.total_votes : "..."}</h2>
      <p>Total Vote</p>
    </div>
  </div>

  <div className="laptop-stats-card">
    <FaFire />

    <div className="laptop-stats-content">
      <h2>S Tier</h2>
      <p>Tier Tertinggi</p>
    </div>
  </div>

</div>

        {searchType === "name" && (
          <div className="section-header">
            <div>
              <h2>🔥 Rekomendasi Laptop</h2>
              <p>{laptops.length} laptop tersedia</p>
            </div>
            <button className="view-all">
              Lihat Semua
              <FaArrowRight />
            </button>
          </div>
        )}

        {searchType === "budget" ? (
          budgetTierData ? (
            <>
              <TierRow tier="S" laptops={budgetTierData.S} />
              <TierRow tier="A" laptops={budgetTierData.A} />
              <TierRow tier="B" laptops={budgetTierData.B} />
              <TierRow tier="C" laptops={budgetTierData.C} />
            </>
          ) : (
            <p style={{ color: "#888", padding: "20px" }}>
              {selectedTierListId
                ? "Klik 'Cari Rekomendasi' untuk melihat hasil."
                : "Pilih rentang budget terlebih dahulu."}
            </p>
          )
        ) : loading ? (
          <p style={{ color: "#888", padding: "20px" }}>Memuat laptop...</p>
        ) : laptops.length === 0 ? (
          <p style={{ color: "#888", padding: "20px" }}>Tidak ada laptop ditemukan.</p>
        ) : (
          <div className="laptop-grid">
            {laptops.map((laptop) => (
              <LaptopCard key={laptop.id} laptop={laptop} />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Laptop;