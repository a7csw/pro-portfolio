import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Capabilities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const capabilities = [
    {
      title: "AI Automation & Workflows",
      description: "Custom AI agents, intelligent data pipelines, and automated workflows that eliminate manual work and scale your operations.",
      outcomes: ["Reduce operational costs by 40-60%", "24/7 automated customer support", "Smart data processing at scale"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Full-Stack Web Applications",
      description: "Modern, performant web apps built with React, Node.js, and cloud infrastructure. Beautiful UI, solid architecture.",
      outcomes: ["Fast, responsive user experiences", "Scalable backend systems", "Production-ready deployment"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "SaaS & MVP Development",
      description: "Go from idea to launch in weeks. I build lean, validated products that get you into the market with real users fast.",
      outcomes: ["Rapid prototyping & iteration", "User-validated features", "Revenue-ready platforms"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Technical Strategy & Integration",
      description: "Not sure what tech you need? I'll audit your current systems and design solutions that fit your business goals.",
      outcomes: ["Clear technical roadmaps", "Cost-effective architecture", "Seamless third-party integrations"],
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section id="capabilities" ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-black via-blue-950/5 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            What I build
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Solutions designed for impact, not just implementation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${capability.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
              
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 h-full">
                <div className={`inline-block bg-gradient-to-r ${capability.gradient} bg-clip-text text-transparent mb-4`}>
                  <div className="text-sm font-semibold uppercase tracking-wide">
                    Service {index + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  {capability.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {capability.description}
                </p>

                <div className="space-y-3">
                  {capability.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${capability.gradient}`} />
                      <span className="text-sm text-gray-300">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities

