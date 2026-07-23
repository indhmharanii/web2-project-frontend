import "./LaptopDetail.css";
import { useState, useEffect, useCallback } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Review from "../../components/Review/Review";

import {
  FaStar,
  FaMicrochip,
  FaMemory,
  FaHdd,
  FaDesktop,
  FaBatteryFull,
  FaWeightHanging,
  FaHeart,
  FaThumbsUp,
  FaFire,
  FaMedal,
  FaUsers,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function LaptopDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favLoading, setFavLoading] = useState(false);

  const fetchLaptop = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/api/laptops/${id}`);
      setLaptop(res.data);
    } catch (err) {
      console.error("Gagal memuat detail laptop:", err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const checkFavoriteStatus = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await axios.get(`${API_URL}/api/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const found = res.data.some((fav) => fav.laptop_id === Number(id));
      setIsFavorite(found);
    } catch (err) {
      console.error("Gagal memeriksa status favorit:", err);
    }
  }, [id]);

  useEffect(() => {
    fetchLaptop();
    checkFavoriteStatus();
  }, [fetchLaptop, checkFavoriteStatus]);

  const handleToggleFavorite = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Kamu harus login untuk menambahkan favorit.");
      return;
    }

    setFavLoading(true);
    try {
      const res = await axios.post(
        `${API_URL}/api/laptops/${id}/favorite`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setIsFavorite(res.data.favorited);
    } catch (err) {
      console.error("Gagal mengubah status favorit:", err);
    } finally {
      setFavLoading(false);
    }
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="not-found">
          <p>Memuat...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!laptop) {
    return (
      <DashboardLayout>
        <div className="not-found">
          <h1>404</h1>
          <p>Laptop tidak ditemukan.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="detail-page">
        <div className="breadcrumb">
          Dashboard
          <span>/</span>
          Jelajahi Laptop
          <span>/</span>
          {laptop.name}
        </div>

        <div className="detail-card">
          <div className="detail-left">
            <div className="image-wrapper">
              <img src={laptop.image_url} alt={laptop.name} />
            </div>
          </div>

          <div className="detail-right">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span className="badge">{laptop.category}</span>

              <button
                onClick={handleToggleFavorite}
                disabled={favLoading}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "22px",
                  color: isFavorite ? "#f87171" : "#6B7280",
                }}
              >
                <FaHeart />
              </button>
            </div>

            <h1>{laptop.name}</h1>

            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  style={{ color: star <= Math.round(laptop.average_rating) ? "#F59E0B" : "#4B5563" }}
                />
              ))}
              <span>{laptop.average_rating}</span>
            </div>

            <h2>{formatPrice(laptop.price)}</h2>

            <div className="price-divider"></div>

            <div className="info-box">
              <div className="mini-card">
                <FaMedal />
                <div>
                  <small>Tier</small>
                  <h4>{laptop.tier}</h4>
                </div>
              </div>

              <div className="mini-card">
                <FaUsers />
                <div>
                  <small>Total Vote</small>
                  <h4>{laptop.vote_count}</h4>
                </div>
              </div>

              <div className="mini-card">
                <FaFire />
                <div>
                  <small>Kategori</small>
                  <h4>{laptop.category}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Spesifikasi Laptop</h3>
          <div className="spec-grid">
            <div className="spec-card">
              <FaMicrochip />
              <div>
                <small>Processor</small>
                <h4>{laptop.processor}</h4>
              </div>
            </div>

            <div className="spec-card">
              <FaDesktop />
              <div>
                <small>Graphics</small>
                <h4>{laptop.graphics}</h4>
              </div>
            </div>

            <div className="spec-card">
              <FaMemory />
              <div>
                <small>RAM</small>
                <h4>{laptop.ram}</h4>
              </div>
            </div>

            <div className="spec-card">
              <FaHdd />
              <div>
                <small>Storage</small>
                <h4>{laptop.storage}</h4>
              </div>
            </div>

            <div className="spec-card">
              <FaBatteryFull />
              <div>
                <small>Battery</small>
                <h4>{laptop.battery}</h4>
              </div>
            </div>

            <div className="spec-card">
              <FaWeightHanging />
              <div>
                <small>Weight</small>
                <h4>{laptop.weight}</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Tentang Laptop</h3>
          <div className="description-card">
            <p>{laptop.about || "Belum ada deskripsi untuk laptop ini."}</p>
          </div>
        </div>

        <Review laptopId={laptop.id} />

        <div className="action-buttons">

        <button
          className="vote-btn full-width"
          onClick={() => navigate(`/vote/${laptop.id}`)}
        >
          <FaThumbsUp />
          Vote Laptop
        </button>

      </div>
      </div>
    </DashboardLayout>
  );
}

export default LaptopDetail;