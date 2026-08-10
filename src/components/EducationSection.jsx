import './EducationSection.css'

function EducationSection() {
  return (
    <section className="education-section" id="education">
      <div className="section-heading">
        <p className="section-label">Education</p>
        <h2>Academic background</h2>
      </div>

      <div className="education-list">
        <article className="education-card">
          <div className="education-meta">
            <h3>University of Oslo — MSc, Informatics: Programming & System Architecture</h3>
            <span>Aug 2022 – Jul 2025</span>
          </div>
          <p className="education-thesis">
            Thesis:{' '}
            <a
              href="https://home.simula.no/~paalh/students/2025-UiO-MdRizveHasan.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Huldra – A framework for collecting crowdsourced feedback on multimedia accessibility.
            </a>
          </p>
          <p>
            Coursework: Development in Platform Ecosystems, Software Testing, IT & Management, Distributed Systems.
          </p>
        </article>

        <article className="education-card">
          <div className="education-meta">
            <h3>Bangladesh University — BSc, Computer Science & Engineering</h3>
            <span>Jun 2016 – Jul 2020</span>
          </div>
          <p>
            Coursework: Operating Systems, Computer Architecture, Algorithms & Data Structures, Object-Oriented Programming, Distributed Systems.
          </p>
        </article>
      </div>
    </section>
  )
}

export default EducationSection
