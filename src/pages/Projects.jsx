import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  TechnicalCTA,
  TechnicalHero,
  TechnicalWindow,
} from "@/components/TechnicalLayout";
import { projectItems } from "@/data/portfolioContent";
import { ProjectIllustration } from "@/components/ProjectIllustration";

export const Projects = () => (
  <div className="technical-page">
    <TechnicalHero
      label={`Projects / ${String(projectItems.length).padStart(2, "0")} selected builds`}
      title={
        <>
          From idea
          <br />
          to system.
        </>
      }
      action={
        <a className="technical-button" href="#project-index">
          Explore projects <ArrowDown size={18} aria-hidden="true" />
        </a>
      }
    >
      Projects across embedded systems, AI, databases, games, and software
      delivery.
    </TechnicalHero>

    <section
      id="project-index"
      className="technical-section"
      aria-labelledby="projects-heading"
    >
      <div className="technical-section-heading technical-heading-centered">
        <span className="technical-label">01 / Project index</span>
        <h2 id="projects-heading">
          Built to do
          <br />
          real work.
        </h2>
      </div>
      <div className="technical-project-grid">
        {projectItems.map((project, index) => (
          <article key={project.title} className="technical-project-card">
            <div className="technical-panel technical-project-panel">
              <div className="technical-panel-caption">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.category}</span>
              </div>
              <TechnicalWindow label={project.title}>
                <div className="technical-image-frame">
                  {project.illustration ? (
                    <ProjectIllustration kind={project.illustration} />
                  ) : (
                    <img
                      src={project.image}
                      alt={`${project.title} project`}
                      loading="lazy"
                    />
                  )}
                </div>
              </TechnicalWindow>
              <div className="technical-project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="technical-project-copy">
              <span className="technical-label">{project.category}</span>
              <h3>{project.title}</h3>
              <p className="technical-summary">{project.summary}</p>
              {project.detail && (
                <p className="technical-detail">{project.detail}</p>
              )}
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="technical-project-link"
                  aria-label={`${project.linkLabel || "Open project"}: ${project.title}`}
                >
                  {project.linkLabel || "Open project"}{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>

    <TechnicalCTA
      title={
        <>
          Let’s build
          <br />
          something.
        </>
      }
      label="Get in touch"
      to="/contact"
      linkText="Contact me"
    >
      Have a project in mind? Let’s talk about systems, software, and what comes
      next.
    </TechnicalCTA>
  </div>
);
