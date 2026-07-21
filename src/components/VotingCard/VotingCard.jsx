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
        id:1,
        laptop:"ASUS TUF Gaming A15",
        user:"Rani",
        status:"Pending",
        date:"18 Juli 2026",
    },
    {
        id:2,
        laptop:"Lenovo LOQ 15",
        user:"Rani",
        status:"Approve",
        date:"17 Juli 2026",
    },
    {
        id:3,
        laptop:"Acer Nitro V15",
        user:"Rani",
        status:"Pending",
        date:"16 Juli 2026",
    },
    {
        id:4,
        laptop:"ASUS Vivobook 14",
        user:"Rani",
        status:"Approve",
        date:"15 Juli 2026",
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

                    <div className="voting-card-top">

                        <div className="voting-icon">

                            <FaLaptop />

                        </div>

                        <div>

                            <h3>{item.laptop}</h3>

                            <p>

                                <FaUser />

                                {item.user}

                            </p>

                        </div>

                    </div>

                    <div className="voting-info">

                        <span
                            className={
                                item.status === "Approve"
                                    ? "approve"
                                    : "pending"
                            }
                        >

                            {
                                item.status === "Approve"
                                    ? <FaCheckCircle />
                                    : <FaClock />
                            }

                            {item.status}

                        </span>

                        <small>{item.date}</small>

                    </div>

                    <button
                        type="button"
                        onClick={() => navigate(`/voting/${item.id}`)}
                    >

                        Lihat Detail

                        <FaArrowRight />

                    </button>

                </div>

            ))}

        </>

    );

}

export default VotingCard;