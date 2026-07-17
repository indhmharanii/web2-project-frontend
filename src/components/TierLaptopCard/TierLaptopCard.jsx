import "./TierLaptopCard.css";

import {
  FaStar
} from "react-icons/fa";

function TierLaptopCard({ laptop }) {

  return (

    <div className="tier-card">

      <div className="tier-image">

        <img
          src={laptop.image}
          alt={laptop.name}
        />

      </div>

      <div className="tier-content">

        <h4>

          {laptop.name}

        </h4>

        <span>

          {laptop.brand}

        </span>

        <div className="tier-rating">

          <FaStar />

          <p>

            {laptop.rating}

          </p>

          <small>

            ({laptop.votes})

          </small>

        </div>

      </div>

    </div>

  )

}

export default TierLaptopCard;