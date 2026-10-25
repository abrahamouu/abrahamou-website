import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HomePortrait } from "@/components/HomePortrait";
import {
  homePreviewLinks,
  profileCard,
  resumeUrl,
  skillGroups,
} from "@/data/portfolioContent";

export const Home = () => (
  <div className="home-page">
    <section className="home-hero" aria-labelledby="home-title">
      <div className="hero-heading reveal delay-1">
        <p className="hero-eyebrow mono">
          Abraham Ou / Embedded Software Engineer
        </p>
        <h1 id="home-title" className="hero-title">
          Reliable software.
          <br />
          Connected systems.
        </h1>
        <div className="hero-actions">
          <Link to="/projects" className="hero-work-link">
            Selected work <ArrowUpRight aria-hidden="true" />
          </Link>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            View resume <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
    <section className="home-profile-section" aria-labelledby="about-title">
      <div className="profile-section-heading">
        <span className="index-label">01 / About</span>
        <h2 id="about-title">Behind the code.</h2>
        <p>{profileCard.note}</p>
      </div>
      <HomePortrait />
    </section>
    <div className="home-content">
      <section className="editorial-section">
        <div className="section-aside">
          <span className="index-label">02 / Explore</span>
          <h2 className="section-title">A closer look.</h2>
        </div>
        <div className="index-list">
          {homePreviewLinks.map((item, index) => (
            <Link key={item.to} to={item.to} className="index-row">
              <span className="row-number mono">0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <ArrowUpRight className="index-arrow" size={25} />
            </Link>
          ))}
        </div>
      </section>
      <section className="editorial-section">
        <div className="section-aside">
          <span className="index-label">03 / Toolkit</span>
          <h2 className="section-title">
            Built from
            <br />
            the ground up.
          </h2>
        </div>
        <div className="toolkit-list">
          {skillGroups.map((group) => (
            <div key={group.title} className="toolkit-row">
              <h3 className="mono">{group.title}</h3>
              <p>{group.items.join(" / ")}</p>
            </div>
          ))}
          <Link to="/experience" className="text-link">
            More about my experience <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="contact-callout">
        <span className="index-label">Have something in mind?</span>
        <Link to="/contact">
          Let’s talk.
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>
    </div>
  </div>
);
