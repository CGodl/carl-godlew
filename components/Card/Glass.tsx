import { Card } from '@/components/ui/card';


export const GlassCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <Card className={`${className} bg-clip-padding backdrop-filter bg-[#0A2342]/80 border-2 border-[#6220EB]/20 rounded-xl shadow-[inset_0px_0px_12px_0px_#225599]/87.06`}>
            {children}
        </Card>
    );
}