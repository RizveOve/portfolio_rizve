import heroImg from '../assets/rizve.jpg'
import './Header.css'

function Header() {
  return (
    <header className="header" id="home">
      <nav className="navbar">
        <a className="brand" href="#home">
          Rizve Hasan
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Software Developer · Oslo, Norway</p>
          <h1>Rizve Hasan</h1>
          <p className="hero-text">
            full-stack developer with an MSc in Informatics from the University of Oslo,
            specializing in modern web applications, component-based architecture, and
            accessibility (WCAG). Experienced in building scalable solutions with React
            and TypeScript, integrating cloud services, and working in agile,
            DevOps-oriented teams.
          </p>

          <a className="btn btn-primary hero-cta" href="#contact">
            Get in touch
          </a>
        </div>

        <div className="hero-card">
          <img src={heroImg} alt="Rizve Hasan" />
          <div className="card-content">
            <p className="card-label">Available for</p>
            <h2>Code, cloud & AI</h2>
            <p>Modern web development, cloud solutions, AI integration, and accessible digital experiences.</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
