import { useEffect, useRef, useState } from 'react'

const videos = [
  {
    title: 'The Sisters of PTVTI',
    description: 'A short video about the ministry and mission of the sisters at the institute.',
    src: 'https://www.youtube.com/embed/kfKH7hIgX1U?enablejsapi=1&rel=0&modestbranding=1',
  },
  {
    title: 'About the Institute',
    description: 'Discover the values, training, and community life that define PTVTI.',
    src: 'https://www.youtube.com/embed/UxcGu7XDXkA?start=10&enablejsapi=1&rel=0&modestbranding=1',
  },
]

function loadYouTubeApi() {
  if (window.__ptvtiYouTubeApi) {
    return window.__ptvtiYouTubeApi
  }

  window.__ptvtiYouTubeApi = new Promise((resolve, reject) => {
    if (window.YT && window.YT.Player) {
      resolve(window.YT)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    script.async = true
    script.onload = () => {
      if (window.YT && window.YT.Player) {
        resolve(window.YT)
      }
    }
    script.onerror = () => reject(new Error('Failed to load YouTube iframe API'))
    document.body.appendChild(script)

    const previousCallback = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previousCallback === 'function') {
        previousCallback()
      }
      resolve(window.YT)
    }
  })

  return window.__ptvtiYouTubeApi
}

export default function VideoGallerySection() {
  const playerRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    let mounted = true

    const initPlayers = async () => {
      const YT = await loadYouTubeApi()
      if (!mounted) return

      playerRefs.current = videos.map((video, index) => {
        const player = new YT.Player(`about-video-${index}`, {
          events: {
            onStateChange: (event) => {
              if (event.data === YT.PlayerState.PLAYING) {
                setActiveIndex(index)
                playerRefs.current.forEach((otherPlayer, otherIndex) => {
                  if (otherIndex !== index && otherPlayer && otherPlayer.getPlayerState() === YT.PlayerState.PLAYING) {
                    otherPlayer.pauseVideo()
                  }
                })
              }

              if (
                event.data === YT.PlayerState.PAUSED ||
                event.data === YT.PlayerState.ENDED ||
                event.data === YT.PlayerState.UNSTARTED
              ) {
                setActiveIndex((currentIndex) => (currentIndex === index ? null : currentIndex))
              }
            },
          },
        })

        return player
      })
    }

    initPlayers()

    return () => {
      mounted = false
      playerRefs.current.forEach((player) => {
        if (player && typeof player.destroy === 'function') {
          player.destroy()
        }
      })
      playerRefs.current = []
    }
  }, [])

  const handlePlay = (index) => {
    const player = playerRefs.current[index]
    if (player && player.playVideo) {
      player.playVideo()
    }
  }

  return (
    <section className="about-video-gallery-section">
      <div className="about-video-gallery-inner">
        <div className="about-section-header">
          <span className="about-eyebrow">Welcome To Our Institute</span>
          <h2>Stories from the Sisters and the Institute</h2>
          <p>
            Watch videos that highlight the mission of the Poverelle Sisters and the
            life of the institute, with inspiring stories from campus and community.
          </p>
        </div>

        <div className="about-video-grid">
          {videos.map((video, index) => (
            <article key={video.src} className="about-video-card">
              <div className="about-video-frame">
                <iframe
                  id={`about-video-${index}`}
                  title={video.title}
                  src={video.src}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {activeIndex !== index && (
                  <div className="about-video-overlay">
                    <button
                      type="button"
                      className="about-video-play-button"
                      onClick={() => handlePlay(index)}
                      aria-label={`Play ${video.title}`}
                    >
                      <span className="about-video-play-icon" aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>
              <div className="about-video-copy">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
