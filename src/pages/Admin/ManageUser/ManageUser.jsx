import "./ManageUser.css";

import AdminLayout from "../../../components/Admin/Layout/AdminLayout";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TopbarAdmin from "../../../components/Admin/TopbarAdmin/TopbarAdmin";

import SearchUser from "../../../components/Admin/SearchUser/SearchUser";
import UserTable from "../../../components/Admin/UserTable/UserTable";
import PaginationAdmin from "../../../components/Admin/PaginationAdmin/PaginationAdmin";

function ManageUser() {

    return (

        <AdminLayout
            sidebar={<SidebarAdmin />}
            topbar={<TopbarAdmin />}
        >

            <div className="manage-user-container">

                <div className="manage-user-header">

                    <div>

                        <h1 className="manage-user-title">

                            Kelola User

                        </h1>

                        <p className="manage-user-subtitle">

                            Kelola seluruh data pengguna aplikasi TIERRA.

                        </p>

                    </div>

                </div>

                <SearchUser />

                <UserTable />

                <PaginationAdmin />

            </div>

        </AdminLayout>

    );

}

export default ManageUser;