import { cn } from "@/lib/utils";
import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        isScrolled ? "pt-3" : "pt-5"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6",
            isScrolled
              ? "border-border/70 bg-background/75 shadow-[0_18px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <a
            className="flex items-center gap-3 text-foreground"
            href="#hero"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/12 text-primary">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight md:text-xl">
              abraham<span className="text-primary">.ou</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground shadow-[0_10px_30px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:text-primary md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-30 md:hidden transition-all duration-300",
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        <div className="relative flex h-full items-start justify-center px-4 pt-24">
          <div className="section-shell w-full max-w-sm px-6 py-8">
            <div className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
              Navigation
            </div>
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80 transition-all duration-300 hover:border-primary/50 hover:bg-primary/8 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
