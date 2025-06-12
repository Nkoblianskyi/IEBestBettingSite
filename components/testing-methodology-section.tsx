"use client"

import { motion } from "framer-motion"

const testingSteps = [
  {
    step: 1,
    title: "Licensing Verification",
    description: "We verify all licenses and regulatory compliance for Irish operations.",
  },
  {
    step: 2,
    title: "Payment Process Testing",
    description: "Testing deposit and withdrawal speeds, fees, and security measures.",
  },
  {
    step: 3,
    title: "Odds Comparison",
    description: "Comparing odds across major sports and markets popular in Ireland.",
  },
  {
    step: 4,
    title: "Mobile Experience Test",
    description: "Evaluating mobile apps and responsive web design performance.",
  },
  {
    step: 5,
    title: "Bonus Evaluation",
    description: "Analyzing bonus terms, wagering requirements, and real value.",
  },
  {
    step: 6,
    title: "Responsible Gambling Check",
    description: "Reviewing available tools and support for responsible gambling.",
  },
]

export function TestingMethodologySection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-charcoal-500 to-charcoal-600">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-off-white mb-4">
            How We <span className="text-emerald-500">Test</span> Irish Betting Sites
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our rigorous testing process ensures you get only the best recommendations
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-orange-500 transform md:-translate-x-0.5"></div>

          {testingSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Step Number */}
              <motion.div
                className="absolute left-8 md:left-1/2 w-16 h-16 bg-gradient-to-br from-emerald-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl transform md:-translate-x-1/2 z-10"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 184, 83, 0.5)",
                    "0 0 30px rgba(255, 168, 0, 0.5)",
                    "0 0 20px rgba(0, 184, 83, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
              >
                {step.step}
              </motion.div>

              {/* Content */}
              <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <motion.div
                  className="bg-charcoal-500/80 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:glow-effect transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold text-off-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
