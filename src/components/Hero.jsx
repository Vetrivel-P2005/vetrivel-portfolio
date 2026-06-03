import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 200])
  const op = useTransform(scrollY, [0, 500], [1, 0])

  const ROLES = ['CS Engineer', 'Agentic AI Dev', 'Full-Stack Builder']

  return (
    <section id="hero" ref={ref} style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '0 48px', position: 'relative', overflow: 'hidden',
    }}>
      {/* BG Glow */}
      <motion.div style={{ opacity: op, position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 65% 45%, rgba(200,255,0,0.045) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 75%, rgba(77,184,255,0.04) 0%, transparent 60%)' }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(237,233,223,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(237,233,223,0.016) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',
      }} />

      <motion.div style={{ y, position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.7 }}
          className="section-label" style={{ marginBottom: 40 }}>
          Anna University · MIT Campus Chennai
        </motion.div>

        {/* Name */}
        {['VETRIVEL', 'P'].map((word, wi) => (
          <div key={wi} style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '110%' }} animate={{ y: 0 }}
              transition={{ delay: 3.0 + wi * 0.13, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(78px, 15vw, 210px)',
                lineHeight: 0.86, letterSpacing: '-0.01em',
                color: wi === 0 ? 'var(--fg)' : 'var(--accent)',
              }}>
              {word}
            </motion.h1>
          </div>
        ))}

        {/* Role chips */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.8, ease: [0.16,1,0.3,1] }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>
          {ROLES.map((r, i) => (
            <motion.span key={r}
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.4 + i * 0.08 }}
              style={{
                fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em',
                textTransform: 'uppercase',
                border: '1px solid rgba(237,233,223,0.15)',
                padding: '8px 16px', color: 'var(--dim)',
              }}>
              {r}
            </motion.span>
          ))}
        </motion.div>

        {/* Desc + CTA */}
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8, ease: [0.16,1,0.3,1] }}
          style={{ marginTop: 48, display: 'flex', gap: 60, alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--dim)', maxWidth: 380 }}>
            B.E. Computer Science undergraduate specializing in Agentic AI &amp; Full-Stack Development.
            Building systems that think, adapt, and deliver.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <motion.button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover="h"
              style={{
                display:'inline-flex', alignItems:'center', gap:12,
                fontFamily:'var(--mono)', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase',
                color:'var(--bg)', background:'var(--accent)', padding:'16px 32px',
                position:'relative', overflow:'hidden', border:'none',
              }}>
              <motion.span variants={{h:{x:'101%'}}} style={{position:'absolute',inset:0,background:'var(--fg)',x:'-101%'}} transition={{duration:.4,ease:[.16,1,.3,1]}} />
              <span style={{position:'relative',zIndex:1}}>View Work →</span>
            </motion.button>
            <motion.a href="mailto:vetrivel13022005@gmail.com"
              whileHover="h"
              style={{
                display:'inline-flex', alignItems:'center', gap:12,
                fontFamily:'var(--mono)', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase',
                color:'var(--fg)', background:'transparent', padding:'16px 32px',
                position:'relative', overflow:'hidden',
                border:'1px solid rgba(237,233,223,0.2)',
              }}>
              <motion.span variants={{h:{x:'101%'}}} style={{position:'absolute',inset:0,background:'var(--fg)',x:'-101%'}} transition={{duration:.4,ease:[.16,1,.3,1]}} />
              <motion.span variants={{h:{color:'var(--bg)'}}} style={{position:'relative',zIndex:1}}>Say Hello</motion.span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.8 }}
        style={{ position:'absolute', bottom:36, right:48, display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
        <motion.div animate={{ scaleY:[1,.35,1], opacity:[.4,1,.4] }} transition={{ duration:1.8, repeat:Infinity }}
          style={{ width:1, height:56, background:'linear-gradient(to bottom, var(--dim), transparent)' }} />
        <span style={{ fontFamily:'var(--mono)', fontSize:9, letterSpacing:'0.22em', color:'var(--dim)', writingMode:'vertical-rl', textTransform:'uppercase' }}>Scroll</span>
      </motion.div>

      {/* CGPA badge */}
      <motion.div initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ delay:3.7, duration:.8 }}
        style={{ position:'absolute', top:'45%', right:48, textAlign:'center' }}
        className="cgpa-badge">
        <div style={{ fontFamily:'var(--display)', fontSize:52, color:'var(--accent)', lineHeight:1 }}>8.04</div>
        <div style={{ fontFamily:'var(--mono)', fontSize:9, letterSpacing:'0.2em', color:'var(--dim)', textTransform:'uppercase', marginTop:4 }}>CGPA / 10</div>
      </motion.div>

      <style>{`
        @media(max-width:900px){.cgpa-badge{display:none}}
        @media(max-width:768px){#hero{padding:0 24px}}
      `}</style>
    </section>
  )
}
