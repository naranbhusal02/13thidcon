'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/shared/SectionHeading'
import GlassCard from '@/components/shared/GlassCard'
import LazyImage from '@/components/shared/LazyImage'

const ExperienceSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const experiences = [
    {
      id: 1,
      title: 'Leadership Workshops',
      description: 'Interactive sessions with industry leaders and renowned speakers',
      icon: '🎓',
    },
    {
      id: 2,
      title: 'Cultural Exchange',
      description: 'Celebrate diversity through performances and cultural showcases',
      icon: '🎭',
    },
    {
      id: 3,
      title: 'Adventure Activities',
      description: 'Team building and outdoor activities in stunning locations',
      icon: '🏔️',
    },
    {
      id: 4,
      title: 'Networking Events',
      description: 'Connect with fellow leaders and build lasting friendships',
      icon: '🤝',
    },
    {
      id: 5,
      title: 'Innovation Challenge',
      description: 'Showcase your ideas and compete for recognition',
      icon: '🚀',
    },
    {
      id: 6,
      title: 'Sustainable Initiatives',
      description: 'Hands-on projects focused on environmental impact',
      icon: '🌱',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What to Expect"
          title="Unforgettable Experiences"
          description="Six days packed with learning, growth, and meaningful connections"
        />

        {/* Experience Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(experience.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <GlassCard className="h-full relative overflow-hidden group">
                {/* Hover Background Image */}
                <motion.div
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  animate={
                    hoveredId === experience.id
                      ? { scale: 1.1 }
                      : { scale: 1 }
                  }
                >
                  <LazyImage
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
                    alt="Experience"
                    className="w-full h-full"
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <motion.div
                    animate={
                      hoveredId === experience.id
                        ? { scale: 1.2 }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.3 }}
                    className="text-5xl mb-4 origin-left"
                  >
                    {experience.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-foreground/70">
                    {experience.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-accent to-golden-yellow rounded-full"
                    animate={
                      hoveredId === experience.id
                        ? { scaleX: 1, opacity: 1 }
                        : { scaleX: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-foreground/70 mb-6">
            Ready to be part of something extraordinary?
          </p>
          <motion.button
            className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Secure Your Spot
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
