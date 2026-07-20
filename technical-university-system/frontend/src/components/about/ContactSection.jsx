import { Link } from 'react-router-dom'

export default function ContactSection() {
  return (
    <section className="section-block about-section about-cta-section">
      <div className="about-cta-card">
        <h2>Come and see the campus for yourself.</h2>
        <p>
          Prospective students and families are welcome to visit any weekday. Our admissions team will host you.
        </p>
        <div className="about-cta-actions">
          <Link to="/contact" className="about-cta-button">Contact Admissions</Link>
          <Link to="/courses" className="about-cta-secondary">View Programs</Link>
        </div>
      </div>
    </section>
  )
}
