import "./AddLaptopModal.css";
import { useRef, useState } from "react";
import {
    FaCloudUploadAlt,
    FaTimes
} from "react-icons/fa";

function AddLaptopModal({ open, onClose }) {
    const fileInputRef = useRef(null);

const [preview, setPreview] = useState(null);

const handleImage = (e) => {

    const file = e.target.files[0];

    if(file){

        setPreview(URL.createObjectURL(file));

    }

};

    if (!open) return null;

    return (

        <div className="admin-modal-overlay">

            <div className="admin-modal-container">

                {/* HEADER */}

                <div className="admin-modal-header">

                    <h2>Tambah Laptop</h2>

                    <button
                        className="admin-modal-close"
                        onClick={onClose}
                    >

                        <FaTimes />

                    </button>

                </div>

                {/* BODY */}

                <div className="admin-modal-content">

                    {/* LEFT */}

                    <div className="admin-modal-form">

                        <div className="admin-form-grid">

                            <div className="admin-form-group">

                                <label>Nama Laptop</label>

                                <input
                                    type="text"
                                    placeholder="Masukkan nama laptop"
                                />

                            </div>

                            <div className="admin-form-group">

                                <label>Storage</label>

                                <select>

                                    <option>Pilih Storage</option>

                                    <option>256 GB SSD</option>

                                    <option>512 GB SSD</option>

                                    <option>1 TB SSD</option>

                                </select>

                            </div>

                            <div className="admin-form-group">

                                <label>Kategori</label>

                                <select>

                                    <option>Pilih kategori</option>

                                    <option>Gaming</option>

                                    <option>Produktivitas</option>

                                    <option>Creator</option>

                                </select>

                            </div>

                            <div className="admin-form-group">

                                <label>Battery</label>

                                <input
                                    type="text"
                                    placeholder="Masukkan battery"
                                />

                            </div>

                            <div className="admin-form-group">

                                <label>Harga (IDR)</label>

                                <input
                                    type="number"
                                    placeholder="0"
                                />

                            </div>

                            <div className="admin-form-group">

                                <label>Weight</label>

                                <input
                                    type="text"
                                    placeholder="Masukkan weight"
                                />

                            </div>

                            <div className="admin-form-group">

                                <label>Processor</label>

                                <input
                                    type="text"
                                    placeholder="Masukkan processor"
                                />

                            </div>

                            <div className="admin-form-group">

                                <label>Graphics</label>

                                <input
                                    type="text"
                                    placeholder="Masukkan graphics"
                                />

                            </div>

                            <div className="admin-form-group">

                                <label>RAM</label>

                                <select>

                                    <option>Pilih RAM</option>

                                    <option>8 GB</option>

                                    <option>16 GB</option>

                                    <option>32 GB</option>

                                </select>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="admin-modal-side">

                        <div className="admin-form-group">

                            <label>Deskripsi</label>

                            <textarea
                                placeholder="Masukkan deskripsi laptop"
                            />

                        </div>

                        <div className="admin-form-group">

                            <label>Gambar Laptop</label>

                          <div
                                className="admin-upload-box"
                                onClick={() => fileInputRef.current.click()}
                            >

                                {preview ? (

                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="admin-upload-preview"
                                    />

                                ) : (

                                    <>

                                        <FaCloudUploadAlt />

                                        <span>Upload gambar</span>

                                        <small>PNG, JPG maksimal 5MB</small>

                                    </>

                                )}

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={handleImage}
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* FOOTER */}

                <div className="admin-modal-footer">

                    <button
                        className="admin-btn-cancel"
                        onClick={onClose}
                    >

                        Batal

                    </button>

                    <button
                        className="admin-btn-save"
                    >

                        Simpan

                    </button>

                </div>

            </div>

        </div>

    );

}

export default AddLaptopModal;