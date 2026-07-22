import { SiteShell } from '@/components/SiteShell';
import { SectionTitle } from '@/components/SectionTitle';
import { ResumeDocument } from '@/components/ResumeDocument';
import { buttonPrimaryClassName } from '@/lib/space-theme';
import { siteContent } from '@/lib/site-content';

export default function ResumePage() {
    return (
        <SiteShell>
            <div className="px-4 md:px-6 lg:px-8 py-10 md:py-14 max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <SectionTitle subtitle={siteContent.resume.summary}>Resume</SectionTitle>
                    <a href={siteContent.resume.pdfPath} download className={buttonPrimaryClassName}>
                        Download PDF
                    </a>
                </div>

                <ResumeDocument />
            </div>
        </SiteShell>
    );
}
