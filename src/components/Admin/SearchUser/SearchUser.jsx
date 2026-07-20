import "./SearchUser.css";

import { FaSearch } from "react-icons/fa";

function SearchUser() {

    return (

        <div className="search-user-container">

            <div className="search-user-box">

                <FaSearch className="search-user-icon" />

                <input
                    type="text"
                    placeholder="Cari nama atau email pengguna..."
                />

            </div>

        </div>

    );

}

export default SearchUser;