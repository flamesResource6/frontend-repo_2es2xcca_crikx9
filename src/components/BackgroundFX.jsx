import { useEffect, useRef } from 'react'

// Lightweight animated background: moving gradient + subtle grid
export default function BackgroundFX() {
  const gradRef = useRef(null)

  useEffect(() => {
    let raf
    let t = 0
    const animate = () => {
      t += 0.0025
      const x = Math.sin(t) * 50 + 50
      const y = Math.cos(t * 0.8) * 50 + 50
      if (gradRef.current) {
        gradRef.current.style.background = `radial-gradient(1200px 800px at ${x}% ${y}%, rgba(56, 189, 248, 0.12), transparent 60%), radial-gradient(900px 600px at ${100 - x}% ${100 - y}%, rgba(124, 58, 237, 0.12), transparent 60%), radial-gradient(800px 600px at ${y}% ${x}%, rgba(16, 185, 129, 0.08), transparent 60%)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Subtle circuit grid */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage:
          "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
        backgroundSize: '40px 40px'
      }} />
      {/* Animated gradients */}
      <div ref={gradRef} className="absolute inset-0" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_60%,#000000_100%)]" />
    </div>
  )
}
