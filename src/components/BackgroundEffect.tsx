'use client'

import { useEffect } from 'react'

const BackgroundEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const scrollX = window.scrollX
      const scrollY = window.scrollY

      const xPos = ((e.pageX - scrollX) / window.innerWidth) * 100
      const yPos = ((e.pageY - scrollY) / window.innerHeight) * 100

      const backgroundEffect = document.querySelector('.bg-effect') as HTMLElement
      if (backgroundEffect) {
        backgroundEffect.style.backgroundImage = `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 0%, transparent 30%)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return null
}

export default BackgroundEffect
