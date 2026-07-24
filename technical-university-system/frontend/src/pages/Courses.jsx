import { useEffect } from 'react'
import CourseCard from '../components/CourseCard.jsx'
import engineeringImage from '../assets/course-engineering1.jpg'
import fashionImage from '../assets/course-fashion1.jpg'
import hospitalityImage from '../assets/course-hospitality1.jpg'
import ictImage from '../assets/course-ict.jpg'
import cosmetologyImage from '../assets/course-hairdressing.jpg'

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
    title: 'Fashion & Design Department',
    description: 'Develop apparel, styling, and brand identity through design practice.',
    duration: '10 months',
    level: 'Technical',
    department: 'Fashion & Design',
    image: fashionImage,
  },
  {
    id: 'hospitality-management',
    title: 'Hospitality Department',
    description: 'Prepare for guest services, event planning, and hospitality operations.',
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

const Courses = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <section className="section-block">
      <div className="section-heading">
        <span className="eyebrow">Departments</span>
        <h2>Professional programs built for career-focused skills</h2>
        <p>
          Choose a pathway supported by modern workshops, practical labs, and placement preparation.
        </p>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

export default Courses
