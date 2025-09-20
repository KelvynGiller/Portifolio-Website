'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Github, Linkedin } from 'lucide-react'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('aboutme')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useTranslations('navigation')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['aboutme', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const navItems = [
    { id: 'aboutme', label: t('about') },
    { id: 'projects', label: t('projects') },
    { id: 'skills', label: t('skills') },
    { id: 'contact', label: t('contact') },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 glass-card p-3 rounded-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <span className={`block h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`block h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </div>
      </button>

      {/* Navigation */}
      <nav className={cn(
        "glass-card text-center fixed top-0 left-0 h-full z-40 flex flex-col glow-effect transition-transform duration-300",
        // Desktop
        "w-1/2 p-8 pb-8 border-r-2 border-white/30",
        // Mobile
        "lg:w-1/2 w-full p-4 pb-6 sm:p-6 sm:pb-8",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="logo mt-6 relative">
          <Image
            src="/images/WhatsApp Image 2024-09-02 at 16.37.42.jpeg"
            alt="Profile Photo"
            width={288}
            height={288}
            className="rounded-full w-48 h-48 lg:w-72 lg:h-72 object-cover border-4 border-white/30 mx-auto floating-animation glow-effect"
            priority
          />
          <Link href="#" className="gradient-text text-2xl lg:text-4xl mt-4 block font-barlow text-glow">
            Kelvyn Giller
          </Link>
          <h1 className="text-lg lg:text-xl text-blue-300 font-barlow text-glow">Full Stack Engineer</h1>
          
          {/* Ícones sociais no canto superior direito */}
          <div className="absolute top-0 right-0 flex flex-col space-y-2">
            <Link
              href="https://www.linkedin.com/in/kelvyn-giller-1b088114b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Linkedin className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400 hover:text-blue-300" />
            </Link>
            <Link
              href="https://github.com/KelvynGiller?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Github className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400 hover:text-blue-300" />
            </Link>
          </div>
        </div>
      
      <ul className="nav-links list-none p-0 mt-6 flex-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "nav-link block transition-all duration-300 text-lg lg:text-base",
                activeSection === item.id
                  ? "text-blue-400 text-glow"
                  : "text-white hover:text-blue-300",
                item.id === 'contact' && "glass-card px-6 py-3 mt-4 transition-transform transform hover:scale-105 w-40 mx-auto glow-effect"
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-col items-center space-y-4 mt-6">
      </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

    </>
  )
}

export default Navigation
