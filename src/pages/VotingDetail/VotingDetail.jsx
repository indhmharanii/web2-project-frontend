import "./VotingDetail.css";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  FaStar, FaMedal, FaUsers, FaFire, FaArrowLeft,
  FaCheckCircle, FaTimesCircle, FaClock, FaThumbsUp, FaThumbsDown,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function VotingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [voting, setVoting] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

  const fetchSubmission = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/api/submissions/${id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setSubmission(res.data);
    } catch (err) {
      console.error("Gagal memuat detail voting:", err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchSubmission();
  }, [fetchSubmission]);

  useEffect(() => {
    if (!submission || submission.status !== "voting" || !submission.voting_ends_at) return;

    const interval = setInterval(() => {
      const diff = dayjs(submission.voting_ends_at).diff(dayjs());
      if (diff <= 0) {
        setTimeLeft("Voting telah berakhir");
        clearInterval(interval);
        fetchSubmission();
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      setTimeLeft(`${d} hari ${h} jam ${m} menit lagi`);
    }, 1000 * 30);

    return () => clearInterval(interval);
  }, [submission, fetchSubmission]);

  const handleVote = async (voteType) => {
    setError("");
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Kamu harus login untuk memberi suara.");
      return;
    }

    setVoting(true);
    try {
      await axios.post(
        `${API_URL}/api/submissions/${id}/vote`,
        { vote_type: voteType },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchSubmission();
    } catch (err) {
      setError(err.response?.data?.message || "Gagal memberi suara.");
    } finally {
      setVoting(false);
    }
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(price);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="not-found"><p>Memuat...</p></div>
      </DashboardLayout>
    );
  }

  if (!submission) {
    return (
      <DashboardLayout>
        <div className="not-found">
          <h1>404</h1>
          <p>Data voting tidak ditemukan.</p>
        </div>
      </DashboardLayout>
    );
  }

  const isOwner = submission.user_id === currentUser.id;
  const canVote = submission.status === "voting" && !isOwner;

  return (
    <DashboardLayout>
      <div className="voting-detail-page">
        <div className="breadcrumb">
          Dashboard <span>/</span> Voting <span>/</span> {submission.name}
        </div>

        <div className="voting-detail-card">
          <div className="voting-detail-left">
            <div className="voting-image-wrapper">
              <img
                 src={submission.image_url || submission.related_laptop?.image_url || "https://via.placeholder.com/300"}
                 alt={submission.name}
                />
            </div>
          </div>

          <div className="voting-detail-right">
            <span className="voting-badge">{submission.category || "Tidak dikategorikan"}</span>
            <h1>{submission.name}</h1>

            <div className="voting-rating">
              <FaStar />
              <span>Diusulkan ke Tier {submission.proposed_tier}</span>
            </div>

            <h2>{formatPrice(submission.price)}</h2>
            <div className="price-divider"></div>

            <div className="voting-info-box">
              <div className="voting-mini-card">
                <FaMedal />
                <div><small>Tier Diajukan</small><h4>{submission.proposed_tier}</h4></div>
              </div>
              <div className="voting-mini-card">
                <FaUsers />
                <div><small>Total Suara</small><h4>{(submission.upvotes ?? 0) + (submission.downvotes ?? 0)}</h4></div>
              </div>
              <div className="voting-mini-card">
                <FaFire />
                <div><small>Tipe Usulan</small><h4>{submission.type === "new_laptop" ? "Laptop Baru" : "Ganti Tier"}</h4></div>
              </div>
            </div>
          </div>
        </div>

        {/* STATUS BANNER */}
        <div className="voting-status-card">
          <div className="status-icon">
            {submission.status === "approved" && <FaCheckCircle />}
            {submission.status === "rejected" && <FaTimesCircle />}
            {submission.status === "voting" && <FaClock />}
          </div>
          <div className="status-content">
            {submission.status === "voting" && (
              <>
                <h2>Voting Sedang Berlangsung</h2>
                <p>{timeLeft || "Menghitung waktu..."}</p>
              </>
            )}
            {submission.status === "approved" && (
              <>
                <h2>Usulan Disetujui Komunitas</h2>
                <p>
                  Mayoritas voter setuju dengan usulan ini
                  {submission.type === "tier_change" && submission.related_laptop && (
                    <> — <strong>{submission.related_laptop.name}</strong> kini berada di <strong>Tier {submission.proposed_tier}</strong>.</>
                  )}
                </p>
              </>
            )}
            {submission.status === "rejected" && (
              <>
                <h2>Usulan Ditolak</h2>
                <p>Usulan ini tidak disetujui mayoritas voter atau ditolak oleh admin.</p>
              </>
            )}
          </div>
        </div>

        {/* VOTE BUTTONS */}
        {submission.status === "voting" && (
          <div className="voting-section">
            <h3>Berikan Suaramu</h3>

            {error && <p style={{ color: "#f87171", fontSize: "13px" }}>{error}</p>}

            {isOwner ? (
              <p style={{ color: "#888" }}>Kamu tidak bisa vote usulan milikmu sendiri.</p>
            ) : (
              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  onClick={() => handleVote("up")}
                  disabled={voting}
                  className={submission.my_vote === "up" ? "back-voting-btn" : "back-voting-btn"}
                  style={{
                    background: submission.my_vote === "up" ? "#10B981" : "#111827",
                    color: "#fff", flex: 1, display: "flex", alignItems: "center",
                    justifyContent: "center", gap: "8px",
                  }}
                >
                  <FaThumbsUp /> Setuju ({submission.upvotes ?? 0})
                </button>

                <button
                  onClick={() => handleVote("down")}
                  disabled={voting}
                  style={{
                    background: submission.my_vote === "down" ? "#f87171" : "#111827",
                    color: "#fff", flex: 1, display: "flex", alignItems: "center",
                    justifyContent: "center", gap: "8px", border: "none", borderRadius: "10px", padding: "12px", cursor: "pointer",
                  }}
                >
                  <FaThumbsDown /> Tidak Setuju ({submission.downvotes ?? 0})
                </button>
              </div>
            )}
          </div>
        )}

        {/* SPESIFIKASI (kalau ada) */}
        {submission.processor && (
          <div className="voting-section">
            <h3>Spesifikasi Laptop</h3>
            <div className="voting-spec-grid">
              <div className="voting-spec-card"><small>Processor</small><h4>{submission.processor}</h4></div>
              <div className="voting-spec-card"><small>Graphics</small><h4>{submission.graphics}</h4></div>
              <div className="voting-spec-card"><small>RAM</small><h4>{submission.ram}</h4></div>
              <div className="voting-spec-card"><small>Storage</small><h4>{submission.storage}</h4></div>
              <div className="voting-spec-card"><small>Battery</small><h4>{submission.battery}</h4></div>
              <div className="voting-spec-card"><small>Weight</small><h4>{submission.weight}</h4></div>
            </div>
          </div>
        )}

        <div className="voting-section">
          <h3>Alasan Pengajuan</h3>
          <div className="voting-description-card">
            <p>{submission.reason}</p>
          </div>
        </div>

        <div className="voting-section">
          <h3>Riwayat Usulan</h3>
          <div className="voting-history-card">
            <div className="history-item">
              <span>Status</span>
              <strong className={submission.status === "approved" ? "approve-text" : ""}>
                {submission.status === "voting" && "Sedang Voting"}
                {submission.status === "approved" && "Disetujui"}
                {submission.status === "rejected" && "Ditolak"}
              </strong>
            </div>
            <div className="history-item">
              <span>Pengaju</span>
              <strong>{submission.user?.name || "Pengguna"}</strong>
            </div>
            <div className="history-item">
              <span>Tanggal Pengajuan</span>
              <strong>{dayjs(submission.created_at).format("D MMMM YYYY")}</strong>
            </div>
            {submission.finalized_at && (
              <div className="history-item">
                <span>Tanggal Selesai</span>
                <strong>{dayjs(submission.finalized_at).format("D MMMM YYYY")}</strong>
              </div>
            )}
          </div>
        </div>

        <div className="voting-action">
          <button className="back-voting-btn" onClick={() => navigate("/vote")}>
            <FaArrowLeft />
            Kembali ke Voting
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default VotingDetail;