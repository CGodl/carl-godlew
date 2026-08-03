import './globals.css'
import type { Metadata } from 'next'
import { Inter, Knewave, Goldman, Orbitron, Share_Tech_Mono } from 'next/font/google';
import { SkipToContent } from '@/components/SkipToContent';
import FullStory from '@/components/Fullstory';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter'});
const knewave = Knewave({ subsets: ['latin'], weight: '400', variable: '--font-knewave' });
const goldman = Goldman({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-goldman' });
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-orbitron' });
const shareTechMono = Share_Tech_Mono({ subsets: ['latin'], weight: '400', variable: '--font-share-tech-mono' });

const siteUrl = 'https://carlgodlewski.com';
const siteDescription = 'New York City–based web developer with over five years of professional experience building and delivering modern web applications. I specialize in frontend development with React, Next.js, and Tailwind CSS, with additional experience in Python, Java, Spring Boot, FastAPI, and AWS. I have worked in startup, mid-size, and Fortune 100 companies as a Full-Stack Developer and Lead Frontend Developer.';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Carl Godlewski — Web Developer in New York City',
    template: '%s · Carl Godlewski',
  },
  description: siteDescription,
  keywords: [
    'Carl Godlewski',
    'web developer',
    'frontend engineer',
    'full-stack engineer',
    'React',
    'Next.js',
    'TypeScript',
    'New York City',
  ],
  authors: [{ name: 'Carl Godlewski', url: siteUrl }],
  creator: 'Carl Godlewski',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Carl Godlewski',
    title: 'Carl Godlewski — Web Developer in New York City',
    description: siteDescription,
    images: [
      {
        url: '/projects/spaceHeader.webp',
        width: 2688,
        height: 1792,
        alt: 'Carl Godlewski — web developer portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carl Godlewski — Web Developer in New York City',
    description: siteDescription,
    images: ['/projects/spaceHeader.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${knewave.variable} ${goldman.variable} ${orbitron.variable} ${shareTechMono.variable} font-inter antialiased`}>
        <FullStory />
        <SkipToContent />
        {children}
      </body>
    </html>
  )
}
