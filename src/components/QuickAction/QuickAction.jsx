import "./QuickAction.css";

import { useNavigate } from "react-router-dom";

import {
  FaVoteYea,
  FaListOl,
  FaLaptop,
  FaHeart,
} from "react-icons/fa";

function QuickAction() {

  const navigate = useNavigate();

  const actions = [
    {
  icon: <FaVoteYea />,
  title: "Vote Laptop",
  desc: "Dukung laptop favoritmu",
  path: "/Vote", 
},

    {
      icon: <FaListOl />,
      title: "Lihat Tier List",
      desc: "Lihat ranking terbaru",
      path: "/TierList",
    },

    {
      icon: <FaHeart />,
      title: "Favorit",
      desc: "Laptop favoritmu",
      path: "/favorite",
    },
  ];

  return (
    <div className="quick">

      <h2>Aksi Cepat</h2>

      {actions.map((item, index) => (

        <div
          className="quick-item"
          key={index}
          onClick={() => navigate(item.path)}
        >

          <div className="quick-icon">

            {item.icon}

          </div>

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