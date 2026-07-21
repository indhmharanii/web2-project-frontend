import "./WelcomeCard.css";
import { useNavigate } from "react-router-dom";
import laptop from "../../assets/images/hero-laptop.png";

function WelcomeCard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <section className="welcome-card">
      <div className="welcome-left">
        <div className="welcome-badge">👋 Selamat Datang</div>

        <h1>
          Selamat Datang, <span className="brand">{user.name || "Pengguna"}</span>
        </h1>

        <p>
          Temukan laptop terbaik berdasarkan hasil voting komunitas. Berikan
          suaramu dan bantu pengguna lain menemukan laptop terbaik.
        </p>

        <button className="welcome-btn" onClick={() => navigate("/tier-list")}>
          Lihat Tier List
        </button>
      </div>

      <div className="welcome-right">
        <img src={laptop} alt="Laptop" />
      </div>
    </section>
  );
}

export default WelcomeCard;