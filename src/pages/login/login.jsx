import "./Login.css";
import laptop from "../../assets/images/rog.png";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          email,
          password,
        }
      );

      const { user, token } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      // ==========================
      // LOGIN BERHASIL — redirect sesuai role
      // ==========================

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

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
    <div className="login-container">

      {/* ================= LEFT ================= */}

      <div className="left-side">

        <button
          className="back-home"
          onClick={() => navigate("/home")}
        >

          <FaArrowLeft />

          Kembali ke Beranda

        </button>

        <div className="grid-bg"></div>

        <img
          src={laptop}
          alt="Laptop"
          className="laptop-image"
        />

        <h1>

          Halo.

          <br />

          <span>Selamat Datang Kembali!</span>

        </h1>

        <p>

          Temukan laptop terbaik sesuai kebutuhanmu melalui rekomendasi komunitas, 
          sistem voting, peringkat tier,serta ulasan dari pengguna TIERRA.

        </p>

      </div>

      {/* ================= RIGHT ================= */}

      <div className="right-side">

        <div className="login-card">

          <h2>Masuk</h2>

          <form onSubmit={handleLogin}>

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

            <div className="input-group">

              <label>Email</label>

              <input
                type="email"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>

            <div className="input-group">

              <label>Kata Sandi</label>

              <input
                type="password"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

            </div>

            <button
              type="submit"
              disabled={loading}
            >

              {loading
                ? "Memproses..."
                : "Masuk"}

            </button>

            <p className="signup">

              Belum memiliki akun?

              <span
                onClick={() =>
                  navigate("/register")
                }
                style={{
                  cursor: "pointer",
                  color: "#3B82F6",
                  fontWeight: "600",
                }}
              >

                {" "}
                Daftar

              </span>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;