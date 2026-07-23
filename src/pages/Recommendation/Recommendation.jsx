import "./Recommendation.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  FaPlusCircle,
  FaLaptop,
  FaMicrochip,
  FaMemory,
  FaHdd,
  FaDesktop,
  FaMoneyBillWave,
  FaImage,
  FaAlignLeft,
  FaPaperPlane,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function Recommendation() {
  const navigate = useNavigate();

  const [type, setType] = useState("new_laptop");
  const [tierLists, setTierLists] = useState([]);
  const [selectedTierListId, setSelectedTierListId] = useState("");
  const [tierListLaptops, setTierListLaptops] = useState([]);
  const [relatedLaptopId, setRelatedLaptopId] = useState("");

  const [form, setForm] = useState({
    name: "", brand: "", category: "Gaming", processor: "", graphics: "",
    ram: "", storage: "", battery: "", weight: "", price: "",
    about: "", proposed_tier: "", reason: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [agree, setAgree] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/api/tier-lists`)
      .then((res) => setTierLists(res.data))
      .catch((err) => console.error("Gagal memuat tier list:", err));
  }, []);

  useEffect(() => {
    if (type === "tier_change" && selectedTierListId) {
      axios.get(`${API_URL}/api/tier-lists/${selectedTierListId}`)
        .then((res) => {
          const grouped = res.data.laptops;
          setTierListLaptops([...grouped.S, ...grouped.A, ...grouped.B, ...grouped.C]);
        })
        .catch((err) => console.error("Gagal memuat laptop tier list:", err));
    } else {
      setTierListLaptops([]);
      setRelatedLaptopId("");
    }
  }, [type, selectedTierListId]);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleRelatedLaptopChange = (e) => {
    const laptopId = e.target.value;
    setRelatedLaptopId(laptopId);
    const laptop = tierListLaptops.find((l) => l.id === Number(laptopId));
    if (laptop) {
      setForm((prev) => ({ ...prev, name: laptop.name, brand: laptop.brand, price: laptop.price }));
    }
  };

  const handleSubmit = async () => {
    setError("");

    if (!selectedTierListId) {
      setError("Pilih tier list tujuan usulan.");
      return;
    }
    if (type === "tier_change" && !relatedLaptopId) {
      setError("Pilih laptop yang ingin diusulkan perubahan tier-nya.");
      return;
    }
    if (!form.name || !form.brand || !form.price || !form.proposed_tier || !form.reason) {
      setError("Nama, Brand, Harga, Tier yang diusulkan, dan Alasan wajib diisi.");
      return;
    }
    if (!agree) {
      setError("Kamu harus menyetujui pernyataan data yang benar.");
      return;
    }

    setSending(true);
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("tier_list_id", selectedTierListId);
      formData.append("type", type);
      if (type === "tier_change") formData.append("related_laptop_id", relatedLaptopId);
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));
      if (imageFile) formData.append("image", imageFile);

      await axios.post(`${API_URL}/api/submissions`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess(true);
      setTimeout(() => navigate("/vote"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal mengirim usulan.");
    } finally {
      setSending(false);
    }
  };

  if (success) {
    return (
      <DashboardLayout>
        <div className="recommendation-page">
          <div className="recommendation-header">
            <div className="recommendation-header-icon">
              <FaPlusCircle />
            </div>
            <div>
              <h1>USULAN TERKIRIM</h1>
              <p>Usulanmu akan ditinjau oleh Admin sebelum dibuka untuk voting komunitas. Mengalihkan ke halaman Voting...</p>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="recommendation-page">
        <div className="recommendation-breadcrumb">
          <span>Dashboard</span>
          <span>/</span>
          <span>Tambah Rekomendasi</span>
        </div>

        <div className="recommendation-header">
          <div className="recommendation-header-icon">
            <FaPlusCircle />
          </div>
          <div>
            <h1>TAMBAH REKOMENDASI LAPTOP</h1>
            <p>Ajukan laptop baru atau usulkan perubahan tier untuk ditinjau oleh Admin sebelum dibuka untuk voting komunitas.</p>
          </div>
        </div>

        <div className="recommendation-form">
          {error && <p style={{ color: "#f87171", fontSize: "13px" }}>{error}</p>}

          <div className="form-group">
            <label>Jenis Usulan</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="new_laptop">Tambah Laptop Baru</option>
              <option value="tier_change">Usulkan Perubahan Tier Laptop</option>
            </select>
          </div>

          <div className="form-group">
            <label>Tier List Tujuan</label>
            <select value={selectedTierListId} onChange={(e) => setSelectedTierListId(e.target.value)}>
              <option value="">Pilih Tier List</option>
              {tierLists.map((tl) => (
                <option key={tl.id} value={tl.id}>{tl.title}</option>
              ))}
            </select>
          </div>

          {type === "tier_change" && (
            <div className="form-group">
              <label>Laptop yang Diusulkan Berubah</label>
              <select value={relatedLaptopId} onChange={handleRelatedLaptopChange} disabled={!selectedTierListId}>
                <option value="">Pilih Laptop</option>
                {tierListLaptops.map((l) => (
                  <option key={l.id} value={l.id}>{l.name} (Tier {l.tier} saat ini)</option>
                ))}
              </select>
            </div>
          )}

          <div className="form-group">
            <label><FaLaptop /> Nama Laptop</label>
            <input
              type="text"
              placeholder="Contoh: ASUS ROG Strix G16"
              value={form.name}
              onChange={handleChange("name")}
              disabled={type === "tier_change" && !!relatedLaptopId}
            />
          </div>

          <div className="form-group">
            <label>Brand</label>
            <input
              type="text"
              placeholder="ASUS"
              value={form.brand}
              onChange={handleChange("brand")}
              disabled={type === "tier_change" && !!relatedLaptopId}
            />
          </div>

          <div className="form-group">
            <label>Kategori</label>
            <select value={form.category} onChange={handleChange("category")}>
              <option>Gaming</option>
              <option>Office</option>
              <option>Creator</option>
              <option>Student</option>
            </select>
          </div>

          <div className="form-group">
            <label>Tier yang Diusulkan</label>
            <select value={form.proposed_tier} onChange={handleChange("proposed_tier")}>
              <option value="">Pilih Tier</option>
              <option value="S">S</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>

          {type === "new_laptop" && (
            <div className="form-grid">
              <div className="form-group">
                <label><FaMicrochip /> Processor</label>
                <input type="text" value={form.processor} onChange={handleChange("processor")} />
              </div>
              <div className="form-group">
                <label><FaDesktop /> GPU</label>
                <input type="text" value={form.graphics} onChange={handleChange("graphics")} />
              </div>
              <div className="form-group">
                <label><FaMemory /> RAM</label>
                <input type="text" value={form.ram} onChange={handleChange("ram")} />
              </div>
              <div className="form-group">
                <label><FaHdd /> Storage</label>
                <input type="text" value={form.storage} onChange={handleChange("storage")} />
              </div>
              <div className="form-group">
                <label>Battery</label>
                <input type="text" value={form.battery} onChange={handleChange("battery")} />
              </div>
              <div className="form-group">
                <label>Weight</label>
                <input type="text" value={form.weight} onChange={handleChange("weight")} />
              </div>
            </div>
          )}

          <div className="form-group">
            <label><FaMoneyBillWave /> Harga</label>
            <input
              type="number"
              value={form.price}
              onChange={handleChange("price")}
              disabled={type === "tier_change" && !!relatedLaptopId}
            />
          </div>

          {type === "new_laptop" && (
            <div className="form-group">
              <label><FaImage /> Upload Gambar</label>
              <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
            </div>
          )}

          <div className="form-group">
            <label><FaAlignLeft /> Alasan Usulan</label>
            <textarea
              rows="6"
              placeholder="Jelaskan alasan kamu mengajukan usulan ini, misal berdasarkan pengalaman pribadi..."
              value={form.reason}
              onChange={handleChange("reason")}
            />
          </div>

          <div className="checkbox">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <span>Saya memastikan data yang saya kirim benar.</span>
          </div>

          <button className="submit-btn" onClick={handleSubmit} disabled={sending}>
            <FaPaperPlane />
            {sending ? "Mengirim..." : "Kirim Rekomendasi"}
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Recommendation;