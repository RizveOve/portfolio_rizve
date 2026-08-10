import './SkillsSection.css'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'SQL', 'C#'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Angular', 'HTMX', 'HTML5', 'CSS3', 'Tailwind CSS', 'Chart.js', 'D3.js', 'component-based architecture', 'state management'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Flask', 'FastAPI', '.NET', 'REST APIs'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, IAM, VPC)', 'Azure', 'Firebase', 'Docker', 'GitHub Actions (CI/CD)'],
  },
  {
    title: 'Data & Analytics',
    items: ['Splunk', 'SPL', 'dashboards', 'log analysis', 'anomaly detection'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'Firebase Firestore'],
  },
  {
    title: 'Testing',
    items: ['Cypress', 'TDD', 'unit/integration/E2E testing', 'Postman'],
  },
  {
    title: 'Systems',
    items: ['Linux', 'distributed systems', 'networking (DNS, load balancing)'],
  },
]

function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <p className="section-label">Skills</p>
        <h2>Skills, certifications, and languages</h2>
      </div>

      <div className="skills-grid">
        <article className="skills-card">
          <h3>Skills</h3>
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h4>{group.title}</h4>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </article>

        <article className="skills-card">
          <h3>Certification</h3>
          <p className="certification-title">AWS Certified Cloud Practitioner</p>
          <p className="certification-meta">Amazon Web Services · Issued Jan 2026 · Expires Jan 2029</p>
        </article>

        <article className="skills-card">
          <h3>Languages</h3>
          <div className="tag-row">
            <span>Bengali (native)</span>
            <span>English (fluent)</span>
            <span>Norwegian (B1, intermediate)</span>
          </div>
        </article>
      </div>
    </section>
  )
}

export default SkillsSection
