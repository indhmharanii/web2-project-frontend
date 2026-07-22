import "./ManageVoting.css";

import AdminLayout from "../../../components/Admin/Layout/AdminLayout";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TopbarAdmin from "../../../components/Admin/TopbarAdmin/TopbarAdmin";

import AdminVotingCard from "../../../components/Admin/AdminVotingCard/AdminVotingCard";

import {
    FaVoteYea,
    FaSearch,
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

function ManageVoting() {

    return (

        <AdminLayout
            sidebar={<SidebarAdmin />}
            topbar={<TopbarAdmin />}
        >

            <div className="manage-voting-page">

                {/* Breadcrumb */}

                <div className="breadcrumb">

                    <span>Dashboard</span>

                    <p>/</p>

                    <span>Kelola Voting</span>

                </div>

                {/* Header */}

                <div className="page-header">

                    <div className="header-left">

                        <div className="page-icon">

                            <FaVoteYea />

                        </div>

                        <div className="title-wrapper">

                            <h1>Kelola Voting</h1>

                            <p>
                                Kelola seluruh pengajuan perubahan tier laptop dari pengguna.
                            </p>

                        </div>

                    </div>

                </div>

                {/* Search */}

                <div className="voting-search">

                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Cari laptop..."
                    />

                </div>

                {/* Filter */}

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

                    <button>

                        <FaTimesCircle />

                        Reject

                    </button>

                </div>

                {/* Statistik */}

                <div className="stats-grid">

                    <div className="stats-card">

                        <h2>12</h2>

                        <p>Pending</p>

                    </div>

                    <div className="stats-card">

                        <h2>84</h2>

                        <p>Approve</p>

                    </div>

                    <div className="stats-card">

                        <h2>8</h2>

                        <p>Reject</p>

                    </div>

                </div>

                {/* Voting Card */}

                <div className="voting-grid">

                    <AdminVotingCard />

                </div>

            </div>

        </AdminLayout>

    );

}

export default ManageVoting;