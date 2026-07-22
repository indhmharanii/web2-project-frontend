import "./LaptopTable.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function LaptopTable({ laptops = [], onEdit = () => {}, onDelete = () => {} }) {
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
                    {laptops.length === 0 ? (
                        <tr>
                            <td colSpan={6} style={{ textAlign: "center", padding: "20px", color: "#888" }}>
                                Belum ada data laptop.
                            </td>
                        </tr>
                    ) : (
                        laptops.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.category || "-"}</td>
                                <td>
                                    <span className={`admin-tier-badge tier-${item.tier.toLowerCase()}`}>
                                        {item.tier}
                                    </span>
                                </td>
                                <td>{item.vote_count}</td>
                                <td>
                                    <span className="admin-status-badge active">Aktif</span>
                                </td>
                                <td>
                                    <div className="admin-action-buttons">
                                        <button type="button" className="admin-edit-button" title="Edit Laptop"
                                            onClick={() => onEdit(item)}>
                                            <FaEdit />
                                        </button>
                                        <button type="button" className="admin-delete-button" title="Hapus Laptop"
                                            onClick={() => onDelete(item)}>
                                            <FaTrash />
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

export default LaptopTable;