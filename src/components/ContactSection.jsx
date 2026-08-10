import './ContactSection.css'

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <p className="section-label">Get in touch</p>
        <h2>Let’s build something meaningful together.</h2>
        <p>
          I’m open to freelance opportunities, full-time roles, and collaborations on
          modern web products.
        </p>

        <div className="contact-actions">
          <a href="mailto:thisisrizve@gmail.com" target="_blank" rel="noreferrer" className="btn btn-primary">
            Email
          </a>
          <a href="tel:+4794729244" target="_blank" rel="noreferrer" className="btn btn-secondary">
            Call +47 947 29 244
          </a>
          <a href="https://github.com/RizveOve" target="_blank" rel="noreferrer" className="btn btn-secondary">
            GitHub
          </a>
          <a href="https://linkedin.com/in/mrizvehasan" target="_blank" rel="noreferrer" className="btn btn-secondary">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
