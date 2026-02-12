'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-mono text-sm mb-4 tracking-wider">
            Hi, I&apos;m
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Chetan Singh
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Final-year B.Tech student specializing in{' '}
            <span className="text-cyan-400 font-medium">Backend Development</span>{' '}
            and building scalable web applications
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="/CHETAN_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold rounded-lg transition-all hover:scale-105"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/Chetan210703"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 rounded-lg transition-all"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/chetansingh210703"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 rounded-lg transition-all"
            >
              LinkedIn
            </a>
          </motion.div>
          <motion.p
            className="mt-12 text-slate-500 text-sm max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Interested in backend development and learning how real-world products are built.
            Open to SDE and IT-related opportunities.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
