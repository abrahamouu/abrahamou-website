import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import {
  heroContent,
  homePreviewLinks,
  profileCard,
  profileImagePath,
  quickFacts,
  resumeUrl,
  skillGroups,
} from "@/data/portfolioContent";

export const Home = () => {
  const focusPreview = skillGroups.slice(0, 2);

  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="reveal">
          <span className="section-label">{heroContent.eyebrow}</span>
          <h1 className="hero-title mt-6">{heroContent.title}</h1>
          <p className="hero-copy mt-5">{heroContent.intro}</p>

          <div className="page-actions mt-8 flex flex-wrap gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <Link to="/experience" className="secondary-button">
              View Experience
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {quickFacts.map((fact, index) => (
              <span
                key={fact}
                className={`fact-pill reveal delay-${Math.min(index + 1, 5)}`}
              >
                {fact}
              </span>
            ))}
          </div>
        </div>

        <aside className="surface-card reveal delay-2 p-5 sm:p-6">
          <div className="profile-frame">
            <img
              src={profileImagePath}
              alt="Portrait of Abraham Ou"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="mt-5">
            <span className="section-label">Current Role</span>
            <h2 className="card-title mt-4">{profileCard.role}</h2>
            <p className="card-meta mt-2">{profileCard.company}</p>
            <p className="card-copy mt-4">{profileCard.note}</p>

            <div className="muted-inline mt-5 inline-flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              {profileCard.location}
            </div>
          </div>
        </aside>
      </section>

      <section className="reveal delay-2">
        <div className="section-heading-row">
          <div>
            <span className="section-label">Overview</span>
            <h2 className="section-title mt-4">Quick Navigation</h2>
          </div>
          <p className="section-copy">
            Use the dedicated pages for the full detail.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homePreviewLinks.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              className={`surface-card preview-card p-5 sm:p-6 reveal delay-${
                Math.min(index + 2, 5)
              }`}
            >
              <span className="section-label">Open</span>
              <h3 className="card-title mt-4">{item.title}</h3>
              <p className="card-copy mt-3">{item.description}</p>
              <span className="inline-link mt-6">
                View page
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="surface-card reveal delay-3 p-6 sm:p-8">
          <span className="section-label">Focus</span>
          <h2 className="section-title mt-4">Current Technical Areas</h2>

          <div className="mt-8 grid gap-6">
            {focusPreview.map((group) => (
              <div key={group.title}>
                <h3 className="stack-label">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card reveal delay-4 p-6 sm:p-8">
          <span className="section-label">What Changed</span>
          <h2 className="section-title mt-4">Concise Home, Deeper Pages</h2>
          <p className="section-copy mt-4">
            The home page stays intentionally short. Experience, projects, and the
            memory book each live on their own page so the main screen stays
            clean.
          </p>
        </div>
      </section>
    </div>
  );
};
