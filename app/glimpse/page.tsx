"use client";

import { motion } from "framer-motion";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import LazyImage from "@/components/shared/LazyImage";

export default function GlimpsePage() {
  return (
    <main className="w-full overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[400px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <LazyImage
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
            alt="Gallery Hero"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-foreground text-glow mb-4"
          >
            Glimpse Into परिवर्तन
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Explore moments and memories from past events that showcase the
            spirit of leadership and change
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <GalleryGrid />
    </main>
  );
}
