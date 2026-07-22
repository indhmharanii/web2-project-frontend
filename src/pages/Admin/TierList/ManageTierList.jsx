import "./ManageTierList.css";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaPlus, FaArrowRight, FaTrash } from "react-icons/fa";

import AdminLayout from "../../../components/Admin/Layout/AdminLayout";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TopbarAdmin from "../../../components/Admin/TopbarAdmin/TopbarAdmin";

const API_URL = import.meta.env.VITE_API_URL;

function ManageTierList() {
  const navigate = useNavigate();
  const [tierLists, setTierLists] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", min_price: "", max_price: "", description: "" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchTierLists = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/api/tier-lists`);
      setTierLists(res.data);
    } catch (err) {
      console.error("Gagal memuat tier list:", err);
    }
  }, []);

  useEffect(() => {
    fetchTierLists();
  }, [fetchTierLists]);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async () => {
    setError("");
    if (!form.title || !form.min_price || !form.max_price) {
      setError("Judul, budget minimum, dan maksimum wajib diisi.");
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${API_URL}/api/tier-lists`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setForm({ title: "", min_price: "", max_price: "", description: "" });
      setShowModal(false);
      fetchTierLists();
    } catch (err) {
      setError(err.response?.data?.message || "Gagal menyimpan tier list.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Hapus tier list ini? Semua laptop di dalamnya akan ikut terhapus.")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/api/tier-lists/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTierLists();
    } catch (err) {
      console.error("Gagal menghapus tier list:", err);
    }
  };

  return (
    <AdminLayout sidebar={<SidebarAdmin />} topbar={<TopbarAdmin />}>
      <div className="manage-tierlist-container">
        <div className="manage-tierlist-header">
          <div>
            <h1 className="manage-tierlist-title">Kelola Tier List</h1>
            <p className="manage-tierlist-subtitle">
              Buat wadah tier list berdasarkan rentang budget, lalu tambahkan laptop di dalamnya.
            </p>
          </div>

          <button type="button" className="manage-tierlist-add-button" onClick={() => setShowModal(true)}>
            <FaPlus />
            <span>Tambah Tier List</span>
          </button>
        </div>

        <div className="tierlist-grid">
          {tierLists.length === 0 ? (
            <p style={{ color: "#888" }}>Belum ada tier list. Buat yang pertama sekarang.</p>
          ) : (
            tierLists.map((tl) => (
              <div key={tl.id} className="tierlist-card">
                <div className="tierlist-card-header">
                  <h3>{tl.title}</h3>
                  <button className="tierlist-delete-btn" onClick={() => handleDelete(tl.id)}>
                    <FaTrash />
                  </button>
                </div>
                <p className="tierlist-card-range">
                  Rp{Number(tl.min_price).toLocaleString("id-ID")} - Rp{Number(tl.max_price).toLocaleString("id-ID")}
                </p>
                <p className="tierlist-card-count">{tl.laptops_count ?? 0} laptop terdaftar</p>

                <button className="tierlist-card-btn" onClick={() => navigate(`/admin/tierlist/${tl.id}`)}>
                  Kelola Laptop <FaArrowRight />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {showModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-container" style={{ maxWidth: "480px" }}>
            <div className="admin-modal-header">
              <h2>Tambah Tier List</h2>
              <button className="admin-modal-close" onClick={() => setShowModal(false)}>×</button>
            </div>

            <div className="admin-modal-content" style={{ display: "block", padding: "20px" }}>
              {error && <p style={{ color: "#f87171", fontSize: "13px", marginBottom: "10px" }}>{error}</p>}

              <div className="admin-form-group">
                <label>Judul Tier List</label>
                <input type="text" placeholder="Contoh: Laptop 5-10 Juta"
                  value={form.title} onChange={handleChange("title")} />
              </div>

              <div className="admin-form-group">
                <label>Budget Minimum (IDR)</label>
                <input type="number" placeholder="5000000"
                  value={form.min_price} onChange={handleChange("min_price")} />
              </div>

              <div className="admin-form-group">
                <label>Budget Maksimum (IDR)</label>
                <input type="number" placeholder="10000000"
                  value={form.max_price} onChange={handleChange("max_price")} />
              </div>

              <div className="admin-form-group">
                <label>Deskripsi (opsional)</label>
                <textarea placeholder="Deskripsi singkat tier list ini"
                  value={form.description} onChange={handleChange("description")} />
              </div>
            </div>

            <div className="admin-modal-footer">
              <button className="admin-btn-cancel" onClick={() => setShowModal(false)}>Batal</button>
              <button className="admin-btn-save" onClick={handleSubmit} disabled={saving}>
                {saving ? "Menyimpan..." : "Simpan"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default ManageTierList;