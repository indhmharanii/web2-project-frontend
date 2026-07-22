import "./TopbarAdmin.css";

import { FaSearch } from "react-icons/fa";

function TopbarAdmin() {
  return (
    <div className="admin-topbar-wrapper">

      {/* LEFT */}
      <div className="admin-topbar-left-section">

        <h2 className="admin-topbar-heading">
          Dashboard
        </h2>

        <p className="admin-topbar-path">
          Dashboard / Overview
        </p>

      </div>

      {/* RIGHT */}
      <div className="admin-topbar-right-section">

        <div className="admin-topbar-user">

          <div className="admin-topbar-user-avatar">
            A
          </div>

          <div className="admin-topbar-user-info">

            <h4>Administrator</h4>

            <span>Admin TIERRA</span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TopbarAdmin;