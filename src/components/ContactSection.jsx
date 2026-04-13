import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { createElement, useState } from "react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "abrahamou2018@gmail.com",
    href: "mailto:abrahamou2018@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (626) 482-4787",
    href: "tel:+16264824787",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Irvine, CA, United States",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abrahamou/",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/abrahamouu",
    label: "GitHub",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/abrahamouu/",
    label: "Instagram",
  },
  {
    icon: Mail,
    href: "mailto:abrahamou2018@gmail.com",
    label: "Email",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="section-shell px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="text-left">
              <span className="section-kicker">Contact</span>
              <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
                Let&apos;s make something worth showing off.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                If you have a project idea, internship opportunity, or just want
                to talk about robotics, embedded systems, or software design,
                I&apos;m always happy to connect.
              </p>

              <div className="mt-8 space-y-4">
                {contactItems.map(({ icon, label, value, href }) => (
                  <div
                    key={label}
                    className="surface-card flex items-start gap-4 p-5"
                  >
                    <div className="rounded-2xl bg-primary/12 p-3 text-primary">
                      {createElement(icon, { className: "h-5 w-5" })}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">
                        {label}
                      </h3>
                      {href ? (
                        <a
                          href={href}
                          className="mt-2 inline-block text-base text-muted-foreground transition-colors duration-300 hover:text-primary"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-2 text-base text-muted-foreground">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="link-icon"
                  >
                    {createElement(icon, { className: "h-5 w-5" })}
                  </a>
                ))}
              </div>
            </div>

            <div className="surface-card p-6 md:p-8">
              <h3 className="text-2xl font-semibold">Send a Message</h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                This demo form triggers a toast for now, but the layout is ready
                for a real contact flow when you want to wire one up.
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="input-shell"
                    placeholder="Abraham Ou"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input-shell"
                    placeholder="abrahamou2018@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn("cosmic-button w-full")}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
