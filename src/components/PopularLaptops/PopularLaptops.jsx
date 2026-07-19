import "./PopularLaptops.css";

import laptops from "../../data/laptops";
import { Link } from "react-router-dom";
import { FaStar, FaFire } from "react-icons/fa";

const popularLaptops = [...laptops]
  .sort((a, b) => b.votes - a.votes)
  .slice(0, 4);

const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

function PopularLaptops() {
  return (
    <section className="popular-section" id="popular">

      <div className="popular-header">

        <h2 className="popular-heading">
          Laptop Populer
        </h2>

        <button className="popular-see-all">
          Lihat Semua →
        </button>

      </div>

      <div className="popular-grid">

        {popularLaptops.map((item) => (

          <div
            className="popular-card"
            key={item.id}
          >

            <img
              className="popular-image"
              src={item.image}
              alt={item.name}
            />

            <span className="popular-category">

              {item.category}

            </span>

            <h3 className="popular-title">

              {item.name}

            </h3>

            <div className="popular-stars">

              <FaStar />

              <span>{item.rating}</span>

            </div>

            <div className="popular-tier">

              <FaFire />

              Tier {item.tier}

            </div>

            <h4 className="popular-price">

              {formatPrice(item.price)}

            </h4>

            <Link
              className="popular-link"
              to={`/laptop/${item.id}`}
            >

              <button className="popular-button">

                Lihat Detail

              </button>

            </Link>

          </div>

        ))}

      </div>

    </section>
  );
}

export default PopularLaptops;