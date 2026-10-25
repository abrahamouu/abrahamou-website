export const PageIntro = ({ label, title, children }) => (
  <header className="page-intro reveal">
    <span className="section-label">{label}</span>
    <h1 className="page-title">{title}</h1>
    <p className="page-description">{children}</p>
  </header>
);
