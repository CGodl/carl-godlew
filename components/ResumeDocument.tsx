import { SpacePanel } from '@/components/SpacePanel';
import { tagClassName } from '@/lib/space-theme';
import { siteContent } from '@/lib/site-content';

const resume = siteContent.resume;

function ResumeSectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-4">
            <h3 className="font-orbitron text-xs md:text-sm tracking-[0.18em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300">
                {children}
            </h3>
            <div className="mt-2 h-px w-full bg-gradient-to-r from-purple-500/40 via-blue-500/20 to-transparent" />
        </div>
    );
}

export function ResumeDocument() {
    return (
        <div className="flex flex-col gap-4">
            <SpacePanel>
                <div className="flex flex-col gap-3 text-center">
                    <h2 className="font-orbitron text-2xl md:text-3xl tracking-[0.12em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-blue-200">
                        {resume.header.name}
                    </h2>
                    <p className="font-mono-digital text-sm text-purple-300/90 tracking-[0.2em] uppercase">
                        {resume.header.title}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-zinc-300 font-mono-digital">
                        <span>{resume.header.location}</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-mono-digital">
                        {resume.header.links.map((link, idx) => (
                            <span key={link.href} className="flex items-center gap-3">
                                {idx > 0 && <span className="text-blue-400/40">|</span>}
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-300/90 hover:text-purple-300 transition-colors"
                                >
                                    {link.label}
                                </a>
                            </span>
                        ))}
                    </div>
                </div>
            </SpacePanel>

            <SpacePanel>
                <ResumeSectionHeading>Profile</ResumeSectionHeading>
                <p className="text-sm text-zinc-300 leading-relaxed">{resume.profile}</p>
            </SpacePanel>

            <SpacePanel>
                <ResumeSectionHeading>Work Experience</ResumeSectionHeading>
                <div className="flex flex-col gap-6">
                    {resume.experience.map((job) => (
                        <div key={`${job.company}-${job.period}`}>
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                <div>
                                    <span className="text-zinc-100 font-medium">{job.role}</span>
                                    <span className="text-purple-300/90"> · {job.company}</span>
                                </div>
                                <span className="font-mono-digital text-[11px] text-zinc-400 tracking-wide shrink-0">
                                    {job.period}
                                </span>
                            </div>
                            <ul className="mt-2.5 flex flex-col gap-1.5">
                                {job.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex gap-2.5 text-sm text-zinc-300 leading-relaxed">
                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple-400/70" aria-hidden />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SpacePanel>

            <SpacePanel>
                <ResumeSectionHeading>Skills</ResumeSectionHeading>
                <div className="flex flex-col gap-4">
                    {resume.skills.map((group) => (
                        <div key={group.label} className="flex flex-col gap-2">
                            <span className="font-mono-digital text-[11px] uppercase tracking-wider text-blue-300/80">
                                {group.label}
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {group.items.split(', ').map((item) => (
                                    <span key={item} className={tagClassName}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SpacePanel>

            <SpacePanel className="mb-10 md:mb-0">
                <ResumeSectionHeading>Education</ResumeSectionHeading>
                <div className="flex flex-col gap-3">
                    {resume.education.map((entry) => (
                        <div
                            key={entry.credential}
                            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
                        >
                            <span className="text-sm text-zinc-300">{entry.credential}</span>
                            <span className="font-mono-digital text-[11px] text-zinc-400 tracking-wide shrink-0">
                                {entry.year}
                            </span>
                        </div>
                    ))}
                </div>
            </SpacePanel>
        </div>
    );
}
