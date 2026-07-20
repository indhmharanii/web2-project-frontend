import "./SearchLaptop.css";

import { FaSearch } from "react-icons/fa";

function SearchLaptop() {
  return (
    <div className="admin-search-container">

      <FaSearch className="admin-search-icon" />

      <input
        className="admin-search-input"
        type="text"
        placeholder="Cari laptop..."
      />

    </div>
  );
}

export default SearchLaptop;