import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://zyade.co'),
  title: 'Zyade Messaoudi',
  description:
    'Moroccan in Shenzhen. Building M3allem and Arcbuildr.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zyade.co',
    siteName: 'Zyade Messaoudi',
    title: 'Zyade Messaoudi',
    description:
      'Moroccan in Shenzhen. Building M3allem and Arcbuildr.',
  },
  twitter: {
    card: 'summary',
    title: 'Zyade Messaoudi',
    description:
      'Moroccan in Shenzhen. Building M3allem and Arcbuildr.',
  },
  other: { 'theme-color': '#0B0A07' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ backgroundColor: '#0B0A07' }}>
      <body>{children}</body>
    </html>
  )
}
