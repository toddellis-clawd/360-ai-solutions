import { useState, useEffect, useRef } from 'react'

/* ─── Scroll Reveal ─── */
function useReveal() {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } }, { threshold: 0.15 })
    obs.observe(el); return () => obs.disconnect()
  }, []); return ref
}
function Reveal({ children, className = '', type = 'reveal' }) {
  const ref = useReveal(); return <div ref={ref} className={`${type} ${className}`}>{children}</div>
}

/* ─── Counter ─── */
function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0), [started, setStarted] = useState(false), ref = useRef()
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.unobserve(el) } }, { threshold: 0.5 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  useEffect(() => {
    if (!started) return; const num = parseInt(end); if (isNaN(num)) return
    let frame, start = performance.now()
    const step = (now) => { const p = Math.min((now-start)/2000,1); setCount(Math.floor((1-Math.pow(1-p,3))*num)); if(p<1) frame=requestAnimationFrame(step) }
    frame = requestAnimationFrame(step); return () => cancelAnimationFrame(frame)
  }, [started, end])
  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Floating Particles ─── */
function FloatingParticles({ count = 15 }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    w: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    dur: Math.random() * 12 + 12,
  }))
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div key={i} className="absolute rounded-full bg-ai-cyan/20 animate-float"
          style={{ width: p.w, height: p.w, left: `${p.left}%`, bottom: '-10%', animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }} />
      ))}
    </div>
  )
}

/* ─── Images ─── */
const IMG = {
  parallax1: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  parallax2: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  parallaxCta: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  hero: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
}
const HERO_VIDEO = 'https://videos.pexels.com/video-files/8721926/8721926-uhd_2560_1440_25fps.mp4'

/* ─── Parallax ─── */
function ParallaxDivider({ image, children }) {
  return (
    <section className="parallax-section relative py-32 sm:py-44" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-ai-dark/80" />
      <FloatingParticles count={8} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">{children}</div>
    </section>
  )
}

/* ═══ NAV ═══ */
function Nav() {
  const [open, setOpen] = useState(false), [scrolled, setScrolled] = useState(false)
  useEffect(() => { const h = () => setScrolled(window.scrollY > 80); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])
  const links = [['Services','#services'],['AI Agents','#agents'],['About','#about'],['Results','#results'],['FAQ','#faq'],['Contact','#contact']]
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-ai-dark/95 backdrop-blur-xl shadow-2xl py-2' : 'bg-gradient-to-b from-black/60 to-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ai-blue to-ai-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-ai-blue/30">
            <span className="text-white font-black text-lg">360</span>
          </div>
          <div>
            <span className="text-white font-bold text-lg leading-tight block">360 AI</span>
            <span className="text-ai-accent text-[10px] tracking-[0.2em] uppercase">Solutions</span>
          </div>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {links.map(([l,h])=><a key={h} href={h} className="text-white/60 hover:text-ai-accent transition-all text-sm font-medium tracking-wide">{l}</a>)}
          <a href="#contact" className="bg-ai-blue hover:bg-ai-accent text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-lg hover:shadow-ai-blue/30 tracking-wide">Get Started</a>
        </div>
        <button onClick={()=>setOpen(!open)} className="lg:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && <div className="lg:hidden bg-ai-dark/95 border-t border-white/10 px-6 py-4">{links.map(([l,h])=><a key={h} href={h} onClick={()=>setOpen(false)} className="block py-3 text-white/60 hover:text-ai-accent text-sm font-medium">{l}</a>)}</div>}
    </nav>
  )
}

/* ═══ HERO ═══ */
function Hero() {
  const [loaded, setLoaded] = useState(false)
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <video autoPlay muted loop playsInline onLoadedData={()=>setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${loaded?'opacity-100':'opacity-0'}`}
        poster={IMG.hero}><source src={HERO_VIDEO} type="video/mp4" /></video>
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:`url(${IMG.hero})`,opacity:loaded?0:1,transition:'opacity 1s'}} />
      <div className="absolute inset-0 bg-gradient-to-r from-ai-dark/95 via-ai-dark/70 to-ai-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ai-dark via-transparent to-transparent" />
      <FloatingParticles count={20} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <Reveal><p className="text-ai-accent font-medium tracking-[0.25em] uppercase text-xs sm:text-sm mb-6">AI-Powered Business Solutions</p></Reveal>
          <Reveal>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl text-white leading-[0.9] mb-8">
              <span className="font-black">AI Isn't the</span><br />
              <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-ai-blue via-ai-accent to-ai-cyan">Future. It's Now.</span>
            </h1>
          </Reveal>
          <Reveal><p className="text-white/50 text-base sm:text-lg mb-10 max-w-lg leading-relaxed font-light">Private AI assistants and autonomous agents for small businesses. Your data stays yours. Setup, customization, and support from a cybersecurity expert.</p></Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="group bg-ai-blue hover:bg-ai-accent text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-2xl hover:shadow-ai-blue/40 text-sm tracking-wide flex items-center gap-2">Start Your AI Journey <span className="group-hover:translate-x-1 transition-transform">→</span></a>
              <a href="#services" className="border-2 border-white/20 hover:border-ai-accent text-white px-8 py-4 rounded-full font-bold transition-all text-sm tracking-wide hover:bg-white/5">See Services</a>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-6 mt-12">
              {['Privacy-First Architecture','24/7 AI Availability','Cybersecurity Expertise'].map((t,i)=>(
                <div key={i} className="flex items-center gap-2 text-white/40 text-sm"><span className="text-ai-accent text-lg">✓</span>{t}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-ai-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  )
}

/* ═══ SERVICES ═══ */
function Services() {
  const services = [
    { icon: '🤖', title: 'Custom AI Assistant', sub: 'Your Personal AI', desc: 'Tailored AI assistants trained on your business data. Answer questions, draft documents, and automate tasks — all private to your organization.' },
    { icon: '🔒', title: 'Privacy-First Setup', sub: 'Your Data, Your Rules', desc: 'Self-hosted AI that never sends your data to the cloud. Complete control over your information with enterprise-grade security.' },
    { icon: '📈', title: 'AI Marketing Engine', sub: 'Grow Smarter', desc: 'AI-powered content generation, SEO optimization, and campaign automation. More leads, less effort, better results.' },
    { icon: '🎯', title: 'Lead Generation', sub: 'Fill Your Pipeline', desc: 'Intelligent lead scoring, automated outreach, and smart CRM integration. Let AI find and qualify your next customers.' },
    { icon: '🔗', title: 'System Integrations', sub: 'Connect Everything', desc: 'Seamlessly connect AI to your existing tools — CRM, email, calendar, and more. One brain, all your systems.' },
    { icon: '🛡️', title: 'Ongoing Support', sub: 'Always There', desc: '24/7 monitoring, updates, and optimization. Your AI gets smarter over time with continuous fine-tuning and expert oversight.' },
  ]
  return (
    <section id="services" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-ai-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <p className="text-ai-blue font-bold tracking-[0.2em] uppercase text-xs mb-3">What We Offer</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Our <span className="font-display italic text-ai-blue">Services</span></h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto font-light text-lg">End-to-end AI solutions — from strategy and setup to integration and ongoing optimization.</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s,i)=>(
            <Reveal key={i}>
              <div className="group bg-gray-50 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-ai-blue/10 h-full">
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 className="text-xl font-black text-gray-900 mb-1 group-hover:text-ai-blue transition-colors">{s.title}</h3>
                <p className="text-ai-blue text-xs font-bold tracking-wider uppercase mb-4">{s.sub}</p>
                <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══ AI AGENTS ═══ */
function AIAgents() {
  const features = [
    { icon: '💬', title: 'Intake & Triage Bots', desc: 'AI agents that handle initial customer inquiries, qualify leads, and route them to the right person — 24/7, no delays.' },
    { icon: '⚡', title: 'Workflow Automation', desc: 'Autonomous agents that execute multi-step business processes. From invoice processing to appointment scheduling — hands-free.' },
    { icon: '🔀', title: 'Smart Lead Routing', desc: 'AI that scores, segments, and routes leads in real-time based on intent, urgency, and your team capacity.' },
    { icon: '📊', title: 'Reporting Agents', desc: 'Agents that pull data from multiple sources, generate insights, and deliver daily briefings — no dashboards to check.' },
  ]
  return (
    <section id="agents" className="py-24 sm:py-32 bg-gradient-to-br from-ai-dark to-ai-navy relative overflow-hidden">
      <FloatingParticles count={12} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-6">
            <span className="inline-block bg-ai-accent/20 text-ai-accent text-xs font-black px-4 py-1.5 rounded-full border border-ai-accent/30 mb-6">NEW — PREMIUM OFFERING</span>
            <p className="text-ai-accent font-bold tracking-[0.2em] uppercase text-xs mb-3">Autonomous Intelligence</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">AI <span className="font-display italic text-ai-accent">Agent</span> Services</h2>
            <p className="mt-4 text-white/40 max-w-2xl mx-auto font-light text-lg">Go beyond chatbots. Deploy autonomous AI agents that think, decide, and act on behalf of your business — around the clock.</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6 mt-16">
          {features.map((f,i)=>(
            <Reveal key={i} type={i%2===0?'reveal-left':'reveal-right'}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-ai-accent/30 transition-all duration-500 h-full group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-ai-accent transition-colors">{f.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="text-center mt-12">
            <a href="#contact" className="inline-flex items-center gap-2 bg-ai-accent hover:bg-ai-blue text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-2xl hover:shadow-ai-accent/30 text-sm tracking-wide group">Deploy Your First Agent <span className="group-hover:translate-x-1 transition-transform">→</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ═══ ABOUT ═══ */
function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal type="reveal-left">
            <div>
              <p className="text-ai-blue font-bold tracking-[0.2em] uppercase text-xs mb-3">Who We Are</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-10">About <span className="font-display italic text-ai-blue">360 AI</span></h2>
              <div className="space-y-5 text-gray-500 leading-relaxed">
                <p>360 AI Solutions was founded by <strong className="text-gray-900">Todd Ellis</strong>, a technologist with deep roots in network engineering and cybersecurity. After years of securing enterprise systems, Todd saw a gap: small businesses were being left behind in the AI revolution.</p>
                <p>The big players had dedicated AI teams. SMBs had… nothing. Or worse — generic tools that sent their data to unknown servers. That wasn't good enough.</p>
                <p>360 AI Solutions exists to bring enterprise-grade AI to businesses of every size — private, secure, and actually useful. Every solution is built with the same security mindset Todd brings from his cybersecurity background.</p>
              </div>
              <blockquote className="mt-8 pl-6 border-l-4 border-ai-blue">
                <p className="font-display text-xl text-gray-900 italic">"Your AI should work for you — not the other way around."</p>
                <p className="text-ai-blue font-bold text-sm mt-2">— Todd Ellis, Founder</p>
              </blockquote>
            </div>
          </Reveal>
          <Reveal type="reveal-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-ai-dark to-ai-navy rounded-3xl p-10 text-white shadow-2xl">
                <div className="grid grid-cols-2 gap-10">
                  {[['15','Years in Tech','+'],[' ','Data Breaches','0'],['100','Uptime SLA','%'],['50','Clients Served','+']].map(([num,label,suf],i)=>(
                    <div key={i} className="text-center">
                      <div className="text-4xl sm:text-5xl font-black text-ai-accent font-display"><Counter end={num.trim()} suffix={suf} /></div>
                      <div className="text-white/40 text-sm mt-2 tracking-wide">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <h4 className="font-bold mb-4 text-sm tracking-wider uppercase">Trust Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    {['🔒 Data Privacy','⚡ Always-On','🛡️ Security-First','🤝 SMB Focused'].map((m,i)=><span key={i} className="text-xs bg-white/10 px-3 py-1.5 rounded-full border border-white/10">{m}</span>)}
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-ai-blue/10 rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-ai-accent/10 rounded-full -z-10" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ═══ RESULTS ═══ */
function Results() {
  const results = [
    { metric: '3x', label: 'Faster Response Times', desc: 'AI assistants handle inquiries instantly — no more waiting for business hours.' },
    { metric: '60%', label: 'Less Manual Work', desc: 'Automate repetitive tasks so your team can focus on what actually matters.' },
    { metric: '40%', label: 'More Qualified Leads', desc: 'AI-powered lead scoring means your sales team talks to the right people.' },
  ]
  const testimonials = [
    { name: 'Small Business Owner', text: 'We went from drowning in emails to having AI handle 80% of customer inquiries. Game changer for a 5-person team.' },
    { name: 'Marketing Agency', text: 'The privacy-first approach sold us. Our clients\' data stays on our servers. Todd set everything up and it just works.' },
    { name: 'Professional Services Firm', text: 'The AI agent handles intake, schedules consultations, and sends follow-ups. It\'s like hiring three people for the price of one tool.' },
  ]
  return (
    <section id="results" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-ai-blue font-bold tracking-[0.2em] uppercase text-xs mb-3">Proven Impact</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Real <span className="font-display italic text-ai-blue">Results</span></h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {results.map((r,i)=>(
            <Reveal key={i}>
              <div className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-500 border border-gray-100 h-full">
                <div className="text-5xl sm:text-6xl font-black text-ai-blue font-display mb-2">{r.metric}</div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{r.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t,i)=>(
            <Reveal key={i}>
              <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                <div className="flex gap-1 mb-5">{Array.from({length:5},(_,j)=><span key={j} className="text-ai-gold text-xl">★</span>)}</div>
                <p className="text-gray-500 leading-relaxed flex-1 italic">"{t.text}"</p>
                <p className="text-gray-900 font-bold text-sm mt-6">— {t.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══ FAQ ═══ */
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
  const faqs = [
    { q: 'What does "privacy-first" actually mean?', a: 'Your AI runs on infrastructure you control. Your data never touches third-party servers. We set up self-hosted models that keep everything in-house — the same standard we\'d demand for our own sensitive data.' },
    { q: 'Do I need technical expertise to use this?', a: 'Not at all. We handle all the technical setup, configuration, and maintenance. You get a simple interface to interact with your AI. If you can send an email, you can use your AI assistant.' },
    { q: 'How long does setup take?', a: 'Most AI assistant deployments are live within 1-2 weeks. Agent services may take 2-4 weeks depending on complexity. We work on your timeline and keep you updated every step of the way.' },
    { q: 'What\'s the difference between an AI assistant and an AI agent?', a: 'An assistant answers questions and helps with tasks when asked. An agent acts autonomously — it monitors, decides, and executes tasks on its own based on rules you define. Think assistant = reactive, agent = proactive.' },
    { q: 'Is this just ChatGPT with a wrapper?', a: 'No. We deploy actual AI models on your infrastructure (or secure private cloud). Your data trains your model. Your prompts aren\'t logged by OpenAI or anyone else. It\'s a fundamentally different approach to AI.' },
    { q: 'What if something goes wrong?', a: 'You get direct access to Todd — not a support ticket queue. 24/7 monitoring catches issues before you notice them, and we maintain rollback capabilities for every deployment.' },
  ]
  return (
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-ai-blue font-bold tracking-[0.2em] uppercase text-xs mb-3">Got Questions?</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Frequently <span className="font-display italic text-ai-blue">Asked</span></h2>
          </div>
        </Reveal>
        <div className="space-y-4">
          {faqs.map((faq,i)=>(
            <Reveal key={i}>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                <button onClick={()=>setOpenIdx(openIdx===i?null:i)} className="w-full flex justify-between items-center p-6 text-left">
                  <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
                  <span className={`text-ai-blue transition-transform duration-300 ${openIdx===i?'rotate-180':''}`}>▼</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIdx===i?'max-h-60 opacity-100':'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 text-gray-500 leading-relaxed">{faq.a}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══ FINAL CTA ═══ */
function FinalCTA() {
  return (
    <section className="parallax-section relative py-32 sm:py-44" style={{ backgroundImage: `url(${IMG.parallaxCta})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/85 to-ai-accent/85" />
      <FloatingParticles count={12} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal><h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">Ready to Put AI <span className="font-display italic">to Work?</span></h2></Reveal>
        <Reveal><p className="text-white/80 text-lg sm:text-xl mt-6 mb-10 max-w-2xl mx-auto font-light">Let's build your private AI solution. No generic tools. No data compromises. Just AI that actually works for your business.</p></Reveal>
        <Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:todd.ellis@the360solution.com" className="bg-white text-ai-blue hover:bg-gray-100 px-10 py-4 rounded-full font-bold transition-all text-sm tracking-wide shadow-xl hover:shadow-2xl">📧 Email Todd</a>
            <a href="#contact" className="bg-white/20 hover:bg-white/30 text-white px-10 py-4 rounded-full font-bold transition-all border-2 border-white/30 text-sm tracking-wide">Learn More ↓</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ═══ FOOTER ═══ */
function Footer() {
  return (
    <footer id="contact" className="py-20 bg-ai-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ai-blue to-ai-accent flex items-center justify-center"><span className="text-white font-black text-sm">360</span></div>
              <div><span className="text-white font-bold text-lg block leading-tight">360 AI</span><span className="text-ai-accent text-[10px] tracking-[0.2em] uppercase">Solutions</span></div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed mb-4">Private AI assistants and autonomous agents for small businesses. Built by a cybersecurity expert who believes your data is yours.</p>
            <p className="text-white/15 text-sm italic">"AI Isn't the Future. It's Now."</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Services</h3>
            <div className="space-y-2 text-white/40 text-sm">
              <p>Custom AI Assistants</p>
              <p>AI Agent Deployment</p>
              <p>Privacy-First Setup</p>
              <p>System Integrations</p>
              <p>Ongoing Support & Optimization</p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Contact</h3>
            <div className="space-y-3 text-white/40 text-sm">
              <p><a href="mailto:todd.ellis@the360solution.com" className="hover:text-ai-accent transition-colors">todd.ellis@the360solution.com</a></p>
              <p><a href="https://aisolutions360.net" target="_blank" rel="noopener noreferrer" className="hover:text-ai-accent transition-colors">aisolutions360.net</a></p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {['🔒 Data Privacy','⚡ Always-On','🛡️ Security-First'].map((b,i)=><span key={i} className="text-xs bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-white/30">{b}</span>)}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/15 text-sm">© {new Date().getFullYear()} 360 AI Solutions. All rights reserved.</p>
          <p className="text-white/10 text-xs">Built with precision. Secured by design.</p>
        </div>
      </div>
    </footer>
  )
}

/* ═══ APP ═══ */
export default function App() {
  return (
    <div className="font-sans">
      <Nav />
      <Hero />
      <Services />
      <ParallaxDivider image={IMG.parallax1}>
        <Reveal><h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white italic leading-tight">Intelligence That<br />Works for You</h2></Reveal>
        <Reveal><p className="text-white/50 text-lg sm:text-xl mt-6 font-light">Not another chatbot. Real AI that understands your business and acts on it.</p></Reveal>
      </ParallaxDivider>
      <AIAgents />
      <ParallaxDivider image={IMG.parallax2}>
        <Reveal><h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white italic leading-tight">Your Data.<br />Your Control.</h2></Reveal>
        <Reveal><p className="text-white/50 text-lg sm:text-xl mt-6 font-light">Privacy isn't a feature — it's the foundation everything is built on.</p></Reveal>
      </ParallaxDivider>
      <About />
      <Results />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
