import Link from 'next/link';

export const NavBar = ({ navClass, listClass, linkClass }: {navClass: string, listClass: string, linkClass: string}) => {
	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Bio', href: '/bio' },
		{ name: 'Resume', href: '/resume' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<nav className={navClass} aria-label="Primary">
			<ul className={listClass}>
				{navigation.map((item) => (
					<li key={item.href} className="contents">
						<Link
							href={item.href}
							className={`${linkClass} focus-visible:outline-none focus-visible:text-purple-300 focus-visible:ring-2 focus-visible:ring-purple-400/80 focus-visible:rounded-sm`}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
