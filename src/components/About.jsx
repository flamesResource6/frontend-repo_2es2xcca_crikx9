import { motion } from 'framer-motion'

export default function About({ profile }) {
  const name = profile?.name || 'Adarsh Kesharwani'
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              About
            </h2>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              I’m {name}, an AI Engineer focused on building production-grade intelligence.
              I love shipping pragmatic GenAI systems, vision models, and MLOps pipelines
              that perform under real-world constraints. My toolbox spans diffusion models,
              LLMs, GNNs, and high-throughput backends with monitoring and CI/CD baked in.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['FastAPI','PyTorch','Docker','MLflow','Redis','YOLOv8','LangChain','NeRF'].map((s) => (
                <motion.span
                  key={s}
                  className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-cyan-200 backdrop-blur hover:border-cyan-400/40"
                  whileHover={{ scale: 1.06 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-emerald-500/20 mix-blend-screen" />
              <div className="absolute inset-0" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_30%_20%,#22d3ee22,transparent_60%),radial-gradient(circle_at_70%_80%,#8b5cf622,transparent_60%)]" />
            </div>
            <div className="absolute -inset-2 -z-10 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-emerald-500/20 blur-2xl rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
