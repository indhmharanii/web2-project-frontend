import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";

import hero from "../../assets/images/hero-laptop.png";
import about from "../../assets/images/about.png";

import {
  FaLaptop,
  FaChartBar,
  FaBullseye,
} from "react-icons/fa";

function Home() {
  return (
    <div className="home">

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-left">

          <h1>
            Find Your
            <span>Perfect Laptop</span>
          </h1>

          <p>
            AI-powered recommendation platform that helps you
            choose the perfect laptop based on budget,
            gaming, programming, editing, and productivity.
          </p>

          <div className="buttons">

            <button className="start">
              Get Started
            </button>

            <button className="learn">
              Learn More
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

          <p>Laptops Reviewed</p>

        </div>

        <div className="stat-card">

          <FaChartBar className="icon" />

          <h2>500+</h2>

          <p>Recommendations</p>

        </div>

        <div className="stat-card">

          <FaBullseye className="icon" />

          <h2>95%</h2>

          <p>Accuracy Rate</p>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="about">

        <div className="about-left">

          <h2>About Budget2Build</h2>

          <p>
            Budget2Build is an AI-powered platform designed to
            help users find the best laptop based on their
            budget and specific needs.

            Whether you are a student, programmer, gamer,
            content creator, or office worker, our
            recommendation system provides the most suitable
            laptop quickly and accurately.
          </p>

        </div>

        <div className="about-right">

          <img
            src={about}
            alt="About"
          />

        </div>

      </section>

    </div>
  );
}

export default Home;