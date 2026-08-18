import { useState } from 'react'

const NewsCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  // Split content by sentences (period followed by space, or end of string)
  const sentences = item.description
    .split(/(?<=[.!?])\s+/)
    .filter((s) => s.trim().length > 0)

  const maxSentences = 4
  const hasMoreContent = sentences.length > maxSentences

  const visibleSentences = isExpanded ? sentences : sentences.slice(0, maxSentences)

  return (
    <article className="news-card">
      <div className="news-card-head">
        <span className="news-card-date">{item.date}</span>
      </div>
      <h3>{item.title}</h3>
      <div className="news-card-content">
        <p>{visibleSentences.join(' ')}</p>
      </div>
      {hasMoreContent && (
        <button
          type="button"
          className="news-read-more"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </article>
  )
}

export default NewsCard
