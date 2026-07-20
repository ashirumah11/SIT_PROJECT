import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const MainLayout = () => (
  <div className="app-shell">
    <div className="announcement-bar">
      <span>ADMISSIONS OPEN FOR SEPTEMBER 2026 INTAKE</span>
      <a href="/prospectus.pdf" target="_blank" rel="noreferrer">
        Download prospectus
      </a>
    </div>
    <Navbar />
    <main className="page-content">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default MainLayout
