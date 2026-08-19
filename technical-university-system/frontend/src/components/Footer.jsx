import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks.jsx'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">About Us.</h3>
          <p className="footer-description">
           Welcome to Palazzolo Technical 
           and Vocational Training Institute (PTVTI),
           a leading institution dedicated to 
           empowering Africa's next generation 
           of technical and vocational innovators 
           through our diverse range of
           certificate and diploma programs.
             </p>
          
        </div>

        {/* Quick Menus Section */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Menus</h3>
          <ul className="footer-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Departments</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Twitter Section */}
        <div className="footer-section">
          <h3 className="footer-title">Twitter</h3>
          <p className="twitter-handle">Tweets by palazzolotech</p>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          
          <div className="contact-items">
          
            <div className="contact-item">
              <div className="contact-icon phone-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <span>+254 111380756</span>
            </div>

            <div className="contact-item">
              <div className="contact-icon mail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <span>info@palazzolotechnical.co.ke</span>
            </div>

            <div className="contact-item">
              <div className="contact-icon location-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span>Palazzolo Centre, Gachie, Kiambu</span>
            </div>
            <SocialLinks 
            className="social-icons"
            iconClass="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
