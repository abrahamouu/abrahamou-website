import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="section-shell px-6 py-10 md:px-10 md:py-14">
          <div className="mb-12 text-center">
            <span className="section-kicker">About</span>
            <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
              Hardware instincts. Software finish.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
              I enjoy projects that start with a messy technical challenge and
              end with something tangible, elegant, and useful.
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-semibold md:text-3xl">
                I build across the stack, but I think like a systems engineer.
              </h3>

              <p className="text-base leading-8 text-muted-foreground">
                I&apos;ve designed everything from an IoT building management
                system that automates HVAC and lighting using live sensor data,
                to a five-stage pipelined MIPS processor in Verilog, to an
                autonomous UGV with live telemetry and software-defined radio
                control.
              </p>

              <p className="text-base leading-8 text-muted-foreground">
                Whether I&apos;m tuning embedded code, building APIs, or shaping
                the front end for a project demo, I care about systems that feel
                deliberate from end to end and hold up outside the classroom.
              </p>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <a href="#contact" className="cosmic-button">
                  Get In Touch
                </a>
                <a
                  href="/resume/AbrahamOuResumeMarch2026.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-button"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="gradient-border card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-primary/12 p-3">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">
                      Product-minded engineering
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      I care about architecture, performance, and how the final
                      experience actually feels to use.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-primary/12 p-3">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">
                      Embedded and hardware fluency
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      I like working close to the metal, especially when sensors,
                      controls, and firmware need to coordinate cleanly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-primary/12 p-3">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">Strong ownership</h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      I enjoy taking projects from concept through debugging,
                      iteration, and the final polished presentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
