import "./Topbar.css";

import {
  FaSearch,
  FaBell,
  FaUserCircle
} from "react-icons/fa";

import { useLocation } from "react-router-dom";

function Topbar() {

  const location = useLocation();

  const showSearch =
    location.pathname === "/dashboard";

  return (

    <header className="topbar">

      <div
        className={`topbar-right ${
          !showSearch ? "full-width" : ""
        }`}
      >

        <div className="notification">

          <FaBell />

          <span></span>

        </div>

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