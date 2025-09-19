'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Github, Linkedin } from 'lucide-react'
import LanguageSwitch from './LanguageSwitch'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('aboutme')
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
    <nav className="w-1/2 glass-card text-center fixed top-0 left-0 h-full p-8 border-r-2 border-white/30 z-10 flex flex-col glow-effect">
      <div className="logo mt-6">
        <Image
          src="/images/WhatsApp Image 2024-09-02 at 16.37.42.jpeg"
          alt="Profile Photo"
          width={288}
          height={288}
          className="rounded-full w-72 h-72 object-cover border-4 border-white/30 mx-auto floating-animation glow-effect"
          priority
        />
        <Link href="#" className="gradient-text text-4xl mt-4 block font-barlow text-glow">
          Kelvyn Giller
        </Link>
        <h1 className="text-xl text-blue-300 font-barlow text-glow">Full Stack Engineer</h1>
      </div>
      
      <ul className="nav-links list-none p-0 mt-6 flex-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className={cn(
                "nav-link block transition-all duration-300",
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
        <LanguageSwitch />
        <div className="social-icons flex flex-col items-center space-y-2">
          <Link
            href="https://www.linkedin.com/in/kelvyn-giller-1b088114b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <Linkedin className="social-icon" />
          </Link>
          <Link
            href="https://github.com/KelvynGiller?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <Github className="social-icon" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
