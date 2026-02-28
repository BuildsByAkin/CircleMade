import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="logo-text">CircleMade</span>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <span className="footer-copyright">© 2025 CircleMade.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
