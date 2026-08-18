import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="page-intro reveal">
      <span className="section-label">404</span>
      <h1 className="section-title mt-4">Page not found.</h1>
      <p className="section-copy mt-4 max-w-2xl">
        The page you opened does not exist on this site.
      </p>
      <Link to="/" className="primary-button mt-8 inline-flex">
        Back home
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
};
