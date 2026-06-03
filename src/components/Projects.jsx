import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const PROJECTS = [
  {
    num: '01',
    name: 'ICU RESPIRATORY AI',
    sub: 'Hierarchical Agentic Framework for ICU Respiratory Care',
    tags: ['Agentic AI', 'LangGraph', 'FastAPI'],
    year: '2025',
    type: 'AI Research',
    color: '#c8ff00',
    desc: 'AI-powered clinical decision support for ICU respiratory care. Fine-tuned BioMistral-7B using QLoRA on ICU datasets. Multi-agent workflow with LangGraph for real-time treatment recommendations via React.js dashboard.',
    stack: 'Python · LangGraph · LangChain · BioMistral-7B · QLoRA · FastAPI · React.js',
  },
  {
    num: '02',
    name: 'NETWORK CLASSIFIER',
    sub: 'ML-Based Network Packet Classification',
    tags: ['Machine Learning', 'Python', 'Wireshark'],
    year: '2024',
    type: 'Networking & ML',
    color: '#4db8ff',
    desc: 'Built ML models to classify network packets (TCP, UDP, ICMP) from live Wireshark PCAP datasets. Handled full pipeline: feature extraction, preprocessing, and model evaluation using Scikit-learn.',
    stack: 'Python · Scikit-learn · Wireshark · PCAP Analysis',
  },
  {
    num: '03',
    name: 'VULN SCANNER',
    sub: 'Network Vulnerability Scanner',
    tags: ['Cybersecurity', 'Nmap', 'Python'],
    year: '2024',
    type: 'Cybersecurity',
    color: '#ff4d4d',
    desc: 'Modular Python script using Nmap to automate network reconnaissance and active port scanning. Streamlined security assessment workflows to detect open ports and flag basic network vulnerabilities.',
    stack: 'Python · Nmap · Network Recon',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-80px' })
  const [active, setActive] = useState(null)

  return (
    <section id="projects" ref={ref} style={{ padding:'130px 0', position:'relative', zIndex:1 }}>
      <div style={{ padding:'0 48px', display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:72, flexWrap:'wrap', gap:24 }}>
        <div>
          <motion.div initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}}
            className="section-label" style={{marginBottom:22}}>003 — Selected Work</motion.div>
          {['PROJECTS'].map((w,i)=>(
            <div key={w} style={{overflow:'hidden'}}>
              <motion.h2 className="section-title"
                initial={{y:'110%'}} animate={inView?{y:0}:{}}
                transition={{delay:.08+i*.1,duration:.85,ease:[0.16,1,0.3,1]}}>{w}</motion.h2>
            </div>
          ))}
        </div>
        <motion.a href="https://github.com/Vetrivel-P2005" target="_blank"
          initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:.3}}
          whileHover="h"
          style={{ display:'inline-flex', alignItems:'center', gap:12, fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--bg)', background:'var(--accent)', padding:'14px 28px', position:'relative', overflow:'hidden' }}>
          <motion.span variants={{h:{x:'101%'}}} style={{position:'absolute',inset:0,background:'var(--fg)',x:'-101%'}} transition={{duration:.4,ease:[.16,1,.3,1]}} />
          <span style={{position:'relative',zIndex:1}}>GitHub ↗</span>
        </motion.a>
      </div>

      {/* Project rows */}
      <div>
        {PROJECTS.map((proj, i) => (
          <ProjectRow key={proj.num} proj={proj} index={i} inView={inView}
            isActive={active===i} onToggle={()=>setActive(active===i?null:i)} />
        ))}
      </div>
      <style>{`@media(max-width:768px){#projects{padding:80px 0}#projects>div:first-child{padding:0 24px}.proj-meta{display:none!important}}`}</style>
    </section>
  )
}

function ProjectRow({ proj, index, inView, isActive, onToggle }) {
  return (
    <motion.div
      initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
      transition={{delay:.15+index*.1,duration:.8,ease:[0.16,1,0.3,1]}}>

      {/* Row header */}
      <motion.div onClick={onToggle} whileHover="hover" style={{
        display:'grid', gridTemplateColumns:'80px 1fr auto 180px',
        alignItems:'center', gap:32, padding:'32px 48px',
        borderTop:'1px solid var(--border)',
        position:'relative', overflow:'hidden', cursor:'pointer',
      }}>
        {/* Hover BG */}
        <motion.div variants={{hover:{scaleX:1}}} initial={{scaleX:0}}
          transition={{duration:.5,ease:[.16,1,.3,1]}}
          style={{ position:'absolute',inset:0, background:'rgba(237,233,223,0.025)', transformOrigin:'left', zIndex:0 }} />

        <div style={{fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.15em',color:'var(--dim)',position:'relative',zIndex:1}}>
          {proj.num}
        </div>

        <div style={{position:'relative',zIndex:1}}>
          <motion.div variants={{hover:{color:proj.color}}} transition={{duration:.25}}
            style={{fontFamily:'var(--display)',fontSize:'clamp(28px,3.5vw,52px)',letterSpacing:'0.03em',lineHeight:1.1}}>
            {proj.name}
          </motion.div>
          <div style={{fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.12em',color:'var(--dim)',textTransform:'uppercase',marginTop:6}}>
            {proj.type}
          </div>
        </div>

        <div style={{display:'flex',gap:8,flexWrap:'wrap',position:'relative',zIndex:1}} className="proj-meta">
          {proj.tags.map(t=>(
            <span key={t} style={{fontFamily:'var(--mono)',fontSize:9,letterSpacing:'0.12em',textTransform:'uppercase',
              color:'var(--dim)',border:'1px solid var(--border)',padding:'5px 10px'}}>
              {t}
            </span>
          ))}
        </div>

        <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',gap:16,position:'relative',zIndex:1}} className="proj-meta">
          <span style={{fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.15em',color:'var(--dim)'}}>{proj.year}</span>
          <motion.span animate={{rotate:isActive?45:0}} transition={{duration:.3}}
            style={{fontSize:20,color:proj.color}}>+</motion.span>
        </div>
      </motion.div>

      {/* Expandable detail */}
      <AnimatePresence>
        {isActive && (
          <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}
            transition={{duration:.5,ease:[0.16,1,0.3,1]}}
            style={{ overflow:'hidden', borderTop:`1px solid ${proj.color}22` }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, padding:'36px 48px 44px', background:`linear-gradient(135deg,${proj.color}06 0%,transparent 100%)` }}>
              <div>
                <div style={{fontFamily:'var(--mono)',fontSize:9,letterSpacing:'0.22em',textTransform:'uppercase',color:proj.color,marginBottom:12}}>Overview</div>
                <p style={{fontSize:15,lineHeight:1.78,color:'var(--dim)'}}>{proj.desc}</p>
              </div>
              <div>
                <div style={{fontFamily:'var(--mono)',fontSize:9,letterSpacing:'0.22em',textTransform:'uppercase',color:proj.color,marginBottom:12}}>Tech Stack</div>
                <p style={{fontSize:14,lineHeight:1.9,color:'var(--dim)',fontFamily:'var(--mono)'}}>{proj.stack}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
