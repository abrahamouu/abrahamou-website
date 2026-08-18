import { FileText, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { contactLinks, socialLinks } from "@/data/portfolioContent";

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

export const Contact = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <section className="page-intro reveal">
        <span className="section-label">Contact</span>
        <h1 className="section-title mt-4">Get in Touch</h1>
        <p className="section-copy mt-4 max-w-3xl">
          Reach out for embedded software, systems, or product-focused engineering
          work.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="surface-card reveal delay-1 p-6 sm:p-8">
          <span className="section-label">Direct</span>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
        </div>

        <div className="surface-card reveal delay-2 p-6 sm:p-8">
          <span className="section-label">Links</span>
          <h2 className="section-title mt-4">External Profiles</h2>
          <p className="section-copy mt-4">
            A few simple ways to connect outside the site.
          </p>

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
    </div>
  );
};
