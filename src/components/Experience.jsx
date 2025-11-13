import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const Metric = ({ label, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-cyan-200 text-sm"
  >
    <span className="text-white font-bold mr-2">{value}</span>
    {label}
  </motion.div>
)

const ExpCard = ({ exp }) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="relative p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h3 className="text-white text-xl font-bold">{exp.company}</h3>
          <p className="text-gray-300">{exp.role} • {exp.location}</p>
        </div>
        <span className="text-gray-400 text-sm">{exp.duration}</span>
      </div>
      <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
        {exp.highlights?.slice(0,3).map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {exp.metrics?.map((m) => (
          <Metric key={m.label} label={m.label} value={m.value} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience({ experience }) {
  const enriched = (experience || []).map((e) => ({
    ...e,
    metrics: [
      e.highlights?.find((h) => h.includes('15%')) && { label: 'mAP boost', value: '15%' },
      e.highlights?.find((h) => h.includes('40%')) && { label: 'Faster', value: '40%' },
      e.highlights?.find((h) => h.includes('30%')) && { label: 'Cost savings', value: '30%' },
    ].filter(Boolean)
  }))

  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Experience</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {enriched.map((exp) => (
            <ExpCard key={`${exp.company}-${exp.role}`} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
