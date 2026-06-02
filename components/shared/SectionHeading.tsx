'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  animate?: boolean
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
  centered = true,
  animate = true,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      className={`space-y-4 ${centered ? 'text-center' : ''}`}
      variants={animate ? containerVariants : undefined}
      initial={animate ? 'hidden' : undefined}
      whileInView={animate ? 'visible' : undefined}
      viewport={{ once: true }}
    >
      {subtitle && (
        <motion.p
          className="text-accent font-semibold text-sm tracking-widest uppercase"
          variants={animate ? itemVariants : undefined}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-glow"
        variants={animate ? itemVariants : undefined}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className="text-foreground/70 text-lg max-w-2xl mx-auto"
          variants={animate ? itemVariants : undefined}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionHeading
