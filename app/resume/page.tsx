import { SiteShell } from '@/components/SiteShell';
import { SectionTitle } from '@/components/SectionTitle';
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

                <div className="rounded-lg overflow-hidden border border-blue-500/10 bg-[#060d14]/40">
                    <iframe
                        src={siteContent.resume.pdfPath}
                        title="Carl Godlewski Resume"
                        className="w-full h-[80vh] min-h-[500px]"
                    />
                    <p className="font-mono-digital text-[10px] text-zinc-600 p-4 text-center tracking-widest uppercase border-t border-white/5">
                        Add resume as public/resume.pdf
                    </p>
                </div>
            </div>
        </SiteShell>
    );
}
