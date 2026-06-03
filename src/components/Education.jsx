import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EDU = [
  {
    degree: 'B.E. Computer Science & Engineering',
    school: 'Anna University — MIT Campus',
    location: 'Chennai, India',
    period: '2023 — 2027',
    score: 'CGPA 8.04 / 10',
    note: 'Specializing in Agentic AI & Web Development',
    color: 'var(--accent)',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'Government Model School',
    location: 'Dharmapuri, India',
    period: '2021 — 2023',
    score: '565 / 600 · 94.17%',
    note: '',
    color: 'var(--accent3)',
  },
  {
    degree: 'Secondary School Leaving Certificate',
    school: 'Government High School',
    location: 'Dharmapuri, India',
    period: '2021',
    score: 'SSLC',
    note: '',
    color: '#ff9f47',
  },
]

const CERTS = [
  { title:'Web Development Internship', org:'Glowlogics Solutions', year:'2025' },
  { title:'Cybersecurity & Ethical Hacking Internship', org:'Glowlogics Solutions', year:'2025' },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-80px' })
  return (
    <section id="education" ref={ref} style={{ padding:'130px 48px', background:'var(--fg)', position:'relative', zIndex:1 }}>
      <div style={{ maxWidth:1300, margin:'0 auto' }}>
        <motion.div initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}}
          className="section-label dark" style={{marginBottom:22}}>004 — Background</motion.div>
        {['EDUCATION', '& CERTS'].map((w,i)=>(
          <div key={w} style={{overflow:'hidden'}}>
            <motion.h2 className="section-title" style={{color:'var(--bg)'}}
              initial={{y:'110%'}} animate={inView?{y:0}:{}}
              transition={{delay:.08+i*.1,duration:.85,ease:[0.16,1,0.3,1]}}>{w}</motion.h2>
          </div>
        ))}

        <div style={{ display:'grid', gridTemplateColumns:'3fr 2fr', gap:48, marginTop:72, alignItems:'start' }} className="edu-grid">
          {/* Education list */}
          <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
            {EDU.map((e,i)=>(
              <motion.div key={e.degree}
                initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}}
                transition={{delay:.2+i*.1,duration:.8,ease:[0.16,1,0.3,1]}}
                whileHover="hover"
                style={{ background:'var(--bg)', padding:'36px 36px', position:'relative', overflow:'hidden', cursor:'default' }}>
                <motion.div variants={{hover:{scaleX:1}}} initial={{scaleX:0}} transition={{duration:.5,ease:[.16,1,.3,1]}}
                  style={{ position:'absolute', left:0, top:0, bottom:0, width:3, background:e.color, transformOrigin:'top' }} />
                <motion.div variants={{hover:{x:4}}} transition={{duration:.3}}
                  style={{ paddingLeft:16 }}>
                  <div style={{fontFamily:'var(--mono)',fontSize:9,letterSpacing:'0.22em',textTransform:'uppercase',color:e.color,marginBottom:10}}>{e.period}</div>
                  <div style={{fontFamily:'var(--display)',fontSize:26,letterSpacing:'0.04em',color:'var(--fg)',marginBottom:6}}>{e.degree}</div>
                  <div style={{fontFamily:'var(--body)',fontSize:15,color:'var(--dim)',marginBottom:4}}>{e.school} · {e.location}</div>
                  <div style={{fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.12em',color:'var(--fg)',marginTop:12,fontWeight:700}}>{e.score}</div>
                  {e.note && <div style={{fontFamily:'var(--mono)',fontSize:9,letterSpacing:'0.15em',color:'var(--dim)',textTransform:'uppercase',marginTop:6}}>{e.note}</div>}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <motion.div initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:.4}}
              style={{fontFamily:'var(--display)',fontSize:32,letterSpacing:'0.04em',color:'var(--bg)',marginBottom:24}}>
              CERTIFICATIONS
            </motion.div>
            <div style={{display:'flex',flexDirection:'column',gap:2}}>
              {CERTS.map((c,i)=>(
                <motion.div key={c.title}
                  initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}}
                  transition={{delay:.5+i*.08,duration:.7}}
                  whileHover="hover"
                  style={{background:'var(--bg)',padding:'28px 28px',position:'relative',overflow:'hidden'}}>
                  <motion.div variants={{hover:{scaleX:1}}} initial={{scaleX:0}} transition={{duration:.5,ease:[.16,1,.3,1]}}
                    style={{position:'absolute',inset:0,background:'var(--accent)',transformOrigin:'left',zIndex:0}} />
                  <div style={{position:'relative',zIndex:1}}>
                    <motion.div variants={{hover:{color:'var(--bg)'}}}
                      style={{fontFamily:'var(--display)',fontSize:20,letterSpacing:'0.04em',color:'var(--fg)',marginBottom:6}}>
                      {c.title}
                    </motion.div>
                    <div style={{fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.15em',color:'var(--dim)',textTransform:'uppercase'}}>
                      {c.org} · {c.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:.65}}
              style={{marginTop:32,padding:'28px',background:'var(--bg)',border:'1px solid var(--border)'}}>
              <div style={{fontFamily:'var(--display)',fontSize:22,letterSpacing:'0.04em',color:'var(--fg)',marginBottom:16}}>LANGUAGES</div>
              {[['Tamil','Native'],['English','Professional']].map(([lang,level])=>(
                <div key={lang} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',borderBottom:'1px solid var(--border)'}}>
                  <span style={{fontFamily:'var(--body)',fontSize:15,color:'var(--fg)'}}>{lang}</span>
                  <span style={{fontFamily:'var(--mono)',fontSize:9,letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--accent)'}}>{level}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#education{padding:80px 24px}.edu-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
