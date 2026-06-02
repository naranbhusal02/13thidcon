"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import GlassCard from "@/components/shared/GlassCard";

const ThemeSection = () => {
  const pillars = [
    {
      title: "Leadership",
      description:
        "Inspiring the next generation to lead with purpose and vision",
      icon: "🎯",
    },
    {
      title: "Fellowship",
      description:
        "Building meaningful connections across cultures and borders",
      icon: "🤝",
    },
    {
      title: "Sustainability",
      description: "Creating lasting change for a better tomorrow",
      icon: "🌍",
    },
    {
      title: "Innovation",
      description: "Pushing boundaries with creative solutions",
      icon: "💡",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Core Values"
          title="The Pillars of परिवर्तन"
          description="Our conference is built on four fundamental pillars that guide everything we do"
        />

        {/* Pillars Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pillars.map((pillar, idx) => (
            <motion.div key={pillar.title} variants={itemVariants}>
              <GlassCard className="h-full group">
                <div className="space-y-4">
                  <div className="text-5xl mb-4">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-foreground/70">{pillar.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Theme Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 p-12 glass rounded-2xl text-center space-y-6"
        >
          <p className="text-accent font-semibold uppercase tracking-widest">
            Theme
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-glow">
            Changing the World, One Leader at a Time
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            In a world facing unprecedented challenges, we believe that
            meaningful change begins with empowered young leaders. This
            conference brings together exceptional individuals committed to
            sustainability, innovation, and creating a positive impact on
            society.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-accent/20">
            {[
              { label: "200+", value: "Attendees" },
              { label: "20+", value: "Clubs" },
              { label: "5+", value: "Speakers" },
              { label: "3", value: "Days" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-bold text-accent">{stat.label}</p>
                <p className="text-foreground/60">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThemeSection;
