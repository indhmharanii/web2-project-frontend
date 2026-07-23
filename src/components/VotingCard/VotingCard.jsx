import "./VotingCard.css";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";

import {
  FaLaptop,
  FaUser,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaVoteYea,
  FaArrowRight,
} from "react-icons/fa";

dayjs.extend(relativeTime);
dayjs.locale("id");

const statusMeta = {
  pending_review: { label: "Menunggu Admin", icon: <FaClock />, className: "pending" },
  voting: { label: "Sedang Voting", icon: <FaVoteYea />, className: "voting" },
  approved: { label: "Disetujui", icon: <FaCheckCircle />, className: "approve" },
  rejected: { label: "Ditolak", icon: <FaTimesCircle />, className: "rejected" },
};

function VotingCard({ submission }) {
  const navigate = useNavigate();
  const meta = statusMeta[submission.status] || statusMeta.pending_review;

  return (
    <div className="voting-card">
      <div className="voting-card-header">
        <div className="voting-icon">
          <FaLaptop />
        </div>

        <div className="voting-title">
          <h3>{submission.name}</h3>
          <p>
            <FaUser />
            <span>{submission.user?.name || "Pengguna"}</span>
          </p>
        </div>
      </div>

      <div className="voting-card-body">
        <div className="voting-status">
          <span className={meta.className}>
            {meta.icon}
            {meta.label}
          </span>
        </div>

        {submission.status === "voting" && (
          <div className="voting-count">
            <small>{submission.upvotes ?? 0} Setuju · {submission.downvotes ?? 0} Tidak Setuju</small>
          </div>
        )}

        <div className="voting-date">
          <small>
            Diajukan pada
            <strong> {dayjs(submission.created_at).format("D MMMM YYYY")}</strong>
          </small>
        </div>
      </div>

      <button
        className="detail-btn"
        type="button"
        onClick={() => navigate(`/voting/${submission.id}`)}
      >
        <span>Lihat Detail</span>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default VotingCard;