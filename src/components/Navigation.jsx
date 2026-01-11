import { motion } from 'framer-motion'

const Navigation = ({ scrolled }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl font-bold"
          >
            <span className="text-gradient">Abdulrahman</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection('capabilities')}
              className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 lg:px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-sm lg:text-base"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation

