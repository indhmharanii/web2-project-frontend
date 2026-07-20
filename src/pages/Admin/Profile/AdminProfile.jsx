import "./AdminProfile.css";

import AdminLayout from "../../../components/Admin/Layout/AdminLayout";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TopbarAdmin from "../../../components/Admin/TopbarAdmin/TopbarAdmin";

import AdminProfileForm from "../../../components/Admin/AdminProfileForm/AdminProfileForm";

function AdminProfile() {

    return (

        <AdminLayout
            sidebar={<SidebarAdmin />}
            topbar={<TopbarAdmin />}
        >

            <div className="admin-profile-container">

                <div className="admin-profile-header">

                    <h1 className="admin-profile-title">

                        Profil Admin

                    </h1>

                    <p className="admin-profile-subtitle">

                        Kelola informasi akun administrator TIERRA.

                    </p>

                </div>

                <AdminProfileForm />

            </div>

        </AdminLayout>

    );

}

export default AdminProfile;