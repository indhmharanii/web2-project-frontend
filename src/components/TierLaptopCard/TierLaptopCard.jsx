import "./TierLaptopCard.css";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function TierLaptopCard({ laptop }) {
  const navigate = useNavigate();

  return (
    <div
      className="tier-card"
      onClick={() => navigate(`/laptop/${laptop.id}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="tier-image">
        <img src={laptop.image} alt={laptop.name} />
      </div>

      <div className="tier-content">
        <h4>{laptop.name}</h4>
        <span>{laptop.brand}</span>

        <div className="tier-rating">
          <FaStar />
          <p>{laptop.rating}</p>
          <small>({laptop.votes})</small>
        </div>
      </div>
    </div>
  );
}

export default TierLaptopCard;