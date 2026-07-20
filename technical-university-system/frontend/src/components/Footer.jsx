import { Link } from 'react-router-dom'
import logo from '../assets/ptvti-logo.jpg'

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-copy">
      <div>
        <img src={logo} alt="Palazzolo Institute logo" className="footer-logo" />
        <p className="footer-note">Career-ready training with practical projects and student support.</p>
      </div>
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/courses">Academics</Link>
        <Link to="/student-life">Student Life</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </footer>
)

export default Footer
