'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  const footerLinks = [
    { title: 'Navigation', links: ['Home', 'Glimpse', 'Organizers'] },
    { title: 'Connect', links: ['Register', 'Contact Us', 'Sponsorship'] },
    { title: 'About', links: ['District 3292', 'Interact', 'परिवर्तन'] },
  ]

  return (
    <footer className="relative bg-secondary/20 border-t border-accent/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-accent mb-4">परिवर्तन</h3>
            <p className="text-foreground/70 mb-6">
              Be The Change That Saves Tomorrow
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, idx) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-accent/10 pt-8 flex flex-col md:flex-row justify-between items-center text-foreground/60 text-sm"
        >
          <p>&copy; 2025 Interact District 3292. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
