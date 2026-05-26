import { panelClassName } from '@/lib/space-theme';
import { cn } from '@/lib/utils';

export function SpacePanel({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={cn(panelClassName, className)}>{children}</div>;
}
