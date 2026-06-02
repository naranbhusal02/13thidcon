"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/shared/AnimatedButton";
import LazyImage from "@/components/shared/LazyImage";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20 flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
          alt="Hero Background"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background/80" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5,
            }}
            animate={{
              y: ["-10%", "110%"],
              opacity: [0, Math.random() * 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              animate={{ y: mousePosition.y }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-accent font-semibold text-lg">Welcome To</p>
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-2 text-glow">
                परिवर्तन
              </h1>
              <p className="text-2xl md:text-3xl text-accent font-bold">
                Be The Change That Saves Tomorrow
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-foreground/70 text-lg leading-relaxed max-w-lg"
            >
              Join Interact District 3292 for an unforgettable conference
              celebrating leadership, unity, and sustainable change. Experience
              three days of inspiration, learning, and connection with young
              leaders from around the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <AnimatedButton size="lg" variant="primary">
                Register Now
              </AnimatedButton>
              <AnimatedButton size="lg" variant="outline">
                Learn More
              </AnimatedButton>
            </motion.div>
          </motion.div>

          {/* Right Decorative Element */}
          <motion.div
            animate={{ y: mousePosition.y * 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-full aspect-square">
              {/* Glowing circles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-accent/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20 + i * 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    scale: 0.8 - i * 0.2,
                  }}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-foreground/60 text-sm">Scroll to explore</p>
          <ChevronDown className="text-accent" size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
