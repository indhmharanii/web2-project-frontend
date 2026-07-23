import "./UserTable.css";
import { FaEdit } from "react-icons/fa";
import dayjs from "dayjs";

function UserTable({ users = [], onEdit = () => {} }) {
  return (
    <div className="admin-user-table-container">
      <table className="admin-user-table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Role</th>
            <th>Bergabung</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: "20px", color: "#888" }}>
                Tidak ada data pengguna.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`user-role ${user.role}`}>
                    {user.role === "admin" ? "Admin" : "User"}
                  </span>
                </td>
                <td>{dayjs(user.created_at).format("D MMM YYYY")}</td>
                <td>
                  <div className="user-action">
                    <button type="button" className="user-edit-button" onClick={() => onEdit(user)}>
                      <FaEdit />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;