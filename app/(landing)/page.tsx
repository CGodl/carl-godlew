import type { Metadata } from 'next';
import { HeaderImage } from '@/components/HeaderImage';
import { NavBarGlass } from '@/components/Navigation/Glass';
import { BioBento } from '@/components/BioBento';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { ResumePreview } from '@/components/ResumePreview';
import { Skills } from '@/components/Skills';

export const metadata: Metadata = {
    alternates: { canonical: '/' },
};

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Carl Godlewski',
    url: 'https://carlgodlewski.com',
    image: 'https://carlgodlewski.com/self/profilePhoto.webp',
    jobTitle: 'Web Developer',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'New York City',
        addressRegion: 'NY',
        addressCountry: 'US',
    },
    sameAs: ['https://github.com/CGodl', 'https://linkedin.com/in/carl-godlewski'],
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Python', 'AWS'],
};

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#0B1D26]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
            />
            <div >
                <HeaderImage />
                <NavBarGlass />
            </div>
            <main id="main-content" tabIndex={-1} className="relative outline-none">
                <div
                    className="pointer-events-none absolute inset-0 z-0 opacity-30"
                    style={{
                        background:
                            'radial-gradient(ellipse at 20% 0%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(139,92,246,0.06) 0%, transparent 50%)',
                        maskImage:
                            'linear-gradient(to bottom, transparent 0%, black 25%)',
                        WebkitMaskImage:
                            'linear-gradient(to bottom, transparent 0%, black 25%)',
                    }}
                />               
                <BioBento className="bg-transparent" />
                <Skills />
                <FeaturedProjects />
                {/* <ResumePreview /> */}
            </main>
        </div>
    );
}
