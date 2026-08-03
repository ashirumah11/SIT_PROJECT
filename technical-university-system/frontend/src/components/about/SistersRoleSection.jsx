import { useState } from 'react'
import heroWorkshop from '../../assets/about-poverelle.jpg'

export default function SistersRoleSection() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="about-story-section about-sisters-story-section">
      {/* The image below is also used as the low-opacity watermark at the bottom of this section. */}
      <div className="about-story-watermark" aria-hidden="true">
        <img src={heroWorkshop} alt="" />
      </div>

      <div className="about-story-content">
        <div className="about-story-copy">
          <span className="about-eyebrow">The Poverelle Sisters</span>
          <h1><i>"I keep them as sons and daughters".</i></h1>
          <p>
            The Poverelle Sisters are the founders and custodians of PTVTI,
            carrying forward a mission that began in 1869 in Italy through 
            the vision of St. Luigi Palazzolo. Inspired by his deep compassion 
            for the poor and vulnerable, the congregation has dedicated itself
            to uplifting communities through education, healthcare, social development,
            charitable works, and evangelization. Today, their ministry continues
            across many countries, and in Kenya they serve communities through
            education, health, and social development—bringing that 
            same vision to life through PTVTI in Kiambu.
            </p>
          <p>
            At the heart of the institute are the evangelical values that define
            the congregation: charity, compassion, love for the poor, dignity, and
            respect. These principles shape every aspect of student life, creating
            an environment where learners are nurtured not only academically but also
            spiritually, morally, and socially.
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
                Guided by their motto, <em>"I keep them as sons and daughters,"</em>
                the Sisters are committed to providing a holistic formation that
                prepares students to become skilled professionals, responsible
                citizens, and compassionate members of society.
              </p>

              <div className="about-sisters-list">
                <div>
                  <h4>Faith-Centered Leadership</h4>
                  <p>
                    The Sisters provide the strategic direction and governance of the
                    institute. Through the Principal, they oversee academic excellence
                    and ensure students receive relevant, high-quality technical and
                    vocational training. The Institute Director, representing the
                    congregation, provides leadership in administration and financial
                    stewardship, ensuring the long-term sustainability of the
                    institution.
                  </p>
                </div>
                <div>
                  <h4>Holistic Student Formation</h4>
                  <p>
                    Beyond technical education, the Sisters foster an environment where
                    students grow in character, faith, leadership, and social
                    responsibility. Their mission is to form graduates who are not only
                    competent in their professions but who also embody integrity,
                    compassion, and service to others.
                  </p>
                </div>
                <div>
                  <h4>A Lasting Commitment to the Community</h4>
                  <p>
                    Every initiative at PTVTI reflects the congregation's enduring
                    commitment to empowering young people and transforming lives
                    through education. By equipping students with practical skills and
                    strong values, the Poverelle Sisters continue the legacy of St.
                    Luigi Palazzolo—creating opportunities, restoring hope, and
                    building stronger communities for generations to come.
                  </p>
                </div>
              </div>

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

        <div className="about-story-image">
          <img src={heroWorkshop} alt="Photo of the Sisters" />
        </div>
      </div>
    </section>
  )
}
