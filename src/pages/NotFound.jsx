import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="portfolio-shell flex min-h-screen items-center px-5 py-10">
      <div className="relative z-10 mx-auto w-full max-w-2xl">
        <div className="surface-card p-8 text-center sm:p-10">
          <p className="section-label justify-center">404</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Page not found.
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            The route you opened does not exist on this portfolio.
          </p>
          <Link to="/" className="primary-button mt-8 inline-flex">
            Back home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
