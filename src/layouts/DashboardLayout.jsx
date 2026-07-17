import "./DashboardLayout.css";

import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="dashboard-content">

        {/* Topbar */}
        <Topbar />

        {/* Main Content */}
        <main className="dashboard-main">

          {children}

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;