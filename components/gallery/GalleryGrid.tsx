"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import GalleryCard from "./GalleryCard";
import SectionHeading from "@/components/shared/SectionHeading";

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Fellowship",
    "Sessions",
    "Culture",
    "Adventure",
    "Leadership",
  ];

  const galleryItems = [
    {
      id: 1,
      category: "Fellowship",
      title: "Team Bonding",
      size: "medium" as const,
    },
    {
      id: 2,
      category: "Sessions",
      title: "Leadership Talk",
      size: "small" as const,
    },
    {
      id: 3,
      category: "Culture",
      title: "Cultural Dance",
      size: "large" as const,
    },
    {
      id: 4,
      category: "Adventure",
      title: "Mountain Trek",
      size: "small" as const,
    },
    {
      id: 5,
      category: "Leadership",
      title: "Conference Hall",
      size: "medium" as const,
    },
    {
      id: 6,
      category: "Fellowship",
      title: "Group Photo",
      size: "small" as const,
    },
    { id: 7, category: "Sessions", title: "Workshop", size: "medium" as const },
    {
      id: 8,
      category: "Culture",
      title: "Traditional Art",
      size: "small" as const,
    },
    {
      id: 9,
      category: "Adventure",
      title: "Outdoor Activity",
      size: "large" as const,
    },
    {
      id: 10,
      category: "Leadership",
      title: "Award Ceremony",
      size: "small" as const,
    },
    {
      id: 11,
      category: "Fellowship",
      title: "Network Night",
      size: "medium" as const,
    },
    {
      id: 12,
      category: "Sessions",
      title: "Panel Discussion",
      size: "small" as const,
    },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Visual Journey"
          title="Conference Glimpses"
          description="Moments and memories from our incredible conference"
        />

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mt-12 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/50"
                  : "glass text-foreground hover:text-accent"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              className={
                item.size === "large"
                  ? "col-span-2 row-span-2"
                  : item.size === "medium"
                    ? "col-span-1 row-span-2"
                    : ""
              }
            >
              <GalleryCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-3 glass rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryGrid;
