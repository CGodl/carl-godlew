import { glassClassName } from '@/lib/glass';
import { NavBar } from "./Navigation";

export const NavBarGlass = () => {
        const navClass = `fixed bottom-5 md:bottom-auto md:top-10 md:right-10 px-6 py-3 w-fit z-10 ${glassClassName}`;
        const listClass = 'flex items-center justify-center gap-6';
        const linkClass = 'text-md duration-500 text-white';
        
        return <NavBar navClass={navClass} listClass={listClass} linkClass={linkClass} />
}