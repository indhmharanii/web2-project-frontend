import "./Voting.css";

import DashboardLayout from "../../layouts/DashboardLayout";
import VotingCard from "../../components/VotingCard/VotingCard";

import { useNavigate } from "react-router-dom";

import {
    FaVoteYea,
    FaSearch,
    FaClock,
    FaCheckCircle,
    FaPlus,
} from "react-icons/fa";

function Voting() {

    const navigate = useNavigate();

    return (

        <DashboardLayout>

            <div className="voting-page">

                {/* ================= BREADCRUMB ================= */}

                <div className="breadcrumb">

                    <span>Dashboard</span>

                    <p>/</p>

                    <span>Voting</span>

                </div>

                {/* ================= HEADER ================= */}

                <div className="page-header">

                    <div className="header-left">

                        <div className="page-icon">

                            <FaVoteYea />

                        </div>

                        <div className="title-wrapper">

                            <h1>Voting Laptop</h1>

                            <p>

                                Lihat seluruh laptop yang telah Anda ajukan beserta status votingnya.

                            </p>

                        </div>

                    </div>

                </div>

                {/* ================= SEARCH ================= */}

                <div className="voting-search">

                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Cari laptop..."
                    />

                </div>

                {/* ================= TOOLBAR ================= */}

                <div className="voting-toolbar">

                    {/* FILTER */}

                    <div className="status-filter">

                        <button className="active">

                            Semua

                        </button>

                        <button>

                            <FaClock />

                            Pending

                        </button>

                        <button>

                            <FaCheckCircle />

                            Approve

                        </button>

                    </div>

                    {/* AJUKAN VOTE */}

                    <button
                        className="add-vote-btn"
                        onClick={() => navigate("/laptop")}
                    >

                        <FaPlus />

                        Ajukan Vote

                    </button>

                </div>

                {/* ================= CARD ================= */}

                <div className="voting-grid">

                    <VotingCard />

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Voting;