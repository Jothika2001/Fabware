
import React, { useState } from "react";
import images from "../../assets/images";
import "./Footer.css";
import emailjs from "emailjs-com";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_FOOTERTEMPLATE_ID,
        { email },
        import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("Error sending email: ", error.text);
        }
      );
    setEmail("");
  };

  return (
    <>
      <div className="footer" style={{ overflowX: "hidden" }}>
        <footer>
          <div className="image-container">
          <Link to="/">
                <img src={images.image47} alt="" />
                <img src={images.FABWARE} alt="" style={{ marginLeft: "12px" }} />
              </Link>
          </div>
          <div className="footer-content">
            <div className="footer-desc">
              <p>
                FABWARE offers high-quality, innovative home and lifestyle
                products designed for convenience and durability. Trusted by
                thousands, we make everyday essentials more practical and
                stylish.
              </p>
              <div className="footer-links">
                <a
                  href="https://www.instagram.com/fabware.in?igsh=MTRnMTd1a2c4Ymx1dw=="
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i> 
                </a>
                <a href="mailto:fabware087@gmail.com">
                  <i className="fa-solid fa-envelope"></i> 
                </a>
                <a href="tel:+919876543210">
                  <i className="fa-solid fa-phone"></i>
                </a>
              </div>
            </div>
            <div className="quick-links">
              <h3>Quick Links</h3>
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/products">Products</a>
              <a href="/contact">Contact</a>
              <a href="/faq">FAQ</a>
            </div>
            <div className="product-links">
              <h3>Product Link</h3>
              <a href="/products/toilet-paper-holder">Toilet Paper Holder</a>
              <a href="/products/lint-roller">Lint Remover for Clothes</a>
              <a href="/products/water-bottle">
                Insulated thermos water bottle
              </a>
            </div>
            <div className="footer-about">
              <h4>About us</h4>
              <p>You can contact us by sending an email to us.</p>
              <div>
                <input
                  className="bt-in input"
                  type="email"
                  placeholder="Your mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  className="bt-foot"
                  style={{ margin: "-42px 129px" }}
                  onClick={sendEmail}
                >
                  <img src={images.send} alt="" className="bt-img" />
                </button>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>© 2024 Fabware | Developed by zenhook</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
