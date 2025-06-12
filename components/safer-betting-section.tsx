"use client"

import { motion } from "framer-motion"

const tips = [
  {
    title: "Set Realistic Budgets",
    content:
      "Always decide how much you can afford to lose before you start betting. Never bet money you need for essential expenses like rent, food, or bills. Set daily, weekly, and monthly limits and stick to them religiously.",
  },
  {
    title: "Understand Bonus Terms",
    content:
      "Read the fine print on all bonuses and promotions. Pay attention to wagering requirements, time limits, and game restrictions. A bonus with high wagering requirements might not be as valuable as it initially appears.",
  },
  {
    title: "Know When to Stop",
    content:
      "Recognize the warning signs of problem gambling: chasing losses, betting more than planned, lying about betting activities, or feeling anxious when not betting. If you notice these signs, take a break and seek help.",
  },
  {
    title: "Use Responsible Gambling Tools",
    content:
      "Take advantage of tools like deposit limits, time limits, reality checks, and self-exclusion options. Organizations like ROFUS, GamCare, and GambleAware offer excellent resources and support for Irish players.",
  },
]

export function SaferBettingSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-charcoal-600 to-charcoal-500 celtic-pattern">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-off-white mb-4">
            Tips for <span className="text-emerald-500">Safer Betting</span> in Ireland
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Essential guidance to help you bet responsibly and enjoy the experience
          </p>
        </motion.div>

        <div className="space-y-8">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 hover:glow-effect transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-emerald-500 mb-4 flex items-center">
                <span className="bg-emerald-500/20 rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                  {index + 1}
                </span>
                {tip.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">{tip.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
