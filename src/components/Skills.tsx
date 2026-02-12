'use client'

import { motion } from 'framer-motion'

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A breakdown of my technical expertise — organized for easy reference during interviews.
            Hover over skills for more detail on what I know.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-12"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-500 rounded" />
                {category.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-4 rounded-lg bg-slate-900/50 border border-slate-700/30 hover:border-cyan-500/30 transition-all"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
