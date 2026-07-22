import "./DeleteLaptopModal.css";
import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function DeleteLaptopModal({ open, onClose, laptop, onSuccess }) {
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async () => {
        setDeleting(true);
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`${API_URL}/api/laptops/${laptop.id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            onSuccess?.();
            onClose();
        } catch (err) {
            console.error("Gagal menghapus laptop:", err);
        } finally {
            setDeleting(false);
        }
    };

    if (!open || !laptop) return null;

    return (
        <div className="delete-laptop-overlay" onClick={onClose}>
            <div className="delete-laptop-modal" onClick={(e) => e.stopPropagation()}>
                <div className="delete-icon">🗑️</div>
                <h2>Hapus Laptop</h2>
                <p>Apakah Anda yakin ingin menghapus "{laptop.name}"?</p>

                <div className="delete-laptop-footer">
                    <button type="button" className="cancel-delete-btn" onClick={onClose}>
                        <span>Batal</span>
                    </button>
                    <button type="button" className="confirm-delete-btn" onClick={handleDelete} disabled={deleting}>
                        <span>{deleting ? "Menghapus..." : "Hapus"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteLaptopModal;