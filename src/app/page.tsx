'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const SANS = '"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
const MONO = 'ui-monospace, "SF Mono", monospace'
const EDITORIAL = "'PPEditorialNew', Georgia, 'Times New Roman', serif"

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
        fontSize: 11,
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
        SHENZHEN, CHINA
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
    <div style={{ display: 'flex', gap: 8 }}>
      <a href="https://instagram.com/messaoudizyade" className="social-icon" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a href="#" className="social-icon" aria-label="YouTube">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      </a>
      <a href="#" className="social-icon" aria-label="TikTok">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
        </svg>
      </a>
      <a href="https://zyademessaoudi.substack.com/" className="social-icon" aria-label="Substack">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7H2v2h20V7zm0-4H2v2h20V3zM2 11v10l10-5.5L22 21V11H2z"/></svg>
      </a>
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
        {/* 1. Header metadata bar */}
        <div className="fade-up fade-up-0">
          <MetaBar />
        </div>

        {/* Main content */}
        <div
          className="main-content"
          style={{
            maxWidth: 700,
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          {/* 32px gap after meta bar */}
          <div style={{ height: 32 }} />

          {/* HERO BLOCK — CENTERED */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* 2. Avatar */}
            <div className="fade-up fade-up-1" style={{ marginBottom: 16 }}>
              <div
                className="avatar-wrap"
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  filter: 'grayscale(100%)',
                  border: '1px solid rgba(255,240,210,0.15)',
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
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    width: 90,
                    height: 90,
                  }}
                  priority
                />
              </div>
            </div>

            {/* 3. H1 */}
            <div className="fade-up fade-up-2" style={{ marginBottom: 8 }}>
              <h1
                style={{
                  fontFamily: EDITORIAL,
                  fontSize: 46,
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                }}
              >
                Zyade Messaoudi
              </h1>
            </div>

            {/* 4. Subtitle */}
            <div className="fade-up fade-up-3" style={{ marginBottom: 12 }}>
              <p
                style={{
                  fontFamily: SANS,
                  fontSize: 15,
                  fontWeight: 400,
                  color: '#8C7B6B',
                  lineHeight: 1.5,
                }}
              >
                Moroccan in Shenzhen · 20 · Building M3allem + Arcbuildr
              </p>
            </div>

            {/* 5. Social icons */}
            <div className="fade-up fade-up-4" style={{ marginBottom: 32 }}>
              <SocialIcons />
            </div>
          </div>

          {/* BELOW HERO — LEFT ALIGNED */}

          {/* 6. Triptych */}
          <div className="fade-up fade-up-5" style={{ marginBottom: 32 }}>
            <div
              style={{
                width: '100%',
                borderRadius: 8,
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
                marginTop: 8,
              }}
            >
              SHENZHEN · 2026
            </p>
          </div>

          {/* 7. Bio */}
          <div className="fade-up fade-up-6" style={{ marginBottom: 32 }}>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 16,
                fontWeight: 700,
                lineHeight: 1.6,
                color: '#F0E8DC',
              }}
            >
              I build in public. M3allem is Morocco's home services infrastructure. Arcbuildr is the story system I use to document it. Both are real. Both are early.
            </p>
          </div>

          {/* Divider */}
          <div
            className="fade-up fade-up-6"
            style={{
              width: '100%',
              height: 1,
              background: 'rgba(255,240,210,0.08)',
              marginBottom: 32,
            }}
          />

          {/* 8. Cards — 3-column grid */}
          <div
            className="fade-up fade-up-7 cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 16,
              marginBottom: 80,
            }}
          >
            {/* Card 1: The Blueprint */}
            <div
              style={{
                background: 'rgba(255,240,210,0.06)',
                border: '1px solid rgba(255,240,210,0.10)',
                borderRadius: 12,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: 'rgba(255,240,210,0.10)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 12,
                  }}
                >
                  <img className="card-icon" src="/arcbuildr-symbol.svg" alt="" />
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase' as const,
                    color: '#8C7B6B',
                    marginBottom: 8,
                  }}
                >
                  FREE COURSE
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 18,
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: 6,
                  }}
                >
                  The Story System
                </div>
                <div style={{ fontFamily: SANS, fontSize: 14, fontWeight: 400, color: '#8C7B6B' }}>
                  Everything I know about building a personal brand through story and value. Free on Substack.
                </div>
              </div>
              <a
                href="https://zyademessaoudi.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  marginTop: 8,
                  padding: '12px 0',
                  background: '#FFFFFF',
                  color: '#0F0B08',
                  fontFamily: SANS,
                  fontWeight: 700,
                  fontSize: 13,
                  textAlign: 'center',
                  borderRadius: 6,
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                }}
              >
                READ FREE →
              </a>
            </div>

            {/* Card 2: Work With Me */}
            <div
              style={{
                background: 'rgba(255,240,210,0.06)',
                border: '1px solid rgba(255,240,210,0.10)',
                borderRadius: 12,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: 'rgba(255,240,210,0.10)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 12,
                  }}
                >
                  <img className="card-icon" src="/arcbuildr-symbol.svg" alt="" />
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 18,
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: 6,
                  }}
                >
                  Work With Me
                </div>
                <div style={{ fontFamily: SANS, fontSize: 14, fontWeight: 400, color: '#8C7B6B' }}>
                  I run the full Arcbuildr system on you. A few spots only.
                </div>
              </div>
              <a
                href="https://arcbuildr.co/call"
                style={{
                  display: 'block',
                  marginTop: 8,
                  padding: '12px 0',
                  background: '#FFFFFF',
                  color: '#0F0B08',
                  fontFamily: SANS,
                  fontWeight: 700,
                  fontSize: 13,
                  textAlign: 'center',
                  borderRadius: 6,
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                }}
              >
                APPLY FOR A SPOT
              </a>
            </div>

            {/* Card 3: M3allem */}
            <div
              style={{
                background: 'rgba(255,240,210,0.06)',
                border: '1px solid rgba(255,240,210,0.10)',
                borderRadius: 12,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: 'rgba(255,240,210,0.10)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 12,
                  }}
                >
                  <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 18, color: '#FFFFFF' }}>M</span>
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 18,
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: 6,
                  }}
                >
                  M3allem
                </div>
                <div style={{ fontFamily: SANS, fontSize: 14, fontWeight: 400, color: '#8C7B6B' }}>
                  Morocco&apos;s home services infrastructure. Coming soon.
                </div>
              </div>
              <span
                style={{
                  fontFamily: SANS,
                  color: '#8C7B6B',
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                Coming 2026
              </span>
            </div>
          </div>
        </div>

        {/* Bottom breathing room */}
        <div style={{ height: 80 }} />
      </div>
    </div>
  )
}
