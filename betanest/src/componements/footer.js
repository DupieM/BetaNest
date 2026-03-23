import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaDiscord } from 'react-icons/fa';
import logo from './logo.png';
import footerBg from './footer_bg.png';
import './footer.css';

const Footer = () => {
  return (
    <footer 
      className="footer"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-section left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h2 className="brand-name">BETANEST</h2>
        </div>

        {/* MIDDLE */}
        <div className="footer-section middle">
          <div>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>FAQ's</p>
            <p>Terms of Service</p>
          </div>

          <div>
            <h4>Community</h4>
            <p>Blog</p>
            <p>Discord</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-section right">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaYoutube />
            <FaDiscord />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        Copyright © 2025 BetaNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;