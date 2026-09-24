import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/SiteShell';
import { SpacePanel } from '@/components/SpacePanel';
import { buttonGhostClassName, buttonPrimaryClassName } from '@/lib/space-theme';

export const metadata: Metadata = {
    title: 'Page Not Found',
};

export default function NotFound() {
    return (
        <SiteShell stars={true}>
            <div className="flex items-center justify-center min-h-screen px-4 pt-28 pb-12">
                <div className="w-full max-w-xl">
                    <SpacePanel className="relative overflow-hidden p-0">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-blue-400/15 bg-[#0a1520]/90">
                            <div className="flex items-center gap-2">
                                <span className="relative flex w-2 h-2">
                                    <span className="absolute inline-flex w-full h-full rounded-full bg-red-400 opacity-60 animate-ping" />
                                    <span className="relative inline-flex w-2 h-2 rounded-full bg-red-400/90" />
                                </span>
                                <span className="font-mono-digital text-[10px] tracking-[0.2em] text-blue-300/80">
                                    ERR-404
                                </span>
                            </div>
                            <span className="font-mono-digital text-[10px] tracking-[0.2em] text-red-400/80 uppercase">
                                Status: Signal Lost
                            </span>
                        </div>

                        <div className="p-6 md:p-8">
                            <p className="font-orbitron text-6xl md:text-7xl tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-purple-400">
                                404
                            </p>
                            <h1 className="mt-4 font-orbitron text-base md:text-lg tracking-[0.18em] uppercase text-white">
                                Lost in space
                            </h1>
                            <div className="mt-2.5 h-px w-10 bg-gradient-to-r from-purple-500/50 to-transparent" />
                            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                                The page you&apos;re looking for has drifted out of orbit. It may have moved, or the
                                coordinates might be wrong.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link href="/" className={buttonPrimaryClassName}>
                                    Return to base
                                </Link>
                                <Link href="/projects" className={buttonGhostClassName}>
                                    View projects
                                </Link>
                            </div>
                        </div>
                    </SpacePanel>
                </div>
            </div>
        </SiteShell>
    );
}
