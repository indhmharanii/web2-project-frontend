import "./Home.css";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="hero-left">

          <h1>
            Temukan
            <span>Laptop Terbaik</span>
            Bersama TIERRA
          </h1>

          <p>
          TIERRA adalah platform komunitas yang membantu Anda menemukan
          laptop terbaik melalui sistem voting, tier list, rekomendasi,
          dan ulasan dari pengguna lain sehingga Anda dapat menentukan
          pilihan dengan lebih percaya diri.
        </p>

          <div className="buttons">

            <button
              className="start"
              onClick={() => navigate("/")}
            >
              Jelajahi Laptop
            </button>

            <button
              className="learn"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Tentang TIERRA
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

      {/* ================= ABOUT ================= */}

      <section
        className="about"
        id="about"
      >

        <div className="about-left">

          <h2>Tentang TIERRA</h2>

         <p>
          TIERRA adalah platform komunitas yang membantu pengguna menemukan
          laptop terbaik berdasarkan pengalaman nyata, sistem voting,
          peringkat tier, rekomendasi komunitas, dan ulasan pengguna.

          <br /><br />

          Dengan informasi yang lebih objektif dan mudah dipahami,
          TIERRA membantu pelajar, programmer, gamer, content creator,
          maupun pekerja profesional memilih laptop yang paling sesuai
          dengan kebutuhan dan anggaran mereka.
        </p>

        </div>

        <div className="about-right">

          <img
            src={about}
            alt="Tentang TIERRA"
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