import "./Topbar.css";

import {
  FaSearch,
  FaUserCircle
} from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Topbar() {

  const location = useLocation();
  const navigate = useNavigate();

  const showSearch =
    location.pathname === "/dashboard";

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch(() => {
        // token invalid/expired, biarkan halaman lain yang handle redirect
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      });
  }, []);

  return (

    <header className="topbar">

      {showSearch && (

        <div className="topbar-search">

          <FaSearch />

          <input
            type="text"
            placeholder="Cari laptop, brand, atau kategori..."
          />

        </div>

      )}

      <div
        className={`topbar-right ${
          !showSearch ? "full-width" : ""
        }`}
      >

        <div className="profile">

          <FaUserCircle />

          <div>

            <h4>{user ? user.name : ""}</h4>

            <p>{user?.role || "User"}</p>

          </div>

        </div>

      </div>

    </header>

  );

}

export default Topbar;