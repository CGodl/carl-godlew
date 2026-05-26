import { cn } from '@/lib/utils';

export function SectionTitle({
    children,
    subtitle,
    className,
}: {
    children: React.ReactNode;
    subtitle?: string;
    className?: string;
}) {
    return (
        <div className={cn('mb-4', className)}>
            <h2 className="font-orbitron text-sm md:text-base tracking-[0.18em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300">
                {children}
            </h2>
            {subtitle && (
                <p className="font-mono-digital text-[11px] text-zinc-500 mt-1.5 tracking-wide">
                    {subtitle}
                </p>
            )}
            <div className="mt-2.5 h-px w-10 bg-gradient-to-r from-purple-500/50 to-transparent" />
        </div>
    );
}
