import { Link } from 'react-router-dom'

const NotFound = () => (
  <section className="section-block not-found-block">
    <span className="eyebrow">Page not found</span>
    <h2>Sorry, we could not find that page.</h2>
    <p>
      The page may have moved, or the URL may be incorrect. Return to the home page to continue browsing.
    </p>
    <Link className="site-button" to="/">
      Go home
    </Link>
  </section>
)

export default NotFound
