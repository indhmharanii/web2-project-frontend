import "./AddLaptopModal.css";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function AddLaptopModal({ open, onClose, onSuccess, presetTierListId, presetTier }) {
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [tierLists, setTierLists] = useState([]);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const [form, setForm] = useState({
        name: "", brand: "", price: "", tier: "", tier_list_id: "",
        storage: "", category: "", battery: "", weight: "",
        processor: "", graphics: "", ram: "", about: "",
    });

    useEffect(() => {
        if (open && !presetTierListId) {
            axios.get(`${API_URL}/api/tier-lists`)
                .then((res) => setTierLists(res.data))
                .catch((err) => console.error("Gagal memuat tier list:", err));
        }
    }, [open, presetTierListId]);

    useEffect(() => {
        if (open) {
            setForm((prev) => ({
                ...prev,
                tier_list_id: presetTierListId || "",
                tier: presetTier || "",
            }));
        }
    }, [open, presetTierListId, presetTier]);

    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const resetForm = () => {
        setForm({
            name: "", brand: "", price: "", tier: "", tier_list_id: "",
            storage: "", category: "", battery: "", weight: "",
            processor: "", graphics: "", ram: "", about: "",
        });
        setPreview(null);
        setImageFile(null);
        setError("");
    };

    const handleSubmit = async () => {
        setError("");

        if (!form.name || !form.brand || !form.price || !form.tier || !form.tier_list_id) {
            setError("Nama, Brand, Harga, Tier, dan Tier List wajib diisi.");
            return;
        }

        setSaving(true);
        try {
            const token = localStorage.getItem("token");
            const formData = new FormData();
            Object.entries(form).forEach(([key, value]) => formData.append(key, value));
            if (imageFile) formData.append("image", imageFile);

            await axios.post(`${API_URL}/api/laptops`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            resetForm();
            onSuccess?.();
            onClose();
        } catch (err) {
            setError(err.response?.data?.message || "Gagal menyimpan laptop.");
        } finally {
            setSaving(false);
        }
    };

    if (!open) return null;

    return (
        <div className="admin-modal-overlay">
            <div className="admin-modal-container">
                <div className="admin-modal-header">
                    <h2>Tambah Laptop</h2>
                    <button className="admin-modal-close" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                <div className="admin-modal-content">
                    <div className="admin-modal-form">
                        {error && (
                            <p style={{ color: "#f87171", fontSize: "13px", marginBottom: "10px" }}>{error}</p>
                        )}

                        <div className="admin-form-grid">
                            <div className="admin-form-group">
                                <label>Nama Laptop</label>
                                <input type="text" placeholder="Masukkan nama laptop"
                                    value={form.name} onChange={handleChange("name")} />
                            </div>

                            <div className="admin-form-group">
                                <label>Brand</label>
                                <input type="text" placeholder="Contoh: ASUS"
                                    value={form.brand} onChange={handleChange("brand")} />
                            </div>

                            {!presetTierListId && (
                                <div className="admin-form-group">
                                    <label>Tier List (Budget)</label>
                                    <select value={form.tier_list_id} onChange={handleChange("tier_list_id")}>
                                        <option value="">Pilih Tier List</option>
                                        {tierLists.map((tl) => (
                                            <option key={tl.id} value={tl.id}>{tl.title}</option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {!presetTier && (
                                <div className="admin-form-group">
                                    <label>Tier</label>
                                    <select value={form.tier} onChange={handleChange("tier")}>
                                        <option value="">Pilih Tier</option>
                                        <option value="S">S</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                    </select>
                                </div>
                            )}

                            <div className="admin-form-group">
                                <label>Storage</label>
                                <input type="text" placeholder="Contoh: 512GB SSD"
                                    value={form.storage} onChange={handleChange("storage")} />
                            </div>

                            <div className="admin-form-group">
                                <label>Kategori</label>
                                <select value={form.category} onChange={handleChange("category")}>
                                    <option value="">Pilih kategori</option>
                                    <option>Gaming</option>
                                    <option>Office</option>
                                    <option>Creator</option>
                                    <option>Student</option>
                                </select>
                            </div>

                            <div className="admin-form-group">
                                <label>Battery</label>
                                <input type="text" placeholder="Masukkan battery"
                                    value={form.battery} onChange={handleChange("battery")} />
                            </div>

                            <div className="admin-form-group">
                                <label>Harga (IDR)</label>
                                <input type="number" placeholder="0"
                                    value={form.price} onChange={handleChange("price")} />
                            </div>

                            <div className="admin-form-group">
                                <label>Weight</label>
                                <input type="text" placeholder="Masukkan weight"
                                    value={form.weight} onChange={handleChange("weight")} />
                            </div>

                            <div className="admin-form-group">
                                <label>Processor</label>
                                <input type="text" placeholder="Masukkan processor"
                                    value={form.processor} onChange={handleChange("processor")} />
                            </div>

                            <div className="admin-form-group">
                                <label>Graphics</label>
                                <input type="text" placeholder="Masukkan graphics"
                                    value={form.graphics} onChange={handleChange("graphics")} />
                            </div>

                            <div className="admin-form-group">
                                <label>RAM</label>
                                <input type="text" placeholder="Contoh: 16GB DDR5"
                                    value={form.ram} onChange={handleChange("ram")} />
                            </div>
                        </div>
                    </div>

                    <div className="admin-modal-side">
                        <div className="admin-form-group">
                            <label>Deskripsi</label>
                            <textarea placeholder="Masukkan deskripsi laptop"
                                value={form.about} onChange={handleChange("about")} />
                        </div>

                        <div className="admin-form-group">
                            <label>Gambar Laptop</label>
                            <div className="admin-upload-box" onClick={() => fileInputRef.current.click()}>
                                {preview ? (
                                    <img src={preview} alt="Preview" className="admin-upload-preview" />
                                ) : (
                                    <>
                                        <FaCloudUploadAlt />
                                        <span>Upload gambar</span>
                                        <small>PNG, JPG maksimal 5MB</small>
                                    </>
                                )}
                                <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={handleImage} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="admin-modal-footer">
                    <button className="admin-btn-cancel" onClick={onClose}>Batal</button>
                    <button className="admin-btn-save" onClick={handleSubmit} disabled={saving}>
                        {saving ? "Menyimpan..." : "Simpan"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddLaptopModal;