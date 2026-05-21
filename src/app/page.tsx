import type { Metadata } from 'next'
import EmailForm from '@/components/EmailForm'

export const metadata: Metadata = {
  title: 'Zyade — Story architecture for knowledge sellers',
  description: 'Story architecture for knowledge sellers — from Shenzhen.',
}

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
const SYS = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif'

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: GRAIN_SVG,
          opacity: 0.04,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          padding: '60px 24px',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Label */}
        <p
          style={{
            fontFamily: SYS,
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            color: '#C9A96E',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          ZYADE
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: SYS,
            fontSize: '56px',
            fontWeight: 700,
            lineHeight: 1.05,
            color: '#FFFFFF',
            marginBottom: '28px',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ display: 'block' }}>I build brands</span>
          <span style={{ display: 'block' }}>from the inside out.</span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontFamily: SYS,
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: 1.7,
            color: '#888888',
            marginBottom: '40px',
          }}
        >
          Story architecture for knowledge sellers — from Shenzhen.
        </p>

        {/* Instagram */}
        <a
          href="https://instagram.com/zeemesso"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: SYS,
            fontSize: '13px',
            fontWeight: 500,
            color: '#C9A96E',
            textDecoration: 'none',
            marginBottom: '40px',
          }}
        >
          @zeemesso
        </a>

        {/* Email capture */}
        <div style={{ width: '100%', marginBottom: '64px' }}>
          <EmailForm />
        </div>

        {/* Footer */}
        <p
          style={{
            fontFamily: SYS,
            fontSize: '11px',
            fontWeight: 400,
            color: '#444444',
          }}
        >
          &copy; 2026 Zyade
        </p>
      </div>
    </div>
  )
}
