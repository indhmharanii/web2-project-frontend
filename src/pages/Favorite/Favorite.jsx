import "./Favorite.css";

import DashboardLayout from "../../layouts/DashboardLayout";
import LaptopCard from "../../components/LaptopCard/LaptopCard";

import laptops from "../../data/laptops";

import {
    FaHeart,
    FaArrowRight
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Favorite(){

    const navigate = useNavigate();

    // sementara dummy
    const favoriteLaptop = laptops.slice(0,3);

    return(

        <DashboardLayout>

            <div className="favorite-page">

                <div className="favorite-header">

                    <div>

                        <div className="breadcrumb">

                            Dashboard

                            <span>/</span>

                            Favorite

                        </div>

                        <h1>

                            <FaHeart/>

                            Favorite Saya

                        </h1>

                        <p>

                            Laptop yang telah Anda simpan.

                        </p>

                    </div>

                    <div className="favorite-count">

                        <h2>

                            {favoriteLaptop.length}

                        </h2>

                        <span>

                            Laptop

                        </span>

                    </div>

                </div>

                {
                    favoriteLaptop.length===0?

                    (

                        <div className="empty-state">

                            <h2>

                                Belum ada laptop favorit

                            </h2>

                            <p>

                                Tambahkan laptop favorit dari halaman detail.

                            </p>

                            <button

                                onClick={()=>navigate("/laptop")}

                            >

                                Jelajahi Laptop

                                <FaArrowRight/>

                            </button>

                        </div>

                    )

                    :

                    (

                        <div className="favorite-grid">

                            {

                                favoriteLaptop.map(

                                    laptop=>

                                    <LaptopCard

                                        key={laptop.id}

                                        laptop={laptop}

                                    />

                                )

                            }

                        </div>

                    )

                }

            </div>

        </DashboardLayout>

    );

}

export default Favorite;