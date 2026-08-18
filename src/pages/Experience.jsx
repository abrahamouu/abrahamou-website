import { Cpu, Shield, Workflow } from "lucide-react";
import { experienceItems, skillGroups } from "@/data/portfolioContent";

const experienceIcons = [Cpu, Workflow, Shield];

export const Experience = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <section className="page-intro reveal">
        <span className="section-label">Experience</span>
        <h1 className="section-title mt-4">Professional Career</h1>
        <p className="section-copy mt-4 max-w-3xl">
          A more detailed view of my current role, previous backend experience,
          and technical foundation.
        </p>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        {experienceItems.map((item, index) => {
          const Icon = experienceIcons[index];

          return (
            <article
              key={`${item.company}-${item.title}`}
              className={`surface-card detail-card p-5 sm:p-6 reveal delay-${
                Math.min(index + 1, 5)
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="icon-chip">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="meta-pill">{item.period}</span>
              </div>

              <span className="section-label mt-5">{item.label}</span>
              <h2 className="card-title mt-4">{item.title}</h2>
              <p className="card-meta mt-2">{item.company}</p>
              <p className="card-copy mt-4">{item.summary}</p>

              <div className="detail-list mt-5">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="detail-list-row">
                    <span className="detail-dot" />
                    <p>{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section className="surface-card reveal delay-4 p-6 sm:p-8">
        <span className="section-label">Stack Snapshot</span>
        <h2 className="section-title mt-4">Core Tools and Focus Areas</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
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
      </section>
    </div>
  );
};
