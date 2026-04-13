import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 px-4 pb-10 pt-2">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 rounded-full border border-border/70 bg-card/72 px-6 py-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Abraham Ou. Built at the
            intersection of hardware and software.
          </p>
          <a
            href="#hero"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/8"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
