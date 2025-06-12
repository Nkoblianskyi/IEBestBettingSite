"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Seán O'Connor",
    location: "Dublin",
    rating: 5,
    text: "Finally found a trustworthy platform that actually tests these betting sites. Saved me from signing up to dodgy operators. The GAA coverage recommendations were spot on!",
    avatar: "/placeholder.svg?height=60&width=60&text=SO",
  },
  {
    name: "Aoife Murphy",
    location: "Cork",
    rating: 5,
    text: "Love how they break down the bonus terms clearly. No hidden surprises like other review sites. The mobile recommendations helped me find the perfect app for betting on the go.",
    avatar: "/placeholder.svg?height=60&width=60&text=AM",
  },
  {
    name: "Liam Kelly",
    location: "Galway",
    rating: 5,
    text: "Been using their recommendations for 6 months now. Every site they suggested was exactly as described. Great customer support and fast payouts. Highly recommend this platform!",
    avatar: "/placeholder.svg?height=60&width=60&text=LK",
  },
  {
    name: "Niamh Walsh",
    location: "Belfast",
    rating: 5,
    text: "The responsible gambling section really shows they care about players. Found the perfect site with great deposit limits and self-exclusion tools. Professional and trustworthy reviews.",
    avatar: "/placeholder.svg?height=60&width=60&text=NW",
  },
  {
    name: "Cian Byrne",
    location: "Limerick",
    rating: 5,
    text: "Best betting comparison site for Irish players. The testing methodology is transparent and the recommendations are always accurate. Saved me time and money!",
    avatar: "/placeholder.svg?height=60&width=60&text=CB",
  },
  {
    name: "Siobhan Ryan",
    location: "Waterford",
    rating: 5,
    text: "Impressed by how up-to-date their information is. Bonuses and features are always current. The site design is clean and easy to navigate. Will definitely keep using!",
    avatar: "/placeholder.svg?height=60&width=60&text=SR",
  },
]

export function TestimonialsSection() {
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
            What <span className="text-emerald-500">Irish Players</span> Say About Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by thousands of Irish players who rely on our expert recommendations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:glow-effect transition-all duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-emerald-500/30">
                <Quote size={24} />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${i < testimonial.rating ? "text-orange-500 fill-current" : "text-gray-600"}`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

              {/* User Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30"
                />
                <div>
                  <h4 className="font-semibold text-off-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold text-emerald-500 mb-2">50,000+</h3>
                <p className="text-gray-300">Irish Players Helped</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-500 mb-2">4.9/5</h3>
                <p className="text-gray-300">Average Rating</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-emerald-500 mb-2">2+ Years</h3>
                <p className="text-gray-300">Trusted Experience</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
