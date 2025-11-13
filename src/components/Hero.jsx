import Spline from '@splinetool/react-spline'

export default function Hero({ profile }) {
  const contacts = profile?.contacts || {}
  return (
    <section id="home" className="relative min-h-[80vh] w-full grid lg:grid-cols-2 items-center overflow-hidden">
      <div className="relative order-2 lg:order-1 z-10 px-6 sm:px-10 py-10 lg:py-20">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
          <span className="mr-2">👋</span> Hi, I’m
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
          {profile?.name || 'Your Name'}
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          AI/ML Engineer focused on GenAI, MLOps, and real-time systems. Building useful things with LLMs, Diffusion, and production-grade stacks.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {contacts.portfolio && (
            <a href={contacts.portfolio} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">Portfolio</a>
          )}
          {contacts.github && (
            <a href={contacts.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors">GitHub</a>
          )}
          {contacts.linkedin && (
            <a href={contacts.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors">LinkedIn</a>
          )}
          {contacts.medium && (
            <a href={contacts.medium} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors">Medium</a>
          )}
          {contacts.kaggle && (
            <a href={contacts.kaggle} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors">Kaggle</a>
          )}
        </div>
        <div className="mt-6 text-sm text-gray-600">
          <a href={`mailto:${contacts.email}`} className="hover:underline">{contacts.email}</a> · <span>{contacts.phone}</span>
        </div>
      </div>

      <div className="relative order-1 lg:order-2 h-[50vh] lg:h-[80vh]">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent"></div>
      </div>
    </section>
  )
}
