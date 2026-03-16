'use client'

import ParticleCanvas from './ParticleCanvas'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative"
      style={{ background: 'linear-gradient(180deg, #0a0f1a 0%, #0d1321 100%)' }}
    >
      <ParticleCanvas />

      <div className="max-w-5xl mx-auto text-center relative z-20">
        <p className="text-slate-400 text-sm mb-4 tracking-[0.2em] uppercase opacity-0 animate-fade-in-up font-medium">
          Hello, I&apos;m
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight opacity-0 animate-fade-in-up-delay-1">
          <span className="gradient-text">Chetan</span>
          <span className="text-white">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto mb-14 opacity-0 animate-fade-in-up-delay-2">
          I&apos;m a full stack web developer.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-10 py-4 border border-pink-500/60 text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/80 hover:shadow-[0_0_24px_rgba(236,72,153,0.15)] transition-all duration-300 opacity-0 animate-fade-in-up-delay-3 rounded"
        >
          View my work
          <span className="text-pink-400/80">↓</span>
        </a>
      </div>
    </section>
  )
}
