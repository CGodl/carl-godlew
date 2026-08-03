'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Newspaper } from 'lucide-react';
import type { Project } from '@/lib/site-content';
import { SectionTitle } from '@/components/SectionTitle';
import { siteContent } from '@/lib/site-content';
import { userExperience } from '@/lib/user-experience';
import { cn } from '@/lib/utils';

// Project tag names that differ from their TechItem name in user-experience.ts
const TAG_ALIASES: Record<string, string> = {
    Tailwind: 'Tailwind CSS',
    PostgreSQL: 'PostgresSQL',
};

const techIconByName = new Map(
    [
        ...userExperience.technologies.languages.items,
        ...userExperience.technologies.frontend.items,
        ...userExperience.technologies.sections.flatMap((section) => section.items),
    ].map((item) => [item.name, item.icon]),
);

function getTagIcon(tag: string) {
    return techIconByName.get(TAG_ALIASES[tag] ?? tag);
}


function displayLinkStatus(link: string | undefined) {
    if (link) {
        if (link.includes('carlgodlewski')) {
            return <span className={cn(consoleButtonClassName, 'opacity-40 pointer-events-none')}>
                Current Site
            </span>
        } else {
            return <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={consoleButtonClassName}
        >
            <ExternalLink className="w-3 h-3 -mt-px shrink-0 text-blue-400/80" />
            <span className="translate-y-[0.5px]">Launch Site</span>
        </Link>
    } } else {
        return <span className={cn(consoleButtonClassName, 'opacity-40 pointer-events-none')}>
            Offline
        </span>
    }  
}

/**
 * "Mission Log" design — a spaceship console readout: each project is a
 * numbered mission dossier with a status light, scanline sweep over the
 * imagery, corner brackets, and console-style action buttons.
 */

const consoleButtonClassName =
    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-blue-400/25 bg-blue-950/20 hover:bg-purple-950/30 hover:border-purple-400/50 text-zinc-300 hover:text-purple-200 text-[10px] leading-none font-mono-digital uppercase tracking-[0.15em] transition-colors';

function CornerBrackets() {
    return (
        <>
            <span className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-400/60" />
            <span className="pointer-events-none absolute top-0 right-0 w-3 h-3 border-t border-r border-blue-400/60" />
            <span className="pointer-events-none absolute bottom-0 left-0 w-3 h-3 border-b border-l border-blue-400/60" />
            <span className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b border-r border-blue-400/60" />
        </>
    );
}

function MissionCard({ project, index }: { project: Project; index: number }) {
    const missionId = `MSN-${String(index + 1).padStart(3, '0')}`;

    return (
        <article className="group relative flex flex-col rounded-md border border-blue-400/20 bg-[#060d14]/80 hover:border-purple-400/40 transition-colors duration-300 overflow-hidden">
            {/* Console header strip */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-blue-400/15 bg-[#0a1520]/90">
                <div className="flex items-center gap-2">
                    <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400/90" />
                    </span>
                    <span className="font-mono-digital text-[10px] tracking-[0.2em] text-blue-300/80">
                        {missionId}
                    </span>
                </div>
                <span className="font-mono-digital text-[10px] tracking-[0.2em] text-emerald-400/70 uppercase">
                    Status: Deployed
                </span>
            </div>

            {/* Viewport with scanline sweep */}
            <div className="relative m-3 aspect-video overflow-hidden rounded-sm border border-white/10 bg-[#04090f]">
                <Image
                    src={project.image}
                    alt={project.imageAlt ?? `${project.title} homepage`}
                    fill
                    className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 480px"
                />
                <div className="pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-blue-400/15 to-transparent animate-scanline" />
                <CornerBrackets />
            </div>

            <div className="flex flex-col flex-1 px-4 pb-4">
                <h3 className="font-orbitron text-sm tracking-wide text-white">
                    {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed flex-1">
                    {project.description}
                </p>
                {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag) => {
                            const icon = getTagIcon(tag);
                            return (
                                <span
                                    key={tag}
                                    className="inline-flex items-center gap-2 px-2.5 py-1 text-xs text-zinc-200 rounded border border-white/12 bg-[#060d14]/50 hover:border-purple-400/35 hover:scale-110 transition-all duration-200"
                                >
                                    {icon && (
                                        <Image src={icon} alt="" width={16} height={16} className="shrink-0" />
                                    )}
                                    {tag}
                                </span>
                            );
                        })}
                    </div>
                )}
                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-blue-400/10">
                    {displayLinkStatus(project.siteHref)}
                    {project.githubHref && (
                        <Link
                            href={project.githubHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={consoleButtonClassName}
                        >
                            <Github className="w-3 h-3 -mt-px shrink-0 text-blue-400/80" />
                            Source
                        </Link>
                    )}
                     {project.addlLink && (
                        <Link
                            href={project.addlLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={consoleButtonClassName}
                        >
                            <Newspaper className="w-3 h-3 -mt-px shrink-0 text-blue-400/80" />
                            {project.addlLinkText}
                        </Link>
                    )}
                    {project.addlLink2 && (
                        <Link
                            href={project.addlLink2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={consoleButtonClassName}
                        >
                            <Newspaper className="w-3 h-3 -mt-px shrink-0 text-blue-400/80" />
                            {project.addlLink2Text}
                        </Link>
                    )}
                </div>
                
              
               
            </div>
        </article>
    );
}

export function FeaturedProjects() {
    const projects = siteContent.projects;

    return (
        <section className="px-4 md:px-6 lg:px-8 pb-20 md:pb-10">
            <div className="mx-auto max-w-6xl">
                <div className="rounded-lg border border-blue-400/25 bg-[#0a1520]/55 shadow-[0_4px_24px_rgba(0,0,0,0.25)] overflow-hidden">
                    <div className="p-5">
                        <SectionTitle subtitle="Recent work & side projects">
                            Featured Projects
                        </SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {projects.map((project, index) => (
                                <MissionCard key={project.title} project={project} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
