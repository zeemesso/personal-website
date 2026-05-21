import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-playfair',
  display: 'swap',
})

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
  other: { 'theme-color': '#0F0B08' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable} style={{ backgroundColor: '#0F0B08' }}>
      <body>{children}</body>
    </html>
  )
}
