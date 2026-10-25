import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { contactLinks, socialLinks } from "@/data/portfolioContent";

export const Contact = () => (
  <div className="interior-page contact-page">
    <PageIntro
      label="Contact"
      title={
        <>
          Good things start
          <br />
          with a conversation.
        </>
      }
    >
      Reach out for embedded software, systems, or product-focused engineering
      work.
    </PageIntro>
    <section className="contact-directory" aria-label="Contact details">
      {contactLinks.map((item, index) => {
        const content = (
          <>
            <span className="index-label">
              0{index + 1} / {item.label}
            </span>
            <span className="contact-value">
              {item.label === "Resume" ? "View my resume" : item.value}
            </span>
            {item.href && <ArrowUpRight aria-hidden="true" />}
          </>
        );
        return item.href ? (
          <a
            className="contact-row"
            key={item.label}
            href={item.href}
            target={item.label === "Resume" ? "_blank" : undefined}
            rel={item.label === "Resume" ? "noreferrer" : undefined}
          >
            {content}
          </a>
        ) : (
          <div className="contact-row" key={item.label}>
            {content}
          </div>
        );
      })}
    </section>
    <section className="contact-socials">
      <span className="index-label">Elsewhere on the internet</span>
      <div>
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="secondary-button"
          >
            {item.label}
            <ArrowUpRight size={18} />
          </a>
        ))}
      </div>
    </section>
  </div>
);
