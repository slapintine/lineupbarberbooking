import { Link } from "react-router-dom";

export default function Brand({ theme, onClick, footer = false }) {
  const isDark = theme === "dark";

  return (
    <Link to="/" className={`brand ${footer ? "footer-brand" : ""} ${isDark ? "brand-dark" : ""}`} onClick={onClick}>
      <img
        src="/logo.png"
        alt="Line Up Barber Booking logo"
        className={`brand-image ${isDark ? "brand-image-dark" : ""}`}
      />
      <span className={`brand-copy ${isDark ? "brand-copy-dark" : ""}`}>
        <strong>Line Up</strong>
        <small>Barber Booking</small>
      </span>
    </Link>
  );
}
