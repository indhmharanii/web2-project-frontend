import "./LaptopCard.css";
import { useState } from "react";
import axios from "axios";

import {
  FaStar,
  FaHeart,
  FaArrowRight,
  FaMicrochip,
  FaMemory,
  FaDesktop
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function LaptopCard({
  laptop,
  compact = false,
  isFavorite = false,
  onFavoriteChange,
}) {

  const navigate = useNavigate();
  const [favorited, setFavorited] = useState(isFavorite);
  const [loadingFav, setLoadingFav] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleToggleFavorite = async (e) => {
    e.stopPropagation();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Kamu harus login untuk menambahkan favorit.");
      return;
    }

    setLoadingFav(true);
    try {
      const res = await axios.post(
        `${API_URL}/api/laptops/${laptop.id}/favorite`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setFavorited(res.data.favorited);
      onFavoriteChange?.(laptop.id, res.data.favorited);
    } catch (err) {
      console.error("Gagal mengubah status favorit:", err);
    } finally {
      setLoadingFav(false);
    }
  };

  return (

    <div className={`laptop-card ${compact ? "compact" : ""}`}>

      {/* Tier */}

      <div className={`tier-badge ${laptop.tier.toLowerCase()}`}>

        {laptop.tier} Tier

      </div>

      {/* Favorite */}

      <button
        className={`favorite-btn ${favorited ? "active" : ""}`}
        onClick={handleToggleFavorite}
        disabled={loadingFav}
      >
        <FaHeart />
      </button>

      {/* Image */}

      <div
        className="image-area"
        onClick={() => navigate(`/laptop/${laptop.id}`)}
        style={{ cursor: "pointer" }}
      >

        <img
          src={laptop.image}
          alt={laptop.name}
        />

      </div>

      {/* Body */}

      <div className="card-content">

        <span className="category">

          {laptop.category}

        </span>

        <h3 className="title">

          {laptop.name}

        </h3>

        <p className="brand">

          {laptop.brand}

        </p>

        <div className="rating">

          <FaStar />

          <span>{laptop.rating}</span>



        </div>

        <div className="divider"></div>

        <div className="spec-list">

          <div>

            <FaMicrochip />

            <span>{laptop.processor}</span>

          </div>

          <div>

            <FaDesktop />

            <span>{laptop.gpu}</span>

          </div>

          <div>

            <FaMemory />

            <span>{laptop.ram}</span>

          </div>

        </div>

        <div className="divider"></div>

        <h2 className="price">

          {formatPrice(laptop.price)}

        </h2>

       <div className="card-buttons">

  <button
    className="detail-btn"
    onClick={() =>
      navigate(`/laptop/${laptop.id}`)
    }
  >
    Lihat Detail
    <FaArrowRight />
  </button>

</div>

      </div>

    </div>

  );

}

export default LaptopCard;