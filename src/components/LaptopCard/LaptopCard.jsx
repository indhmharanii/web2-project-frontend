import "./LaptopCard.css";

import { FaStar, FaArrowRight, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LaptopCard({ laptop }) {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="laptop-card">

      {/* Tier */}
      <span className={`tier ${laptop.tier.toLowerCase()}`}>
        {laptop.tier} Tier
      </span>

      {/* Favorite */}
      <button className="favorite-btn">

    🤍

</button>

      {/* Image */}
      <div className="image-area">
        <img
          src={laptop.image}
          alt={laptop.name}
        />
      </div>

      {/* Body */}
      <div className="card-body">

        {/* Category */}
        <span className="category">
          {laptop.category}
        </span>

        {/* Title */}
        <h3 className="title">
          {laptop.name}
        </h3>

        {/* Brand + Rating */}
        <div className="brand-rating">

          <span className="brand">
            {laptop.brand}
          </span>

          <div className="rating">
            <FaStar />
            <span>{laptop.rating}</span>
            <small>({laptop.votes})</small>
          </div>

        </div>

        {/* Specification */}

        <div className="spec-grid">

          <div className="spec">
            {laptop.processor}
          </div>

          <div className="spec">
            {laptop.gpu}
          </div>

          <div className="spec">
            {laptop.ram}
          </div>

          <div className="spec">
            {laptop.storage}
          </div>

        </div>

        {/* Price */}

        <div className="price">

          {formatPrice(laptop.price)}

        </div>

        {/* Button */}

        <button
          className="detail-btn"
          onClick={() => navigate(`/laptop/${laptop.id}`)}
        >
          Lihat Detail
          <FaArrowRight />
        </button>

      </div>

    </div>
  );
}

export default LaptopCard;