import React from "react";
import "../Style/Footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>www.Travll.com</h1>
          <p>A brief description of your website</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li>Career</li>
            <li>About-us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
