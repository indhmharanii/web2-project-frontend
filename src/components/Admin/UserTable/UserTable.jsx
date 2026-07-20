import "./UserTable.css";

import { FaEdit } from "react-icons/fa";

const users = [
    {
        id: 1,
        name: "Rani Wijaya",
        email: "rani@gmail.com",
        role: "User",
        status: "Aktif",
        joined: "12 Jul 2026",
    },
    {
        id: 2,
        name: "Aldi Pratama",
        email: "aldi@gmail.com",
        role: "Admin",
        status: "Aktif",
        joined: "10 Jul 2026",
    },
    {
        id: 3,
        name: "Siti Aisyah",
        email: "siti@gmail.com",
        role: "User",
        status: "Nonaktif",
        joined: "08 Jul 2026",
    },
    {
        id: 4,
        name: "Budi Santoso",
        email: "budi@gmail.com",
        role: "User",
        status: "Aktif",
        joined: "05 Jul 2026",
    },
];

function UserTable({

    onEdit = () => {},

}) {

    return (

        <div className="admin-user-table-container">

            <table className="admin-user-table">

                <thead>

                    <tr>

                        <th>Nama</th>

                        <th>Email</th>

                        <th>Role</th>

                        <th>Status</th>

                        <th>Bergabung</th>

                        <th>Aksi</th>

                    </tr>

                </thead>

                <tbody>

                    {users.map((user) => (

                        <tr key={user.id}>

                            <td>{user.name}</td>

                            <td>{user.email}</td>

                            <td>

                                <span
                                    className={`user-role ${user.role.toLowerCase()}`}
                                >
                                    {user.role}
                                </span>

                            </td>

                            <td>

                                <span
                                    className={`user-status ${
                                        user.status === "Aktif"
                                            ? "active"
                                            : "inactive"
                                    }`}
                                >
                                    {user.status}
                                </span>

                            </td>

                            <td>{user.joined}</td>

                            <td>

                                <div className="user-action">

                                    <button
                                        type="button"
                                        className="user-edit-button"
                                        onClick={() => onEdit(user)}
                                    >

                                        <FaEdit />

                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default UserTable;