"use client"

import { motion } from "framer-motion"
import { EntryModal } from "./entry-modal"
import { Shield, Calendar, Scale } from "lucide-react"

export function HeroSection() {
  const scrollToContent = () => {
    document.getElementById("top-sites")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[200px] sm:h-[180px] flex items-center justify-center overflow-hidden celtic-pattern mt-16 sm:mt-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 stadium-glow">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal-500/50 to-charcoal-500"></div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
        <motion.h1
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 leading-tight px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-off-white">Ireland's </span>
          <span className="text-emerald-500">Top Betting Sites</span>
          <span className="text-off-white"> - Trusted by </span>
          <span className="text-orange-500">Irish Players</span>
        </motion.h1>

        <motion.p
          className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 px-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Expert-tested and updated daily — claim the best bonuses today!
        </motion.p>

        {/* Trust Indicators - Mobile Stacked, Desktop Inline */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-charcoal-500/90 backdrop-blur-md rounded-full px-3 py-2 border border-emerald-500/20 mx-auto sm:mx-0">
            <div className="flex items-center justify-center space-x-3 sm:space-x-4">
              <div className="flex items-center space-x-1">
                <Shield className="text-emerald-500" size={12} />
                <span className="text-off-white font-medium text-xs">Trusted</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="text-emerald-500" size={12} />
                <span className="text-off-white font-medium text-xs">Updated Daily</span>
              </div>
              <div className="flex items-center space-x-1">
                <Scale className="text-emerald-500" size={12} />
                <span className="text-off-white font-medium text-xs">Licensed</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Last Update Info - Centered on Mobile */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-gray-400 text-xs">
            Last bonus update:{" "}
            <span className="text-orange-500 font-semibold">
              {new Date().toLocaleDateString("en-IE", { month: "long", day: "numeric" })}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Entry Modal */}
      <EntryModal />
    </section>
  )
}
