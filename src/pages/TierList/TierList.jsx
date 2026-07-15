import "./TierList.css";

import DashboardLayout from "../../layouts/DashboardLayout";
import laptops from "../../data/laptops";

function TierList() {

  return (

    <DashboardLayout>

      <div className="tier-page">

        {/* Breadcrumb */}

        <div className="breadcrumb">

          Dashboard

          <span>/</span>

          Peringkat Laptop

        </div>

        {/* Header */}

       <section className="ranking-header">

  <div className="header-left">

    <div className="header-icon">
      🏆
    </div>

    <div>

      <h1>PERINGKAT LAPTOP</h1>

      <p>
        Peringkat laptop terbaik berdasarkan hasil voting komunitas TIERRA.
      </p>

    </div>

  </div>

</section>

        {/* Statistik */}

       <section className="ranking-stats">

  <div className="stat-card">

    <div className="stat-icon">
      💻
    </div>

    <div>

      <h2>8</h2>

      <p>Total Laptop</p>

    </div>

  </div>

  <div className="stat-card">

    <div className="stat-icon">
      👥
    </div>

    <div>

      <h2>8540</h2>

      <p>Total Vote</p>

    </div>

  </div>

  <div className="stat-card">

    <div className="stat-icon">
      ⭐
    </div>

    <div>

      <h2>4.8</h2>

      <p>Rating Rata-rata</p>

    </div>

  </div>

  <div className="stat-card">

    <div className="stat-icon">
      👑
    </div>

    <div>

      <h2>S Tier</h2>

      <p>Tier Teratas</p>

    </div>

  </div>

</section>

        {/* Top 3 */}

        <section className="top-ranking">

  <div className="section-title">

    <h2>✨ Top 3 Laptop Minggu Ini</h2>

    <p>Laptop dengan vote terbanyak minggu ini.</p>

  </div>

  <div className="top-grid">

    {laptops
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 3)
      .map((laptop, index) => (

        <div
          key={laptop.id}
          className={`top-card rank-${index + 1}`}
        >

          <div className="rank-badge">

            {index + 1}

          </div>

          <img
            src={laptop.image}
            alt={laptop.name}
          />

          <h3>{laptop.name}</h3>

          <p>{laptop.brand}</p>

          <div className="top-rating">

            ⭐ {laptop.rating}

            <span>

              {laptop.votes} Vote

            </span>

          </div>

          <div className="top-price">

            {new Intl.NumberFormat("id-ID",{
              style:"currency",
              currency:"IDR",
              maximumFractionDigits:0
            }).format(laptop.price)}

          </div>

          <button>

            Lihat Detail

          </button>

        </div>

      ))}

  </div>

</section>

        {/* Tier List */}

        <section className="tier-container">

  {/* S Tier */}

  <div className="tier-row">

    <div className="tier-label s">

      🏆

      <h2>S Tier</h2>

      <span>Best Performance</span>

    </div>

    <div className="tier-list">

      {laptops
        .filter((item) => item.tier === "S")
        .map((item) => (

          <div
            key={item.id}
            className="mini-card"
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <h4>{item.name}</h4>

            <small>{item.brand}</small>

          </div>

        ))}

    </div>

  </div>

  {/* A Tier */}

  <div className="tier-row">

    <div className="tier-label a">

      🥈

      <h2>A Tier</h2>

      <span>Recommended</span>

    </div>

    <div className="tier-list">

      {laptops
        .filter((item) => item.tier === "A")
        .map((item) => (

          <div
            key={item.id}
            className="mini-card"
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <h4>{item.name}</h4>

            <small>{item.brand}</small>

          </div>

        ))}

    </div>

  </div>

  {/* B Tier */}

  <div className="tier-row">

    <div className="tier-label b">

      🥉

      <h2>B Tier</h2>

      <span>Good Value</span>

    </div>

    <div className="tier-list">

      {laptops
        .filter((item) => item.tier === "B")
        .map((item) => (

          <div
            key={item.id}
            className="mini-card"
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <h4>{item.name}</h4>

            <small>{item.brand}</small>

          </div>

        ))}

    </div>

  </div>

</section>

      </div>

    </DashboardLayout>

  );

}

export default TierList;