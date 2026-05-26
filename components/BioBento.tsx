'use client';

import Image from 'next/image';
import { SpacePanel } from '@/components/SpacePanel';
import { SectionTitle } from '@/components/SectionTitle';
import { cn } from '@/lib/utils';
import { siteContent } from '@/lib/site-content';

const workSteps = [
    { n: '01', title: 'Project Brief', desc: 'Discuss your project and its goals.' },
    { n: '02', title: 'Design & Develop', desc: 'Design and build to your specifications.' },
    { n: '03', title: 'Testing & Review', desc: 'Test together and refine as needed.' },
    { n: '04', title: 'Launch', desc: 'Deliver source code and support launch.' },
];

const stats = [
    { value: '13+', label: 'Projects' },
    { value: '7+', label: 'Clients' },
    { value: '5+', label: 'Years' },
];

const services = [
    'SEO Optimization', 'Hosting Guide', 'Web Security',
    'Web Development', 'Website Rework', 'UI/UX Design', 'Performance Tuning',
];

export function BioBento({ className }: { className?: string }) {
    return (
        <section className={cn('px-4 md:px-6 lg:px-8 py-10 md:py-14', className)}>
            <div className="mx-auto max-w-6xl">
                <SectionTitle subtitle="Overview">Mission Control</SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Row 1 */}
                    <SpacePanel className="flex flex-col items-center text-center gap-4">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-1 ring-purple-500/30 ring-offset-2 ring-offset-[#0a1520]">
                            <Image
                                src={siteContent.bio.profilePhoto}
                                alt={siteContent.name}
                                fill
                                className="object-cover"
                                sizes="96px"
                            />
                            <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0a1520]" />
                        </div>
                        <div>
                            <p className="font-orbitron text-sm tracking-wider text-white">{siteContent.name}</p>
                            <p className="font-mono-digital text-[11px] text-purple-400/80 mt-1 uppercase tracking-widest">
                                {siteContent.role}
                            </p>
                        </div>
                        <span className="font-mono-digital text-[10px] uppercase tracking-widest px-2.5 py-1 rounded border border-emerald-500/25 text-emerald-400/90 bg-emerald-950/20">
                            Available
                        </span>
                    </SpacePanel>

                    <SpacePanel className="md:col-span-2 flex flex-col justify-center">
                        <SectionTitle subtitle="Background">Who Am I</SectionTitle>
                        <p className="text-zinc-200 text-sm leading-relaxed">
                            {siteContent.tagline} {siteContent.bio.headline}
                        </p>
                    </SpacePanel>

                    {/* Row 2 — equal stats */}
                    {stats.map(({ value, label }) => (
                        <SpacePanel key={label} className="flex flex-col items-center justify-center text-center py-6">
                            <span className="font-orbitron text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-purple-400">
                                {value}
                            </span>
                            <span className="font-mono-digital text-[10px] uppercase tracking-[0.2em] text-zinc-400 mt-2">
                                {label}
                            </span>
                        </SpacePanel>
                    ))}

                    {/* Row 3 */}
                    <SpacePanel className="md:col-span-2">
                        <SectionTitle subtitle="Tools & technologies">Tech Stack</SectionTitle>
                        <div className="flex flex-wrap gap-2">
                            {services.map((s) => (
                                <span key={s} className="px-2.5 py-1 text-xs text-zinc-200 rounded border border-white/12 bg-[#060d14]/50 hover:border-purple-400/35 transition-colors">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </SpacePanel>

                    <SpacePanel className="flex flex-col justify-center gap-3">
                        <SectionTitle subtitle="Coordinates">Signal</SectionTitle>
                        {[
                            { label: 'English', code: 'EN' },
                            { label: siteContent.bio.location, code: 'LOC' },
                            { label: siteContent.bio.timezone, code: 'TZ' },
                        ].map(({ label, code }) => (
                            <div key={label} className="flex items-center justify-between text-sm">
                                <span className="font-mono-digital text-[10px] text-blue-400/60">{code}</span>
                                <span className="text-zinc-300">{label}</span>
                            </div>
                        ))}
                        <span className="mt-1 font-mono-digital text-[10px] uppercase tracking-widest text-purple-400/70">
                            Freelancer
                        </span>
                    </SpacePanel>

                    {/* Row 4 — horizontal process */}
                    <SpacePanel className="md:col-span-3">
                        <SectionTitle subtitle="How we work together">Work Process</SectionTitle>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {workSteps.map(({ n, title, desc }) => (
                                <div
                                    key={n}
                                    className="rounded-md border border-white/12 bg-[#060d14]/40 p-4 hover:border-blue-400/35 transition-colors"
                                >
                                    <span className="font-orbitron text-xs text-purple-400/80">{n}</span>
                                    <p className="text-white text-sm font-medium mt-2">{title}</p>
                                    <p className="text-zinc-400 text-xs mt-1 leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </SpacePanel>
                </div>
            </div>
        </section>
    );
}
