import './globals.css'
import type { Metadata } from 'next'
import { poppins } from './font'
export const metadata: Metadata = {
  title: 'Yogeswar Lakshmi Narayanan | Full Stack Developer ',
  description: 'Welcome to My Portfolio Website 🎉',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  )
}
