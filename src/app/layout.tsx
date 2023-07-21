import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'

const poppins = Poppins({weight:["300","400","600"] ,subsets: ['latin'] })
export const montserrat = Montserrat({weight:["400","600"] ,subsets: ['latin'] })
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
