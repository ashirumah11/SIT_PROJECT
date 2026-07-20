const departments = [
  { name: 'Hospitality & Catering', head: 'Sr. Margaret Nakato' },
  { name: 'Electrical Technology', head: 'Eng. Peter Okello' },
  { name: 'Fashion & Textiles', head: 'Ms. Sarah Namuli' },
  { name: 'Carpentry & Joinery', head: 'Mr. Joseph Ssekandi' },
  { name: 'Food Processing', head: 'Sr. Christine Auma' },
  { name: 'ICT & Digital Skills', head: 'Mr. Daniel Wamala' },
]

export default function DepartmentsSection() {
  return (
    <section className="section-block about-section about-departments-section">
      <div className="about-section-header">
        <span className="about-eyebrow">Academic Leadership</span>
        <h2>Departments & their Heads</h2>
      </div>
      <div className="about-grid about-department-grid">
        {departments.map((dept) => (
          <article key={dept.name} className="about-card about-department-card">
            <div className="about-department-avatar">{dept.name.charAt(0)}</div>
            <div>
              <h4>{dept.name}</h4>
              <span>Head of Department</span>
              <p>{dept.head}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
