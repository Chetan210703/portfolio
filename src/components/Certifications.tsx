'use client'

import SectionFadeIn from './SectionFadeIn'

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
    <section id="certifications" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <SectionFadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="gradient-text">Activities</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Continuous learning and extracurricular involvement
          </p>
        </SectionFadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <SectionFadeIn delay={0}>
            <div className="rounded-2xl p-6 md:p-8 bg-white/[0.02] border border-white/[0.06] hover:border-pink-500/20 hover:shadow-[0_0_40px_rgba(236,72,153,0.05)] transition-all duration-500">
              <h3 className="text-xl font-semibold text-pink-400 mb-4">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c.title} className="flex gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <div>
                      <span className="text-white font-medium">{c.title}</span>
                      <p className="text-slate-500 text-sm">{c.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </SectionFadeIn>
          <SectionFadeIn delay={80}>
            <div className="rounded-2xl p-6 md:p-8 bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/20 hover:shadow-[0_0_40px_rgba(168,85,247,0.05)] transition-all duration-500">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Activities</h3>
              <ul className="space-y-2">
                {activities.map((a) => (
                  <li key={a} className="flex gap-2 text-slate-300">
                    <span className="text-purple-500">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </SectionFadeIn>
        </div>
      </div>
    </section>
  )
}
