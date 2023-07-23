import './globals.css'
import type { Metadata } from 'next'
import { poppins } from './font'
export const metadata: Metadata = {
  title: 'Yogeswar Lakshmi Narayanan | Full Stack Developer | Portfolio',
  description: 'Full Stack Developer living in canada with over 3 years of experience building blazing fast applications for the web. Deep Learning Researcher at University of Windsor.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" sizes="16x16" type="image/ico" /> 
        <link rel="icon" href="favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" type="image/png"/>
        <meta property="twitter:image" content="/home_page_og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Yogeswar Lakshmi Narayanan | Full Stack Developer | Portfolio Website" />
        <meta property="twitter:description" content="Full Stack Developer living in canada with over 3 years of experience building blazing fast applications for the web. Deep Learning Researcher at University of Windsor." />
        <meta name="twitter:image:alt" content="Yogeswar portfolio landing page"/>
        <meta name="twitter:creator" content="@yogeswarl"/>
        <meta property="og:image" content="https://yogeswarl.vercel.app/home_page_og.png" />
        <meta property="og:title" content="Yogeswar Lakshmi Narayanan | Full Stack Developer | Portfolio" />
        <meta property="og:description" content="Full Stack Developer living in canada with over 3 years of experience building blazing fast applications for the web. Deep Learning Researcher at University of Windsor." />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://yogeswarl.vercel.app/" />
        <link rel="alternate" href="https://yogeswarl.vercel.app/" hrefLang="x-default" />
        <link rel="canonical" href="https://yogeswarl.vercel.app/" />
      </head>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  )
}
