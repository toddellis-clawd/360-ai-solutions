const DEMO_URL = 'https://kanban-board-smoky-two.vercel.app'

function BrowserChrome({ children }) {
  return (
    <div
      style={{
        borderRadius: '14px',
        overflow: 'hidden',
        border: '1px solid rgba(56,189,248,0.2)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(14,165,233,0.1)',
        background: '#0a1628',
      }}
    >
      {/* Browser bar */}
      <div
        style={{
          background: 'rgba(15,32,64,0.9)',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          borderBottom: '1px solid rgba(56,189,248,0.1)',
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#ff5f57', '#ffbd2e', '#28ca41'].map((c) => (
            <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        {/* URL bar */}
        <div
          style={{
            flex: 1,
            background: 'rgba(5,13,26,0.8)',
            border: '1px solid rgba(56,189,248,0.12)',
            borderRadius: '6px',
            padding: '0.3rem 0.75rem',
            fontSize: '0.75rem',
            color: '#64748b',
            fontFamily: 'monospace',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          {DEMO_URL.replace('https://', '')}
        </div>
      </div>

      {children}
    </div>
  )
}

export default function Demo() {
  return (
    <section
      id="demo"
      style={{
        padding: '6rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 0%, rgba(14,165,233,0.03) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left: text */}
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
              Live Demo
            </div>
            <h2
              className="reveal"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 800,
                color: '#f1f5f9',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              See What AI-Built
              <br />
              <span className="gradient-text">Tools Look Like</span>
            </h2>
            <p
              className="reveal"
              style={{
                color: '#64748b',
                fontSize: '1rem',
                lineHeight: 1.8,
                marginBottom: '1.75rem',
              }}
            >
              This project management board was designed, coded, and deployed
              entirely by AI — no human-written code. It's a live example of
              what's possible when AI works as your business's digital employee.
            </p>

            {/* Feature bullets */}
            <div className="reveal" style={{ marginBottom: '2rem' }}>
              {[
                'Fully functional Kanban board',
                'Drag-and-drop task management',
                'Built and deployed in hours, not weeks',
                'Live at a real URL — no demo smoke and mirrors',
              ].map((feat) => (
                <div
                  key={feat}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.625rem',
                    padding: '0.4rem 0',
                    color: '#94a3b8',
                    fontSize: '0.9rem',
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    style={{ flexShrink: 0, marginTop: '2px' }}
                  >
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                  {feat}
                </div>
              ))}
            </div>

            <div className="reveal">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.95rem', display: 'inline-flex' }}
              >
                Open Live Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: browser mockup */}
          <div className="reveal">
            <BrowserChrome>
              {/* Kanban board visual mockup */}
              <div
                style={{
                  padding: '1.25rem',
                  background: '#0d1b2e',
                  minHeight: '320px',
                  overflow: 'hidden',
                }}
              >
                {/* App header */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }} />
                    <span style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.9rem' }}>Project Board</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)' }} />
                    <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)' }} />
                  </div>
                </div>

                {/* Kanban columns */}
                <div style={{ display: 'flex', gap: '0.75rem', height: '240px', overflow: 'hidden' }}>
                  {[
                    {
                      title: 'To Do',
                      color: '#64748b',
                      cards: [
                        { title: 'Research AI vendors', tag: 'Research', tagColor: '#7c3aed' },
                        { title: 'Draft onboarding flow', tag: 'Design', tagColor: '#0891b2' },
                      ]
                    },
                    {
                      title: 'In Progress',
                      color: '#f59e0b',
                      cards: [
                        { title: 'Build assistant API', tag: 'Dev', tagColor: '#16a34a' },
                        { title: 'Write system prompts', tag: 'AI', tagColor: '#0ea5e9' },
                      ]
                    },
                    {
                      title: 'Done',
                      color: '#22c55e',
                      cards: [
                        { title: 'Setup dev environment', tag: 'Ops', tagColor: '#dc2626' },
                        { title: 'Define project scope', tag: 'PM', tagColor: '#9333ea' },
                      ]
                    },
                  ].map((col) => (
                    <div
                      key={col.title}
                      style={{
                        flex: 1,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '10px',
                        padding: '0.75rem',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.375rem',
                        marginBottom: '0.75rem',
                      }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: col.color }} />
                        <span style={{ color: '#94a3b8', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          {col.title}
                        </span>
                      </div>
                      {col.cards.map((card) => (
                        <div
                          key={card.title}
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '7px',
                            padding: '0.6rem 0.625rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <div style={{
                            display: 'inline-block',
                            background: `${card.tagColor}22`,
                            border: `1px solid ${card.tagColor}44`,
                            borderRadius: '4px',
                            padding: '1px 6px',
                            fontSize: '0.6rem',
                            fontWeight: 600,
                            color: card.tagColor,
                            marginBottom: '0.3rem',
                          }}>
                            {card.tag}
                          </div>
                          <p style={{ color: '#e2e8f0', fontSize: '0.72rem', margin: 0, lineHeight: 1.4 }}>
                            {card.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </BrowserChrome>

            {/* Caption */}
            <p
              style={{
                textAlign: 'center',
                color: '#475569',
                fontSize: '0.8rem',
                marginTop: '1rem',
                fontStyle: 'italic',
              }}
            >
              Live demo — designed, built, and deployed entirely by AI
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
