import "./VotingDetail.css";

import DashboardLayout from "../../layouts/DashboardLayout";

import { useNavigate, useParams } from "react-router-dom";

import laptops from "../../data/laptops";

import {
    FaStar,
    FaMedal,
    FaUsers,
    FaFire,
    FaArrowLeft,
    FaCheckCircle,
} from "react-icons/fa";

function VotingDetail() {

    const { id } = useParams();

    const navigate = useNavigate();

    const laptop = laptops.find(
        (item) => item.id === Number(id)
    );

    if (!laptop) {

        return (

            <DashboardLayout>

                <div className="not-found">

                    <h1>404</h1>

                    <p>

                        Data voting tidak ditemukan.

                    </p>

                </div>

            </DashboardLayout>

        );

    }

    const formatPrice = (price) =>

        new Intl.NumberFormat("id-ID", {

            style: "currency",

            currency: "IDR",

            maximumFractionDigits: 0,

        }).format(price);

    return (

        <DashboardLayout>

            <div className="voting-detail-page">

                {/* ================= BREADCRUMB ================= */}

                <div className="breadcrumb">

                    Dashboard

                    <span>/</span>

                    Voting

                    <span>/</span>

                    {laptop.name}

                </div>

                {/* ================= HERO ================= */}

                <div className="voting-detail-card">

                    <div className="voting-detail-left">

                        <div className="voting-image-wrapper">

                            <img
                                src={laptop.image}
                                alt={laptop.name}
                            />

                        </div>

                    </div>

                    <div className="voting-detail-right">

                        <span className="voting-badge">

                            {laptop.category}

                        </span>

                        <h1>

                            {laptop.name}

                        </h1>

                        <div className="voting-rating">

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

                        <div className="price-divider"></div>

                        <div className="voting-info-box">

                            <div className="voting-mini-card">

                                <FaMedal />

                                <div>

                                    <small>

                                        Tier

                                    </small>

                                    <h4>

                                        {laptop.tier}

                                    </h4>

                                </div>

                            </div>

                            <div className="voting-mini-card">

                                <FaUsers />

                                <div>

                                    <small>

                                        Total Vote

                                    </small>

                                    <h4>

                                        {laptop.votes}

                                    </h4>

                                </div>

                            </div>

                            <div className="voting-mini-card">

                                <FaFire />

                                <div>

                                    <small>

                                        Kategori

                                    </small>

                                    <h4>

                                        {laptop.category}

                                    </h4>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* ================= STATUS VOTING ================= */}

                <div className="voting-status-card">

                    <div className="status-icon">

                        <FaCheckCircle />

                    </div>

                    <div className="status-content">

                        <h2>

                            Laptop Berhasil Direkomendasikan

                        </h2>

                        <p>

                            Laptop ini telah berhasil melewati proses verifikasi Administrator TIERRA dan ditempatkan pada <strong>{laptop.tier}</strong> berdasarkan spesifikasi, performa, serta hasil voting pengguna.

                        </p>

                    </div>

                </div>
                                {/* ================= SPESIFIKASI ================= */}

                <div className="voting-section">

                    <h3>

                        Spesifikasi Laptop

                    </h3>

                    <div className="voting-spec-grid">

                        <div className="voting-spec-card">

                            <small>Processor</small>

                            <h4>{laptop.processor}</h4>

                        </div>

                        <div className="voting-spec-card">

                            <small>Graphics</small>

                            <h4>{laptop.gpu}</h4>

                        </div>

                        <div className="voting-spec-card">

                            <small>RAM</small>

                            <h4>{laptop.ram}</h4>

                        </div>

                        <div className="voting-spec-card">

                            <small>Storage</small>

                            <h4>{laptop.storage}</h4>

                        </div>

                        <div className="voting-spec-card">

                            <small>Battery</small>

                            <h4>{laptop.battery}</h4>

                        </div>

                        <div className="voting-spec-card">

                            <small>Weight</small>

                            <h4>{laptop.weight}</h4>

                        </div>

                    </div>

                </div>

                {/* ================= TENTANG LAPTOP ================= */}

                <div className="voting-section">

                    <h3>

                        Tentang Laptop

                    </h3>

                    <div className="voting-description-card">

                        <p>

                            {laptop.description}

                        </p>

                    </div>

                </div>

                {/* ================= HASIL VOTING ================= */}

                <div className="voting-section">

                    <h3>

                        Hasil Voting

                    </h3>

                    <div className="voting-history-card">

                        <div className="history-item">

                            <span>Status Voting</span>

                            <strong className="approve-text">

                                Approve

                            </strong>

                        </div>

                        <div className="history-item">

                            <span>Pengaju</span>

                            <strong>

                                Rani

                            </strong>

                        </div>

                        <div className="history-item">

                            <span>Tanggal Pengajuan</span>

                            <strong>

                                18 Juli 2026

                            </strong>

                        </div>

                        <div className="history-item">

                            <span>Diverifikasi Oleh</span>

                            <strong>

                                Administrator TIERRA

                            </strong>

                        </div>

                    </div>

                </div>

                {/* ================= ALASAN TIER ================= */}

                <div className="voting-section">

                    <h3>

                        Alasan Penempatan Tier

                    </h3>

                    <div className="voting-description-card">

                        <p>

                            Berdasarkan hasil voting pengguna serta proses
                            verifikasi Administrator TIERRA, laptop ini
                            dinilai memiliki performa yang sangat baik
                            pada kelasnya.

                            Kombinasi prosesor
                            <strong> {laptop.processor}</strong>,
                            kartu grafis
                            <strong> {laptop.gpu}</strong>,
                            RAM
                            <strong> {laptop.ram}</strong>,
                            dan penyimpanan
                            <strong> {laptop.storage}</strong>
                            menjadikannya sangat cocok untuk kebutuhan
                            {` ${laptop.category.toLowerCase()}`},
                            sehingga ditempatkan pada
                            <strong> Tier {laptop.tier}</strong>.

                        </p>

                    </div>

                </div>

                {/* ================= BUTTON ================= */}

                <div className="voting-action">

                    <button
                        className="back-voting-btn"
                        onClick={() => navigate("/voting")}
                    >

                        <FaArrowLeft />

                        Kembali ke Voting

                    </button>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default VotingDetail;