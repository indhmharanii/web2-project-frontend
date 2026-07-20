import "./ManageLaptop.css";

import { useState } from "react";

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

function ManageLaptop() {

    const [openAddModal, setOpenAddModal] = useState(false);

    const [openEditModal, setOpenEditModal] = useState(false);

    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    return (

        <AdminLayout
            sidebar={<SidebarAdmin />}
            topbar={<TopbarAdmin />}
        >

            <div className="manage-laptop-container">

                {/* HEADER */}

                <div className="manage-laptop-header">

                    <div>

                        <h1 className="manage-laptop-title">

                            Kelola Laptop

                        </h1>

                        <p className="manage-laptop-subtitle">

                            Kelola seluruh data laptop yang tersedia pada aplikasi TIERRA.

                        </p>

                    </div>

                    <button
                        type="button"
                        className="manage-laptop-add-button"
                        onClick={() => setOpenAddModal(true)}
                    >

                        <FaPlus />

                        <span>Tambah Laptop</span>

                    </button>

                </div>

                {/* SEARCH */}

                <SearchLaptop />

                {/* TABLE */}

                <LaptopTable
                    onEdit={() => setOpenEditModal(true)}
                    onDelete={() => setOpenDeleteModal(true)}
                />

                {/* PAGINATION */}

                <PaginationAdmin />

            </div>

            {/* MODAL TAMBAH */}

            <AddLaptopModal
                open={openAddModal}
                onClose={() => setOpenAddModal(false)}
            />

            {/* MODAL EDIT */}

            <LaptopEditModal
                open={openEditModal}
                onClose={() => setOpenEditModal(false)}
            />

            {/* MODAL HAPUS */}

            <DeleteLaptopModal
                open={openDeleteModal}
                onClose={() => setOpenDeleteModal(false)}
            />

        </AdminLayout>

    );

}

export default ManageLaptop;