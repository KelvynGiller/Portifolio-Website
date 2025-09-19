import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kelvyn Giller - Full Stack Developer',
  description: 'Portfolio of Kelvyn Giller, a passionate full-stack developer specializing in React, Node.js, and modern web technologies.',
  keywords: ['portfolio', 'full stack developer', 'react', 'node.js', 'javascript', 'typescript'],
  authors: [{ name: 'Kelvyn Giller' }],
  creator: 'Kelvyn Giller',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kelvyngiller.dev',
    title: 'Kelvyn Giller - Full Stack Developer',
    description: 'Portfolio of Kelvyn Giller, a passionate full-stack developer specializing in React, Node.js, and modern web technologies.',
    siteName: 'Kelvyn Giller Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelvyn Giller - Full Stack Developer',
    description: 'Portfolio of Kelvyn Giller, a passionate full-stack developer specializing in React, Node.js, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
