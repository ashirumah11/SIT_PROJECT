const board = [
  { name: 'Sr. Agnes Nabirye', role: 'Chairperson, Board of Governors' },
  { name: 'Hon. Justice R. Kigongo', role: 'Vice Chairperson' },
  { name: 'Dr. Mary Nansubuga', role: 'Academic Affairs' },
  { name: 'Mr. Charles Mubiru', role: 'Industry Representative' },
  { name: 'Sr. Beatrice Nalwoga', role: 'Congregational Delegate' },
  { name: 'Mrs. Florence Kabuye', role: 'Finance & Audit' },
]

export default function ManagementSection() {
  return (
    <section className="section-block about-section about-management-section">
      <div className="about-section-header">
        <span className="about-eyebrow">Governance</span>
        <h2>Management & Board of Governors</h2>
      </div>
      <p className="about-lead-copy">
        Our Board of Governors brings together religious leadership, academics, industry veterans and legal counsel — ensuring the institute is stewarded with rigour, transparency and faithfulness to its founding charism.
      </p>
      <div className="about-grid about-board-grid">
        {board.map((member) => (
          <article key={member.name} className="about-card about-board-card">
            <div className="about-card-body">
              <h4>{member.name}</h4>
              <span>{member.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
