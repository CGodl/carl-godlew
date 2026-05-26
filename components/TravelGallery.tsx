import { SpacePanel } from '@/components/SpacePanel';
import { SectionTitle } from '@/components/SectionTitle';
import { ImageBox } from '@/components/ImageBox';
import { cn } from '@/lib/utils';
import type { TravelPhoto } from '@/lib/site-content';

export function TravelGallery({ photos }: { photos: TravelPhoto[] }) {
    return (
        <SpacePanel>
            <SectionTitle subtitle="Exploration log">Travel</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] gap-3">
                {photos.map((photo, i) => (
                    <div
                        key={`${photo.src}-${i}`}
                        className={cn(
                            'relative rounded-md overflow-hidden ring-1 ring-white/5 hover:ring-purple-500/30 transition-all',
                            photo.className ?? 'col-span-1 row-span-1',
                        )}
                    >
                        <ImageBox {...photo} />
                    </div>
                ))}
            </div>
        </SpacePanel>
    );
}
