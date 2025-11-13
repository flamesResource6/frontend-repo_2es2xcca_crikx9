import React, { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const trailRef = useRef([])

  useEffect(() => {
    const dots = Array.from({ length: 16 }).map(() => {
      const el = document.createElement('div')
      el.className = 'pointer-events-none fixed w-3 h-3 rounded-full bg-cyan-300/50 blur-sm'
      el.style.zIndex = 9999
      document.body.appendChild(el)
      return { el, x: 0, y: 0 }
    })
    trailRef.current = dots

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', move)

    const tick = () => {
      let x = mouseX
      let y = mouseY
      dots.forEach((d, i) => {
        d.x += (x - d.x) * 0.2
        d.y += (y - d.y) * 0.2
        d.el.style.transform = `translate3d(${d.x - 6}px, ${d.y - 6}px, 0)`
        d.el.style.boxShadow = '0 0 12px 4px rgba(0,255,200,0.6)'
        x = d.x
        y = d.y
      })
      requestAnimationFrame(tick)
    }
    tick()

    return () => {
      window.removeEventListener('mousemove', move)
      dots.forEach((d) => d.el.remove())
    }
  }, [])

  return null
}
