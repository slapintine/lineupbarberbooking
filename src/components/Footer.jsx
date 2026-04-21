import { Link } from "react-router-dom";
import Brand from "./Brand";

export default function Footer({ theme }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Brand theme={theme} footer />
          <p className="footer-copy">
            Premium barber discovery and booking, powered by the mobile app.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/legal">Legal</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-note">
          <p>Customers book in the app.</p>
          <p>Barbers join through Line Up.</p>
          <p>support@lineupbarberbooking.org</p>
          <p>lineupbarberbooking.org</p>
        </div>
      </div>
    </footer>
  );
}
