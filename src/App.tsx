import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import heroCollage from "./assets/carlogia-hero-collage.png"
import ticketDashboard from "./assets/ct-ticket-dashboard.jpg"
import abrakadabraScreenshot from "./assets/abra-kadabra.jpg"
import seminaryScreenshot from "./assets/united-theological-seminary.jpg"
import travelScreenshot from "./assets/travel-list.jpg"
import ticTacToeScreenshot from "./assets/tic-tac-toe.jpg"
import logoCollection from "./assets/logos.png"
import posterDesign from "./assets/poster-front.jpg"
import personalBranding from "./assets/personal-branding.jpg"
import resumePdf from "./assets/Carlos_Gutierrez_Resume_2026_v2.pdf";

type IconName =
  | "arrow"
  | "code"
  | "external"
  | "github"
  | "linkedin"
  | "mail"
  | "browser"
  | "terminal"
  | "pen"
  | "user"
  | "deploy";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 6 6 6-6 6" />
      </>
    ),
    code: (
      <>
        <path d="m9 18-6-6 6-6" />
        <path d="m15 6 6 6-6 6" />
      </>
    ),
    external: (
      <>
        <path d="M15 4h5v5" />
        <path d="m10 14 10-10" />
        <path d="M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" />
      </>
    ),
    github: (
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4a5.8 5.8 0 0 0-1.5-4A5.4 5.4 0 0 0 19.1.3S17.9-.1 15 1.8a13.4 13.4 0 0 0-7 0C5.1-.1 3.9.3 3.9.3a5.4 5.4 0 0 0-.2 2.8 5.8 5.8 0 0 0-1.5 4c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    browser: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <path d="M3 9h18" />
        <path d="M6 6.5h.01M9 6.5h.01" />
        <path d="m9 12-3 3 3 3M15 12l3 3-3 3" />
      </>
    ),
    deploy: (
      <>
        <path d="M6 18a4 4 0 0 1-1-7.9 7 7 0 0 1 13.5-2A5 5 0 0 1 19 18" />
        <path d="M12 21V12" />
        <path d="m8 16 4-4 4 4" />
      </>
    ),
    terminal: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <path d="m7 9 3 3-3 3" />
        <path d="M13 15h4" />
      </>
    ),
    pen: (
      <>
        <path d="m12 3 8 8-5 9-7-1-4-7 8-9Z" />
        <path d="m12 3 1 9" />
        <circle cx="13" cy="13" r="2" />
        <path d="m4 12 9 1" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
      </>
    )
  }

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="square"
      strokeLinejoin="miter"
      data-icon={name}
    >
      {paths[name]}
    </svg>
  )
}

function PlaceholderLink({
  children,
  icon = "external",
  dark = false,
  href,
}: {
  children: ReactNode
  icon?: IconName
  dark?: boolean
  href?: string
}) {
  const content = (
    <>
      <span>{children}</span>
      <Icon name={icon} />
    </>
  )

  if (href) {
    return (
      <a
        className={`text-link ${dark ? "text-link--dark" : ""}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    )
  }

  return (
    <button
      className={`text-link placeholder-link ${dark ? "text-link--dark" : ""}`}
      type="button"
      aria-label={`${String(children)} — link placeholder`}
      title="Link to be added"
    >
      {content}
    </button>
  )
}

function SectionLabel({
  icon,
  children,
}: {
  icon: IconName;
  children: ReactNode;
}) {
  return (
    <div className="section-label">
      <span className="section-label__icon">
        <Icon name={icon} />
      </span>
      <p>{children}</p>
    </div>
  );
}

function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string
  className?: string
}) {
  return (
    <div
      className={`image-placeholder ${className}`}
      role="img"
      aria-label={`${label} placeholder`}
    >
      <span>{label}</span>
      <span>Image placeholder</span>
    </div>
  )
}

const selectedProjects = [
  {
    index: "01",
    title: "Abrakadabra Environmental",
    eyebrow: "WordPress development / content migration",
    description:
      "A large-scale WordPress rebuild involving more than 1,000 pages, posts, and other content, delivered on a tight launch schedule.",
    detail:
      "Built Elementor pages and reusable sections, developed PHP templates, and used WP-CLI commands and SQL scripts to automate page creation and template assignment." +
      "Alongside hands-on development, coordinated a four-developer team, managed client feedback, built navigation, and performed QA.\n\n" +
      "Three overseas developers built the primary templates and supported page development, QA, and fixes. Together, we completed the rebuild and launched the website within approximately 1.5 months.",
    variant: "abrakadabra",
    image: abrakadabraScreenshot,
    url: "https://abrakadabraenvironmental.com/",
  },
  {
    index: "02",
    title: "United Theological Seminary",
    eyebrow: "Custom WordPress Theme Development",
    description:
      "A custom 120-page WordPress website built to support student recruitment and improve access to information for current students.",
    detail:
      "Led frontend development, translating Adobe XD designs into a custom WordPress theme using PHP, HTML, LESS, JavaScript, and jQuery. Built reusable templates with Advanced Custom Fields and custom post types, and developed responsive layouts using CSS Flexbox.\n\n" +
      "Collaborated with UX/UI designers, a project manager, and copywriters to deliver the website, using Git and GitHub for version control.",
    variant: "seminary",
    image: seminaryScreenshot,
    url: "https://www.unitedseminary.edu/",
  },
]

function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          ".featured-heading",
          ".featured-visual",
          ".section-heading",
          ".case-copy",
          ".apps-intro",
          ".app-card",
          ".design-title",
          ".design-grid",
          ".about-grid",
        ].join(", ")
      )
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.remove("reveal-pending");
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    sections.forEach((section) => {
      // Leave sections already on screen visible.
      if (section.getBoundingClientRect().top >= window.innerHeight) {
        section.classList.add("reveal-pending");
        observer.observe(section);
      }
    });

    const showAll = () => {
      if (!reducedMotion.matches) return;

      observer.disconnect();
      sections.forEach((section) => {
        section.classList.remove("reveal-pending", "reveal-visible");
      });
    };

    reducedMotion.addEventListener("change", showAll);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", showAll);
      sections.forEach((section) => {
        section.classList.remove("reveal-pending", "reveal-visible");
      });
    };
  }, []);

  useEffect(() => {
    const watermark = document.querySelector<HTMLElement>(
      ".hero-collage-watermark"
    );

    if (!watermark) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let frameId = 0;

    const updateRotation = () => {
      frameId = 0;

      const rotation = reducedMotion.matches
        ? 0
        : window.scrollY * 0.12;

      watermark.style.setProperty("--scroll-turn", `${rotation}deg`);
    };

    const onScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateRotation);
      }
    };

    updateRotation();

    window.addEventListener("scroll", onScroll, { passive: true });
    reducedMotion.addEventListener("change", updateRotation);

    return () => {
      window.removeEventListener("scroll", onScroll);
      reducedMotion.removeEventListener("change", updateRotation);
      window.cancelAnimationFrame(frameId);
      watermark.style.removeProperty("--scroll-turn");
    };
  }, []);

  const [contactStatus, setContactStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [contactFeedback, setContactFeedback] = useState("");

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (contactStatus === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setContactStatus("sending");
    setContactFeedback("");

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const result = await response.json();

      if (!response.ok || result.ok !== true) {
        throw new Error(result.message || "Your message could not be sent.");
      }

      setContactStatus("success");
      setContactFeedback("Thanks! Your message has been sent.");
      form.reset();
    } catch (error) {
      setContactStatus("error");
      setContactFeedback(
        error instanceof Error &&
          !error.message.includes("JSON") &&
          !error.message.includes("Unexpected")
          ? error.message
          : "Unable to send right now. Please email info@creativewebland.com."
      );
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Carlogia home">
          carlogia<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">
          Let&apos;s talk <Icon name="arrow" />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="kicker">Carlos E. Gutierrez / Minneapolis</p>
            <p className="role-label">
              Full-stack developer with a design background
            </p>
            <h1 id="hero-heading">
              <span className="title-line title-line--black">
                Design minded<span className="title-dot title-dot--red">.</span>
              </span>
              <br />
              <span className="title-line title-line--red">
                Full stack<span className="title-dot title-dot--black">.</span>
              </span>
            </h1>
            <p className="hero-intro">
              I’m Carlos, a developer with a graphic design background and years of experience building websites for clients and agencies.
              Today, I bring that experience to full-stack applications, connecting thoughtful interfaces with the systems behind them.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">
                Explore my work <Icon name="arrow" />
              </a>
              <a className="button button--secondary" href="#contact">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hero-collage">
            <div className="hero-collage-art">
              <img
                className="hero-collage-image"
                src={heroCollage}
                alt="Black-and-white collage of Carlos at work and with family"
              />

              <span
                className="wordmark hero-collage-watermark"
                aria-hidden="true"
              >
                carlogia<span>.</span>
              </span>
            </div>
          </div>

          <p className="hero-side-note">
            Developer / Designer / Problem solver
          </p>
        </section>

        <section
          className="engineering-focus"
          aria-labelledby="engineering-focus-heading"
        >
          <div className="engineering-focus__intro">
            <p>What I bring</p>
            <h2 id="engineering-focus-heading">
              Design, development, and delivery
            </h2>
          </div>
          <div className="engineering-focus__item">
            <span className="focus-icon">
              <Icon name="code" />
            </span>
            <h3>FULL-STACK DEVELOPMENT</h3>
            <p>
              React and TypeScript interfaces connected to Express APIs and PostgreSQL, demonstrated through my CT Ticket System.
            </p>
          </div>
          <div className="engineering-focus__item">
            <span className="focus-icon">
              <Icon name="browser" />
            </span>
            <h3>PROFESSIONAL WEB EXPERIENCE</h3>
            <p>
              Custom WordPress development, content migrations, and automation, built through years of client and agency work.
            </p>
          </div>
          <div className="engineering-focus__item">
            <span className="focus-icon">
              <Icon name="deploy" />
            </span>
            <h3>TESTING AND DEPLOYMENT</h3>
            <p>
              Hands-on experience with automated tests, Docker, Azure hosting, and GitHub Actions through my full-stack projects.
            </p>
          </div>
        </section>

        <section
          className="featured"
          id="work"
          aria-labelledby="featured-heading"
        >
          <div className="featured-heading">
            <SectionLabel icon="code">
              Full-stack application
            </SectionLabel>
            <h2
              className="contrast-title contrast-title--black"
              id="featured-heading"
            >
              CT Ticket
              <br />
              System<span className="title-dot title-dot--red">.</span>
            </h2>
            <p>
              I built CT Ticket System to turn my experience managing web-development tickets into a full-stack application.
              It lets a small team create, prioritize, assign, and track tickets, with authenticated access and role-based permissions.
            </p>
            <div className="inline-links">
              <PlaceholderLink dark href="https://tickets.carlogia.com/">
                Live demo
              </PlaceholderLink>
              <PlaceholderLink dark href="https://github.com/cgutierrez5000/ct-ticket-system" icon="github">
                GitHub
              </PlaceholderLink>
            </div>
            <dl className="project-facts">
              <div>
                <dt>My role</dt>
                <dd>Frontend, API, database, testing, and deployment</dd>
              </div>
              <div>
                <dt>Project type</dt>
                <dd>Independent portfolio project</dd>
              </div>
              <div>
                <dt>Deployment</dt>
                <dd>Azure hosting with GitHub Actions</dd>
              </div>
            </dl>
          </div>

          <div className="app-shot-wrap">
            <div className="app-shot-bar">
              <span />
              <span />
              <span />
              <p>CT Ticket System / application screenshot</p>
            </div>
            <img
              src={ticketDashboard}
              alt="CT Ticket System dashboard showing ticket priorities, statuses, and assignments"
              className="app-shot app-shot-image"
              loading="lazy"
            />
          </div>

          <div className="featured-details">
            <div className="stack-block">
              <p className="detail-label">Technology stack</p>
              <div className="stack-list">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                  "Docker",
                  "Azure",
                  "GitHub Actions",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="architecture" aria-label="Application architecture">
              <div>
                <small>Client</small>
                <strong>React + TS</strong>
              </div>
              <span aria-hidden="true">→</span>
              <div>
                <small>API</small>
                <strong>Node + Express</strong>
              </div>
              <span aria-hidden="true">→</span>
              <div>
                <small>Data</small>
                <strong>PostgreSQL</strong>
              </div>
            </div>

            <div className="project-notes">
              <details open>
                <summary>Why I built it</summary>
                <p>
                  Working as a web developer and ticket manager gave me firsthand experience with how teams organize requests, assign work, and track progress.<br /><br />
                  I built CT Ticket System around that workflow to apply my full-stack and backend training to a problem I understood.<br />
                  My goal was to connect the interface, API, database, and deployment into a working application.
                </p>
              </details>
              <details>
                <summary>Project evolution</summary>
                <p>
                  I started by defining the ticket workflow and building the React and TypeScript interface with mock data.<br />
                  Next, I built and tested an Express API, then connected it to the frontend. PostgreSQL added persistent storage, followed by authentication and role-based permissions.<br /><br />

                  Once the application worked locally, I packaged the API with Docker and deployed the frontend and backend to Azure.<br />
                  I then added GitHub Actions workflows to automate testing and deployment, using Git throughout the project to track changes.<br />
                </p>
              </details>
              <details>
                <summary>Challenges and lessons</summary>
                <p>
                  Keeping ticket data consistent across the React frontend and Express API required clear TypeScript types and runtime validation. Types helped catch mismatches during development, while validation checked incoming requests.<br /><br />

                  Deploying the API required connecting the Docker build, Azure Container Registry, and Azure Container Apps. I worked through configuration and deployment issues, then automated testing and delivery with GitHub Actions.<br /><br />

                  The main lesson was to build and verify each layer incrementally, making problems easier to isolate as the application grew.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section
          className="professional"
          aria-labelledby="professional-heading"
        >
          <div className="section-heading">
            <SectionLabel icon="browser">Client & agency work</SectionLabel>
            <h2
              className="contrast-title contrast-title--black"
              id="professional-heading"
            >
              Selected web
              <br />
              development<span className="title-dot title-dot--red">.</span>
            </h2>
          </div>

          <div className="case-list">
            {selectedProjects.map((project) => (
              <article className="case-study" key={project.title}>
                <div className={`case-visual case-visual--${project.variant}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} website homepage`}
                      className="project-screenshot"
                      loading="lazy"
                    />
                  ) : (
                    <ImagePlaceholder
                      label={`${project.title} website screenshot`}
                    />
                  )}
                </div>
                <div className="case-copy">
                  <p className="eyebrow kicker">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="case-description">{project.description}</p>
                  <p style={{ whiteSpace: "pre-wrap" }} className="case-detail">{project.detail}</p>
                  <PlaceholderLink href={project.url}>
                    View website
                  </PlaceholderLink>
                </div>
              </article>
            ))}
          </div>

          <div className="minor-projects">
            <article>
              <p className="kicker">Custom Wordpress Development / Patient Experience</p>
              <h3>The Facial Pain Center</h3>
              <p className="case-detail">A responsive WordPress rebuild designed to help patients find providers, explore locations, and request appointments.<br />
                Developed custom doctor and location templates using Advanced Custom Fields and custom post types, built appointment and referral forms, and added jQuery-powered popups. Translated Adobe XD designs into responsive layouts using PHP, HTML, LESS, and JavaScript, working with UX/UI designers, project managers, and copywriters.</p>
              <PlaceholderLink href="https://www.thefacialpaincenter.com/">
                View website
              </PlaceholderLink>
            </article>
            <article>
              <p className="kicker">Custom Wordpress Development / Content Migration</p>
              <h3>MP Johnson Construction</h3>
              <p className="case-detail">A WordPress rebuild designed to showcase the company’s construction work and support new business inquiries.<br />
                Developed custom templates using Advanced Custom Fields and custom post types, built responsive layouts with LESS and CSS Flexbox, and added interactive features with jQuery. Migrated legacy blog content while preserving existing SEO, collaborating with UX/UI designers, SEO specialists, and copywriters.</p>
              <PlaceholderLink href="https://mpjohnson.com/">
                View website
              </PlaceholderLink>
            </article>
          </div>
        </section>

        <section className="small-apps" aria-labelledby="apps-heading">
          <div className="apps-intro">
            <SectionLabel icon="terminal">Small applications</SectionLabel>
            <h2
              className="contrast-title contrast-title--black"
              id="apps-heading"
            >
              Focused builds<span className="title-dot title-dot--red">.</span>
            </h2>
            <p>
              Small frontend projects exploring React state, JavaScript logic, and interactive interfaces.
            </p>
          </div>
          <article className="app-card app-card--travel">
            <img
              src={travelScreenshot}
              alt="Travel List app with packing items and progress tracking"
              className="app-screenshot"
              loading="lazy"
            />
            <p className="eyebrow">React application</p>
            <h3>Travel List</h3>
            <p>A packing-list app for adding items, marking them as packed, sorting the list, and tracking progress.<br />
              Built with React to practice component composition, state management, and derived data.
            </p>
            <div className="inline-links">
              <PlaceholderLink href="https://travel-list.carlogia.com/">
                Demo
              </PlaceholderLink>
              <PlaceholderLink
                icon="code"
                href="https://github.com/cgutierrez5000/travel-list"
              >
                Code
              </PlaceholderLink>
            </div>
          </article>
          <article className="app-card app-card--neon">
            <img
              src={ticTacToeScreenshot}
              alt="Neon Tic-Tac-Toe game showing a winning result"
              className="app-screenshot"
              loading="lazy"
            />
            <p className="eyebrow">Vanilla JavaScript game</p>
            <h3>Neon Tic-Tac-Toe</h3>
            <p>
              A two-player browser game with a custom neon interface, turn tracking, winner detection, and restart controls.<br />
              Built with vanilla JavaScript to practice game logic, DOM updates, and event handling.
            </p>
            <div className="inline-links">
              <PlaceholderLink dark href="https://tictactoe.carlogia.com/">
                Demo
              </PlaceholderLink>
              <PlaceholderLink
                dark
                icon="code"
                href="https://github.com/cgutierrez5000/tictactoe"
              >
                Code
              </PlaceholderLink>
            </div>
          </article>
        </section>

        <section className="design-work" aria-labelledby="design-heading">
          <div className="design-title">
            <SectionLabel icon="pen">Graphic design roots</SectionLabel>
            <h2
              className="contrast-title contrast-title--red"
              id="design-heading"
            >
              Selected
              <br />
              design<span className="title-dot title-dot--black">.</span>
            </h2>
          </div>
          <div className="design-grid">
            <div className="design-item design-item--logo">
              <span className="design-label">Logo design</span>
              <img
                src={logoCollection}
                alt="Logo designs for Freund Haus, Tatyana’s Jewelry, and Saint Paul Spirit House"
                loading="lazy"
              />
            </div>

            <div className="design-item design-item--poster">
              <span className="design-label">Poster design</span>
              <img
                src={posterDesign}
                alt="Constructivist-inspired Lewis and Clark expedition poster"
                loading="lazy"
              />
            </div>

            <div className="design-item design-item--cards">
              <span className="design-label">Creative Webland — Branding</span>
              <img
                src={personalBranding}
                alt="Creative Webland identity with business cards and stationery"
                loading="lazy"
              />
            </div>

            <div className="design-statement">
              <p>
                My background in graphic design includes logos, branding, and print.
                That experience shapes how I build interfaces today—with attention to
                typography, visual hierarchy, and clear communication.
              </p>
            </div>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-heading">
          <SectionLabel icon="user">
            About
          </SectionLabel>
          <div className="about-grid">
            <h2 id="about-heading">
              <span className="title-line title-line--black">
                Design trained
                <span className="title-dot title-dot--red">.</span>
              </span>
              <br />
              <span className="title-line title-line--red">
                Engineering driven
                <span className="title-dot title-dot--black">.</span>
              </span>
            </h2>
            <div className="about-copy">
              <p>
                I&apos;m Carlos, a Minneapolis-based developer whose career started in graphic design and grew into professional web development.
                Working with clients and agency teams, I’ve built custom websites, handled content migrations, and helped bring projects from design through launch.
              </p>
              <br />
              <p>
                Today, I&apos;m building full-stack applications with React, TypeScript, Express, and PostgreSQL.
                I bring experience delivering real projects, an eye for design, and curiosity about how every part of an application works together.
              </p>
              <p className="case-detail"></p>
              <div className="resume-links">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  View résumé
                  <Icon name="arrow" />
                </a>

                <a
                  href={resumePdf}
                  download="Carlos_Gutierrez_Resume_2026.pdf"
                  className="text-link"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-top">
          <div className="contact-intro">
            <p className="role-label">
              Have a role or project in mind?
            </p>
            <h2>
              <span className="title-line title-line--black">
                Let&apos;s build
              </span>
              <br />
              <span className="title-line title-line--red">
                something together
                <span className="title-dot title-dot--black">.</span>
              </span>
            </h2>
            <p>Looking for a developer for your team or your next project? I’d love to hear what you’re working on and how I can contribute.</p>
          </div>

          <form
            className="contact-form"
            aria-label="Contact Carlos"
            aria-busy={contactStatus === "sending"}
            onSubmit={handleContactSubmit}
          >
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                minLength={10}
                maxLength={5000}
                required
              />
            </div>

            {/* Honeypot: visitors should leave this field empty. */}
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-company">Leave this field empty</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              className="button button--primary"
              type="submit"
              disabled={contactStatus === "sending"}
            >
              {contactStatus === "sending" ? "Sending…" : "Send message"}
              <Icon name="arrow" />
            </button>

            <p
              className={`contact-feedback contact-feedback--${contactStatus}`}
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {contactFeedback}
            </p>
          </form>
        </div>

        <div className="footer-links">
          <PlaceholderLink dark icon="mail">
            Contact
          </PlaceholderLink>
          <PlaceholderLink dark icon="github" href="https://github.com/cgutierrez5000/">
            GitHub
          </PlaceholderLink>
          <PlaceholderLink dark icon="linkedin" href="https://www.linkedin.com/in/carlosgutierrezwebdev/">
            LinkedIn
          </PlaceholderLink>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Résumé
            <Icon name="arrow" />
          </a>
        </div>

        <div className="footer-bottom">
          <a
            className="wordmark wordmark--footer"
            href="#top"
          >
            carlogia<span>.</span>
          </a>

          <p>Minneapolis, Minnesota</p>

          <p>© {new Date().getFullYear()} Carlos E. Gutierrez</p>
        </div>
      </footer>
    </>
  )
}

export default App
