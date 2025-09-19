'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Project } from '@/types'

const ProjectsSection = () => {
  const t = useTranslations('projects')
  
  const projects: Project[] = [
    {
      id: 'groove-store',
      title: t('grooveStore.title'),
      description: t('grooveStore.description'),
      url: 'https://groove-store-t1s5.onrender.com/',
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'SQL', 'Firebase', 'Stripe']
    },
    {
      id: 'ecommerce-api',
      title: t('ecommerceApi.title'),
      description: t('ecommerceApi.description'),
      url: 'https://github.com/KelvynGiller/E-commerce-REST-API',
      githubUrl: 'https://github.com/KelvynGiller/E-commerce-REST-API',
      technologies: ['Node.js', 'Express', 'SQL', 'JWT', 'Swagger']
    },
    {
      id: 'reddit-mini',
      title: t('redditMini.title'),
      description: t('redditMini.description'),
      url: 'https://github.com/KelvynGiller/reddit-mini-app',
      githubUrl: 'https://github.com/KelvynGiller/reddit-mini-app',
      technologies: ['React', 'Redux', 'Reddit API']
    },
    {
      id: 'jamming',
      title: t('jamming.title'),
      description: t('jamming.description'),
      url: 'https://github.com/KelvynGiller/Jamming',
      githubUrl: 'https://github.com/KelvynGiller/Jamming',
      technologies: ['React', 'Spotify API']
    }
  ]
  
  return (
    <section className="projects mb-12" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl mb-4 font-barlow"
      >
        {t('title')}
      </motion.h1>
      
      <div className="card-container flex flex-col gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
                   className="card glass-card p-8 rounded-2xl shadow-2xl card-hover group glow-effect"
          >
            <div className="flex items-start justify-between mb-3">
                     <h3 className="text-blue-400 text-2xl font-barlow group-hover:text-white transition-colors text-glow">
                {project.title}
              </h3>
              <div className="flex gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 transition-colors"
                >
                         <ExternalLink className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            
                   <p className="text-gray-200 mb-6 group-hover:text-white transition-colors text-lg leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                         className="px-3 py-2 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30 group-hover:bg-blue-500/30 group-hover:border-blue-400 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
