'use client'

import { useEffect, useState, useRef } from 'react'

const SMOOTHING = 0.15

export default function CursorEffect() {
  const [isPointerDevice, setIsPointerDevice] = useState(false)
  const [isCursorVisible, setIsCursorVisible] = useState(true)
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const smoothRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const hasPointer = window.matchMedia('(pointer: fine)').matches
    setIsPointerDevice(hasPointer)

    if (!hasPointer) return

    const updateCursor = () => {
      const { x, y } = mouseRef.current
      let { x: sx, y: sy } = smoothRef.current

      sx += (x - sx) * SMOOTHING
      sy += (y - sy) * SMOOTHING
      smoothRef.current = { x: sx, y: sy }

      if (cursorRef.current) {
        cursorRef.current.style.setProperty('--cursor-x', `${sx}px`)
        cursorRef.current.style.setProperty('--cursor-y', `${sy}px`)
      }

      if (trailRef.current) {
        trailRef.current.style.setProperty('--cursor-x', `${sx}px`)
        trailRef.current.style.setProperty('--cursor-y', `${sy}px`)
      }

      document.documentElement.style.setProperty('--cursor-x', `${sx}px`)
      document.documentElement.style.setProperty('--cursor-y', `${sy}px`)

      rafRef.current = requestAnimationFrame(updateCursor)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      const inBounds =
        e.clientX >= 0 &&
        e.clientX <= window.innerWidth &&
        e.clientY >= 0 &&
        e.clientY <= window.innerHeight
      setIsCursorVisible(inBounds)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [role="button"], input, [tabindex="0"]')
      document.body.classList.toggle('cursor-over-interactive', !!interactive)
    }

    const handleMouseLeave = () => setIsCursorVisible(false)
    const handleMouseEnter = () => setIsCursorVisible(true)
    const handleVisibilityChange = () => {
      if (document.hidden) setIsCursorVisible(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    rafRef.current = requestAnimationFrame(updateCursor)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      document.body.classList.remove('cursor-over-interactive')
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    if (!isPointerDevice) return
    document.body.classList.toggle('cursor-hidden', !isCursorVisible)
  }, [isPointerDevice, isCursorVisible])

  if (!isPointerDevice) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor-glow fixed inset-0 pointer-events-none z-[9999]"
        aria-hidden
      />
      <div
        ref={trailRef}
        className="cursor-trail fixed inset-0 pointer-events-none z-[9998]"
        aria-hidden
      />
    </>
  )
}
