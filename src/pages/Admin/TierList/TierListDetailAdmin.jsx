import "./TierListDetailAdmin.css";
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaPlus, FaArrowLeft, FaTrash } from "react-icons/fa";

import AdminLayout from "../../../components/Admin/Layout/AdminLayout";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TopbarAdmin from "../../../components/Admin/TopbarAdmin/TopbarAdmin";
import AddLaptopModal from "../../../components/Admin/AddLaptopModal/AddLaptopModal";

const API_URL = import.meta.env.VITE_API_URL;
const tierMeta = {
  S: { label: "S Tier", color: "#F59E0B" },
  A: { label: "A Tier", color: "#3B82F6" },
  B: { label: "B Tier", color: "#10B981" },
  C: { label: "C Tier", color: "#6B7280" },
};

function TierListDetailAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tierList, setTierList] = useState(null);
  const [laptopsByTier, setLaptopsByTier] = useState({ S: [], A: [], B: [], C: [] });
  const [modalTier, setModalTier] = useState(null); // tier yang lagi dibuka modalnya

  const fetchDetail = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/api/tier-lists/${id}`);
      setTierList(res.data.tier_list);
      setLaptopsByTier(res.data.laptops);
    } catch (err) {
      console.error("Gagal memuat detail tier list:", err);
    }
  }, [id]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  const handleDeleteLaptop = async (laptopId) => {
    if (!confirm("Hapus laptop ini dari tier list?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/api/laptops/${laptopId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchDetail();
    } catch (err) {
      console.error("Gagal menghapus laptop:", err);
    }
  };

  if (!tierList) return null;

  return (
    <AdminLayout sidebar={<SidebarAdmin />} topbar={<TopbarAdmin />}>
      <div className="tierlist-detail-container">
        <button className="tierlist-back-btn" onClick={() => navigate("/admin/tierlist")}>
          <FaArrowLeft /> Kembali ke Kelola Tier List
        </button>

        <h1 className="tierlist-detail-title">{tierList.title}</h1>
        <p className="tierlist-detail-range">
          Rp{Number(tierList.min_price).toLocaleString("id-ID")} - Rp{Number(tierList.max_price).toLocaleString("id-ID")}
        </p>

        {Object.entries(tierMeta).map(([tier, meta]) => (
          <div key={tier} className="tierlist-detail-row">
            <div className="tierlist-detail-badge" style={{ background: meta.color }}>
              {meta.label}
            </div>

            <div className="tierlist-detail-laptops">
              {laptopsByTier[tier]?.map((laptop) => (
                <div key={laptop.id} className="tierlist-detail-laptop-card">
                  <img src={laptop.image_url || "https://via.placeholder.com/100"} alt={laptop.name} />
                  <span className="ld-name">{laptop.name}</span>
                  <span className="ld-price">Rp{Number(laptop.price).toLocaleString("id-ID")}</span>
                  <button className="ld-delete" onClick={() => handleDeleteLaptop(laptop.id)}>
                    <FaTrash />
                  </button>
                </div>
              ))}

              <button className="tierlist-add-laptop-btn" onClick={() => setModalTier(tier)}>
                <FaPlus />
                <span>Tambah Laptop</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <AddLaptopModal
        open={!!modalTier}
        onClose={() => setModalTier(null)}
        onSuccess={fetchDetail}
        presetTierListId={tierList.id}
        presetTier={modalTier}
      />
    </AdminLayout>
  );
}

export default TierListDetailAdmin;