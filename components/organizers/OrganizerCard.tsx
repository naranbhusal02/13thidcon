"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";

interface OrganizerCardProps {
  id: number;
  name: string;
  role: string;
  club?: string;
  quote?: string;
  avatar?: string;
  social?: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const OrganizerCard: React.FC<OrganizerCardProps> = ({
  id,
  name,
  role,
  club,
  quote,
  social,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) * 0.1,
      y: (e.clientY - rect.top - rect.height / 2) * 0.1,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const colors = [
    "from-accent/20 to-primary/20",
    "from-golden-yellow/20 to-accent/20",
    "from-primary/20 to-forest-green/20",
  ];
  const bgColor = colors[id % 3];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="relative"
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
        transition: "transform 0.3s ease-out",
      }}
    >
      <div
        className={`glass rounded-xl overflow-hidden p-6 bg-gradient-to-br ${bgColor} backdrop-blur-md h-full`}
      >
        {/* Header with Avatar */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-foreground mb-1">{name}</h3>
            <p className="text-accent font-semibold text-sm">{role}</p>
            {club && <p className="text-foreground/60 text-xs mt-1">{club}</p>}
          </div>
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-golden-yellow flex-shrink-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Quote */}
        {quote && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/70 italic mb-6 text-sm leading-relaxed"
          >
            {`"${quote}"`}
          </motion.p>
        )}

        {/* Social Icons */}
        <motion.div className="flex gap-3 pt-4 border-t border-accent/20">
          {(() => {
            const toUrl = (type: string, value?: string) => {
              if (!value) return undefined;
              const v = value.trim();
              if (!v) return undefined;
              if (/^https?:\/\//i.test(v)) return v;
              const clean = v.replace(/^@/, "");
              switch (type) {
                case "email":
                  return `mailto:${clean}`;
                case "linkedin":
                  if (/linkedin\.com/i.test(v))
                    return v.startsWith("http") ? v : `https://${v}`;
                  return `https://www.linkedin.com/in/${clean}`;
                case "instagram":
                  return `https://instagram.com/${clean}`;
                case "twitter":
                  return `https://twitter.com/${clean}`;
                default:
                  return undefined;
              }
            };

            const items = [
              {
                Icon: Mail,
                label: "Email",
                href: toUrl("email", social?.email),
              },
              {
                Icon: Linkedin,
                label: "LinkedIn",
                href: toUrl("linkedin", social?.linkedin),
              },
              {
                Icon: Twitter,
                label: "Twitter",
                href: toUrl("twitter", social?.twitter),
              },
              {
                Icon: Instagram,
                label: "Instagram",
                href: toUrl("instagram", social?.instagram),
              },
            ].filter((s) => s.href);

            return items.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full glass flex items-center justify-center text-accent hover:text-white hover:bg-accent/20 transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ));
          })()}
        </motion.div>

        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
          animate={{
            boxShadow: "inset 0 0 30px rgba(251, 133, 0, 0.1)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default OrganizerCard;
