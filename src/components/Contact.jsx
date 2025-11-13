import { motion } from 'framer-motion'

export default function Contact({ contacts }) {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Contact</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur space-y-4"
          >
            <input className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Your name" />
            <input className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Email" />
            <textarea rows={5} className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Message" />
            <button className="px-4 py-2 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold">Send</button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur"
          >
            <ul className="space-y-3 text-gray-300">
              {contacts?.email && (
                <li><a className="hover:text-cyan-300" href={`mailto:${contacts.email}`}>{contacts.email}</a></li>
              )}
              {contacts?.linkedin && (
                <li><a className="hover:text-cyan-300" href={contacts.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              )}
              {contacts?.github && (
                <li><a className="hover:text-cyan-300" href={contacts.github} target="_blank" rel="noreferrer">GitHub</a></li>
              )}
              {contacts?.medium && (
                <li><a className="hover:text-cyan-300" href={contacts.medium} target="_blank" rel="noreferrer">Medium</a></li>
              )}
              {contacts?.kaggle && (
                <li><a className="hover:text-cyan-300" href={contacts.kaggle} target="_blank" rel="noreferrer">Kaggle</a></li>
              )}
            </ul>
            <p className="mt-6 text-sm text-gray-500">Crafted with ❤️ + GPU cores.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
