import "./Recommendation.css";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  FaPlusCircle,
  FaLaptop,
  FaMicrochip,
  FaMemory,
  FaHdd,
  FaDesktop,
  FaMoneyBillWave,
  FaImage,
  FaAlignLeft,
  FaPaperPlane,
} from "react-icons/fa";

function Recommendation() {

  return (

    <DashboardLayout>

      <div className="recommendation-page">

        {/* Breadcrumb */}

        <div className="recommendation-breadcrumb">

          <span>Dashboard</span>

          <span>/</span>

          <span>Tambah Rekomendasi</span>

        </div>

        {/* Header */}

        <div className="recommendation-header">

          <div className="recommendation-header-icon">

            <FaPlusCircle />

          </div>

          <div>

            <h1>TAMBAH REKOMENDASI LAPTOP</h1>

            <p>

              Ajukan laptop baru untuk ditinjau oleh Admin sebelum dipublikasikan.

            </p>

          </div>

        </div>

        {/* Form */}

        <div className="recommendation-form">

          <div className="form-group">

            <label>

              <FaLaptop />

              Nama Laptop

            </label>

            <input
              type="text"
              placeholder="Contoh: ASUS ROG Strix G16"
            />

          </div>

          <div className="form-group">

            <label>Brand</label>

            <input
              type="text"
              placeholder="ASUS"
            />

          </div>

          <div className="form-group">

            <label>Kategori</label>

            <select>

              <option>Gaming</option>

              <option>Office</option>

              <option>Content Creator</option>

              <option>Ultrabook</option>

            </select>

          </div>

          <div className="form-grid">

            <div className="form-group">

              <label>

                <FaMicrochip />

                Processor

              </label>

              <input type="text" />

            </div>

            <div className="form-group">

              <label>

                <FaDesktop />

                GPU

              </label>

              <input type="text" />

            </div>

            <div className="form-group">

              <label>

                <FaMemory />

                RAM

              </label>

              <input type="text" />

            </div>

            <div className="form-group">

              <label>

                <FaHdd />

                Storage

              </label>

              <input type="text" />

            </div>

          </div>

          <div className="form-group">

            <label>

              <FaMoneyBillWave />

              Harga

            </label>

            <input
              type="number"
            />

          </div>

          <div className="form-group">

            <label>

              <FaImage />

              Upload Gambar

            </label>

            <input
              type="file"
            />

          </div>

          <div className="form-group">

            <label>

              <FaAlignLeft />

              Deskripsi

            </label>

            <textarea
              rows="6"
            ></textarea>

          </div>

          <div className="checkbox">

            <input type="checkbox" />

            <span>

              Saya memastikan data yang saya kirim benar.

            </span>

          </div>

          <button className="submit-btn">

            <FaPaperPlane />

            Kirim Rekomendasi

          </button>

        </div>

      </div>

    </DashboardLayout>

  );

}

export default Recommendation;