import "./Review.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";
import { FaStar, FaUserCircle, FaEdit, FaTrash } from "react-icons/fa";

dayjs.extend(relativeTime);
dayjs.locale("id");

const API_URL = import.meta.env.VITE_API_URL;

function Review({ laptopId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);

  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

  const fetchComments = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/api/laptops/${laptopId}/comments`);
      setComments(res.data);

      // kalau user yang login udah pernah ngulas, isi form dengan data lamanya (mode edit)
      const myComment = res.data.find((c) => c.user_id === currentUser.id);
      if (myComment) {
        setContent(myComment.content);
        setRating(myComment.rating || 0);
        setEditingId(myComment.id);
      }
    } catch (err) {
      console.error("Gagal memuat ulasan:", err);
    } finally {
      setLoading(false);
    }
  }, [laptopId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleSubmit = async () => {
    setError("");

    if (!content.trim()) {
      setError("Komentar tidak boleh kosong.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Kamu harus login untuk memberi ulasan.");
      return;
    }

    setSending(true);
    try {
      await axios.post(
        `${API_URL}/api/laptops/${laptopId}/comments`,
        { content, rating: rating || undefined },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      fetchComments();
    } catch (err) {
      setError(err.response?.data?.message || "Gagal mengirim ulasan.");
    } finally {
      setSending(false);
    }
  };

  const handleDelete = async () => {
    if (!editingId) return;
    if (!confirm("Hapus ulasanmu?")) return;

    const token = localStorage.getItem("token");
    try {
      await axios.delete(`${API_URL}/api/comments/${editingId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setContent("");
      setRating(0);
      setEditingId(null);
      fetchComments();
    } catch (err) {
      console.error("Gagal menghapus ulasan:", err);
    }
  };

  return (
    <div className="review-section">
      <div className="review-form">
        <h3>{editingId ? "Edit Ulasanmu" : "Tulis Ulasan"}</h3>

        {error && <p style={{ color: "#f87171", fontSize: "13px" }}>{error}</p>}

        <label>Rating</label>
        <div className="review-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              style={{
                cursor: "pointer",
                color: star <= (hoverRating || rating) ? "#F59E0B" : "#4B5563",
              }}
            />
          ))}
        </div>

        <label>Komentar</label>
        <textarea
          placeholder="Bagikan pengalamanmu menggunakan laptop ini..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

          <div className="review-form-actions">
          <button className="review-submit-btn" onClick={handleSubmit} disabled={sending}>
            {sending ? "Mengirim..." : editingId ? "Update Ulasan" : "Kirim Ulasan"}
          </button>

          {editingId && (
            <button className="review-delete-btn" onClick={handleDelete}>
              Hapus
            </button>
          )}
        </div>
      </div>

      <div className="review-list">
        <h3>Ulasan Pengguna ({comments.length})</h3>

        {loading ? (
          <p style={{ color: "#888" }}>Memuat ulasan...</p>
        ) : comments.length === 0 ? (
          <p style={{ color: "#888" }}>Belum ada ulasan untuk laptop ini.</p>
        ) : (
          comments.map((item) => {
            const isMine = item.user_id === currentUser.id;

            return (
              <div key={item.id} className="review-item">
                <div className="review-item-header">
                  <FaUserCircle className="review-avatar" />
                  <div>
                    <h4>
                      {item.user?.name || "Pengguna"}
                      {isMine && <span style={{ color: "#3B82F6", fontSize: "11px", marginLeft: "6px" }}>(Kamu)</span>}
                    </h4>
                    <span>{dayjs(item.created_at).fromNow()}</span>
                  </div>

                  {item.rating && (
                    <div className="review-item-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          style={{ color: star <= item.rating ? "#F59E0B" : "#4B5563" }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <p className="review-item-content">{item.content}</p>

                {isMine && (
                  <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                    <button
                      onClick={() => {
                        setContent(item.content);
                        setRating(item.rating || 0);
                        setEditingId(item.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      style={{ background: "transparent", border: "none", color: "#3B82F6", fontSize: "12px", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={handleDelete}
                      style={{ background: "transparent", border: "none", color: "#f87171", fontSize: "12px", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
                    >
                      <FaTrash /> Hapus
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Review;