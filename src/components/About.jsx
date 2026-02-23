const stats = [
  { value: '15+', label: 'Years in Cybersecurity' },
  { value: '100%', label: 'Private, Self-Hosted' },
  { value: '24/7', label: 'AI Always Running' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '6rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section divider top */}
      <div className="section-divider" style={{ marginBottom: '6rem' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Todd's info */}
          <div>
            <div
              className="reveal"
              style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#0ea5e9',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.875rem',
              }}
            >
              About the Founder
            </div>
            <h2
              className="reveal"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 800,
                color: '#f1f5f9',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}
            >
              Security-First Thinking,
              <br />
              <span className="gradient-text">Applied to AI</span>
            </h2>

            <div
              className="reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                color: '#64748b',
                fontSize: '1rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#94a3b8' }}>Todd Ellis</strong> brings over a decade
                of expertise in cybersecurity and network technology to every engagement.
                When the AI revolution arrived, Todd saw a critical problem: businesses were
                rushing to adopt AI tools that handed their most sensitive data to third-party
                cloud providers.
              </p>
              <p style={{ margin: 0 }}>
                360 AI Solutions was founded on a simple principle — every business deserves
                access to powerful AI without sacrificing privacy. Todd combines deep security
                knowledge with hands-on AI expertise to deliver systems that are both
                state-of-the-art and fully under your control.
              </p>
              <p style={{ margin: 0 }}>
                Whether you're a solo consultant, a growing team, or an established company,
                we tailor every deployment to your specific needs, your infrastructure, and
                your risk tolerance.
              </p>
            </div>

            {/* Tags */}
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[
                'Cybersecurity', 'Network Engineering', 'Self-Hosted AI',
                'Privacy Architecture', 'System Integration', 'Business Automation',
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(14,165,233,0.08)',
                    border: '1px solid rgba(14,165,233,0.2)',
                    borderRadius: '100px',
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.775rem',
                    fontWeight: 500,
                    color: '#38bdf8',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Visual card + stats */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Profile card */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(15,32,64,0.9) 0%, rgba(10,22,40,0.95) 100%)',
                border: '1px solid rgba(56,189,248,0.15)',
                borderRadius: '20px',
                padding: '2rem',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
              }}
            >
              {/* Avatar placeholder */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  flexShrink: 0,
                  boxShadow: '0 8px 24px rgba(14,165,233,0.3)',
                }}
              >
                👤
              </div>
              <div>
                <h3 style={{ color: '#f1f5f9', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>
                  Todd Ellis
                </h3>
                <p style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.625rem' }}>
                  Founder & CEO, 360 AI Solutions
                </p>
                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                  Cybersecurity specialist & network technology expert
                  turned AI deployment strategist
                </p>
              </div>
            </div>

            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
              }}
            >
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    background: 'rgba(14,165,233,0.05)',
                    border: '1px solid rgba(14,165,233,0.15)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 900,
                      letterSpacing: '-0.03em',
                      background: 'linear-gradient(135deg, #38bdf8, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ color: '#475569', fontSize: '0.72rem', fontWeight: 500, lineHeight: 1.4 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div
              style={{
                background: 'rgba(34,197,94,0.05)',
                border: '1px solid rgba(34,197,94,0.2)',
                borderRadius: '12px',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <div>
                <div style={{ color: '#22c55e', fontSize: '0.8rem', fontWeight: 700 }}>Security-First by Default</div>
                <div style={{ color: '#475569', fontSize: '0.75rem' }}>Every deployment is hardened and tested</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
