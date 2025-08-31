import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: 'Calculadora de Erroees - JAREDS DE NUMERICO',
  description: 'Created with 9 of july',
  generator: '9 de julio',
  icons: {
    icon: '/jared.jpeg', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        
        <Navbar/>
        
        {children}
      
        <Analytics />
        
      </body>
    </html>
  )
}
