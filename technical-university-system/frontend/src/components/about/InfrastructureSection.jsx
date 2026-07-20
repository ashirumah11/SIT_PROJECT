const infrastructure = [
  { title: 'Technical Workshops', description: 'Twelve fully-equipped workshops for electrical, mechanical, carpentry and tailoring trades.' },
  { title: 'Culinary & Hospitality Wing', description: 'Industrial kitchens, a training restaurant and a bakery serving the Entebbe community.' },
  { title: 'Student Residences', description: 'On-campus hostels for 800 students with study halls, chapel and dining facilities.' },
  { title: 'Production House', description: 'A working furniture and textile production facility that trains and generates institutional revenue.' },
  { title: 'Library & Digital Lab', description: '20,000-volume library and a 60-station computer laboratory with fibre internet.' },
  { title: 'Sports & Chapel Grounds', description: 'Playing fields, a multi-purpose hall and the campus chapel at the heart of daily life.' },
]

export default function InfrastructureSection() {
  return (
    <section className="section-block about-section about-infrastructure-section">
      <div className="about-section-header">
        <span className="about-eyebrow">Infrastructure</span>
        <h2>A campus built for practical, hands-on learning.</h2>
      </div>
      <div className="about-grid about-infrastructure-grid">
        {infrastructure.map((item) => (
          <article key={item.title} className="about-card about-info-card">
            <div className="about-card-body">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
