import "./Laptop.css";

import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import LaptopCard from "../../components/LaptopCard/LaptopCard";
import laptops from "../../data/laptops";

import {
  FaLaptop,
  FaSearch,
  FaGamepad,
  FaBriefcase,
  FaPaintBrush,
  FaGraduationCap,
  FaStar,
  FaUsers,
  FaFire,
  FaArrowRight,
  FaMoneyBillWave,
} from "react-icons/fa";

function Laptop() {

  const [searchType, setSearchType] = useState("name");

  return (

    <DashboardLayout>

      <div className="laptop-page">

        {/* ================= HEADER ================= */}

        <div className="breadcrumb">

          <span>Dashboard</span>

          <p>/</p>

          <span>Jelajahi Laptop</span>

        </div>

        <div className="page-header">

          <div className="header-left">

            <div className="page-icon">

              <FaLaptop />

            </div>

            <div className="title-wrapper">

              <h1>Jelajahi Laptop</h1>

              <p>

                Temukan laptop terbaik berdasarkan rekomendasi TIERRA sesuai kebutuhan Anda.

              </p>

            </div>

          </div>

        </div>

        {/* ================= SEARCH ================= */}

        <div className="search-toolbar">

          <div className="search-mode">

            <button
              className={
                searchType === "name"
                  ? "mode-btn active"
                  : "mode-btn"
              }
              onClick={() => setSearchType("name")}
            >

              <FaSearch />

              Cari Berdasarkan Nama

            </button>

            <button
              className={
                searchType === "budget"
                  ? "mode-btn active"
                  : "mode-btn"
              }
              onClick={() => setSearchType("budget")}
            >

              <FaMoneyBillWave />

              Cari Berdasarkan Budget

            </button>

          </div>

          {searchType === "name" ? (

            <div className="laptop-search">

              <FaSearch />

              <input
                type="text"
                placeholder="Cari laptop, brand, processor..."
              />

            </div>

          ) : (

           <div className="budget-search">

  <div className="budget-input">

    <select>

      <option value="">-- Pilih Budget --</option>

      <option>Rp1 Juta - Rp3 Juta</option>

      <option>Rp3 Juta - Rp5 Juta</option>

      <option>Rp5 Juta - Rp7 Juta</option>

      <option>Rp7 Juta - Rp10 Juta</option>

      <option>Rp10 Juta - Rp15 Juta</option>

      <option>Di Atas Rp15 Juta</option>

    </select>

  </div>

  <button className="budget-button">

    Cari Rekomendasi

  </button>

</div>

          )}

        </div>

        {/* ================= CATEGORY ================= */}

        <div className="category-wrapper">

          <button className="active">

            Semua

          </button>

          <button>

            <FaGamepad />

            Gaming

          </button>

          <button>

            <FaBriefcase />

            Office

          </button>

          <button>

            <FaPaintBrush />

            Creator

          </button>

          <button>

            <FaGraduationCap />

            Student

          </button>

        </div>

               {/* ================= STATS ================= */}

        <div className="stats-grid">

          <div className="stats-card">

            <FaLaptop />

            <div>

              <h2>8</h2>

              <p>Total Laptop</p>

            </div>

          </div>

          <div className="stats-card">

            <FaStar />

            <div>

              <h2>4.8</h2>

              <p>Rating</p>

            </div>

          </div>

          <div className="stats-card">

            <FaUsers />

            <div>

              <h2>8540</h2>

              <p>Total Vote</p>

            </div>

          </div>

          <div className="stats-card">

            <FaFire />

            <div>

              <h2>S Tier</h2>

              <p>Tier Tertinggi</p>

            </div>

          </div>

        </div>

        {/* ================= SECTION ================= */}

        <div className="section-header">

          <div>

            <h2>

              🔥 Rekomendasi Laptop

            </h2>

            <p>

              {laptops.length} laptop tersedia

            </p>

          </div>

          <button className="view-all">

            Lihat Semua

            <FaArrowRight />

          </button>

        </div>

        {/* ================= GRID ================= */}

        <div className="laptop-grid">

          {laptops.map((laptop) => (

            <LaptopCard
              key={laptop.id}
              laptop={laptop}
            />

          ))}

        </div>

      </div>

    </DashboardLayout>

  );

}

export default Laptop;