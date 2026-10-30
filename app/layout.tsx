import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const dmSans = localFont({
  src: [
    {
      path: './fonts/dm-sans-latin-wght-normal.woff2',
      weight: '100 1000',
      style: 'normal',
    },
    {
      path: './fonts/dm-sans-latin-ext-wght-normal.woff2',
      weight: '100 1000',
      style: 'normal',
    },
    {
      path: './fonts/dm-sans-latin-wght-italic.woff2',
      weight: '100 1000',
      style: 'italic',
    },
    {
      path: './fonts/dm-sans-latin-ext-wght-italic.woff2',
      weight: '100 1000',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BookLanka Xtranet | Partner Portal',
  description: 'Join BookLanka Xtranet and grow your Sri Lankan tourism business with direct access to travellers.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={`${dmSans.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
