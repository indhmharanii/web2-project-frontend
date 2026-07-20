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

function ManageLaptop() {

    const [openModal, setOpenModal] = useState(false);

    return (

        <AdminLayout
            sidebar={<SidebarAdmin />}
            topbar={<TopbarAdmin />}
        >

            <div className="manage-laptop-container">

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
                        className="manage-laptop-add-button"
                        onClick={() => setOpenModal(true)}
                    >

                        <FaPlus />

                        <span>Tambah Laptop</span>

                    </button>

                </div>

                <SearchLaptop />

                <LaptopTable />

                <PaginationAdmin />

            </div>

            <AddLaptopModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />

        </AdminLayout>

    );

}

export default ManageLaptop;