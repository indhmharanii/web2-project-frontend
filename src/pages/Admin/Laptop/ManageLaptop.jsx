import "./ManageLaptop.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

import AdminLayout from "../../../components/Admin/Layout/AdminLayout";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TopbarAdmin from "../../../components/Admin/TopbarAdmin/TopbarAdmin";

import SearchLaptop from "../../../components/Admin/SearchLaptop/SearchLaptop";
import LaptopTable from "../../../components/Admin/LaptopTable/LaptopTable";
import PaginationAdmin from "../../../components/Admin/PaginationAdmin/PaginationAdmin";

import AddLaptopModal from "../../../components/Admin/AddLaptopModal/AddLaptopModal";
import LaptopEditModal from "../../../components/Admin/LaptopEditModal/LaptopEditModal";
import DeleteLaptopModal from "../../../components/Admin/DeleteLaptopModal/DeleteLaptopModal";

const API_URL = import.meta.env.VITE_API_URL;

function ManageLaptop() {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedLaptop, setSelectedLaptop] = useState(null);
    const [laptops, setLaptops] = useState([]);

    const fetchLaptops = useCallback(async () => {
        try {
            const res = await axios.get(`${API_URL}/api/laptops`);
            setLaptops(res.data);
        } catch (err) {
            console.error("Gagal memuat laptop:", err);
        }
    }, []);

    useEffect(() => {
        fetchLaptops();
    }, [fetchLaptops]);

    return (
        <AdminLayout sidebar={<SidebarAdmin />} topbar={<TopbarAdmin />}>
            <div className="manage-laptop-container">
                <div className="manage-laptop-header">
                    <div>
                        <h1 className="manage-laptop-title">Kelola Laptop</h1>
                        <p className="manage-laptop-subtitle">
                            Kelola seluruh data laptop yang tersedia pada aplikasi TIERRA.
                        </p>
                    </div>
                </div>

                <SearchLaptop />

                <LaptopTable
                    laptops={laptops}
                    onEdit={(item) => {
                        setSelectedLaptop(item);
                        setOpenEditModal(true);
                    }}
                    onDelete={(item) => {
                        setSelectedLaptop(item);
                        setOpenDeleteModal(true);
                    }}
                />

                <PaginationAdmin />
            </div>

            <AddLaptopModal
                open={openAddModal}
                onClose={() => setOpenAddModal(false)}
                onSuccess={fetchLaptops}
            />

            <LaptopEditModal
                open={openEditModal}
                onClose={() => setOpenEditModal(false)}
                laptop={selectedLaptop}
                onSuccess={fetchLaptops}
            />

            <DeleteLaptopModal
                open={openDeleteModal}
                onClose={() => setOpenDeleteModal(false)}
                laptop={selectedLaptop}
                onSuccess={fetchLaptops}
            />
        </AdminLayout>
    );
}

export default ManageLaptop;