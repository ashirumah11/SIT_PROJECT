import ContactForm from '../components/ContactForm.jsx'

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.25 6.8 5.17 6.8-5.17H5.2Zm13.05 2.11-6.2 4.72a1 1 0 0 1-1.3 0L5.75 8.61v8.64c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75V8.61Z" fill="currentColor"/>
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M7.04 2.5A2.5 2.5 0 0 1 9.5 4v1.54a2.5 2.5 0 0 1-.6 1.63l-.86 1a2.41 2.41 0 0 0-.12 3.04l1.58 2.13a2.4 2.4 0 0 0 3.04.12l1.04-.9a2.5 2.5 0 0 1 1.63-.6h1.54a2.5 2.5 0 0 1 2.5 2.5v.5c0 2.73-2.2 4.93-4.93 4.93-5.86 0-10.61-4.75-10.61-10.61 0-2.73 2.2-4.93 4.93-4.93h.5Zm.46 2.5h-.5c-1.24 0-2.24 1-2.24 2.24 0 4.65 3.77 8.42 8.42 8.42 1.24 0 2.24-1 2.24-2.24v-.5H16.2a.75.75 0 0 0-.75.75l-.03.4-.38.33a.9.9 0 0 1-1.13.06l-1.95-1.45a.9.9 0 0 1-.06-1.13l.33-.38.4-.03a.75.75 0 0 0 .75-.75V7.87c0-.41-.34-.75-.75-.75H7.5a.75.75 0 0 0-.75.75v.46c0 .41.34.75.75.75h.5c.41 0 .75.34.75.75v.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75v-.5A2.75 2.75 0 0 1 7.5 7.5h.5a2.75 2.75 0 0 1 2.75 2.75v.5a2.75 2.75 0 0 1-2.75 2.75H7.5a2.75 2.75 0 0 1-2.75-2.75v-.5A2.75 2.75 0 0 1 7.5 5Z" fill="currentColor"/>
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2.75a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5Zm0 1.5a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5Zm.75 3.13v4.31l3.08 1.77a.75.75 0 1 1-.76 1.3l-3.57-2.06a.75.75 0 0 1-.38-.65V7.38a.75.75 0 0 1 1.5 0Z" fill="currentColor"/>
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2.75a7.25 7.25 0 0 1 7.25 7.25c0 5.27-6.11 10.76-6.58 11.18a.75.75 0 0 1-.96 0C11.86 20.76 5.75 15.27 5.75 10A7.25 7.25 0 0 1 12 2.75Zm0 1.5A5.75 5.75 0 0 0 6.25 10c0 3.38 3.62 7.42 5.75 9.02 2.13-1.6 5.75-5.64 5.75-9.02A5.75 5.75 0 0 0 12 4.25Zm0 2.5A3.25 3.25 0 1 1 12 13.25 3.25 3.25 0 0 1 12 6.75Z" fill="currentColor"/>
  </svg>
)

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 20.25 3.73 12.7a5.7 5.7 0 0 1-.23-8.2 5.72 5.72 0 0 1 8.5.5 5.72 5.72 0 0 1 8.5-.5 5.7 5.7 0 0 1-.23 8.2L12 20.25Z" fill="currentColor" />
  </svg>
)

const Contact = () => (
  <section className="contact-page">
    {/* Info Cards Section */}
    <div className="contact-info-section">
      <div className="info-card contact-info-card">
        <div className="info-icon"><EmailIcon /></div>
        <h3>Email Address</h3>
        <p>info@palazzolotechnical.co.ke</p>
      </div>
      <div className="info-card contact-info-card">
        <div className="info-icon"><PhoneIcon /></div>
        <h3>Phone</h3>
        <p>+254 111380756</p>
      </div>
      <div className="info-card contact-info-card">
        <div className="info-icon"><ClockIcon /></div>
        <h3>Open Hours</h3>
        <p>Mon - Fri<br />8AM - 5PM</p>
      </div>
      <div className="info-card contact-info-card">
        <div className="info-icon"><LocationIcon /></div>
        <h3>Location</h3>
        <p>Palazzolo Centre, Gachie, Kiambu</p>
      </div>
    </div>

    {/* Contact and donations section */}
    <div className="contact-main-section">
      <div className="contact-details-card detail-card">
        <div className="contact-form-wrapper">
          <h2>Keep In Touch</h2>
          <p>Get in touch with our admissions team. We're here to help you with any questions about our programs.</p>
          <ContactForm />
        </div>
        <div className="contact-map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9248231920367!2d36.7661557!3d-1.2125745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f23d77d04a0a5%3A0xe1c07109c5b30ad4!2sPalazzolo%20Technical%20and%20Vocational%20Training%20College!5e0!3m2!1sen!2ske!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    <section className="donation-section" aria-labelledby="donation-title">
        <div className="donation-heading">
          <span className="donation-kicker"><HeartIcon /> Give opportunity</span>
          <h2 id="donation-title">Support Our Mission</h2>
          <p>Your support helps us provide quality technical and vocational education, equip students, and build a better future.</p>
        </div>

        <div className="donation-options">
          <article className="donation-card">
            <div className="donation-card-icon donation-brand-mark donation-brand-mpesa" aria-label="M-PESA">
              <span>M-PESA</span>
            </div>
            <h3>M-PESA</h3>
            <p>PayBill Number</p>
            <strong>880100</strong>
            <p>Account Name</p>
            <strong className="donation-detail">PAYPALAZZO</strong>
            <a className="donation-button" href="tel:*334%23">Donate via M-PESA</a>
          </article>

          <article className="donation-card donation-card-bank">
            <div className="donation-card-icon donation-brand-mark donation-brand-ncba" aria-label="NCBA">
              <span>NCBA</span>
            </div>
            <h3>Bank Transfer</h3>
            <p>Account Name</p>
            <strong className="donation-detail">Palazzolo Technical &amp; Vocational Institute</strong>
            <p>Bank: NCBA<br />Account Number: <strong>6566230047</strong></p>
            <a className="donation-button" href="mailto:info@palazzolotechnical.co.ke?subject=Bank%20donation">Donate via Bank</a>
          </article>

          <article className="donation-card donation-card-kind">
            <div className="donation-card-icon"><HeartIcon /></div>
            <h3>Other Support</h3>
            <p>You can also support us through in-kind donations or partnerships.</p>
            <a className="donation-button" href="mailto:info@palazzolotechnical.co.ke?subject=Support%20our%20mission">Get in Touch</a>
          </article>
        </div>

        <p className="donation-note">"Giving is not just about making a donation, it's about making a difference."</p>
      </section>
    </div>
  </section>
)

export default Contact
