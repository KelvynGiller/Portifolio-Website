'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Skill } from '@/types'

const skills: Skill[] = [
  { name: 'HTML', icon: '/images/html.png', level: 'advanced' },
  { name: 'CSS', icon: '/images/icons8-css-50.png', level: 'advanced' },
  { name: 'JavaScript', icon: '/images/icons8-javascript-50.png', level: 'advanced' },
  { name: 'React', icon: '/images/icons8-react-js-50.png', level: 'advanced' },
  { name: 'NextJS', icon: '/images/icons8-nextjs-96.png', level: 'intermediate' },
  { name: 'NestJS', icon: '/images/icons8-carregou-96.png', level: 'advanced' },
  { name: 'NodeJS', icon: '/images/icons8-javascript-50.png', level: 'advanced' },
  { name: 'Express', icon: '/images/icons8-express-js-50.png', level: 'intermediate' },
  { name: 'Redux', icon: '/images/icons8-redux-50.png', level: 'intermediate' },
  { name: 'SQL', icon: '/images/icons8-sql-50.png', level: 'intermediate' },
  { name: 'Docker', icon: '/images/icons8-docker-80.png', level: 'intermediate' },
  { name: 'AWS', icon: '/images/icons8-aws-96.png', level: 'intermediate' },
  { name: 'AzureDevOps', icon: '/images/icons8-azure-devops-96.png', level: 'beginner' },
  { name: 'DevOps', icon: '/images/icons8-devops-100.png', level: 'intermediate' },
  { name: 'Git', icon: '/images/icons8-git-50.png', level: 'advanced' },
]

const SkillsSection = () => {
  const t = useTranslations('skills')
  
  return (
    <section className="skills mb-12" id="skills">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl mb-8 font-barlow gradient-text text-glow"
      >
        {t('title')}
      </motion.h1>
      
      <div className="relative py-8">
        {/* Container com overflow hidden para controlar o carrossel */}
        <div className="relative overflow-hidden h-64">
          {/* Carrossel infinito */}
          <div className="flex gap-6 animate-scroll items-center absolute top-0 left-0 w-full h-full">
          {/* Skills duplicadas para efeito infinito */}
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className="group relative flex-shrink-0 flex flex-col items-center cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={56}
                    height={56}
                    className="skill-icon filter drop-shadow-lg"
                  />
                </motion.div>
                
                {/* Tooltip com estilo do app */}
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 glass-card text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[999999] mt-2"
                  style={{ zIndex: 999999 }}
                >
                  {skill.name} - {t(`levels.${skill.level}`)}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-white/30"></div>
                </div>
              </div>
              
              {/* Level indicator animado */}
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                {skill.level === 'advanced' && (
                  <motion.div 
                    className="w-full h-full bg-blue-500 rounded-full glow-effect"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                {skill.level === 'intermediate' && (
                  <motion.div 
                    className="w-full h-full bg-cyan-500 rounded-full glow-effect"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                {skill.level === 'beginner' && (
                  <motion.div 
                    className="w-full h-full bg-teal-500 rounded-full glow-effect"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
          </div>
        </div>
        
      </div>
      
      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-8 flex justify-center gap-6 text-sm"
      >
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 bg-blue-500 rounded-full glow-effect"></div>
                 <span>{t('levels.advanced')}</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 bg-cyan-500 rounded-full glow-effect"></div>
                 <span>{t('levels.intermediate')}</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 bg-teal-500 rounded-full glow-effect"></div>
                 <span>{t('levels.beginner')}</span>
               </div>
      </motion.div>
    </section>
  )
}

export default SkillsSection
