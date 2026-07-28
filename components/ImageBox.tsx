'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { SpacePanel } from '@/components/SpacePanel';
import { cn } from '@/lib/utils';
import type { TravelPhoto } from '@/lib/site-content';

export function ImageBox({
    src,
    alt,
    caption,
    className,
    fit = 'cover',
}: TravelPhoto & { className?: string; fit?: 'cover' | 'contain' }) {
    const [open, setOpen] = useState(false);

    // Close on Escape and lock background scroll while the lightbox is open.
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('keydown', onKeyDown);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className={cn(
                    'relative w-full h-full min-h-30 overflow-hidden group cursor-pointer',
                    className,
                )}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={cn(
                        'transition-transform duration-500 group-hover:scale-105',
                        fit === 'contain' ? 'object-contain' : 'object-cover',
                    )}
                    sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/20 transition-colors" />
            </button>

            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#060d12]/90 p-4"
                    onClick={() => setOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={alt}
                >
                    <div
                        className="relative max-w-4xl w-full max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <SpacePanel className="relative overflow-hidden p-2">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 z-10 p-1.5 rounded border border-white/10 bg-[#060d12]/90 text-zinc-300 hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <div className="relative w-full aspect-4/3 max-h-[80vh]">
                                <Image
                                    src={src}
                                    alt={alt}
                                    fill
                                    className="object-contain"
                                    sizes="90vw"
                                />
                            </div>
                            {caption && (
                                <p className="font-mono-digital text-xs text-zinc-500 p-4 text-center tracking-wide">
                                    {caption}
                                </p>
                            )}
                        </SpacePanel>
                    </div>
                </div>
            )}
        </>
    );
}
