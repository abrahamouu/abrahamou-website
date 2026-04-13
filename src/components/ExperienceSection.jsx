import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Building2,
  Database,
  FileText,
  Rocket,
  Server,
  Zap,
} from "lucide-react";

const resumeUrl = "/resume/AbrahamOuResumeMarch2026.pdf";

const experiences = [
  {
    company: "Homigo Inc.",
    role: "Backend Developer (Lead)",
    period: "Dec 2025 - Present",
    website: "https://homigoapp.io",
    featured: true,
    summary:
      "Leading backend architecture for a production marketplace, with ownership across APIs, data modeling, payments, and performance.",
    tags: ["REST APIs", "PostgreSQL", "Stripe Connect", "Performance"],
    stats: [
      { value: "75%", label: "Dashboard latency reduction" },
      { value: "Live", label: "Marketplace backend ownership" },
    ],
    highlights: [
      "Designed and implemented RESTful APIs for authentication, job lifecycle, bidding, and scheduling to support end-to-end marketplace workflows.",
      "Reduced dashboard latency by 75% by consolidating multi-query client requests into a single endpoint and removing redundant database calls.",
      "Architected relational PostgreSQL schemas and query patterns that improved query performance and readability across multi-tab consumer dashboards.",
      "Built a Stripe Connect escrow flow with webhook-driven state transitions to ensure atomic payment handling and payout reliability.",
      "Led backend system design decisions across API contracts, data modeling, and performance optimization in a cross-functional team.",
    ],
  },
  {
    company: "Rovera",
    role: "Lead Software Engineer",
    period: "Aug 2025 - Mar 2026",
    website: "https://roverauci.vercel.app",
    featured: false,
    summary:
      "Built the software backbone for an SDR-enabled rover platform spanning embedded hardware, backend infrastructure, and real-time UI.",
    tags: ["FastAPI", "Supabase", "React/Next.js", "SDR"],
    stats: [
      { value: "85%", label: "Decode accuracy under noise" },
      { value: "Full stack", label: "Embedded to frontend" },
    ],
    highlights: [
      "Led end-to-end development of a wireless research rover platform integrating PlutoSDR, Raspberry Pi, GPS, and IMU for real-time navigation and communication.",
      "Designed a custom navigation algorithm combining GPS and heading data for autonomous waypoint tracking and movement control.",
      "Engineered a digital communication pipeline that improved decoding accuracy from 55% to 85% under noisy channel conditions.",
      "Built backend infrastructure with FastAPI and Supabase, then paired it with a React/Next.js frontend for live telemetry and command workflows.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="section-shell px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="text-left">
              <span className="section-kicker">Experience</span>
              <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
                Recent work with real systems, real users, and real constraints.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                I like roles where architecture, speed, and product thinking all
                matter. Homigo is the clearest example of that right now, so I
                made it the centerpiece here.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="surface-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-primary/12 p-3 text-primary">
                      <Server className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        Backend systems that stay fast under real usage
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        API design, data modeling, performance tuning, and
                        payment flows are where I&apos;ve been pushing hardest.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="surface-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-primary/12 p-3 text-primary">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        End-to-end ownership is the pattern
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        From embedded experiments to marketplace architecture, I
                        usually work across boundaries instead of staying in one
                        narrow layer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href="https://homigoapp.io"
                  target="_blank"
                  rel="noreferrer"
                  className="cosmic-button"
                >
                  Visit Homigo
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-button"
                >
                  View Resume
                  <FileText size={16} />
                </a>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-3 top-8 bottom-8 w-px bg-gradient-to-b from-primary/80 via-primary/25 to-transparent" />

              <div className="space-y-6">
                {experiences.map((experience) => (
                  <article
                    key={`${experience.company}-${experience.role}`}
                    className={cn(
                      "surface-card relative overflow-hidden p-6 text-left md:p-7",
                      experience.featured &&
                        "border-primary/35 bg-[linear-gradient(160deg,hsl(var(--card)/0.98),hsl(var(--primary)/0.08),hsl(var(--card)/0.86))]"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute -left-[2.08rem] top-8 h-4 w-4 rounded-full border-4 border-background shadow-[0_0_0_6px_hsl(var(--background)/0.55)]",
                        experience.featured
                          ? "bg-primary shadow-[0_0_24px_hsl(var(--primary)/0.45)]"
                          : "bg-accent shadow-[0_0_24px_hsl(var(--accent)/0.35)]"
                      )}
                    />

                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            <Building2 className="h-3.5 w-3.5" />
                            {experience.company}
                          </div>
                          {experience.featured && (
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                              <Zap className="h-3.5 w-3.5" />
                              Featured Role
                            </div>
                          )}
                        </div>

                        <h3 className="mt-4 text-2xl font-semibold">
                          {experience.role}
                        </h3>
                        <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-foreground/60">
                          {experience.period}
                        </p>
                      </div>

                      {experience.website && experience.website !== "#projects" ? (
                        <a
                          href={experience.website}
                          target="_blank"
                          rel="noreferrer"
                          className="ghost-button shrink-0"
                        >
                          Company Site
                          <ArrowUpRight size={16} />
                        </a>
                      ) : (
                        <a href={experience.website} className="ghost-button shrink-0">
                          See Related Work
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>

                    <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                      {experience.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      {experience.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-2xl border border-border/70 bg-background/60 p-4"
                        >
                          <p className="font-display text-2xl font-semibold">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-3">
                      {experience.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/45 px-4 py-3"
                        >
                          <div className="mt-0.5 rounded-xl bg-primary/12 p-2 text-primary">
                            {experience.featured ? (
                              <Database className="h-4 w-4" />
                            ) : (
                              <Rocket className="h-4 w-4" />
                            )}
                          </div>
                          <p className="text-sm leading-6 text-muted-foreground">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
