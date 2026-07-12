import "./TierPreview.css";
import { FaBoxOpen } from "react-icons/fa";

const tiers = [
  { title: "S TIER", color: "gold" },
  { title: "A TIER", color: "blue" },
  { title: "B TIER", color: "green" },
  { title: "C TIER", color: "gray" },
];

function TierPreview() {
  return (
    <section className="tier-preview">

      <div className="tier-header">

        <h2>
          Peringkat Tier
          <span>(Berdasarkan Total Vote Pengguna)</span>
        </h2>

        <button>
          Lihat Semua Tier →
        </button>

      </div>

      <div className="tier-grid">

        {tiers.map((tier) => (

          <div className={`tier-card ${tier.color}`} key={tier.title}>

            <div className="tier-title">

              {tier.title}

            </div>

            <div className="tier-empty">

              <FaBoxOpen />

              <h4>Belum ada laptop</h4>

              <p>
                Laptop pada tier ini akan muncul
                setelah pengguna memberikan vote.
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default TierPreview;