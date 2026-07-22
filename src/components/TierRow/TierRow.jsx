import "../../pages/TierList/TierList.css";
import TierLaptopCard from "../TierLaptopCard/TierLaptopCard";
import { FaCrown, FaStar, FaLaptop, FaChevronRight } from "react-icons/fa";

const tierConfig = {
  S: { icon: <FaCrown />, label: "S Tier", desc: "Best Performance", className: "s-tier" },
  A: { icon: <FaStar />, label: "A Tier", desc: "Excellent Choice", className: "a-tier" },
  B: { icon: <FaLaptop />, label: "B Tier", desc: "Good Performance", className: "b-tier" },
  C: { icon: <FaLaptop />, label: "C Tier", desc: "Entry Level", className: "c-tier" },
};

function TierRow({ tier, laptops }) {
  const config = tierConfig[tier];

  return (
    <div className={`tier-section ${config.className}`}>
      <div className="tier-info">
        {config.icon}
        <h3>{config.label}</h3>
        <p>{config.desc}</p>
      </div>

      <div className="tier-laptops">
        {laptops.length === 0 ? (
          <p style={{ color: "#888", fontSize: "13px", padding: "10px" }}>
            Belum ada laptop di tier ini.
          </p>
        ) : (
          laptops.map((laptop) => <TierLaptopCard key={laptop.id} laptop={laptop} />)
        )}
      </div>

      <button className="tier-next">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default TierRow;