import "./AdminQuickAction.css";
import { useNavigate } from "react-router-dom";

import {
  FaPlus,
  FaLaptop,
  FaClipboardList,
  FaUsers,
  FaChevronRight,
   FaLayerGroup,
} from "react-icons/fa";

function AdminQuickAction() {
  const navigate = useNavigate();

  return (
    <div className="admin-quick-container">

      <h3 className="admin-quick-title">
        Aksi Cepat
      </h3>

      <div className="admin-quick-list">

        {/* Tambah Laptop */}
        <button
          className="admin-quick-item blue"
          onClick={() => navigate("/admin/laptop")}
        >
          <div>
            <FaPlus />
            <span>Tambah Laptop</span>
          </div>

          <FaChevronRight />
        </button>

        {/* Kelola Laptop */}
        <button
          className="admin-quick-item purple"
          onClick={() => navigate("/admin/laptop")}
        >
          <div>
            <FaLaptop />
            <span>Kelola Laptop</span>
          </div>

          <FaChevronRight />
        </button>

        {/* Kelola tierlist */}
        <button
          className="admin-quick-item orange"
          onClick={() => navigate("/admin/tierlist")}
        >
          <div>
            < FaLayerGroup />
            <span>Kelola Tier List</span>
          </div>

          <FaChevronRight />
        </button>

        {/* Kelola User */}
        <button
          className="admin-quick-item green"
          onClick={() => navigate("/admin/user")}
        >
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