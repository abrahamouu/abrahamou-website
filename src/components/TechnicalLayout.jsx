import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const TechnicalHero = ({ title, label, children, action }) => (
  <header className="technical-hero technical-corners">
    <h1>{title}</h1>
    <div className="technical-hero-copy">
      <span className="technical-label">{label}</span>
      <p>{children}</p>
      {action}
    </div>
  </header>
);

export const TechnicalCTA = ({ title, label, children, to, linkText }) => (
  <section className="technical-cta technical-corners">
    <h2>{title}</h2>
    <div className="technical-hero-copy">
      <span className="technical-label">{label}</span>
      <p>{children}</p>
      <Link className="technical-button" to={to}>
        {linkText} <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </div>
  </section>
);

export const TechnicalWindow = ({ label, children, className = "" }) => (
  <div className={`technical-window ${className}`}>
    <div className="technical-window-bar">
      <span>{label}</span>
      <span aria-hidden="true">− □</span>
    </div>
    {children}
  </div>
);
