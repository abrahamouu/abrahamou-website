import {
  ArrowUpRight,
  Cpu,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Radar,
  Shield,
  Workflow,
} from "lucide-react";
import {
  contactLinks,
  heroContent,
  navLinks,
  profileCard,
  profileImagePath,
  projectItems,
  quickFacts,
  resumeUrl,
  skillGroups,
  socialLinks,
  experienceItems,
} from "@/data/portfolioContent";

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
};

const contactIcons = {
  Email: Mail,
  Phone,
  Location: MapPin,
  Resume: FileText,
};

const experienceIcons = [Cpu, Workflow, Shield];

export const SystemPortfolio = () => {
  return (
    <div className="portfolio-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <header className="site-header">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-8 lg:px-10">
          <a href="#" className="brand-mark reveal">
            Abraham Ou
          </a>

          <nav className="flex flex-wrap items-center gap-2 reveal delay-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pb-16 pt-6 md:px-8 lg:gap-10 lg:px-10 lg:pb-24 lg:pt-10">
        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="reveal">
            <span className="section-label">{heroContent.eyebrow}</span>
            <h1 className="hero-title mt-6">{heroContent.title}</h1>
            <p className="hero-copy mt-5">{heroContent.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a href="#experience" className="secondary-button">
                View Experience
              </a>
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

              <div className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4" />
                {profileCard.location}
              </div>
            </div>
          </aside>
        </section>

        <section id="experience" className="reveal delay-2">
          <div className="section-heading-row">
            <div>
              <span className="section-label">Experience</span>
              <h2 className="section-title mt-4">Professional Career</h2>
            </div>
            <p className="section-copy">
              Current role, previous work, and academic foundation.
            </p>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-3">
            {experienceItems.map((item, index) => {
              const Icon = experienceIcons[index];

              return (
                <article
                  key={`${item.company}-${item.title}`}
                  className={`surface-card experience-card p-5 sm:p-6 reveal delay-${
                    Math.min(index + 2, 5)
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="icon-chip">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="meta-pill">{item.period}</span>
                  </div>

                  <span className="section-label mt-5">{item.label}</span>
                  <h3 className="card-title mt-4">{item.title}</h3>
                  <p className="card-meta mt-2">{item.company}</p>
                  <p className="card-copy mt-4">{item.summary}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="reveal delay-3">
          <div className="section-heading-row">
            <div>
              <span className="section-label">Projects</span>
              <h2 className="section-title mt-4">Selected Work</h2>
            </div>
            <p className="section-copy">
              A few projects that reflect my technical range.
            </p>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-3">
            {projectItems.map((project, index) => (
              <article
                key={project.title}
                className={`surface-card project-card p-5 sm:p-6 reveal delay-${
                  Math.min(index + 2, 5)
                }`}
              >
                <div className="project-media">
                  <img src={project.image} alt={project.title} />
                </div>

                <h3 className="card-title mt-5">{project.title}</h3>
                <p className="card-copy mt-3">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div id="stack" className="surface-card reveal delay-4 p-6 sm:p-8">
            <span className="section-label">Stack</span>
            <h2 className="section-title mt-4">Technical Focus</h2>

            <div className="mt-8 grid gap-6">
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
          </div>

          <div id="contact" className="surface-card reveal delay-5 p-6 sm:p-8">
            <span className="section-label">Contact</span>
            <h2 className="section-title mt-4">Get in Touch</h2>
            <p className="section-copy mt-4 max-w-xl">
              Reach out for embedded software, systems, or product-focused engineering work.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactLinks.map((item) => {
                const Icon = contactIcons[item.label];

                const content = (
                  <div className="contact-tile">
                    <div className="icon-chip icon-chip-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="contact-label">{item.label}</p>
                      <p className="contact-value">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.label];

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="social-pill"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 pb-8 text-xs uppercase tracking-[0.22em] text-slate-500 md:px-8 lg:px-10">
        <span>Abraham Ou</span>
        <span>Embedded Software Engineer</span>
      </footer>
    </div>
  );
};
