import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const SOCIALS = [
  { label:'GitHub', url:'https://github.com/Vetrivel-P2005' },
  { label:'LinkedIn', url:'https://linkedin.com/in/vetrivel-p-144a182b6' },
  { label:'Email', url:'mailto:vetrivel13022005@gmail.com' },
  { label:'Resume', url:'/resume.pdf' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', message:'' })

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:vetrivel13022005@gmail.com?subject=Hello from ${form.name}&body=${encodeURIComponent(form.message + '\n\n— ' + form.email)}`
    setSent(true)
  }

  return (
    <section id="contact" ref={ref} style={{ padding:'130px 48px', background:'var(--fg)', position:'relative', zIndex:1 }}>
      <div style={{ maxWidth:1300, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'100px', alignItems:'start' }} className="contact-grid">

        {/* Left */}
        <div>
          <motion.div initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}}
            className="section-label dark" style={{marginBottom:22}}>005 — Get In Touch</motion.div>
          {["LET'S","BUILD"].map((w,i)=>(
            <div key={w} style={{overflow:'hidden'}}>
              <motion.h2 className="section-title" style={{color:'var(--bg)'}}
                initial={{y:'110%'}} animate={inView?{y:0}:{}}
                transition={{delay:.08+i*.1,duration:.85,ease:[0.16,1,0.3,1]}}>{w}</motion.h2>
            </div>
          ))}
          <motion.p initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:.3}}
            style={{fontSize:16,lineHeight:1.78,color:'rgba(6,6,10,0.5)',marginTop:28,maxWidth:360}}>
            Open to internships, research collaborations, and exciting projects. 
            Let's create something intelligent together.
          </motion.p>

          <motion.a href="mailto:vetrivel13022005@gmail.com"
            initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:.4}}
            style={{display:'block',fontFamily:'var(--display)',fontSize:'clamp(18px,2.8vw,36px)',color:'var(--bg)',letterSpacing:'0.03em',marginTop:36,position:'relative',width:'fit-content'}}>
            vetrivel13022005@gmail.com
            <motion.span style={{position:'absolute',bottom:-2,left:0,right:0,height:2,background:'var(--bg)',scaleX:0,transformOrigin:'left'}}
              whileHover={{scaleX:1}} transition={{duration:.4}} />
          </motion.a>

          <motion.div initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:.5}}
            style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:36}}>
            {SOCIALS.map(s=>(
              <motion.a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                whileHover="h"
                style={{fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.18em',textTransform:'uppercase',
                  color:'rgba(6,6,10,0.6)',border:'1px solid rgba(6,6,10,0.2)',
                  padding:'10px 20px',position:'relative',overflow:'hidden'}}>
                <motion.span variants={{h:{x:'0%'}}} initial={{x:'-101%'}} transition={{duration:.4,ease:[.16,1,.3,1]}}
                  style={{position:'absolute',inset:0,background:'var(--bg)'}} />
                <motion.span variants={{h:{color:'var(--fg)'}}} style={{position:'relative',zIndex:1}}>{s.label}</motion.span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:.6}}
            style={{marginTop:48,fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.18em',color:'rgba(6,6,10,0.4)',textTransform:'uppercase'}}>
            📍 Tamil Nadu, India 636803 · +91 90422 13566
          </motion.div>
        </div>

        {/* Form */}
        <motion.form initial={{opacity:0,x:40}} animate={inView?{opacity:1,x:0}:{}} transition={{delay:.3,duration:.9,ease:[0.16,1,0.3,1]}}
          onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:28}}>
          {[
            { key:'name', label:'Your Name', type:'text' },
            { key:'email', label:'Email Address', type:'email' },
          ].map(f=>(
            <div key={f.key} style={{position:'relative'}}>
              <input type={f.type} required placeholder=" "
                value={form[f.key]} onChange={e=>setForm({...form,[f.key]:e.target.value})}
                style={{
                  width:'100%', background:'transparent', border:'none',
                  borderBottom:'1px solid rgba(6,6,10,0.2)', padding:'14px 0',
                  fontFamily:'var(--body)', fontSize:15, color:'var(--bg)', outline:'none',
                }}
              />
              <label style={{
                position:'absolute',top:14,left:0,fontFamily:'var(--mono)',fontSize:9,
                letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(6,6,10,0.4)',
                pointerEvents:'none',transition:'all .25s',
              }}
              className="float-label">{f.label}</label>
            </div>
          ))}
          <div style={{position:'relative'}}>
            <textarea required placeholder=" " rows={4}
              value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
              style={{
                width:'100%', background:'transparent', border:'none',
                borderBottom:'1px solid rgba(6,6,10,0.2)', padding:'14px 0',
                fontFamily:'var(--body)', fontSize:15, color:'var(--bg)', outline:'none', resize:'none',
              }} />
            <label style={{
              position:'absolute',top:14,left:0,fontFamily:'var(--mono)',fontSize:9,
              letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(6,6,10,0.4)',
              pointerEvents:'none',transition:'all .25s',
            }} className="float-label">Your Message</label>
          </div>
          <motion.button type="submit" whileHover="h"
            style={{
              display:'inline-flex', alignItems:'center', gap:12, alignSelf:'flex-start',
              fontFamily:'var(--mono)', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase',
              color:sent?'var(--bg)':'var(--fg)', background:sent?'var(--accent)':'var(--bg)',
              border:'none', padding:'18px 36px', position:'relative', overflow:'hidden',
            }}>
            {!sent && <><motion.span variants={{h:{x:'101%'}}} style={{position:'absolute',inset:0,background:'var(--accent)',x:'-101%'}} transition={{duration:.4,ease:[.16,1,.3,1]}} /><motion.span variants={{h:{color:'var(--bg)'}}} style={{position:'relative',zIndex:1}}>Send Message →</motion.span></>}
            {sent && <span style={{position:'relative',zIndex:1}}>✓ Opening Mail Client</span>}
          </motion.button>
        </motion.form>
      </div>
      <style>{`
        input:focus~.float-label, input:not(:placeholder-shown)~.float-label,
        textarea:focus~.float-label, textarea:not(:placeholder-shown)~.float-label {
          top:-10px!important; font-size:8px!important; color:var(--bg)!important;
        }
        input:focus, textarea:focus { border-bottom-color:var(--bg)!important; }
        @media(max-width:768px){#contact{padding:80px 24px}.contact-grid{grid-template-columns:1fr!important;gap:60px!important}}
      `}</style>
    </section>
  )
}
