import { useEffect, useState } from 'react'
import { getGalleryItems, resolveMediaUrl } from '../services/api.js'

const defaultGalleryImages = [
  {
    src: 'https://images.pixieset.com/47781949/03257077a2edfbb86b55b47dfb5cd544-large.JPG',
    alt: 'Graduation photo 2',
  },
  {
    src: 'https://images.pixieset.com/47781949/07263e1b7d339736612f788f83968b2a-large.jpg',
    alt: 'Bible Study 1',
  },
  {
    src: 'https://images.pixieset.com/47781949/12f88a5ee99e8c5d904a20d1234100d0-large.jpg',
    alt: 'Team Building 2',
  },
]

const mergeGalleryImages = (items = []) => {
  const backendImages = items
    .map((item) => ({
      src: resolveMediaUrl(item.image_url) || resolveMediaUrl(item.image) || '',
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
        setActiveImageIndex((currentIndex) => {
          if (currentIndex === null) return 0
          return (currentIndex - 1 + galleryImages.length) % galleryImages.length
        })
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActiveImageIndex((currentIndex) => {
          if (currentIndex === null) return 0
          return (currentIndex + 1) % galleryImages.length
        })
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
