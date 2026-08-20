const SocialLinks = ({ className = 'social-links', iconClass = 'social-link' }) => {
  return (
    <div className={className}>
      <a
        href="https://web.facebook.com/profile.php?id=61560170675898&_rdc=11&_rdr#"
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
        href="https://youtube.com/@st.louispalazzolotv?si=rWKx2OzkwOlIwmmp"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="YouTube"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.5 6.2c-.3-1.1-1.2-2-2.3-2.3C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.2.4c-1.1.3-2 1.2-2.3 2.3C0 7.9 0 12 0 12s0 4.1.5 5.8c.3 1.1 1.2 2 2.3 2.3 1.7.4 9.2.4 9.2.4s7.5 0 9.2-.4c1.1-.3 2-1.2 2.3-2.3.5-1.7.5-5.8.5-5.8s0-4.1-.5-5.8zM9.5 16.5v-9l6.2 4.5-6.2 4.5z" />
        </svg>
      </a>

      <a
        href="https://wa.me/254111380756"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.5 3.5A11.9 11.9 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.9 11.9 0 0 0 5.79 1.47h.01c6.58 0 11.94-5.35 11.94-11.93A11.9 11.9 0 0 0 20.5 3.5Zm-8.46 18.27h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.85 9.85 0 0 1-1.51-5.22C2.19 6.5 6.61 2.08 12.04 2.08a9.83 9.83 0 0 1 6.98 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.43-4.42 9.85-9.87 9.85Zm5.41-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.48-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>

      <a
        href="https://www.instagram.com/palazzolotech?igsh=MXc4bnI0aDlsMXZ3dg%3D%3D&utm_source=qr"
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
