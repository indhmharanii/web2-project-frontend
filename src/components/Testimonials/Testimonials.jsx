import "./Testimonials.css";
import { FaStar, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    name: "Rizky Pratama",
    role: "Mahasiswa",
    rating: 5,
    text:
      "Laptop ASUS ROG sangat membantu saya untuk coding Flutter dan menjalankan Android Studio dengan lancar.",
  },
  {
    name: "Amanda Putri",
    role: "Content Creator",
    rating: 5,
    text:
      "Melalui TIERRA saya lebih mudah memilih laptop yang sesuai kebutuhan editing tanpa harus bingung membandingkan banyak produk.",
  },
  {
    name: "Fajar Ramadhan",
    role: "Programmer",
    rating: 4,
    text:
      "Fitur Tier List dan Vote sangat membantu karena saya bisa melihat rekomendasi langsung dari pengalaman pengguna lain.",
  },
];

function Testimonials() {
  return (
    <section className="testimonial-section" id="review">

      <div className="testimonial-header">

        <h2>Ulasan Pengguna</h2>

        <button className="testimonial-button">
          Lihat Semua →
        </button>

      </div>

      <div className="testimonial-container">

        {reviews.map((item, index) => (

          <div
            className="testimonial-item"
            key={index}
          >

            <FaUserCircle className="testimonial-user-icon" />

            <h4 className="testimonial-name">
              {item.name}
            </h4>

            <span className="testimonial-role">
              {item.role}
            </span>

            <div className="testimonial-rating">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="testimonial-text">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;