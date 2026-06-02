"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import GlassCard from "@/components/shared/GlassCard";

const SponsorSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const sponsors = [
    {
      id: 1,
      name: "Rotary International",
      type: "Platinum Sponsor",
      logo: "🛞",
      description: "Global Service Organization",
      color: "from-primary/20 to-primary/5",
    },
    {
      id: 2,
      name: "Tech Innovators Ltd",
      type: "Gold Sponsor",
      logo: "💻",
      description: "Technology Partner",
      color: "from-yellow-500/20 to-yellow-500/5",
    },
    {
      id: 3,
      name: "Green Future Foundation",
      type: "Gold Sponsor",
      logo: "🌱",
      description: "Sustainability Focus",
      color: "from-green-500/20 to-green-500/5",
    },
    {
      id: 4,
      name: "Youth Empowerment Co",
      type: "Silver Sponsor",
      logo: "👥",
      description: "Education & Development",
      color: "from-accent/20 to-accent/5",
    },
    {
      id: 5,
      name: "Global Impact Partners",
      type: "Silver Sponsor",
      logo: "🌐",
      description: "International Network",
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      id: 6,
      name: "NextGen Solutions",
      type: "Silver Sponsor",
      logo: "🚀",
      description: "Innovation Leader",
      color: "from-purple-500/20 to-purple-500/5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      {/* Floating animated elements */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-52 h-52 bg-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Partners"
          title="Trusted by Leading Organizations"
          description="Join our community of visionary partners shaping the future"
        />

        {/* Sponsors Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(sponsor.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="h-full"
            >
              <GlassCard
                className={`h-full cursor-pointer transition-all duration-300 ${
                  hoveredId === sponsor.id
                    ? "ring-2 ring-accent shadow-lg shadow-accent/20"
                    : ""
                }`}
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${sponsor.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative space-y-4">
                  {/* Logo */}
                  <motion.div
                    animate={{
                      scale: hoveredId === sponsor.id ? 1.1 : 1,
                      rotate: hoveredId === sponsor.id ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl"
                  >
                    {sponsor.logo}
                  </motion.div>

                  {/* Sponsor Name */}
                  <div>
                    <motion.h3
                      className="text-xl font-bold text-foreground transition-colors"
                      animate={{
                        color:
                          hoveredId === sponsor.id
                            ? "rgb(251, 133, 0)"
                            : "rgb(240, 240, 240)",
                      }}
                    >
                      {sponsor.name}
                    </motion.h3>
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                      {sponsor.type}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {sponsor.description}
                  </p>

                  {/* Animated line */}
                  <motion.div
                    className="h-px bg-gradient-to-r from-accent/50 to-transparent"
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    animate={{
                      scaleX: hoveredId === sponsor.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Learn More Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredId === sponsor.id ? 1 : 0,
                      y: hoveredId === sponsor.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-accent text-sm font-semibold"
                  >
                    <span>Explore Partnership</span>
                    <motion.span
                      animate={{ x: hoveredId === sponsor.id ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 p-12 glass rounded-2xl text-center"
        >
          <p className="text-foreground/70 mb-4">
            Interested in becoming a sponsor?
          </p>
          <motion.a
            href="https://instagram.com/interactdistrict3292"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent to-golden-yellow text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
            aria-label="Contact our team on Instagram"
          >
            Contact Our Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorSection;
