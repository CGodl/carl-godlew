'use client';

import Particles, { ParticlesProvider } from '@tsparticles/react';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

// Must be a stable reference: ParticlesProvider throws if the init callback
// changes between renders.
const initEngine = async (engine: Engine) => {
    await loadSlim(engine);
};

const starOptions: ISourceOptions = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 30,
    detectRetina: true,
    pauseOnOutsideViewport: true,
    particles: {
        number: {
            value: 600,
            density: { enable: true },
        },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
            // legacy "random: true" with animated opacity_min 0
            value: { min: 0, max: 1 },
            animation: {
                enable: true,
                speed: 1,
                sync: false,
                startValue: 'random',
                mode: 'auto',
            },
        },
        size: {
            // legacy "value: 1, random: true"
            value: { min: 0.1, max: 1 },
        },
        links: { enable: false },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
        },
    },
    interactivity: {
        detectsOn: 'canvas',
        events: {
            // onHover: { enable: true, mode: 'bubble' },
            // onClick: { enable: true, mode: 'repulse' },
            resize: { enable: true },
        },
        modes: {
            grab: { distance: 400, links: { opacity: 1 } },
            bubble: { distance: 250, size: 0, opacity: 0, duration: 2 },
            repulse: { distance: 400, duration: 0.4 },
            push: { quantity: 4 },
            remove: { quantity: 2 },
        },
    },
};

export default function StarParticles({
    id = 'star-particles',
    className,
}: {
    id?: string;
    className?: string;
}) {
    return (
        <ParticlesProvider init={initEngine}>
            <Particles id={id} className={className} options={starOptions} />
        </ParticlesProvider>
    );
}
