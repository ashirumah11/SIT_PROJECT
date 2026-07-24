import { useRef } from 'react'
import workshopImage from '../../assets/hero-workshop.jpg'
import kitchenImage from '../../assets/course-hospitality.jpg'
import labsImage from '../../assets/course-ict.jpg'

const infrastructure = [
  {
    title: 'Workshops',
    description: 'Hands-on technical training spaces for electrical, mechanical, tailoring and construction skills.',
    image: workshopImage,
    alt: 'Students working in a technical workshop',
  },
  {
    title: 'Training Kitchen',
    description: 'A modern culinary lab where learners practice hospitality, baking and food service skills.',
    image: kitchenImage,
    alt: 'Learners cooking in the kitchen training facility',
  },
  {
    title: 'Computer Labs',
    description: 'Well-equipped ICT labs with internet access for digital literacy and technical course work.',
    image: labsImage,
    alt: 'Students using computers in a lab environment',
  },
]

export default function InfrastructureSection() {
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (!carouselRef.current) return
    carouselRef.current.scrollBy({ left: direction * 320, behavior: 'smooth' })
  }

  return (
    <section className="section-block about-section about-infrastructure-section">
      <div className="about-section-header">
        <span className="about-eyebrow">Infrastructure</span>
        <h2>Hands-on learning spaces for workshops, hospitality and ICT.</h2>
      </div>
      <div className="about-infrastructure-carousel-wrapper">
        <button
          type="button"
          className="about-infrastructure-control prev"
          onClick={() => scroll(-1)}
          aria-label="Previous infrastructure"
        >
          ‹
        </button>
        <div ref={carouselRef} className="about-infrastructure-track-container">
          <div className="about-infrastructure-track">
            {infrastructure.map((item) => (
              <article key={item.title} className="about-infrastructure-slide">
                <div className="about-infrastructure-card">
                  <img src={item.image} alt={item.alt} />
                  <div className="about-infrastructure-card-body">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="about-infrastructure-control next"
          onClick={() => scroll(1)}
          aria-label="Next infrastructure"
        >
          ›
        </button>
      </div>
    </section>
  )
}
