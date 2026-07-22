import "./LaptopEditModal.css";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function LaptopEditModal({ open, onClose, laptop, onSuccess }) {
    const [form, setForm] = useState({});
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (laptop) setForm(laptop);
    }, [laptop]);

    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
    };

    const handleSubmit = async () => {
        setSaving(true);
        setError("");
        try {
            const token = localStorage.getItem("token");
            const formData = new FormData();
            formData.append("_method", "PUT");
            ["name", "brand", "price", "category", "about"].forEach((key) => {
                if (form[key] !== undefined) formData.append(key, form[key]);
            });

            await axios.post(`${API_URL}/api/laptops/${laptop.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            onSuccess?.();
            onClose();
        } catch (err) {
            setError(err.response?.data?.message || "Gagal menyimpan perubahan.");
        } finally {
            setSaving(false);
        }
    };

    if (!open || !laptop) return null;

    return (
        <div className="laptop-edit-overlay">
            <div className="laptop-edit-modal">
                <h2>Edit Laptop</h2>

                {error && <p style={{ color: "#f87171", fontSize: "13px" }}>{error}</p>}

                <div className="laptop-edit-form">
                    <div className="laptop-edit-group">
                        <label>Nama Laptop</label>
                        <input type="text" value={form.name || ""} onChange={handleChange("name")} />
                    </div>

                    <div className="laptop-edit-group">
                        <label>Brand</label>
                        <input type="text" value={form.brand || ""} onChange={handleChange("brand")} />
                    </div>

                    <div className="laptop-edit-group">
                        <label>Harga</label>
                        <input type="text" value={form.price || ""} onChange={handleChange("price")} />
                    </div>

                    <div className="laptop-edit-group">
                        <label>Kategori</label>
                        <select value={form.category || ""} onChange={handleChange("category")}>
                            <option>Gaming</option>
                            <option>Office</option>
                            <option>Creator</option>
                            <option>Student</option>
                        </select>
                    </div>

                    <div className="laptop-edit-group full-width">
                        <label>Deskripsi</label>
                        <textarea rows="5" value={form.about || ""} onChange={handleChange("about")} />
                    </div>
                </div>

                <div className="laptop-edit-footer">
                    <button type="button" className="cancel-laptop-btn" onClick={onClose}>
                        <span>Batal</span>
                    </button>
                    <button type="button" className="save-laptop-btn" onClick={handleSubmit} disabled={saving}>
                        <span>{saving ? "Menyimpan..." : "Simpan"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LaptopEditModal;