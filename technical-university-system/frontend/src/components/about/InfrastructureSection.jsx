import { useEffect, useState } from 'react'
import workshopImage from '../../assets/hero-workshop.jpg'
import kitchenImage from '../../assets/course-hospitality.jpg'
import labsImage from '../../assets/course-ict.jpg'
import salonImage from '../../assets/course-cosmetology.jpg'

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
  {
    title: 'Salon & Barber Studio',
    description: 'A practical beauty and grooming studio where cosmetology students build salon, barbering and client-care skills.',
    image: salonImage,
    alt: 'Students practicing salon and barber work in a beauty studio',
  },
]

export default function InfrastructureSection() {
  const [visibleSlides, setVisibleSlides] = useState(3)
  const [currentIndex, setCurrentIndex] = useState(3)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const cloneCount = visibleSlides
  const infiniteInfrastructure = [
    ...infrastructure.slice(-cloneCount),
    ...infrastructure,
    ...infrastructure.slice(0, cloneCount),
  ]

  const slideWidth = 320 + 24

  const handlePrev = () => setCurrentIndex((prev) => prev - 1)
  const handleNext = () => setCurrentIndex((prev) => prev + 1)

  const handleTransitionEnd = () => {
    const lastRealIndex = infrastructure.length + cloneCount

    if (currentIndex <= 0) {
      setIsTransitioning(false)
      setCurrentIndex(infrastructure.length)
    } else if (currentIndex >= lastRealIndex) {
      setIsTransitioning(false)
      setCurrentIndex(cloneCount)
    }
  }

  useEffect(() => {
    const updateVisibleSlides = () => {
      const nextVisibleSlides = window.innerWidth < 768 ? 1 : 3
      setVisibleSlides((currentVisible) => {
        if (currentVisible !== nextVisibleSlides) {
          setCurrentIndex(nextVisibleSlides)
          setIsTransitioning(false)
          return nextVisibleSlides
        }
        return currentVisible
      })
    }

    updateVisibleSlides()
    window.addEventListener('resize', updateVisibleSlides)
    return () => window.removeEventListener('resize', updateVisibleSlides)
  }, [])

  useEffect(() => {
    if (!isTransitioning) {
      const frame = window.requestAnimationFrame(() => setIsTransitioning(true))
      return () => window.cancelAnimationFrame(frame)
    }
    return undefined
  }, [isTransitioning])

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
          onClick={handlePrev}
          aria-label="Previous infrastructure"
        >
          ‹
        </button>
        <div className="about-infrastructure-track-container">
          <div
            className="about-infrastructure-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * slideWidth}px)`,
              transition: isTransitioning ? 'transform 400ms ease' : 'none',
            }}
          >
            {infiniteInfrastructure.map((item, index) => (
              <article key={`${item.title}-${index}`} className="about-infrastructure-slide">
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
          onClick={handleNext}
          aria-label="Next infrastructure"
        >
          ›
        </button>
      </div>
    </section>
  )
}
