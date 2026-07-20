import "./LaptopEditModal.css";

function LaptopEditModal({

    open,

    onClose,

}) {

    if (!open) return null;

    return (

        <div className="laptop-edit-overlay">

            <div className="laptop-edit-modal">

                <h2>Edit Laptop</h2>

                <div className="laptop-edit-form">

                    <div className="laptop-edit-group">

                        <label>Nama Laptop</label>

                        <input
                            type="text"
                            defaultValue="ASUS TUF A16"
                        />

                    </div>

                    <div className="laptop-edit-group">

                        <label>Brand</label>

                        <input
                            type="text"
                            defaultValue="ASUS"
                        />

                    </div>

                    <div className="laptop-edit-group">

                        <label>Harga</label>

                        <input
                            type="text"
                            defaultValue="18500000"
                        />

                    </div>

                    <div className="laptop-edit-group">

                        <label>Kategori</label>

                        <select defaultValue="Gaming">

                            <option>Gaming</option>

                            <option>Produktivitas</option>

                            <option>Editing</option>

                            <option>Mahasiswa</option>

                        </select>

                    </div>

                    <div className="laptop-edit-group full-width">

                        <label>Deskripsi</label>

                        <textarea
                            rows="5"
                            defaultValue="Laptop gaming dengan Ryzen 7 dan RTX 4060."
                        />

                    </div>

                    <div className="laptop-edit-group full-width">

                        <label>Gambar Laptop</label>

                        <input
                            type="file"
                        />

                    </div>

                </div>

                <div className="laptop-edit-footer">

                    <button
                        type="button"
                        className="cancel-laptop-btn"
                        onClick={onClose}
                    >

                        <span>Batal</span>

                    </button>

                    <button
                        type="button"
                        className="save-laptop-btn"
                    >

                        <span>Simpan</span>

                    </button>

                </div>

            </div>

        </div>

    );

}

export default LaptopEditModal;