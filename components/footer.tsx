"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-charcoal-600 to-charcoal-500 overflow-hidden">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-current text-emerald-500/20">
          <motion.path
            d="M0,60 C300,120 900,0 1200,60 L1200,0 L0,0 Z"
            animate={{
              d: [
                "M0,60 C300,120 900,0 1200,60 L1200,0 L0,0 Z",
                "M0,60 C300,0 900,120 1200,60 L1200,0 L0,0 Z",
                "M0,60 C300,120 900,0 1200,60 L1200,0 L0,0 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-emerald-500/5 to-transparent"></div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="/">
              <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
                <span className="text-xl font-bold text-off-white">IEBestBettingSite</span>
              </motion.div>
            </a>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Ireland's most trusted source for betting site reviews and recommendations. We help Irish players find
              safe, licensed, and rewarding betting experiences.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">18+</div>
              <div className="flex items-center space-x-2 text-emerald-500">
                <Image src='/flag.png' alt="Irish Flag" width={20} height={20} />
                <span className="text-sm font-medium">Irish Licensed</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-off-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-emerald-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-emerald-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/betting-guide" className="text-gray-300 hover:text-emerald-500 transition-colors">
                  Betting Guide
                </a>
              </li>
              <li>
                <a href="/responsible-gambling" className="text-gray-300 hover:text-emerald-500 transition-colors">
                  Responsible Gambling
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-off-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/cookie-policy" className="text-gray-300 hover:text-emerald-500 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-emerald-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Gambling Organizations */}
        <div className="border-t border-emerald-500/20 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-off-white mb-6 text-center">Responsible Gambling Support</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <a
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-3 text-center hover:glow-effect transition-all duration-300 group"
            >
              <img
                src="/gamble.webp"
                alt="GambleAware"
                className="w-full h-12 object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity bg-white rounded-lg p-2"
              />
              <p className="text-xs text-gray-300 group-hover:text-emerald-400 transition-colors">GambleAware</p>
            </a>

            <a
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-3 text-center hover:glow-effect transition-all duration-300 group"
            >
              <img
                src="/gamecare.svg"
                alt="GamCare"
                className="w-full h-12 object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity bg-white rounded-lg p-2"
              />
              <p className="text-xs text-gray-300 group-hover:text-emerald-400 transition-colors">GamCare</p>
            </a>

            <a
              href="https://www.gamblingtherapy.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-3 text-center hover:glow-effect transition-all duration-300 group"
            >
              <img
                src="/gordon.png"
                alt="GamblingTherapy"
                className="w-full h-12 object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <p className="text-xs text-gray-300 group-hover:text-emerald-400 transition-colors">GamblingTherapy</p>
            </a>

            <a
              href="https://www.gamblersanonymous.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-3 text-center hover:glow-effect transition-all duration-300 group"
            >
              <img
                src="/anonymos.avif"
                alt="Gamblers Anonymous Ireland"
                className="w-full h-12 object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <p className="text-xs text-gray-300 group-hover:text-emerald-400 transition-colors">GA Ireland</p>
            </a>

            <a
              href="https://www.egba.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-3 text-center hover:glow-effect transition-all duration-300 group"
            >
              <img
                src="/egba.png"
                alt="EGBA"
                className="w-full h-12 object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <p className="text-xs text-gray-300 group-hover:text-emerald-400 transition-colors">EGBA</p>
            </a>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="text-center text-sm text-gray-400 leading-relaxed">
          <p className="mb-2">© 2025 IEBestBettingSite. All rights reserved.</p>
          <p className="mb-2">18+ only. Gambling can be addictive. Play responsibly.</p>
          <p>
            This website contains affiliate links. We may receive compensation when you click on links to products we
            recommend. This does not affect our editorial independence or the accuracy of our reviews.
          </p>
        </div>
      </div>
    </footer>
  )
}
