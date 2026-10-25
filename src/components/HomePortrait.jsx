import { ArrowUpRight } from "lucide-react";
import {
  heroContent,
  homeProfileImagePath,
  profileCard,
  socialLinks,
} from "@/data/portfolioContent";

export const HomePortrait = () => (
  <article className="home-portrait reveal" aria-labelledby="profile-name">
    <div className="profile-titlebar mono">
      <span>{profileCard.company}</span>
      <span aria-hidden="true">·</span>
      <span>Embedded software</span>
    </div>
    <figure className="profile-window">
      <div className="home-portrait-frame">
        <img
          src={homeProfileImagePath}
          alt="Abraham Ou in graduation attire outside Engineering Hall at UC Irvine"
          fetchPriority="high"
          width="2584"
          height="3293"
        />
      </div>
      <figcaption className="home-portrait-caption">
        <h3 id="profile-name" className="profile-name mono">
          Abraham Ou
        </h3>
        <p className="profile-bio">{heroContent.intro}</p>
        <nav
          className="profile-socials mono"
          aria-label="Abraham's social profiles"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </figcaption>
    </figure>
    <aside className="profile-note" aria-label="Location">
      <p className="profile-note-title mono">Based in</p>
      <p className="profile-note-copy mono">{profileCard.location}</p>
    </aside>
  </article>
);
