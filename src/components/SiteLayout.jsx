import { useEffect, useLayoutEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/portfolioContent";

export const SiteLayout = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme === "light" ? "light" : "dark";
  });
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="portfolio-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <header className="site-header">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-8 lg:px-10">
          <NavLink to="/" className="brand-mark reveal">
            Abraham Ou
          </NavLink>

          <div className="flex flex-wrap items-center gap-2 reveal delay-1">
            <nav className="flex flex-wrap items-center gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    cn("nav-link", isActive && "nav-link-active")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <button
              type="button"
              onClick={() =>
                setTheme((currentTheme) =>
                  currentTheme === "dark" ? "light" : "dark"
                )
              }
              className="theme-toggle"
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              aria-pressed={theme === "dark"}
            >
              <span className="theme-toggle-track">
                <span
                  className={cn(
                    "theme-toggle-thumb",
                    theme === "dark" && "theme-toggle-thumb-dark"
                  )}
                >
                  {theme === "dark" ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                </span>
              </span>
              <span className="theme-toggle-label">
                {theme === "dark" ? "Dark" : "Light"}
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="site-main mx-auto w-full max-w-6xl px-5 pb-16 pt-6 md:px-8 lg:px-10 lg:pb-24 lg:pt-10">
        <Outlet />
      </main>

      <footer className="footer-row mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 pb-8 text-xs uppercase tracking-[0.22em] md:px-8 lg:px-10">
        <span>Abraham Ou</span>
        <span>Embedded Software Engineer</span>
      </footer>
    </div>
  );
};
