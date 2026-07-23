export default function VisionMissionSection() {
  const coreValues = [
    {
      title: 'Transformation',
      icon: '🔄',
      description: 'Changing lives through quality education'
    },
    {
      title: 'Empowerment',
      icon: '💪',
      description: 'Equipping learners with practical skills'
    },
    {
      title: 'Innovation',
      icon: '⚡',
      description: 'Driving industry-relevant solutions'
    },
    {
      title: 'Integrity',
      icon: '✨',
      description: 'Building trust and excellence'
    },
    {
      title: 'Entrepreneurship',
      icon: '🚀',
      description: 'Creating opportunities for growth'
    }
  ];

  return (
    <section className="section-block about-section about-vision-mission-section">
      <div className="vision-mission-grid">
        <article className="vision-mission-item">
          <span className="vision-mission-kicker">Our Vision</span>
          <div className="vision-mission-rule" aria-hidden="true" />
          <p>
            To transform youth through training on technical, vocational and entrepreneurial skills, empower and promote them to serve the world.
          </p>
        </article>
        <article className="vision-mission-item">
          <span className="vision-mission-kicker">Our Mission</span>
          <div className="vision-mission-rule" aria-hidden="true" />
          <p>
            To be the leading Technical and Vocational Center in Kenya that emphasizes on total transformation and empowering for the world.
          </p>
        </article>
      </div>

      {/* Core Values Section */}
      <div className="core-values-container">
        <h3 className="core-values-title">Our Core Values</h3>
        <div className="core-values-grid">
          {coreValues.map((value, index) => (
            <div key={index} className="core-value-card">
              <div className="core-value-icon">{value.icon}</div>
              <h4 className="core-value-name">{value.title}</h4>
              <p className="core-value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
