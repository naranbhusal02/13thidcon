'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const FloatingCTA = () => {
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setMousePosition({ x: x * 0.2, y: y * 0.2 })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <>
      <motion.button
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Heart size={24} />
        </motion.div>
      </motion.button>

      {/* Glow effect */}
      <motion.div
        animate={isHovered ? { opacity: 1 } : { opacity: 0.5 }}
        className="fixed bottom-8 right-8 z-30 w-16 h-16 rounded-full bg-accent/30 blur-xl pointer-events-none"
      />
    </>
  )
}

export default FloatingCTA
