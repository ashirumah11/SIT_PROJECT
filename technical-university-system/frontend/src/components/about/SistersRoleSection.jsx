import heroWorkshop from '../../assets/hero-workshop.jpg'

export default function SistersRoleSection() {
  return (
    <section className="section-block about-section about-sisters-section">
      <div className="about-section-header">
        <span className="about-eyebrow">The Sisters of St. Martha</span>
        <h2>The Sisters remain at the centre of daily life on campus.</h2>
      </div>
      <div className="about-two-column about-sisters-grid">
        <div className="about-sisters-copy">
          <p>
            The congregation founded, owns and stewards the institute. Beyond governance, individual Sisters serve as department heads, chaplains, hostel matrons and instructors — living alongside students and shaping the moral and academic culture of the campus.
          </p>
          <div className="about-sisters-list">
            <div>
              <h4>Formation &amp; Pastoral Care</h4>
              <p>Daily chapel, values formation, and one-to-one mentorship for every student.</p>
            </div>
            <div>
              <h4>Academic Leadership</h4>
              <p>Sisters lead four of twelve departments and chair the Board of Governors.</p>
            </div>
            <div>
              <h4>Community Outreach</h4>
              <p>Scholarships for vulnerable youth funded through the congregation's ministries.</p>
            </div>
            <div>
              <h4>Stewardship</h4>
              <p>Long-term custodianship of the campus, its heritage, and its future.</p>
            </div>
          </div>
        </div>
        <div className="about-section-media">
          <img src={heroWorkshop} alt="Photo of the Sisters" />
        </div>
      </div>
    </section>
  )
}
