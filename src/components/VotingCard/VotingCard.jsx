import "./VotingCard.css";

import { useNavigate } from "react-router-dom";

import {
  FaLaptop,
  FaUser,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const votingData = [
  {
    id: 1,
    laptop: "ASUS TUF Gaming A15",
    user: "Rani",
    status: "Pending",
    date: "18 Juli 2026",
  },
  {
    id: 2,
    laptop: "Lenovo LOQ 15",
    user: "Rani",
    status: "Approve",
    date: "17 Juli 2026",
  },
  {
    id: 3,
    laptop: "Acer Nitro V15",
    user: "Rani",
    status: "Pending",
    date: "16 Juli 2026",
  },
  {
    id: 4,
    laptop: "ASUS Vivobook 14",
    user: "Rani",
    status: "Approve",
    date: "15 Juli 2026",
  },
];

function VotingCard() {
  const navigate = useNavigate();

  return (
    <>
      {votingData.map((item) => (
        <div
          className="voting-card"
          key={item.id}
        >
          {/* ================= HEADER ================= */}

          <div className="voting-card-header">

            <div className="voting-icon">

              <FaLaptop />

            </div>

            <div className="voting-title">

              <h3>{item.laptop}</h3>

              <p>

                <FaUser />

                <span>{item.user}</span>

              </p>

            </div>

          </div>

          {/* ================= BODY ================= */}

          <div className="voting-card-body">

            <div className="voting-status">

              <span
                className={
                  item.status === "Approve"
                    ? "approve"
                    : "pending"
                }
              >

                {item.status === "Approve" ? (
                  <FaCheckCircle />
                ) : (
                  <FaClock />
                )}

                {item.status}

              </span>

            </div>

            <div className="voting-date">

              <small>

                Diajukan pada

                <strong>{item.date}</strong>

              </small>

            </div>

          </div>

          {/* ================= FOOTER ================= */}

          <button
            className="detail-btn"
            type="button"
            onClick={() => navigate(`/voting/${item.id}`)}
          >
            <span>Lihat Detail</span>

            <FaArrowRight />
          </button>

        </div>
      ))}
    </>
  );
}

export default VotingCard;