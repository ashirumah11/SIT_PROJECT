import { useState, useEffect } from 'react'
import Hero from '../components/Hero.jsx'
import CourseCard from '../components/CourseCard.jsx'
import engineeringImage from '../assets/course-engineering.jpg'
import fashionImage from '../assets/course-fashion.jpg'
import hospitalityImage from '../assets/course-hospitality.jpg'
import ictImage from '../assets/course-ict.jpg'
import cosmetologyImage from '../assets/course-cosmetology.jpg'

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
    title: 'Engineering',
    description: 'Develop practical engineering trade skills and building support.',
    duration: '12 months',
    level: 'Professional',
    department: 'Engineering',
    badge: 'Top Rated',
    image: engineeringImage,
  },
  {
    id: 'cosmetology-fundamentals',
    title: 'Cosmetology Fundamentals',
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
    title: 'Hospitality Management',
    description: 'Prepare for guest services, events, and modern hospitality operations.',
    duration: '11 months',
    level: 'Professional',
    department: 'Hospitality',
    image: hospitalityImage,
  },
  {
    id: 'ict-systems',
    title: 'ICT Systems',
    description: 'Master information and communications technology for modern workplaces.',
    duration: '12 months',
    level: 'Technical',
    department: 'ICT',
    image: ictImage,
  },
]

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
      <Hero />

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
  </>
)
}

export default Home
