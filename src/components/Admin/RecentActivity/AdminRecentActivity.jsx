import "./AdminRecentActivity.css";

import {
  FaUserPlus,
  FaLaptop,
  FaCheckCircle,
  FaEdit,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaUserPlus />,
    title: "User baru mendaftar",
    desc: "Rani Wijaya bergabung sebagai user",
    time: "15 Jul 2026, 10:20",
    color: "green",
  },
  {
    icon: <FaLaptop />,
    title: "Laptop baru direkomendasikan",
    desc: "ASUS TUF A16 direkomendasikan oleh Rani",
    time: "15 Jul 2026, 09:15",
    color: "yellow",
  },
  {
    icon: <FaEdit />,
    title: "Laptop berhasil ditambahkan",
    desc: "Lenovo LOQ 15 berhasil ditambahkan",
    time: "14 Jul 2026, 16:45",
    color: "blue",
  },
  {
    icon: <FaCheckCircle />,
    title: "Rekomendasi disetujui",
    desc: "Rekomendasi MSI Cyborg disetujui",
    time: "14 Jul 2026, 14:30",
    color: "purple",
  },
];

function AdminRecentActivity() {
  return (
    <div className="admin-activity-container">

      <div className="admin-activity-header">

        <h3>Aktivitas Terbaru</h3>

      </div>

      <div className="admin-activity-list">

        {activities.map((item, index) => (

          <div
            key={index}
            className="admin-activity-item"
          >

            <div className={`admin-activity-icon ${item.color}`}>

              {item.icon}

            </div>

            <div className="admin-activity-content">

              <h4>{item.title}</h4>

              <p>{item.desc}</p>

            </div>

            <span>{item.time}</span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminRecentActivity;