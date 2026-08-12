const caseNotes = [
  {
    domain: "Mobile health",
    title: "Making health-data workflows dependable",
    situation:
      "Health and activity data behaves differently across devices, operating systems, permissions, and background states.",
    responsibility:
      "I worked across mobile architecture, native health-service integration, permissions, background processing, API boundaries, testing, and production support.",
    priorities: "Predictable state · explicit permissions · recoverable sync",
    system: "Flutter / iOS / Android / Cloud APIs",
  },
  {
    domain: "Product infrastructure",
    title: "One routing foundation across platforms",
    situation:
      "Deep links, authentication, and navigation often become duplicated platform logic as a product expands across iOS, Android, and web.",
    responsibility:
      "I built reusable routing and integration foundations so platform-specific behavior stayed visible without leaking into every product flow.",
    priorities: "Clear ownership · reusable boundaries · testable behavior",
    system: "Flutter / Native bridges / Web routing",
  },
  {
    domain: "Cloud operations",
    title: "Turning distributed data into usable workflows",
    situation:
      "Operational products need more than dashboards: roles, reporting, data quality, and everyday workflows have to agree.",
    responsibility:
      "I contributed responsive interfaces, role-based access, data aggregation, analytical views, reporting flows, and maintainable product architecture.",
    priorities: "Role clarity · useful reporting · operational fit",
    system: "Flutter Web / Firebase / APIs / RBAC",
  },
  {
    domain: "Connected systems",
    title: "Keeping apps, edge services, and devices legible",
    situation:
      "When software crosses cloud, Linux services, AI workloads, and physical devices, unclear boundaries make every change risky.",
    responsibility:
      "I worked on application integration, device communication, Linux-based services, deployment workflows, and API contracts across disciplines.",
    priorities: "Explicit contracts · observable behavior · maintainable handoffs",
    system: "Python / Linux / Edge AI / IoT",
  },
];

const practice = [
  {
    title: "Own the full path",
    body: "Stay involved from requirements and architecture through implementation, release, and production support.",
  },
  {
    title: "Expose the boundary",
    body: "Make platform differences, service contracts, and device responsibilities visible before they become hidden coupling.",
  },
  {
    title: "Keep maintenance ordinary",
    body: "Prefer foundations that are easy to explain, test, operate, and change after the first release.",
  },
  {
    title: "Use AI with review",
    body: "Use AI to accelerate discovery, implementation, debugging, testing, and documentation while retaining engineering judgment.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header shell">
        <a className="identity" href="#top" aria-label="Jay Hsu, back to top">
          <strong>Jay Hsu</strong>
          <span>Mobile &amp; product engineer</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Selected work</a>
          <a href="#practice">Practice</a>
          <a href="#experience">Experience</a>
        </nav>
        <a
          className="text-link header-link"
          href="https://www.linkedin.com/in/jayhsugo/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="overline">Senior Mobile &amp; Product Engineer · Taiwan</p>
          <h1 id="hero-title">
            I make the boundaries between
            <span> app, cloud, and device </span>
            behave.
          </h1>
          <p className="hero-summary">
            Eight years of building production software across Flutter, iOS,
            Android, web, cloud services, Edge AI, and IoT. I translate product
            intent into systems teams can ship, operate, and extend.
          </p>
          <div className="hero-actions">
            <a className="action-link" href="#work">
              Read the case notes <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link"
              href="https://github.com/jayhsugo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="system-register" aria-label="Systems I work across">
          <div className="register-header">
            <span>System register</span>
            <span>2017—Now</span>
          </div>
          <div className="system-lane">
            <span className="lane-code">S1</span>
            <div>
              <small>Interface</small>
              <strong>Mobile &amp; Web</strong>
              <p>Flutter · iOS · Android</p>
            </div>
          </div>
          <div className="system-lane">
            <span className="lane-code">S2</span>
            <div>
              <small>Services</small>
              <strong>Cloud &amp; Data</strong>
              <p>APIs · Firebase · Identity</p>
            </div>
          </div>
          <div className="system-lane">
            <span className="lane-code">S3</span>
            <div>
              <small>Physical layer</small>
              <strong>Edge &amp; Device</strong>
              <p>Python · Linux · IoT</p>
            </div>
          </div>
          <p className="register-note">
            The hard work usually lives between these rows.
          </p>
        </aside>
      </section>

      <section className="case-section" id="work">
        <div className="shell">
          <div className="section-intro">
            <div>
              <p className="overline">Selected problem spaces</p>
              <h2>Case notes from production work.</h2>
            </div>
            <p>
              These summaries focus on engineering responsibility and decision
              context. Product names, clients, internal architecture, and
              confidential metrics are intentionally omitted.
            </p>
          </div>

          <div className="case-notes">
            {caseNotes.map((note) => (
              <article className="case-note" key={note.title}>
                <div className="case-label">
                  <span>{note.domain}</span>
                  <small>{note.system}</small>
                </div>
                <div className="case-content">
                  <h3>{note.title}</h3>
                  <dl>
                    <div>
                      <dt>Situation</dt>
                      <dd>{note.situation}</dd>
                    </div>
                    <div>
                      <dt>My responsibility</dt>
                      <dd>{note.responsibility}</dd>
                    </div>
                    <div>
                      <dt>Design priorities</dt>
                      <dd>{note.priorities}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="practice-section shell" id="practice">
        <div className="practice-heading">
          <p className="overline">Engineering practice</p>
          <h2>How I keep cross-system work understandable.</h2>
        </div>
        <div className="practice-list">
          {practice.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="shell experience-grid">
          <div className="experience-title">
            <p className="overline overline-light">Current experience</p>
            <h2>Built in production, not in isolation.</h2>
          </div>
          <article className="role">
            <div className="role-header">
              <div>
                <p>Software Engineer</p>
                <h3>Gimmatek Corp.</h3>
              </div>
              <span>Dec 2017 — Present<br />Taiwan</span>
            </div>
            <p className="role-summary">
              Building and maintaining production applications across mobile,
              web, cloud, and connected-device environments.
            </p>
            <ul>
              <li>Own work across requirements, architecture, implementation, testing, release, and support.</li>
              <li>Build reusable foundations for routing, authentication, integrations, and cross-platform delivery.</li>
              <li>Work with product, design, backend, AI, and hardware disciplines to ship practical systems.</li>
            </ul>
            <div className="toolchain">
              <span>Working set</span>
              <p>Flutter · Dart · iOS · Android · Firebase · REST APIs · Python · FastAPI · Vue.js · Linux · Docker · Edge AI · IoT</p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact shell">
        <div>
          <p className="overline">Exchange notes</p>
          <h2>Interested in the engineering behind connected products?</h2>
        </div>
        <div className="contact-copy">
          <p>
            I enjoy practical conversations about mobile architecture, product
            systems, cloud integration, Edge AI, and IoT.
          </p>
          <div className="contact-links">
            <a
              className="action-link"
              href="https://www.linkedin.com/in/jayhsugo/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link"
              href="https://github.com/jayhsugo"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="shell">
        <p>Jay Hsu · Senior Mobile &amp; Product Engineer</p>
        <p>Built with care in Taiwan · © {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
