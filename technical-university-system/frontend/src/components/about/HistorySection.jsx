import heroWorkshop from '../../assets/hero-workshop.jpg'

export default function HistorySection() {
  return (
    <section className="about-story-section about-history-section">
      {/* The image below is also used as the low-opacity watermark at the bottom of this section. */}
      <div className="about-story-watermark" aria-hidden="true">
        <img src={heroWorkshop} alt="" />
      </div>

      <div className="about-story-content about-story-content-reversed">
        <div className="about-story-image">
          <img src={heroWorkshop} alt="Historical workshop" />
        </div>

        <div className="about-story-copy">
          <span className="about-eyebrow">Our History</span>
          <h1>From four students in 1974 to a national institution.</h1>
          <p>
            Founded in 1974 by a small community of the Sisters of St. Martha, the institute began in two borrowed classrooms on the shores of Lake Victoria — training four young women in tailoring and household skills.
            Fifty years later, that quiet mission has grown into a fully accredited technical & vocational institute serving over 1,200 students across twelve departments.
          </p>
          <p>
            Through decades of steady work, the Sisters have shepherded generations of technicians, artisans and hospitality professionals into dignified employment across East Africa and the Gulf. Today the campus spans thirty acres, but the founding conviction is unchanged: skilled hands and compassionate hearts.
          </p>
        </div>
      </div>
    </section>
  )
}
