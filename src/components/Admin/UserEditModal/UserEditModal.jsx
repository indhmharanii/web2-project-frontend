import "./UserEditModal.css";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function UserEditModal({ open, onClose, user, onSuccess }) {
  const [role, setRole] = useState("user");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) setRole(user.role);
  }, [user]);

  const handleSave = async () => {
    setError("");
    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `${API_URL}/api/admin/users/${user.id}`,
        { role },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onSuccess?.();
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Gagal menyimpan perubahan.");
    } finally {
      setSaving(false);
    }
  };

  if (!open || !user) return null;

  return (
    <div className="user-edit-overlay">
      <div className="user-edit-modal">
        <h2>Edit User</h2>

        {error && <p style={{ color: "#f87171", fontSize: "13px" }}>{error}</p>}

        <div className="user-edit-form">
          <div className="user-edit-group">
            <label>Nama Lengkap</label>
            <input type="text" value={user.name} disabled />
          </div>

          <div className="user-edit-group">
            <label>Email</label>
            <input type="email" value={user.email} disabled />
          </div>

          <div className="user-edit-group">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        <div className="user-edit-footer">
          <button type="button" className="cancel-user-btn" onClick={onClose}>
            Batal
          </button>
          <button type="button" className="save-user-btn" onClick={handleSave} disabled={saving}>
            {saving ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserEditModal;