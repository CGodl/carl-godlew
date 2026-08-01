import { navShellClassName } from '@/lib/space-theme';
import { NavBar } from './Navigation';

export const NavBarGlass = () => {
    const navClass = `fixed bottom-5 inset-x-0 mx-auto md:bottom-auto md:top-10 md:left-auto md:right-10 md:mx-0 px-5 py-2.5 w-fit z-100 ${navShellClassName}`;
    const listClass = 'flex items-center justify-center gap-5 md:gap-6';
    const linkClass =
        'font-mono-digital text-[11px] uppercase tracking-[0.15em] text-zinc-400 hover:text-purple-300 duration-300';

    return <NavBar navClass={navClass} listClass={listClass} linkClass={linkClass} />;
};
