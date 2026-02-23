import { useEffect, useRef } from 'react'

function AnimatedOrb({ style }) {
  return (
    <div
      style={{
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export default function Hero() {
  const handleClick = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '72px',
      }}
    >
      {/* Background grid */}
      <div
        className="grid-bg"
        style={{ position: 'absolute', inset: 0, opacity: 0.6 }}
      />

      {/* Atmospheric orbs */}
      <AnimatedOrb style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)',
        top: '-100px', right: '-100px',
        animation: 'orbFloat1 8s ease-in-out infinite',
      }} />
      <AnimatedOrb style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        bottom: '-50px', left: '-80px',
        animation: 'orbFloat2 10s ease-in-out infinite',
      }} />
      <AnimatedOrb style={{
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)',
        top: '40%', left: '30%',
        animation: 'orbFloat3 12s ease-in-out infinite',
      }} />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
          textAlign: 'center',
        }}
      >
        {/* Badge */}
        <div
          className="animate-fade-in"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(14, 165, 233, 0.1)',
            border: '1px solid rgba(14, 165, 233, 0.3)',
            borderRadius: '100px',
            padding: '0.375rem 1rem',
            marginBottom: '2rem',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#38bdf8',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 6px #38bdf8', animation: 'pulse 2s infinite' }} />
          Self-Hosted AI for Business
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-in-up delay-100"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            color: '#f1f5f9',
          }}
        >
          Your Business Deserves{' '}
          <span className="gradient-text">Its Own AI</span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-in-up delay-200"
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            color: '#94a3b8',
            lineHeight: 1.7,
            maxWidth: '640px',
            margin: '0 auto 2.5rem',
            fontWeight: 400,
          }}
        >
          Private, powerful AI assistants — setup and managed for you.
          Your data never leaves your control.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up delay-300"
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button
            className="btn-primary"
            onClick={() => handleClick('#contact')}
            style={{ fontSize: '1rem' }}
          >
            Book a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button
            className="btn-secondary"
            onClick={() => handleClick('#demo')}
            style={{ fontSize: '1rem' }}
          >
            See a Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          </button>
        </div>

        {/* Trust badges */}
        <div
          className="animate-fade-in delay-500"
          style={{
            marginTop: '4rem',
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            { icon: '🔒', label: 'Data Never Leaves Your Network' },
            { icon: '⚡', label: 'Always-On AI Assistant' },
            { icon: '🛡️', label: 'Security-First Setup' },
          ].map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#64748b',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              <span style={{ fontSize: '1rem' }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '120px',
        background: 'linear-gradient(to bottom, transparent, #050d1a)',
        pointerEvents: 'none',
      }} />

      <style>{`
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 40px) scale(1.05); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.08); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px #38bdf8; }
          50% { opacity: 0.6; box-shadow: 0 0 12px #38bdf8; }
        }
      `}</style>
    </section>
  )
}
