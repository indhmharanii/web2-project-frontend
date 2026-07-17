import "./Favorite.css";

import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import LaptopCard from "../../components/LaptopCard/LaptopCard";
import laptops from "../../data/laptops";

import {
  FaHeart,
  FaSearch,
  FaFilter,
  FaGamepad,
  FaBriefcase,
  FaPaintBrush,
  FaGraduationCap,
  FaStar,
  FaUsers,
} from "react-icons/fa";

function Favorite() {
    const [search, setSearch] = useState("");

  return (

    <DashboardLayout>

      <div className="favorite-page">

        {/* Breadcrumb */}

        <div className="favorite-breadcrumb">

          <span>Dashboard</span>

          <span>/</span>

          <span>Favorite</span>

        </div>

        {/* Header */}

        <div className="favorite-header">

          <div className="favorite-header-icon">

            <FaHeart />

          </div>

          <div>

           <h1>LAPTOP FAVORIT</h1>

<p>

  Kelola koleksi laptop favoritmu dan temukan kembali pilihan terbaik dengan mudah.

</p>

          </div>

        </div>

        {/* Statistik */}

        <div className="favorite-stats">

          <div className="favorite-stat-card">

            <div className="stat-icon">

              <FaHeart />

            </div>

            <div>

              <h2>{laptops.length}</h2>

              <p>Total Favorite</p>

            </div>

          </div>

          <div className="favorite-stat-card">

            <div className="stat-icon">

              <FaStar />

            </div>

            <div>

              <h2>4.8</h2>

              <p>Rating Rata-rata</p>

            </div>

          </div>

          <div className="favorite-stat-card">

            <div className="stat-icon">

              <FaUsers />

            </div>

            <div>

              <h2>8540</h2>

              <p>Total Vote</p>

            </div>

          </div>

          <div className="favorite-stat-card">

            <div className="stat-icon">

              <FaHeart />

            </div>

            <div>

              <h2>S Tier</h2>

<p>Tier Favorit</p>

            </div>

          </div>

        </div>

        {/* Toolbar */}

        <div className="favorite-toolbar">

          <div className="favorite-search">

            <FaSearch />

           <input
    type="text"
    placeholder="Cari laptop favorit..."
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
/>

          </div>

          <button className="favorite-filter-btn">

            <FaFilter />

            Filter

          </button>

        </div>

        {/* Filter */}

        <div className="favorite-filter">

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

        {/* Favorite Grid */}

      <div className="favorite-grid">

 {laptops

.filter((laptop)=>{

return (

laptop.name.toLowerCase().includes(search.toLowerCase())

||

laptop.brand.toLowerCase().includes(search.toLowerCase())

);

})

.map((laptop)=>(

<LaptopCard
    key={laptop.id}
    laptop={laptop}
    compact={true}
    isFavorite={true}
/>

))}

</div>

      </div>

    </DashboardLayout>

  );

}

export default Favorite;