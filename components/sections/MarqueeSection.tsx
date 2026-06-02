"use client";

import React from "react";
import { motion } from "framer-motion";

const MarqueeSection = () => {
  const words = [
    "परिवर्तन",
    "Leadership",
    "Unity",
    "Interact District 3292",
    "Sustainability",
    "Nepal",
    "Change",
    "Youth",
    "Chitwan",
  ];

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-r from-primary/20 via-transparent to-accent/20">
      {/* Multiple rows of marquee text */}
      {[0, 1, 2].map((row) => (
        <div key={row} className="mb-8 overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
            style={{
              transform: row % 2 === 1 ? "scaleX(-1)" : "scaleX(1)",
            }}
          >
            {/* First set */}
            {words.map((word, idx) => (
              <motion.span
                key={`${word}-1-${idx}`}
                className="text-4xl md:text-6xl font-bold text-foreground/30 hover:text-accent transition-colors duration-300 flex-shrink-0"
                style={{
                  transform: row % 2 === 1 ? "scaleX(-1)" : "scaleX(1)",
                }}
              >
                {word}
              </motion.span>
            ))}
            {/* Duplicate for seamless loop */}
            {words.map((word, idx) => (
              <motion.span
                key={`${word}-2-${idx}`}
                className="text-4xl md:text-6xl font-bold text-foreground/30 hover:text-accent transition-colors duration-300 flex-shrink-0"
                style={{
                  transform: row % 2 === 1 ? "scaleX(-1)" : "scaleX(1)",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      ))}

      {/* Center text overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h3 className="text-3xl md:text-5xl font-bold text-accent text-center drop-shadow-lg">
          Join the Movement
        </h3>
      </div>
    </section>
  );
};

export default MarqueeSection;
