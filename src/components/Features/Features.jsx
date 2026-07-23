import "./Features.css";

import {
  FaVoteYea,
  FaLaptop,
  FaTrophy,
} from "react-icons/fa";

function Features() {
  return (
    <section className="features" id="features">

      <h2>Fitur TIERRA</h2>

      <p className="feature-subtitle">
        Jelajahi berbagai fitur yang membantu Anda memilih laptop terbaik
        berdasarkan pengalaman dan rekomendasi komunitas.
      </p>

      <div className="feature-grid">

        <div className="feature-card">

          <FaVoteYea className="feature-icon"/>

          <h3>Vote Laptop</h3>

          <p>
            Berikan vote pada laptop favoritmu agar memperoleh posisi terbaik
            dalam Tier List komunitas.
          </p>

        </div>

        <div className="feature-card">

        <FaLaptop className="feature-icon"/>

        <h3>Jelajahi Laptop</h3>

        <p>
          Temukan berbagai pilihan laptop lengkap dengan spesifikasi, harga, dan informasi yang membantu sebelum menentukan pilihan.
        </p>

      </div>

        <div className="feature-card">

          <FaTrophy className="feature-icon"/>

          <h3>Tier List Komunitas</h3>

          <p>
            Lihat peringkat laptop berdasarkan hasil voting seluruh pengguna
            TIERRA secara real-time.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;