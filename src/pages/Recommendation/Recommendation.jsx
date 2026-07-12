import "./Recommendation.css";

import Navbar from "../../components/Navbar/Navbar";

import ai from "../../assets/images/ai.png";

function Recommendation() {
  return (
    <div className="recommendation">

      <Navbar />

      <section className="recommendation-container">

        <div className="left">

          <img src={ai} alt="AI" />

          <h1>AI Laptop Recommendation</h1>

          <p>
            Find the perfect laptop based on your budget,
            preferred brand, and primary use.
          </p>

        </div>

        <div className="right">

          <div className="card">

            <h2>Recommendation Form</h2>

            <label>Budget</label>

            <select>

              <option>Under Rp5 Million</option>

              <option>Rp5M - Rp10M</option>

              <option>Rp10M - Rp15M</option>

              <option>Above Rp15M</option>

            </select>

            <label>Purpose</label>

            <select>

              <option>Gaming</option>

              <option>Programming</option>

              <option>Editing</option>

              <option>Office</option>

              <option>Student</option>

            </select>

            <label>Preferred Brand</label>

            <select>

              <option>Any Brand</option>

              <option>ASUS</option>

              <option>Lenovo</option>

              <option>Acer</option>

              <option>HP</option>

              <option>MSI</option>

            </select>

            <button>

              Get Recommendation

            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Recommendation;