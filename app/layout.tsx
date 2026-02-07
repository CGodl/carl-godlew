import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Knewave } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const knewave = Knewave({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Carl Godlewski',
  description: 'Portfolio site for Carl Godlewski',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  
      <body >{children}</body>
    </html>
  )
}
