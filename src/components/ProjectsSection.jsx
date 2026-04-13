import { createElement } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Rovera | Real-Time TCP-Controlled UGV Platform",
    description:
      "Rovera is a high-speed, sensor-driven micro-rover system that uses TCP socket communication to enable reliable real-time control, telemetry streaming, and autonomous navigation experimentation.",
    image: "/projects/project5.png",
    tags: ["React", "Tailwind CSS", "API"],
    demoUrl: "https://roverauci.vercel.app",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Client Personal Website",
    description:
      "A professional personal website that showcases academic achievements, research interests, and projects to support college and graduate school applications.",
    image: "/projects/clientpersonalwebsite.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Embedded System | Building Management System",
    description:
      "An IoT-based Building Management System in Python that automates HVAC and lighting using sensor data and multithreading for real-time responsiveness.",
    image: "/projects/project1.png",
    tags: ["Python", "Multi-Threading", "API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "MIPS Pipelined Processor",
    description:
      "Designed and implemented a 5-stage pipelined MIPS processor in Verilog, including hazard detection and forwarding units to handle structural, data, and control hazards.",
    image: "/projects/project2.png",
    tags: ["Verilog", "Hazard Control", "Unit Testing"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Movie Lab Video Processing (C/C++)",
    description:
      "Developed a C/C++ video processing tool that applied image filters, color conversions, and frame transformations to enhance and analyze YUV-format movies.",
    image: "/projects/project3.png",
    tags: ["C/C++", "YUV->RGB", "Algorithms"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 6,
    title: "Autonomous Robot with Object Detection",
    description:
      "Built an autonomous rover in Arduino with object detection and path-tracing capabilities using PixyCam vision and infrared sensors.",
    image: "/projects/project4.png",
    tags: ["Arduino", "Self-Navigation", "Embedded Systems"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectAction = ({ href, label, icon }) => {
  const baseClassName =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground/80 transition-all duration-300";

  if (href === "#") {
    return (
      <span
        className={`${baseClassName} cursor-not-allowed opacity-40`}
        aria-hidden="true"
      >
        {createElement(icon, { size: 18 })}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`${baseClassName} hover:-translate-y-1 hover:border-primary/50 hover:text-primary`}
    >
      {createElement(icon, { size: 18 })}
    </a>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="section-shell px-6 py-10 md:px-10 md:py-14">
          <div className="mb-12 text-center">
            <span className="section-kicker">Featured Work</span>
            <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
              Selected builds from robotics to product UI.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
              A few recent projects that show how I like to blend engineering
              depth with clean presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.id} className="surface-card group overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
                    Project {project.id.toString().padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground/70">
                      Explore links
                    </span>
                    <div className="flex items-center gap-3">
                      <ProjectAction
                        href={project.demoUrl}
                        label={`${project.title} demo`}
                        icon={ExternalLink}
                      />
                      <ProjectAction
                        href={project.githubUrl}
                        label={`${project.title} GitHub`}
                        icon={Github}
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              className="cosmic-button mx-auto w-fit"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/abrahamouu"
            >
              Check My GitHub
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
