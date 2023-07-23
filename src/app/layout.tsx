import './globals.css'
import type { Metadata } from 'next'
import { poppins } from './font'
export const metadata: Metadata = {
  title: 'Yogeswar Lakshmi Narayanan | Full Stack Developer | Portfolio Website',
  description: 'Welcome to My Portfolio Website 🎉',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16x16" type="image/ico" /> 
        <link rel="icon" href="favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' type="image/png"/>
      </head>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  )
}
