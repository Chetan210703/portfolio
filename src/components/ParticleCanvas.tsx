'use client'

import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 75
const CONNECTION_DISTANCE = 180
const REPULSION_RADIUS = 80
const REPULSION_STRENGTH = 0.02
const ATTRACTION_RADIUS = 220
const ATTRACTION_STRENGTH = 0.01
const CENTER_EXCLUSION_RADIUS = 220
const CENTER_REPULSION_STRENGTH = 0.015
const MOUSE_SMOOTHING = 0.12
interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  baseX: number
  baseY: number
  radius: number
}

function initParticles(width: number, height: number): Particle[] {
  const particles: Particle[] = []
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const x = width * (0.05 + 0.9 * Math.random())
    const y = height * (0.05 + 0.9 * Math.random())
    particles.push({
      x,
      y,
      vx: 0,
      vy: 0,
      baseX: x,
      baseY: y,
      radius: Math.random() * 1.5 + 0.8,
    })
  }
  return particles
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const smoothMouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef<number>(0)
  const mountedRef = useRef(true)
  const visibleRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const resize = () => {
      if (!mountedRef.current) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particlesRef.current = initParticles(w, h)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    const handleVisibilityChange = () => {
      if (document.hidden) mouseRef.current = { x: -9999, y: -9999 }
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    const heroEl = document.getElementById('hero')
    const io =
      heroEl &&
      new IntersectionObserver(
        ([e]) => {
          visibleRef.current = e.isIntersecting
        },
        { threshold: 0 }
      )
    if (io && heroEl) io.observe(heroEl)

    const animate = () => {
      if (!mountedRef.current || !ctx || !canvas || !visibleRef.current) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }

      const w = canvas.width / (window.devicePixelRatio || 1)
      const h = canvas.height / (window.devicePixelRatio || 1)

      smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * MOUSE_SMOOTHING
      smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * MOUSE_SMOOTHING

      const mx = smoothMouseRef.current.x
      const my = smoothMouseRef.current.y
      const mouseActive = mx > 0 && mx < w && my > 0 && my < h

      ctx.clearRect(0, 0, w, h)

      const particles = particlesRef.current

      const centerX = w / 2
      const centerY = h / 2

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        let ax = 0
        let ay = 0

        const toCenterX = centerX - p.x
        const toCenterY = centerY - p.y
        const distToCenter = Math.sqrt(toCenterX * toCenterX + toCenterY * toCenterY)
        if (distToCenter < CENTER_EXCLUSION_RADIUS && distToCenter > 1) {
          const force = (1 - distToCenter / CENTER_EXCLUSION_RADIUS) * CENTER_REPULSION_STRENGTH
          ax -= (toCenterX / distToCenter) * force
          ay -= (toCenterY / distToCenter) * force
        }

        if (mouseActive) {
          const dx = mx - p.x
          const dy = my - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > 1) {
            if (dist < REPULSION_RADIUS) {
              const force = (1 - dist / REPULSION_RADIUS) * REPULSION_STRENGTH
              ax -= (dx / dist) * force
              ay -= (dy / dist) * force
            } else if (dist < ATTRACTION_RADIUS) {
              const force = (1 - dist / ATTRACTION_RADIUS) * ATTRACTION_STRENGTH
              ax += (dx / dist) * force
              ay += (dy / dist) * force
            }
          }
        }

        p.vx = p.vx * 0.85 + ax
        p.vy = p.vy * 0.85 + ay
        p.x += p.vx
        p.y += p.vy

        const returnForce = 0.012
        p.vx += (p.baseX - p.x) * returnForce
        p.vy += (p.baseY - p.y) * returnForce

        p.x = Math.max(0, Math.min(w, p.x))
        p.y = Math.max(0, Math.min(h, p.y))
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p2.x - p1.x
          const dy = p2.y - p1.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) {
            const opacity = 0.15 + (1 - dist / CONNECTION_DISTANCE) * 0.25
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(226, 232, 240, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(226, 232, 240, 0.6)'
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      mountedRef.current = false
      io?.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden
      style={{ background: 'transparent' }}
    />
  )
}
