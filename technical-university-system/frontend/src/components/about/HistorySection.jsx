import { useState } from 'react'
import heroWorkshop from '../../assets/about-history.jpg'

export default function HistorySection() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="about-story-section about-history-section">
      {/* The image below is also used as the low-opacity watermark at the bottom of this section. */}
      <div className="about-story-watermark" aria-hidden="true">
        <img src={heroWorkshop} alt="" />
      </div>

      <div className="about-story-content about-story-content-reversed">
        <div className="about-story-image">
          <img src={heroWorkshop} alt="Historical workshop" />
        </div>

        <div className="about-story-copy">
          <span className="about-eyebrow">Our History</span>
          <h1>Born from Hope, Built for Transformation</h1>
          <p>
           PTVTI was established as a technical and vocational training institute 
           by the Poverelle Sisters in November 2021, in the aftermath of the COVID-19 
           pandemic. Witnessing the devastating impact the pandemic had on young people 
           and their families, the Sisters recognized the urgent need to equip the youth
           with practical skills that would restore hope, create opportunities, and 
           build a pathway to self-reliance. What began as a mission to empower 
           the community has since grown into a center of excellence dedicated to 
           transforming lives through quality technical and vocational education.
          </p>
          

          {!showMore ? (
            <button
              type="button"
              className="about-read-more-toggle"
              onClick={() => setShowMore(true)}
              aria-expanded={showMore}
            >
              Read more
            </button>
          ) : (
            <>
              <p>
               Over the past five years, PTVTI has empowered hundreds of young people 
               with industry-relevant skills, preparing them for meaningful careers 
               and entrepreneurship. Today, the institute proudly celebrates more 
               than 100 graduates who are either employed in various industries or 
               gaining valuable experience through industrial attachments. While 
               the institute continues to grow, its commitment remains the same:
               empowering young people with practical skills, fostering personal 
               growth, and creating lasting opportunities that positively impact 
               individuals, families, and the wider community.
              </p>
              <p>
                The institute remains guided by a clear mission: to nurture capable,
                compassionate, and job-ready graduates who can contribute meaningfully
                to society. By continuing to invest in practical learning, mentorship,
                and community-centered values, PTVTI is shaping a future where young
                people are equipped not only to earn a living but to lead, serve, and
                transform their communities.
              </p>
              <button
                type="button"
                className="about-read-more-toggle"
                onClick={() => setShowMore(false)}
                aria-expanded={showMore}
              >
                Read less
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
