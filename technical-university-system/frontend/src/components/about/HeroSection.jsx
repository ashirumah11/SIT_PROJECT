import heroWorkshop from '../../assets/hero-workshop.jpg'

export default function HeroSection() {
  return (
    <section className="section-block about-hero-section">
      <div className="about-hero-copy">
        <span className="about-eyebrow">About the Institute</span>
        <h1>A half-century of skilled formation, quietly at work.</h1>
        <p>
          St. Martha Institute is a Catholic technical & vocational institution founded and led by the Sisters of St. Martha, dedicated to preparing skilled, compassionate professionals for Uganda and beyond.
        </p>
      </div>
      <div className="about-hero-image">
        <img src={heroWorkshop} alt="Historical workshop" />
      </div>
    </section>
  )
}
