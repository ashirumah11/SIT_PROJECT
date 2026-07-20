import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  const { id, title, description, duration, level, department, badge, image } = course
  const departmentClass = department
    ? `department-${department
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')}`
    : ''

  return (
    <article className={`course-card ${departmentClass}`}>
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
