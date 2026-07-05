import "./Login.css";
import laptop from "../../assets/images/rog.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah form refresh

    // Nanti di sini akan ditambahkan validasi login dari backend

    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="left-side">
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
          Website berbasis AI ini membantu Anda menemukan
          rekomendasi laptop sesuai dengan anggaran dan kebutuhan.
          Biarkan AI kami membantu Anda menemukan laptop yang paling tepat.
        </p>
      </div>

      <div className="right-side">
        <div className="login-card">

          <h2>Masuk</h2>

          <form onSubmit={handleLogin}>

            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Masukkan email Anda"
                required
              />
            </div>

            <div className="input-group">
              <label>Kata Sandi</label>

              <input
                type="password"
                placeholder="Masukkan kata sandi"
                required
              />
            </div>

            <div className="remember">

              <label>

                <input type="checkbox" />

                Ingat Saya

              </label>

              <a href="#">

                Lupa Kata Sandi?

              </a>

            </div>

            <button type="submit">

              Masuk

            </button>

            <div className="or">

              <span>atau lanjutkan dengan</span>

            </div>

            <button
              type="button"
              className="google"
            >
              Lanjutkan dengan Google
            </button>

            <p className="signup">
              Belum memiliki akun?

              <span
                onClick={() => navigate("/register")}
                style={{ cursor: "pointer" }}
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