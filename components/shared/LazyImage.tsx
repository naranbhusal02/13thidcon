'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface LazyImageProps {
  src: string
  alt: string
  blurSrc?: string
  className?: string
  onLoad?: () => void
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  blurSrc = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%230F1729%22 width=%22400%22 height=%22300%22/%3E%3C/svg%3E',
  className = '',
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageUrl, setImageUrl] = useState(blurSrc)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image()
          img.onload = () => {
            setImageUrl(src)
            setIsLoaded(true)
            onLoad?.()
          }
          img.onerror = () => {
            setImageUrl(src)
            setIsLoaded(true)
          }
          img.src = src
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [src, onLoad])

  return (
    <motion.div
      ref={imgRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden ${className}`}
    >
      <img
        src={imageUrl}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'blur-0' : 'blur-md'
        }`}
        crossOrigin="anonymous"
      />
    </motion.div>
  )
}

export default LazyImage
