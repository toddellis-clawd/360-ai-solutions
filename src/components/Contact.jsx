const CONTACT_EMAIL = 'todd.ellis@the360solution.com'

function ContactCard({ icon, title, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        background: 'rgba(14,165,233,0.05)',
        border: '1px solid rgba(14,165,233,0.15)',
        borderRadius: '12px',
        padding: '1.25rem 1.5rem',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        color: 'inherit',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(56,189,248,0.4)'
        e.currentTarget.style.background = 'rgba(14,165,233,0.1)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(14,165,233,0.15)'
        e.currentTarget.style.background = 'rgba(14,165,233,0.05)'
        e.currentTarget.style.transform = 'none'
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          background: 'rgba(14,165,233,0.15)',
          border: '1px solid rgba(14,165,233,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#38bdf8',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>
          {title}
        </div>
        <div style={{ color: '#e2e8f0', fontSize: '0.95rem', fontWeight: 500 }}>
          {value}
        </div>
      </div>
    </a>
  )
}

export default function Contact() {
  const handleClick = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orb */}
      <div
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
            Get Started
          </div>
          <h2
            className="reveal"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 900,
              color: '#f1f5f9',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            Ready to Deploy Your
            <br />
            <span className="gradient-text">Private AI Assistant?</span>
          </h2>
          <p
            className="reveal"
            style={{
              color: '#64748b',
              fontSize: '1.05rem',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Let's talk about your business. The consultation is free and there's
            no obligation. We'll tell you exactly what's possible and what it takes.
          </p>
        </div>

        {/* Contact options */}
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.5rem' }}>
          <ContactCard
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            }
            title="Email Us"
            value={CONTACT_EMAIL}
            href={`mailto:${CONTACT_EMAIL}`}
          />
          <ContactCard
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            }
            title="Book a Consultation"
            value="Schedule a free 30-minute discovery call"
            href={`mailto:${CONTACT_EMAIL}?subject=360 AI Solutions - Consultation Request&body=Hi Todd,%0D%0A%0D%0AI'd like to schedule a free consultation to discuss setting up a private AI assistant for my business.%0D%0A%0D%0ABriefly about my business:%0D%0A%0D%0AThanks!`}
          />
        </div>

        {/* Big CTA */}
        <div
          className="reveal"
          style={{
            background: 'linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(6,182,212,0.08) 100%)',
            border: '1px solid rgba(56,189,248,0.2)',
            borderRadius: '20px',
            padding: '2.5rem',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              color: '#f1f5f9',
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
            }}
          >
            Free Consultation — No Commitment
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            Tell us about your business. We'll map out exactly what a private AI assistant
            can do for you — and what it takes to build it. Zero pressure.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=360 AI Solutions - Let's Talk&body=Hi Todd,%0D%0A%0D%0AI'm interested in setting up a private AI assistant for my business.%0D%0A%0D%0AAbout my business:%0D%0A%0D%0AWhat I'm hoping AI can help with:%0D%0A%0D%0AThanks!`}
              className="btn-primary"
              style={{ fontSize: '1rem', display: 'inline-flex' }}
            >
              Book a Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <button
              className="btn-secondary"
              onClick={() => handleClick('#services')}
              style={{ fontSize: '1rem' }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
