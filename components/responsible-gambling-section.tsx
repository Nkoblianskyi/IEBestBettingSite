"use client"

import { motion } from "framer-motion"

const organizations = [
  {
    name: "GambleAware",
    logo: "/placeholder.svg?height=60&width=120&text=GambleAware",
    url: "https://www.gambleaware.org",
  },
  {
    name: "GamCare",
    logo: "/placeholder.svg?height=60&width=120&text=GamCare",
    url: "https://www.gamcare.org.uk",
  },
  {
    name: "GamblingTherapy",
    logo: "/placeholder.svg?height=60&width=120&text=GamblingTherapy",
    url: "https://www.gamblingtherapy.org",
  },
  {
    name: "Gamblers Anonymous IE",
    logo: "/placeholder.svg?height=60&width=120&text=GA+Ireland",
    url: "https://www.gamblersanonymous.ie",
  },
  {
    name: "EGBA",
    logo: "/placeholder.svg?height=60&width=120&text=EGBA",
    url: "https://www.egba.eu",
  },
]

export function ResponsibleGamblingSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-charcoal-500 to-charcoal-600">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-off-white mb-4">
            <span className="text-emerald-500">Safe Gambling</span> Resources
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            If you or someone you know needs help with gambling, these organizations provide support and resources
          </p>

          <motion.div
            className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-orange-400 font-bold text-xl">18+ Only. Play responsibly. Seek help if needed.</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Remember: Gambling should be fun and entertaining. If it stops being enjoyable or starts causing problems in
            your life, it's time to seek help. All the betting sites we recommend provide tools to help you gamble
            responsibly, including deposit limits, time limits, and self-exclusion options.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
