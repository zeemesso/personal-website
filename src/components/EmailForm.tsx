'use client'

import { useState } from 'react'

const SYS = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif'

export default function EmailForm() {
  const [value, setValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!value.trim()) return
    setValue('')
    setConfirmed(true)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0', width: '100%' }}>
      {confirmed ? (
        <p
          style={{
            fontFamily: SYS,
            fontSize: '13px',
            fontWeight: 500,
            color: '#C9A96E',
            margin: 0,
            lineHeight: 1.8,
          }}
        >
          you&apos;re in.
        </p>
      ) : (
        <>
          <input
            type="email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="name@email.com"
            required
            style={{
              flex: 1,
              backgroundColor: '#111111',
              border: '1px solid #1E1E1E',
              borderRight: 'none',
              borderRadius: '2px 0 0 2px',
              fontFamily: SYS,
              fontSize: '13px',
              fontWeight: 400,
              color: '#FFFFFF',
              padding: '10px 14px',
              outline: 'none',
              minWidth: 0,
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#C9A96E',
              color: '#0A0A0A',
              border: 'none',
              borderRadius: '0 2px 2px 0',
              fontFamily: SYS,
              fontSize: '12px',
              fontWeight: 500,
              padding: '10px 18px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(0.88)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.filter = 'none'
            }}
          >
            Join
          </button>
        </>
      )}
    </form>
  )
}
