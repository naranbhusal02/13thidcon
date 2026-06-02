'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const baseClass = 'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2'

  const variantClass = {
    primary: 'bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/50',
    secondary: 'bg-secondary text-foreground hover:bg-secondary/80',
    outline: 'border-2 border-accent text-accent hover:bg-accent/10',
  }

  const sizeClass = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${className}`}
      whileHover={!disabled ? { scale: 1.05 } : undefined}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton
