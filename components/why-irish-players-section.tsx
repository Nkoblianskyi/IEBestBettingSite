"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "Irish Licensed & Trusted",
    text: "All sites fully licensed and verified for Irish players.",
  },
  {
    title: "Wide Sports Coverage",
    text: "GAA, football, rugby, racing, esports covered.",
  },
  {
    title: "Fast Payments",
    text: "Secure & fast deposit and withdrawal options.",
  },
  {
    title: "Seamless Mobile UX",
    text: "Top-class mobile apps & web interfaces.",
  },
  {
    title: "Great Value Bonuses",
    text: "Exclusive bonuses for Irish punters.",
  },
  {
    title: "Strong Responsible Gambling",
    text: "Built-in tools to promote safe play.",
  },
]

export function WhyIrishPlayersSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-charcoal-600 to-charcoal-500 celtic-pattern">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-off-white mb-4">
            Why <span className="text-emerald-500">Irish Players</span> Love These Sites
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what makes these betting sites perfect for Irish players
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 text-center hover:glow-effect transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0, 184, 83, 0.3)",
              }}
            >
              <h3 className="text-xl font-bold text-off-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
