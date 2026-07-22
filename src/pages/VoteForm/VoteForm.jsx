import "./VoteForm.css";

import DashboardLayout from "../../layouts/DashboardLayout";
import { useParams } from "react-router-dom";

import laptops from "../../data/laptops";

import {
  FaVoteYea,
  FaStar,
  FaMedal,
  FaUsers,
  FaFire,
} from "react-icons/fa";

function VoteForm() {

  const { id } = useParams();

  const laptop = laptops.find(
    (item) => item.id === Number(id)
  );

  if (!laptop) {
    return (
      <DashboardLayout>
        <div className="vote-not-found">
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

      <div className="vote-page">

        {/* ================= BREADCRUMB ================= */}

        <div className="vote-breadcrumb">

          <span>Dashboard</span>

          <span>/</span>

          <span>Voting</span>

          <span>/</span>

          <span>Ajukan Vote</span>

        </div>

        {/* ================= HEADER ================= */}

        <div className="vote-header">

          <div className="vote-header-icon">

            <FaVoteYea />

          </div>

          <div>

            <h1>Ajukan Perubahan Tier</h1>

            <p>

              Berikan penilaian Anda terhadap laptop ini
              untuk membantu menentukan tier terbaik.

            </p>

          </div>

        </div>

        {/* ================= HERO ================= */}

        <div className="vote-hero">

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

            <div className="vote-rating">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <span>{laptop.rating}</span>

            </div>

            <h3>

              {formatPrice(laptop.price)}

            </h3>

            <div className="vote-mini-grid">

              <div className="vote-mini-card">

                <FaMedal />

                <div>

                  <small>Tier Saat Ini</small>

                  <h4>{laptop.tier}</h4>

                </div>

              </div>

              <div className="vote-mini-card">

                <FaUsers />

                <div>

                  <small>Total Vote</small>

                  <h4>{laptop.votes}</h4>

                </div>

              </div>

              <div className="vote-mini-card">

                <FaFire />

                <div>

                  <small>Kategori</small>

                  <h4>{laptop.category}</h4>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= FORM ================= */}

        <div className="vote-form">

  <h2>Form Pengajuan Tier</h2>

  <p className="vote-form-subtitle">
    Isi data berikut untuk mengajukan perubahan tier laptop.
  </p>

  {/* Nama Pengaju */}

  <div className="form-group">

    <label>Nama Pengaju</label>

    <input
      type="text"
      placeholder="Masukkan nama Anda"
    />

  </div>

  {/* Tier Saat Ini */}

  <div className="form-group">

    <label>Tier Saat Ini</label>

    <input
      type="text"
      value={laptop.tier}
      readOnly
    />

  </div>

  {/* Tier Diusulkan */}

  <div className="form-group">

    <label>Tier Yang Diusulkan</label>

    <select>

      <option>S Tier</option>

      <option>A Tier</option>

      <option>B Tier</option>

      <option>C Tier</option>

      <option>D Tier</option>

    </select>

  </div>

  {/* Preview */}

  <div className="tier-preview">

    <h3>Preview Perubahan Tier</h3>

    <div className="tier-box">

      <div>

        <small>Tier Saat Ini</small>

        <h4>{laptop.tier}</h4>

      </div>

      <span>→</span>

      <div>

        <small>Tier Diusulkan</small>

        <h4>A Tier</h4>

      </div>

    </div>

  </div>

  {/* Rating */}

  <div className="form-group">

    <label>Rating Anda</label>

    <div className="rating-select">

      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />

    </div>

  </div>

  {/* Alasan */}

  <div className="form-group">

    <label>Alasan Pengajuan</label>

    <textarea
      rows="6"
      placeholder="Jelaskan alasan mengapa laptop ini layak berada pada tier yang Anda usulkan..."
    ></textarea>

  </div>

  {/* Informasi */}

  <div className="vote-info-card">

    <h4>Informasi</h4>

    <p>

      Pengajuan Anda akan ditinjau terlebih dahulu oleh Administrator TIERRA.
      Selama proses peninjauan status voting akan menjadi <b>Pending</b>.

    </p>

  </div>

  {/* Checkbox */}

  <div className="vote-check">

    <input type="checkbox" />

    <span>

      Saya menyatakan bahwa penilaian yang saya berikan objektif
      dan sesuai dengan pengetahuan saya.

    </span>

  </div>
  {/* ================= RINGKASAN ================= */}

<div className="vote-summary">

  <h3>Ringkasan Pengajuan</h3>

  <div className="summary-grid">

    <div className="summary-card">

      <small>Laptop</small>

      <h4>{laptop.name}</h4>

    </div>

    <div className="summary-card">

      <small>Tier Saat Ini</small>

      <h4>{laptop.tier}</h4>

    </div>

    <div className="summary-card">

      <small>Tier Diusulkan</small>

      <h4>A Tier</h4>

    </div>

    <div className="summary-card">

      <small>Status</small>

      <h4>Pending</h4>

    </div>

  </div>

</div>

  {/* Submit */}

  <button className="submit-vote-btn">

    <FaVoteYea />

    Ajukan Vote

  </button>

</div>

      </div>

    </DashboardLayout>

  );

}

export default VoteForm;