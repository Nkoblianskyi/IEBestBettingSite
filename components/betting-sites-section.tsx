"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

export function BettingSitesSection() {
  return (
    <section
      id="top-sites"
      className="py-4 px-1 sm:px-4 sm:py-12 md:py-16 bg-gradient-to-b from-charcoal-500 to-charcoal-600"
    >
      <div className="container mx-auto max-w-6xl px-1 sm:px-4">
        <div className="grid gap-2 sm:gap-3 md:gap-4">
          {bettingSites.map((site, index) => (
            <a key={site.name} href={site.url} target="_blank" rel="noopener noreferrer" className="block">
              <motion.div
                className={`backdrop-blur-sm border rounded-lg hover:glow-effect transition-all duration-300 ${index === 0
                    ? "bg-gradient-to-r from-emerald-500/30 to-orange-500/30 border-emerald-500/50"
                    : "bg-gradient-to-r from-charcoal-500/80 to-charcoal-600/80 border-emerald-500/20"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 0 20px rgba(0, 184, 83, 0.3)",
                }}
              >
                {/* Mobile Layout */}
                <div className="block sm:hidden">
                  {/* Header Row */}
                  <div className="flex items-center justify-between p-1">
                    <div className="flex items-center gap-1">
                      <img
                        src={site.logo || "/placeholder.svg"}
                        alt={`${site.name} logo`}
                        className="w-24 h-14 object-contain bg-white/10 rounded"
                      />
                      <div>
                        <h3 className="text-sm font-bold text-off-white">{site.name}</h3>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={10}
                              className={`${i < Math.floor(site.rating) ? "text-orange-500 fill-current" : "text-gray-600"
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-3 rounded text-xs whitespace-nowrap">
                      {site.cta}
                    </button>
                  </div>

                  {/* Bonus Section */}
                  <div className={`p-2 ${index === 0 ? "bg-emerald-500/30" : "bg-emerald-500/20"}`}>
                    <p className="text-emerald-400 font-bold text-sm text-center">{site.bonus}</p>
                  </div>

                  {/* Claimed Count */}
                  <div className="p-1 text-center">
                    <p className="text-xs text-gray-400">
                      {site.claimed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} claimed
                    </p>
                  </div>
                </div>

                {/* Desktop/Tablet Layout */}
                <div className="hidden sm:flex items-center justify-between gap-3 p-3 md:p-4">
                  {/* Left Side - Logo & Info */}
                  <div className="flex items-center gap-3 w-[280px] md:w-[320px] flex-shrink-0">
                    <img
                      src={site.logo || "/placeholder.svg"}
                      alt={`${site.name} logo`}
                      className="w-24 md:w-32 h-16 object-contain bg-white/10 rounded p-1"
                    />
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-off-white mb-1">{site.name}</h3>
                      <div className="flex items-center gap-1 mb-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={`${i < Math.floor(site.rating) ? "text-orange-500 fill-current" : "text-gray-600"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-orange-500 font-semibold text-xs">{site.rating}</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        {site.claimed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} claimed
                      </p>
                    </div>
                  </div>

                  {/* Center - Bonus */}
                  <div className="w-[300px] md:w-[340px] flex-shrink-0">
                    <div
                      className={`border rounded p-2 text-center ${index === 0
                          ? "bg-emerald-500/30 border-emerald-500/40"
                          : "bg-emerald-500/20 border-emerald-500/30"
                        }`}
                    >
                      <p className="text-emerald-400 font-bold text-sm">{site.bonus}</p>
                    </div>
                  </div>

                  {/* Right Side - CTA */}
                  <div className="flex-shrink-0">
                    <motion.button
                      className="btn-primary text-sm px-4 py-2 whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {site.cta}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
