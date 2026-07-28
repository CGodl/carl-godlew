import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { ContactCard } from '@/components/ContactCard';
import StarParticles from '@/components/StarParticles';

export const metadata: Metadata = {
    title: 'Contact',
    description:
        'Get in touch with Carl Godlewski, a web developer based in New York City, for freelance work, full-time roles, or collaboration.',
    alternates: { canonical: '/contact' },
};

export default function ContactPage() {
    return (
        <SiteShell stars={true}>
            <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
                <ContactCard />
            </div>
        </SiteShell>
    );
}
