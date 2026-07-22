import "./Voting.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import VotingCard from "../../components/VotingCard/VotingCard";

import {
  FaVoteYea,
  FaSearch,
  FaClock,
  FaCheckCircle,
  FaPlus,
  FaListAlt,
} from "react-icons/fa";

function Voting() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <DashboardLayout>
      <div className="voting-page">

        {/* ================= BREADCRUMB ================= */}

        <div className="breadcrumb">
          <span>Dashboard</span>
          <p>/</p>
          <span>Voting</span>
        </div>

        {/* ================= HEADER ================= */}

        <div className="page-header">

          <div className="header-left">

            <div className="page-icon">
              <FaVoteYea />
            </div>

            <div className="title-wrapper">

              <h1>Voting Laptop</h1>

              <p>
                Lihat seluruh laptop yang telah diajukan,
                pantau status voting, dan berikan suara
                untuk membantu menentukan laptop terbaik.
              </p>

            </div>

          </div>

        </div>

        {/* ================= STATS ================= */}

        <div className="voting-stats">

          <div className="voting-stat-card">

            <FaListAlt />

            <div>
              <h2>Semua</h2>
              <p>Daftar Voting</p>
            </div>

          </div>

          <div className="voting-stat-card">

            <FaClock />

            <div>
              <h2>Pending</h2>
              <p>Menunggu Persetujuan</p>
            </div>

          </div>

          <div className="voting-stat-card">

            <FaCheckCircle />

            <div>
              <h2>Approve</h2>
              <p>Sudah Disetujui</p>
            </div>

          </div>

        </div>

        {/* ================= SEARCH ================= */}

        <div className="voting-search">

          <FaSearch />

          <input
            type="text"
            placeholder="Cari laptop..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* ================= TOOLBAR ================= */}

        <div className="voting-toolbar">

          <div className="status-filter">

            <button
              className={activeFilter === "all" ? "active" : ""}
              onClick={() => setActiveFilter("all")}
            >
              Semua
            </button>

            <button
              className={activeFilter === "pending" ? "active" : ""}
              onClick={() => setActiveFilter("pending")}
            >
              <FaClock />
              Pending
            </button>

            <button
              className={activeFilter === "approve" ? "active" : ""}
              onClick={() => setActiveFilter("approve")}
            >
              <FaCheckCircle />
              Approve
            </button>

          </div>

          <button
            className="add-vote-btn"
            onClick={() => navigate("/laptop")}
          >
            <FaPlus />
            Ajukan Vote
          </button>

        </div>

        {/* ================= RESULT ================= */}

        <div className="voting-result-header">

          <div>

            <h2>Daftar Voting</h2>

            <p>
              Pilih laptop yang ingin Anda lihat atau berikan suara.
            </p>

          </div>

        </div>

        {/* ================= GRID ================= */}

        <div className="voting-grid">

          <VotingCard />

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Voting;