import { useEffect, useState, useRef } from 'react'
import slide1 from '../assets/hero-carousel1.jpg'
import slide2 from '../assets/hero-carousel2.jpg'
import slide3 from '../assets/hero-carousel3.jpg'

const defaultSlides = [
  {
    id: 'slide-1',
    image: slide1,
    title: 'Practical programs that prepare you for real-world technology careers',
    subtitle: 'Learn with modern labs, project-based pathways, and dedicated student support.',
  },
  {
    id: 'slide-2',
    image: slide2,
    title: 'Hands-on workshops & skilled instructors',
    subtitle: 'Apply your learning in project work and real equipment.',
  },
  {
    id: 'slide-3',
    image: slide3,
    title: 'Industry-aligned courses & placement support',
    subtitle: 'Career coaching and internships to jumpstart your career.',
  },
]

const HeroCarousel = ({
  slides: propSlides,
  showControls = true,
  showOverlay = true,
  showIndicators = true,
  autoplayInterval = 5500,
}) => {
  const slides = (propSlides && propSlides.length ? propSlides : defaultSlides).map((slide) => ({
    id: slide.id ?? slide.slug ?? `${slide.title ?? 'slide'}-${Math.random()}`,
    image: slide.image_url || slide.image || slide.src,
    title: slide.title || 'Welcome to PTVTI',
    subtitle: slide.subtitle || slide.description || 'Discover student-focused programs and practical learning.',
    buttonText: slide.button_text || slide.buttonText,
    buttonLink: slide.button_link || slide.buttonLink || '/courses',
  }))
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  const startAutoplay = () => {
    stopAutoplay()
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, autoplayInterval)
  }

  const stopAutoplay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const goPrev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }

  const goNext = () => {
    setIndex((i) => (i + 1) % slides.length)
  }

  return (
    <section className="hero-carousel" aria-roledescription="carousel">
      {slides.map((s, i) => (
        <div
          key={s.id || s.src || i}
          className={`hero-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.image ?? s.src})` }}
          aria-hidden={i === index ? 'false' : 'true'}
        >
          <div className="hero-gradient" />
        </div>
      ))}

      {showOverlay && (
        <div className="hero-overlay">
          <div className="hero-inner">
            <h1 className="hero-title">{slides[index]?.title}</h1>
            <p className="hero-sub">{slides[index]?.subtitle}</p>
            <div className="hero-cta">
              {slides[index]?.buttonText && slides[index]?.buttonLink ? (
                <a className="site-button" href={slides[index].buttonLink} target="_blank" rel="noreferrer">
                  {slides[index].buttonText}
                </a>
              ) : (
                <>
                  <a className="site-button" href="/courses">Explore programs</a>
                  <a className="site-button secondary" href="/prospectus.pdf" target="_blank" rel="noreferrer">Get Brochure</a>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {showControls && (
        <div className="hero-controls">
          <button type="button" className="control prev" onClick={goPrev} aria-label="Previous slide">‹</button>
          <button type="button" className="control next" onClick={goNext} aria-label="Next slide">›</button>
        </div>
      )}

      {showIndicators && (
        <div className="hero-indicators" role="tablist">
          {slides.map((s, i) => (
            <button
              key={s.id || i}
              className={`indicator ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default HeroCarousel
