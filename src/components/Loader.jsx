import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LETTERS = 'VETRIVEL'.split('')

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n += Math.random() * 10 + 3
      if (n >= 100) { n = 100; clearInterval(id); setTimeout(onDone, 600) }
      setCount(Math.floor(n))
    }, 55)
    return () => clearInterval(id)
  }, [])
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed', inset: 0,
        background: 'var(--bg)', zIndex: 9997,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 44,
      }}
    >
      {/* Rings */}
      {[180, 280, 380].map((size, i) => (
        <motion.div key={i}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 8 + i * 4, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            width: size, height: size,
            border: `1px solid rgba(200,255,0,${0.12 - i * 0.03})`,
            borderTop: `1px solid rgba(200,255,0,${0.5 - i * 0.1})`,
            borderRadius: '50%',
          }}
        />
      ))}

      {/* Letters */}
      <div style={{ display: 'flex', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
        {LETTERS.map((l, i) => (
          <motion.span key={i}
            initial={{ y: '120%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.07, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(52px, 11vw, 140px)',
              lineHeight: 1, color: 'var(--fg)',
              display: 'inline-block', letterSpacing: '0.06em',
            }}
          >{l}</motion.span>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.3em', color: 'var(--dim)', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>
        CS Engineer · AI Developer
      </motion.p>

      {/* Bar */}
      <div style={{ width: 180, height: 1, background: 'rgba(237,233,223,0.08)', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        <motion.div
          animate={{ scaleX: count / 100 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.12 }}
          style={{ position: 'absolute', inset: 0, background: 'var(--accent)', transformOrigin: 'left' }}
        />
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--dim)', position: 'relative', zIndex: 1 }}>
        {String(count).padStart(3, '0')} %
      </div>
    </motion.div>
  )
}
