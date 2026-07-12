import "./Summary.css";

import {
  FaUser,
  FaVoteYea,
  FaHeart,
  FaStar,
} from "react-icons/fa";

function Summary() {
  return (
    <div className="summary">

      <h2>Ringkasan Saya</h2>

      <div className="summary-item">

        <FaUser />

        <div>

          <span>Nama</span>

          <h4>Rani</h4>

        </div>

      </div>

      <div className="summary-item">

        <FaVoteYea />

        <div>

          <span>Total Vote</span>

          <h4>12 Vote</h4>

        </div>

      </div>

      <div className="summary-item">

        <FaHeart />

        <div>

          <span>Favorit</span>

          <h4>3 Laptop</h4>

        </div>

      </div>

      <div className="summary-item">

        <FaStar />

        <div>

          <span>Tier Favorit</span>

          <h4>S Tier</h4>

        </div>

      </div>

    </div>
  );
}

export default Summary;