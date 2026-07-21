import "./TierPreview.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaBoxOpen } from "react-icons/fa";

const tierMeta = {
  S: { title: "S TIER", color: "gold" },
  A: { title: "A TIER", color: "blue" },
  B: { title: "B TIER", color: "green" },
  C: { title: "C TIER", color: "gray" },
};

function TierPreview() {
  const [tierData, setTierData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTierOverview = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/laptops/tier-overview`
        );
        setTierData(response.data);
      } catch (err) {
        console.error("Gagal memuat ringkasan tier:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTierOverview();
  }, []);

  return (
    <section className="tier-preview">
      <div className="tier-header">
        <h2>
          Peringkat Tier
          <span> (Berdasarkan Total Vote Pengguna)</span>
        </h2>
      </div>

      <div className="tier-grid">
        {Object.entries(tierMeta).map(([key, meta]) => {
          const laptops = tierData[key] || [];

          return (
            <div className={`tier-card ${meta.color}`} key={key}>
              <div className="tier-title">{meta.title}</div>

              {loading ? (
                <div className="tier-empty">
                  <p>Memuat...</p>
                </div>
              ) : laptops.length === 0 ? (
                <div className="tier-empty">
                  <FaBoxOpen />
                  <h4>Belum ada laptop</h4>
                  <p>
                    Laptop pada tier ini akan muncul setelah pengguna
                    memberikan vote.
                  </p>
                </div>
              ) : (
                <ul className="tier-laptop-list">
                  {laptops.map((laptop) => (
                    <li key={laptop.id}>
                      <span className="tier-laptop-name">{laptop.name}</span>
                      <span className="tier-laptop-vote">
                        {laptop.vote_count} vote
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TierPreview;