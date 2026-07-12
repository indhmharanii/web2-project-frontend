import "./WelcomeCard.css";
import laptop from "../../assets/images/hero-laptop.png";

function WelcomeCard() {
  return (
    <section className="welcome-card">

      <div className="welcome-left">

        <div className="welcome-badge">
          👋 Selamat Datang
        </div>

        <h1>
          Selamat Datang di <span className="brand">TIERRA</span>
        </h1>

        <p>
          Temukan laptop terbaik berdasarkan hasil voting komunitas.
          Berikan suaramu dan bantu pengguna lain menemukan laptop terbaik.
        </p>

        <button className="welcome-btn">
          Lihat Tier List
        </button>

      </div>

      <div className="welcome-right">

        <img
          src={laptop}
          alt="Laptop"
        />

      </div>

    </section>
  );
}

export default WelcomeCard;