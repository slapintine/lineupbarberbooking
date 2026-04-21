import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  const [theme, setTheme] = useState(() => localStorage.getItem("lineup-theme") || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("lineup-theme", theme);
  }, [theme]);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Outlet />
      </main>
      <Footer theme={theme} />
    </div>
  );
}
