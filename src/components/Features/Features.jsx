import "./Features.css";

import {
  FaRobot,
  FaBalanceScale,
  FaDatabase,
} from "react-icons/fa";

function Features() {
  return (
    <section className="features">

      <h2>Fitur</h2>

      <div className="feature-grid">

        <div className="feature-card">

          <FaRobot className="feature-icon"/>

          <h3>Rekomendasi AI</h3>

          <p>
            Temukan laptop yang paling
            sesuai dengan kebutuhan Anda.
          </p>

        </div>

        <div className="feature-card">

          <FaBalanceScale className="feature-icon"/>

          <h3>Bandingkan Laptop</h3>

          <p>
            Bandingkan spesifikasi dengan mudah.
          </p>

        </div>

        <div className="feature-card">

          <FaDatabase className="feature-icon"/>

          <h3>Data Terbaru</h3>

          <p>
            Harga dan spesifikasi yang akurat.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;