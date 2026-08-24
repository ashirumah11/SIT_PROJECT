import { useEffect, useState } from 'react'
import CourseCard from '../components/CourseCard.jsx'
import engineeringImage from '../assets/course-engineering1.jpg'
import fashionImage from '../assets/course-fashion1.jpg'
import hospitalityImage from '../assets/course-hospitality1.jpg'
import ictImage from '../assets/course-ict.jpg'
import cosmetologyImage from '../assets/course-hairdressing.jpg'
import { getDepartments, resolveMediaUrl } from '../services/api.js'

const fallbackDepartments = [
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

const departmentImages = {
  engineering: engineeringImage,
  electrical: engineeringImage,
  plumbing: engineeringImage,
  cosmetology: cosmetologyImage,
  beauty: cosmetologyImage,
  fashion: fashionImage,
  hospitality: hospitalityImage,
  ict: ictImage,
}

const toSlug = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-')
const formatDuration = (months) => months ? `${months} month${months === 1 ? '' : 's'}` : 'View programmes'

const mergeDepartments = (remoteDepartments) => {
  const remoteByName = new Map(remoteDepartments.map((department) => [department.name.toLowerCase(), department]))
  const existingNames = new Set(fallbackDepartments.map((department) => department.department.toLowerCase()))
  const merged = fallbackDepartments.map((fallback) => {
    const remote = remoteByName.get(fallback.department.toLowerCase())
    if (!remote) return fallback

    return {
      ...fallback,
      id: remote.id,
      title: remote.name,
      department: remote.name,
      description: remote.description || fallback.description,
      image: resolveMediaUrl(remote.image) || fallback.image,
      duration: formatDuration(remote.duration_months) === 'View programmes' ? fallback.duration : formatDuration(remote.duration_months),
    }
  })

  const added = remoteDepartments
    .filter((department) => !existingNames.has(department.name.toLowerCase()))
    .map((department) => ({
      id: department.id,
      title: department.name,
      description: department.description || 'Explore practical training and career-focused skills in this department.',
      duration: formatDuration(department.duration_months),
      level: 'Technical training',
      department: department.name,
      image: resolveMediaUrl(department.image) || departmentImages[toSlug(department.name).split('-')[0]],
    }))

  return [...merged, ...added]
}

const Courses = () => {
  const [departments, setDepartments] = useState(fallbackDepartments)

  useEffect(() => {
    getDepartments()
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) return
        setDepartments(mergeDepartments(data))
      })
      .catch(() => {})
  }, [])

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
        {departments.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

export default Courses
