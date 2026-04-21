import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../data";
import Brand from "./Brand";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <Brand theme={theme} onClick={() => setOpen(false)} />

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-panel ${open ? "open" : ""}`}>
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
          <Link to="/download-app" className="button button-primary nav-cta" onClick={() => setOpen(false)}>
            Download App
          </Link>
        </div>
      </nav>
    </header>
  );
}
