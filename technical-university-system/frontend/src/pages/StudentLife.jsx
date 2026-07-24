import HeroCarousel from '../components/HeroCarousel'
import heroStudentLife from '../assets/student-life.jpg'
import eventCultureDay from '../assets/student-life2.jpg'
import eventTeamBuilding from '../assets/student-life3.jpg'
import eventBibleStudy from '../assets/student-life4.jpg'

const carouselImages = [
  {
    src: heroStudentLife,
    alt: 'Students gathered on campus',
  },
  {
    src: eventCultureDay,
    alt: 'Students enjoying cultural day',
  },
  {
    src: eventTeamBuilding,
    alt: 'Student team building activities',
  },
]

const eventCards = [
  {
    title: 'Cultural & Youth Day',
    description:
      'Celebrate student creativity with vibrant performances, cultural showcases, and lively campus energy.',
    image: eventCultureDay,
  },
  {
    title: 'Team Building',
    description:
      'Build trust, collaboration, and leadership through engaging campus activities and group challenges.',
    image: eventTeamBuilding,
  },
  {
    title: 'Bible Study',
    description:
      'Gather for meaningful reflection, fellowship, and spiritual growth in a welcoming campus community.',
    image: eventBibleStudy,
  },
]

const StudentLife = () => {

  return (
    <main className="student-life-page">
      <section className="student-life-hero">
        <HeroCarousel
          slides={carouselImages}
          showControls={false}
          showOverlay={false}
          showIndicators={false}
          autoplayInterval={4500}
        />
      </section>

      <section className="student-life-events section-block">
      <div className="section-heading">
         <span className="eyebrow">Student life</span>
        <h2>Featured student events</h2>
        <p>
          Discover the energy of our campus with events designed to inspire, connect, and empower every student.
        </p>
      </div>

      <div className="student-life-event-grid">
        {eventCards.map((event) => (
          <article className="detail-card detail-card-with-image" key={event.title}>
            <div className="detail-card-image">
              <img src={event.image} alt={event.title} />
            </div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </article>
        ))}
      </div>
    </section>
  </main>
  )
}

export default StudentLife
