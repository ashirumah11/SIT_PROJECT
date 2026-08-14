export default function VisionMissionSection() {
  const coreValues = [
    {
      title: 'Integrity',
      icon: '🛡️',
      description: 'Acting honestly and responsibly in every commitment'
    },
    {
      title: 'Respect',
      icon: '🤝',
      description: 'Honoring the dignity and worth of every person'
    },
    {
      title: 'Love',
      icon: '❤️',
      description: 'Caring for others with compassion and kindness'
    },
    {
      title: 'Understanding',
      icon: '🧠',
      description: 'Listening with empathy and seeking common ground'
    },
    {
      title: 'Sharing',
      icon: '🤲',
      description: 'Giving generously and building community together'
    },
    {
      title: 'Responsibility',
      icon: '✅',
      description: 'Taking ownership with commitment and accountability'
    }
  ];

  return (
    <section className="section-block about-section about-vision-mission-section">
      <div className="vision-mission-grid">
        <article className="vision-mission-item">
          <span className="vision-mission-kicker">Our Vision</span>
          <div className="vision-mission-rule" aria-hidden="true" />
          <p>
            Transformation in Youth life contributing
            to the economic and social development of
            the society, through skill based education 
            that lead to students to employment and meets
            the demand of labor market. 
          </p>
        </article>
        <article className="vision-mission-item">
          <span className="vision-mission-kicker">Our Mission</span>
          <div className="vision-mission-rule" aria-hidden="true" />
          <p>
            To provide quality technical and vocational
            training to all students irrespective of their
            age, gender, race, tribe, orientation, religion
            and social status.
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
