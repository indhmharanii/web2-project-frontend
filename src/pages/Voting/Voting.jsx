import "./Voting.css";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import DashboardLayout from "../../layouts/DashboardLayout";
import VotingCard from "../../components/VotingCard/VotingCard";

import { FaVoteYea, FaSearch, FaClock, FaCheckCircle, FaPlus, FaListAlt } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function Voting() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    try {
      const params = {};
      if (activeFilter === "voting") params.status = "voting";
      if (activeFilter === "approved") params.status = "approved";

      const res = await axios.get(`${API_URL}/api/submissions`, { params });
      setSubmissions(res.data);
    } catch (err) {
      console.error("Gagal memuat data voting:", err);
    } finally {
      setLoading(false);
    }
  }, [activeFilter]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const filtered = submissions.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalVoting = submissions.filter((s) => s.status === "voting").length;
  const totalApproved = submissions.filter((s) => s.status === "approved").length;

  return (
    <DashboardLayout>
      <div className="voting-page">
        <div className="breadcrumb">
          <span>Dashboard</span>
          <p>/</p>
          <span>Voting</span>
        </div>

        <div className="page-header">
          <div className="header-left">
            <div className="page-icon">
              <FaVoteYea />
            </div>
            <div className="title-wrapper">
              <h1>Voting Laptop</h1>
              <p>
                Lihat seluruh laptop yang telah diajukan, pantau status voting, dan berikan
                suara untuk membantu menentukan laptop terbaik.
              </p>
            </div>
          </div>
        </div>

        <div className="voting-stats">
          <div className="voting-stat-card">
            <FaListAlt />
            <div>
              <h2>{submissions.length}</h2>
              <p>Daftar Voting</p>
            </div>
          </div>

          <div className="voting-stat-card">
            <FaClock />
            <div>
              <h2>{totalVoting}</h2>
              <p>Sedang Berlangsung</p>
            </div>
          </div>

          <div className="voting-stat-card">
            <FaCheckCircle />
            <div>
              <h2>{totalApproved}</h2>
              <p>Sudah Disetujui</p>
            </div>
          </div>
        </div>

        <div className="voting-search">
          <FaSearch />
          <input
            type="text"
            placeholder="Cari laptop..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="voting-toolbar">
          <div className="status-filter">
            <button className={activeFilter === "all" ? "active" : ""} onClick={() => setActiveFilter("all")}>
              Semua
            </button>
            <button className={activeFilter === "voting" ? "active" : ""} onClick={() => setActiveFilter("voting")}>
              <FaClock />
              Sedang Voting
            </button>
            <button className={activeFilter === "approved" ? "active" : ""} onClick={() => setActiveFilter("approved")}>
              <FaCheckCircle />
              Disetujui
            </button>
          </div>

          <button className="add-vote-btn" onClick={() => navigate("/recommendation")}>
            <FaPlus />
            Ajukan Vote
          </button>
        </div>

        <div className="voting-result-header">
          <div>
            <h2>Daftar Voting</h2>
            <p>Pilih laptop yang ingin Anda lihat atau berikan suara.</p>
          </div>
        </div>

        <div className="voting-grid">
          {loading ? (
            <p style={{ color: "#888" }}>Memuat data voting...</p>
          ) : filtered.length === 0 ? (
            <p style={{ color: "#888" }}>Belum ada usulan voting.</p>
          ) : (
            filtered.map((item) => <VotingCard key={item.id} submission={item} />)
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Voting;