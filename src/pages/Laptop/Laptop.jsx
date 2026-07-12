import "./Laptop.css";

import DashboardLayout from "../../layouts/DashboardLayout";

import LaptopCard from "../../components/LaptopCard/LaptopCard";

import laptops from "../../data/laptops";

import {
  FaLaptop,
  FaSearch,
  FaFilter,
  FaGamepad,
  FaBriefcase,
  FaPaintBrush,
  FaGraduationCap,
  FaStar,
  FaUsers,
  FaFire
} from "react-icons/fa";

function Laptop() {

  return (

    <DashboardLayout>

      <div className="laptop-page">

        {/* Breadcrumb */}

        <div className="breadcrumb">

          Dashboard

          <span>/</span>

          Jelajahi Laptop

        </div>

        {/* Header */}

        <div className="page-header">

          <div>

            <div className="title-icon">

              <FaLaptop />

            </div>

          </div>

          <div>

            <h1>Jelajahi Laptop</h1>

            <p>

              Temukan laptop terbaik berdasarkan rekomendasi komunitas TIERRA.

            </p>

          </div>

        </div>

        {/* Search */}

        <div className="toolbar">

          <div className="search-box-page">

            <FaSearch />

            <input

              placeholder="Cari laptop, brand, processor, atau kategori..."

            />

          </div>

          <button className="filter-btn">

            <FaFilter />

            Filter

          </button>

        </div>

        {/* Category */}

        <div className="category-list">

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

        {/* Statistics */}

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

              <p>Rating Rata-rata</p>

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

              <p>Tier Teratas</p>

            </div>

          </div>

        </div>

        {/* Laptop Grid */}

        <div className="laptop-grid">

          {

            laptops.map((laptop)=>(

              <LaptopCard

                key={laptop.id}

                laptop={laptop}

              />

            ))

          }

        </div>

      </div>

    </DashboardLayout>

  )

}

export default Laptop;