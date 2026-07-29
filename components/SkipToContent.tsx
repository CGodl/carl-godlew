/**
 * First focusable control for keyboard users — jumps past the hero/nav chrome.
 * Visually hidden until focused.
 */
export function SkipToContent({
    href = '#main-content',
    label = 'Skip to content',
}: {
    href?: string;
    label?: string;
}) {
    return (
        <a
            href={href}
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[300] focus:px-4 focus:py-2.5 focus:rounded-md focus:bg-[#0a1520] focus:border focus:border-purple-400/50 focus:text-white focus:font-mono-digital focus:text-xs focus:uppercase focus:tracking-[0.15em] focus:shadow-[0_0_24px_rgba(139,92,246,0.25)] focus:outline-none focus:ring-2 focus:ring-purple-400/80"
        >
            {label}
        </a>
    );
}
