'use client'

import { ReactNode, useState } from 'react'

interface TooltipProps {
  content: string
  children: ReactNode
}

const Tooltip = ({ content, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      {isVisible && (
        <div className="fixed left-1/2 transform -translate-x-1/2 glass-card text-white text-sm py-2 rounded-lg whitespace-nowrap glow-effect backdrop-blur-md pointer-events-none" style={{ zIndex: 999999 }}>
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white/30"></div>
        </div>
      )}
    </div>
  )
}

export default Tooltip
