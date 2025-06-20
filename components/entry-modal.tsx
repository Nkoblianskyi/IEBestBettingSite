"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

export function EntryModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if modal was already shown in this session
    const modalShown = sessionStorage.getItem("modalShown")
    if (!modalShown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem("modalShown", "true")
      }, 8000) // Show modal after 8 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  // Get top 3 sites from the main data
  const topSites = bettingSites.slice(0, 3)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-black border border-emerald-500/30 rounded-xl w-full max-w-[95vw] sm:max-w-lg max-h-[95vh] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-emerald-500/20 to-orange-500/20 p-3 sm:p-4 border-b border-emerald-500/20">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <div className="text-center pr-8">
                <h2 className="text-base sm:text-lg font-bold text-off-white mb-1">Top 3 Irish Betting Sites</h2>
                <p className="text-xs sm:text-sm text-gray-300">Claim exclusive bonuses now!</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4">
              {/* Top Sites */}
              <div className="space-y-3">
                {topSites.map((site, index) => (
                  <a
                    key={site.name}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      className="bg-gradient-to-r from-emerald-500/10 to-orange-500/10 border border-emerald-500/30 rounded-lg p-3 hover:bg-emerald-500/20 transition-all duration-300"
                      initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Mobile Layout */}
                      <div className="block sm:hidden">
                        {/* Top Row: Logo + Name + Button */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <img
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              className="w-12 h-8 object-contain bg-white/10 rounded"
                            />
                            <div>
                              <h3 className="font-semibold text-off-white text-sm">{site.name}</h3>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <span
                                    key={i}
                                    className={`text-xs ${i < Math.floor(site.rating) ? "text-orange-500" : "text-gray-600"}`}
                                  >
                                    ⭐
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-3 rounded text-xs whitespace-nowrap">
                            {site.cta}
                          </button>
                        </div>

                        {/* Bottom Row: Bonus */}
                        <div className="bg-emerald-500/20 border border-emerald-500/30 rounded px-3 py-2 text-center">
                          <p className="text-emerald-400 font-semibold text-sm">{site.bonus}</p>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden sm:flex sm:items-center sm:justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            className="w-20 h-12 object-contain bg-white/10 rounded p-1"
                          />
                          <div>
                            <h3 className="font-semibold text-off-white text-sm">{site.name}</h3>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-xs ${i < Math.floor(site.rating) ? "text-orange-500" : "text-gray-600"}`}
                                >
                                  ⭐
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-emerald-400 font-semibold text-xs bg-emerald-500/20 border border-emerald-500/30 rounded px-2 py-1 mb-2">
                            {site.bonus}
                          </p>
                          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-1 px-3 rounded text-xs">
                            {site.cta}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </a>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="text-center mt-4 pt-3 border-t border-emerald-500/20">
                <p className="text-xs text-gray-400">18+ | Play responsibly</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
