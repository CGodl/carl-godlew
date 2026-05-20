import { Card } from '@/components/ui/card';
import { glassClassName } from '@/lib/glass';
import { cn } from '@/lib/utils';

export const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <Card
            className={cn(
                'border-0 bg-transparent shadow-none text-white dark:border-0 dark:bg-transparent dark:text-white',
                className,
                glassClassName,
            )}
        >
            {children}
        </Card>
    );
};
