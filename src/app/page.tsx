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
        color: '#888888',
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

function ArrowIcon() {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 6,
        background: 'rgba(255,255,255,0.10)',
        border: '1px solid rgba(255,255,255,0.14)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FAFAF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </div>
  )
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0B0A07' }}>
      {/* Top meta bar */}
      <div className="fade-up fade-up-0">
        <MetaBar />
      </div>

      <div style={{ width: '100%', maxWidth: 700, margin: '0 auto' }}>
        <div
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255,255,255,0.08)',
          }}
        />
      </div>

      {/* Main content */}
      <div
        className="main-content"
        style={{
          maxWidth: 700,
          margin: '0 auto',
          padding: '80px 24px',
        }}
      >
        {/* Hero */}
        <div
          className="fade-up fade-up-1"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: 48,
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
              fontFamily: SERIF,
              fontSize: 48,
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#FFFFFF',
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
              color: '#888888',
              lineHeight: 1.5,
            }}
          >
            Moroccan in Shenzhen · Building M3allem + Arcbuildr
          </p>
        </div>

        {/* Bio */}
        <div className="fade-up fade-up-2" style={{ marginBottom: 48 }}>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.5,
              color: '#FAFAF7',
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

        {/* Divider */}
        <div
          className="fade-up fade-up-2"
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255,255,255,0.08)',
            marginBottom: 48,
          }}
        />

        {/* Link cards */}
        <div
          className="fade-up fade-up-3"
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
                  color: '#FAFAF7',
                  marginBottom: 4,
                }}
              >
                M3allem
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  color: '#888888',
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
                  color: '#FAFAF7',
                  marginBottom: 4,
                }}
              >
                Arcbuildr
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  color: '#888888',
                }}
              >
                Story architecture for knowledge sellers
              </div>
            </div>
            <ArrowIcon />
          </a>
        </div>

        {/* Gold status pill — the ONE gold element */}
        <div
          className="fade-up fade-up-4"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 80,
          }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
              color: '#C9A96E',
              border: '1px solid rgba(201,169,110,0.25)',
              borderRadius: 100,
              padding: '6px 16px',
            }}
          >
            深圳 · BUILDING
          </span>
        </div>
      </div>

      {/* Bottom divider */}
      <div style={{ width: '100%', maxWidth: 700, margin: '0 auto' }}>
        <div
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255,255,255,0.08)',
          }}
        />
      </div>

      {/* Footer — identical to top bar */}
      <div className="fade-up fade-up-4">
        <MetaBar />
      </div>
    </div>
  )
}
