import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fabián Marín',
  description: 'Experienced Senior Full-Stack Developer with over 18 years of software development experience. Expertise in ReactJS, GraphQL, ExpressJS (Node.js), and PostgreSQL.',
  openGraph: {
    title: 'Fabián Marín – Senior Software Engineer',
    description: 'Experienced Senior Full-Stack Developer with over 18 years of software development experience. Expertise in ReactJS, GraphQL, ExpressJS (Node.js), and PostgreSQL.',
    images: '/og-image.jpeg',
    type: 'website',
    url: 'https://fmarin.dev',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0LFTER7DSJ"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0LFTER7DSJ');

          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
