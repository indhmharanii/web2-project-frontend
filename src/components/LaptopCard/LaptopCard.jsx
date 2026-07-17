import "./LaptopCard.css";

import {
  FaStar,
  FaHeart,
  FaArrowRight,
  FaMicrochip,
  FaMemory,
  FaDesktop
} from "react-icons/fa";

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

      <div className={`tier-badge ${laptop.tier.toLowerCase()}`}>

        {laptop.tier} Tier

      </div>

      {/* Favorite */}

      <button className="favorite-btn">

        <FaHeart />

      </button>

      {/* Image */}

      <div className="image-area">

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

          <small>

            ({laptop.votes} Vote)

          </small>

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

          <button className="wishlist">

            <FaHeart />

          </button>

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