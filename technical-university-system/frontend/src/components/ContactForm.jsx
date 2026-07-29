import { useState } from 'react'
import { submitContactMessage } from '../services/api.js'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('Sending...')
    setError('')

    try {
      await submitContactMessage(formData)
      setStatus('Thank you! Your message has been received.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (err) {
      setError(err.message || 'Sorry, something went wrong.')
      setStatus('')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-group">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
      </div>

      <div className="field-group">
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="field-group">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
          required
        />
      </div>

      <div className="field-group">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
      </div>

      <div className="field-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you would like to know"
          required
        />
      </div>

      <button type="submit" className="site-button">
        Send message
      </button>

      {status && <p className="form-status">{status}</p>}
      {error && <p className="form-error">{error}</p>}
    </form>
  )
}

export default ContactForm