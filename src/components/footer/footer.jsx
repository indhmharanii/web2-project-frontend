import "./Footer.css";

import {
  FaLaptop,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-grid">

        {/* Logo */}

        <div className="footer-logo">

          <h2>
            <FaLaptop />
            TIERRA
          </h2>

          <p>
            TIERRA merupakan platform komunitas yang membantu pengguna
            menemukan laptop terbaik melalui sistem voting, tier list,
            rekomendasi, dan ulasan dari pengguna lainnya.
          </p>

          <div className="social">

            <FaFacebookF />

            <FaInstagram />

            <FaGithub />

          </div>

        </div>

        {/* Menu */}

        <div className="footer-menu">

          <h3>Menu</h3>

          <ul>

            <li>Beranda</li>

            <li>Tentang</li>

            <li>Laptop Populer</li>

            <li>Ulasan Pengguna</li>

          </ul>

        </div>

        {/* Informasi */}

        <div className="footer-info">

          <h3>Informasi</h3>

          <ul>

            <li>Kebijakan Privasi</li>

            <li>Syarat & Ketentuan</li>

            <li>Pusat Bantuan</li>

          </ul>

        </div>

        {/* Hubungi */}

        <div className="footer-contact">

          <h3>Hubungi Kami</h3>

          <p>
            Memiliki pertanyaan atau saran mengenai TIERRA?
            Hubungi kami melalui email berikut.
          </p>

          <div className="contact-box">

            <FaEnvelope />

            <span>tierra.support@gmail.com</span>

          </div>

        </div>

      </div>

      <hr />

      <div className="copyright">

        © 2026 TIERRA • Dibuat untuk Mata Kuliah Pemrograman Web II

      </div>

    </footer>
  );
}

export default Footer;