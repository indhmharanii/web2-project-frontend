import "./Vote.css";

import DashboardLayout from "../../layouts/DashboardLayout";

import { useParams } from "react-router-dom";

import laptops from "../../data/laptops";

import {
  FaVoteYea,
  FaLaptop,
  FaStar,
  FaMoneyBillWave,
} from "react-icons/fa";

function Vote() {

  const { id } = useParams();

  const laptop = laptops.find(
    (item) => item.id === Number(id)
  );

  if (!laptop) {
    return (
      <DashboardLayout>
        <div className="vote-page">
          <h2>Laptop tidak ditemukan.</h2>
        </div>
      </DashboardLayout>
    );
  }

  return (

    <DashboardLayout>

      <div className="vote-page">

        {/* Breadcrumb */}

        <div className="vote-breadcrumb">

          <span>Dashboard</span>

          <span>/</span>

          <span>Vote Laptop</span>

        </div>

        {/* Header */}

        <div className="vote-header">

          <div className="vote-icon">

            <FaVoteYea />

          </div>

          <div>

            <h1>VOTE LAPTOP</h1>

            <p>
              Berikan penilaianmu untuk membantu pengguna lain.
            </p>

          </div>

        </div>

        {/* Card */}

        <div className="vote-card">

          <div className="vote-image">

            <img
              src={laptop.image}
              alt={laptop.name}
            />

          </div>

          <div className="vote-info">

            <span className="vote-category">

              {laptop.category}

            </span>

            <h2>{laptop.name}</h2>

            <h4>{laptop.brand}</h4>

            <div className="vote-detail">

              <div>

                <FaLaptop />

                {laptop.processor}

              </div>

              <div>

                <FaStar />

                {laptop.rating}

              </div>

              <div>

                <FaMoneyBillWave />

                Rp {laptop.price.toLocaleString("id-ID")}

              </div>

            </div>

          </div>

        </div>

        {/* Form */}

        <div className="vote-form">

          <h2>Pilih Tier</h2>

          <div className="tier-option">

            <label>
              <input
                type="radio"
                name="tier"
              />

              S Tier
            </label>

            <label>
              <input
                type="radio"
                name="tier"
              />

              A Tier
            </label>

            <label>
              <input
                type="radio"
                name="tier"
              />

              B Tier
            </label>

            <label>
              <input
                type="radio"
                name="tier"
              />

              C Tier
            </label>

          </div>

          <h2>Komentar</h2>

          <textarea
            placeholder="Tulis alasan memilih tier..."
          ></textarea>

          <button>

            Kirim Vote

          </button>

        </div>

      </div>

    </DashboardLayout>

  );

}

export default Vote;