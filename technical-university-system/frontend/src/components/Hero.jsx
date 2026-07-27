import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-workshop.jpg'

const Hero = () => (
  <section className="hero-block">
    <div className="hero-copy">
      <span className="eyebrow">Welcome to Palazzolo Technical & Vocational Training Institute</span>
      <h1>Practical programs that prepare you for real-world technology careers</h1>
      <p className="hero-text">
        Learn with modern labs, project-based pathways, and dedicated student support.
      </p>
      <div className="hero-actions">
        <Link to="/courses" className="site-button">
          Explore programs
        </Link>
        <a href="/prospectus.pdf" className="site-button secondary" target="_blank" rel="noreferrer">
         Get Brochure
        </a>
      </div>
    </div>
    <div className="hero-card">
      <img src={heroImage} alt="Students in a technical workshop" className="hero-image" />
      <div className="hero-card-content">
        <span className="hero-card-label">Admissions open</span>
        <h2>Join the next cohort of technology leaders</h2>
        <p>Start with project-based learning, expert mentorship, and career-ready outcomes.</p>
      </div>
    </div>
  </section>
)

export default Hero
