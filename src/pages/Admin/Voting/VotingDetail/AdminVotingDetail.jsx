import "./AdminVotingDetail.css";

import AdminLayout from "../../../../components/Admin/Layout/AdminLayout";
import SidebarAdmin from "../../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TopbarAdmin from "../../../../components/Admin/TopbarAdmin/TopbarAdmin";

import { useParams } from "react-router-dom";

import laptops from "../../../../data/laptops";

import {
    FaStar,
    FaUser,
    FaCalendarAlt,
    FaCheckCircle,
    FaClock,
} from "react-icons/fa";

function AdminVotingDetail() {

    const { id } = useParams();

    const laptop = laptops.find(
        (item) => item.id === Number(id)
    );

    if (!laptop) {

        return (

            <AdminLayout
                sidebar={<SidebarAdmin />}
                topbar={<TopbarAdmin />}
            >

                <div className="not-found">

                    <h1>404</h1>

                    <p>Data tidak ditemukan.</p>

                </div>

            </AdminLayout>

        );

    }

    const formatPrice = (price) =>
        new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(price);

    return (

        <AdminLayout
            sidebar={<SidebarAdmin />}
            topbar={<TopbarAdmin />}
        >

            <div className="admin-detail-page">

                {/* Breadcrumb */}

                <div className="breadcrumb">

                    <span>Dashboard</span>

                    <span>/</span>

                    <span>Kelola Voting</span>

                    <span>/</span>

                    <span>Detail Pengajuan</span>

                </div>

                {/* Hero */}

                <div className="detail-hero">

                    <div className="hero-image">

                        <img
                            src={laptop.image}
                            alt={laptop.name}
                        />

                    </div>

                    <div className="hero-content">

                        <span className="category">

                            {laptop.category}

                        </span>

                        <h1>

                            {laptop.name}

                        </h1>

                        <div className="rating">

                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                            <span>

                                {laptop.rating}

                            </span>

                        </div>

                        <h2>

                            {formatPrice(laptop.price)}

                        </h2>

                    </div>

                </div>

                {/* Informasi Pengaju */}

                <div className="admin-section">

                    <h2>

                        Informasi Pengaju

                    </h2>

                    <div className="info-grid">

                        <div className="info-card">

                            <FaUser />

                            <div>

                                <small>Nama</small>

                                <h4>Rani</h4>

                            </div>

                        </div>

                        <div className="info-card">

                            <FaCalendarAlt />

                            <div>

                                <small>Tanggal</small>

                                <h4>18 Juli 2026</h4>

                            </div>

                        </div>

                        <div className="info-card">

                            <FaClock />

                            <div>

                                <small>Status</small>

                                <h4>Pending</h4>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Perubahan Tier */}

                <div className="admin-section">

                    <h2>

                        Perubahan Tier

                    </h2>

                    <div className="tier-preview">

                        <div>

                            <small>Tier Saat Ini</small>

                            <h3>

                                {laptop.tier}

                            </h3>

                        </div>

                        <span>

                            →

                        </span>

                        <div>

                            <small>Tier Diusulkan</small>

                            <h3>

                                A Tier

                            </h3>

                        </div>

                    </div>

                </div>

                {/* Alasan */}

                <div className="admin-section">

                    <h2>

                        Alasan Pengguna

                    </h2>

                    <div className="description-card">

                        <p>

                            Laptop ini menurut saya layak berada pada A Tier
                            karena memiliki performa gaming yang sangat baik,
                            menggunakan Ryzen 7 serta RTX 4060 sehingga mampu
                            menjalankan berbagai game AAA dengan stabil.

                        </p>

                    </div>

                </div>

                {/* Catatan Admin */}

                <div className="admin-section">

                    <h2>

                        Keputusan Admin

                    </h2>

                    <textarea
                        rows="6"
                        placeholder="Berikan catatan kepada pengguna..."
                    ></textarea>

                    <div className="admin-action">

                        <button className="reject-btn">

                            Reject

                        </button>

                        <button className="approve-btn">

                            <FaCheckCircle />

                            Approve

                        </button>

                    </div>

                </div>

            </div>

        </AdminLayout>

    );

}

export default AdminVotingDetail;