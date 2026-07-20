import StarParticles from '@/components/StarParticles';

export const HeaderImage = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full h-screen bg-[url('/spaceHeader.png')] bg-cover bg-no-repeat relative overflow-hidden">
            <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    background:
                        'linear-gradient(to bottom, rgba(11, 29, 38, 0) 0%, rgba(11, 29, 38, 0.15) 35%, rgba(11, 29, 38, 0.55) 58%, rgba(11, 29, 38, 0.88) 75%, var(--space-bg) 90%)',
                }}
            />
            <StarParticles
                id="header-stars"
                className="absolute inset-0 z-[15] pointer-events-none"
            />
            <div className="absolute top-20 left-6 md:left-10 z-20 max-w-2xl">
                <div>
                    <p className="font-mono-digital text-[22px] uppercase tracking-[0.3em] text-white mb-4 animate-pulse-glow drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                        // <span className="inline-block overflow-hidden whitespace-nowrap align-bottom animate-typewriter">Signal acquired</span>
                    </p> 
                    <h1 className="font-knewave md:text-7xl text-4xl text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                        Creating Web
                    </h1>
                    <h1 className="font-knewave md:text-7xl text-4xl text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                        Experiences
                    </h1>
                    <h1 className="font-knewave md:text-7xl text-4xl leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            For The Next
                        </span>
                    </h1>
                    <h1 className="font-knewave md:text-7xl text-4xl text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                        Frontier!
                    </h1>
                    <p className="font-orbitron text-sm md:text-md tracking-[0.25em] uppercase text-white mt-6">
                        Carl Godlewski · Web Developer
                    </p>
                </div>
            </div>
        </section>
    );
};
