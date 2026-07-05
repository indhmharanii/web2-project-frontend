import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import hero from "../../assets/images/hero-laptop.png";
import about from "../../assets/images/about.png";
import Features from "../../components/Features/Features";
import PopularLaptops from "../../components/PopularLaptops/PopularLaptops";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

import {
  FaLaptop,
  FaChartBar,
  FaBullseye,
} from "react-icons/fa";

function Home() {
  return (
    <div className="home">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="hero">

        <div className="hero-left">

          <h1>
            Temukan
            <span>Laptop Impianmu</span>
          </h1>

          <p>
            Platform rekomendasi berbasis AI yang membantu Anda
            memilih laptop terbaik sesuai anggaran,
            kebutuhan gaming, pemrograman, editing,
            maupun produktivitas.
          </p>

          <div className="buttons">

            <button className="start">
              Mulai Sekarang
            </button>

            <button className="learn">
              Pelajari Lebih Lanjut
            </button>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={hero}
            alt="Laptop"
          />

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="stats">

        <div className="stat-card">

          <FaLaptop className="icon" />

          <h2>1000+</h2>

          <p>Laptop Telah Ditinjau</p>

        </div>

        <div className="stat-card">

          <FaChartBar className="icon" />

          <h2>500+</h2>

          <p>Rekomendasi Diberikan</p>

        </div>

        <div className="stat-card">

          <FaBullseye className="icon" />

          <h2>95%</h2>

          <p>Tingkat Akurasi</p>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="about">

        <div className="about-left">

          <h2>Tentang Budget2Build</h2>

          <p>
            Budget2Build adalah platform rekomendasi laptop
            berbasis AI yang dirancang untuk membantu pengguna
            menemukan laptop terbaik sesuai dengan anggaran
            dan kebutuhan masing-masing.

            Baik Anda seorang pelajar, programmer, gamer,
            content creator, maupun pekerja kantoran,
            sistem rekomendasi kami akan memberikan pilihan
            laptop yang paling sesuai secara cepat dan akurat.
          </p>

        </div>

        <div className="about-right">

          <img
            src={about}
            alt="Tentang Budget2Build"
          />

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <Features />
      <PopularLaptops />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;