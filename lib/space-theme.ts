/** Subtle space-themed surface styles — thin borders, deep navy, soft glow */
export const panelClassName =
    'rounded-lg border border-blue-500/10 bg-[#0a1520]/55 p-5 shadow-[0_4px_24px_rgba(0,0,0,0.25)] hover:border-purple-500/20 transition-colors duration-300';

export const panelInsetClassName =
    'rounded-md border border-white/5 bg-[#060d14]/60 p-3 hover:border-blue-500/20 transition-colors duration-200';

export const navShellClassName =
    'rounded-full border border-purple-500/15 bg-[#0a1520]/85 backdrop-blur-sm shadow-[0_0_24px_rgba(59,130,246,0.08)]';

export const buttonPrimaryClassName =
    'px-5 py-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-medium tracking-wide transition-all duration-300 shadow-[0_0_16px_rgba(98,32,235,0.2)]';

export const buttonGhostClassName =
    'px-5 py-2 rounded-md border border-blue-500/20 bg-[#0a1520]/60 hover:border-purple-500/30 text-zinc-200 text-sm tracking-wide transition-colors duration-300';

export const tagClassName =
    'px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-purple-300/90 rounded border border-purple-500/20 bg-purple-950/30';

/** @deprecated Use panelClassName — kept for gradual migration */
export const glassClassName = navShellClassName;
