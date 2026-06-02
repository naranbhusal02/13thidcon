'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/shared/SectionHeading'
import GlassCard from '@/components/shared/GlassCard'

interface Sponsor {
  id: number
  name: string
  category: string
  logo: string
  description: string
  color: string
}

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: 'Rotary Foundation',
    category: 'Platinum',
    logo: '🏛️',
    description: 'Empowering service leadership',
    color: 'from-blue-600 to-blue-400',
  },
  {
    id: 2,
    name: 'Tech Innovations',
    category: 'Gold',
    logo: '💻',
    description: 'Building tomorrow\'s technology',
    color: 'from-yellow-500 to-amber-400',
  },
  {
    id: 3,
    name: 'Global Impact Co',
    category: 'Gold',
    logo: '🌍',
    description: 'Making a worldwide difference',
    color: 'from-green-500 to-emerald-400',
  },
  {
    id: 4,
    name: 'Youth Leaders Fund',
    category: 'Silver',
    logo: '⭐',
    description: 'Supporting the next generation',
    color: 'from-purple-500 to-pink-400',
  },
  {
    id: 5,
    name: 'Education Initiative',
    category: 'Silver',
    logo: '📚',
    description: 'Investing in learning',
    color: 'from-orange-500 to-red-400',
  },
  {
    id: 6,
    name: 'Community Partners',
    category: 'Silver',
    logo: '🤝',
    description: 'Connected communities',
    color: 'from-cyan-500 to-blue-400',
  },
]

const SponsorsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Platinum', 'Gold', 'Silver']
  const filteredSponsors =
    selectedCategory === 'All'
      ? sponsors
      : sponsors.filter((s) => s.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <SectionHeading
          title="Our Sponsors"
          subtitle="Partner organizations making this conference possible"
          showPattern={true}
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/50'
                  : 'bg-card text-foreground hover:bg-card/80 border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <GlassCard>
                <div className="relative h-full flex flex-col">
                  {/* Sponsor Logo */}
                  <div
                    className={`h-24 rounded-lg bg-gradient-to-br ${sponsor.color} flex items-center justify-center text-6xl mb-4 shadow-lg`}
                  >
                    {sponsor.logo}
                  </div>

                  {/* Sponsor Info */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {sponsor.name}
                    </h3>
                    <p className="text-accent font-semibold text-sm mb-3">
                      {sponsor.category} Partner
                    </p>
                    <p className="text-foreground/70 text-sm">
                      {sponsor.description}
                    </p>
                  </div>

                  {/* Animated Border */}
                  <div className="mt-4 pt-4 border-t border-accent/20">
                    <motion.div
                      className="h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent rounded-full"
                      animate={{
                        scaleX: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee sponsors animation at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-accent/20"
        >
          <p className="text-center text-foreground/60 text-sm mb-8">
            Interested in sponsoring? Contact us for partnership opportunities
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-accent/10 border border-accent/50 text-accent hover:bg-accent/20 transition-all duration-300 font-medium"
            >
              Become a Sponsor
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SponsorsSection
