'use client'

import SectionFadeIn from './SectionFadeIn'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', level: 'Strong', desc: 'Async/await, ES6+, closures, event loop' },
      { name: 'C++', level: 'Proficient', desc: 'DSA, OOP, pointers, STL' },
      { name: 'Python', level: 'Proficient', desc: 'Scripting, basics of ML libraries' },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'Node.js', level: 'Strong', desc: 'REST APIs, Express, middleware, async patterns' },
      { name: 'Express.js', level: 'Strong', desc: 'Routing, validation, error handling' },
      { name: 'React.js', level: 'Strong', desc: 'Components, hooks, state management, Axios' },
      { name: 'Next.js', level: 'Proficient', desc: 'App router, SSR, static export' },
      { name: 'HTML & CSS', level: 'Strong', desc: 'Semantic markup, flexbox, responsive design' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 'Strong', desc: 'Schemas, aggregation, indexing, Mongoose' },
      { name: 'MySQL', level: 'Proficient', desc: 'SQL queries, joins, normalization' },
    ],
  },
  {
    title: 'Core Concepts',
    skills: [
      { name: 'REST APIs', level: 'Strong', desc: 'Design, JWT auth, API specs, versioning' },
      { name: 'Data Structures', level: 'Strong', desc: 'Completed GFG 160-Day DSA Challenge' },
      { name: 'DBMS', level: 'Proficient', desc: 'ACID, transactions, schemas' },
      { name: 'OOP', level: 'Strong', desc: 'Encapsulation, inheritance, polymorphism' },
    ],
  },
  {
    title: 'Tools & Libraries',
    skills: [
      { name: 'Git / GitHub', level: 'Proficient', desc: 'Version control, collaboration' },
      { name: 'Axios', level: 'Strong', desc: 'HTTP client, API integration' },
      { name: 'Cheerio', level: 'Proficient', desc: 'Web scraping, DOM parsing' },
      { name: 'JWT', level: 'Strong', desc: 'Authentication, protected routes' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <SectionFadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A breakdown of my technical expertise — organized for easy reference.
          </p>
        </SectionFadeIn>

        <div className="space-y-10">
          {skillCategories.map((category, i) => (
            <SectionFadeIn key={category.title} delay={i * 60}>
              <div className="rounded-2xl p-6 md:p-8 bg-white/[0.02] border border-white/[0.06] hover:border-pink-500/20 hover:shadow-[0_0_40px_rgba(236,72,153,0.05)] transition-all duration-500">
                <h3 className="text-xl font-semibold text-pink-400 mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
                  {category.title}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-purple-500/20 hover:bg-white/[0.04] transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-pink-500/20 text-pink-400">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                        {skill.desc}
                      </p>
                    </div>
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
