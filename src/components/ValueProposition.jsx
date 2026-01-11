import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ValueProposition = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      title: "Automate What Slows You Down",
      description: "Your team shouldn't waste hours on repetitive tasks. I build AI-powered automation that handles data processing, customer interactions, and workflows—so you can focus on growth.",
      icon: "⚡"
    },
    {
      title: "Technology That Makes Sense",
      description: "No buzzwords. No over-engineering. I translate complex AI and software solutions into practical tools that actually solve your business problems and generate ROI.",
      icon: "🎯"
    },
    {
      title: "Ship Fast, Iterate Smart",
      description: "Speed matters. I deliver working MVPs and prototypes quickly, then refine based on real user feedback. You get to market faster with confidence.",
      icon: "🚀"
    }
  ]

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 xl:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            Why businesses work with me
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            I turn technical complexity into competitive advantage
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className="text-4xl sm:text-5xl mb-4 lg:mb-6">{value.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 lg:mb-4 group-hover:text-gradient transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProposition

