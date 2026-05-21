'use client'

const SANS = '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
const MONO = 'ui-monospace, "SF Mono", monospace'

export default function M3allemPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0F0B08', position: 'relative' }}>
      {/* Full-page dot grid */}
      <div className="dot-grid" />
      <div className="vignette" />

      {/* Content layer */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Back link */}
        <div
          className="fade-up fade-up-0"
          style={{
            maxWidth: 700,
            margin: '0 auto',
            padding: '24px 24px 0',
          }}
        >
          <a
            href="/"
            style={{
              fontFamily: MONO,
              fontSize: 13,
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              color: '#8C7B6B',
              textDecoration: 'none',
            }}
          >
            ← back
          </a>
        </div>

        {/* Main content */}
        <div
          className="main-content"
          style={{
            maxWidth: 700,
            margin: '0 auto',
            padding: '80px 24px 80px',
            textAlign: 'center',
          }}
        >
          <h1
            className="fade-up fade-up-1"
            style={{
              fontFamily: 'var(--font-playfair), ui-serif, "New York", Georgia, serif',
              fontSize: 54,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              marginBottom: 12,
            }}
          >
            M3allem
          </h1>

          <p
            className="fade-up fade-up-2"
            style={{
              fontFamily: SANS,
              fontSize: 18,
              fontWeight: 400,
              color: '#8C7B6B',
              lineHeight: 1.5,
              marginBottom: 48,
            }}
          >
            Morocco&apos;s home services infrastructure
          </p>

          <p
            className="fade-up fade-up-3"
            style={{
              fontFamily: SANS,
              fontSize: 17,
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#F0E8DC',
              maxWidth: 520,
              margin: '0 auto 48px',
            }}
          >
            Vetted tradespeople for every home. Starting in Marrakech,
            building toward something bigger. Coming when I land.
          </p>

          {/* Red status pill — the one red accent */}
          <div className="fade-up fade-up-4">
            <span
              className="pill-pulse"
              style={{
                fontFamily: MONO,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: '#C97070',
                border: '1px solid rgba(201,112,112,0.25)',
                borderRadius: 100,
                padding: '6px 16px',
                display: 'inline-block',
              }}
            >
              COMING SOON
            </span>
          </div>
        </div>

        {/* Footer breathing room */}
        <div style={{ height: 80 }} />
      </div>
    </div>
  )
}
