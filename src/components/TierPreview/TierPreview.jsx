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
    <section className="home-tier-preview">

      <div className="home-tier-header">

        <h2>Peringkat Tier</h2>

        <p>Berdasarkan Total Vote Pengguna</p>

      </div>

      <div className="home-tier-grid">

        {Object.entries(tierMeta).map(([key, meta]) => {

          const laptops = tierData[key] || [];

          return (

            <div
              key={key}
              className={`home-tier-card ${meta.color}`}
            >

              <div className="home-tier-title">

                {meta.title}

              </div>

              {loading ? (

                <div className="home-tier-empty">

                  <p>Memuat...</p>

                </div>

              ) : laptops.length === 0 ? (

                <div className="home-tier-empty">

                  <FaBoxOpen />

                  <h4>Belum ada laptop</h4>

                  <p>
                    Laptop pada tier ini akan muncul
                    setelah pengguna memberikan vote.
                  </p>

                </div>

              ) : (

                <ul className="home-tier-list">

                  {laptops.map((laptop) => (

                    <li
                      key={laptop.id}
                      className="home-tier-item"
                    >

                      <span className="home-tier-name">

                        {laptop.name}

                      </span>

                      <span className="home-tier-vote">

                        {laptop.vote_count} Vote

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