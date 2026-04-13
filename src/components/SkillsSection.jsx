import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 50, category: "frontend" },
  { name: "React", level: 25, category: "frontend" },
  { name: "Tailwind CSS", level: 25, category: "frontend" },
  { name: "Next.js", level: 25, category: "frontend" },

  // Backend
  { name: "Python", level: 75, category: "backend" },
  { name: "C", level: 75, category: "backend" },
  { name: "C++", level: 50, category: "backend" },
  { name: "Java", level: 50, category: "backend" },
  { name: "Node.js", level: 30, category: "backend" },
  { name: "PostgreSQL", level: 30, category: "backend" },

  //hardware
  { name: "VHDL", level: 50, category: "hardware" },
  { name: "Verilog", level: 70, category: "hardware" },

  //Design
  { name: "Cadence Virtuoso", level: 50, category: "design" },
  { name: "OrCAD", level: 50, category: "design" },
  { name: "LTSpice/PSpice", level: 50, category: "design" },
  { name: "Solidworks", level: 50, category: "design" },
  { name: "AutoDesk Inventor", level: 50, category: "design" },

  // Tools
  { name: "Git/GitHub", level: 70, category: "tools" },
  { name: "Figma", level: 50, category: "tools" },
  { name: "VS Code", level: 80, category: "tools" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "hardware",
  "design",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="section-shell px-6 py-10 md:px-10 md:py-14">
          <div className="mb-10 text-center">
            <span className="section-kicker">Toolkit</span>
            <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
              My stack changes shape depending on the problem.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
              From front-end polish to embedded logic and hardware design, these
              are the tools I reach for most often.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold capitalize transition-all duration-300",
                  activeCategory === category
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_14px_30px_hsl(var(--primary)/0.22)]"
                    : "border-border bg-background/70 text-foreground/80 hover:border-primary/40 hover:bg-primary/8 hover:text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="surface-card p-6 text-left">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
                      {skill.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/80">
                  <div
                    className="h-full origin-left rounded-full animate-[grow_1.5s_ease-out]"
                    style={{
                      width: `${skill.level}%`,
                      background:
                        "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
                    }}
                  />
                </div>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Confidence level based on how often I build with it in real
                  projects.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
