'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedButton from '@/components/shared/AnimatedButton'
import LazyImage from '@/components/shared/LazyImage'

const CTASection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 30,
        y: (e.clientY / window.innerHeight) * 30,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[600px] py-20 px-4 overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
          alt="CTA Background"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/90" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0,
            }}
            animate={{
              y: ['110%', '-10%'],
              opacity: [0, Math.random() * 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <motion.div
          animate={{ y: mousePosition.y * 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-accent font-semibold text-lg tracking-widest uppercase"
          >
            Ready to Make a Difference?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-foreground text-glow"
          >
            Join the Movement
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            Be part of a transformative experience that will shape your future and inspire meaningful change. Register today and join hundreds of young leaders committed to making a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <AnimatedButton size="lg" variant="primary">
              Register Now
            </AnimatedButton>
            <AnimatedButton size="lg" variant="outline">
              Contact Us
            </AnimatedButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {[
              { value: '500+', label: 'Expected Delegates' },
              { value: '50+', label: 'Partner Clubs' },
              { value: '100%', label: 'Life-Changing' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="p-4 glass rounded-lg"
              >
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
