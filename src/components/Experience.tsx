'use client'

import SectionFadeIn from './SectionFadeIn'

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
    <section id="experience" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <SectionFadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-world industry experience in software development and R&D
          </p>
        </SectionFadeIn>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <SectionFadeIn key={exp.company} delay={i * 80}>
              <div className="rounded-2xl p-6 md:p-8 bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/20 hover:shadow-[0_0_40px_rgba(168,85,247,0.05)] transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-pink-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-slate-500 text-sm font-mono">{exp.period}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-slate-300">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-lg bg-purple-500/15 text-purple-400 border border-purple-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </SectionFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
