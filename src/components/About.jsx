import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] })
  const imgY = useTransform(scrollYProgress, [0,1], [-30,30])

  return (
    <section id="about" ref={ref} style={{ padding:'130px 48px', position:'relative', zIndex:1 }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'96px', alignItems:'center', maxWidth:1300, margin:'0 auto' }} className="about-grid">

        {/* Photo column */}
        <div style={{ position:'relative' }}>
          <motion.div
            initial={{ opacity:0, x:-60 }} animate={inView?{opacity:1,x:0}:{}}
            transition={{ duration:1, ease:[0.16,1,0.3,1] }}
            style={{ position:'relative', width:'100%', maxWidth:420, aspectRatio:'3/4', overflow:'hidden' }}>

            {/* YOUR PHOTO — place photo.jpg inside /public/ folder */}
            <motion.img
              src="/photo.jfif" alt="Vetrivel P"
              style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', display:'block' }}
              onError={e => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex' }}
            />

            {/* Fallback placeholder */}
            <div style={{
              position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(200,255,0,0.07) 0%,rgba(77,184,255,0.05) 100%)',
              display:'none', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:8,
            }}>
              <div style={{ fontFamily:'var(--display)', fontSize:96, color:'rgba(237,233,223,0.06)', userSelect:'none' }}>VP</div>
              <div style={{ fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.2em', color:'var(--dim)', textTransform:'uppercase' }}>
                Add photo.jpg to /public/
              </div>
            </div>

            {/* Bottom gradient */}
            <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'45%', background:'linear-gradient(to top,rgba(6,6,10,.65),transparent)' }} />
            <div style={{ position:'absolute', bottom:20, left:20, fontFamily:'var(--mono)', fontSize:9, letterSpacing:'0.2em', color:'var(--dim)', textTransform:'uppercase' }}>
              Vetrivel P · CS Engineer
            </div>
            <div style={{ position:'absolute', inset:0, border:'1px solid rgba(237,233,223,0.09)' }} />
          </motion.div>

          {/* Available tag */}
          <motion.div initial={{opacity:0,scale:.8}} animate={inView?{opacity:1,scale:1}:{}} transition={{delay:.4,duration:.5}}
            style={{ position:'absolute', top:-14, right:-14, background:'var(--accent)', color:'var(--bg)', fontFamily:'var(--mono)', fontSize:9, letterSpacing:'0.15em', textTransform:'uppercase', padding:'9px 14px' }}>
            Open to Opportunities
          </motion.div>

          {/* CGPA ring */}
          <motion.div animate={{rotate:360}} transition={{duration:22,repeat:Infinity,ease:'linear'}}
            style={{ position:'absolute', bottom:-28, right:-28, width:90, height:90, border:'1px solid rgba(200,255,0,0.1)', borderTop:'1px solid rgba(200,255,0,0.5)', borderRadius:'50%' }} />
        </div>

        {/* Text column */}
        <div>
          <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.7}}
            className="section-label" style={{marginBottom:28}}>
            001 — About Me
          </motion.div>

          {['BUILDER', 'BY', 'NATURE'].map((w,i)=>(
            <div key={w} style={{overflow:'hidden'}}>
              <motion.h2 className="section-title"
                initial={{y:'110%'}} animate={inView?{y:0}:{}}
                transition={{delay:.08+i*.1,duration:.85,ease:[0.16,1,0.3,1]}}>
                {w}
              </motion.h2>
            </div>
          ))}

          <div style={{marginTop:32}}>
            {[
              'Computer Science undergraduate at Anna University (MIT Campus) with a sharp focus on Agentic AI and Full-Stack Development. I don\'t just write code — I architect systems that think.',
              'From fine-tuning biomedical LLMs for ICU care to building ML-powered network security tools, I tackle complex problems with clarity and precision.',
            ].map((text,i)=>(
              <motion.p key={i} initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}}
                transition={{delay:.3+i*.1,duration:.7}}
                style={{fontSize:16,lineHeight:1.78,color:'var(--dim)',marginBottom:18}}>
                {text}
              </motion.p>
            ))}
          </div>

          {/* Stats */}
          <motion.div initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:.55,duration:.7}}
            style={{ display:'flex', gap:44, marginTop:44, paddingTop:44, borderTop:'1px solid var(--border)' }}>
            {[['8.04','/ 10','CGPA'],['3+','','Projects'],['2025','','Grad Year']].map(([n,s,l])=>(
              <div key={l}>
                <div style={{fontFamily:'var(--display)',fontSize:52,lineHeight:1,color:'var(--fg)'}}>
                  {n}<span style={{color:'var(--accent)',fontSize:32}}>{s}</span>
                </div>
                <div style={{fontFamily:'var(--mono)',fontSize:9,letterSpacing:'0.18em',color:'var(--dim)',textTransform:'uppercase',marginTop:6}}>{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#about{padding:80px 24px}.about-grid{grid-template-columns:1fr!important;gap:56px!important}}`}</style>
    </section>
  )
}
