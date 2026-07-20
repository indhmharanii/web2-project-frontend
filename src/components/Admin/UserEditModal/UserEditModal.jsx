import "./UserEditModal.css";

function UserEditModal({

    open,

    onClose,

}) {

    if (!open) return null;

    return (

        <div className="user-edit-overlay">

            <div className="user-edit-modal">

                <h2>Edit User</h2>

                <div className="user-edit-form">

                    <div className="user-edit-group">

                        <label>Nama Lengkap</label>

                        <input
                            type="text"
                            defaultValue="Rani Wijaya"
                        />

                    </div>

                    <div className="user-edit-group">

                        <label>Email</label>

                        <input
                            type="email"
                            defaultValue="rani@gmail.com"
                        />

                    </div>

                    <div className="user-edit-group">

                        <label>Role</label>

                        <select defaultValue="User">

                            <option>User</option>

                            <option>Admin</option>

                        </select>

                    </div>

                    <div className="user-edit-group">

                        <label>Status</label>

                        <select defaultValue="Aktif">

                            <option>Aktif</option>

                            <option>Nonaktif</option>

                        </select>

                    </div>

                </div>

                <div className="user-edit-footer">

                    <button
                        type="button"
                        className="cancel-user-btn"
                        onClick={onClose}
                    >

                        Batal

                    </button>

                    <button
                        type="button"
                        className="save-user-btn"
                    >

                        Simpan

                    </button>

                </div>

            </div>

        </div>

    );

}

export default UserEditModal;