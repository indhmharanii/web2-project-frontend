import "./AdminProfileForm.css";

import { FaUserCircle } from "react-icons/fa";

function AdminProfileForm() {

    return (

        <div className="admin-profile-card">

            {/* HEADER */}

            <div className="admin-profile-top">

                <div className="admin-profile-avatar">

                    <FaUserCircle />

                </div>

                <h2>Administrator</h2>

                <p>admin@tierra.id</p>

            </div>

            {/* FORM */}

            <form className="admin-profile-form">

                <div className="admin-profile-grid">

                    <div className="admin-form-group">

                        <label>Nama Lengkap</label>

                        <input
                            type="text"
                            defaultValue="Administrator"
                        />

                    </div>

                    <div className="admin-form-group">

                        <label>Username</label>

                        <input
                            type="text"
                            defaultValue="admin"
                        />

                    </div>

                    <div className="admin-form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            defaultValue="admin@tierra.id"
                        />

                    </div>

                    <div className="admin-form-group">

                        <label>Nomor HP</label>

                        <input
                            type="text"
                            defaultValue="081234567890"
                        />

                    </div>

                    <div className="admin-form-group full-width">

                        <label>Password Baru</label>

                        <input
                            type="password"
                            placeholder="Masukkan password baru"
                        />

                    </div>

                </div>

                <div className="admin-profile-button">

                    <button
                        type="button"
                        className="profile-cancel-button"
                    >

                        Batal

                    </button>

                    <button
                        type="submit"
                        className="profile-save-button"
                    >

                        Simpan Perubahan

                    </button>

                </div>

            </form>

        </div>

    );

}

export default AdminProfileForm;