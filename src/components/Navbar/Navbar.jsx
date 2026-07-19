import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const scrollTo = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

  };

  return (

    <nav className="navbar">

      <div
        className="logo"
        onClick={() => scrollTo("home")}
      >

        TIERRA

      </div>

      <ul>

        <li
          className="active"
          onClick={() => scrollTo("home")}
        >
          Beranda
        </li>

        <li
          onClick={() => scrollTo("about")}
        >
          Tentang
        </li>

        <li
          onClick={() => scrollTo("features")}
        >
          Fitur
        </li>

        <li
          onClick={() => scrollTo("popular")}
        >
          Laptop Populer
        </li>

        <li
          onClick={() => scrollTo("contact")}
        >
          Kontak
        </li>

      </ul>

      <button
        onClick={() => navigate("/")}
      >

        Masuk

      </button>

    </nav>

  );

}

export default Navbar;