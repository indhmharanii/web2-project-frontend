import "./AdminStatCard.css";

function AdminStatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="admin-stat-card">

      <div
        className="admin-stat-card-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div className="admin-stat-card-content">

        <h4 className="admin-stat-card-title">
          {title}
        </h4>

        <h2 className="admin-stat-card-value">
          {value}
        </h2>

      </div>

    </div>
  );
}

export default AdminStatCard;