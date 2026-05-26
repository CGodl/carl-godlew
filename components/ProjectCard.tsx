import Link from 'next/link';
import type { Project } from '@/lib/site-content';
import { panelInsetClassName } from '@/lib/space-theme';
import { cn } from '@/lib/utils';

export function ProjectCard({ title, description, tags, href }: Project) {
    const inner = (
        <>
            <p className="font-orbitron text-xs tracking-wide text-white">{title}</p>
            <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">{description}</p>
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] font-mono-digital uppercase tracking-wider text-purple-300/80 rounded border border-purple-500/15 bg-purple-950/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </>
    );

    const className = cn(
        panelInsetClassName,
        'block hover:border-purple-500/25',
    );

    if (href) {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {inner}
            </Link>
        );
    }

    return <div className={className}>{inner}</div>;
}
