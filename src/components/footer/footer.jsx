import "./Footer.css";

import {
  FaLaptop,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        {/* Logo */}

        <div className="footer-logo">

          <h2>

            <FaLaptop />

            Budget2Build

          </h2>

          <p>
            Helping you find the best laptop
            based on your budget and needs.
          </p>

          <div className="social">

            <FaFacebookF />

            <FaInstagram />

            <FaGithub />

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3>Quick Links</h3>

          <ul>

            <li>Home</li>

            <li>About</li>

            <li>Features</li>

            <li>Contact</li>

          </ul>

        </div>

        {/* Support */}

        <div>

          <h3>Support</h3>

          <ul>

            <li>Privacy Policy</li>

            <li>Terms</li>

            <li>Contact</li>

          </ul>

        </div>

        {/* Newsletter */}

        <div>

          <h3>Newsletter</h3>

          <p>Get the latest laptop recommendations.</p>

          <div className="newsletter">

            <input
              type="email"
              placeholder="Your Email"
            />

            <button>

              Subscribe

            </button>

          </div>

        </div>

      </div>

      <hr />

      <div className="copyright">

        © 2026 Budget2Build. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;