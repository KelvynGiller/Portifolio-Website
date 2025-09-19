'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

const ContactSection = () => {
  const t = useTranslations('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/mdknjewv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact glass-card p-8 rounded-2xl glow-effect" id="contact">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl mb-6 font-barlow"
      >
        {t('title')}
      </motion.h1>
      
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="contact-form flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg font-montserrat">
            {t('form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t('form.namePlaceholder')}
            required
            className="p-4 rounded-lg border-2 border-blue-500/30 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none transition-all duration-300 focus:bg-white/20"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-montserrat">
            {t('form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t('form.emailPlaceholder')}
            required
            className="p-4 rounded-lg border-2 border-blue-500/30 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none transition-all duration-300 focus:bg-white/20"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-lg font-montserrat">
            {t('form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            placeholder={t('form.messagePlaceholder')}
            required
            className="p-4 rounded-lg border-2 border-blue-500/30 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none transition-all duration-300 focus:bg-white/20 resize-vertical"
          />
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed glow-effect hover:scale-105"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              {t('form.sending')}
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {t('form.sendButton')}
            </>
          )}
        </motion.button>
        
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
                   className="flex items-center gap-2 text-blue-400 glass-card p-4 rounded-lg glow-effect"
          >
            <CheckCircle className="w-5 h-5" />
            {t('form.success')}
          </motion.div>
        )}
        
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
                   className="flex items-center gap-2 text-red-400 glass-card p-4 rounded-lg glow-effect"
          >
            <AlertCircle className="w-5 h-5" />
            {t('form.error')}
          </motion.div>
        )}
      </motion.form>
    </section>
  )
}

export default ContactSection
