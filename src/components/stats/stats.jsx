import "./Stats.css";
import {
  FaLaptop,
  FaVoteYea,
  FaComments,
  FaStar,
} from "react-icons/fa";

const statsData = [
  {
    icon: <FaLaptop />,
    color: "blue",
    title: "Laptop Terdaftar",
    value: "520",
    desc: "Total laptop dalam sistem",
  },
  {
    icon: <FaVoteYea />,
    color: "green",
    title: "Total Vote",
    value: "1.540",
    desc: "Vote dari semua pengguna",
  },
  {
    icon: <FaComments />,
    color: "orange",
    title: "Komentar",
    value: "356",
    desc: "Komentar pengguna",
  },
  {
    icon: <FaStar />,
    color: "purple",
    title: "Rating",
    value: "4.8",
    desc: "Berdasarkan vote",
  },
];

function Stats() {
  return (
    <section className="stats">
      {statsData.map((item, index) => (
        <div className="stat-card" key={index}>
          <div className={`icon ${item.color}`}>
            {item.icon}
          </div>

          <div className="stat-content">
            <span>{item.title}</span>
            <h2>{item.value}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Stats;