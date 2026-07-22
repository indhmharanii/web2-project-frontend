import "./EditProfile.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import profile from "../../assets/images/profile.jpg";

import {
  FaUserEdit,
  FaCamera,
  FaSave,
  FaArrowLeft,
} from "react-icons/fa";

function EditProfile() {

  const navigate = useNavigate();

  const [photo, setPhoto] = useState(profile);

  // ==========================
  // AMBIL DATA USER YANG LOGIN
  // ==========================
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return null;
  }

  const handlePhotoChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      setPhoto(URL.createObjectURL(file));

    }

  };

  const handleCancel = () => {

    navigate("/profile");

  };

  const handleSave = (e) => {

    e.preventDefault();

    // NOTE: ini masih demo, belum kirim perubahan ke backend.
    // Perlu endpoint khusus (misalnya PUT /api/profile) kalau mau benar-benar update data.
    alert("Profil berhasil diperbarui (Demo UI)");

    navigate("/profile");

  };

  return (

    <DashboardLayout>

      <div className="edit-profile-page">

        {/* Breadcrumb */}

        <div className="edit-breadcrumb">

          <span>Dashboard</span>

          <span>/</span>

          <span>Profile</span>

          <span>/</span>

          <span>Edit Profile</span>

        </div>

        {/* Header */}

        <div className="edit-header">

          <div className="edit-header-icon">

            <FaUserEdit />

          </div>

          <div>

            <h1>EDIT PROFILE</h1>

            <p>Perbarui informasi akunmu.</p>

          </div>

        </div>

        {/* Card */}

        <div className="edit-card">

          {/* Upload Foto */}

          <div className="profile-upload">

            <img
              src={photo}
              alt="Profile"
            />

            <input
              type="file"
              id="upload-photo"
              accept="image/*"
              hidden
              onChange={handlePhotoChange}
            />

            <label
              htmlFor="upload-photo"
              className="upload-btn"
            >

              <FaCamera />

              Ganti Foto

            </label>

          </div>

          {/* Form */}

          <form
            className="edit-form"
            onSubmit={handleSave}
          >
            <h2 className="form-title">

              Informasi Akun

            </h2>

            <div className="input-group">

              <label>Nama Lengkap</label>

              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                defaultValue={user.name}
                required
              />

            </div>

            <div className="input-group">

              <label>Email</label>

              <input
                type="email"
                placeholder="Masukkan email"
                defaultValue={user.email}
                required
              />

            </div>

            <div className="input-group">

              <label>Nomor HP</label>

              <input
                type="text"
                placeholder="Masukkan nomor HP"
                defaultValue={user.phone || ""}
                required
              />

            </div>

            <div className="input-group">

              <label>Lokasi</label>

              <input
                type="text"
                placeholder="Masukkan lokasi"
                defaultValue={user.location || ""}
                required
              />

            </div>

            <div className="edit-buttons">

              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >

                <FaArrowLeft />

                Batal

              </button>

              <button
                type="submit"
                className="save-btn"
              >

                <FaSave />

                Simpan

              </button>

            </div>

          </form>

        </div>

      </div>

    </DashboardLayout>

  );

}

export default EditProfile;