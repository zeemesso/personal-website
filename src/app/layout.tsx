import type { Metadata } from 'next'
import { Bebas_Neue, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SiteShell from '@/components/SiteShell'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
  preload: true,
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zyade.co'),
  title: {
    default: 'Zyade Messaoudi — Builder. Teacher. Storyteller.',
    template: '%s | Zyade Messaoudi',
  },
  description:
    '20-year-old Moroccan founder, CS student at HITSZ Shenzhen. Creator of The Story System — the first storytelling framework in Darija for MENA creators.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zyade.co',
    siteName: 'Zyade Messaoudi',
    title: 'Zyade Messaoudi — Builder. Teacher. Storyteller.',
    description:
      '20-year-old Moroccan founder, CS student at HITSZ Shenzhen. Creator of The Story System — the first storytelling framework in Darija for MENA creators.',
    images: [{ url: '/api/og?title=Zyade+Messaoudi&subtitle=Builder+%C2%B7+Teacher+%C2%B7+Storyteller', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zyade Messaoudi — Builder. Teacher. Storyteller.',
    description:
      '20-year-old Moroccan founder, CS student at HITSZ Shenzhen. Creator of The Story System.',
    images: ['/api/og?title=Zyade+Messaoudi&subtitle=Builder+%C2%B7+Teacher+%C2%B7+Storyteller'],
  },
  other: { 'theme-color': '#0A0A0A' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${syne.variable} ${jetbrainsMono.variable}`}
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <head>
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        style={{
          fontFamily: 'var(--font-syne), sans-serif',
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
