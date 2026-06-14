'use client'

import { useState, useEffect } from 'react'

function ShenzhenClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function tick() {
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Shanghai',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="header-clock">{time ? `${time} — SHENZHEN` : ' '}</span>
  )
}

export default function HomePage() {
  return (
    <>
      {/* 1. Header bar */}
      <header className="header-bar fade d-0">
        <span className="header-brand">zyade</span>
        <ShenzhenClock />
      </header>

      <main className="container">
        {/* 2. Profile */}
        <section className="profile">
          <img
            className="profile-photo fade d-0"
            src="/profile.jpg"
            alt="Zyade Messaoudi"
            width={72}
            height={72}
          />
          <div className="profile-text">
            <h1 className="profile-name fade d-60">Zyade Messaoudi</h1>
            <p className="profile-role fade d-120">CS student in Shenzhen.</p>
            <p className="profile-role fade d-120">Building Arcbuildr and M3allem.</p>
          </div>
        </section>

        {/* 3. Divider */}
        <div className="divider fade d-160" />

        {/* 4. Cards */}
        <section className="cards">
          {/* Card 1 — 1:1 program (primary) */}
          <article className="card fade d-200">
            <div className="card-top">
              <span className="card-label card-label--accent">1:1 PROGRAM</span>
              <a
                className="card-cta card-cta--accent"
                href="https://arcbuildr.co/call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply →
              </a>
            </div>
            <h2 className="card-title">Work With Me</h2>
            <p className="card-body">
              Six weeks. Brand Foundation, Visual Identity System, scripts in
              your voice, a content calendar. Fully async.
            </p>
          </article>

          {/* Card 2 — free course */}
          <article className="card fade d-260">
            <div className="card-top">
              <span className="card-label card-label--light">FREE COURSE</span>
              <a
                className="card-cta card-cta--light"
                href="https://zyademessaoudi.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read free →
              </a>
            </div>
            <h2 className="card-title">The Story System</h2>
            <p className="card-body">
              Everything I know about building a personal brand through story
              and value. Free on Substack.
            </p>
          </article>

          {/* Card 3 — coming soon (muted) */}
          <article className="card card--muted fade d-320">
            <div className="card-top">
              <span className="card-label card-label--muted">COMING SOON</span>
            </div>
            <h2 className="card-title card-title--muted">M3allem</h2>
            <p className="card-body">
              A marketplace connecting Moroccan homeowners to vetted
              tradespeople. Launching 2026.
            </p>
          </article>
        </section>

        {/* 5. Footer */}
        <footer className="footer fade d-380">© 2026 Zyade Messaoudi</footer>
      </main>
    </>
  )
}
