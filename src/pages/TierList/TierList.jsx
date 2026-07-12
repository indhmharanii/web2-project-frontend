import "./TierList.css";

import DashboardLayout from "../../layouts/DashboardLayout";

function TierList() {
  return (
    <DashboardLayout>

      <div className="tier-page">

        <h1>Peringkat Laptop</h1>

        <p>
          Daftar laptop berdasarkan hasil voting komunitas TIERRA.
        </p>

        <div className="tier-box s-tier">

          <h2>🥇 S Tier</h2>

          <p>Belum ada laptop.</p>

        </div>

        <div className="tier-box a-tier">

          <h2>🥈 A Tier</h2>

          <p>Belum ada laptop.</p>

        </div>

        <div className="tier-box b-tier">

          <h2>🥉 B Tier</h2>

          <p>Belum ada laptop.</p>

        </div>

        <div className="tier-box c-tier">

          <h2>🏅 C Tier</h2>

          <p>Belum ada laptop.</p>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default TierList;