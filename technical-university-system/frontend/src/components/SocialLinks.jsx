const SocialLinks = ({ className = 'social-links', iconClass = 'social-link' }) => {
  return (
    <div className={className}>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Facebook"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 22v-8h2.5l.5-3h-3V7.5c0-.9.3-1.5 1.6-1.5H16V3.1c-.3-.1-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.4V11H7v3h2v8h4.5z" />
        </svg>
      </a>

      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="X"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.9 2h3.4l-7.5 8.6L22.9 22h-6.8l-5.3-7.2L4.7 22H1.3l8-9.2L1 2h7l4.8 6.5L18.9 2zm-1.2 18h1.9L7.2 3.9H5.2L17.7 20z" />
        </svg>
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Instagram"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.25-3.35a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15z" />
        </svg>
      </a>
    </div>
  )
}

export default SocialLinks
