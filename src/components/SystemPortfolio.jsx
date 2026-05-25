import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CircuitBoard,
  ChevronDown,
  ChevronUp,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  FolderOpen,
  Github,
  Instagram,
  LayoutGrid,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Power,
  Rocket,
  RotateCw,
  Send,
  User,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import {
  aboutContent,
  bootLines,
  contactItems,
  experiences,
  externalLinks,
  focusAreas,
  profileImagePath,
  projects,
  quickStats,
  resumeUrl,
  skillGroups,
  socialLinks,
} from "@/data/portfolioContent";

const desktopApps = [
  {
    id: "about",
    label: "about",
    icon: User,
    summary: "Profile, background, and current focus.",
  },
  {
    id: "experience",
    label: "experience",
    icon: Briefcase,
    summary: "Roles, backend work, and system ownership.",
  },
  {
    id: "skills",
    label: "skills",
    icon: Wrench,
    summary: "Frontend, backend, hardware, and tools.",
  },
  {
    id: "projects",
    label: "projects",
    icon: FolderOpen,
    summary: "Selected builds from robotics to UI.",
  },
  {
    id: "resume",
    label: "resume",
    icon: FileText,
    summary: "Resume snapshot and PDF access.",
  },
  {
    id: "contact",
    label: "contact",
    icon: Mail,
    summary: "Reach out and open social channels.",
  },
  {
    id: "links",
    label: "links",
    icon: ExternalLink,
    summary: "Existing live links from the current site.",
  },
];

const dockAppIds = ["about", "experience", "projects", "resume", "links"];

const externalPortIcons = {
  "Resume PDF": FileText,
  GitHub: Github,
  LinkedIn: Linkedin,
  Homigo: Code2,
  Rovera: Rocket,
  Instagram: Instagram,
};

const aboutCardIcons = [Code2, CircuitBoard, Briefcase];

const contactIcons = {
  Email: Mail,
  Phone: Phone,
  Location: MapPin,
};

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Instagram: Instagram,
  Email: Mail,
};

const appIds = new Set(desktopApps.map(({ id }) => id));

const normalizeHash = (hashValue) => {
  if (hashValue === "overview") {
    return "about";
  }

  return appIds.has(hashValue) ? hashValue : null;
};

const getAppUrl = (appId) => {
  const baseUrl = `${window.location.pathname}${window.location.search}`;
  return appId ? `${baseUrl}#${appId}` : baseUrl;
};

export const SystemPortfolio = () => {
  const { toast } = useToast();
  const [systemStage, setSystemStage] = useState("off");
  const [activeApp, setActiveApp] = useState(null);
  const [isDesktopIconsMinimized, setIsDesktopIconsMinimized] = useState(false);
  const [isDockMinimized, setIsDockMinimized] = useState(false);
  const [isPowerKeyAnimating, setIsPowerKeyAnimating] = useState(false);
  const [visibleBootLines, setVisibleBootLines] = useState(0);
  const [clock, setClock] = useState(() => new Date());
  const [profileFailed, setProfileFailed] = useState(false);

  const currentApp = useMemo(
    () => desktopApps.find(({ id }) => id === activeApp) ?? null,
    [activeApp]
  );

  useEffect(() => {
    document.documentElement.classList.add("dark");

    const initialApp = normalizeHash(window.location.hash.replace("#", ""));
    if (initialApp) {
      setSystemStage("ready");
      setActiveApp(initialApp);
    }

    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setClock(new Date());
    }, 60000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (systemStage !== "booting") {
      return undefined;
    }

    setVisibleBootLines(0);

    let lineIndex = 0;
    const intervalId = window.setInterval(() => {
      lineIndex += 1;
      setVisibleBootLines(Math.min(lineIndex, bootLines.length));
    }, 165);

    const timeoutId = window.setTimeout(() => {
      setVisibleBootLines(bootLines.length);
      setSystemStage("ready");
    }, bootLines.length * 165 + 650);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [systemStage]);

  useEffect(() => {
    if (systemStage !== "ready") {
      return;
    }

    window.history.replaceState(null, "", getAppUrl(activeApp));
  }, [activeApp, systemStage]);

  useEffect(() => {
    setIsDesktopIconsMinimized(Boolean(activeApp));
  }, [activeApp]);

  useEffect(() => {
    if (!isPowerKeyAnimating) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsPowerKeyAnimating(false);
    }, 320);

    return () => window.clearTimeout(timeoutId);
  }, [isPowerKeyAnimating]);

  const handlePowerKey = () => {
    if (systemStage === "booting") {
      return;
    }

    setIsPowerKeyAnimating(true);

    if (systemStage === "off") {
      setVisibleBootLines(0);
      setSystemStage("booting");
      return;
    }

    setSystemStage("off");
    setActiveApp(null);
    setVisibleBootLines(0);
    window.history.replaceState(null, "", getAppUrl(null));
  };

  const handleReboot = () => {
    if (systemStage === "off") {
      return;
    }

    setVisibleBootLines(0);
    setSystemStage("booting");
  };

  const handleOpenApp = (appId) => {
    if (systemStage !== "ready") {
      return;
    }

    setActiveApp(appId);
  };

  const handleCloseApp = () => {
    setActiveApp(null);
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();

    toast({
      title: "Transmission queued",
      description:
        "This contact flow is still a demo, but the desktop layout is ready for a real form backend.",
    });
  };

  const formattedClock = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(clock);

  const stageLabel = {
    off: "screen off",
    booting: "booting",
    ready: activeApp ? `${currentApp?.label} open` : "desktop ready",
  }[systemStage];
  const powerKeyHint =
    systemStage === "off" ? "Click to power on" : "Click to turn off";

  return (
    <div className="system-shell min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="system-orb system-orb-one" />
        <div className="system-orb system-orb-two" />
        <div className="system-orb system-orb-three" />
        <div className="system-grid" />
      </div>

      <main className="relative z-10 px-4 py-6 md:px-7 md:py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">
          <header className="max-w-4xl text-center">
            <div className="flex justify-center">
              <span className="status-pill">
                <Cpu className="h-4 w-4" />
                Abraham Ou // desktop portfolio
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              Power on the laptop and explore the site like a desktop.
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              The main visual is now the laptop itself. Press the power key on
              the keyboard, wait for the boot sequence, then open apps like
              `experience`, `skills`, `projects`, `resume`, `contact`, and
              `links` right inside the screen.
            </p>
          </header>

          <section className="system-panel w-full max-w-7xl p-4 md:p-6 xl:p-8">
            <div className="macbook-scene">
              <div className="macbook-unit">
                <div className="macbook-lid macbook-lid-open">
                  <div className="macbook-camera" />
                  <div className="macbook-screen">
                    <ScreenState
                      systemStage={systemStage}
                      activeApp={activeApp}
                      currentApp={currentApp}
                      formattedClock={formattedClock}
                      visibleBootLines={visibleBootLines}
                      onOpenApp={handleOpenApp}
                      onCloseApp={handleCloseApp}
                      isDesktopIconsMinimized={isDesktopIconsMinimized}
                      onToggleDesktopIcons={() =>
                        setIsDesktopIconsMinimized((currentValue) => !currentValue)
                      }
                      isDockMinimized={isDockMinimized}
                      onToggleDock={() =>
                        setIsDockMinimized((currentValue) => !currentValue)
                      }
                      onContactSubmit={handleContactSubmit}
                      profileFailed={profileFailed}
                      onProfileError={() => setProfileFailed(true)}
                    />
                    <div className="screen-reflection" />
                  </div>
                </div>

                <div className="macbook-base">
                  <div className="macbook-hinge" />
                  <div className="keyboard-surface" />
                  <div className="power-control">
                    <button
                      type="button"
                      onClick={handlePowerKey}
                      className={cn(
                        "power-key",
                        systemStage !== "off" && "power-key-active",
                        isPowerKeyAnimating && "power-key-pressing"
                      )}
                      aria-label={
                        systemStage === "off"
                          ? "Power on laptop"
                          : "Power down laptop"
                      }
                    >
                      <Power className="h-4 w-4" />
                    </button>
                    <span className="power-key-tooltip">{powerKeyHint}</span>
                  </div>
                  <div
                    className={cn(
                      "power-led",
                      systemStage !== "off" && "power-led-active",
                      isPowerKeyAnimating && "power-led-pressing"
                    )}
                    aria-hidden="true"
                  />
                  <div className="trackpad-surface" />
                </div>
              </div>

              <div className="mt-6 flex w-full flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-3">
                  <span className="status-pill">{stageLabel}</span>
                  <span className="status-pill">
                    press keyboard power key to boot
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {systemStage === "ready" && (
                    <>
                      <button
                        type="button"
                        onClick={() => setActiveApp(null)}
                        className="system-button-ghost"
                      >
                        Desktop
                      </button>
                      <button
                        type="button"
                        onClick={handleReboot}
                        className="system-button-ghost"
                      >
                        <RotateCw className="h-4 w-4" />
                        Reboot
                      </button>
                    </>
                  )}

                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="system-button-ghost"
                  >
                    <FileText className="h-4 w-4" />
                    Resume PDF
                  </a>
                </div>
              </div>
            </div>
          </section>

          <footer className="pb-3 text-center font-mono text-[0.68rem] uppercase tracking-[0.26em] text-slate-500">
            Abraham Ou // embedded systems, robotics, backend, and polished
            interfaces
          </footer>
        </div>
      </main>
    </div>
  );
};

const ScreenState = ({
  systemStage,
  activeApp,
  currentApp,
  formattedClock,
  visibleBootLines,
  onOpenApp,
  onCloseApp,
  isDesktopIconsMinimized,
  onToggleDesktopIcons,
  isDockMinimized,
  onToggleDock,
  onContactSubmit,
  profileFailed,
  onProfileError,
}) => {
  if (systemStage === "off") {
    return (
      <div className="screen-off">
        <div className="flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="standby-glow">
            <Power className="h-5 w-5" />
          </div>
          <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.34em] text-slate-400">
            Press power key on keyboard
          </p>
          <p className="mt-3 max-w-sm text-sm text-slate-500">
            Boot into the portfolio desktop to open each section like an app.
          </p>
        </div>
      </div>
    );
  }

  if (systemStage === "booting") {
    return (
      <div className="boot-screen">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.28em] text-cyan-300/75">
          <span>Boot sequence</span>
          <span>POST</span>
        </div>

        <div className="flex h-[calc(100%-3rem)] flex-col px-4 py-4">
          <div className="space-y-2 font-mono text-[0.7rem] leading-6 text-cyan-300/88">
            {bootLines.slice(0, visibleBootLines).map((line) => (
              <p key={line}>{line}</p>
            ))}
            {visibleBootLines < bootLines.length && <p className="boot-cursor">_</p>}
          </div>

          <div className="mt-auto">
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.95),rgba(96,165,250,0.95))] transition-all duration-300"
                style={{
                  width: `${(visibleBootLines / bootLines.length) * 100}%`,
                }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.24em] text-slate-500">
              <span>Desktop services syncing</span>
              <span>{Math.round((visibleBootLines / bootLines.length) * 100)}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <DesktopEnvironment
      activeApp={activeApp}
      currentApp={currentApp}
      formattedClock={formattedClock}
      onOpenApp={onOpenApp}
      onCloseApp={onCloseApp}
      isDesktopIconsMinimized={isDesktopIconsMinimized}
      onToggleDesktopIcons={onToggleDesktopIcons}
      isDockMinimized={isDockMinimized}
      onToggleDock={onToggleDock}
      onContactSubmit={onContactSubmit}
      profileFailed={profileFailed}
      onProfileError={onProfileError}
    />
  );
};

const DesktopEnvironment = ({
  activeApp,
  currentApp,
  formattedClock,
  onOpenApp,
  onCloseApp,
  isDesktopIconsMinimized,
  onToggleDesktopIcons,
  isDockMinimized,
  onToggleDock,
  onContactSubmit,
  profileFailed,
  onProfileError,
}) => {
  return (
    <div className="desktop-shell">
      <div className="desktop-topbar">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-slate-100">
            abraham.ou
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-cyan-300/75">
            portfolio desktop
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleDesktopIcons}
            className="desktop-toggle-button"
          >
            <LayoutGrid className="h-4 w-4" />
            {isDesktopIconsMinimized ? "Apps" : "Hide Apps"}
          </button>
          <button
            type="button"
            onClick={onToggleDock}
            className="desktop-toggle-button"
          >
            {isDockMinimized ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
            {isDockMinimized ? "Show Dock" : "Hide Dock"}
          </button>
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">
            {formattedClock}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "desktop-workspace",
          isDesktopIconsMinimized && "desktop-workspace-expanded"
        )}
      >
        <div
          className={cn(
            "desktop-icons",
            isDesktopIconsMinimized && "desktop-icons-hidden"
          )}
        >
          {desktopApps.map((app) => {
            const Icon = app.icon;

            return (
              <button
                key={app.id}
                type="button"
                onClick={() => onOpenApp(app.id)}
                className={cn(
                  "desktop-app",
                  activeApp === app.id && "desktop-app-active"
                )}
                aria-pressed={activeApp === app.id}
              >
                <span className="desktop-app-glyph">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="desktop-app-label">{app.label}</span>
              </button>
            );
          })}
        </div>

        <div className="desktop-stage">
          {activeApp && currentApp ? (
            <DesktopWindow currentApp={currentApp} onCloseApp={onCloseApp}>
              {renderAppContent({
                activeApp,
                onContactSubmit,
                profileFailed,
                onProfileError,
              })}
            </DesktopWindow>
          ) : (
            <DesktopWelcome onOpenApp={onOpenApp} />
          )}
        </div>
      </div>

      <div className={cn("desktop-dock", isDockMinimized && "desktop-dock-minimized")}>
        <button
          type="button"
          onClick={onToggleDock}
          className="dock-toggle-button"
          aria-label={isDockMinimized ? "Restore application dock" : "Minimize application dock"}
        >
          {isDockMinimized ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {!isDockMinimized &&
          dockAppIds.map((appId) => {
            const app = desktopApps.find((item) => item.id === appId);
            if (!app) {
              return null;
            }

            const Icon = app.icon;

            return (
              <button
                key={app.id}
                type="button"
                onClick={() => onOpenApp(app.id)}
                className={cn(
                  "dock-button",
                  activeApp === app.id && "dock-button-active"
                )}
                aria-label={`Open ${app.label}`}
              >
                <Icon className="h-5 w-5" />
              </button>
            );
          })}
      </div>
    </div>
  );
};

const DesktopWindow = ({ currentApp, onCloseApp, children }) => {
  return (
    <div className="desktop-window">
      <div className="window-bar">
        <div className="window-controls">
          <button
            type="button"
            onClick={onCloseApp}
            className="window-light window-close"
            aria-label={`Close ${currentApp.label}`}
          />
          <span className="window-light window-minimize" aria-hidden="true" />
          <span className="window-light window-expand" aria-hidden="true" />
        </div>

        <div className="min-w-0">
          <p className="window-title">{currentApp.label}.app</p>
          <p className="mt-1 truncate text-[0.72rem] text-slate-400">
            {currentApp.summary}
          </p>
        </div>

        <button
          type="button"
          onClick={onCloseApp}
          className="window-close-button"
          aria-label={`Close ${currentApp.label}`}
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="panel-scroll desktop-window-body">{children}</div>
    </div>
  );
};

const DesktopWelcome = ({ onOpenApp }) => {
  return (
    <div className="desktop-welcome">
      <div className="module-card p-5">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-cyan-300/75">
          Desktop Ready
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white">
          Pick an app to open this portfolio from inside the laptop.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
          Use the desktop icons for `about`, `experience`, `skills`,
          `projects`, `resume`, `contact`, and `links`. Everything opens inside
          this screen so the laptop stays the main experience.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {quickStats.map((stat) => (
            <div key={stat.label} className="data-card">
              <p className="text-lg font-semibold text-white">{stat.value}</p>
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {focusAreas.map((focus) => (
            <span key={focus} className="chip-pill">
              {focus}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onOpenApp("experience")}
            className="system-button"
          >
            Open experience
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onOpenApp("resume")}
            className="system-button-ghost"
          >
            Open resume
            <FileText className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const renderAppContent = ({
  activeApp,
  onContactSubmit,
  profileFailed,
  onProfileError,
}) => {
  switch (activeApp) {
    case "about":
      return (
        <AboutModule
          profileFailed={profileFailed}
          onProfileError={onProfileError}
        />
      );
    case "experience":
      return <ExperienceModule />;
    case "skills":
      return <SkillsModule />;
    case "projects":
      return <ProjectsModule />;
    case "resume":
      return <ResumeModule />;
    case "contact":
      return <ContactModule onContactSubmit={onContactSubmit} />;
    case "links":
      return <LinksModule />;
    default:
      return null;
  }
};

const AboutModule = ({ profileFailed, onProfileError }) => {
  return (
    <div className="space-y-5">
      <ModuleHeader
        eyebrow="About"
        title="Hardware instincts. Software finish."
        description="Computer Engineering student at UC Irvine building hardware-aware software with real personality."
      />

      <div className="grid gap-5 xl:grid-cols-[0.84fr_1.16fr]">
        <div className="module-card p-4">
          <div className="overflow-hidden rounded-[24px] border border-cyan-400/15 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.94),rgba(2,6,23,0.98))]">
            {profileFailed ? (
              <div className="flex aspect-[4/5] items-center justify-center px-6 text-center">
                <div>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <User className="h-9 w-9" />
                  </div>
                  <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.26em] text-slate-400">
                    Profile image unavailable
                  </p>
                </div>
              </div>
            ) : (
              <img
                src={profileImagePath}
                alt="Portrait of Abraham Ou"
                className="aspect-[4/5] w-full object-cover"
                onError={onProfileError}
              />
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="module-card p-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="status-pill">
                <MapPin className="h-4 w-4" />
                Irvine, California
              </span>
              <span className="status-pill">
                <CircuitBoard className="h-4 w-4" />
                Edge to web builder
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              I like projects that move from circuitry and firmware all the way
              to clean interfaces people actually enjoy using. My best work
              tends to live at the intersection of embedded systems, robotics,
              backend infrastructure, and polished product thinking.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {quickStats.map((stat) => (
                <div key={stat.label} className="data-card">
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="module-card p-5">
            <p className="text-sm leading-7 text-slate-300">
              {aboutContent.summary}
            </p>

            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {focusAreas.map((focus) => (
                <span key={focus} className="chip-pill">
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {aboutContent.cards.map((card, index) => {
          const Icon = aboutCardIcons[index] ?? Code2;

          return (
            <div key={card.title} className="module-card p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ExperienceModule = () => {
  return (
    <div className="space-y-5">
      <ModuleHeader
        eyebrow="Experience"
        title="Recent work with real systems, real users, and real constraints."
        description="Backend systems, robotics research, and full-stack ownership are the through-line."
      />

      <div className="space-y-4">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className={cn(
              "module-card p-5",
              experience.featured &&
                "border-cyan-400/25 bg-[linear-gradient(145deg,rgba(15,23,42,0.96),rgba(34,211,238,0.08),rgba(2,6,23,0.98))]"
            )}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="status-pill">
                    <Briefcase className="h-4 w-4" />
                    {experience.company}
                  </span>
                  {experience.featured && (
                    <span className="status-pill">
                      <Zap className="h-4 w-4" />
                      Featured role
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {experience.role}
                </h3>
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.26em] text-slate-400">
                  {experience.period}
                </p>
              </div>

              <a
                href={experience.website}
                target="_blank"
                rel="noreferrer"
                className="system-button-ghost"
              >
                Visit Site
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {experience.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <span key={tag} className="chip-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {experience.stats.map((stat) => (
                <div key={stat.label} className="data-card">
                  <p className="text-xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              {experience.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[22px] border border-white/8 bg-slate-950/55 px-4 py-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      {experience.featured ? (
                        <Database className="h-4 w-4" />
                      ) : (
                        <Rocket className="h-4 w-4" />
                      )}
                    </div>
                    <p className="text-sm leading-7 text-slate-300">{highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const SkillsModule = () => {
  return (
    <div className="space-y-5">
      <ModuleHeader
        eyebrow="Skills"
        title="My stack changes shape depending on the problem."
        description="From frontend polish to firmware-adjacent work and design tooling, this is the kit I reach for most."
      />

      <div className="grid gap-4 xl:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.id} className="module-card p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-cyan-300/75">
                  {group.label}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {group.skills.length} active tools
                </h3>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <Wrench className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-slate-200">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.95),rgba(96,165,250,0.92))]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsModule = () => {
  return (
    <div className="space-y-5">
      <ModuleHeader
        eyebrow="Projects"
        title="Selected builds from robotics to product UI."
        description="A few recent projects that show how I blend engineering depth with clean presentation."
      />

      <div className="grid gap-4 xl:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="module-card overflow-hidden">
            <div className="relative h-52 overflow-hidden border-b border-white/8">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.18),rgba(2,6,23,0.78))]" />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-cyan-300/75">
                Project {String(project.id).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <ProjectLink href={project.demoUrl} label="Live demo" />
                <ProjectLink href={project.githubUrl} label="GitHub" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const ResumeModule = () => {
  const featuredExperience = experiences[0];

  return (
    <div className="space-y-5">
      <ModuleHeader
        eyebrow="Resume"
        title="A resume snapshot inside the desktop."
        description="Use this window for the quick overview, then open the full PDF when you want the formal version."
      />

      <div className="grid gap-5 xl:grid-cols-[0.98fr_1.02fr]">
        <div className="module-card p-5">
          <div className="grid gap-3 sm:grid-cols-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="data-card">
                <p className="text-lg font-semibold text-white">{stat.value}</p>
                <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[22px] border border-cyan-400/15 bg-slate-950/50 p-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-cyan-300/75">
              Current Role
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              {featuredExperience.role}
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              {featuredExperience.company}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {featuredExperience.summary}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {focusAreas.map((focus) => (
              <span key={focus} className="chip-pill">
                {focus}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="system-button"
            >
              <FileText className="h-4 w-4" />
              Open Resume PDF
            </a>
            <a
              href="mailto:abrahamou2018@gmail.com"
              className="system-button-ghost"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </div>
        </div>

        <div className="space-y-4">
          {aboutContent.cards.map((card, index) => {
            const Icon = aboutCardIcons[index] ?? Code2;

            return (
              <div key={card.title} className="module-card p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="module-card p-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-cyan-300/75">
              Resume Notes
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              The PDF stays available exactly like it was on the previous site,
              but now it lives as its own desktop app too so it feels connected
              to the rest of the experience instead of sitting outside it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactModule = ({ onContactSubmit }) => {
  return (
    <div className="space-y-5">
      <ModuleHeader
        eyebrow="Contact"
        title="Let's make something worth showing off."
        description="If you have a project idea, internship opportunity, or just want to talk robotics, embedded systems, or software design, I'm always happy to connect."
      />

      <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-4">
          {contactItems.map((item) => {
            const Icon = contactIcons[item.label] ?? Mail;

            return (
              <div key={item.label} className="module-card p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-slate-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-2 inline-flex text-sm text-slate-200 transition-colors duration-300 hover:text-cyan-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm text-slate-200">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="module-card p-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-slate-500">
              Social Links
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label] ?? ExternalLink;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-slate-300 transition-all duration-300 hover:border-cyan-300/35 hover:text-cyan-300"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="module-card p-5">
          <h3 className="text-xl font-semibold text-white">Send a message</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            This form still triggers a demo toast for now, but it is laid out
            for a real contact flow when you&apos;re ready to wire one up.
          </p>

          <form className="mt-5 space-y-4" onSubmit={onContactSubmit}>
            <div>
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="input-shell"
                placeholder="Abraham Ou"
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-shell"
                placeholder="abrahamou2018@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="input-shell resize-none"
                placeholder="Tell me a little about what you're building..."
              />
            </div>

            <button type="submit" className="system-button w-full">
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const LinksModule = () => {
  return (
    <div className="space-y-5">
      <ModuleHeader
        eyebrow="Links"
        title="The current live links still exist, now grouped as one desktop app."
        description="Everything useful from the previous site is still here, but it now opens from inside the laptop experience."
      />

      <div className="grid gap-4 xl:grid-cols-2">
        {externalLinks.map((link) => {
          const Icon = externalPortIcons[link.label] ?? ExternalLink;

          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="module-card flex items-center justify-between gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {link.label}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {link.description}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-cyan-300" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

const ModuleHeader = ({ eyebrow, title, description }) => {
  return (
    <div className="module-card p-5">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-cyan-300/75">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
        {description}
      </p>
    </div>
  );
};

const ProjectLink = ({ href, label }) => {
  if (!href || href === "#") {
    return (
      <span className="disabled-link">
        {label}
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-slate-500">
          offline
        </span>
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className="system-button-ghost">
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
};
