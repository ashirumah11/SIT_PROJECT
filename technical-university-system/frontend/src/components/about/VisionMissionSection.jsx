export default function VisionMissionSection() {
  const coreValues = [
    {
      title: 'Respect',
      icon: '🤝',
      description: 'Treating every person with consideration and fairness.'
    },
    {
      title: 'Integrity',
      icon: '🛡️',
      description: 'Acting with honesty, accountability, and consistency.'
    },
    {
      title: 'Dignity',
      icon: '⚖️',
      description: 'Affirming the worth and potential of every person.'
    },
    {
      title: 'Excellence',
      icon: '🏆',
      description: 'Pursuing quality and continuous improvement in all we do.'
    },
    {
      title: 'Collaboration',
      icon: '🤲',
      description: 'Working together to support learners and strengthen community.'
    }
  ];

  return (
    <section className="section-block about-section about-vision-mission-section">
      <div className="vision-mission-grid">
        <article className="vision-mission-item">
          <span className="vision-mission-kicker">Our Vision</span>
          <div className="vision-mission-rule" aria-hidden="true" />
          <p>
            To be a center of excellence transforming youth into skilled, responsible and values-driven professionals.
          </p>
        </article>
        <article className="vision-mission-item">
          <span className="vision-mission-kicker">Our Mission</span>
          <div className="vision-mission-rule" aria-hidden="true" />
          <p>
            To provide quality, inclusive and values-based technical and vocational training that equips youth with relevant skills and promotes holistic transformation.
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
