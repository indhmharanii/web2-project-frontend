import DashboardLayout from "../../layouts/DashboardLayout";

import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import Stats from "../../components/Stats/Stats";
import TierPreview from "../../components/TierPreview/TierPreview";

import Activity from "../../components/Activity/Activity";
import QuickAction from "../../components/QuickAction/QuickAction";

import "./Dashboard.css";

function Dashboard() {
  return (
    <DashboardLayout>

      <div className="dashboard-grid">

        <div className="dashboard-left">

          <WelcomeCard />

          <Stats />

          <TierPreview />

        </div>

        <div className="dashboard-right">

          <Activity />

          <QuickAction />

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;