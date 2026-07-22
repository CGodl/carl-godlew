import Link from 'next/link';
import { SpacePanel } from '@/components/SpacePanel';
import { SectionTitle } from '@/components/SectionTitle';
import { ProjectCard } from '@/components/ProjectCard';
import { buttonGhostClassName } from '@/lib/space-theme';
import { cn } from '@/lib/utils';
import { siteContent } from '@/lib/site-content';

export function FeaturedProjects() {
    const projects = siteContent.projects;

    return (
        <section className="px-4 md:px-6 lg:px-8 pb-10">
            <div className="mx-auto max-w-6xl">
                <SpacePanel>
                    <SectionTitle subtitle="Recent work & side projects">Featured Projects</SectionTitle>
                    <div className="flex flex-col gap-4">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                    {/* <Link
                        href="/projects"
                        className={cn(buttonGhostClassName, 'block w-full py-2.5 mt-5 text-center text-purple-300/90')}
                    >
                        View All Projects →
                    </Link> */}
                </SpacePanel>
            </div>
        </section>
    );
}
