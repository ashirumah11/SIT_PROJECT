import { useEffect, useState } from 'react'
import { getGalleryItems } from '../services/api.js'

const BACKEND_BASE_URL = 'http://localhost:8000'

const normalizeImageUrl = (url) => {
  if (!url || typeof url !== 'string' || url.trim() === '') return null
  if (/^https?:\/\//.test(url)) return url
  return url.startsWith('/')
    ? `${BACKEND_BASE_URL}${url}`
    : `${BACKEND_BASE_URL}/${url}`
}

const defaultGalleryImages = [
  {
    src: 'https://images.pixieset.com/47781949/4fcf709f76ed6f5c91aaca9eb6a9d139-large.jpg',
    alt: 'Campus event photo 1',
  },
  {
    src: 'https://images.pixieset.com/47781949/c4ae8505392a8576c5b5dec3a5bec2c2-large.jpg',
    alt: 'Campus event photo 2',
  },

  {
    src: 'https://images.pixieset.com/47781949/a15335d09e7ec6e435dfc2d2b2341ba0-large.jpg',
    alt: 'Campus event photo 3',
  },
  {
    src: 'https://images.pixieset.com/47781949/ec8419ab81a69c3e500b402822c95cad-large.JPG',
    alt: 'Graduation ceremony photo 1',
  },
  {
    src: 'https://images.pixieset.com/47781949/03257077a2edfbb86b55b47dfb5cd544-large.JPG',
    alt: 'Graduation ceremony photo 2',
  },
  {
    src: 'https://images.pixieset.com/47781949/d117a4e7308a15f8752895f3c690057b-large.JPG',
    alt: 'Graduation ceremony photo 3',
  },
  {
    src: 'https://images.pixieset.com/47781949/373efc441d61cb6b5e28a601508e6740-large.jpg',
    alt: 'Team Building photo 1',
  },
  {
    src: 'https://images.pixieset.com/47781949/12f88a5ee99e8c5d904a20d1234100d0-large.jpg',
    alt: 'Team Building photo 2',
  },
  {
    src: 'https://images.pixieset.com/47781949/7636189eec5b8a784660b3f4a64263b7-large.jpg',
    alt: 'Team Building photo 3',
  },
  {
    src: 'https://images.pixieset.com/47781949/07263e1b7d339736612f788f83968b2a-large.jpg',
    alt: 'Bible Study highlight photo 1',
  },
  {
    src: 'https://images.pixieset.com/47781949/1973889849f4988d2dd8c6bb197b6174-large.jpg',
    alt: 'Bible Study highlight photo 2',
  },
  {
    src: 'https://images.pixieset.com/47781949/735f42c9975b9a71017e0f6cdd00d0e1-large.jpg',
    alt: 'Bible Study highlight photo 3',
  },
]

const mergeGalleryImages = (items = []) => {
  const backendImages = items
    .map((item) => ({
      src: normalizeImageUrl(item.image_url) || normalizeImageUrl(item.image) || '',
      alt: item.alt_text || item.caption || item.title || 'Gallery image',
    }))
    .filter((image) => image.src)

  const uniqueImages = [...defaultGalleryImages, ...backendImages]
  const seen = new Set()

  return uniqueImages.filter((image) => {
    if (!image?.src) return false
    const normalizedSrc = image.src.toLowerCase()
    if (seen.has(normalizedSrc)) return false
    seen.add(normalizedSrc)
    return true
  })
}

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState(defaultGalleryImages)
  const [activeImageIndex, setActiveImageIndex] = useState(null)

  const activeImage = activeImageIndex === null ? null : galleryImages[activeImageIndex]

  const closeLightbox = () => setActiveImageIndex(null)

  const showPreviousImage = (event) => {
    event?.stopPropagation()
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null) return 0
      return (currentIndex - 1 + galleryImages.length) % galleryImages.length
    })
  }

  const showNextImage = (event) => {
    event?.stopPropagation()
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null) return 0
      return (currentIndex + 1) % galleryImages.length
    })
  }

  useEffect(() => {
    getGalleryItems()
      .then((items) => {
        if (Array.isArray(items)) {
          setGalleryImages(mergeGalleryImages(items))
        } else {
          setGalleryImages(defaultGalleryImages)
        }
      })
      .catch(() => {
        setGalleryImages(defaultGalleryImages)
      })
  }, [])

  useEffect(() => {
    if (activeImageIndex === null) return

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        showPreviousImage(event)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        showNextImage(event)
      } else if (event.key === 'Escape') {
        event.preventDefault()
        closeLightbox()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImageIndex, galleryImages.length])

  return (
    <>
   
    <section className="section-block production-gallery">
      <div className="section-heading">
        <span className="eyebrow">Gallery</span>
        <h2>Gallery highlights</h2>
        <p>Explore photos from our recent student events, workshops, graduation ceremonies, Bible Study sessions, and collaborative projects.</p>
      </div>

      <div className="gallery-grid">
        {galleryImages
          .filter((image) => image?.src)
          .map((image, index) => (
            <article className="gallery-card" key={`${image.src || 'image'}-${index}`}>
              <button
                type="button"
                className="gallery-card-button"
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image.src} alt={image.alt || 'Gallery image'} />
              </button>
            </article>
          ))}
      </div>

      <div className="gallery-link-row">
        <a
          className="site-button"
          href="https://al-media.pixieset.com/palazzolotvtigallery/"
          target="_blank"
          rel="noreferrer noopener"
        >
          View full gallery
        </a>
      </div>
    </section>

      {activeImage && (
        <div className="gallery-overlay" onClick={closeLightbox}>
          <div className="gallery-overlay-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="overlay-close"
              onClick={closeLightbox}
              aria-label="Close gallery preview"
            >
              ×
            </button>

            <div className="gallery-lightbox-media">
              <button
                type="button"
                className="gallery-nav-button"
                onClick={showPreviousImage}
                aria-label="View previous image"
              >
                ‹
              </button>

              {activeImage?.src ? (
                <img src={activeImage.src} alt={activeImage.alt || 'Gallery image'} />
              ) : (
                <div className="gallery-empty-state">No image available</div>
              )}

              <button
                type="button"
                className="gallery-nav-button"
                onClick={showNextImage}
                aria-label="View next image"
              >
                ›
              </button>
            </div>

            <div className="gallery-caption-row">
              <p>{activeImage.alt}</p>
              <span>{activeImageIndex + 1} / {galleryImages.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
