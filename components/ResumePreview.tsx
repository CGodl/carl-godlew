import Link from 'next/link';
import { SpacePanel } from '@/components/SpacePanel';
import { SectionTitle } from '@/components/SectionTitle';
import { buttonGhostClassName, buttonPrimaryClassName } from '@/lib/space-theme';
import { siteContent } from '@/lib/site-content';

export function ResumePreview() {
    return (
        <section className="px-4 md:px-6 lg:px-8 pb-14">
            <div className="mx-auto max-w-6xl">
                <SpacePanel>
                    <SectionTitle subtitle="Download or view full document">Resume</SectionTitle>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="font-mono-digital text-sm text-zinc-300 tracking-wide">
                            {siteContent.resume.summary}
                        </p>
                        <div className="flex gap-3 shrink-0">
                            <Link href="/resume" className={buttonPrimaryClassName}>
                                View Resume
                            </Link>
                            <a href={siteContent.resume.pdfPath} download className={buttonGhostClassName}>
                                Download PDF
                            </a>
                        </div>
                    </div>
                </SpacePanel>
            </div>
        </section>
    );
}
