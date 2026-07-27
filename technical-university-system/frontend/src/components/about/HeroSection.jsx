import heroWorkshop from '../../assets/about-institute.jpg'

export default function HeroSection() {
  return (
    <section className="about-story-section">
      {/* The image below is also used as the low-opacity watermark at the bottom of this section. */}
      <div className="about-story-watermark" aria-hidden="true">
        <img src={heroWorkshop} alt="" />
      </div>

      <div className="about-story-content">
        <div className="about-story-copy">
          <span className="about-eyebrow">About the Institute</span>
          <h1>Our Story</h1>
          <p>
            Driven by a passion for transforming lives through quality technical 
            and vocational education, 
            <strong>Palazzolo Technical and Vocational Training Institute (PTVTI)</strong> 
            is committed to equipping learners with practical skills, industry-relevant 
            knowledge, and the confidence to succeed in today&apos;s competitive job market.
            Since receiving accreditation from the <strong>Technical and Vocational Education
            and Training Authority (TVETA)</strong> in <strong>November 2021</strong>,
            PTVTI has continued to provide accessible, high-quality training that 
            empowers students to achieve their career goals.
          </p>
          <p>
            From Certificate to Diploma programmes across 
            diverse technical and vocational fields, 
            PTVTI combines hands-on learning, experienced trainers, 
            and a supportive learning environment to prepare graduates for employment,
            entrepreneurship, and lifelong success. As we continue to grow, 
            we remain dedicated to shaping a skilled workforce that drives innovation,
            economic development, and positive change in Kenya and beyond.
          </p>
        </div>

        <div className="about-story-image">
          <img src={heroWorkshop} alt="PTVTI learners receiving hands-on technical training" />
        </div>
      </div>
    </section>
  )
}
