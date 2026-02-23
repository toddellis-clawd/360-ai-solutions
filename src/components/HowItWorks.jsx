const steps = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Consultation',
    subtitle: 'We Learn Your Business',
    description:
      'We start with a deep-dive conversation to understand your workflows, pain points, and goals. No generic solutions — we map out exactly what your AI assistant needs to do for your specific business.',
    details: ['Discovery call (30–60 min)', 'Workflow & integration audit', 'Custom AI capability roadmap'],
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Build & Deploy',
    subtitle: 'Your AI Goes Live',
    description:
      'We install, configure, and fine-tune your private AI environment — on your hardware or a private server. We handle all technical complexity, security hardening, and connect it to your existing tools.',
    details: ['Secure infrastructure setup', 'AI model configuration & tuning', 'Integration with your tools', 'Security testing & hardening'],
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
      </svg>
    ),
    title: 'Grow',
    subtitle: 'Ongoing Support & Evolution',
    description:
      'As AI technology advances and your business grows, we keep your system current. We\'re your dedicated AI partner — adding new capabilities, monitoring performance, and ensuring everything runs smoothly.',
    details: ['Proactive monitoring', 'Monthly capability updates', 'Priority support access', 'Scaling as you grow'],
  },
]

function StepCard({ step, index }) {
  const isLast = index === steps.length - 1

  return (
    <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
      {/* Connector line */}
      {!isLast && (
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: 'calc(50% + 60px)',
            right: 'calc(-50% + 60px)',
            height: '1px',
            background: 'linear-gradient(90deg, rgba(56,189,248,0.4), rgba(56,189,248,0.1))',
            display: 'none',
          }}
          className="step-connector"
        />
      )}

      <div
        className="reveal card-glow"
        style={{
          background: 'linear-gradient(135deg, rgba(15, 32, 64, 0.7) 0%, rgba(10, 22, 40, 0.85) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.12)',
          borderRadius: '20px',
          padding: '2.25rem',
          height: '100%',
          transition: 'border-color 0.3s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.35)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.12)' }}
      >
        {/* Step number */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(14,165,233,0.2), rgba(6,182,212,0.1))',
              border: '1px solid rgba(14,165,233,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38bdf8',
              flexShrink: 0,
            }}
          >
            {step.icon}
          </div>
          <span
            style={{
              fontSize: '3.5rem',
              fontWeight: 900,
              color: 'rgba(56,189,248,0.08)',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {step.number}
          </span>
        </div>

        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 800,
            color: '#f1f5f9',
            letterSpacing: '-0.02em',
            marginBottom: '0.25rem',
          }}
        >
          {step.title}
        </h3>
        <p
          style={{
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#0ea5e9',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '1rem',
          }}
        >
          {step.subtitle}
        </p>
        <p
          style={{
            color: '#64748b',
            fontSize: '0.9rem',
            lineHeight: 1.7,
            marginBottom: '1.25rem',
          }}
        >
          {step.description}
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {step.details.map((d) => (
            <li
              key={d}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#94a3b8',
                fontSize: '0.825rem',
                padding: '0.2rem 0',
              }}
            >
              <div style={{
                width: '4px', height: '4px', borderRadius: '50%',
                background: '#38bdf8', flexShrink: 0,
              }} />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: '6rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(14,165,233,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
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
            The Process
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
            Up and Running in{' '}
            <span className="gradient-text">Three Simple Steps</span>
          </h2>
          <p
            className="reveal"
            style={{
              color: '#64748b',
              fontSize: '1.05rem',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            We make deploying a private AI assistant straightforward —
            from first conversation to fully operational system.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            alignItems: 'stretch',
          }}
        >
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
