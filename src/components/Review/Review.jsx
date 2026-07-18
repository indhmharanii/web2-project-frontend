import "./Review.css";

import { FaStar, FaUserCircle } from "react-icons/fa";

function Review() {
  return (
   

      <div className="review-form">

        <h3>Tulis Ulasan</h3>

        <label>Rating</label>

        <div className="review-stars">

          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

        </div>

        <label>Komentar</label>

        <textarea
          placeholder="Bagikan pengalamanmu menggunakan laptop ini..."
        ></textarea>

        <button>

          Kirim Ulasan

        </button>

      </div>
  );
}

export default Review;