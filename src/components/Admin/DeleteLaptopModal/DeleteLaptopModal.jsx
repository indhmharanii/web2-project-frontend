import "./DeleteLaptopModal.css";

function DeleteLaptopModal({

    open,

    onClose,

}) {

    if (!open) return null;

    return (

        <div
            className="delete-laptop-overlay"
            onClick={onClose}
        >

            <div
                className="delete-laptop-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="delete-icon">

                    🗑️

                </div>

                <h2>Hapus Laptop</h2>

                <p>

                    Apakah Anda yakin ingin menghapus laptop ini?

                </p>

                <div className="delete-laptop-footer">

                    <button
                        type="button"
                        className="cancel-delete-btn"
                        onClick={onClose}
                    >

                        <span>Batal</span>

                    </button>

                    <button
                        type="button"
                        className="confirm-delete-btn"
                    >

                        <span>Hapus</span>

                    </button>

                </div>

            </div>

        </div>

    );

}

export default DeleteLaptopModal;