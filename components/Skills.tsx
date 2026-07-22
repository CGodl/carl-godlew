'use client';

import Image from 'next/image';
import { SpacePanel } from '@/components/SpacePanel';
import { SectionTitle } from '@/components/SectionTitle';
import { userExperience } from '@/lib/user-experience';
import { cn } from '@/lib/utils';

const techLanguages = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Python',
    'Java'
];

const frontendAndDesign = [
    'React', 'Next.js', 'Angular', 'Tailwind CSS', 'SCSS', 'Material UI (MUI)', 'Shadcn UI'
];

const backend = [
    'Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes',
];

const cloudAndDevOps = [
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD',
];

const services = [
    'SEO Optimization', 'Hosting Guide', 'Web Security',
    'Web Development', 'Website Rework', 'UI/UX Design', 'Performance Tuning',
];

export function Skills() {
    return (
        <section className={cn('px-4 md:px-6 lg:px-8 py-10 md:py-14')}>
        <div className="mx-auto max-w-6xl">
            <SectionTitle subtitle="My expertise covers a wide range of technologies and languages. Here is an outline of some of the technologies I have used in a professional setting">Skills</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <SpacePanel className="md:col-span-3">
                    <SectionTitle subtitle={userExperience.technologies.languages.subtitle}>
                        {userExperience.technologies.languages.title}
                    </SectionTitle>
                    <div className="flex flex-wrap gap-2">
                        {userExperience.technologies.languages.items.map((language) => (
                            <span key={language.name} className="inline-flex items-center gap-2 px-2.5 py-1 text-md text-zinc-200 rounded border border-white/12 bg-[#060d14]/50 hover:border-purple-400/35 hover:scale-110 transition-all duration-200">
                                <Image src={language.icon} alt={language.name} width={16} height={16} className="shrink-0" />
                                {language.name}
                            </span>
                        ))}
                    </div>
                </SpacePanel>

                <SpacePanel className="md:col-span-3">
                    <SectionTitle subtitle={userExperience.technologies.languages.subtitle}>
                        {userExperience.technologies.languages.title}
                    </SectionTitle>
                    <div className="flex flex-wrap gap-6">
                        {userExperience.technologies.languages.items.map((language) => (
                            <div key={language.name} className="flex flex-col items-center gap-2 text-base text-zinc-200 hover:scale-110 transition-transform duration-200 cursor-default">
                                <Image src={language.icon} alt={language.name} width={48} height={48} />
                                <span>{language.name}</span>
                            </div>
                        ))}
                    </div>
                </SpacePanel>

                <SpacePanel className="md:col-span-3">
                    <SectionTitle subtitle={userExperience.technologies.frontend.subtitle}>
                        {userExperience.technologies.frontend.title}
                    </SectionTitle>
                    <div className="flex flex-wrap gap-6">
                        {userExperience.technologies.frontend.items.map((language) => (
                            <div key={language.name} className="flex flex-col items-center gap-2 text-base text-zinc-200 hover:scale-110 transition-transform duration-200 cursor-default">
                                <Image src={language.icon} alt={language.name} width={48} height={48} />
                                <span>{language.name}</span>
                            </div>
                        ))}
                    </div>
                </SpacePanel>

                {userExperience.technologies.sections.map((section) => (
                    <SpacePanel key={section.id} className="md:col-span-3">
                        <SectionTitle subtitle={section.subtitle}>{section.title}</SectionTitle>
                        <div className="flex flex-wrap gap-6">
                            {section.items.map((item) => (
                                <div key={item.name} className="flex flex-col items-center gap-2 text-base text-zinc-200 hover:scale-110 transition-transform duration-200 cursor-default">
                                    <Image src={item.icon} alt={item.name} width={48} height={48} />
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </SpacePanel>
                ))}


                {/* <SpacePanel className="md:col-span-3">
                    <SectionTitle subtitle="Orbital badge with glow ring">C — Random</SectionTitle>
                    <div className="flex flex-wrap gap-4">
                        <div className="group relative flex items-center justify-center w-28 h-28">
                            <div
                                className="absolute inset-0 rounded-full border border-[#61DAFB]/25 animate-pulse-glow"
                                aria-hidden
                            />
                            <div
                                className="absolute inset-2 rounded-full border border-dashed border-[#61DAFB]/40 group-hover:rotate-45 transition-transform duration-500"
                                aria-hidden
                            />
                            <div className="relative z-10 flex flex-col items-center gap-1">
                                <Image
                                    src="/icons/languages/React.svg"
                                    alt=""
                                    width={36}
                                    height={36}
                                    className="drop-shadow-[0_0_8px_rgba(97,218,251,0.45)] group-hover:scale-110 transition-transform"
                                />
                                <span className="text-[10px] tracking-[0.2em] uppercase text-[#61DAFB]/90">
                                    React
                                </span>
                            </div>
                        </div>
                        <div className="group relative flex items-center justify-center w-28 h-28">
                            <div
                                className="absolute inset-0 rounded-full border border-[#E34F26]/25 animate-pulse-glow"
                                aria-hidden
                            />
                            <div
                                className="absolute inset-2 rounded-full border border-dashed border-[#E34F26]/40 group-hover:rotate-45 transition-transform duration-500"
                                aria-hidden
                            />
                            <div className="relative z-10 flex flex-col items-center gap-1">
                                <Image
                                    src="/icons/languages/HTML5.svg"
                                    alt=""
                                    width={36}
                                    height={36}
                                    className="drop-shadow-[0_0_8px_rgba(227,79,38,0.45)] group-hover:scale-110 transition-transform"
                                />
                                <span className="text-[10px] tracking-[0.2em] uppercase text-[#E34F26]/90">
                                    HTML
                                </span>
                            </div>
                        </div>
                        <div className="group relative flex items-center justify-center w-28 h-28">
                            <div
                                className="absolute inset-0 rounded-full border border-[#F7DF1E]/25 animate-pulse-glow"
                                aria-hidden
                            />
                            <div
                                className="absolute inset-2 rounded-full border border-dashed border-[#F7DF1E]/40 group-hover:rotate-45 transition-transform duration-500"
                                aria-hidden
                            />
                            <div className="relative z-10 flex flex-col items-center gap-1">
                                <Image
                                    src="/icons/languages/JavaScript.svg"
                                    alt=""
                                    width={36}
                                    height={36}
                                    className="drop-shadow-[0_0_8px_rgba(247,223,30,0.45)] group-hover:scale-110 transition-transform"
                                />
                                <span className="text-[10px] tracking-[0.2em] uppercase text-[#F7DF1E]/90">
                                    JavaScript
                                </span>
                            </div>
                        </div>
                    </div>
                </SpacePanel> */}

            </div>
        </div>
    </section>
    );
}
