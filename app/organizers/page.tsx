"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import OrganizerCard from "@/components/organizers/OrganizerCard";
import LazyImage from "@/components/shared/LazyImage";

export default function OrganizersPage() {
  const teams = [
    {
      title: "Advisor",
      members: [
        {
          id: 1,
          name: "Rtn. Bipin Pokhrel",
          role: "Chief Advisor",
          club: "",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
      ],
    },
    {
      title: "Conference Chair",
      members: [
        {
          id: 2,
          name: "Itr. Sushan Adhikari",
          role: "Chair",
          club: "Interact Club of Narayangarh",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
      ],
    },
    {
      title: "Sponsorship & Creative",
      members: [
        {
          id: 3,
          name: "Itr. Bashudev Sapkota",
          role: "Co-Chair",
          club: "Interact Club of Narayangarh",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 4,
          name: "Itr. Sushant Gyawali",
          role: "Member",
          club: "Interact Club of Central Butwal",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 5,
          name: "Itr. Pragyan Regmi",
          role: "Member",
          club: "Interact Club of Central Butwal",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 6,
          name: "Itr. Aaryaman Pandit",
          role: "Member",
          club: "Interact Club of Evergreen",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
      ],
    },
    {
      title: "Marketing & Creative",
      members: [
        {
          id: 7,
          name: "Itr. Aarya Pandit",
          role: "Head",
          club: "Interact Club of Evergreen",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 8,
          name: "Itr. Parul Dulal",
          role: "Member",
          club: "Interact Club of Kathmandu",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 9,
          name: "Itr. Simla Dhital",
          role: "Member",
          club: "Interact Club of Peace Zone",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 10,
          name: "Itr. Pramoditti Pokhrel",
          role: "Member",
          club: "Interact Club of Lalitpur",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
      ],
    },
    {
      title: "Operation Team",
      members: [
        {
          id: 11,
          name: "Itr. Anurodh Koirala",
          role: "Head",
          club: "Interact Club of Valmiki",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 12,
          name: "Itr. Aaryaman Pandit",
          role: "Member",
          club: "Interact Club of Evergreen",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 13,
          name: "Itr. Pragyan Regmi",
          role: "Member",
          club: "Interact Club of Central Butwal",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 14,
          name: "Itr. Sunish Shrestha",
          role: "Member",
          club: "Interact Club of Ideal English Boarding",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 15,
          name: "Itr. Sujal K.C.",
          role: "Member",
          club: "Interact Club of Balodaya Pokhara",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
      ],
    },
    {
      title: "IT Team",
      members: [
        {
          id: 16,
          name: "Itr. Aayush Pokhrel",
          role: "Head",
          club: "Interact Club of Valmiki",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 17,
          name: "Itr. Prabesh Basnet",
          role: "Member",
          club: "Interact Club of Narayangarh",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 18,
          name: "Itr. Ravi Rajbhar",
          role: "Member",
          club: "Interact Club of Central Butwal",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 19,
          name: "Itr. Narayan Bhusal",
          role: "Member",
          club: "Interact Club of Butwal",
          quote: "",
          social: {
            email: "narayan@interactnepal.org",
            linkedin: "naranbhusal02",
            twitter: "naranbhusal02",
            instagram: "naranbhusal02",
          },
        },
      ],
    },
    {
      title: "Editorial Team",
      members: [
        {
          id: 20,
          name: "Itr. Netra Bhusal",
          role: "Head",
          club: "Interact Club of Devdaha",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 21,
          name: "Itr. Samriddhi Basyal",
          role: "Co-Head",
          club: "Interact Club of Matribhumi Baluwatar",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 22,
          name: "Itr. Suyog Adhikari",
          role: "Member",
          club: "Interact Club of Pokhara Lakeside",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 23,
          name: "Itr. Binita Acharya",
          role: "Member",
          club: "Interact Club of Devbhumi",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
      ],
    },
    {
      title: "Logistics Team",
      members: [
        {
          id: 24,
          name: "Itr. Sushant Gyawali",
          role: "Head",
          club: "Interact Club of Central Butwal",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 25,
          name: "Itr. Bishow Panthi",
          role: "Member",
          club: "Interact Club of Central Butwal",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 26,
          name: "Itr. Aaryan Gyawali",
          role: "Member",
          club: "Interact Club of Pokhara Lakeside",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 27,
          name: "Itr. Sujal K.C.",
          role: "Member",
          club: "Interact Club of Balodaya Pokhara",
          quote: "",
          social: { email: "", linkedin: "", twitter: "", instagram: "" },
        },
        {
          id: 28,
          name: "Itr. Rubi Poudel",
          role: "Member",
          club: "Interact Club of Pokhara Lakeside",
          quote: "",
          social: {
            email: "",
            linkedin: "",
            twitter: "",
            instagram: "",
          },
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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
    <main className="w-full overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[400px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <LazyImage
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
            alt="Organizers Hero"
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
            Meet The Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            The passionate people behind परिवर्तन
          </motion.p>
        </div>
      </section>

      {/* Teams */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {(() => {
            const blocks: any[] = [];
            for (let i = 0; i < teams.length; i++) {
              const t = teams[i];
              const next = teams[i + 1];
              if (
                t.title === "Advisor" &&
                next &&
                next.title === "Conference Chair"
              ) {
                blocks.push({ type: "pair", chief: t, chair: next });
                i++;
              } else {
                blocks.push({ type: "single", team: t });
              }
            }

            return blocks.map((block, idx) => {
              if (block.type === "pair") {
                const { chief, chair } = block;
                return (
                  <motion.div
                    key={`pair-${idx}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20 last:mb-0"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      <div>
                        <motion.h2
                          className="text-2xl md:text-3xl font-bold text-accent mb-6"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          {chief.title}
                        </motion.h2>
                        <OrganizerCard {...chief.members[0]} />
                      </div>

                      <div>
                        <motion.h2
                          className="text-2xl md:text-3xl font-bold text-accent mb-6"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.05 }}
                          viewport={{ once: true }}
                        >
                          {chair.title}
                        </motion.h2>
                        <OrganizerCard {...chair.members[0]} />
                      </div>
                    </div>
                  </motion.div>
                );
              }

              const team = block.team;
              return (
                <motion.div
                  key={`${team.title}-${idx}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-20 last:mb-0"
                >
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-accent mb-12 flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-1 bg-gradient-to-r from-accent to-golden-yellow rounded-full" />
                    {team.title}
                  </motion.h2>

                  <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {team.members.map((member) => {
                      const isCoreThird =
                        team.title === "Core Committee" && member.id === 3;
                      return (
                        <motion.div
                          key={member.id}
                          variants={itemVariants}
                          className={
                            isCoreThird
                              ? "md:col-span-3 md:flex md:justify-center"
                              : ""
                          }
                        >
                          <div
                            className={isCoreThird ? "w-full md:max-w-xl" : ""}
                          >
                            <OrganizerCard {...member} />
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              );
            });
          })()}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-glow">
              Meet Us With
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: "200+", label: "Attendees" },
                { value: "20+", label: "Clubs" },
                { value: "5+", label: "Mentors/Speakers" },
                { value: "∞", label: "Passion" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-foreground/60 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
