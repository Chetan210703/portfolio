'use client'

import SectionFadeIn from './SectionFadeIn'

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
    <section id="education" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <SectionFadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Academic background in engineering and technology
          </p>
        </SectionFadeIn>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <SectionFadeIn key={edu.institution} delay={i * 60}>
              <div className="rounded-2xl p-6 md:p-8 bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.05)] transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-pink-400">{edu.institution}</p>
                  </div>
                  <span className="text-slate-500 text-sm font-mono">{edu.period}</span>
                </div>
              </div>
            </SectionFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
