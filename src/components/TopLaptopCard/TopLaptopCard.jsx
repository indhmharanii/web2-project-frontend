import "./TopLaptopCard.css";

import { FaStar, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function TopLaptopCard({ laptop, rank }) {

  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (

    <div className="top-card">

      <div className="rank-badge">

        #{rank}

      </div>

      <img
        src={laptop.image}
        alt={laptop.name}
      />

      <h3>

        {laptop.name}

      </h3>

      <span>

        {laptop.brand}

      </span>

      <div className="top-rating">

        <FaStar />

        <p>

          {laptop.rating}

        </p>

        <small>

          ({laptop.votes} Vote)

        </small>

      </div>

      <h2>

        {formatPrice(laptop.price)}

      </h2>

      <button
        onClick={() => navigate(`/laptop/${laptop.id}`)}
      >

        Lihat Detail

        <FaArrowRight />

      </button>

    </div>

  );

}

export default TopLaptopCard;