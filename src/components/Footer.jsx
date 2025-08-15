import mainLogo from '../assets/main-logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-brand">
          <a href="/" className="logo">
            <img src={mainLogo} alt="Aakaasha Logo" className="logo-icon" />
            <span className="logo-text">aakaasha.in</span>
          </a>
          <p>A space for thoughts on life, existence, and finding peace in the uncontrollable.</p>
        </div>
        <div className="footer-quote">
          <blockquote>
            "You can't control the way things are. You can just let it be."
          </blockquote>
          <p>Co-founded with AI • A spark in the vast digital ether</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Aakaasha. All rights reserved. • Made with intention and code.</p>
      </div>
    </footer>
  );
}

export default Footer;