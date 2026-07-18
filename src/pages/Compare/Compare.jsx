import { useState } from "react";
import "./Compare.css";

import DashboardLayout from "../../layouts/DashboardLayout";
import laptops from "../../data/laptops";

import {
  FaBalanceScale,
  FaLaptop,
} from "react-icons/fa";

function Compare() {

  const [laptop1, setLaptop1] = useState(laptops[0]);
  const [laptop2, setLaptop2] = useState(laptops[1]);

  return (
    <DashboardLayout>

      <div className="compare-page">

        {/* ================= Breadcrumb ================= */}

        <div className="compare-breadcrumb">

          <span>Dashboard</span>

          <span>/</span>

          <span>Bandingkan Laptop</span>

        </div>

        {/* ================= Header ================= */}

        <div className="compare-header">

          <div className="compare-header-icon">

            <FaBalanceScale />

          </div>

          <div>

            <h1>BANDINGKAN LAPTOP</h1>

            <p>
              Bandingkan dua laptop untuk menemukan pilihan terbaik sesuai kebutuhanmu.
            </p>

          </div>

        </div>

        {/* ================= Statistics ================= */}

        <div className="compare-stats">

          <div className="compare-stat-card">

            <FaLaptop />

            <div>

              <h2>{laptops.length}</h2>

              <p>Total Laptop</p>

            </div>

          </div>

          <div className="compare-stat-card">

            <FaBalanceScale />

            <div>

              <h2>2</h2>

              <p>Dapat Dibandingkan</p>

            </div>

          </div>

          <div className="compare-stat-card">

            <FaLaptop />

            <div>

              <h2>4</h2>

              <p>Brand</p>

            </div>

          </div>

          <div className="compare-stat-card">

            <FaLaptop />

            <div>

              <h2>S Tier</h2>

              <p>Tier Tertinggi</p>

            </div>

          </div>

        </div>

        {/* ================= Compare Form ================= */}

        <div className="compare-box">

          <div className="compare-select">

            <label>Laptop 1</label>

            <select
              value={laptop1.id}
              onChange={(e) =>
                setLaptop1(
                  laptops.find(
                    (item) => item.id === Number(e.target.value)
                  )
                )
              }
            >

              {laptops.map((item) => (

                <option
                  key={item.id}
                  value={item.id}
                >

                  {item.name}

                </option>

              ))}

            </select>

          </div>

          <div className="compare-vs">

            VS

          </div>

          <div className="compare-select">

            <label>Laptop 2</label>

            <select
              value={laptop2.id}
              onChange={(e) =>
                setLaptop2(
                  laptops.find(
                    (item) => item.id === Number(e.target.value)
                  )
                )
              }
            >

              {laptops.map((item) => (

                <option
                  key={item.id}
                  value={item.id}
                >

                  {item.name}

                </option>

              ))}

            </select>

          </div>

        </div>

        <div className="compare-button">

          <button>

            <FaBalanceScale />

            Bandingkan Laptop

          </button>

        </div>

        {/* ================= Result ================= */}
        <div className="compare-result-title">

  <h2>Hasil Perbandingan</h2>

  <p>
    Bandingkan spesifikasi kedua laptop secara berdampingan.
  </p>

</div>

        <div className="compare-result">

          {/* Laptop 1 */}

          <div className="compare-card">

            <div className="winner-badge">

              🏆 Direkomendasikan

            </div>

            <img
              src={laptop1.image}
              alt={laptop1.name}
            />

            <h2>

              {laptop1.name}

            </h2>

            <span>

              {laptop1.category}

            </span>

            <ul>

              <li>

                <strong>Processor</strong>

                {laptop1.processor}

              </li>

              <li>

                <strong>GPU</strong>

                {laptop1.gpu}

              </li>

              <li>

                <strong>RAM</strong>

                {laptop1.ram}

              </li>

              <li>

                <strong>Storage</strong>

                {laptop1.storage}

              </li>

              <li>

                <strong>Rating</strong>

                ⭐ {laptop1.rating}

              </li>

              <li>

                <strong>Harga</strong>

                Rp {laptop1.price.toLocaleString("id-ID")}

              </li>

            </ul>

          </div>

          {/* Laptop 2 */}

          <div className="compare-card">

            <img
              src={laptop2.image}
              alt={laptop2.name}
            />

            <h2>

              {laptop2.name}

            </h2>

            <span>

              {laptop2.category}

            </span>

            <ul>

              <li>

                <strong>Processor</strong>

                {laptop2.processor}

              </li>

              <li>

                <strong>GPU</strong>

                {laptop2.gpu}

              </li>

              <li>

                <strong>RAM</strong>

                {laptop2.ram}

              </li>

              <li>

                <strong>Storage</strong>

                {laptop2.storage}

              </li>

              <li>

                <strong>Rating</strong>

                ⭐ {laptop2.rating}

              </li>

              <li>

                <strong>Harga</strong>

                Rp {laptop2.price.toLocaleString("id-ID")}

              </li>

            </ul>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Compare;