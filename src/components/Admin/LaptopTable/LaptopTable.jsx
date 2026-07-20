import "./LaptopTable.css";

import {
    FaEdit,
    FaTrash,
} from "react-icons/fa";

const laptops = [
    {
        id: 1,
        name: "ASUS ROG Zephyrus G14",
        category: "Gaming",
        tier: "S",
        vote: 1450,
        status: "Aktif",
    },
    {
        id: 2,
        name: "Lenovo LOQ 15",
        category: "Gaming",
        tier: "A",
        vote: 1228,
        status: "Aktif",
    },
    {
        id: 3,
        name: "Acer Nitro V15",
        category: "Gaming",
        tier: "B",
        vote: 982,
        status: "Aktif",
    },
    {
        id: 4,
        name: "ASUS Vivobook 14",
        category: "Produktivitas",
        tier: "A",
        vote: 760,
        status: "Nonaktif",
    },
];

function LaptopTable({

    onEdit = () => {},

    onDelete = () => {},

}) {

    return (

        <div className="admin-laptop-table-container">

            <table className="admin-laptop-table">

                <thead>

                    <tr>

                        <th>Nama Laptop</th>

                        <th>Kategori</th>

                        <th>Tier</th>

                        <th>Vote</th>

                        <th>Status</th>

                        <th>Aksi</th>

                    </tr>

                </thead>

                <tbody>

                    {laptops.map((item) => (

                        <tr key={item.id}>

                            <td>{item.name}</td>

                            <td>{item.category}</td>

                            <td>

                                <span
                                    className={`admin-tier-badge tier-${item.tier.toLowerCase()}`}
                                >
                                    {item.tier}
                                </span>

                            </td>

                            <td>{item.vote}</td>

                            <td>

                                <span
                                    className={`admin-status-badge ${
                                        item.status === "Aktif"
                                            ? "active"
                                            : "inactive"
                                    }`}
                                >
                                    {item.status}
                                </span>

                            </td>

                            <td>

                                <div className="admin-action-buttons">

                                    <button
                                        type="button"
                                        className="admin-edit-button"
                                        title="Edit Laptop"
                                        onClick={() => onEdit(item)}
                                    >

                                        <FaEdit />

                                    </button>

                                    <button
                                        type="button"
                                        className="admin-delete-button"
                                        title="Hapus Laptop"
                                        onClick={() => onDelete(item)}
                                    >

                                        <FaTrash />

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

export default LaptopTable;