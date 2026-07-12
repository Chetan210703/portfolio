'use client'

import SectionFadeIn from './SectionFadeIn'

const projects = [
  {
    title: 'Smart Price Tracker & AI Assistant',
    status: 'Complete',
    description: 'An AI-powered web application that monitors e-commerce prices. It automates data extraction, sends real-time updates, and uses generative AI to analyze price histories and answer user queries.',
    tech: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Playwright', 'Gemini AI', 'Redis', 'Socket.io'],
    highlights: [
      'Built real-time REST APIs and WebSocket connections for instant data delivery',
      'Automated resilient e-commerce scraping pipelines using Playwright and Node-Cron',
      'Integrated Gemini AI for conversational history analysis and natural language Q&A',
      'Visualized complex price trends using React and Recharts with Redis caching optimization'
    ],
    live_link: 'https://chetan-price-alert.vercel.app/',
    github: 'https://github.com/Chetan210703/price_alert',
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
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <SectionFadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hands-on projects demonstrating full-stack development and problem-solving
          </p>
        </SectionFadeIn>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <SectionFadeIn key={project.title} delay={i * 80}>
              <div className="group rounded-2xl p-6 md:p-8 bg-white/[0.02] border border-white/[0.06] hover:border-pink-500/25 hover:shadow-[0_0_50px_rgba(236,72,153,0.06)] transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.status === 'Complete' && (
                    <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Completed
                    </span>
                  )}
                </div>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <ul className="space-y-1 mb-4">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-slate-300 text-sm">
                      <span className="text-pink-500">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-lg bg-white/[0.06] text-slate-300 border border-white/[0.04]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Links Container */}
                  <div className="flex items-center gap-4 generic-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-pink-300 text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        View on GitHub →
                      </a>
                    )}
                    
                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SectionFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}