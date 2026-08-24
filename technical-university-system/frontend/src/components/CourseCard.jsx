import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  const { id, title, description, duration, level, department, badge, image } = course
  const departmentKey = department?.toLowerCase().replace(/[^a-z]+/g, '-')
  const departmentColors = {
    engineering: '#3c6dd1',
    ict: '#4ea08a',
    'fashion-design': '#8457c7',
    beauty: '#e58bb5',
    cosmetology: '#e58bb5',
    hospitality: '#4ea08a',
    business: '#d5a928',
    electrical: '#e47b32',
  }
  const departmentColor = departmentColors[departmentKey] || '#0f766e'
  const departmentClass = department
    ? `department-${department
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')}`
    : ''

  return (
    <article
      className={`course-card ${departmentClass} ${departmentColors[departmentKey] ? '' : 'department-custom'}`}
      style={{ '--department-color': departmentColor }}
    >
      {image && (
        <div className="course-card-image">
          <img src={image} alt={`${title} program`} />
          <span className="course-image-label">{department}</span>
        </div>
      )}
      <div className="course-card-body">
        <div className="course-card-top">
          <span className="course-tag">{department || level}</span>
          {badge && <span className="course-badge">{badge}</span>}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="course-card-meta">
          <div className="course-meta-item">
            <span>Duration</span>
            <strong>{duration}</strong>
          </div>
          <Link to={`/courses/${id}`} className="course-link">
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}

export default CourseCard
