import "./PaginationAdmin.css";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function PaginationAdmin() {
  return (

    <div className="admin-pagination">

      <button className="admin-pagination-arrow">

        <FaChevronLeft />

      </button>

      <button className="admin-pagination-number active">

        1

      </button>

      <button className="admin-pagination-number">

        2

      </button>

      <button className="admin-pagination-number">

        3

      </button>

      <button className="admin-pagination-arrow">

        <FaChevronRight />

      </button>

    </div>

  );
}

export default PaginationAdmin;