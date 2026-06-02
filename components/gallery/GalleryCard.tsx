'use client'

import React from 'react'
import { motion } from 'framer-motion'
import LazyImage from '@/components/shared/LazyImage'

interface GalleryCardProps {
  id: number
  category: string
  title: string
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  id,
  category,
  title,
  size = 'small',
  onClick,
}) => {
  const sizeClasses = {
    small: 'aspect-square',
    medium: 'aspect-[4/5]',
    large: 'aspect-[3/4]',
  }

  const rotations = [
    'rotate-1',
    '-rotate-2',
    'rotate-3',
    '-rotate-1',
    'rotate-2',
    '-rotate-3',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`relative group cursor-pointer overflow-hidden rounded-xl ${sizeClasses[size]} ${
        rotations[id % 6]
      }`}
    >
      {/* Image */}
      <LazyImage
        src={`https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop&dpr=2&h=${size === 'small' ? 400 : size === 'medium' ? 500 : 600}`}
        alt={title}
        className="w-full h-full"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ y: 20 }}
        whileHover={{ y: 0 }}
      >
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-1">
          {category}
        </p>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </motion.div>

      {/* Border Glow on Hover */}
      <motion.div
        className="absolute inset-0 border-2 border-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ boxShadow: '0 0 0px rgba(251, 133, 0, 0)' }}
        whileHover={{ boxShadow: '0 0 20px rgba(251, 133, 0, 0.5)' }}
      />
    </motion.div>
  )
}

export default GalleryCard
