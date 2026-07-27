import '../styles/about.css'
import HeroSection from '../components/about/HeroSection'
import HistorySection from '../components/about/HistorySection'
import SistersRoleSection from '../components/about/SistersRoleSection'
import VisionMissionSection from '../components/about/VisionMissionSection'
import InfrastructureSection from '../components/about/InfrastructureSection'
import DepartmentsSection from '../components/about/DepartmentsSection'
import ContactSection from '../components/about/ContactSection'
import VideoGallerySection from '../components/about/VideoGallerySection'

export default function About() {
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
    </>
  )
}
