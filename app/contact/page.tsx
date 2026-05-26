import { SiteShell } from '@/components/SiteShell';
import { ContactCard } from '@/components/ContactCard';

export default function ContactPage() {
    return (
        <SiteShell>
            <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
                <ContactCard />
            </div>
        </SiteShell>
    );
}
