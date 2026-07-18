import "./LaptopDetail.css";

import DashboardLayout from "../../layouts/DashboardLayout";

import { useNavigate, useParams } from "react-router-dom";

import laptops from "../../data/laptops";

import {
  FaStar,
  FaMicrochip,
  FaMemory,
  FaHdd,
  FaDesktop,
  FaBatteryFull,
  FaWeightHanging,
  FaHeart,
  FaThumbsUp,
  FaBalanceScale,
  FaFire,
  FaMedal,
  FaUsers
} from "react-icons/fa";

function LaptopDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const laptop = laptops.find(
    (item) => item.id === Number(id)
  );

  if (!laptop) {
    return (
      <DashboardLayout>
        <div className="not-found">
          <h1>404</h1>
          <p>Laptop tidak ditemukan.</p>
        </div>
      </DashboardLayout>
    );
  }

  const formatPrice = (price) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <DashboardLayout>

      <div className="detail-page">

        {/* HEADER */}

        <div className="breadcrumb">

         Dashboard

        <span>/</span>

        Jelajahi Laptop

        <span>/</span>

        {laptop.name}

        </div>

        {/* HERO */}

        <div className="detail-card">

          {/* IMAGE */}

          <div className="detail-left">

            <div className="image-wrapper">

              <img
                src={laptop.image}
                alt={laptop.name}
              />

            </div>

          </div>

          {/* CONTENT */}

          <div className="detail-right">

            <span className="badge">

               {laptop.category}

            </span>

            <h1>{laptop.name}</h1>

            <div className="rating">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <span>

                {laptop.rating}

              </span>

            </div>

            <h2>

              {formatPrice(laptop.price)}

            </h2>

            <div className="price-divider"></div>

            {/* INFO */}

            <div className="info-box">

              <div className="mini-card">

                <FaMedal />

                <div>

                  <small>Tier</small>

                  <h4>{laptop.tier}</h4>

                </div>

              </div>

              <div className="mini-card">

                <FaUsers />

                <div>

                  <small>Total Vote</small>

                  <h4>{laptop.votes}</h4>

                </div>

              </div>

              <div className="mini-card">

                <FaFire />

                <div>

                  <small>Kategori</small>

                  <h4>{laptop.category}</h4>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* SPEC */}

        <div className="section">

          <h3>Spesifikasi Laptop</h3>

          <div className="spec-grid">

            <div className="spec-card">

              <FaMicrochip />

              <div>

                <small>Processor</small>

                <h4>{laptop.processor}</h4>

              </div>

            </div>

            <div className="spec-card">

              <FaDesktop />

              <div>

                <small>Graphics</small>

                <h4>{laptop.gpu}</h4>

              </div>

            </div>

            <div className="spec-card">

              <FaMemory />

              <div>

                <small>RAM</small>

                <h4>{laptop.ram}</h4>

              </div>

            </div>

            <div className="spec-card">

              <FaHdd />

              <div>

                <small>Storage</small>

                <h4>{laptop.storage}</h4>

              </div>

            </div>

            <div className="spec-card">

              <FaBatteryFull />

              <div>

                <small>Battery</small>

                <h4>{laptop.battery}</h4>

              </div>

            </div>

            <div className="spec-card">

              <FaWeightHanging />

              <div>

                <small>Weight</small>

                <h4>{laptop.weight}</h4>

              </div>

            </div>

          </div>

        </div>

        {/* DESCRIPTION */}

        <div className="section">

          <h3>Tentang Laptop</h3>

          <div className="description-card">

            <p>

              {laptop.description}

            </p>

          </div>

        </div>
        

        {/* ACTION */}

      <div className="action-buttons">

 <button
    className="compare-btn"
    onClick={() => navigate("/compare")}
>

    <FaBalanceScale />

    Bandingkan

</button>

<button
    className="vote-btn"
    onClick={() => navigate(`/vote/${laptop.id}`)}
>

    <FaThumbsUp />

    Vote Laptop

</button>
</div>
      </div>

    </DashboardLayout>
  );
}

export default LaptopDetail;