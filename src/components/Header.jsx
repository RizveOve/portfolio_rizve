import { useState } from 'react'
import heroImg from '../assets/rizve.jpg'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="header" id="home">
      <nav className="navbar">
        <a className="brand" href="#home">
          Rizve Hasan
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-backdrop" onClick={() => setIsMenuOpen(false)} />
        <div className="mobile-drawer-panel">
          <button className="drawer-close" type="button" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            ×
          </button>
          <div className="drawer-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

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
