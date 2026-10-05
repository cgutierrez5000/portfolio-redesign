import type { ReactNode } from "react"
import heroCollage from "./assets/carlogia-hero-collage.png"

type IconName = "arrow" | "code" | "external" | "github" | "linkedin" | "mail"

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
  number,
  children,
}: {
  number: string
  children: ReactNode
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{children}</p>
    </div>
  )
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
    eyebrow: "WordPress development / migration",
    description:
      "Development automation and content migration across approximately 1,033 content items using WP-CLI, PHP, SQL, and reusable Elementor sections.",
    detail:
      "Hands-on development, coordination, QA, and launch in approximately 1.5 months. A four-developer team delivered the project; overseas developers built approximately 12 primary templates.",
    variant: "abrakadabra",
    url: "https://abrakadabraenvironmental.com/",
  },
  {
    index: "02",
    title: "United Theological Seminary",
    eyebrow: "Custom WordPress platform",
    description:
      "A custom 120-page WordPress build using PHP, LESS, JavaScript, jQuery, ACF, and custom post types.",
    detail:
      "Built in close collaboration with designers and content teams, translating a large content model into a flexible, maintainable publishing system.",
    variant: "seminary",
    url: "https://www.unitedseminary.edu/",
  },
]

function App() {
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
              Full-stack developer · Web platform integrations
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
              I build web applications, custom interfaces, and integrations—with
              a foundation in graphic design and years of web development
              experience.
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
            <img
              className="hero-collage-image"
              src={heroCollage}
              alt="Black-and-white collage of Carlos at work and with family"
            />
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
              From interface to infrastructure
            </h2>
          </div>
          <div className="engineering-focus__item">
            <span>01</span>
            <h3>Application engineering</h3>
            <p>
              Typed, responsive interfaces connected to practical backend
              systems.
            </p>
          </div>
          <div className="engineering-focus__item">
            <span>02</span>
            <h3>Platform integration</h3>
            <p>
              Custom web platforms, content systems, migrations, and automation.
            </p>
          </div>
          <div className="engineering-focus__item">
            <span>03</span>
            <h3>Production delivery</h3>
            <p>
              Containerized workflows, cloud deployment, QA, and continuous
              delivery.
            </p>
          </div>
        </section>

        <section
          className="featured"
          id="work"
          aria-labelledby="featured-heading"
        >
          <div className="featured-heading">
            <SectionLabel number="01">
              Flagship engineering case study
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
              A production-ready ticket-management application for small web
              teams, shaped by hands-on experience as a web developer and ticket
              manager.
            </p>
            <div className="inline-links">
              <PlaceholderLink dark href="https://tickets.carlogia.com/">
                Live demo
              </PlaceholderLink>
              <PlaceholderLink dark icon="github">
                GitHub
              </PlaceholderLink>
            </div>
            <dl className="project-facts">
              <div>
                <dt>Product</dt>
                <dd>Full-stack web application</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Small-team ticket workflow</dd>
              </div>
              <div>
                <dt>Delivery</dt>
                <dd>Docker / Azure / CI</dd>
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
            <ImagePlaceholder
              label="CT Ticket System dashboard"
              className="app-shot"
            />
          </div>

          <div className="featured-details">
            <div className="stack-block">
              <p className="detail-label">Full-stack architecture</p>
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
                <summary>Engineering goals</summary>
                <p>
                  Build a dependable team workflow with a clear system boundary,
                  typed interfaces, and deployment readiness from the start.
                </p>
              </details>
              <details>
                <summary>Project evolution</summary>
                <p>
                  The project evolved from a workflow concept into a full-stack
                  application, with infrastructure and delivery treated as part
                  of the product.
                </p>
              </details>
              <details>
                <summary>Challenges</summary>
                <p>
                  Translating day-to-day ticket management needs into focused
                  application architecture without overcomplicating the core
                  experience.
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
            <SectionLabel number="02">Professional development</SectionLabel>
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
                  <span>{project.index}</span>
                  <ImagePlaceholder
                    label={`${project.title} website screenshot`}
                  />
                </div>
                <div className="case-copy">
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="case-detail">{project.detail}</p>
                  <PlaceholderLink href={project.url}>
                    View website
                  </PlaceholderLink>
                </div>
              </article>
            ))}
          </div>

          <div className="minor-projects">
            <article>
              <span>03</span>
              <p>Professional web development</p>
              <h3>The Facial Pain Center</h3>
              <p>Project details to be added.</p>
              <PlaceholderLink href="https://www.thefacialpaincenter.com/">
                View website
              </PlaceholderLink>
            </article>
            <article>
              <span>04</span>
              <p>Professional web development</p>
              <h3>MP Johnson Construction</h3>
              <p>Project details to be added.</p>
              <PlaceholderLink href="https://mpjohnson.com/">
                View website
              </PlaceholderLink>
            </article>
          </div>
        </section>

        <section className="small-apps" aria-labelledby="apps-heading">
          <div className="apps-intro">
            <SectionLabel number="03">Small applications</SectionLabel>
            <h2
              className="contrast-title contrast-title--black"
              id="apps-heading"
            >
              Focused builds<span className="title-dot title-dot--red">.</span>
            </h2>
            <p>
              Small applications built to explore interaction, logic, and clean
              implementation.
            </p>
          </div>
          <article className="app-card app-card--travel">
            <ImagePlaceholder label="Travel List application screenshot" />
            <p className="eyebrow">React application</p>
            <h3>Travel List</h3>
            <p>
              A focused packing-list app for adding, tracking, sorting, and
              clearing trip items.
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
            <ImagePlaceholder label="Neon Tic-Tac-Toe game screenshot" />
            <p className="eyebrow">Vanilla JavaScript game</p>
            <h3>Neon Tic-Tac-Toe</h3>
            <p>
              A compact browser game exploring state, game logic, and responsive
              interaction.
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
            <SectionLabel number="04">Graphic design roots</SectionLabel>
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
            <ImagePlaceholder
              label="Logo collection"
              className="design-item design-item--logo"
            />
            <ImagePlaceholder
              label="Poster design"
              className="design-item design-item--poster"
            />
            <ImagePlaceholder
              label="Business card collection"
              className="design-item design-item--cards"
            />
            <div className="design-statement">
              <p>
                Before interfaces, there were identities, grids, type, and
                print. That way of thinking still shapes how I build for the
                web.
              </p>
            </div>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-heading">
          <SectionLabel number="05">About</SectionLabel>
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
                I&apos;m Carlos, a Minneapolis developer with a background in
                graphic design and years of professional frontend and web
                development experience.
              </p>
              <p>
                I&apos;m now focused on full-stack development and web platform
                integration roles, bringing visual judgment, production
                experience, and practical systems thinking to every build.
              </p>
              <PlaceholderLink icon="external">Résumé</PlaceholderLink>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-top">
          <p>Have a role or project in mind?</p>
          <h2>
            <span className="title-line title-line--black">
              Let&apos;s build
            </span>
            <br />
            <span className="title-line title-line--red">
              something clear
              <span className="title-dot title-dot--black">.</span>
            </span>
          </h2>
        </div>
        <div className="footer-links">
          <PlaceholderLink dark icon="mail">
            Contact
          </PlaceholderLink>
          <PlaceholderLink dark icon="github">
            GitHub
          </PlaceholderLink>
          <PlaceholderLink dark icon="linkedin">
            LinkedIn
          </PlaceholderLink>
          <PlaceholderLink dark>Résumé</PlaceholderLink>
        </div>
        <div className="footer-bottom">
          <a className="wordmark wordmark--footer" href="#top">
            carlogia<span>.</span>
          </a>
          <p>Minneapolis, Minnesota</p>
          <a
            className="current-site-link"
            href="https://carlogia.com/"
            target="_blank"
            rel="noreferrer"
          >
            Current portfolio ↗
          </a>
          <button
            className="freelance-link"
            type="button"
            title="Link to be added"
          >
            Freelance inquiries: Creative Webland ↗
          </button>
          <p>© {new Date().getFullYear()} Carlos E. Gutierrez</p>
        </div>
      </footer>
    </>
  )
}

export default App
