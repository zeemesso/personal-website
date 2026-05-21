'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

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
        fontSize: 13,
        letterSpacing: '0.04em',
        textTransform: 'uppercase' as const,
        color: '#8C7B6B',
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
    <div style={{ display: 'flex', gap: 4, marginTop: 20 }}>
      <a
        href="https://instagram.com/messaoudizyade"
        className="social-icon"
        aria-label="Instagram"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        href="https://x.com/messaoudizyade"
        className="social-icon"
        aria-label="X"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-6.8-8.5L19.5 4h-2l-5.2 6.3L8 4H4z" />
        </svg>
      </a>
      <a
        href="#"
        className="social-icon"
        aria-label="YouTube"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      </a>
    </div>
  )
}

function ArrowIcon({ color = '#F0E8DC' }: { color?: string }) {
  return (
    <div
      className="arrow-icon"
      style={{
        width: 32,
        height: 32,
        borderRadius: 6,
        background: 'rgba(255,240,210,0.08)',
        border: '1px solid rgba(255,240,210,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </div>
  )
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0F0B08', position: 'relative' }}>
      {/* Full-page dot grid */}
      <div className="dot-grid" />
      <div className="vignette" />

      {/* Content layer */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header meta bar — no gradient, no border, unified background */}
        <div className="fade-up fade-up-0">
          <MetaBar />
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
          {/* Avatar */}
          <div
            className="fade-up fade-up-1"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 24,
            }}
          >
            <div
              className="avatar-wrap"
              style={{
                width: 108,
                height: 108,
                borderRadius: '50%',
                overflow: 'hidden',
                filter: 'grayscale(100%)',
                border: '1px solid rgba(255,240,210,0.1)',
                boxShadow:
                  '0 0.6px 0.6px -1.25px rgba(0,0,0,0.18), 0 2.3px 2.3px -2.5px rgba(0,0,0,0.16), 0 10px 10px -3.75px rgba(0,0,0,0.06)',
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Zyade Messaoudi"
                width={108}
                height={108}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  width: 108,
                  height: 108,
                }}
                priority
              />
            </div>
          </div>

          {/* H1 */}
          <div
            className="fade-up fade-up-2"
            style={{ textAlign: 'center', marginBottom: 12 }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-playfair), ui-serif, "New York", Georgia, serif',
                fontSize: 64,
                fontWeight: 600,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
              }}
            >
              Zyade Messaoudi
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className="fade-up fade-up-3"
            style={{ textAlign: 'center', marginBottom: 0 }}
          >
            <p
              style={{
                fontFamily: SANS,
                fontSize: 18,
                fontWeight: 400,
                color: '#8C7B6B',
                lineHeight: 1.5,
              }}
            >
              Moroccan in Shenzhen · Building M3allem + Arcbuildr
            </p>
          </div>

          {/* Social icons */}
          <div
            className="fade-up fade-up-4"
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}
          >
            <SocialIcons />
          </div>

          {/* Bio */}
          <div className="fade-up fade-up-5" style={{ marginBottom: 48 }}>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 17,
                fontWeight: 400,
                lineHeight: 1.6,
                color: '#F0E8DC',
                textAlign: 'center',
                maxWidth: 560,
                margin: '0 auto',
              }}
            >
              Not a content creator. Not a student project. A 20-year-old Moroccan
              building Morocco&apos;s home services infrastructure from inside
              China&apos;s manufacturing capital. Documenting every step.
            </p>
          </div>

          {/* Triptych */}
          <div className="fade-up fade-up-6" style={{ marginBottom: 48 }}>
            <div
              style={{
                width: '100%',
                borderRadius: 10,
                overflow: 'hidden',
                aspectRatio: '16 / 9',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 0,
              }}
            >
              <div style={{ background: '#1C1208', minHeight: 0 }} />
              <div style={{ background: '#0A0F1A', minHeight: 0 }} />
              <div style={{ background: '#12100D', minHeight: 0 }} />
            </div>
            <p
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
                color: '#8C7B6B',
                textAlign: 'center',
                marginTop: 12,
              }}
            >
              SHENZHEN · 2026
            </p>
          </div>

          {/* Divider */}
          <div
            className="fade-up fade-up-6"
            style={{
              width: '100%',
              height: 1,
              background: 'rgba(255,240,210,0.08)',
              marginBottom: 48,
            }}
          />

          {/* Cards — 2-column grid + full-width M3allem */}
          <div
            className="fade-up fade-up-7"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              marginBottom: 48,
            }}
          >
            {/* Top row: 2 cards side by side */}
            <div
              className="cards-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
              }}
            >
              <a href="https://arcbuildr.co?from=zyade" className="link-card">
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 16,
                      fontWeight: 600,
                      color: '#F0E8DC',
                      marginBottom: 4,
                    }}
                  >
                    Arc Self
                  </div>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 14,
                      color: '#8C7B6B',
                    }}
                  >
                    The DIY story system
                  </div>
                </div>
                <ArrowIcon />
              </a>

              <a href="https://arcbuildr.co?from=zyade" className="link-card">
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 16,
                      fontWeight: 600,
                      color: '#F0E8DC',
                      marginBottom: 4,
                    }}
                  >
                    Arc Made
                  </div>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 14,
                      color: '#8C7B6B',
                    }}
                  >
                    Done-for-you, 3 spots
                  </div>
                </div>
                <ArrowIcon />
              </a>
            </div>

            {/* M3allem card — full width, red tint */}
            <a href="/m3allem" className="link-card-m3allem">
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#C97070',
                    marginBottom: 4,
                  }}
                >
                  M3allem
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 14,
                    color: '#8C7B6B',
                  }}
                >
                  See what I&apos;m building for Morocco →
                </div>
              </div>
              <ArrowIcon color="#C97070" />
            </a>
          </div>

          {/* Gold status pill — the ONE accent moment */}
          <div
            className="fade-up fade-up-7"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <span
              className="pill-pulse"
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

        {/* Footer — just breathing room */}
        <div style={{ height: 80 }} />
      </div>
    </div>
  )
}
