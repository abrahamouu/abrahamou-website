import { ArrowUpRight } from "lucide-react";
import { projectItems } from "@/data/portfolioContent";

export const Projects = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <section className="page-intro reveal">
        <span className="section-label">Projects</span>
        <h1 className="section-title mt-4">Selected Technical Work</h1>
        <p className="section-copy mt-4 max-w-3xl">
          A broader set of projects across embedded systems, architecture,
          control, and software delivery.
        </p>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {projectItems.map((project, index) => (
          <article
            key={project.title}
            className={`surface-card project-card p-5 sm:p-6 reveal delay-${
              Math.min(index + 1, 5)
            }`}
          >
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <span className="section-label">{project.category}</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="card-title mt-4">{project.title}</h2>
            <p className="card-copy mt-3">{project.summary}</p>
            <p className="project-detail-copy mt-4">{project.detail}</p>

            {project.href && (
              <div className="mt-6">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  Open project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            )}
          </article>
        ))}
      </section>
    </div>
  );
};
