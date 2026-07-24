import { useParams, Link } from 'react-router-dom'
import engineeringImage from '../assets/course-engineering1.jpg'
import cosmetologyImage from '../assets/course-hairdressing.jpg'
import fashionImage from '../assets/course-fashion1.jpg'
import hospitalityImage from '../assets/course-hospitality1.jpg'
import ictImage from '../assets/course-ict.jpg'

const courseDetails = {
  'software-engineering': {
    title: 'Engineering',
    description: 'A hands-on engineering department offering trade courses in construction, wiring, and plumbing.',
    requirements: [
      'Minimum KCSE D or equivalent vocational qualification',
      'Basic mathematics and technical drawing skills',
      'Interest in construction and facility services',
    ],
    coursesOffered: [
      { name: 'Electrical Wireman', duration: '12 months', fee: 'KSH 76,500' },
      { name: 'Plumbing', duration: '12 months', fee: 'KSH 76,500' },
      { name: 'Masonry', duration: '12 months', fee: 'KSH 76,500' },
    ],
    duration: '12 months',
    level: 'Professional',
  },
  'cosmetology-fundamentals': {
    title: 'Cosmetology',
    description: 'A beauty skills department offering training in salon services, skin care, and hair styling.',
    requirements: [
      'Passion for beauty and client care',
      'Good communication and interpersonal skills',
      'Basic hygiene and safety awareness',
    ],
    coursesOffered: [
      { name: 'Beauty Therapy', duration: '9 months', fee: 'KSH 55,500' },
      { name: 'Hairdressing', duration: '9 months', fee: 'KSH 55,500' },
    ],
    duration: '9 months',
    level: 'Specialized',
  },
  'ict-systems': {
    title: 'ICT',
    description: 'A digital technology department teaching design, web experience, and essential computer applications.',
    requirements: [
      'Basic computer literacy',
      'Creativity in visual design and interfaces',
      'Interest in software tools and digital workflows',
    ],
    coursesOffered: [
      { name: 'Graphic Design', duration: '9 months', fee: 'KSH 54,500' },
      { name: 'Web/Mobile Design', duration: '9 months', fee: 'KSH 54,500' },
      { name: 'Computer Packages', duration: '1 month', fee: 'KSH 5,000' },
    ],
    duration: '9 months',
    level: 'Technical',
  },
  'fashion-design': {
    title: 'Fashion & Design',
    description: 'A fashion department focused on tailoring, dressmaking, and apparel production.',
    requirements: [
      'Creative interest in garments and textiles',
      'Basic sewing or stitching competency',
      'Attention to detail and design thinking',
    ],
    coursesOffered: [
      { name: 'Tailoring', duration: '9 months', fee: 'KSH 53,500' },
      { name: 'Dressmaking', duration: '9 months', fee: 'KSH 53,500' },
    ],
    duration: '9 months',
    level: 'Technical',
  },
  'hospitality-management': {
    title: 'Hospitality',
    description: 'A hospitality department delivering training in food production, service, and culinary operations.',
    requirements: [
      'Interest in food and beverage production',
      'Strong customer service mindset',
      'Basic hygiene and kitchen safety awareness',
    ],
    coursesOffered: [
      { name: 'Pastry Production', duration: '9 months', fee: 'KSH 57,000' },
      { name: 'Food & Beverage Production', duration: '9 months', fee: 'KSH 57,000' },
    ],
    duration: '9 months',
    level: 'Professional',
  },
}

const CourseDetails = () => {
  const { id } = useParams()
  const details = courseDetails[id]
  const departmentClass = details?.title
    ? `department-${details.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')}`
    : ''

  const detailImage = {
    Engineering: engineeringImage,
    Cosmetology: cosmetologyImage,
    ICT: ictImage,
    'Fashion & Design': fashionImage,
    Hospitality: hospitalityImage,
  }[details?.title]

  if (!details) {
    return (
      <section className="section-block">
        <h2>Course not found</h2>
        <p>The course you are looking for does not exist.</p>
        <Link className="course-link" to="/courses">
          View all departments
        </Link>
      </section>
    )
  }

  return (
    <section className={`section-block course-details ${departmentClass}`}>
      <div className="section-heading course-details-heading">
        <span className="eyebrow">Course details</span>
        <h2>{details.title}</h2>
        <p>{details.description}</p>
        <Link to="/courses" className="site-button secondary back-link">
          Back to Departments
        </Link>
      </div>
      <div className="detail-grid">
        <article className="detail-card detail-card-with-image">
          {detailImage && (
            <div className="detail-card-image">
              <img src={detailImage} alt={`${details.title} department`} />
            </div>
          )}
          <h3>Course requirements</h3>
          <ul className="course-detail-list">
            {details.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <aside className="detail-summary">
          <article className="detail-card">
              <h3>Courses offered</h3>
              <ul className="course-detail-list courses-offered-list">
                {details.coursesOffered.map((course) => (
                  <li key={course.name}>
                    <strong>{course.name}</strong> — {course.duration}
                  </li>
                ))}
              </ul>
          </article>

          <article className="detail-card">
            <div className="course-meta-item">
              <span>Program duration</span>
              <strong>{details.duration}</strong>
            </div>
            <div className="course-meta-item">
              <span>Level</span>
              <strong>{details.level}</strong>
            </div>
            <div className="detail-actions">
              <Link className="nav-action-button apply-link" to="/contact">
                APPLY NOW
              </Link>
              <Link className="site-button" to="/contact">
                Contact admissions
              </Link>
            </div>
          </article>
        </aside>
      </div>
    </section>
  )
}

export default CourseDetails
