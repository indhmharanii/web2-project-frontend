import "./ManageRecommendation.css";

import AdminLayout from "../../../components/Admin/Layout/AdminLayout";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TopbarAdmin from "../../../components/Admin/TopbarAdmin/TopbarAdmin";

import SearchRecommendation from "../../../components/Admin/SearchRecommendation/SearchRecommendation";
import RecommendationTable from "../../../components/Admin/RecommendationTable/RecommendationTable";
import PaginationAdmin from "../../../components/Admin/PaginationAdmin/PaginationAdmin";

function ManageRecommendation() {

    return (

        <AdminLayout
            sidebar={<SidebarAdmin />}
            topbar={<TopbarAdmin />}
        >

            <div className="manage-recommendation-container">

                <div className="manage-recommendation-header">

                    <div>

                        <h1 className="manage-recommendation-title">
                            Kelola Rekomendasi
                        </h1>

                        <p className="manage-recommendation-subtitle">
                            Kelola seluruh data rekomendasi laptop pada aplikasi TIERRA.
                        </p>

                    </div>

                </div>

                <SearchRecommendation />

                <RecommendationTable />

                <PaginationAdmin />

            </div>

        </AdminLayout>

    );

}

export default ManageRecommendation;