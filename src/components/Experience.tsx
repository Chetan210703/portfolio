'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Backend Development Intern',
    company: 'Humble Walking',
    period: 'June 2025 – July 2025',
    highlights: [
      'Built and maintained RESTful APIs using Node.js and Express.js for scalable services',
      'Worked closely with frontend teams to define API specs and improve UX',
      'Debugged and optimized server-side logic for better reliability',
    ],
    tech: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    role: 'Research & Development Intern',
    company: 'Robokart',
    period: 'December 2024',
    highlights: [
      'Conducted sessions teaching Arduino, sensors, and electronics basics',
      'Demonstrated IoT projects and guided students in hands-on hardware circuits',
      'Collaborated with faculty to design engaging beginner content',
    ],
    tech: ['Arduino', 'IoT', 'Electronics'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-world industry experience in software development and R&D
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/20 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-cyan-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-slate-500 text-sm font-mono">{exp.period}</span>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-slate-300">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
