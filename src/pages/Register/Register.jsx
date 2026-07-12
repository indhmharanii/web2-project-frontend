import "./Register.css";

import { Link } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaLaptop,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

function Register() {
  return (
    <div className="register-page">

      {/* ================= LEFT ================= */}

      <div className="register-left">

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
          Platform voting laptop berbasis komunitas
          untuk membantu pengguna menemukan laptop
          terbaik sesuai kebutuhan.
        </p>

        <div className="feature">

          <FaTrophy />

          <div>

            <h4>Tier List Akurat</h4>

            <span>Ranking berdasarkan voting pengguna.</span>

          </div>

        </div>

        <div className="feature">

          <FaUsers />

          <div>

            <h4>Komunitas Aktif</h4>

            <span>Berbagi pengalaman bersama pengguna lain.</span>

          </div>

        </div>

        <div className="feature">

          <FaLaptop />

          <div>

            <h4>100% Gratis</h4>

            <span>Seluruh fitur dapat digunakan tanpa biaya.</span>

          </div>

        </div>

      </div>

      {/* ================= RIGHT ================= */}

      <div className="register-right">

        <h1>Buat Akun Baru</h1>

        <p>
          Daftar dan mulai pengalaman terbaikmu di TIERRA.
        </p>

        <form>

          <label>Nama Lengkap</label>

          <div className="input-box">

            <FaUser />

            <input
              type="text"
              placeholder="Masukkan nama lengkap"
            />

          </div>

          <label>Username</label>

          <div className="input-box">

            <FaUser />

            <input
              type="text"
              placeholder="Masukkan username"
            />

          </div>

          <label>Email</label>

          <div className="input-box">

            <FaEnvelope />

            <input
              type="email"
              placeholder="Masukkan email"
            />

          </div>

          <label>Password</label>

          <div className="input-box">

            <FaLock />

            <input
              type="password"
              placeholder="Masukkan password"
            />

          </div>

          <label>Konfirmasi Password</label>

          <div className="input-box">

            <FaLock />

            <input
              type="password"
              placeholder="Konfirmasi password"
            />

          </div>

          <button type="submit">

            Daftar

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
  );
}

export default Register;