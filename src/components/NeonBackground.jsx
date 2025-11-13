import React, { useEffect, useRef } from 'react'

// Subtle neural-network style animated background using canvas
export default function NeonBackground() {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const nodesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = '100%'
      canvas.style.height = '100%'
    }
    resize()
    window.addEventListener('resize', resize)

    // Initialize nodes
    const count = Math.min(120, Math.floor(window.innerWidth / 12))
    nodesRef.current = Array.from({ length: count }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3 * dpr,
      vy: (Math.random() - 0.5) * 0.3 * dpr,
      r: 1 + Math.random() * 1.5 * dpr,
      c: Math.random(),
    }))

    const draw = () => {
      const nodes = nodesRef.current
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background radial gradient
      const grad = ctx.createRadialGradient(
        canvas.width * 0.7,
        canvas.height * 0.3,
        0,
        canvas.width * 0.7,
        canvas.height * 0.3,
        Math.max(canvas.width, canvas.height)
      )
      grad.addColorStop(0, 'rgba(0, 255, 200, 0.05)')
      grad.addColorStop(1, 'rgba(0, 0, 0, 0.0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Move & draw nodes
      for (let n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 120 * dpr) {
            const alpha = (1 - dist / (120 * dpr)) * 0.25
            ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`
            ctx.lineWidth = 0.75 * dpr
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Glow nodes
      for (let n of nodes) {
        ctx.beginPath()
        ctx.fillStyle = 'rgba(0, 255, 180, 0.6)'
        ctx.shadowColor = 'rgba(0, 255, 255, 0.6)'
        ctx.shadowBlur = 8 * dpr
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 opacity-80"
      aria-hidden="true"
    />
  )
}
