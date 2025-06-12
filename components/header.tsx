"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-charcoal-500/95 backdrop-blur-md border-b border-emerald-500/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold text-off-white">IEBestBettingSite</span>
          </motion.div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-off-white hover:text-emerald-500 transition-colors">
            Home
          </a>
          <a href="/betting-guide" className="text-off-white hover:text-emerald-500 transition-colors">
            Betting Guide
          </a>
          <a href="/about" className="text-off-white hover:text-emerald-500 transition-colors">
            About Us
          </a>
          <a href="/responsible-gambling" className="text-off-white hover:text-emerald-500 transition-colors">
            Responsible Gambling
          </a>
        </nav>

        {/* 18+ Badge & Irish Licensed */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">18+</div>
          <div className="flex items-center space-x-2 text-emerald-500">
            <Image src='/flag.png' alt="Irish Flag" width={20} height={20} />
            <span className="text-sm font-medium">Irish Licensed</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-off-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-charcoal-500/95 backdrop-blur-md border-t border-emerald-500/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="/" className="block text-off-white hover:text-emerald-500 transition-colors">
              Home
            </a>
            <a href="/betting-guide" className="block text-off-white hover:text-emerald-500 transition-colors">
              Betting Guide
            </a>
            <a href="/about" className="block text-off-white hover:text-emerald-500 transition-colors">
              About Us
            </a>
            <a href="/responsible-gambling" className="block text-off-white hover:text-emerald-500 transition-colors">
              Responsible Gambling
            </a>
            <div className="flex items-center justify-between pt-4 border-t border-emerald-500/20">
              <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">18+</div>
              <div className="flex items-center space-x-2 text-emerald-500">
                <span className="text-xl">🇮🇪</span>
                <span className="text-sm font-medium">Irish Licensed</span>
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
