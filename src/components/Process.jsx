import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We start with a focused conversation about your business goals, pain points, and technical needs. No jargon—just clear questions and honest answers.",
      duration: "1-2 days"
    },
    {
      number: "02",
      title: "Rapid Prototyping",
      description: "I build a working prototype or proof-of-concept fast. You'll see real progress within the first week, not months of planning.",
      duration: "1-2 weeks"
    },
    {
      number: "03",
      title: "Build & Iterate",
      description: "Regular updates, clear communication, and continuous refinement based on feedback. You stay in the loop every step of the way.",
      duration: "2-6 weeks"
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Smooth deployment, thorough testing, and post-launch support. I don't disappear after delivery—I ensure everything runs perfectly.",
      duration: "Ongoing"
    }
  ]

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-black via-purple-950/5 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            How we'll work together
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transparent process. Fast execution. Consistent communication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connecting line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
              )}

              <div className="relative">
                <div className="text-6xl font-bold text-gradient mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">
                  {step.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">What you can expect</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-3xl mb-2">📱</div>
              <div className="font-semibold mb-1">Regular Updates</div>
              <div className="text-sm text-gray-400">Daily or weekly progress reports</div>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold mb-1">Fast Response</div>
              <div className="text-sm text-gray-400">Replies within 24 hours max</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-semibold mb-1">Quality Delivery</div>
              <div className="text-sm text-gray-400">Clean code, tested, documented</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process

