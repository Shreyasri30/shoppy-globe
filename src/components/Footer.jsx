import React from 'react';

// Footer component with basic links and copyright
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <div className="footer-section">
          <h4>ShoppyGlobe</h4>
          <p>The simplest way to browse and buy great products.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/">Products</a>
          <a href="/cart">Cart</a>
          <a href="/checkout">Checkout</a>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} ShoppyGlobe. Built with React and Redux Toolkit.
        </p>
      </div>
    </footer>
  );
}

export default Footer;