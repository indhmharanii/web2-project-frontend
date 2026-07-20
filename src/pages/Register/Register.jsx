import "./Register.css";

import { Link, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaLaptop,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] =
    useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    // Validasi password dan konfirmasi password
    if (password !== passwordConfirmation) {
      setError("Password dan konfirmasi password tidak sama.");
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/register`,
        {
          name,
          username,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }
      );

      alert("Registrasi berhasil! Silakan login.");

      navigate("/");

    } catch (err) {
      if (err.response?.data?.errors) {
        setError(
          Object.values(err.response.data.errors)[0][0]
        );
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Gagal terhubung ke server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      {/* ================= LEFT ================= */}

      <div className="register-left">

        <div className="left-content">

          <div className="logo">

            <FaLaptop />
            <h1>TIERRA</h1>

          </div>

          <h2>
            Bergabunglah
            <br />
            bersama <span>TIERRA</span>
          </h2>

          <p>
            Bergabunglah dengan komunitas TIERRA untuk
            memberikan vote, mengajukan rekomendasi laptop,
            menyusun peringkat tier, dan membantu pengguna lain
            menemukan laptop terbaik.
          </p>

          <div className="feature">

            <FaTrophy />

            <div>

              <h4>Tier List Akurat</h4>
              <span>
                Ranking berdasarkan voting pengguna.
              </span>

            </div>

          </div>

          <div className="feature">

            <FaUsers />

            <div>

              <h4>Komunitas Aktif</h4>
              <span>
                Berbagi pengalaman bersama pengguna lain.
              </span>

            </div>

          </div>

          <div className="feature">

            <FaLaptop />

            <div>

              <h4>100% Gratis</h4>
              <span>
                Seluruh fitur dapat digunakan tanpa biaya.
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ================= RIGHT ================= */}

      <div className="register-right">

        <div className="right-content">

          <h1>Buat Akun Baru</h1>

          <p>
            Daftar dan mulai pengalaman terbaikmu di TIERRA.
          </p>

          <form onSubmit={handleRegister}>

            {error && (
              <p
                style={{
                  color: "#f87171",
                  marginBottom: "16px",
                  fontSize: "14px",
                }}
              >
                {error}
              </p>
            )}

            <label>Nama Lengkap</label>

            <div className="input-box">

              <FaUser />

              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
              />

            </div>

            <label>Username</label>

            <div className="input-box">

              <FaUser />

              <input
                type="text"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                required
              />

            </div>

            <label>Email</label>

            <div className="input-box">

              <FaEnvelope />

              <input
                type="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>

            <label>Password</label>

            <div className="input-box">

              <FaLock />

              <input
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

            </div>

            <label>Konfirmasi Password</label>

            <div className="input-box">

              <FaLock />

              <input
                type="password"
                placeholder="Konfirmasi password"
                value={passwordConfirmation}
                onChange={(e) =>
                  setPasswordConfirmation(
                    e.target.value
                  )
                }
                required
              />

            </div>

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Memproses..." : "Daftar"}
            </button>

          </form>

          <p className="login-link">

            Sudah punya akun?

            <Link to="/">
              Masuk di sini
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;