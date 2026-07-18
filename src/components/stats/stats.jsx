import "./Stats.css";

import {
  FaLaptop,
  FaVoteYea,
  FaComments,
  FaStar,
} from "react-icons/fa";

function Stats() {
  return (
    <section className="stats">

      <div className="stat-card">

        <div className="icon blue">
          <FaLaptop />
        </div>

        <div className="stat-content">

          <span>Laptop Terdaftar</span>

          <h2>520</h2>

          <p>Total laptop dalam sistem</p>

        </div>

      </div>

      <div className="stat-card">

        <div className="icon green">
          <FaVoteYea />
        </div>

        <div className="stat-content">

          <span>Total Vote</span>

          <h2>1.540</h2>

          <p>Vote dari semua pengguna</p>

        </div>

      </div>

      <div className="stat-card">

        <div className="icon orange">
          <FaComments />
        </div>

        <div className="stat-content">

          <span>Komentar</span>

          <h2>356</h2>

          <p>Komentar pengguna</p>

        </div>

      </div>

      <div className="stat-card">

        <div className="icon purple">
          <FaStar />
        </div>

        <div className="stat-content">

          <span>Rating</span>

          <h2>4.8</h2>

          <p>Berdasarkan vote</p>

        </div>

      </div>

    </section>
  );
}

export default Stats;