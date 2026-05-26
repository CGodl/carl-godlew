import Image from 'next/image';
import { SpacePanel } from '@/components/SpacePanel';
import { SectionTitle } from '@/components/SectionTitle';
import { TravelGallery } from '@/components/TravelGallery';
import { siteContent } from '@/lib/site-content';

export function BioProfile() {
    return (
        <div className="px-4 md:px-6 lg:px-8 py-10 md:py-14 space-y-8 max-w-6xl mx-auto">
            <SectionTitle subtitle="Personal dossier">Bio</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 items-stretch">
                <SpacePanel className="p-3 flex items-center justify-center">
                    <div className="relative aspect-[3/4] w-full max-w-[240px] rounded-md overflow-hidden ring-1 ring-purple-500/20">
                        <Image
                            src={siteContent.bio.profilePhoto}
                            alt={siteContent.name}
                            fill
                            className="object-cover"
                            sizes="240px"
                            priority
                        />
                    </div>
                </SpacePanel>

                <SpacePanel className="flex flex-col justify-center">
                    <p className="font-orbitron text-lg tracking-wider text-white">{siteContent.name}</p>
                    <p className="font-mono-digital text-xs text-purple-400/80 mt-1 uppercase tracking-[0.2em]">
                        {siteContent.role}
                    </p>
                    <div className="mt-5 space-y-4">
                        <p className="text-zinc-300 text-sm leading-relaxed">
                            {siteContent.tagline} {siteContent.bio.headline}
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {siteContent.bio.extended}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-5">
                        {[
                            { label: siteContent.bio.location, code: 'LOC' },
                            { label: siteContent.bio.timezone, code: 'TZ' },
                        ].map(({ label, code }) => (
                            <span
                                key={label}
                                className="font-mono-digital text-[10px] uppercase tracking-widest px-2.5 py-1 text-zinc-400 rounded border border-white/12 bg-[#060d14]/50"
                            >
                                {code}: {label}
                            </span>
                        ))}
                    </div>
                </SpacePanel>
            </div>

            <TravelGallery photos={[...siteContent.travelPhotos]} />
        </div>
    );
}
