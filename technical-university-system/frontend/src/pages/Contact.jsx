import ContactForm from '../components/ContactForm.jsx'

const Contact = () => (
  <section className="contact-page">
    {/* Info Cards Section */}
    <div className="contact-info-section">
      <div className="info-card contact-info-card">
        <div className="info-icon">✉</div>
        <h3>Email Address</h3>
        <p>info@palazollotechnical.co.ke</p>
      </div>
      <div className="info-card contact-info-card">
        <div className="info-icon">📞</div>
        <h3>Phone</h3>
        <p>0111380756</p>
      </div>
      <div className="info-card contact-info-card">
        <div className="info-icon">🕐</div>
        <h3>Open Hours</h3>
        <p>Mon - Fri<br />8AM - 5PM</p>
      </div>
      <div className="info-card contact-info-card">
        <div className="info-icon">📍</div>
        <h3>Location</h3>
        <p>Palazzolo Centre, Gachie, Kiambu</p>
      </div>
    </div>

    {/* Form and Map Section */}
    <div className="contact-main-section">
      <div className="contact-form-wrapper detail-card">
        <h2>Keep In Touch</h2>
        <p>Get in touch with our admissions team. We're here to help you with any questions about our programs.</p>
        <ContactForm />
      </div>
      <div className="contact-map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3689!2d36.7696!3d-1.2240!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sPalazzolo+Technical+and+Vocational+Training+College!2s0x182f23d77d04a0a5:0xe1c07109c5b30ad4!5e0!3m2!1sen!2s!4v1690000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
)

export default Contact
