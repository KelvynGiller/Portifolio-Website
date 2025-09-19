import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import BackgroundEffect from '@/components/BackgroundEffect'

export default function Home() {
  return (
    <div className="flex">
      <div className="bg-effect"></div>
      <BackgroundEffect />
      <Navigation />
      <main className="flex-1 ml-[50%] p-6">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}
