import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CATEGORIES = [
  { label:'Languages', icon:'{ }', items:['Python','JavaScript','Java','C / C++','SQL'], color:'var(--accent)' },
  { label:'Web & Backend', icon:'⚡', items:['React.js','Node.js','Express.js','FastAPI','Firebase','REST APIs'], color:'var(--accent3)' },
  { label:'AI / ML', icon:'🧠', items:['Agentic AI','LangChain','LangGraph','LLM Fine-Tuning','Prompt Engineering','BioMistral-7B'], color:'#ff9f47' },
  { label:'Databases & Tools', icon:'🛠', items:['MongoDB','Git & GitHub','Wireshark','Nmap','ROS 2','Scikit-learn'], color:'var(--accent2)' },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-80px' })
  return (
    <section id="skills" ref={ref} style={{ padding:'130px 48px', background:'var(--fg)', position:'relative', zIndex:1 }}>
      <div style={{ maxWidth:1300, margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:80, flexWrap:'wrap', gap:24 }}>
          <div>
            <motion.div initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}}
              className="section-label dark" style={{marginBottom:22}}>002 — Expertise</motion.div>
            {['TECH','STACK'].map((w,i)=>(
              <div key={w} style={{overflow:'hidden'}}>
                <motion.h2 className="section-title" style={{color:'var(--bg)'}}
                  initial={{y:'110%'}} animate={inView?{y:0}:{}}
                  transition={{delay:.08+i*.1,duration:.85,ease:[0.16,1,0.3,1]}}>{w}</motion.h2>
              </div>
            ))}
          </div>
          <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:.3}}
            style={{fontFamily:'var(--display)',fontSize:110,color:'rgba(6,6,10,0.055)',lineHeight:1}}>04</motion.div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:2 }} className="skills-grid">
          {CATEGORIES.map((cat,ci)=>(
            <SkillCard key={cat.label} cat={cat} index={ci} inView={inView} />
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){#skills{padding:80px 24px}.skills-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

function SkillCard({ cat, index, inView }) {
  return (
    <motion.div
      initial={{opacity:0,y:28}} animate={inView?{opacity:1,y:0}:{}}
      transition={{delay:.2+index*.08,duration:.8,ease:[0.16,1,0.3,1]}}
      whileHover="hover"
      style={{ background:'var(--bg)', padding:'44px 40px', position:'relative', overflow:'hidden', cursor:'pointer' }}>

      {/* Hover flood */}
      <motion.div variants={{hover:{y:'0%'}}} initial={{y:'101%'}} transition={{duration:.55,ease:[.16,1,.3,1]}}
        style={{ position:'absolute', inset:0, background:cat.color, zIndex:0 }} />

      <div style={{ position:'relative', zIndex:1 }}>
        <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:28 }}>
          <motion.span variants={{hover:{scale:1.15,rotate:-6}}} transition={{duration:.3}}
            style={{ fontSize:28 }}>{cat.icon}</motion.span>
          <motion.div variants={{hover:{color:'var(--bg)'}}}
            style={{ fontFamily:'var(--display)', fontSize:32, letterSpacing:'0.04em', color:'var(--fg)' }}>
            {cat.label}
          </motion.div>
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {cat.items.map((item,ii)=>(
            <motion.span key={item}
              initial={{opacity:0,scale:.85}} animate={inView?{opacity:1,scale:1}:{}}
              transition={{delay:.3+index*.08+ii*.04}}
              variants={{ hover:{ background:'rgba(6,6,10,0.12)', color:'var(--bg)', borderColor:'rgba(6,6,10,0.2)' } }}
              style={{
                fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.13em',
                textTransform:'uppercase', color:'var(--dim)',
                border:'1px solid rgba(237,233,223,0.12)',
                padding:'7px 14px',
              }}>
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
