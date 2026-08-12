const caseStudies = [
  {
    number: "01",
    title: "Health & Activity Platform",
    summary:
      "Cross-platform product engineering for health-data workflows, activity synchronization, rewards, and reliable mobile delivery.",
    contribution:
      "Mobile architecture, platform health-service integration, permissions, background processing, API integration, testing, and production support.",
    focus: ["Flutter", "iOS & Android", "Health Data", "Cloud APIs"],
  },
  {
    number: "02",
    title: "Cloud-backed Operations Platform",
    summary:
      "A responsive management experience that turns distributed operational data into clear workflows, dashboards, and reports.",
    contribution:
      "Role-based access, data aggregation, analytical interfaces, reporting flows, responsive web implementation, and maintainable product architecture.",
    focus: ["Flutter Web", "Firebase", "RBAC", "Analytics"],
  },
  {
    number: "03",
    title: "Edge-connected Product System",
    summary:
      "A maintainable product boundary connecting user-facing applications, cloud services, edge AI workloads, and physical devices.",
    contribution:
      "Application integration, device communication, Linux-based services, deployment workflows, API boundaries, and cross-functional delivery.",
    focus: ["Edge AI", "IoT", "Linux", "Python"],
  },
];

const capabilities = [
  {
    index: "A",
    title: "Product engineering",
    body: "From ambiguous requirements to a production-ready release—architecture, implementation, testing, delivery, and ongoing maintenance.",
  },
  {
    index: "B",
    title: "Cross-platform mobile",
    body: "Flutter and Dart across iOS, Android, and Web, with platform-aware integrations and a focus on durable application foundations.",
  },
  {
    index: "C",
    title: "Connected systems",
    body: "Clear interfaces between mobile products, cloud services, edge workloads, IoT devices, and the teams that build them.",
  },
];

const tools = [
  "Flutter",
  "Dart",
  "iOS",
  "Android",
  "Firebase",
  "REST APIs",
  "Flutter Web",
  "Python",
  "FastAPI",
  "Vue.js",
  "Linux",
  "Docker",
  "Edge AI",
  "IoT",
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Jay Hsu, back to top">
          <span className="brand-mark">JH</span>
          <span>Jay Hsu</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#experience">Experience</a>
        </nav>
        <a
          className="header-cta"
          href="https://www.linkedin.com/in/jay-hsu-429436177/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true" />
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Senior Mobile &amp; Product Engineer</p>
            <h1>
              Products that work across
              <em> screens, clouds,</em> and the physical world.
            </h1>
            <p className="hero-lede">
              I turn product goals into reliable mobile, web, cloud, edge AI,
              and IoT experiences—from the first architecture decision to
              production delivery.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View selected work <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-ghost"
                href="https://www.linkedin.com/in/jay-hsu-429436177/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="system-map" aria-label="A connected product system spanning mobile, cloud, and edge">
            <div className="system-label label-mobile">
              <small>Interface</small>
              <strong>Mobile</strong>
              <span>iOS · Android · Web</span>
            </div>
            <div className="system-label label-cloud">
              <small>Services</small>
              <strong>Cloud</strong>
              <span>Data · APIs · Identity</span>
            </div>
            <div className="system-label label-edge">
              <small>Real world</small>
              <strong>Edge + IoT</strong>
              <span>AI · Devices · Linux</span>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="map-core"><span>PRODUCT</span></div>
          </div>
        </div>

        <div className="hero-metrics shell" aria-label="Career highlights">
          <div><strong>8+</strong><span>Years building<br />software products</span></div>
          <div><strong>3</strong><span>Platforms<br />iOS · Android · Web</span></div>
          <div><strong>01→∞</strong><span>Lifecycle ownership<br />MVP to production</span></div>
        </div>
      </section>

      <section className="toolbelt" aria-label="Technology focus">
        <div className="toolbelt-track">
          {[...tools, ...tools].map((tool, index) => (
            <span key={`${tool}-${index}`}><i />{tool}</span>
          ))}
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="kicker">Selected work</p>
            <h2>Engineering stories,<br />shared responsibly.</h2>
          </div>
          <p>
            Public-safe summaries of the problems I solve and the systems I
            help deliver. Client names, internal architecture, and confidential
            product details are intentionally excluded.
          </p>
        </div>

        <div className="case-list">
          {caseStudies.map((item) => (
            <article className="case-card" key={item.number}>
              <div className="case-number">{item.number}</div>
              <div className="case-main">
                <h3>{item.title}</h3>
                <p className="case-summary">{item.summary}</p>
                <div className="case-contribution">
                  <span>Contribution</span>
                  <p>{item.contribution}</p>
                </div>
              </div>
              <div className="case-focus">
                {item.focus.map((focus) => <span key={focus}>{focus}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capability-section" id="capabilities">
        <div className="shell">
          <p className="kicker kicker-light">How I contribute</p>
          <div className="capability-intro">
            <h2>Technical depth,<br />product perspective.</h2>
            <p>
              My strength is not a single framework. It is connecting product
              intent, engineering trade-offs, and real operating constraints
              into something teams can ship and maintain.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.index}>
                <span className="capability-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell experience" id="experience">
        <div className="section-heading compact">
          <div>
            <p className="kicker">Experience</p>
            <h2>Built through<br />production reality.</h2>
          </div>
        </div>

        <div className="experience-grid">
          <div className="role-meta">
            <span>Dec 2017 — Present</span>
            <strong>Gimmatek</strong>
            <p>Taipei, Taiwan</p>
          </div>
          <div className="role-body">
            <div className="role-title">
              <span>Current role</span>
              <h3>Software Engineer</h3>
            </div>
            <p className="role-lede">
              Building and maintaining production applications across mobile,
              web, cloud, and connected-device environments.
            </p>
            <ul>
              <li>Own work across requirements, architecture, implementation, testing, release, and production support.</li>
              <li>Build reusable foundations for routing, authentication, integrations, and cross-platform delivery.</li>
              <li>Collaborate with product, design, backend, AI, and hardware disciplines to ship practical solutions.</li>
              <li>Use AI-assisted workflows for discovery, implementation, debugging, testing, and documentation—with engineering review retained.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="principles shell">
        <p className="kicker">Working principles</p>
        <div className="principle-grid">
          <blockquote>
            “The best architecture is the one that makes the next product
            decision easier—not the one with the most moving parts.”
          </blockquote>
          <div>
            <p><span>01</span> Start from the user and operating context.</p>
            <p><span>02</span> Make boundaries explicit and maintenance boring.</p>
            <p><span>03</span> Use AI for leverage, never as a substitute for review.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-glow" aria-hidden="true" />
        <div className="shell contact-inner">
          <p className="kicker kicker-light">Let&apos;s connect</p>
          <h2>Have a product problem<br />that crosses boundaries?</h2>
          <p>
            I am open to conversations about senior mobile engineering,
            product architecture, SaaS, cloud integration, Edge AI, and IoT.
          </p>
          <a
            className="button button-light"
            href="https://www.linkedin.com/in/jay-hsu-429436177/"
            target="_blank"
            rel="noreferrer"
          >
            Start a conversation on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="shell">
        <div className="brand"><span className="brand-mark">JH</span><span>Jay Hsu</span></div>
        <p>Senior Mobile &amp; Product Engineer · Taiwan</p>
        <p>© {new Date().getFullYear()} Jay Hsu</p>
      </footer>
    </main>
  );
}
