export const HeaderImage = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full h-screen bg-[url('/spaceHeader.png')] bg-cover bg-no-repeat relative">
            <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    background:
                        'linear-gradient(to bottom, transparent 0%, rgba(11, 29, 38, 0.25) 45%, rgba(11, 29, 38, 0.65) 72%, rgba(11, 29, 38, 0.92) 88%, #0B1D26 100%)',
                }}
            />

            <div className="absolute top-20 left-6 md:left-10 z-20 max-w-2xl">
                <p className="font-mono-digital text-[11px] uppercase tracking-[0.3em] text-blue-400/70 mb-4 animate-pulse-glow">
                    // Signal acquired
                </p>
                <h1 className="font-knewave md:text-7xl text-4xl text-white leading-tight">
                    Creating Web
                </h1>
                <h1 className="font-knewave md:text-7xl text-4xl text-white leading-tight">
                    Experiences
                </h1>
                <h1 className="font-knewave md:text-7xl text-4xl leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        For The Next
                    </span>
                </h1>
                <h1 className="font-knewave md:text-7xl text-4xl text-white leading-tight">
                    Frontier!
                </h1>
                <p className="font-orbitron text-xs md:text-sm tracking-[0.25em] uppercase text-purple-400/60 mt-6">
                    Carl Godlewski · Web Developer
                </p>
            </div>
        </section>
    );
};
