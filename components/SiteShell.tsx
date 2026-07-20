import { NavBarGlass } from '@/components/Navigation/Glass';
import StarParticles from '@/components/StarParticles';
import { cn } from '@/lib/utils';

export function SiteShell({
    children,
    className,
    stars = false,
}: {
    children: React.ReactNode;
    className?: string;
    stars?: boolean;
}) {
    return (
        <div className={cn('relative min-h-screen bg-[#0B1D26]', className)}>
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-30"
                style={{
                    background:
                        'radial-gradient(ellipse at 20% 0%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(139,92,246,0.06) 0%, transparent 50%)',
                }}
            />
            {stars && <StarParticles
                id="header-stars"
                className="absolute inset-0 z-0 pointer-events-none"
            />}
            <NavBarGlass />
            <main className="relative z-10">{children}</main>
        </div>
    );
}
