import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import BackgroundEffect from '@/components/BackgroundEffect'
import LanguageButton from '@/components/LanguageButton'

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-effect"></div>
      <BackgroundEffect />
      <Navigation />
      <main className="flex-1 lg:ml-[50%] p-4 lg:p-6">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <LanguageButton />
    </div>
  )
}
