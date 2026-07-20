import "./SearchRecommendation.css";

import { FaSearch } from "react-icons/fa";

function SearchRecommendation() {

    return (

        <div className="search-recommendation-container">

            <div className="search-recommendation-box">

                <FaSearch className="search-recommendation-icon" />

                <input
                    type="text"
                    placeholder="Cari rekomendasi..."
                />

            </div>

        </div>

    );

}

export default SearchRecommendation;