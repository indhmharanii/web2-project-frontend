import "./ManageVoting.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

import AdminLayout from "../../../components/Admin/Layout/AdminLayout";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TopbarAdmin from "../../../components/Admin/TopbarAdmin/TopbarAdmin";

const API_URL = import.meta.env.VITE_API_URL;

function ManageVoting() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null);
  const [votingDays, setVotingDays] = useState({});

  const fetchPending = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/api/submissions`, {
        params: { status: "pending_review" },
        headers: { Authorization: `Bearer ${token}` },
      });
      setSubmissions(res.data);
    } catch (err) {
      console.error("Gagal memuat usulan pending:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPending();
  }, [fetchPending]);

  const handleScreen = async (id, decision) => {
    setProcessingId(id);
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `${API_URL}/api/submissions/${id}/screen`,
        { decision, voting_days: votingDays[id] || 7 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchPending();
    } catch (err) {
      console.error("Gagal memproses usulan:", err);
      alert(err.response?.data?.message || "Gagal memproses usulan.");
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <AdminLayout sidebar={<SidebarAdmin />} topbar={<TopbarAdmin />}>
      <div className="manage-voting-container">
        <h1 className="manage-voting-title">Kelola Voting</h1>
        <p className="manage-voting-subtitle">
          Tinjau usulan dari pengguna sebelum dibuka untuk voting komunitas.
        </p>

        {loading ? (
          <p style={{ color: "#888" }}>Memuat...</p>
        ) : submissions.length === 0 ? (
          <p style={{ color: "#888" }}>Tidak ada usulan yang menunggu tinjauan.</p>
        ) : (
          <div className="voting-review-list">
            {submissions.map((s) => (
              <div key={s.id} className="voting-review-card">
                <div className="voting-review-header">
                  <div>
                    <h3>{s.name}</h3>
                    <p className="vr-meta">
                      Diajukan oleh {s.user?.name} · {dayjs(s.created_at).format("D MMM YYYY")} ·{" "}
                      {s.type === "new_laptop" ? "Laptop Baru" : "Usul Ganti Tier"} → Tier {s.proposed_tier}
                    </p>
                  </div>
                  <FaClock className="vr-pending-icon" />
                </div>

                <p className="vr-reason"><strong>Alasan:</strong> {s.reason}</p>

                <div className="vr-actions">
                  <div className="vr-days-input">
                    <label>Durasi Voting (hari)</label>
                    <input
                      type="number"
                      min="1"
                      placeholder="7"
                      value={votingDays[s.id] || ""}
                      onChange={(e) => setVotingDays({ ...votingDays, [s.id]: e.target.value })}
                    />
                  </div>

                  <button
                    className="vr-approve-btn"
                    disabled={processingId === s.id}
                    onClick={() => handleScreen(s.id, "approve")}
                  >
                    <FaCheckCircle /> Buka untuk Voting
                  </button>

                  <button
                    className="vr-reject-btn"
                    disabled={processingId === s.id}
                    onClick={() => handleScreen(s.id, "reject")}
                  >
                    <FaTimesCircle /> Tolak
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default ManageVoting;