"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import GlassCard from "@/components/shared/GlassCard";

const ScheduleSection = () => {
  const schedule = [
    {
      day: "Day 1",
      date: "March 21, 2025",
      events: [
        {
          time: "09:00 AM",
          title: "Registration & Welcome",
          location: "Main Hall",
        },
        { time: "10:30 AM", title: "Opening Ceremony", location: "Auditorium" },
        { time: "01:00 PM", title: "Lunch Break", location: "Dining Area" },
        {
          time: "02:30 PM",
          title: "Leadership Workshop",
          location: "Conference Room A",
        },
      ],
    },
    {
      day: "Day 2",
      date: "March 22, 2025",
      events: [
        { time: "08:00 AM", title: "Yoga & Meditation", location: "Gardens" },
        {
          time: "09:30 AM",
          title: "Innovation Challenge Kickoff",
          location: "Tech Hub",
        },
        { time: "01:00 PM", title: "Networking Lunch", location: "Lounge" },
        {
          time: "03:00 PM",
          title: "Cultural Performances",
          location: "Amphitheater",
        },
      ],
    },
    {
      day: "Day 3",
      date: "March 23, 2025",
      events: [
        {
          time: "08:30 AM",
          title: "Adventure Activity",
          location: "Outdoor Area",
        },
        {
          time: "11:00 AM",
          title: "Sustainability Seminar",
          location: "Conference Room B",
        },
        { time: "01:00 PM", title: "Award Ceremony", location: "Auditorium" },
        {
          time: "04:00 PM",
          title: "Closing Remarks & Farewell",
          location: "Main Hall",
        },
      ],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Event Timeline"
          title="Conference Schedule"
          description="Three days of immersive learning, networking, and unforgettable experiences"
        />

        {/* Schedule Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {schedule.map((day, dayIdx) => (
            <motion.div key={day.day} variants={itemVariants}>
              <GlassCard className="h-full">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-1">
                      {day.day}
                    </h3>
                    <p className="text-foreground/60">{day.date}</p>
                  </div>

                  <div className="space-y-4 border-t border-accent/20 pt-6">
                    {day.events.map((event, idx) => (
                      <motion.div
                        key={event.title}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 group-hover:scale-150 transition-transform duration-300" />
                          </div>
                          <div className="flex-grow">
                            <p className="text-sm font-semibold text-accent">
                              {event.time}
                            </p>
                            <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                              {event.title}
                            </p>
                            <p className="text-xs text-foreground/50">
                              {event.location}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 glass rounded-xl text-center"
        >
          <p className="text-lg text-foreground/70 mb-4">
            Complete schedule and special events will be announced closer to the
            conference date
          </p>
          <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300">
            Get Full Schedule
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
