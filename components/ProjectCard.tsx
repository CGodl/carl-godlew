'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/lib/site-content';
import { panelInsetClassName } from '@/lib/space-theme';
import { cn } from '@/lib/utils';

function ProjectImage({ title, image, imageAlt }: Pick<Project, 'title' | 'image' | 'imageAlt'>) {
    const [hasError, setHasError] = useState(false);

    return (
        <div className="relative w-full md:w-52 lg:w-60 shrink-0 aspect-video md:aspect-[4/3] rounded-md overflow-hidden border border-white/12 bg-[#060d14]">
            {!hasError ? (
                <Image
                    src={image}
                    alt={imageAlt ?? `${title} homepage`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 240px"
                    onError={() => setHasError(true)}
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-950/60 to-purple-950/60">
                    <span className="font-orbitron text-2xl text-white/30 uppercase tracking-widest">
                        {title.slice(0, 2)}
                    </span>
                </div>
            )}
        </div>
    );
}

const projectLinkClassName =
    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/12 bg-[#060d14]/50 hover:border-purple-400/40 text-zinc-300 hover:text-purple-300 text-[11px] font-mono-digital uppercase tracking-wider transition-colors';

export function ProjectCard({ title, description, image, imageAlt, tags, siteHref, githubHref }: Project) {
    const hasLinks = Boolean(siteHref || githubHref);

    return (
        <div className={cn(panelInsetClassName, 'flex flex-col md:flex-row gap-4 md:gap-6 p-4')}>
            <ProjectImage title={title} image={image} imageAlt={imageAlt} />

            <div className="flex flex-col flex-1 min-w-0">
                <h3 className="font-orbitron text-sm md:text-base tracking-wide text-white">{title}</h3>

                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">{description}</p>

                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] font-mono-digital uppercase tracking-wider text-purple-300/80 rounded border border-purple-400/30 bg-purple-950/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {hasLinks && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {siteHref && (
                            <Link
                                href={siteHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={projectLinkClassName}
                            >
                                <ExternalLink className="w-3.5 h-3.5 text-blue-400/70" />
                                View Site
                            </Link>
                        )}
                        {githubHref && (
                            <Link
                                href={githubHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={projectLinkClassName}
                            >
                                <Github className="w-3.5 h-3.5 text-blue-400/70" />
                                View Repo
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
