'use client'

import SectionFadeIn from './SectionFadeIn'

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <SectionFadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Final-year B.Tech student specializing in{' '}
            <span className="text-pink-400 font-medium">Backend Development</span> and building
            scalable web applications. Passionate about REST APIs, clean architecture, and
            turning ideas into production-ready software.
          </p>
        </SectionFadeIn>
        <SectionFadeIn delay={80}>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/30 hover:shadow-[0_0_20px_rgba(236,72,153,0.08)] transition-all duration-300">
              <span className="text-slate-300">Backend Development</span>
            </div>
            <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.08)] transition-all duration-300">
              <span className="text-slate-300">Full Stack</span>
            </div>
            <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-all duration-300">
              <span className="text-slate-300">Open to Opportunities</span>
            </div>
          </div>
        </SectionFadeIn>
      </div>
    </section>
  )
}
