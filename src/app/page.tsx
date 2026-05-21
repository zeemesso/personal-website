'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const SERIF = 'ui-serif, "New York", Georgia, serif'
const SANS = '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
const MONO = 'ui-monospace, "SF Mono", monospace'

function ShenzhenClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function tick() {
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Shanghai',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return <span>{time || '\u00A0'}</span>
}

function MetaBar() {
  return (
    <div
      className="meta-bar"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 24px',
        maxWidth: 700,
        margin: '0 auto',
        width: '100%',
        fontFamily: MONO,
        fontSize: 12,
        letterSpacing: '0.04em',
        textTransform: 'uppercase' as const,
        color: '#8A7A6A',
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        深圳, CHINA
      </span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <ShenzhenClock />
      </span>
    </div>
  )
}

function SocialIcons() {
  return (
    <div style={{ display: 'flex', gap: 4, marginTop: 12 }}>
      <a
        href="https://instagram.com/messaoudizyade"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Instagram"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        href="https://x.com/messaoudizyade"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="X"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-6.8-8.5L19.5 4h-2l-5.2 6.3L8 4H4z" />
        </svg>
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="YouTube"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      </a>
    </div>
  )
}

function ArrowIcon() {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 6,
        background: 'rgba(255,248,235,0.08)',
        border: '1px solid rgba(255,248,235,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5F0E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </div>
  )
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0C0907' }}>
      {/* Header meta bar with warm gradient */}
      <div
        className="fade-up fade-up-0"
        style={{
          borderTop: '1px solid rgba(255,248,235,0.06)',
          background: 'linear-gradient(to bottom, rgba(196,168,130,0.04), transparent)',
        }}
      >
        <MetaBar />
      </div>

      <div style={{ width: '100%', maxWidth: 700, margin: '0 auto' }}>
        <div
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255,248,235,0.08)',
          }}
        />
      </div>

      {/* Main content */}
      <div
        className="main-content"
        style={{
          maxWidth: 700,
          margin: '0 auto',
          padding: '80px 24px 80px',
        }}
      >
        {/* Hero with dot grid */}
        <div
          className="fade-up fade-up-1 hero-section"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: 48,
            padding: '32px 0',
          }}
        >
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: 24,
                boxShadow:
                  '0 0.6px 0.6px -1.25px rgba(0,0,0,0.18), 0 2.3px 2.3px -2.5px rgba(0,0,0,0.16), 0 10px 10px -3.75px rgba(0,0,0,0.06)',
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Zyade Messaoudi"
                width={90}
                height={90}
                style={{
                  filter: 'grayscale(100%)',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  width: 90,
                  height: 90,
                }}
                priority
              />
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-playfair), ui-serif, "New York", Georgia, serif',
                fontSize: 48,
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#FAF6F0',
                marginBottom: 12,
              }}
            >
              Zyade Messaoudi
            </h1>

            <p
              style={{
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 400,
                color: '#8A7A6A',
                lineHeight: 1.5,
              }}
            >
              Moroccan in Shenzhen · Building M3allem + Arcbuildr
            </p>

            <SocialIcons />
          </div>
        </div>

        {/* Bio */}
        <div className="fade-up fade-up-2" style={{ marginBottom: 48 }}>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.5,
              color: '#F5F0E8',
              textAlign: 'center',
              maxWidth: 560,
              margin: '0 auto',
            }}
          >
            Not an agency. Not a personal brand play. A 20-year-old building
            Morocco&apos;s home services infrastructure from inside China&apos;s
            manufacturing capital, and documenting every step.
          </p>
        </div>

        {/* Triptych */}
        <div className="fade-up fade-up-3" style={{ marginBottom: 48 }}>
          <div
            style={{
              width: '100%',
              borderRadius: 8,
              overflow: 'hidden',
              aspectRatio: '16 / 9',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
            }}
          >
            <div style={{ background: '#1A1008' }} />
            <div style={{ background: '#0D1420' }} />
            <div style={{ background: '#151210' }} />
          </div>
          <p
            style={{
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              color: '#8A7A6A',
              textAlign: 'center',
              marginTop: 12,
            }}
          >
            SHENZHEN · 2026
          </p>
        </div>

        {/* Divider */}
        <div
          className="fade-up fade-up-3"
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255,248,235,0.08)',
            marginBottom: 48,
          }}
        />

        {/* Link cards */}
        <div
          className="fade-up fade-up-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            marginBottom: 48,
          }}
        >
          <a href="#" className="link-card">
            <div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#F5F0E8',
                  marginBottom: 4,
                }}
              >
                M3allem
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  color: '#8A7A6A',
                }}
              >
                Morocco&apos;s home services infrastructure
              </div>
            </div>
            <ArrowIcon />
          </a>

          <a
            href="https://arcbuildr.co"
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            <div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#F5F0E8',
                  marginBottom: 4,
                }}
              >
                Arcbuildr
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  color: '#8A7A6A',
                }}
              >
                Story architecture for knowledge sellers
              </div>
            </div>
            <ArrowIcon />
          </a>
        </div>

        {/* Gold status pill — the ONE accent moment */}
        <div
          className="fade-up fade-up-5"
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
              color: '#C4A882',
              border: '1px solid rgba(196,168,130,0.25)',
              borderRadius: 100,
              padding: '6px 16px',
            }}
          >
            深圳 · BUILDING
          </span>
        </div>
      </div>
    </div>
  )
}
