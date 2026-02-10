import './globals.css'
import type { Metadata } from 'next'
import { Inter, Knewave, Goldman } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter'});
const knewave = Knewave({ subsets: ['latin'], weight: '400', variable: '--font-knewave' });
const goldman = Goldman({ subsets: ['latin'], weight: '400', variable: '--font-goldman' });

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
  
      <body className={`${inter.variable} ${knewave.variable} ${goldman.variable}`}>{children}</body>
    </html>
  )
}
