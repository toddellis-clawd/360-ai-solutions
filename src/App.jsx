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
function Counter({ end, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0), [started, setStarted] = useState(false), ref = useRef()
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.unobserve(el) } }, { threshold: 0.5 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  useEffect(() => {
    if (!started) return; const num = parseInt(end); if (isNaN(num)) return
    let frame, start = performance.now()
    const step = (now) => { const p = Math.min((now - start) / 2000, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * num)); if (p < 1) frame = requestAnimationFrame(step) }
    frame = requestAnimationFrame(step); return () => cancelAnimationFrame(frame)
  }, [started, end])
  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

/* ─── Floating Particles ─── */
function FloatingParticles({ count = 12 }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    w: Math.random() * 6 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    dur: Math.random() * 15 + 15,
    opacity: Math.random() * 0.3 + 0.05,
  }))
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div key={i} className="absolute rounded-full bg-ai-accent/20 animate-float"
          style={{ width: p.w, height: p.w, left: `${p.left}%`, bottom: '-5%', animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }} />
      ))}
    </div>
  )
}

/* ─── Images ─── */
const IMG = {
  hero: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  tech: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  data: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  office: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  server: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
}
const HERO_VIDEO = 'https://videos.pexels.com/video-files/6963744/6963744-uhd_2560_1440_25fps.mp4'

/* ─── Parallax ─── */
function ParallaxDivider({ image, children, overlay = 'bg-ai-dark/80' }) {
  return (
    <section className="parallax-section relative py-32 sm:py-44" style={{ backgroundImage: `url(${image})` }}>
      <div className={`absolute inset-0 ${overlay}`} />
      <FloatingParticles count={6} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">{children}</div>
    </section>
  )
}

/* ═══ NAV ═══ */
function Nav() {
  const [open, setOpen] = useState(false), [scrolled, setScrolled] = useState(false)
  useEffect(() => { const h = () => setScrolled(window.scrollY > 80); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])
  const links = [['Services', '#services'], ['How It Works', '#process'], ['Portfolio', '#portfolio'], ['About', '#about'], ['Contact', '#contact']]
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-ai-dark/95 backdrop-blur-xl shadow-2xl py-2' : 'bg-gradient-to-b from-black/60 to-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ai-blue to-ai-cyan flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-ai-blue/30">
            <span className="text-white font-black text-xs tracking-tight">360</span>
          </div>
          <div>
            <span className="text-white font-bold text-lg leading-tight block">AI Solutions</span>
            <span className="text-ai-accent text-[10px] tracking-[0.2em] uppercase">Private AI for Business</span>
          </div>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {links.map(([l, h]) => <a key={h} href={h} className="text-white/60 hover:text-ai-accent transition-all text-sm font-medium tracking-wide">{l}</a>)}
          <a href="#contact" className="bg-ai-blue hover:bg-ai-cyan text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-lg hover:shadow-ai-blue/30 tracking-wide">Book a Consultation</a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && <div className="lg:hidden bg-ai-dark/95 border-t border-white/10 px-6 py-4">{links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block py-3 text-white/60 hover:text-ai-accent text-sm font-medium">{l}</a>)}</div>}
    </nav>
  )
}

/* ═══ HERO ═══ */
function Hero() {
  const [loaded, setLoaded] = useState(false)
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <video autoPlay muted loop playsInline onLoadedData={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        poster={IMG.hero}><source src={HERO_VIDEO} type="video/mp4" /></video>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG.hero})`, opacity: loaded ? 0 : 1, transition: 'opacity 1s' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-ai-dark/95 via-ai-dark/75 to-ai-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ai-dark via-transparent to-transparent" />
      <FloatingParticles count={18} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <Reveal><p className="text-ai-accent font-medium tracking-[0.25em] uppercase text-xs sm:text-sm mb-6">Private AI for Business</p></Reveal>
          <Reveal>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl text-white leading-[0.9] mb-8">
              <span className="font-black">Your Business</span><br />
              <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-ai-blue via-ai-accent to-ai-cyan">Deserves Its Own AI.</span>
            </h1>
          </Reveal>
          <Reveal><p className="text-white/50 text-base sm:text-lg mb-10 max-w-lg leading-relaxed font-light">Private, powerful AI assistants — setup and managed for you. Your data never leaves your control. Security-first, from day one.</p></Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="group bg-ai-blue hover:bg-ai-cyan text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-2xl hover:shadow-ai-blue/40 text-sm tracking-wide flex items-center gap-2">Book a Free Consultation <span className="group-hover:translate-x-1 transition-transform">→</span></a>
              <a href="#portfolio" className="border-2 border-white/20 hover:border-ai-accent text-white px-8 py-4 rounded-full font-bold transition-all text-sm tracking-wide hover:bg-white/5">See Our Work</a>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-6 mt-12">
              {['Self-Hosted & Private', 'Always-On AI Assistant', 'Security-First Architecture'].map((t, i) => (
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
    { icon: '🤖', title: 'Custom AI Assistants', sub: 'Built for You', desc: 'Your own always-on digital assistant, running on hardware you control. Email, calendar, messaging, marketing, research — configured to your exact business needs.' },
    { icon: '🔒', title: 'Privacy-First Setup', sub: 'Your Data, Your Rules', desc: 'Self-hosted means zero third-party exposure. No cloud AI reading your emails or client data. Enterprise-grade security with GDPR-friendly architecture.' },
    { icon: '✍️', title: 'AI Marketing Engine', sub: 'Content That Converts', desc: 'AI-powered copywriting, email sequences, newsletters, social content, and lead magnets. Professional marketing output without the agency price tag.' },
    { icon: '🎯', title: 'Lead Gen & Automation', sub: 'Clients on Autopilot', desc: 'Lead magnet creation, offer architecture, keyword research, and automated workflows. Turn your expertise into a client acquisition machine.' },
    { icon: '⚡', title: 'AI Agent Services', sub: 'Autonomous Operations', desc: 'Intelligent agents that handle intake, routing, follow-ups, and reporting — autonomously. The next evolution beyond simple chatbots.' },
    { icon: '🔧', title: 'Ongoing Support', sub: 'We Grow With You', desc: 'Monthly support, new capabilities, continuous optimization. Your AI assistant gets smarter and more capable over time.' },
  ]
  return (
    <section id="services" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-ai-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <p className="text-ai-blue font-bold tracking-[0.2em] uppercase text-xs mb-3">What We Do</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">AI at <span className="font-display italic text-ai-blue">Your Terms</span></h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto font-light text-lg">From initial setup to long-term growth — we handle the entire AI stack so you can focus on running your business.</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
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

/* ═══ HOW IT WORKS ═══ */
function Process() {
  const steps = [
    { num: '01', icon: '💬', title: 'Consultation', sub: 'We Learn Your Business', desc: 'Deep-dive conversation to understand your workflows, pain points, and goals. No generic solutions — we map exactly what your AI needs to do.', details: ['Discovery call (30–60 min)', 'Workflow & integration audit', 'Custom AI capability roadmap'] },
    { num: '02', icon: '🛠️', title: 'Build & Deploy', sub: 'Your AI Goes Live', desc: 'We install, configure, and harden your private AI environment — on your hardware or a private server. Connected to all your existing tools.', details: ['Secure infrastructure setup', 'AI model configuration', 'Integration with your tools', 'Security testing & hardening'] },
    { num: '03', icon: '📈', title: 'Grow', sub: 'Ongoing Evolution', desc: "As AI advances and your business grows, we keep your system current. Adding capabilities, monitoring performance, ensuring everything runs.", details: ['Proactive monitoring', 'Monthly capability updates', 'Priority support access', 'Scaling as you grow'] },
  ]
  return (
    <section id="process" className="py-24 sm:py-32 bg-gradient-to-br from-ai-dark to-ai-navy relative overflow-hidden">
      <FloatingParticles count={10} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <p className="text-ai-accent font-bold tracking-[0.2em] uppercase text-xs mb-3">The Process</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">Three <span className="font-display italic text-ai-accent">Simple</span> Steps</h2>
            <p className="mt-4 text-white/40 max-w-xl mx-auto font-light text-lg">From first conversation to fully operational AI — we make it straightforward.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <Reveal key={i}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-ai-accent/30 transition-all duration-500 h-full group">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{s.icon}</div>
                  <span className="text-5xl font-black text-white/5 font-display">{s.num}</span>
                </div>
                <h3 className="text-xl font-black text-white mb-1 group-hover:text-ai-accent transition-colors">{s.title}</h3>
                <p className="text-ai-accent text-xs font-bold tracking-wider uppercase mb-4">{s.sub}</p>
                <p className="text-white/50 leading-relaxed text-sm mb-6">{s.desc}</p>
                <div className="space-y-2">
                  {s.details.map((d, j) => (
                    <div key={j} className="flex items-center gap-2 text-white/40 text-sm">
                      <span className="text-ai-accent">✓</span>{d}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══ PORTFOLIO ═══ */
function Portfolio() {
  const projects = [
    { title: 'Bubbles Wash House', desc: 'Cinematic website with floating bubble animations, video hero, and dual-location maps for a family-owned laundromat.', url: 'https://bubbles-wash-house.vercel.app', tag: 'Website', color: '#1e90ff' },
    { title: 'Supermercado Las Flores', desc: 'Bilingual EN/ES cinematic site with parallax storytelling, cultural heritage narrative, and warm dark theme.', url: 'https://supermercado-las-flores.vercel.app', tag: 'Website', color: '#ef4444' },
    { title: 'A-1 Liquor', desc: 'Heritage-branded cinematic site with Bearkat orange theming, 40-year legacy storytelling, and community focus.', url: 'https://a1-liquor-website.vercel.app', tag: 'Website', color: '#f59e0b' },
    { title: 'Tuff Tread Configurator', desc: 'Interactive product configurator for industrial treadmill manufacturer — 11 base models, 253 options, real-time pricing.', url: 'https://tufftread-configurator.vercel.app', tag: 'Web App', color: '#a30003' },
    { title: 'Tuff Tread Industrial', desc: 'Dark industrial cinematic site for a premium commercial treadmill manufacturer. Matte black, red sparks, military testimonials.', url: 'https://tufftread-website.vercel.app', tag: 'Website', color: '#a30003' },
    { title: 'Project Management Board', desc: 'Full-featured Kanban board with drag-and-drop, labels, priorities, and search — designed, coded, and deployed entirely by AI.', url: 'https://kanban-board-smoky-two.vercel.app', tag: 'Web App', color: '#6366f1' },
  ]
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <p className="text-ai-blue font-bold tracking-[0.2em] uppercase text-xs mb-3">Our Work</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Built by <span className="font-display italic text-ai-blue">AI</span>, Deployed for <span className="font-display italic text-ai-blue">Business</span></h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto font-light text-lg">Every project below was designed, coded, and deployed using AI. These aren't mockups — they're live, production applications.</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={i}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block bg-gray-50 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-ai-blue/10 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full border" style={{ color: p.color, borderColor: `${p.color}33`, background: `${p.color}11` }}>{p.tag}</span>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-ai-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-ai-blue transition-colors">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══ ABOUT ═══ */
function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-gradient-to-br from-ai-dark to-ai-navy overflow-hidden relative">
      <FloatingParticles count={8} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal type="reveal-left">
            <div>
              <p className="text-ai-accent font-bold tracking-[0.2em] uppercase text-xs mb-3">About the Founder</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-10">Security-First Thinking,<br /><span className="font-display italic text-ai-accent">Applied to AI</span></h2>
              <div className="space-y-5 text-white/50 leading-relaxed">
                <p><strong className="text-white/80">Todd Ellis</strong> brings over a decade of expertise in cybersecurity and network technology to every engagement. When the AI revolution arrived, Todd saw a critical problem: businesses were rushing to adopt AI tools that handed their most sensitive data to third-party cloud providers.</p>
                <p>360 AI Solutions was founded on a simple principle — every business deserves access to powerful AI without sacrificing privacy. Todd combines deep security knowledge with hands-on AI expertise to deliver systems that are both state-of-the-art and fully under your control.</p>
                <p>Whether you're a solo consultant, a growing team, or an established company, we tailor every deployment to your specific needs, your infrastructure, and your risk tolerance.</p>
              </div>
              <blockquote className="mt-8 pl-6 border-l-4 border-ai-accent">
                <p className="font-display text-xl text-white italic">"Your data should never leave your building."</p>
                <p className="text-ai-accent font-bold text-sm mt-2">— Todd Ellis, Founder</p>
              </blockquote>
            </div>
          </Reveal>
          <Reveal type="reveal-right">
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 text-white shadow-2xl">
                <div className="grid grid-cols-2 gap-10">
                  {[['15', 'Years in Cybersecurity', '+'], ['100', 'Private & Self-Hosted', '%'], ['24', 'AI Always Running', '/7'], ['15', 'Business AI Skills', '+']].map(([num, label, suf], i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl sm:text-5xl font-black text-ai-accent font-display"><Counter end={num} suffix={suf} /></div>
                      <div className="text-white/40 text-sm mt-2 tracking-wide">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <h4 className="font-bold mb-4 text-sm tracking-wider uppercase">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Cybersecurity', 'Network Engineering', 'Self-Hosted AI', 'Privacy Architecture', 'Business Automation', 'System Integration'].map((m, i) => <span key={i} className="text-xs bg-white/10 px-3 py-1.5 rounded-full border border-white/10">{m}</span>)}
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

/* ═══ PRICING TIERS ═══ */
function Pricing() {
  const tiers = [
    { name: 'Clean', price: '$500–1,500', desc: 'Professional single-page website — modern, mobile-optimized, deployed to production.', features: ['Custom design & branding', 'Mobile responsive', 'SEO optimized', 'Live URL on Vercel', 'Contact forms & maps'], popular: false },
    { name: 'Cinematic', price: '$1,500–3,500', desc: 'Premium parallax experience — video hero, scroll animations, storytelling design.', features: ['Everything in Clean', 'Video hero background', 'Parallax image sections', 'Scroll-triggered animations', 'Animated counters', 'Premium typography'], popular: true },
    { name: 'Interactive', price: '$2,500–5,000', desc: 'Custom web applications — configurators, dashboards, data tools, and more.', features: ['Everything in Cinematic', 'Custom business logic', 'Real-time data', 'User interactions', 'Database integration', 'API connections'], popular: false },
  ]
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <p className="text-ai-blue font-bold tracking-[0.2em] uppercase text-xs mb-3">Investment Tiers</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">Transparent <span className="font-display italic text-ai-blue">Pricing</span></h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto font-light text-lg">No hidden fees, no monthly hosting costs. You own everything we build.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((t, i) => (
            <Reveal key={i}>
              <div className={`relative rounded-3xl p-8 h-full flex flex-col ${t.popular ? 'bg-gradient-to-br from-ai-dark to-ai-navy text-white shadow-2xl ring-2 ring-ai-accent/30 scale-105' : 'bg-gray-50 border border-gray-100'}`}>
                {t.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ai-accent text-ai-dark text-xs font-black px-4 py-1 rounded-full">MOST POPULAR</div>}
                <h3 className={`text-2xl font-black mb-2 ${t.popular ? 'text-white' : 'text-gray-900'}`}>{t.name}</h3>
                <div className={`text-3xl font-black font-display mb-2 ${t.popular ? 'text-ai-accent' : 'text-ai-blue'}`}>{t.price}</div>
                <p className={`text-sm mb-8 ${t.popular ? 'text-white/50' : 'text-gray-400'}`}>{t.desc}</p>
                <div className="space-y-3 flex-1">
                  {t.features.map((f, j) => (
                    <div key={j} className={`flex items-center gap-2 text-sm ${t.popular ? 'text-white/70' : 'text-gray-500'}`}>
                      <span className={t.popular ? 'text-ai-accent' : 'text-ai-blue'}>✓</span>{f}
                    </div>
                  ))}
                </div>
                <a href="#contact" className={`mt-8 inline-block text-center px-8 py-3.5 rounded-full font-bold transition-all text-sm tracking-wide ${t.popular ? 'bg-ai-accent hover:bg-white text-ai-dark hover:shadow-xl' : 'bg-ai-blue hover:bg-ai-cyan text-white hover:shadow-lg'}`}>Get Started →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══ CTA ═══ */
function FinalCTA() {
  return (
    <section className="parallax-section relative py-32 sm:py-44" style={{ backgroundImage: `url(${IMG.server})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/85 to-ai-cyan/85" />
      <FloatingParticles count={10} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal><h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">Ready for <span className="font-display italic">Your Own AI?</span></h2></Reveal>
        <Reveal><p className="text-white/80 text-lg sm:text-xl mt-6 mb-10 max-w-2xl mx-auto font-light">The consultation is free. No obligation. We'll tell you exactly what's possible and what it takes.</p></Reveal>
        <Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:todd.ellis@the360solution.com?subject=360 AI Solutions - Let's Talk" className="bg-white text-ai-blue hover:bg-gray-100 px-10 py-4 rounded-full font-bold transition-all text-sm tracking-wide shadow-xl hover:shadow-2xl">Book a Free Consultation →</a>
            <a href="#portfolio" className="bg-white/20 hover:bg-white/30 text-white px-10 py-4 rounded-full font-bold transition-all border-2 border-white/30 text-sm tracking-wide">See Our Work</a>
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ai-blue to-ai-cyan flex items-center justify-center"><span className="text-white font-black text-xs">360</span></div>
              <div><span className="text-white font-bold text-lg block leading-tight">AI Solutions</span><span className="text-ai-accent text-[10px] tracking-[0.2em] uppercase">Private AI for Business</span></div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed mb-4">AI assistant setup & consulting for business owners. Private, powerful, secure. We build the tools, train the team, and stay until it works.</p>
            <p className="text-white/15 text-sm italic">"AI isn't the future. It's now."</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Contact</h3>
            <div className="space-y-3 text-white/40 text-sm">
              <div className="flex items-center gap-3"><span className="text-ai-accent">✉️</span><a href="mailto:todd.ellis@the360solution.com" className="hover:text-ai-accent transition-colors">todd.ellis@the360solution.com</a></div>
              <div className="flex items-center gap-3"><span className="text-ai-accent">🌐</span><a href="https://aisolutions360.net" className="hover:text-ai-accent transition-colors">aisolutions360.net</a></div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Quick Links</h3>
            <div className="space-y-2 text-white/40 text-sm">
              {[['Services', '#services'], ['How It Works', '#process'], ['Portfolio', '#portfolio'], ['About', '#about']].map(([l, h], i) => (
                <a key={i} href={h} className="block hover:text-ai-accent transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/15 text-sm">© {new Date().getFullYear()} 360 AI Solutions. All rights reserved.</p>
          <p className="text-white/10 text-xs">Todd Ellis · The 360 Solution</p>
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
      <ParallaxDivider image={IMG.tech}>
        <Reveal><h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white italic leading-tight">AI That Works<br />For You</h2></Reveal>
        <Reveal><p className="text-white/50 text-lg sm:text-xl mt-6 font-light">Not the other way around. Private. Powerful. Yours.</p></Reveal>
      </ParallaxDivider>
      <Process />
      <ParallaxDivider image={IMG.data}>
        <Reveal><h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white italic leading-tight">Your Data Never<br />Leaves Your Building</h2></Reveal>
        <Reveal><p className="text-white/50 text-lg sm:text-xl mt-6 font-light">Enterprise-grade security. Zero third-party exposure. Self-hosted by design.</p></Reveal>
      </ParallaxDivider>
      <Portfolio />
      <Pricing />
      <About />
      <ParallaxDivider image={IMG.office}>
        <Reveal><h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white italic leading-tight">Hands-On<br />Implementation</h2></Reveal>
        <Reveal><p className="text-white/50 text-lg sm:text-xl mt-6 font-light">Not just consulting. We build, deploy, and support. Until it works.</p></Reveal>
      </ParallaxDivider>
      <FinalCTA />
      <Footer />
    </div>
  )
}
