import "./ManageUser.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import AdminLayout from "../../../components/Admin/Layout/AdminLayout";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TopbarAdmin from "../../../components/Admin/TopbarAdmin/TopbarAdmin";

import SearchUser from "../../../components/Admin/SearchUser/SearchUser";
import UserTable from "../../../components/Admin/UserTable/UserTable";
import PaginationAdmin from "../../../components/Admin/PaginationAdmin/PaginationAdmin";
import UserEditModal from "../../../components/Admin/UserEditModal/UserEditModal";

const API_URL = import.meta.env.VITE_API_URL;

function ManageUser() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/api/admin/users`, {
        params: { search: search || undefined },
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error("Gagal memuat data user:", err);
    }
  }, [search]);

  useEffect(() => {
    const timeout = setTimeout(fetchUsers, 400);
    return () => clearTimeout(timeout);
  }, [fetchUsers]);

  return (
    <AdminLayout sidebar={<SidebarAdmin />} topbar={<TopbarAdmin />}>
      <div className="manage-user-container">
        <div className="manage-user-header">
          <div>
            <h1 className="manage-user-title">Kelola User</h1>
            <p className="manage-user-subtitle">Kelola seluruh data pengguna aplikasi TIERRA.</p>
          </div>
        </div>

        <SearchUser value={search} onChange={setSearch} />

        <UserTable
          users={users}
          onEdit={(user) => {
            setSelectedUser(user);
            setOpenModal(true);
          }}
        />

        <PaginationAdmin />

        <UserEditModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          user={selectedUser}
          onSuccess={fetchUsers}
        />
      </div>
    </AdminLayout>
  );
}

export default ManageUser;