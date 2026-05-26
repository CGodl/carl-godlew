import './globals.css'
import type { Metadata } from 'next'
import { Inter, Knewave, Goldman, Orbitron, Share_Tech_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter'});
const knewave = Knewave({ subsets: ['latin'], weight: '400', variable: '--font-knewave' });
const goldman = Goldman({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-goldman' });
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-orbitron' });
const shareTechMono = Share_Tech_Mono({ subsets: ['latin'], weight: '400', variable: '--font-share-tech-mono' });

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
      <body className={`${inter.variable} ${knewave.variable} ${goldman.variable} ${orbitron.variable} ${shareTechMono.variable} font-inter antialiased`}>{children}</body>
    </html>
  )
}
