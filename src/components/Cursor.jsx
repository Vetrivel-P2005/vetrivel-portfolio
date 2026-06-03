import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const dx = useMotionValue(-100), dy = useMotionValue(-100)
  const rx = useSpring(useMotionValue(-100), { stiffness: 130, damping: 20 })
  const ry = useSpring(useMotionValue(-100), { stiffness: 130, damping: 20 })

  useEffect(() => {
    const move = (e) => { dx.set(e.clientX); dy.set(e.clientY); rx.set(e.clientX); ry.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <motion.div style={{
        position: 'fixed', left: 0, top: 0,
        x: dx, y: dy, translateX: '-50%', translateY: '-50%',
        width: 8, height: 8, background: 'var(--accent)',
        borderRadius: '50%', pointerEvents: 'none', zIndex: 99999,
        mixBlendMode: 'difference',
      }} />
      <motion.div style={{
        position: 'fixed', left: 0, top: 0,
        x: rx, y: ry, translateX: '-50%', translateY: '-50%',
        width: 38, height: 38,
        border: '1px solid rgba(200,255,0,0.55)',
        borderRadius: '50%', pointerEvents: 'none', zIndex: 99998,
      }} />
    </>
  )
}
