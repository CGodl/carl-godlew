import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { BioProfile } from '@/components/BioProfile';

export const metadata: Metadata = {
    title: 'Bio',
    description:
        'About Carl Godlewski — a New York City web developer specializing in React, Next.js, and TypeScript, with a background in finance and a love of travel.',
    alternates: { canonical: '/bio' },
};

export default function BioPage() {
    return (
        <SiteShell stars={true}>
            <BioProfile />
        </SiteShell>
    );
}
