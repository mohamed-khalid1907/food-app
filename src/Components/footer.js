import "./footer.css";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="subscribe-container">
        <div className="form-container">
          <h2>Subscribe</h2>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            lacinia porta lorem at eleifend.
          </p>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="email" placeholder="Your Email" />
            <input type="submit" value="SUBSCRIBE" />
          </form>
        </div>
      </div>
      <div className="footer" id="footer">
        <div className="footer-columns">
          <div className="footer-column footer-text">
            <h3>
              <a href="http://www.freepik.com">Designed by Freepik</a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil
              corporis ipsum obcaecati earum recusandae!
            </p>
            <div className="social-icons">
              <a className="icon" href="https://instagram.com">
                <img
                  src={require("./images/Instagram.png")}
                  alt="Instagram"
                  width="40px"
                />
              </a>
              <a className="icon" href="https://facebook.com">
                <img
                  src={require("./images/Facebook.png")}
                  alt="Facebook"
                  width="40px"
                />
              </a>
              <a className="icon" href="https://x.com">
                <img
                  src={require("./images/Twitter.png")}
                  alt="Twitter"
                  width="40px"
                />
              </a>
              <a className="icon" href="https://whatsapp.com">
                <img
                  src={require("./images/WhatsApp.png")}
                  alt="Whatsapp"
                  width="40px"
                />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3>ABOUT</h3>
            <a href="#about">History</a>
            <a href="#about">Our Team</a>
            <a href="#footer">Brand Guidelines</a>
            <a href="#footer">Terms & Condition</a>
            <a href="#footer">Privacy Policy</a>
          </div>
          <div className="footer-column">
            <h3>SERVICES</h3>
            <a href="#home">How to order</a>
            <a href="#home">Payment Method</a>
            <a href="#product">Our Product</a>
            <a href="#home">Order Status</a>
            <a href="#stats">Promo</a>
          </div>
          <div className="footer-column">
            <h3>OTHER</h3>
            <a href="#contact">Contact US</a>
            <a href="#footer">Help</a>
            <a href="#footer">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
