import { createElement, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  CircuitBoard,
  Code2,
  Cpu,
  MapPin,
  Sparkles,
} from "lucide-react";

const PROFILE_IMAGE_PATH = "/profile/profile.png";

const orbitPills = [
  {
    icon: Cpu,
    label: "Embedded",
    className: "-left-4 top-10 md:-left-14",
    delay: "0s",
  },
  {
    icon: CircuitBoard,
    label: "Robotics",
    className: "right-0 top-20 md:-right-12",
    delay: "0.8s",
  },
  {
    icon: Code2,
    label: "Software",
    className: "bottom-8 left-8 md:-left-6",
    delay: "1.5s",
  },
];

const quickStats = [
  { value: "UC Irvine", label: "Computer Engineering" },
  { value: "6 Builds", label: "Featured Projects" },
  { value: "Edge to Web", label: "Full System Thinking" },
];

export const HeroSection = () => {
  const [imageFailed, setImageFailed] = useState(false);
  const hasProfileImage = Boolean(PROFILE_IMAGE_PATH.trim()) && !imageFailed;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-4 pb-16 pt-32 md:pt-36"
    >
      <div className="container relative z-10 max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-left">
            <div className="hero-chip opacity-0 animate-fade-in">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/80">
                Irvine, California
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-none opacity-0 animate-fade-in-delay-1 sm:text-6xl lg:text-7xl">
              Abraham Ou
              <span className="mt-3 block text-gradient">
                building hardware-aware software with real personality.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground opacity-0 animate-fade-in-delay-2 md:text-xl">
              I’m a Computer Engineering student at UC Irvine focused on
              embedded systems, robotics, and polished digital experiences. I
              like projects that move from circuitry and firmware all the way to
              clean interfaces people actually enjoy using.
            </p>

            <div className="mt-8 flex flex-col gap-4 opacity-0 animate-fade-in-delay-3 sm:flex-row">
              <a href="#projects" className="cosmic-button">
                View My Work
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="ghost-button">
                Start a Conversation
                <Sparkles size={16} />
              </a>
            </div>

            <div className="mt-10 grid gap-4 opacity-0 animate-fade-in-delay-4 sm:grid-cols-3">
              {quickStats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-delay-4">
            <div className="hero-frame animate-float-slow">
              <div className="orbit-ring" />
              <div className="orbit-ring orbit-ring-secondary" />

              {orbitPills.map(({ icon, label, className, delay }) => (
                <div
                  key={label}
                  className={`orbit-pill ${className}`}
                  style={{ animationDelay: delay }}
                >
                  {createElement(icon, {
                    className: "h-4 w-4 text-primary",
                  })}
                  <span>{label}</span>
                </div>
              ))}

              <div className="profile-shell">
                <div className="profile-grid" />
                <div className="profile-core">
                  {hasProfileImage ? (
                    <img
                      src={PROFILE_IMAGE_PATH}
                      alt="Portrait of Abraham Ou"
                      className="profile-image"
                      onError={() => setImageFailed(true)}
                    />
                  ) : (
                    <div className="profile-placeholder">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <Sparkles className="h-8 w-8" />
                      </div>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
                        Profile Image Placeholder
                      </p>
                      <h2 className="mt-4 text-3xl font-semibold text-foreground">
                        Drop your portrait in whenever you&apos;re ready.
                      </h2>
                      <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
                        Add your image under <code>public/profile</code> and
                        keep this path if you want the frame and animations to
                        work automatically.
                      </p>
                      <code className="mt-5 rounded-full border border-border bg-background/80 px-4 py-2 text-xs text-foreground shadow-sm">
                        {PROFILE_IMAGE_PATH}
                      </code>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-left backdrop-blur-md">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary/80">
                      Current Focus
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Building systems that feel equally strong in code, motion,
                      and hardware.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
      >
        <span className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};
