import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({weight:["300","700"] ,subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
