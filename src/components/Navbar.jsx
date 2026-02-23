import { useState, useEffect } from 'react'

const links = [
  { label: 'What We Do', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Demo', href: '#demo' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(5, 13, 26, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(56, 189, 248, 0.1)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.5px',
            }}
          >
            360
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: '1.1rem',
              color: '#f1f5f9',
              letterSpacing: '-0.3px',
            }}
          >
            AI Solutions
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                padding: '0.5rem 0.875rem',
                borderRadius: '6px',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#94a3b8',
                transition: 'color 0.2s, background 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#38bdf8'
                e.target.style.background = 'rgba(56,189,248,0.06)'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#94a3b8'
                e.target.style.background = 'transparent'
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary"
            style={{ marginLeft: '0.75rem', padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="mobile-menu-btn"
          style={{
            background: 'none',
            border: '1px solid rgba(56,189,248,0.25)',
            borderRadius: '6px',
            padding: '0.5rem',
            cursor: 'pointer',
            color: '#38bdf8',
            display: 'none',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <span style={{ display: 'block', width: '20px', height: '2px', background: '#38bdf8', borderRadius: '2px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ display: 'block', width: '20px', height: '2px', background: '#38bdf8', borderRadius: '2px', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '20px', height: '2px', background: '#38bdf8', borderRadius: '2px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: 'rgba(5, 13, 26, 0.98)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(56, 189, 248, 0.12)',
            padding: '1rem 1.5rem 1.5rem',
          }}
          className="mobile-menu"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                display: 'block',
                padding: '0.875rem 0',
                color: '#cbd5e1',
                fontWeight: 500,
                borderBottom: '1px solid rgba(56,189,248,0.08)',
                textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary"
            style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
          >
            Book a Consultation
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
