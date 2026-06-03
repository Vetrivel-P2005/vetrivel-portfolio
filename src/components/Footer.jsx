import { motion } from 'framer-motion'
export default function Footer() {
  return (
    <footer style={{
      padding:'36px 48px', borderTop:'1px solid var(--border)',
      display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16, position:'relative', zIndex:1,
    }}>
      <div style={{fontFamily:'var(--display)',fontSize:20,letterSpacing:'0.18em'}}>VP</div>
      <div style={{fontFamily:'var(--mono)',fontSize:9,letterSpacing:'0.18em',color:'var(--dim)',textTransform:'uppercase'}}>
        Vetrivel P · CS Engineer · MIT Campus Chennai
      </div>
      <div style={{fontFamily:'var(--mono)',fontSize:9,letterSpacing:'0.18em',color:'var(--dim)',textTransform:'uppercase'}}>
        © 2025
      </div>
    </footer>
  )
}
