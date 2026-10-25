import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { navLinks, resumeUrl, socialLinks } from "@/data/portfolioContent";

const pageTitles = {
  "/": "Embedded Software Engineer",
  "/experience": "Experience",
  "/projects": "Projects",
  "/contact": "Contact",
};

const surfaceColors = {
  home: { light: "#09aea1", dark: "#174c46" },
  technical: { light: "#1e1e1e", dark: "#131617" },
  default: { light: "#abbab9", dark: "#242d2c" },
};

export const SiteLayout = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isTechnical = ["/experience", "/projects"].includes(location.pathname);
  const surface = isHome ? "home" : isTechnical ? "technical" : "default";

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", surfaceColors[surface][theme]);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Theme selection still works when browser storage is unavailable.
    }
  }, [theme, surface]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = `Abraham Ou — ${pageTitles[location.pathname] || "Page not found"}`;
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <div
      className={cn(
        "portfolio-shell",
        isHome && "portfolio-shell-home",
        isTechnical && "portfolio-shell-technical",
      )}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-row">
          <NavLink
            to="/"
            className="brand-mark"
            onClick={() => setMenuOpen(false)}
          >
            Abraham Ou
            <span className="brand-dot" aria-hidden="true">
              ↗
            </span>
          </NavLink>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks
              .filter((link) => link.to !== "/" && link.to !== "/contact")
              .map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn("nav-link", isActive && "nav-link-active")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
          </nav>
          <div className="header-actions">
            <button
              type="button"
              onClick={() =>
                setTheme((current) => (current === "dark" ? "light" : "dark"))
              }
              className="theme-toggle"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="nav-link header-resume"
            >
              Resume <ArrowUpRight size={16} />
            </a>
            <NavLink
              to="/contact"
              className="nav-link nav-contact"
              onClick={() => setMenuOpen(false)}
            >
              Get in touch <ArrowUpRight size={16} />
            </NavLink>
            <button
              ref={menuButton}
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                cn("mobile-nav-link", isActive && "nav-link-active")
              }
            >
              {link.label}
              <ArrowUpRight size={18} />
            </NavLink>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mobile-nav-link"
          >
            Resume <ArrowUpRight size={18} />
          </a>
        </nav>
      </header>
      <main id="main-content" className="site-main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-top">
          <NavLink to="/" className="footer-name">
            Abraham Ou<span aria-hidden="true">↗</span>
          </NavLink>
          <div className="footer-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom mono">
          <span>Embedded software. Connected systems.</span>
          <span>© {new Date().getFullYear()} Abraham Ou</span>
          <span>Irvine, California</span>
        </div>
      </footer>
    </div>
  );
};
