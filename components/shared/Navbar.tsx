"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Glimpse", href: "/glimpse" },
    { name: "Organizers", href: "/organizers" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="परिवर्तन logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
          <span className="sr-only">परिवर्तन</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-accent transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <button className="px-6 py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-accent transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass mt-4 p-6 space-y-4"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full px-6 py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300">
            Register
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
