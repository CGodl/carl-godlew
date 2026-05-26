import { SpacePanel } from '@/components/SpacePanel';
import { SectionTitle } from '@/components/SectionTitle';
import { ProjectCard } from '@/components/ProjectCard';
import { siteContent } from '@/lib/site-content';

export default function ProjectsPage() {
    return (
        <div className="px-4 md:px-6 lg:px-8 py-10 md:py-14 max-w-6xl mx-auto">
            <SpacePanel>
                <SectionTitle subtitle="Work I&apos;ve built and contributed to">Projects</SectionTitle>
                <div className="flex flex-col gap-4">
                    {siteContent.projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </SpacePanel>
        </div>
    );
}
