import '../styles/about.css'
import HeroSection from '../components/about/HeroSection'
import HistorySection from '../components/about/HistorySection'
import SistersRoleSection from '../components/about/SistersRoleSection'
import VisionMissionSection from '../components/about/VisionMissionSection'
import InfrastructureSection from '../components/about/InfrastructureSection'
import ManagementSection from '../components/about/ManagementSection'
import DepartmentsSection from '../components/about/DepartmentsSection'
import RecognitionSection from '../components/about/RecognitionSection'
import ContactSection from '../components/about/ContactSection'

export default function About() {
  return (
    <>
      <HeroSection />
      <HistorySection />
      <SistersRoleSection />
      <VisionMissionSection />
      <InfrastructureSection />
      <ManagementSection />
      <DepartmentsSection />
      <RecognitionSection />
      <ContactSection />
    </>
  )
}
