import { useEffect, useRef } from 'react'
export default function ParticleField() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, particles = [], animId
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    resize(); window.addEventListener('resize', resize)
    class P {
      constructor() { this.init() }
      init() {
        this.x = Math.random()*W; this.y = Math.random()*H
        this.r = Math.random()*1.1+0.3; this.op = Math.random()*0.3+0.05
        this.vx = (Math.random()-.5)*.18; this.vy = (Math.random()-.5)*.18
        this.life = Math.random()*280+120; this.age = 0
        this.accent = Math.random() > 0.93
      }
      update() { this.x+=this.vx; this.y+=this.vy; this.age++; if(this.age>this.life)this.init() }
      draw() {
        const a = this.op*Math.sin(Math.PI*this.age/this.life)
        ctx.save(); ctx.globalAlpha=a
        ctx.fillStyle = this.accent ? '#c8ff00' : '#ede9df'
        ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2); ctx.fill(); ctx.restore()
      }
    }
    for(let i=0;i<110;i++) particles.push(new P())
    const draw = () => { ctx.clearRect(0,0,W,H); particles.forEach(p=>{p.update();p.draw()}); animId=requestAnimationFrame(draw) }
    draw()
    return () => { window.removeEventListener('resize',resize); cancelAnimationFrame(animId) }
  }, [])
  return <canvas ref={canvasRef} style={{ position:'fixed',inset:0,pointerEvents:'none',zIndex:0,opacity:.65 }} />
}
