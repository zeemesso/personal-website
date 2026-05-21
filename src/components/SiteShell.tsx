'use client'

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ flex: 1 }}>
      {children}
    </main>
  )
}
