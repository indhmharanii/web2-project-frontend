import "./PopularLaptops.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaStar, FaFire } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

function PopularLaptops() {
  const navigate = useNavigate();
  const [popularLaptops, setPopularLaptops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/laptops/top-all-time?limit=4`);
        setPopularLaptops(res.data);
      } catch (err) {
        console.error("Gagal memuat laptop populer:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPopular();
  }, []);

  return (
    <section className="popular-section" id="popular">
      <div className="popular-header">
        <h2 className="popular-heading">Laptop Populer</h2>

        <button className="popular-see-all" onClick={() => navigate("/login")}>
          Lihat Semua →
        </button>
      </div>

      <div className="popular-grid">
        {loading ? (
          <p style={{ color: "#888" }}>Memuat laptop populer...</p>
        ) : popularLaptops.length === 0 ? (
          <p style={{ color: "#888" }}>Belum ada data laptop.</p>
        ) : (
          popularLaptops.map((item) => (
            <div className="popular-card" key={item.id}>
              <img className="popular-image" src={item.image_url} alt={item.name} />

              <span className="popular-category">{item.category}</span>

              <h3 className="popular-title">{item.name}</h3>

              <div className="popular-stars">
                <FaStar />
                <span>{item.average_rating}</span>
              </div>

              <div className="popular-tier">
                <FaFire />
                Tier {item.tier}
              </div>

              <h4 className="popular-price">{formatPrice(item.price)}</h4>

              <button className="popular-button" onClick={() => navigate("/login")}>
                Lihat Detail
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default PopularLaptops;