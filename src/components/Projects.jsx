import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const expertiseAreas = [
    {
      title: "AI Automation & Workflow Systems",
      description: "Automate repetitive operations with AI agents, integrations, and smart workflows that save time and reduce manual work.",
      tags: ["Automation", "AI", "Integrations"],
      color: "blue"
    },
    {
      title: "Full-Stack Web Applications",
      description: "Build modern web apps end-to-end — clean UI, solid backend, authentication, dashboards, and production deployment.",
      tags: ["React", "Node", "APIs"],
      color: "purple"
    },
    {
      title: "SaaS & MVP Development",
      description: "Launch fast with an MVP that's built to scale — product thinking, clean architecture, and iteration speed.",
      tags: ["MVP", "SaaS", "Launch"],
      color: "green"
    },
    {
      title: "Backend Engineering & APIs",
      description: "Design and implement secure, maintainable APIs and backend services with database integration and performance in mind.",
      tags: ["APIs", "Databases", "Security"],
      color: "blue"
    },
    {
      title: "Business-Focused Engineering",
      description: "Translate business goals into technical solutions — clarity, measurable outcomes, and strong communication.",
      tags: ["Strategy", "Clarity", "Delivery"],
      color: "pink"
    },
    {
      title: "Performance, UX & Polish",
      description: "High-end UI quality: smooth interactions, responsive design, accessibility, and performance optimizations.",
      tags: ["UX", "Performance", "Quality"],
      color: "purple"
    }
  ]

  const colorClasses = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    green: "from-green-500 to-emerald-500",
    pink: "from-pink-500 to-rose-500"
  }

  return (
    <section id="work" ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The core things I build for businesses and teams — fast, reliable, and production-ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                  {area.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {area.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 bg-gradient-to-r ${colorClasses[area.color]} bg-opacity-10 rounded-full text-xs font-medium border border-white/10`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Need one of these? Let's talk.
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

