import { useEffect, useRef, useState } from 'react'

const blockTags = new Set(['ADDRESS', 'ARTICLE', 'BLOCKQUOTE', 'DIV', 'LI', 'OL', 'P', 'SECTION', 'UL'])

const htmlToText = (html) => {
  const { body } = new DOMParser().parseFromString(html, 'text/html')
  const extractText = (node) => {
    if (node.nodeType === 3) return node.textContent
    if (node.nodeType !== 1 || ['SCRIPT', 'STYLE'].includes(node.tagName)) return ''

    const text = Array.from(node.childNodes, extractText).join('')
    return node.tagName === 'BR' || blockTags.has(node.tagName) ? `${text}\n` : text
  }

  return extractText(body).replace(/[ \t]*\n[ \t]*/g, '\n').replace(/\n{3,}/g, '\n\n').trim()
}

const NewsCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasMoreContent, setHasMoreContent] = useState(false)
  const [contentMaxHeight, setContentMaxHeight] = useState('')
  const contentRef = useRef(null)
  const description = htmlToText(item.description || '')

  useEffect(() => {
    const contentElement = contentRef.current
    if (!contentElement) return

    const updateContentHeight = () => {
      const lineHeight = Number.parseFloat(getComputedStyle(contentElement).lineHeight)
      if (!Number.isFinite(lineHeight)) return

      const collapsedHeight = lineHeight * 4
      const fullHeight = contentElement.scrollHeight
      setHasMoreContent(fullHeight > collapsedHeight + 1)
      setContentMaxHeight(`${isExpanded ? fullHeight : collapsedHeight}px`)
    }

    updateContentHeight()
    const resizeObserver = new ResizeObserver(updateContentHeight)
    resizeObserver.observe(contentElement)
    return () => resizeObserver.disconnect()
  }, [isExpanded, description])

  return (
    <article className="news-card">
      <div className="news-card-head">
        <span className="news-card-date">{item.date}</span>
      </div>
      <h3>{item.title}</h3>
      <div className="news-card-content">
        <p ref={contentRef} style={{ maxHeight: contentMaxHeight || undefined }}>
          {description}
        </p>
      </div>
      {hasMoreContent && (
        <button
          type="button"
          className="news-read-more"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </article>
  )
}

export default NewsCard
