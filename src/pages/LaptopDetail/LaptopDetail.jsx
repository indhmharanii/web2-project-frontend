import "./LaptopDetail.css";

import Navbar from "../../components/Navbar/Navbar";

import tuf from "../../assets/images/tuf.png";

import {
  FaStar,
  FaMicrochip,
  FaMemory,
  FaHdd,
  FaDesktop,
  FaBatteryFull,
  FaWeightHanging
} from "react-icons/fa";

function LaptopDetail() {

  return (

    <div className="detail">

      <Navbar />

      <section className="detail-container">

        <div className="detail-image">

          <img
            src={tuf}
            alt="ASUS TUF"
          />

        </div>

        <div className="detail-info">

          <h1>ASUS TUF Gaming F15</h1>

          <div className="rating">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

          </div>

          <h2>Rp 15.499.000</h2>

          <div className="specs">

            <div className="spec">

              <FaMicrochip />

              <span>Intel Core i7-13620H</span>

            </div>

            <div className="spec">

              <FaMemory />

              <span>16 GB DDR5</span>

            </div>

            <div className="spec">

              <FaHdd />

              <span>512 GB SSD</span>

            </div>

            <div className="spec">

              <FaDesktop />

              <span>NVIDIA RTX 4050</span>

            </div>

            <div className="spec">

              <FaBatteryFull />

              <span>90Wh Battery</span>

            </div>

            <div className="spec">

              <FaWeightHanging />

              <span>2.2 Kg</span>

            </div>

          </div>

          <p className="description">

            ASUS TUF Gaming F15 merupakan laptop
            berperforma tinggi yang cocok untuk
            gaming, programming, editing video,
            desain grafis, hingga AI development.

          </p>

          <div className="buttons">

            <button className="compare">

              Compare

            </button>

            <button className="buy">

              Buy Now

            </button>

          </div>

        </div>

      </section>

    </div>

  )

}

export default LaptopDetail;