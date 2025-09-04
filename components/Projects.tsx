'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Expense Manager',
    desc: 'Full-stack MERN app with JWT auth, categories & charts',
    url: '#',
    tech: ['React', 'Node.js', 'MongoDB', 'TailwindCSS']
  },
  {
    title: 'AI Resume Analyzer',
    desc: 'Analyze and score resumes using LLMs',
    url: '#',
    tech: ['Next.js', 'OpenAI', 'TypeScript']
  },
    {
    title: 'Kuber AI Gold',
    desc: 'AI-powered gold investment planning and advisory platform',
    url: 'https://kuber-ai-gold.vercel.app',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS']
  },
  {
    title: 'EventHub',
    desc: 'Event management dashboard with notifications',
    url: '#',
    tech: ['React', 'Node.js', 'Express', 'Material UI']
  },
]

export default function Projects() {
  return (
    <section id="projects" className="space-y-8 py-12">
      <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.url}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="block rounded-2xl border border-gray-200 bg-gradient-to-br from-white/80 to-gray-50/80 p-6 shadow-md backdrop-blur-sm transition hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
            <hr className="my-3 border-gray-200" />
            <p className="text-gray-600">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-blue-100 text-blue-700 text-xs px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline">
              View →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
