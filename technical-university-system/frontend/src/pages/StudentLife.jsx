import { useState, useEffect } from 'react'
import HeroCarousel from '../components/HeroCarousel.jsx'
import { getEventItems, resolveMediaUrl } from '../services/api.js'

import studentLife1 from '../assets/student-life.jpg'
import studentLife2 from '../assets/student-life2.jpg'
import studentLife3 from '../assets/student-life3.jpg'
import studentLife4 from '../assets/student-life4.jpg'

const carouselImages = [
  { src: studentLife1, alt: 'Students gathered on campus' },
  { src: studentLife2, alt: 'Students enjoying cultural day' },
  { src: studentLife3, alt: 'Student team building activities' },
]

const defaultEventCards = [
  {
    id: 'default-0',
    title: 'Cultural & Youth Day',
    description: 'Celebrate student creativity with vibrant performances, cultural showcases, and lively campus energy.',
    image: studentLife2,
  },
  {
    id: 'default-1',
    title: 'Team Building',
    description: 'Build trust, collaboration, and leadership through engaging campus activities and group challenges.',
    image: studentLife3,
  },
  {
    id: 'default-2',
    title: 'Bible Study',
    description: 'Gather for meaningful reflection, fellowship, and spiritual growth in a welcoming campus community.',
    image: studentLife4,
  },
]

const StudentLife = () => {
  const [eventCards, setEventCards] = useState(defaultEventCards)

  useEffect(() => {
    getEventItems()
      .then((items) => {
        if (Array.isArray(items) && items.length > 0) {
          const apiCards = items.map((item, index) => {
            // Checks item.image first (Django ImageField), then item.image_url
            const rawImageUrl = item.image || item.image_url
            
            return {
              id: `api-${item.id ?? index}`,
              title: item.title,
              description: item.description,
              image: resolveMediaUrl(rawImageUrl) || studentLife1,
            }
          })

          // Combine default cards with API cards directly (without appending to prevCards)
          setEventCards([...defaultEventCards, ...apiCards])
        }
      })
      .catch((err) => {
        console.error('Error fetching event items:', err)
      })
  }, [])

  return (
    <main className="student-life-page">
      <HeroCarousel 
        slides={carouselImages} 
        showControls={false}
        showOverlay={false}
        showIndicators={false}
      />

      <section className="section-block">
        <div className="section-heading">
          <span className="eyebrow">Campus Life</span>
          <h2>Vibrant Student Experience</h2>
          <p>
            Discover our active campus community filled with cultural events, leadership opportunities, and fellowship.
          </p>
        </div>

        <div className="student-life-event-grid">
          {eventCards.map((event) => (
            <article
              className="detail-card detail-card-with-image"
              key={event.id}
            >
              {event.image && (
                <div className="card-image-wrapper">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    onError={(e) => {
                      // Fallback if the image URL breaks/404s in browser
                      e.target.onerror = null
                      e.target.src = studentLife1
                    }}
                  />
                </div>
              )}
              <div className="card-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default StudentLife