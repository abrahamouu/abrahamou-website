import { ArrowUpRight } from "lucide-react";
import {
  TechnicalCTA,
  TechnicalHero,
  TechnicalWindow,
} from "@/components/TechnicalLayout";
import {
  experienceItems,
  resumeUrl,
  skillGroups,
} from "@/data/portfolioContent";

export const Experience = () => (
  <div className="technical-page">
    <TechnicalHero
      label="Experience / Embedded & networked systems"
      title={
        <>
          Systems.
          <br />
          In practice.
        </>
      }
      action={
        <a
          className="technical-button"
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          View resume <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      }
    >
      My current role, previous backend work, and the technical foundation
      behind it all.
    </TechnicalHero>

    <section className="technical-section" aria-labelledby="career-heading">
      <div className="technical-section-heading">
        <span className="technical-label">01 / The foundation</span>
        <h2 id="career-heading">
          Career &<br />
          education.
        </h2>
      </div>
      <div className="technical-career-grid">
        {experienceItems.map((item, index) => (
          <article key={item.company} className="technical-career-card">
            <div
              className="technical-panel technical-career-panel"
              aria-hidden="true"
            >
              <div className="technical-panel-caption">
                <span>0{index + 1}</span>
                <span>{item.label}</span>
              </div>
              <TechnicalWindow label={item.label}>
                <div className="technical-company-window">
                  <span>{item.company}</span>
                  <small>{item.period}</small>
                </div>
              </TechnicalWindow>
            </div>
            <div className="technical-career-copy">
              <span className="technical-label">
                {item.label} / {item.period}
              </span>
              <h3>{item.title}</h3>
              <p className="technical-company">{item.company}</p>
              <p className="technical-summary">{item.summary}</p>
              <ul className="technical-highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="technical-career-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="technical-section" aria-labelledby="toolkit-heading">
      <div className="technical-section-heading">
        <span className="technical-label">02 / Tools & focus</span>
        <h2 id="toolkit-heading">My toolkit.</h2>
      </div>
      <div className="technical-stack-grid">
        {skillGroups.map((group, index) => (
          <div className="technical-stack" key={group.title}>
            <span className="technical-label">0{index + 1}</span>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <TechnicalCTA
      title={
        <>
          See it
          <br />
          in action.
        </>
      }
      label="Selected projects"
      to="/projects"
      linkText="Explore projects"
    >
      A closer look at my work across embedded systems, architecture, and
      software.
    </TechnicalCTA>
  </div>
);
