'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import StarParticles from '@/components/StarParticles';

const HEADER_IMAGE = '/projects/spaceHeader.webp';
const FALLBACK_COLOR = '#0B1D26';

/** Soft camera drift after the glitch finishes. Off by default. */
const ENABLE_CAMERA_SWAY = false;

/** Bottom fade into page background. Set false to show the image unmasked. */
const ENABLE_FADE_OVERLAY = true;

function createSolidDataUrl(color: string) {
    const solid = document.createElement('canvas');
    solid.width = 4;
    solid.height = 4;
    const ctx = solid.getContext('2d');
    if (ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 4, 4);
    }
    return solid.toDataURL();
}

function canUseWebGL() {
    try {
        const probe = document.createElement('canvas');
        return !!(
            window.WebGLRenderingContext &&
            (probe.getContext('webgl') || probe.getContext('experimental-webgl'))
        );
    } catch {
        return false;
    }
}

type MidoriGlRenderer = {
    setPixelRatio: (ratio: number) => void;
    setSize: (width: number, height: number, updateStyle?: boolean) => void;
    outputColorSpace: string;
    toneMapping: number;
};

type MidoriTexture = {
    colorSpace: string;
    needsUpdate?: boolean;
};

type MidoriComposer = {
    renderTarget1?: { texture: MidoriTexture };
    renderTarget2?: { texture: MidoriTexture };
};

function configureLegacyColorPipeline(
    gl: MidoriGlRenderer,
    composer?: MidoriComposer,
) {
    gl.outputColorSpace = 'srgb-linear'; // LinearSRGBColorSpace — no final encode
    gl.toneMapping = 0; // NoToneMapping

    for (const target of [composer?.renderTarget1, composer?.renderTarget2]) {
        if (!target?.texture) continue;
        target.texture.colorSpace = 'srgb-linear';
    }
}

function prepareMidoriTexture(texture: MidoriTexture) {
    // Empty string = NoColorSpace: don't decode the webp as if it were linear.
    texture.colorSpace = '';
    texture.needsUpdate = true;
}

export const HeaderImage = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // Only reveal the static CSS image if WebGL/midori fails — never as a preload flash.
    const [useCssFallback, setUseCssFallback] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !canUseWebGL()) {
            setUseCssFallback(true);
            setIsLoading(false);
            return;
        }

        let cancelled = false;
        let dispose: (() => void) | undefined;

        void (async () => {
            try {
                const { BackgroundRenderer, Easings, TransitionType, loadImage } =
                    await import('midori-bg');

                if (cancelled) return;

                const { width, height } = canvas.getBoundingClientRect();
                if (width < 2 || height < 2) {
                    setUseCssFallback(true);
                    setIsLoading(false);
                    return;
                }

                const renderer = new BackgroundRenderer(canvas);
                dispose = () => renderer.dispose();

                const midori = renderer as unknown as {
                    _renderer: MidoriGlRenderer;
                    _composer: MidoriComposer;
                    setSize?: (width: number, height: number) => void;
                };
                const gl = midori._renderer;

                const applyViewportSize = () => {
                    const w = canvas.clientWidth;
                    const h = canvas.clientHeight;
                    if (w < 2 || h < 2) return;
                    gl.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
                    if (typeof midori.setSize === 'function') {
                        midori.setSize(w, h);
                    } else {
                        gl.setSize(w, h, false);
                    }
                    configureLegacyColorPipeline(gl, midori._composer);
                };

                applyViewportSize();

                let resizeRaf = 0;
                const handleResize = () => {
                    if (resizeRaf) cancelAnimationFrame(resizeRaf);
                    resizeRaf = requestAnimationFrame(applyViewportSize);
                };
                window.addEventListener('resize', handleResize);

                dispose = () => {
                    if (resizeRaf) cancelAnimationFrame(resizeRaf);
                    window.removeEventListener('resize', handleResize);
                    renderer.dispose();
                };

                renderer.effects.removeAll();

                const [placeholder, image] = await Promise.all([
                    loadImage(createSolidDataUrl(FALLBACK_COLOR)),
                    loadImage(HEADER_IMAGE),
                ]);

                if (cancelled) return;

                prepareMidoriTexture(placeholder as MidoriTexture);
                prepareMidoriTexture(image as MidoriTexture);

                renderer.setBackground(placeholder);
                renderer.background.effects.removeAll();

                setIsLoading(false);

                renderer.setBackground(image, {
                    type: TransitionType.Glitch,
                    config: {
                        seed: 0.42,
                        duration: 1.4,
                        easing: Easings.Cubic.Out,
                        onStart: (_prev, next) => {
                            next?.effects.removeAll();
                        },
                        onComplete: (_prev, next) => {
                            next?.effects.removeAll();
                            renderer.effects.removeAll();
                            // Re-apply in case Midori rebuilt targets during the transition.
                            configureLegacyColorPipeline(gl, midori._composer);
                            if (!ENABLE_CAMERA_SWAY || !next) return;
                            next.camera.sway(
                                { x: 0.04, y: 0.02, z: 0.01, zr: 0.4 },
                                {
                                    duration: 4,
                                    easing: Easings.Sinusoidal.InOut,
                                    loop: true,
                                },
                            );
                        },
                    },
                });
            } catch (err) {
                console.error('Failed to load header background', err);
                dispose?.();
                dispose = undefined;
                setUseCssFallback(true);
                setIsLoading(false);
            }
        })();

        return () => {
            cancelled = true;
            dispose?.();
        };
    }, []);

    return (
        <section
            className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-[#0B1D26] bg-cover bg-no-repeat"
            style={
                useCssFallback
                    ? { backgroundImage: `url('${HEADER_IMAGE}')` }
                    : undefined
            }
        >
            <canvas
                ref={canvasRef}
                className={`absolute inset-0 z-0 h-full w-full ${
                    useCssFallback ? 'hidden' : ''
                }`}
                aria-hidden
            />
            {isLoading && (
                <div
                    className="absolute inset-0 z-[25] flex items-center justify-center pointer-events-none"
                    aria-live="polite"
                    aria-busy="true"
                >
                    <p className="font-orbitron text-sm md:text-4xl tracking-[0.35em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 animate-pulse">
                        Loading...
                    </p>
                </div>
            )}
            {ENABLE_FADE_OVERLAY && (
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(11, 29, 38, 0) 0%, rgba(11, 29, 38, 0.15) 35%, rgba(11, 29, 38, 0.55) 58%, rgba(11, 29, 38, 0.88) 75%, var(--space-bg) 90%)',
                    }}
                />
            )}
            <StarParticles
                id="header-stars"
                className="absolute inset-0 z-[15] pointer-events-none"
            />
            <div
                className={`absolute top-20 left-6 md:left-10 z-20 max-w-2xl transition-opacity duration-500 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                }`}
            >
                <div>
                    <p className="font-mono-digital text-[22px] uppercase tracking-[0.3em] text-white mb-4 animate-pulse-glow drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                        // <span className="inline-block overflow-hidden whitespace-nowrap align-bottom animate-typewriter">Signal acquired</span>
                    </p>
                    <h1 className="font-knewave md:text-7xl text-4xl text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                        <span className="block">Creating Web</span>
                        <span className="block">Experiences</span>
                        <span className="block">
                            <span className="pr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                For The Next
                            </span>
                        </span>
                        <span className="block">Frontier!</span>
                    </h1>
                    <p className="font-orbitron text-sm md:text-md tracking-[0.25em] uppercase text-white mt-6">
                        Carl Godlewski · Web Developer
                    </p>
                </div>
            </div>
            <a
                href="#aboutMe"
                aria-label="Continue to the about me section"
                className={`group absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 rounded-md px-3 py-1 transition-opacity duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/80 ${
                    isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
                <span className="font-orbitron text-xl md:text-2xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] transition-colors group-hover:text-purple-300">
                    CONTINUE TRANSMISSION...
                </span>
                <ChevronDown
                    aria-hidden
                    className="w-6 h-6 text-white/80 animate-bounce transition-colors group-hover:text-purple-300"
                />
                
            </a>
        </section>
    );
};
