import { HeaderImage } from '@/components/HeaderImage';
import { NavBarGlass } from '@/components/Navigation/Glass';
import { BioBento } from '@/components/BioBento';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { ResumePreview } from '@/components/ResumePreview';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#0B1D26]">
            <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
                <HeaderImage />
                <NavBarGlass />
            </div>
            <div className="relative">
                <div
                    className="pointer-events-none absolute inset-0 z-0 opacity-30"
                    style={{
                        background:
                            'radial-gradient(ellipse at 20% 0%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(139,92,246,0.06) 0%, transparent 50%)',
                        maskImage:
                            'linear-gradient(to bottom, transparent 0%, black 25%)',
                        WebkitMaskImage:
                            'linear-gradient(to bottom, transparent 0%, black 25%)',
                    }}
                />               
                <BioBento className="bg-transparent" />
                <FeaturedProjects />
                <ResumePreview />
            </div>
        </div>
    );
}
