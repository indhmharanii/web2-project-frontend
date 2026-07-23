import "./EditProfile.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import DashboardLayout from "../../layouts/DashboardLayout";
import profile from "../../assets/images/profile.jpg";

import { FaUserEdit, FaCamera, FaSave, FaArrowLeft } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function EditProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setForm({
        name: parsed.name || "",
        email: parsed.email || "",
        phone: parsed.phone || "",
        location: parsed.location || "",
      });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return null;
  }

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) {
      setError("Nama lengkap wajib diisi.");
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("_method", "PUT");
      formData.append("name", form.name);
      formData.append("phone", form.phone || "");
      formData.append("location", form.location || "");
      if (photoFile) formData.append("avatar", photoFile);

      const res = await axios.post(`${API_URL}/api/profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/profile");
    } catch (err) {
      setError(err.response?.data?.message || "Gagal menyimpan perubahan.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="edit-profile-page">
        <div className="edit-breadcrumb">
          <span>Dashboard</span>
          <span>/</span>
          <span>Profile</span>
          <span>/</span>
          <span>Edit Profile</span>
        </div>

        <div className="edit-header">
          <div className="edit-header-icon">
            <FaUserEdit />
          </div>
          <div>
            <h1>EDIT PROFILE</h1>
            <p>Perbarui informasi akunmu.</p>
          </div>
        </div>

        <div className="edit-card">
          <div className="profile-upload">
            <img src={photoPreview || user.avatar_url || profile} alt="Profile" />

            <input
              type="file"
              id="upload-photo"
              accept="image/*"
              hidden
              onChange={handlePhotoChange}
            />

            <label htmlFor="upload-photo" className="upload-btn">
              <FaCamera />
              Ganti Foto
            </label>
          </div>

          <form className="edit-form" onSubmit={handleSave}>
            <h2 className="form-title">Informasi Akun</h2>

            {error && <p style={{ color: "#f87171", fontSize: "13px" }}>{error}</p>}

            <div className="input-group">
              <label>Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                value={form.name}
                onChange={handleChange("name")}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Masukkan email"
                value={form.email}
                disabled
                title="Email tidak dapat diubah"
              />
            </div>

            <div className="input-group">
              <label>Nomor HP <span style={{ color: "#6B7280", fontWeight: "normal" }}>(opsional)</span></label>
              <input
                type="text"
                placeholder="Masukkan nomor HP"
                value={form.phone}
                onChange={handleChange("phone")}
              />
            </div>

            <div className="input-group">
              <label>Lokasi <span style={{ color: "#6B7280", fontWeight: "normal" }}>(opsional)</span></label>
              <input
                type="text"
                placeholder="Masukkan lokasi"
                value={form.location}
                onChange={handleChange("location")}
              />
            </div>

            <div className="edit-buttons">
              <button type="button" className="cancel-btn" onClick={handleCancel}>
                <FaArrowLeft />
                Batal
              </button>

              <button type="submit" className="save-btn" disabled={saving}>
                <FaSave />
                {saving ? "Menyimpan..." : "Simpan"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default EditProfile;