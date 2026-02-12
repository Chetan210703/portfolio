'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Price Tracking Web Application',
    status: 'Ongoing',
    description: 'Web application that tracks product prices from different e-commerce websites. Scrapes, stores, and visualizes price history for informed purchase decisions.',
    tech: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Cheerio', 'Axios'],
    highlights: [
      'Built REST APIs for price data management',
      'Web scraping with Cheerio and Axios',
      'Price history visualization with React',
    ],
    github: 'https://github.com/Chetan210703',
  },
  {
    title: 'WhatsApp Bot Automation',
    status: 'Complete',
    description: 'Automated WhatsApp bot for user interaction with data persistence and API management.',
    tech: ['Node.js', 'MongoDB', 'REST APIs'],
    highlights: [
      'User input validation and MongoDB storage',
      'REST APIs for user data management',
      'WhatsApp API integration',
    ],
    github: 'https://github.com/Chetan210703',
  },
  {
    title: 'Institute Management System',
    status: 'Complete',
    description: 'Full-stack role-based system for students, faculty, and admins. Comprehensive dashboard for attendance, classroom occupancy, and issue tracking.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    highlights: [
      'JWT-based authentication with protected API routes',
      'MongoDB schemas for attendance, occupancy, issues',
      'Reusable React components with Axios integration',
      'Backend middleware for validation and access control',
    ],
    github: 'https://github.com/Chetan210703',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hands-on projects demonstrating full-stack development and problem-solving
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/20 transition-colors group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    project.status === 'Ongoing'
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-green-500/20 text-green-400'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <ul className="space-y-1 mb-4">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-slate-300 text-sm">
                    <span className="text-cyan-500">•</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
