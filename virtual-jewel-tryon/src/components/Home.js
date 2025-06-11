import React from "react";
import "./Home.css";
import '@google/model-viewer';


// Assets
import TryOnLogo from "../assets/tryon-logo.png";
import userIcon from "../assets/user-icon-on-transparent-background-free-png.webp";
import wishlistIcon from "../assets/wishlist-png-5.png";
import paymentsIcon from "../assets/part3.jpg";
import heroModel from "../assets/free_low_poly_ruby__diamond_gold_necklace.glb";
import howItWorksVideo from "../assets/WhatsApp Video 2025-05-05 at 11.31.43_e9312ead.mp4";

import product1 from "../assets/Diamond-Necklace-Transparent-PNG.png";
import product2 from "../assets/Gold-Jewellery-PNG-Image.png";
import product3 from "../assets/ring_PNG106.png";
import product4 from "../assets/12644292_master.jpg";

import brand1 from "../assets/boteek.jfif";
import brand2 from "../assets/jex.jfif";
import brand3 from "../assets/hemp.jfif";
import brand4 from "../assets/raw.jpeg";
import brand5 from "../assets/anime.jfif";

// Load model-viewer via script in public/index.html or via CDN
function Home() {
  return (
    <div>
      {/* Navbar */}
      <header>
        <nav className="navbar">
          <div className="logo-container">
            <img src={TryOnLogo} alt="Virtual Try On Logo" className="logo" />
            <h1 className="brand-name">Virtual Try On</h1>
          </div>

          <ul className="nav-links">
            <li><a href="/About"><h1>About Us</h1></a></li>
            <li><a href="/contact"><h1>Contact</h1></a></li>
            <li><a href="/TryOn"><h1>TryOn</h1></a></li>
          </ul>

          <div className="nav-actions">
            <input type="text" placeholder="Search products..." className="search-bar" />
            <a href="#" className="cart-icon" aria-label="Shopping Cart">🛒</a>

            <div className="icon-section">
              <a href="/profile" aria-label="Profile">
                <img src={userIcon} alt="Profile" className="icon-img" />
              </a>
              <a href="/wishlist" aria-label="Wishlist">
                <img src={wishlistIcon} alt="Wishlist" className="icon-img" />
              </a>
              <a href="/payments" aria-label="Payments">
                <img src={paymentsIcon} alt="Payments" className="icon-img" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-banner">
        <div className="hero-content">
          <h1 className="animated-heading"><span>Step Into Style</span></h1>
          <p>Try before you buy! Explore our exclusive collection of virtual accessories.</p>
          <a href="#products" className="shop-now-btn">Try Now</a>
        </div>

        <div className="hero-image">
          <model-viewer
            src={heroModel}
            autoplay
            camera-controls
            auto-rotate
            environment-image="neutral"
            shadow-intensity="1"
            style={{ width: "500px", height: "500px" }}
          ></model-viewer>
        </div>
      </section>


      {/* Featured Products */}
      <section id="featured-product" className="featured-product">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {[
            { img: product1, name: "Silver-Necklace", price: "₹2,499" },
            { img: product2, name: "Designer Necklace", price: "₹999" },
            { img: product3, name: "Elegant Ring", price: "₹1,299" },
            { img: product4, name: "Charm Bracelet", price: "₹1,799" }
          ].map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.img} alt={product.name} className="zoomable-product" />
              <h3 className="product-name">{product.name}</h3>
              <p>Price: {product.price}</p>
              <button className="try-now-btn">Try Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Collaborations */}
      <section className="collaboration" id="collaboration">
        <h2>Our Collaborations</h2>
        <div className="carousel">
          <div className="carousel-track">
            {[brand1, brand2, brand3, brand4, brand5].map((brand, index) => (
              <div className="brand" key={index}>
                <img src={brand} alt={`brand-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="content">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.8rem', fontWeight: '700' }}>
            Experience <span className="Virtual-Try-On" style={{ color: '#C59D5F' }}>Virtual Try-On</span> Trial Room.
            <br />Browse, Try, and Find Your Perfect Fit!
          </h2>
          <p style={{ fontSize: '1rem', marginTop: '1rem' }}>
            Explore a wide selection of styles, outfits, and accessories in our Virtual Trial Room.
            Easily filter by occasion, color, or fabric, and find options tailored to your taste.
            Enter your body measurements for personalized sizing recommendations.
          </p>

          <ol style={{ fontSize: '1.4rem', lineHeight: '1.8', listStyle: 'none', paddingLeft: '0' }}>
            {[
              { icon: "/icons/virtuon_select.png", text: "Upload a clear image of yourself or use your webcam." },
              { icon: "/icons/virtuon_body_size2.png", text: "Select the jewelry you want to try on from our catalog." },
              { icon: "/icons/virtuon_try.png", text: "Experience how it looks with our AR technology in real-time." },
              { icon: "/icons/886404_save_512x512.png", text: "Save or share your favorite looks!" }
            ].map((item, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                <img src={item.icon} alt={`step-${index}`} style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                {item.text}
              </li>
            ))}
          </ol>
        </div>

        <div className="video-section">
          <video className="zoomable-video" controls>
            <source src={howItWorksVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Map */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.831225921378!2d-122.08424968465802!3d37.42206597982439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c5ffdfbdf%3A0x34e9b81e24e2e1b8!2sGoogleplex!5e0!3m2!1sen!2sin!4v1680034524309!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </div>

        {/* Enhanced Footer */}
<footer className="site-footer">
  <div className="footer-container">
    <div className="footer-column">
      <h3>Virtual Try-On</h3>
      <p>Explore and try on premium jewelry virtually before making your final purchase. Designed for elegance and convenience.</p>
    </div>
    <div className="footer-column">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/About">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/TryOn">Try Now</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Contact</h4>
      <p>Email: support@tryonjewels.com</p>
      <p>Phone: +91-9876543210</p>
      <p>Location: Lucknow, India</p>
    </div>
    <div className="footer-column">
      <h4>Follow Us</h4>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
      <form className="newsletter-form">
        <input type="email" placeholder="Your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>
  <div className="footer-bottom">
  </div>
</footer>

     

   


      {/* Footer */}
      <footer>
        <p>&copy; 2024 Virtual Jewelry Try-On. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;








