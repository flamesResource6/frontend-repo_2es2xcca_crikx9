import { motion } from 'framer-motion'

const ProjectCard = ({ p }) => (
  <motion.a
    href={p.url}
    target="_blank"
    rel="noreferrer"
    whileHover={{ y: -6, scale: 1.02 }}
    className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 backdrop-blur overflow-hidden"
  >
    <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-emerald-500/10" />
    <div className="relative">
      <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden">
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_20%,#22d3ee33,transparent_60%),radial-gradient(circle_at_70%_80%,#8b5cf633,transparent_60%)]" />
      </div>
      <h3 className="mt-4 text-xl font-bold text-white">{p.name}</h3>
      <p className="mt-1 text-sm text-gray-300">{p.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech?.map((t) => (
          <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">{t}</span>
        ))}
      </div>
    </div>
  </motion.a>
)

export default function Projects({ projects }) {
  const items = (projects || []).map((p) => ({
    ...p,
    summary: p.highlights?.[0] || 'Production-grade AI system.'
  }))
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Projects</h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } }
          }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((p) => (
            <motion.div key={p.name} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
