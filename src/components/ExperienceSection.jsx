import './ExperienceSection.css'

function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-heading">
        <p className="section-label">Experience</p>
        <h2>Professional journey</h2>
      </div>

      <div className="experience-list">
        <article className="experience-card">
          <div className="experience-meta">
            <h3>Software Engineering Intern — Nordic Digi Solutions, Norway</h3>
            <span>Dec 2025 – May 2026</span>
          </div>
          <ul>
            <li>Developed and shipped user-focused application features in a production environment, emphasizing scalability, performance, and iterative improvement.</li>
            <li>Applied AI-assisted development workflows and modern tooling to improve code quality and delivery efficiency.</li>
            <li>Containerized backend services using Docker to improve environment consistency across development and production.</li>
          </ul>
        </article>

        <article className="experience-card">
          <div className="experience-meta">
            <h3>Web Developer — Money Guard Ltd., Bangladesh</h3>
            <span>Jan 2022 – Jun 2022</span>
          </div>
          <ul>
            <li>Developed user-centered features for a cloud-integrated application, improving user engagement by 20% through iterative enhancements.</li>
            <li>Designed RESTful APIs and integrated backend services supporting scalable data processing.</li>
            <li>Collaborated cross-functionally with product managers and designers; participated in agile sprints, code reviews, and CI/CD workflows.</li>
          </ul>
        </article>

        <article className="experience-card">
          <div className="experience-meta">
            <h3>Junior Web Developer — InfoSystem Solutions Ltd., Bangladesh</h3>
            <span>Jun 2020 – Sep 2021</span>
          </div>
          <ul>
            <li>Developed application features using JavaScript, Node.js, and MySQL in a client-facing environment.</li>
            <li>Implemented and consumed RESTful backend APIs, ensuring reliable data flow between frontend and backend.</li>
            <li>Collaborated with senior engineers and stakeholders on requirement translation and system design decisions.</li>
          </ul>
        </article>

        <article className="experience-card">
          <div className="experience-meta">
            <h3>Service Employee (Servicemedarbeider) — Fly Chicken, Norway</h3>
            <span>Part-time</span>
          </div>
          <ul>
            <li>Customer service role in a fast-paced, communication-centric environment — handling orders, resolving customer needs directly, and keeping service flow running under shifting priorities.</li>
            <li>Gained first-hand insight into how digital ordering systems and reliable information flow shape the customer experience — perspective applied directly to building user-facing products.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default ExperienceSection
