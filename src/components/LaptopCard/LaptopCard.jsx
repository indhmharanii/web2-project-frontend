import "./LaptopCard.css";
import {
  FaStar,
  FaHeart,
  FaArrowRight,
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

  const tierClass = laptop.tier
    ? laptop.tier.toLowerCase()
    : "a";

  return (
    <div className="laptop-card">

      {/* Tier Badge */}
      <span className={`tier ${tierClass}`}>
        {laptop.tier} Tier
      </span>

      {/* Favorite */}
      <button className="favorite-icon">
        <FaHeart />
      </button>

      {/* Image */}
      <div className="laptop-image">
        <img
          src={laptop.image}
          alt={laptop.name}
        />
      </div>

      {/* Body */}
      <div className="laptop-body">

        <span className="category">
          {laptop.category}
        </span>

        <h3 className="laptop-title">
          {laptop.name}
        </h3>

        <p className="brand">
          {laptop.brand}
        </p>

        <div className="rating">

          <FaStar />

          <span>
            {laptop.rating}
          </span>

          <small>
            ({laptop.votes} Vote)
          </small>

        </div>

        <div className="specs">

          <p>{laptop.processor}</p>

          <p>{laptop.gpu}</p>

          <p>{laptop.ram}</p>

        </div>

        <div className="price">
          {formatPrice(laptop.price)}
        </div>

        <div className="card-footer">

          <button
            className="favorite-btn"
          >
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