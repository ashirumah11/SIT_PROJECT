const accreditations = [
  'Ministry of Education & Sports — Uganda',
  'Directorate of Industrial Training (DIT)',
  'Uganda Business & Technical Examinations Board (UBTEB)',
  'National Council for Higher Education',
  'Association of Catholic Technical Institutions',
]

export default function RecognitionSection() {
  return (
    <section className="section-block about-section about-recognition-section">
      <div className="about-section-header">
        <span className="about-eyebrow">Recognition</span>
        <h2>Accredited, recognised and trusted.</h2>
      </div>
      <div className="about-section-content">
        <p>
          St. Martha Institute operates under full accreditation from Uganda's national education and vocational authorities, and is a member of regional and international bodies committed to excellence in technical training.
        </p>
      </div>
      <ul className="about-accreditation-list">
        {accreditations.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
