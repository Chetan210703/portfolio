'use client'

import { motion } from 'framer-motion'

const education = [
  {
    degree: 'B.Tech, Electronics and Telecommunication Engineering',
    institution: 'Shree L R Tiwari College Of Engineering',
    period: '2022 – 2026',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Sardar Vallabhbhai Patel Vidyalaya and Jr. College, Mumbai',
    period: '2021',
  },
  {
    degree: 'Secondary (X)',
    institution: "Mother Mary's English High School, Thane",
    period: '2019',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Academic background in engineering and technology
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="text-cyan-400">{edu.institution}</p>
                </div>
                <span className="text-slate-500 text-sm font-mono">{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
