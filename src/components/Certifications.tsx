'use client'

import { motion } from 'framer-motion'

const certifications = [
  {
    title: 'GFG 160-Day DSA Challenge',
    desc: 'Completed comprehensive Data Structures & Algorithms practice challenge',
  },
  {
    title: 'Advanced Emerging Tech Training',
    desc: 'ML, IoT, Deep Learning, SAP BTP',
  },
]

const activities = [
  'Organized inter-college chess tournament; active member of college chess club',
  'Participated in DLLE outreach programs',
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Certifications & Activities</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Continuous learning and extracurricular involvement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c.title} className="flex gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  <div>
                    <span className="text-white font-medium">{c.title}</span>
                    <p className="text-slate-500 text-sm">{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Activities</h3>
            <ul className="space-y-2">
              {activities.map((a) => (
                <li key={a} className="flex gap-2 text-slate-300">
                  <span className="text-cyan-500">•</span>
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
