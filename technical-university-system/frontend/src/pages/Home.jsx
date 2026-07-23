import { useState, useEffect, useRef } from 'react'
import HeroCarousel from '../components/HeroCarousel.jsx'
import CourseCard from '../components/CourseCard.jsx'
import engineeringImage from '../assets/course-engineering.jpg'
import fashionImage from '../assets/course-fashion.jpg'
import hospitalityImage from '../assets/course-hospitality.jpg'
import ictImage from '../assets/course-ict.jpg'
import cosmetologyImage from '../assets/course-cosmetology.jpg'
import heroWorkshopImage from '../assets/hero-workshop.jpg'
import nitaLogo from '../assets/nita-logo.png'
import unescoLogo from '../assets/unesco-logo.png'
import tvetaLogo from '../assets/tveta-logo.png'

const highlights = [
  {
    id: 'projects',
    title: 'Project-based learning',
    description: 'Build portfolio-ready solutions with real technical requirements and product feedback.',
  },
  {
    id: 'mentorship',
    title: 'Industry mentorship',
    description: 'Learn from instructors who have shipped software at real companies and startups.',
  },
  {
    id: 'career-support',
    title: 'Career support',
    description: 'Get coaching, interview prep, and student success guidance from day one.',
  },
]

const courses = [
  {
    id: 'software-engineering',
    title: 'Engineering Department',
    description: 'Develop practical engineering trade skills and building support.',
    duration: '12 months',
    level: 'Professional',
    department: 'Engineering',
    badge: 'Top Rated',
    image: engineeringImage,
  },
  {
    id: 'cosmetology-fundamentals',
    title: 'Cosmetology Department',
    description: 'Learn salon skills, beauty therapies, and professional client care.',
    duration: '9 months',
    level: 'Specialized',
    department: 'Cosmetology',
    image: cosmetologyImage,
  },
  {
    id: 'fashion-design',
    title: 'Fashion & Design',
    description: 'Create wearable style systems and polished design concepts.',
    duration: '10 months',
    level: 'Technical',
    department: 'Fashion & Design',
    image: fashionImage,
  },
  {
    id: 'hospitality-management',
    title: 'Hospitality Department',
    description: 'Prepare for guest services, events, and modern hospitality operations.',
    duration: '11 months',
    level: 'Professional',
    department: 'Hospitality',
    image: hospitalityImage,
  },
  {
    id: 'ict-systems',
    title: 'ICT Department',
    description: 'Master information and communications technology for modern workplaces.',
    duration: '12 months',
    level: 'Technical',
    department: 'ICT',
    image: ictImage,
  },
]

const testimonials = [
  {
    id: 'student-1',
    image: heroWorkshopImage,
    quote: 'PTVTI is awesome. I feel like I have a new lease on life because of their encouragement and support.',
    name: 'Fr. Michael',
    role: 'Staff',
  },
  {
    id: 'student-2',
    image: cosmetologyImage,
    quote: 'The community is welcoming and the learning experience is truly practical.',
    name: 'Jane Mwangi',
    role: 'Graduate',
  },
  {
    id: 'student-3',
    image: hospitalityImage,
    quote: 'I gained new skills and confidence from the friendly instructors and hands-on classrooms.',
    name: 'Esther Njeri',
    role: 'Current Student',
  },
]

const newsItems = [
  {
    id: 'news-1',
    date: 'Mar',
    title: 'This is the biggest Color festival event in Kihara at ACK ST. PHILIP Grounds.',
    description: 'This is the biggest Color festival event in Kihara. Don’t miss out on our episodes. On the 11th of March.',
  },
  {
    id: 'news-2',
    date: 'May',
    title: 'New organization are continually added and seal there …',
    description: 'Students in computer lab, maintaining at least six feet distance from each other while writing some programs.',
  },
  {
    id: 'news-3',
    date: 'May',
    title: 'Students in computer lab, maintaining at least six feet distance from each other while writing some programs .',
    description: 'Students in computer lab, maintaining at least six feet distance from each other while writing some programs.',
  },
  {
    id: 'news-4',
    date: 'Jun',
    title: 'New youth scholarship drives technical learning at Palazzolo.',
    description: 'A fresh opportunity for learners to join practical training and receive career support.',
  },
  {
    id: 'news-5',
    date: 'Jul',
    title: 'Campus life expands with fresh labs and student-led clubs.',
    description: 'Our community grows with new spaces for project work, workshops, and student events.',
  },
]

const accredentials = [
  {
    id: 'nita',
    label: 'NITA',
    href: 'https://www.nita.go.ke',
    logo: nitaLogo,
  },
  {
    id: 'unesco',
    label: 'UNESCO',
    href: 'https://www.unesco.org',
    logo: unescoLogo,
  },
  {
    id: 'tveta',
    label: 'TVETA Kenya',
    href: 'https://tveta.go.ke',
    logo: tvetaLogo,
  },
]

const Stats = () => {
  const stats = [
    { value: '120', label: 'Graduated Students' },
    { value: '50', label: 'Awards Won' },
    { value: '587', label: 'Total Students' },
    { value: '86%', label: 'Graduation Rate' },
  ]

  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section-stats" ref={ref}>
      <div className="section-stats-inner">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} className={`stat-item ${visible ? 'in' : ''}`} style={{ '--i': i }}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-rule" />
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Testimonials = () => {
  const [active, setActive] = useState(0)

  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length)

  return (
    <section className="section-block section-testimonials">
      <div className="section-heading">
        <span className="eyebrow">What our students say</span>
        <h2>Happy with community & students</h2>
        <p>Read real experiences from the Palazzolo learning community.</p>
      </div>

      <div className="testimonials-wrapper">
        <button type="button" className="testimonial-control prev" onClick={handlePrev} aria-label="Previous testimonial">‹</button>
        <div className="testimonial-card">
          <div className="testimonial-image" style={{ backgroundImage: `url(${testimonials[active].image})` }} />
          <div className="testimonial-copy">
            <div className="testimonial-quote">“{testimonials[active].quote}”</div>
            <div className="testimonial-author">
              <strong>{testimonials[active].name}</strong>
              <span>{testimonials[active].role}</span>
            </div>
          </div>
        </div>
        <button type="button" className="testimonial-control next" onClick={handleNext} aria-label="Next testimonial">›</button>
      </div>
    </section>
  )
}

const NewsSection = () => {
  const [visibleSlides, setVisibleSlides] = useState(3)
  const [currentIndex, setCurrentIndex] = useState(3)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const cloneCount = visibleSlides
  const infiniteNews = [
    ...newsItems.slice(-cloneCount),
    ...newsItems,
    ...newsItems.slice(0, cloneCount),
  ]

  const handlePrev = () => setCurrentIndex((prevIndex) => prevIndex - 1)
  const handleNext = () => setCurrentIndex((prevIndex) => prevIndex + 1)

  const handleTransitionEnd = () => {
    const lastRealIndex = newsItems.length + cloneCount

    if (currentIndex <= 0) {
      setIsTransitioning(false)
      setCurrentIndex(newsItems.length)
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
      const frame = window.requestAnimationFrame(() => {
        setIsTransitioning(true)
      })
      return () => window.cancelAnimationFrame(frame)
    }
    return undefined
  }, [isTransitioning])

  return (
    <section className="section-block section-news">
      <div className="section-heading">
        <span className="eyebrow">News Area</span>
        <h2>News Area</h2>
        <p>Get the latest stories, events, and campus updates from our community.</p>
      </div>

      <div className="news-carousel-wrapper">
        <button type="button" className="carousel-control prev" onClick={handlePrev} aria-label="Previous news">‹</button>

        <div className="news-carousel-track-container">
          <div
            className="news-carousel-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
              transition: isTransitioning ? 'transform 400ms ease' : 'none',
            }}
          >
            {infiniteNews.map((item, index) => (
              <div key={`${item.id}-${index}`} className="news-slide">
                <article className="news-card">
                  <div className="news-card-head">
                    <span className="news-card-date">{item.date}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <button type="button" className="carousel-control next" onClick={handleNext} aria-label="Next news">›</button>
      </div>
    </section>
  )
}

const Home = () => {
  const [visibleSlides, setVisibleSlides] = useState(3)
  const [currentIndex, setCurrentIndex] = useState(3)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const cloneCount = visibleSlides
  const infiniteSlides = [
    ...courses.slice(-cloneCount),
    ...courses,
    ...courses.slice(0, cloneCount),
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  const handleTransitionEnd = () => {
    const lastRealIndex = courses.length + cloneCount

    if (currentIndex <= 0) {
      setIsTransitioning(false)
      setCurrentIndex(courses.length)
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

  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 520)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  //Green arrow to click and return the page back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (!isTransitioning) {
      const frame = window.requestAnimationFrame(() => {
        setIsTransitioning(true)
      })
      return () => window.cancelAnimationFrame(frame)
    }
    return undefined
  }, [isTransitioning])

  return (
    <>
      <HeroCarousel />

      <section className="section-block section-alt">
        <div className="section-heading">
          <span className="eyebrow">Why we stand out</span>
          <h2>Designed for technical learners and career builders</h2>
          <p>Every program combines practical labs, peer collaboration, and active career coaching.</p>
        </div>

        <div className="feature-grid">
          {highlights.map((item) => (
            <article key={item.id} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span className="eyebrow">Programs</span>
          <h2>Career-focused courses for every stage</h2>
          <p>Choose a pathway with modern labs, mentorship, and real product work.</p>
        </div>

      <div className="carousel-wrapper">
        <button
          type="button"
          className="carousel-control prev"
          onClick={handlePrev}
          aria-label="Previous programs"
        >
          ‹
        </button>

        <div className="carousel-track-container">
          <div
            className="carousel-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
              transition: isTransitioning ? 'transform 400ms ease' : 'none',
            }}
          >
            {infiniteSlides.map((course, index) => (
              <div key={`${course.id}-${index}`} className="carousel-slide">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="carousel-control next"
          onClick={handleNext}
          aria-label="Next programs"
        >
          ›
        </button>
      </div>
    </section>

    <Stats />
    <Testimonials />
    <NewsSection />
    <section className="section-block section-accredentials">
      <div className="section-heading">
        <span className="eyebrow">Accredentials</span>
        <h2>Our recognised partners</h2>
        <p>Trusted industry authorities supporting our programmes and certifications.</p>
      </div>

      <div className="accredentials-grid">
        {accredentials.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            className="accredential-card"
            aria-label={item.label}
          >
            <img src={item.logo} alt={item.label} className="accredential-logo" />
          </a>
        ))}
      </div>
    </section>
    {showTopButton && (
      <button
        type="button"
        className="scroll-top-button"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    )}
  </>
)
}

export default Home
