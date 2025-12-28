import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { category: "AI & Automation", items: ["OpenAI GPT", "LangChain", "AI Agents", "Workflow Automation", "n8n/Zapier"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "REST APIs"] },
    { category: "Cloud & Tools", items: ["AWS", "Vercel", "Git", "Docker", "CI/CD"] }
  ]

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: About content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Builder. Engineer. Problem solver.
              </h2>
              
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p className="text-lg">
                  I'm <span className="text-white font-semibold">Abdulrahman</span>—a software engineer specializing in AI automation and full-stack development.
                </p>
                
                <p>
                  I believe the best technology is invisible. It just works. My focus is on building systems that make businesses more efficient, more scalable, and more profitable—without adding complexity.
                </p>
                
                <p>
                  Whether it's automating your customer support with AI, building a custom SaaS platform, or engineering a complete web application from scratch, I approach every project with the same mindset: <span className="text-white font-semibold">speed, quality, and impact</span>.
                </p>
                
                <p>
                  I've worked on projects ranging from AI chatbots processing thousands of conversations daily, to full-stack platforms generating real revenue. I don't just write code—I build products that matter.
                </p>
                
                <p>
                  When I'm not building software, I'm exploring the latest in AI research, experimenting with new automation tools, and thinking about how to make technology more accessible for everyone.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
                  <span className="text-sm font-medium">🚀 Fast Execution</span>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
                  <span className="text-sm font-medium">🤖 AI-First Approach</span>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
                  <span className="text-sm font-medium">💼 Business Focused</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8">Technical Expertise</h3>
              
              <div className="space-y-6">
                {skills.map((skillSet, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl p-6"
                  >
                    <h4 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wide">
                      {skillSet.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillSet.items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10 hover:border-white/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl"
              >
                <div className="text-sm text-blue-400 mb-2">Currently exploring</div>
                <div className="text-white font-medium">Advanced AI Agents • Voice AI • Edge Computing</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

