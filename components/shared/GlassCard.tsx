'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: 'default' | 'dark'
  animate?: boolean
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  onClick,
  variant = 'default',
  animate = true,
}) => {
  const baseClass = variant === 'dark' ? 'glass-dark' : 'glass'
  const Component = animate ? motion.div : 'div'

  return (
    <Component
      className={`${baseClass} rounded-xl p-6 cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={animate ? { scale: 1.02, y: -5 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </Component>
  )
}

export default GlassCard
