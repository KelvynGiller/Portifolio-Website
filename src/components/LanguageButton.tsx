'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { cn } from '@/lib/utils'
import { Globe } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' }
]

const LanguageButton = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.language-dropdown')) {
        setIsLanguageOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
    setIsLanguageOpen(false)
  }

  return (
    <div className="language-dropdown fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        className="glass-card p-3 rounded-lg hover:bg-white/20 transition-colors duration-200 border border-white/20 hover:border-blue-500/50 glow-effect"
        title="Change Language"
      >
        <Globe className="w-5 h-5 text-blue-400 hover:text-blue-300" />
      </button>

      {/* Language Dropdown */}
      {isLanguageOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 glass-card rounded-lg shadow-2xl border border-white/20 z-50 overflow-hidden glow-effect">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 text-left",
                "text-white hover:text-blue-400 transition-colors",
                "border-b border-white/10 last:border-b-0 hover:bg-white/10"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
              </div>
              {locale === language.code && (
                <div className="text-blue-500">
                  ✓
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageButton
