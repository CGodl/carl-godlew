'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SpacePanel } from '@/components/SpacePanel';
import { SectionTitle } from '@/components/SectionTitle';
import { ImageBox } from '@/components/ImageBox';
import { cn } from '@/lib/utils';
import type { TravelPhoto } from '@/lib/site-content';

const navButtonClassName =
    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-blue-400/25 bg-blue-950/20 hover:bg-purple-950/30 hover:border-purple-400/50 text-zinc-300 hover:text-purple-200 text-[10px] leading-none font-mono-digital uppercase tracking-[0.15em] transition-colors cursor-pointer';

type Tile = {
    srcPart: string;
    aspectClass: string;
    chip?: string;
};

type Country = {
    name: string;
    subtitle: string;
    note: string;
    hero: Tile;
    /** Rendered in the right column, below the field note. */
    sideTiles: Tile[];
    /** Rendered in a two-up row under the hero — good for landscape pairs. */
    bottomTiles: Tile[];
};

const countries: Country[] = [
    {
        name: 'Japan',
        subtitle: 'Journey from Tokyo to Kumamoto',
        note: 'Some of my favorite photos from my travels around Japan.',
        hero: { srcPart: 'KyotoGoldenPav', aspectClass: 'aspect-4/3' },
        sideTiles: [
            { srcPart: 'OsakaRunningMan', aspectClass: 'aspect-3/4', chip: 'Osaka · Dotonbori' },
            { srcPart: 'KyotoToriGates', aspectClass: 'aspect-3/4', chip: 'Kyoto · Tori Gates' }
        ],
        bottomTiles: [
            { srcPart: 'TokyoMuseum', aspectClass: 'aspect-square', chip: 'Tokyo · teamLab Borderless' },
            { srcPart: 'TokyoArcade', aspectClass: 'aspect-square', chip: 'Tokyo · Arcade' },
            { srcPart: 'KitakyushuCastle', aspectClass: 'aspect-square', chip: 'Kitakyushu · Castle' },
            { srcPart: 'FujiTrailRain', aspectClass: 'aspect-square', chip: 'Mt. Fuji · Trail' },
        ],
    },
    {
        name: 'India',
        subtitle: 'Travels through New Delhi, Mumbai, and more',
        note: "I've been to India many times and these are some photos from my most recent trip.",
        hero: { srcPart: 'AgraTajMahal', aspectClass: 'aspect-4/3' },
        sideTiles: [
            { srcPart: 'MumbaiParsiBakery', aspectClass: 'aspect-3/4', chip: 'Mumbai · Parsi bakery' },
            { srcPart: 'DelhiJamaMasjid', aspectClass: 'aspect-3/4', chip: 'New Delhi · Jama Masjid' },

        ],
        bottomTiles: [
            { srcPart: 'MumbaiSleepingCat', aspectClass: 'aspect-square', chip: 'Mumbai · Sleeping cat' },
            { srcPart: 'MumbaiBrittania', aspectClass: 'aspect-square', chip: 'Mumbai · Britannia & Co.' },
            { srcPart: 'GurpaMountainTop', aspectClass: 'aspect-square', chip: 'Gurpa · Mountain top' },
            { srcPart: 'DelhiParrot', aspectClass: 'aspect-square', chip: 'New Delhi · Parrot' },
        ],
    },
    {
        name: 'Singapore',
        subtitle: 'The one and only',
        note: 'Some of my experiences in Singapore.',
        hero: { srcPart: 'SultanMasjid', aspectClass: 'aspect-4/3' },
        sideTiles: [
            { srcPart: 'SingaporeApartmentCoffee', aspectClass: 'aspect-3/4', chip: 'Apartment Coffee' },
            { srcPart: 'SingaporeLightShow', aspectClass: 'aspect-3/4', chip: 'Light Show' },
        ],
        bottomTiles: [
            { srcPart: 'SingaporeTempleBuddha', aspectClass: 'aspect-square', chip: 'Buddha Tooth Relic Temple' },
            { srcPart: 'SingaporeColorfulBuildings', aspectClass: 'aspect-square', chip: 'Colorful Buildings' },
            { srcPart: 'SingaporeSeaLion', aspectClass: 'aspect-square', chip: 'Sea Lion' },
            { srcPart: 'SingaporeRedBuilding', aspectClass: 'aspect-square', chip: 'People\'s Park Complex' },
        ],
    },
];

function findPhoto(photos: TravelPhoto[], srcPart: string) {
    return photos.find((p) => p.src.includes(srcPart)) ?? photos[0];
}

function PhotoTile({
    photos,
    tile,
    overlay,
}: {
    photos: TravelPhoto[];
    tile: Tile;
    overlay?: { title: string; subtitle: string };
}) {
    const photo = findPhoto(photos, tile.srcPart);

    return (
        <div
            className={cn(
                'relative rounded-md overflow-hidden ring-1 ring-white/12 hover:ring-purple-400/35 transition-all',
                tile.aspectClass,
            )}
        >
            <ImageBox src={photo.src} alt={photo.alt} caption={photo.caption} />
            {overlay && (
                <>
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#060d12]/85 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute bottom-0 left-0 p-5">
                        <p className="font-orbitron text-2xl md:text-3xl text-white tracking-wide">
                            {overlay.title}
                        </p>
                        <p className="font-mono-digital text-[11px] text-zinc-300 mt-1.5 uppercase tracking-[0.2em]">
                            {overlay.subtitle}
                        </p>
                    </div>
                </>
            )}
            {tile.chip && (
                <span className="pointer-events-none absolute bottom-2 left-2 rounded-sm bg-[#060d12]/65 backdrop-blur-sm px-2 py-1 font-mono-digital text-[9px] uppercase tracking-[0.2em] text-zinc-300">
                    {tile.chip}
                </span>
            )}
        </div>
    );
}

export function TravelGallery({ photos }: { photos: TravelPhoto[] }) {
    const [page, setPage] = useState(0);
    const country = countries[page];

    const prev = () => setPage((p) => (p - 1 + countries.length) % countries.length);
    const next = () => setPage((p) => (p + 1) % countries.length);

    return (
        <SpacePanel className="mb-10 md:mb-0">
            <SectionTitle subtitle="Some of my favorite photos from my travels around the world">
                Travel
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-3 pb-20 md:pb-10">
                <div className="flex flex-col gap-3">
                    <PhotoTile
                        photos={photos}
                        tile={country.hero}
                        overlay={{ title: country.name, subtitle: country.subtitle }}
                    />
                    {country.bottomTiles.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {country.bottomTiles.map((tile) => (
                                <PhotoTile key={tile.srcPart} photos={photos} tile={tile} />
                            ))}
                        </div>
                    )}
                </div>

\                <div className="flex flex-col gap-3">
                    <div className="flex flex-col justify-center border-l border-purple-400/30 pl-4 py-2 flex-1">
                        <p className="font-mono-digital text-[10px] uppercase tracking-[0.25em] text-purple-400/80">
                            Field Notes · {String(page + 1).padStart(2, '0')}/
                            {String(countries.length).padStart(2, '0')}
                        </p>
                        <p className="mt-2.5 text-sm leading-relaxed text-zinc-300 font-light">
                            {country.note}
                        </p>
                    </div>
                    {country.sideTiles.map((tile) => (
                        <PhotoTile key={tile.srcPart} photos={photos} tile={tile} />
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between gap-3 mt-4">
                <button type="button" onClick={prev} aria-label="Previous country" className={navButtonClassName}>
                    <ChevronLeft className="w-3 h-3 shrink-0 text-blue-400/80" />
                    Prev
                </button>
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                    {countries.map((c, i) => (
                        <button
                            key={c.name}
                            type="button"
                            onClick={() => setPage(i)}
                            aria-pressed={page === i}
                            className={cn(
                                'px-2 py-1 rounded-sm font-mono-digital text-[10px] uppercase tracking-[0.15em] transition-colors cursor-pointer',
                                page === i
                                    ? 'text-purple-200 border border-purple-400/50 bg-purple-950/30'
                                    : 'text-zinc-500 border border-transparent hover:text-zinc-300',
                            )}
                        >
                            {c.name}
                        </button>
                    ))}
                </div>
                <button type="button" onClick={next} aria-label="Next country" className={navButtonClassName}>
                    Next
                    <ChevronRight className="w-3 h-3 shrink-0 text-blue-400/80" />
                </button>
            </div>
        </SpacePanel>
    );
}
