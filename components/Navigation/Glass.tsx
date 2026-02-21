import { NavBar } from "./Navigation";

export const NavBarGlass = () => {
        const navClass = 'fixed bottom-5 md:bottom-auto md:top-10 md:right-10 px-6 py-3 w-fit bg-clip-padding backdrop-filter bg-[#0A2342]/80 border-2 border-[#6220EB]/20 rounded-xl z-10 shadow-[inset_0px_0px_12px_0px_#225599]/87.06';

        const listClass = 'flex items-center justify-center gap-6';
        const linkClass = 'text-md duration-500 text-white';
    
        return <NavBar navClass={navClass} listClass={listClass} linkClass={linkClass} />

}