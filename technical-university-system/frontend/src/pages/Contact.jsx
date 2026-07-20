import ContactForm from '../components/ContactForm.jsx'

const Contact = () => (
  <section className="section-block">
    <div className="section-heading">
      <span className="eyebrow">Contact</span>
      <h2>Get in touch with admissions</h2>
      <p>
        Ask questions, request more information, or book a call with our enrollment team.
      </p>
    </div>
    <div className="detail-grid">
      <article className="detail-summary">
        <h3>Admissions support</h3>
        <p>
          Our admissions staff can help you choose the right program, answer entry requirements, and guide you through the application steps.
        </p>
        <p><strong>Email:</strong> admissions@technicaluniversity.edu</p>
        <p><strong>Phone:</strong> +256 414 555 0192</p>
        <p><strong>Address:</strong> Plot 124, Saint Martha Road, Entebbe, Uganda</p>
      </article>
      <article className="detail-card">
        <ContactForm />
      </article>
    </div>
  </section>
)

export default Contact
