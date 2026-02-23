const CONTACT_EMAIL = 'todd.ellis@the360solution.com'

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(56,189,248,0.08)',
        padding: '2.5rem 1.5rem',
        color: '#334155',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.3px',
            }}
          >
            360
          </div>
          <span style={{ fontWeight: 600, fontSize: '0.875rem', color: '#475569' }}>
            360 AI Solutions
          </span>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Services', href: '#services' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'Demo', href: '#demo' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              style={{
                color: '#334155',
                fontSize: '0.8rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.target.style.color = '#38bdf8' }}
              onMouseLeave={(e) => { e.target.style.color = '#334155' }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{ fontSize: '0.775rem', color: '#334155' }}>
          © {year} 360 AI Solutions — Todd Ellis ·{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{ color: '#38bdf8', textDecoration: 'none' }}
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  )
}
