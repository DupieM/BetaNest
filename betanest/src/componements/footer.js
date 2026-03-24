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
            <a href="/about_us"><p>About Us</p></a>
            <a href="/contact_us"><p>Contact Us</p></a>
            <a href="/faq"><p>FAQ's</p></a>
            <a href="/t&c"><p>Terms of Service</p></a>
          </div>

          <div>
            <h4>Community</h4>
            <a href="/"><p>Blog</p></a>
            <p>Discord</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-section right">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={23} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={23} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={23} />
            </a>
            <a href="https://za.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={23} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={23} />
            </a>
            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
              <FaDiscord size={23} />
            </a>
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