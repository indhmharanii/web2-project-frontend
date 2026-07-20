import "./Topbar.css";

import {
  FaSearch,
  FaUserCircle
} from "react-icons/fa";

import { useLocation } from "react-router-dom";

function Topbar() {

  const location = useLocation();

  const showSearch =
    location.pathname === "/dashboard";

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

            <h4>Rani</h4>

            <p>User</p>

          </div>

        </div>

      </div>

    </header>

  );

}

export default Topbar;