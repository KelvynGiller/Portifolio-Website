'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const HeroSection = () => {
  const t = useTranslations('hero')
  
  return (
    <section className="hero mb-12" id="aboutme">
      <div className="hero-container flex gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-text-container glass-card p-8 rounded-2xl w-full glow-effect"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl mb-6 font-barlow gradient-text text-glow"
          >
            {t('welcome')}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl mb-6 font-barlow text-blue-300 text-glow"
          >
            {t('aboutTitle')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-200 text-justify space-y-6 text-lg leading-relaxed"
          >
            <p>{t('description1')}</p>
            <p>{t('description2')}</p>
            <p>{t('description3')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
