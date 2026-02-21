import { NavBar } from "./Navigation"

export const NavBarBase = () => {
    const navClass = 'fixed bottom-5 md:bottom-auto md:top-10 md:right-10 bg-slate-300 px-4 py-2 rounded-3xl backdrop-blur-sm w-fit bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60';
    const listClass = 'flex items-center justify-center gap-4';
    const linkClass = 'text-sm duration-500 text-zinc-700';




    return <NavBar navClass={navClass} listClass={listClass} linkClass={linkClass} />
}