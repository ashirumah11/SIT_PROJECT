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
    src: 'https://images.pixieset.com/47781949/01ba12474a25e4dcfd9f1762b8ba602c-large.jpg',
    alt: 'Campus event photo 1',
  },
  {
    src: 'https://images.pixieset.com/47781949/4fcf709f76ed6f5c91aaca9eb6a9d139-large.jpg',
    alt: 'Campus event photo 2',
  },
  {
    src: 'https://images.pixieset.com/47781949/c4ae8505392a8576c5b5dec3a5bec2c2-large.jpg',
    alt: 'Campus event photo 3',
  },
  {
    src: 'https://images.pixieset.com/47781949/d55d24f57090d6056bf07b520618d519-large.jpg',
    alt: 'Campus event photo 4',
  },
  {
    src: 'https://images.pixieset.com/47781949/f42f8c04b5ff58c413163f83c8c1539f-large.jpg',
    alt: 'Campus event photo 5',
  },
  {
    src: 'https://images.pixieset.com/47781949/a15335d09e7ec6e435dfc2d2b2341ba0-large.jpg',
    alt: 'Campus event photo 6',
  },
  {
    src: 'https://images.pixieset.com/47781949/2c96c94da383411e99ce5f9092e64a92-large.JPG',
    alt: 'Graduation ceremony photo 1',
  },
  {
    src: 'https://images.pixieset.com/47781949/c6caa46956cf76b98fffdc09c4ef6ce8-large.JPG',
    alt: 'Graduation ceremony photo 2',
  },
  {
    src: 'https://images.pixieset.com/47781949/1d2db4d0e3ac61dd5b98f97e4ef4d946-large.JPG',
    alt: 'Graduation ceremony photo 3',
  },
  {
    src: 'https://images.pixieset.com/47781949/9e1c18d70a08af2b338ffa74ffbe2b59-large.JPG',
    alt: 'Graduation ceremony photo 4',
  },
  {
    src: 'https://images.pixieset.com/47781949/bbff784a42e9694071627008f9036549-large.JPG',
    alt: 'Graduation ceremony photo 5',
  },
  {
    src: 'https://images.pixieset.com/47781949/1cc07bb9314045bfda9f483d8fa510f0-large.JPG',
    alt: 'Graduation ceremony photo 6',
  },
  {
    src: 'https://images.pixieset.com/47781949/eb6129ead3b1667f2c7a74bbfca0b465-large.jpg',
    alt: 'Team Building photo 11',
  },
  {
    src: 'https://images.pixieset.com/47781949/530800356b869138c9f2d80eb6eec676-large.jpg',
    alt: 'Team Building photo 12',
  },
  {
    src: 'https://images.pixieset.com/47781949/f3f210bd18f4f1bfa35c0e21d6e56eb1-large.jpg',
    alt: 'Team Building photo 13',
  },
  {
    src: 'https://images.pixieset.com/47781949/5d70f40f53147ea569dbd85acd3c5861-large.jpg',
    alt: 'Bible Study highlight photo 1',
  },
  {
    src: 'https://images.pixieset.com/47781949/07263e1b7d339736612f788f83968b2a-large.jpg',
    alt: 'Bible Study highlight photo 2',
  },
  {
    src: 'https://images.pixieset.com/47781949/a04429e50f559cf5510f7e5017fc5691-large.jpg',
    alt: 'Bible Study highlight photo 3',
  },
]

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
        if (Array.isArray(items) && items.length > 0) {
          setGalleryImages(
            items.map((item) => ({
              src: normalizeImageUrl(item.image_url) || normalizeImageUrl(item.image) || '',
              alt: item.alt_text || item.caption || item.title || 'Gallery image',
            }))
          )
        }
      })
      .catch(() => {})
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
