import "./TierList.css";
import TierLaptopCard from "../../components/TierLaptopCard/TierLaptopCard";
import TopLaptopCard from "../../components/TopLaptopCard/TopLaptopCard";

import laptops from "../../data/laptops";
import DashboardLayout from "../../layouts/DashboardLayout";

import {
  FaTrophy,
  FaLaptop,
  FaUsers,
  FaStar,
  FaCrown,
  FaSearch,
  FaGamepad,
  FaBriefcase,
  FaPaintBrush,
  FaChevronRight,
} from "react-icons/fa";

function TierList() {
  const topLaptop = [...laptops]
  .sort((a, b) => b.votes - a.votes)
  .slice(0, 3);

const sTier = laptops.filter(item => item.tier === "S");
const aTier = laptops.filter(item => item.tier === "A");
const bTier = laptops.filter(item => item.tier === "B");
const cTier = laptops.filter(item => item.tier === "C");
  return (
    <DashboardLayout>

      <div className="tier-page">

        {/* Breadcrumb */}

        <div className="tier-breadcrumb">

          <span>Dashboard</span>

          <span>/</span>

          <span>Peringkat Laptop</span>

        </div>

        {/* Hero */}

        <div className="tier-header">

          <div className="tier-header-icon">

            <FaTrophy />

          </div>

          <div>

            <h1>PERINGKAT LAPTOP</h1>

            <p>

              Peringkat laptop terbaik berdasarkan hasil voting komunitas TIERRA.

            </p>

          </div>

        </div>

        {/* Statistics */}

        <div className="tier-stats">

          <div className="tier-stat-card">

            <div className="stat-icon">

              <FaLaptop />

            </div>

            <div>

              <h2>{laptops.length}</h2>

              <p>Total Laptop</p>

            </div>

          </div>

          <div className="tier-stat-card">

            <div className="stat-icon">

              <FaUsers />

            </div>

            <div>

              <h2>8540</h2>

              <p>Total Vote</p>

            </div>

          </div>

          <div className="tier-stat-card">

            <div className="stat-icon">

              <FaStar />

            </div>

            <div>

              <h2>4.8</h2>

              <p>Rating Rata-rata</p>

            </div>

          </div>

          <div className="tier-stat-card">

            <div className="stat-icon">

              <FaCrown />

            </div>

            <div>

              <h2>S Tier</h2>

              <p>Tier Teratas</p>

            </div>

          </div>

        </div>

        {/* Top 3 */}

        <div className="top3-section">

          <div className="section-title">

            <FaTrophy />

            <h2>Top 3 Laptop Minggu Ini</h2>

          </div>

          <p>

            Laptop dengan jumlah vote terbanyak minggu ini.

          </p>

         <div className="top3-grid">
{topLaptop.map((laptop, index) => (
      <TopLaptopCard
        key={laptop.id}
        laptop={laptop}
        rank={index + 1}
      />
    ))}

</div>

        </div>

        {/* Filter */}

        <div className="tier-toolbar">

          <div className="tier-filter">

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

          </div>
        </div>

        {/* S Tier */}

        <div className="tier-section s-tier">

    <div className="tier-info">

        <FaCrown />

        <h3>S Tier</h3>
        <p>Best Performance</p>

    </div>

    <div className="tier-laptops">

  {sTier.map((laptop) => (

<TierLaptopCard
    key={laptop.id}
    laptop={laptop}
/>

))}

</div>

    <button className="tier-next">

        <FaChevronRight />

    </button>

</div>

        {/* A Tier */}

       <div className="tier-section a-tier">

  <div className="tier-info">

    <FaStar />

    <h3>A Tier</h3>

    <p>Excellent Choice</p>

  </div>

  <div className="tier-laptops">

    {aTier.map((laptop) => (

  <TierLaptopCard
    key={laptop.id}
    laptop={laptop}
  />

))}

  </div>

  <button className="tier-next">

    <FaChevronRight />

  </button>

</div>

        {/* B Tier */}

      <div className="tier-section b-tier">

  <div className="tier-info">

    <FaLaptop />

    <h3>B Tier</h3>

    <p>Good Performance</p>

  </div>

  <div className="tier-laptops">

    {bTier.map((laptop) => (

  <TierLaptopCard
    key={laptop.id}
    laptop={laptop}
  />

))}

  </div>

  <button className="tier-next">

    <FaChevronRight />

  </button>

</div>

        {/* C Tier */}

       <div className="tier-section c-tier">

  <div className="tier-info">

    <FaLaptop />

    <h3>C Tier</h3>

    <p>Entry Level</p>

  </div>

  <div className="tier-laptops">

    {cTier.map((laptop) => (

  <TierLaptopCard
    key={laptop.id}
    laptop={laptop}
  />

))}

  </div>

  <button className="tier-next">

    <FaChevronRight />

  </button>

</div>

      </div>

    </DashboardLayout>
  );
}

export default TierList;