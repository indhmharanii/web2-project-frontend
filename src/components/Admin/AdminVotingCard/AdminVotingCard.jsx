import "./AdminVotingCard.css";
import { useNavigate } from "react-router-dom";
import {
  FaLaptop,
  FaUser,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaArrowRight,
} from "react-icons/fa";

const votingData = [
  {
    id: 1,
    laptop: "ASUS TUF Gaming A15",
    user: "Rani",
    status: "Pending",
    currentTier: "B Tier",
    newTier: "A Tier",
    date: "18 Juli 2026",
  },
  {
    id: 2,
    laptop: "Lenovo LOQ 15",
    user: "Rani",
    status: "Approve",
    currentTier: "A Tier",
    newTier: "S Tier",
    date: "17 Juli 2026",
  },
  {
    id: 3,
    laptop: "Acer Nitro V15",
    user: "Rani",
    status: "Reject",
    currentTier: "B Tier",
    newTier: "A Tier",
    date: "16 Juli 2026",
  },
];

export default function AdminVotingCard() {

  const navigate = useNavigate();

  return (
    <>
      {votingData.map((item) => (
        <div className="vote-card" key={item.id}>

          <div className="vote-header">

            <div className="vote-icon">
              <FaLaptop />
            </div>

            <div className="vote-info">
              <h3>{item.laptop}</h3>

              <p>
                <FaUser />
                {item.user}
              </p>
            </div>

          </div>

          <div className="vote-tier-box">

            <span className="vote-label">
              Perubahan Tier
            </span>

            <div className="vote-tier">

              <div className="vote-old">
                {item.currentTier}
              </div>

              <div className="vote-arrow">
                →
              </div>

              <div className="vote-new">
                {item.newTier}
              </div>

            </div>

          </div>

          <div className="vote-footer">

            <div
              className={`vote-status ${
                item.status === "Approve"
                  ? "vote-approve"
                  : item.status === "Reject"
                  ? "vote-reject"
                  : "vote-pending"
              }`}
            >

              {item.status === "Approve" ? (
                <FaCheckCircle />
              ) : item.status === "Reject" ? (
                <FaTimesCircle />
              ) : (
                <FaClock />
              )}

              {item.status}

            </div>

            <span className="vote-date">
              {item.date}
            </span>

          </div>

          <button
            className="vote-button"
            onClick={() => navigate(`/admin/voting/${item.id}`)}
          >
            Lihat Detail
            <FaArrowRight />
          </button>

        </div>
      ))}
    </>
  );
}