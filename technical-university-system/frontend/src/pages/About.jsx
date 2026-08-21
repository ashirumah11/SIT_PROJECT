import '../styles/about.css'
import { useEffect, useState } from 'react'
import HeroSection from '../components/about/HeroSection'
import HistorySection from '../components/about/HistorySection'
import SistersRoleSection from '../components/about/SistersRoleSection'
import VisionMissionSection from '../components/about/VisionMissionSection'
import InfrastructureSection from '../components/about/InfrastructureSection'
import DepartmentsSection from '../components/about/DepartmentsSection'
import ContactSection from '../components/about/ContactSection'
import VideoGallerySection from '../components/about/VideoGallerySection'

export default function About() {
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 520)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <HeroSection />
      <HistorySection />
      <SistersRoleSection />
      <VideoGallerySection />
      <VisionMissionSection />
      <InfrastructureSection />
      <DepartmentsSection />
      <ContactSection />
      {showTopButton && (
        <button
          type="button"
          className="scroll-top-button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  )
}
