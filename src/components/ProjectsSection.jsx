import './ProjectsSection.css'

const projects = [
  {
    title: 'Huldra — Crowdsourced Multimedia Feedback Framework',
    summary: 'Accessibility-first research tool for multimedia annotation studies.',
    bullets: [
      'Implemented accessibility validation features aligned with WCAG guidelines, improving survey reliability and user experience.',
      'Integrated multi-cloud storage (AWS S3, Firebase, Azure) to evaluate scalability, redundancy, and performance trade-offs for large-scale user studies.',
      'Built automated validation workflows and CI/CD pipelines; applied unit, integration, and end-to-end testing throughout.',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Firebase', 'AWS S3', 'Azure', 'GitHub Actions'],
    github: 'https://github.com/simula/huldra',
    live: null,
  },
  {
    title: 'OrderF — Modern Restaurant Ordering System',
    summary: 'Mobile-first ordering platform with live kitchen and customer workflows.',
    bullets: [
      'Built a mobile-first, real-time ordering system with Firebase-backed live order status updates for customers and kitchen staff.',
      'Developed a full admin suite including a live order dashboard, dynamic menu management, and QR code generation for table-based ordering across multiple locations.',
      'Deployed a production-ready Next.js app with environment-based configuration for seamless hosting on Netlify and Vercel.',
    ],
    tech: ['Next.js', 'React', 'Firebase', 'CSS3', 'QRCode'],
    github: 'https://github.com/RizveOve/OrderF',
    live: 'https://orderf.netlify.app',
  },
  {
    title: 'Hammer Hub — AI-Powered Drone Inspection Platform',
    summary: 'Interactive inspection workspace for AI-assisted defect review.',
    bullets: [
      'Designed an AI-assisted drone inspection viewer with SVG-based defect annotation overlays, simulating automated facade and roof defect detection.',
      'Built interactive statistics dashboards and PDF-style inspection reports to turn raw defect data into actionable insights.',
      'Implemented a mission planner with six configurable flight types plus share/collaboration views for team-based inspection review.',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Recharts'],
    github: 'https://github.com/RizveOve/hammer-hub',
    live: null,
  },
  {
    title: 'Retail Monitoring & Analytics with Splunk',
    summary: 'Synthetic retail observability and incident analysis workflow.',
    bullets: [
      'Engineered a synthetic log-generation pipeline in Python simulating a 20-store retail chain across orders, payments, inventory, API performance, security, and POS devices.',
      'Authored 8 production-grade SPL queries and 5 alert runbooks to detect real operational issues such as payment failure spikes, slow APIs, and brute-force login attempts.',
      'Designed 3 role-specific Splunk dashboards (operations, engineering, security) to translate raw log data into business-level insights.',
    ],
    tech: ['Splunk Enterprise', 'Python', 'SPL', 'JSON'],
    github: 'https://github.com/RizveOve/retail-monitoring-analytics-splunk',
    live: null,
  },
  {
    title: 'Metflix — Streaming Platform UI',
    summary: 'Netflix-inspired streaming experience with live content feeds.',
    bullets: [
      'Built a Netflix-style streaming interface in React, integrating the TMDB API to dynamically fetch trending, top-rated, and categorized movie content.',
      'Implemented a responsive hero banner and horizontally scrollable content rows to replicate a modern streaming browsing experience.',
      'Developed a login/sign-up authentication interface with React Router-driven navigation.',
    ],
    tech: ['React', 'React Router', 'Axios', 'CSS3', 'TMDB API'],
    github: 'https://github.com/RizveOve/Metflix',
    live: 'https://metfli.netlify.app/',
  },
  {
    title: 'BlogTime — Full-Stack Blogging Platform',
    summary: 'Role-based blogging platform with moderation and real-time collaboration.',
    bullets: [
      'Developed a role-based blogging platform (reader, author, master admin) backed by Firebase Firestore for real-time data persistence.',
      'Built content workflows covering drafting, submission for approval, and moderation, plus comments and like/dislike reactions.',
      'Implemented Firestore security rules and protected routes to enforce authentication and authorization throughout the app.',
    ],
    tech: ['React', 'React Router DOM', 'Firebase Firestore', 'Firebase Auth', 'CSS3'],
    github: 'https://github.com/RizveOve/BlogTime',
    live: 'https://blogtimee.netlify.app',
  },
]

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p className="section-label">Projects</p>
        <h2>Selected work</h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-meta">
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
            </div>
            <ul>
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="tech-row">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="project-actions">
              <a className="project-link github-link" href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              {project.live ? (
                <a className="project-link live-link" href={project.live} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
