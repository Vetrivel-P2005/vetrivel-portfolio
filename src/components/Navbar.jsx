import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const go = (id) => { setMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.9, ease: [0.16,1,0.3,1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: scrolled ? '14px 48px' : '26px 48px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: scrolled ? 'rgba(6,6,10,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transition: 'padding .4s, background .4s',
        }}>
        <motion.span style={{ fontFamily:'var(--display)', fontSize:22, letterSpacing:'0.18em' }}
          whileHover={{ color:'var(--accent)' }} transition={{ duration:.2 }}>
          VP
        </motion.span>

        <ul style={{ display:'flex', gap:32, listStyle:'none' }} className="desk-nav">
          {LINKS.map((l,i) => (
            <motion.li key={l.id} initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:2.9+i*.07}}>
              <motion.button onClick={()=>go(l.id)}
                style={{ fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.2em',
                  textTransform:'uppercase', color:'var(--dim)', background:'none',
                  border:'none', position:'relative', padding:'4px 0' }}
                whileHover={{ color:'var(--fg)' }}>
                {l.label}
                <motion.span style={{
                  position:'absolute', bottom:0, left:0, right:0,
                  height:1, background:'var(--accent)', scaleX:0, transformOrigin:'left',
                }} whileHover={{ scaleX:1 }} transition={{ duration:.3 }} />
              </motion.button>
            </motion.li>
          ))}
        </ul>

        <motion.a href="/resume.pdf" target="_blank"
          style={{
            fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.18em',
            textTransform:'uppercase', color:'var(--bg)', background:'var(--accent)',
            padding:'10px 20px', position:'relative', overflow:'hidden',
          }}
          whileHover="h" className="desk-nav">
          <motion.span variants={{h:{x:'101%'}}} style={{position:'absolute',inset:0,background:'var(--fg)',x:'-101%'}} transition={{duration:.4,ease:[.16,1,.3,1]}} />
          <span style={{position:'relative',zIndex:1}}>Resume ↗</span>
        </motion.a>

        <button onClick={()=>setMenu(!menu)} className="ham" style={{ display:'none', flexDirection:'column', gap:5, padding:8, background:'none', border:'none' }} aria-label="Menu">
          {[0,1].map(i=>(
            <motion.span key={i}
              animate={menu ? {rotate:i===0?45:-45,y:i===0?7:-7} : {rotate:0,y:0}}
              style={{ display:'block', width:22, height:1, background:'var(--fg)', transformOrigin:'center' }}
            />
          ))}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menu && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            style={{ position:'fixed',inset:0,zIndex:999,background:'rgba(6,6,10,.97)',
              display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:28 }}>
            {LINKS.map((l,i)=>(
              <motion.button key={l.id} onClick={()=>go(l.id)}
                initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:i*.07}}
                style={{ fontFamily:'var(--display)', fontSize:52, letterSpacing:'0.05em', color:'var(--fg)', background:'none', border:'none' }}>
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:768px){.desk-nav{display:none!important}.ham{display:flex!important}nav{padding-left:24px!important;padding-right:24px!important}}
      `}</style>
    </>
  )
}
