const services = [
  {
    icon: '🤖',
    title: 'Custom AI Assistant Setup',
    description:
      'Your own always-on digital assistant, running on hardware you own. Configured to your business needs — email, calendar, messaging, and more.',
    highlights: ['Runs on hardware you own', 'Configured to your needs', '24/7 availability'],
  },
  {
    icon: '🔒',
    title: 'Privacy-First Architecture',
    description:
      'Self-hosted means your data never leaves your control. No cloud AI reading your emails or client data. Enterprise-grade security from day one.',
    highlights: ['Zero third-party data exposure', 'Enterprise-grade security', 'GDPR & compliance friendly'],
  },
  {
    icon: '✍️',
    title: 'Marketing & Content Engine',
    description:
      'AI-powered copywriting, email sequences, newsletters, and social content. Professional marketing output without the agency price tag.',
    highlights: ['Email sequences & newsletters', 'Social content creation', 'Agency results, fraction of the cost'],
  },
  {
    icon: '🎯',
    title: 'Lead Generation & Offers',
    description:
      'Lead magnet creation, landing page copy, offer architecture, and keyword research. Turn your expertise into a client acquisition machine.',
    highlights: ['Lead magnet creation', 'Offer architecture', 'Keyword & SEO research'],
  },
  {
    icon: '🔧',
    title: 'Business Integrations',
    description:
      'Connect your calendar, email, project management, and CRM. Your assistant works across all your tools — not just one.',
    highlights: ['Email & calendar sync', 'CRM & project management', 'All tools, one assistant'],
  },
  {
    icon: '📞',
    title: 'Ongoing Support & Growth',
    description:
      'Monthly support, new capabilities as you grow, and continuous optimization. Your AI assistant gets smarter over time.',
    highlights: ['Monthly support included', 'Continuous optimization', 'New capabilities as you grow'],
  },
]

function ServiceCard({ service, index }) {
  return (
    <div
      className="reveal card-glow"
      style={{
        animationDelay: `${index * 0.1}s`,
        background: 'linear-gradient(135deg, rgba(15, 32, 64, 0.8) 0%, rgba(10, 22, 40, 0.9) 100%)',
        border: '1px solid rgba(56, 189, 248, 0.12)',
        borderRadius: '16px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.35)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.12)'
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '12px',
          background: 'rgba(14, 165, 233, 0.1)',
          border: '1px solid rgba(14, 165, 233, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.75rem',
          flexShrink: 0,
        }}
      >
        {service.icon}
      </div>

      <div>
        <h3
          style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            color: '#f1f5f9',
            marginBottom: '0.625rem',
            letterSpacing: '-0.02em',
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            color: '#64748b',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {service.description}
        </p>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginTop: 'auto' }}>
        {service.highlights.map((h) => (
          <li
            key={h}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#38bdf8',
              fontSize: '0.8rem',
              fontWeight: 500,
              padding: '0.25rem 0',
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              style={{ flexShrink: 0 }}
            >
              <polyline points="20,6 9,17 4,12" />
            </svg>
            {h}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '6rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
          What We Do
        </div>
        <h2
          className="reveal"
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: '#f1f5f9',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}
        >
          Everything You Need to Run AI{' '}
          <span className="gradient-text">At Your Own Terms</span>
        </h2>
        <p
          className="reveal"
          style={{
            color: '#64748b',
            fontSize: '1.05rem',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          From initial setup to long-term growth — we handle the entire AI stack
          so you can focus on running your business.
        </p>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}
