import heroWorkshop from '../../assets/hero-workshop.jpg'

export default function HistorySection() {
  return (
    <section className="section-block about-history-section">
      <div className="about-section-header">
        <span className="about-eyebrow">Our History</span>
        <h2>From four students in 1974 to a national institution.</h2>
      </div>
      <div className="about-section-content">
        <p>
          Founded in 1974 by a small community of the Sisters of St. Martha, the institute began in two borrowed classrooms on the shores of Lake Victoria — training four young women in tailoring and household skills.
          Fifty years later, that quiet mission has grown into a fully accredited technical & vocational institute serving over 1,200 students across twelve departments.
        </p>
        <p>
          Through decades of steady work, the Sisters have shepherded generations of technicians, artisans and hospitality professionals into dignified employment across East Africa and the Gulf. Today the campus spans thirty acres, but the founding conviction is unchanged: skilled hands and compassionate hearts.
        </p>
      </div>
      <div className="about-section-media">
        <img src={heroWorkshop} alt="Historical workshop" />
      </div>
    </section>
  )
}
