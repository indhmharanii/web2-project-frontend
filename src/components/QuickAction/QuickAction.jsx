import "./QuickAction.css";

import {
  FaVoteYea,
  FaListOl,
  FaLaptop,
  FaHeart,
} from "react-icons/fa";

const actions = [
  {
    icon: <FaVoteYea />,
    title: "Vote Laptop",
    desc: "Dukung laptop favoritmu",
  },

  {
    icon: <FaListOl />,
    title: "Lihat Tier List",
    desc: "Lihat ranking terbaru",
  },

  {
    icon: <FaLaptop />,
    title: "Laptop Terbaru",
    desc: "Lihat laptop terbaru",
  },

  {
    icon: <FaHeart />,
    title: "Favorit",
    desc: "Laptop favoritmu",
  },
];

function QuickAction() {
  return (
    <div className="quick">
      <h2>Aksi Cepat</h2>

      {actions.map((item, index) => (
        <div className="quick-item" key={index}>
          <div className="quick-icon">{item.icon}</div>

          <div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuickAction;