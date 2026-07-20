import "./AdminQuickAction.css";

import {
  FaPlus,
  FaLaptop,
  FaClipboardList,
  FaUsers,
  FaChevronRight,
} from "react-icons/fa";

function AdminQuickAction() {
  return (
    <div className="admin-quick-container">

      <h3 className="admin-quick-title">
        Aksi Cepat
      </h3>

      <div className="admin-quick-list">

        <button className="admin-quick-item blue">

          <div>

            <FaPlus />

            <span>Tambah Laptop</span>

          </div>

          <FaChevronRight />

        </button>

        <button className="admin-quick-item purple">

          <div>

            <FaLaptop />

            <span>Kelola Laptop</span>

          </div>

          <FaChevronRight />

        </button>

        <button className="admin-quick-item orange">

          <div>

            <FaClipboardList />

            <span>Kelola Rekomendasi</span>

          </div>

          <FaChevronRight />

        </button>

        <button className="admin-quick-item green">

          <div>

            <FaUsers />

            <span>Kelola User</span>

          </div>

          <FaChevronRight />

        </button>

      </div>

    </div>
  );
}

export default AdminQuickAction;