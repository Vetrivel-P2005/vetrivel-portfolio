import { motion } from 'framer-motion'
const ITEMS = ['LangChain','LangGraph','React.js','FastAPI','Python','Node.js','BioMistral-7B','MongoDB','WebGL','Agentic AI','TypeScript','ROS 2','Nmap','Scikit-learn']
export default function Marquee() {
  const doubled = [...ITEMS,...ITEMS]
  return (
    <div style={{ background:'var(--accent)', padding:'15px 0', overflow:'hidden', position:'relative', zIndex:2 }}>
      <motion.div animate={{x:['0%','-50%']}} transition={{duration:25,repeat:Infinity,ease:'linear'}}
        style={{ display:'flex', whiteSpace:'nowrap' }}>
        {doubled.map((item,i)=>(
          <span key={i} style={{
            fontFamily:'var(--display)', fontSize:19, letterSpacing:'0.08em',
            color:'var(--bg)', padding:'0 32px', display:'inline-flex', alignItems:'center', gap:32,
          }}>
            {item}<span style={{opacity:.3}}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
