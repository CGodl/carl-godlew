import { SiteShell } from '@/components/SiteShell';
import { BioProfile } from '@/components/BioProfile';

export default function BioPage() {
    return (
        <SiteShell stars={true}>
            <BioProfile />
        </SiteShell>
    );
}
