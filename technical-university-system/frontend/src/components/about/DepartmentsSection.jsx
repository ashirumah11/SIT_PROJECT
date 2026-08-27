import { useEffect, useState } from 'react'
import hospitalityImage from '../../assets/course-hospitality.jpg'
import engineeringImage from '../../assets/course-engineering.jpg'
import fashionImage from '../../assets/course-fashion.jpg'
import cosmetologyImage from '../../assets/course-cosmetology.jpg'
import ictImage from '../../assets/course-ict.jpg'
import leaderImage from '../../assets/hero-workshop.jpg'
import { getStaffMembers, resolveMediaUrl } from '../../services/api'

const defaultLeaders = [
  {
    title: 'Hospitality & Catering',
    role: 'Head of Department',
    name: 'Sr. Margaret Nakato',
    image: hospitalityImage,
    alt: 'Hospitality department head',
  },
  {
    title: 'Electrical Technology',
    role: 'Head of Department',
    name: 'Eng. Peter Okello',
    image: engineeringImage,
    alt: 'Electrical technology department head',
  },
  {
    title: 'Fashion & Textiles',
    role: 'Head of Department',
    name: 'Ms. Sarah Namuli',
    image: fashionImage,
    alt: 'Fashion and textiles department head',
  },
  {
    title: 'Carpentry & Joinery',
    role: 'Head of Department',
    name: 'Mr. Joseph Ssekandi',
    image: cosmetologyImage,
    alt: 'Carpentry and joinery department head',
  },
  {
    title: 'Food Processing',
    role: 'Head of Department',
    name: 'Sr. Christine Auma',
    image: ictImage,
    alt: 'Food processing department head',
  },
  {
    title: 'Institute Leadership',
    role: 'Principal & Administrator',
    name: 'Sr. Esther Achieng and Mr. David Kato',
    image: leaderImage,
    alt: 'Principal and administrator',
  },
]

export default function DepartmentsSection() {
  const [visibleSlides, setVisibleSlides] = useState(3)
  const [currentIndex, setCurrentIndex] = useState(3)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [leaders, setLeaders] = useState(defaultLeaders)

  useEffect(() => {
    getStaffMembers()
      .then((items) => {
        if (!Array.isArray(items) || items.length === 0) return

        const mappedStaff = items
          .filter((member) => member.is_active !== false)
          .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0) || a.name.localeCompare(b.name))
          .map((member) => ({
            title: member.department || 'Staff Member',
            role: member.role || 'Team Member',
            name: member.name,
            image: resolveMediaUrl(member.image_url) || resolveMediaUrl(member.image) || leaderImage,
            alt: `${member.name} profile photo`,
          }))

        if (mappedStaff.length > 0) {
          setLeaders(mappedStaff)
          setCurrentIndex(3)
        }
      })
      .catch((error) => {
        console.error('Failed to fetch staff members:', error)
      })
  }, [])

  const cloneCount = visibleSlides
  const infiniteLeaders = [
    ...leaders.slice(-cloneCount),
    ...leaders,
    ...leaders.slice(0, cloneCount),
  ]

  const handlePrev = () => setCurrentIndex((prevIndex) => prevIndex - 1)
  const handleNext = () => setCurrentIndex((prevIndex) => prevIndex + 1)

  const handleTransitionEnd = () => {
    const lastRealIndex = leaders.length + cloneCount
    if (currentIndex <= 0) {
      setIsTransitioning(false)
      setCurrentIndex(leaders.length)
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
    <section className="section-block about-section about-departments-section">
      <div className="about-section-header about-departments-header">
        <span className="about-eyebrow">Meet the Team</span>
        <h2>Our dedicated team of department heads and institute leaders.</h2>
      </div>
      <p className="about-team-copy">
        Our success is driven by a dedicated team of experienced educators, skilled professionals, and committed administrators who share a common mission of empowering young people through quality Technical and Vocational Education and Training (TVET). With expertise across engineering, business, hospitality, ICT, and other technical disciplines, our staff work together to provide hands-on training, holistic mentorship, and values-based education. Get to know the leaders, instructors, and support staff who are shaping the next generation of competent, ethical, and industry-ready professionals at PTVTI.
      </p>
      <div className="about-team-carousel-wrapper">
        <button
          type="button"
          className="about-team-control prev"
          onClick={handlePrev}
          aria-label="Previous leaders"
        >
          ‹
        </button>
        <div className="about-team-track-container">
          <div
            className="about-team-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
              transition: isTransitioning ? 'transform 400ms ease' : 'none',
            }}
          >
            {infiniteLeaders.map((leader, index) => (
              <article key={`${leader.name}-${index}`} className="about-team-slide">
                <div className="about-team-card">
                  <img src={leader.image} alt={leader.alt} />
                  <div className="about-team-card-body">
                    <h3>{leader.title}</h3>
                    <span>{leader.role}</span>
                    <p>{leader.name}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="about-team-control next"
          onClick={handleNext}
          aria-label="Next leaders"
        >
          ›
        </button>
      </div>
    </section>
  )
}
