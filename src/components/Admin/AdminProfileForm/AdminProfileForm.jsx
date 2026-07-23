import "./AdminProfileForm.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function AdminProfileForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${API_URL}/api/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setForm({
          name: res.data.name || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
        });
        setAvatarUrl(res.data.avatar_url);
      })
      .catch((err) => console.error("Gagal memuat profil admin:", err));
  }, []);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleCancel = () => {
    setNewPassword("");
    setCurrentPassword("");
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword && !currentPassword) {
      setError("Masukkan password saat ini untuk mengubah password.");
      return;
    }

    setSaving(true);
    const token = localStorage.getItem("token");

    try {
      const formData = new FormData();
      formData.append("_method", "PUT");
      formData.append("name", form.name);
      formData.append("phone", form.phone || "");

      const res = await axios.post(`${API_URL}/api/profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      localStorage.setItem("user", JSON.stringify(res.data));

      if (newPassword) {
        await axios.post(
          `${API_URL}/api/profile/password`,
          {
            current_password: currentPassword,
            password: newPassword,
            password_confirmation: newPassword,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setNewPassword("");
        setCurrentPassword("");
      }

      setSuccess("Profil berhasil diperbarui.");
    } catch (err) {
      setError(err.response?.data?.message || "Gagal menyimpan perubahan.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-profile-card">
      <div className="admin-profile-top">
        <div className="admin-profile-avatar">
          {avatarUrl ? <img src={avatarUrl} alt="Avatar" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} /> : <FaUserCircle />}
        </div>
        <h2>{form.name || "Administrator"}</h2>
        <p>{form.email}</p>
      </div>

      <form className="admin-profile-form" onSubmit={handleSubmit}>
        {error && <p style={{ color: "#f87171", fontSize: "13px" }}>{error}</p>}
        {success && <p style={{ color: "#10B981", fontSize: "13px" }}>{success}</p>}

        <div className="admin-profile-grid">
          <div className="admin-form-group">
            <label>Nama Lengkap</label>
            <input type="text" value={form.name} onChange={handleChange("name")} />
          </div>

          <div className="admin-form-group">
            <label>Email</label>
            <input type="email" value={form.email} disabled title="Email tidak dapat diubah" />
          </div>

          <div className="admin-form-group">
            <label>Nomor HP</label>
            <input type="text" value={form.phone} onChange={handleChange("phone")} placeholder="Opsional" />
          </div>

          <div className="admin-form-group">
            <label>Password Saat Ini</label>
            <input
              type="password"
              placeholder="Wajib diisi jika ganti password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div className="admin-form-group full-width">
            <label>Password Baru</label>
            <input
              type="password"
              placeholder="Masukkan password baru (opsional)"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="admin-profile-button">
          <button type="button" className="profile-cancel-button" onClick={handleCancel}>
            Batal
          </button>

          <button type="submit" className="profile-save-button" disabled={saving}>
            {saving ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminProfileForm;