import Link from 'next/link';

export const NavBar = ({ navClass, listClass, linkClass }: {navClass: string, listClass: string, linkClass: string}) => {
	const navigation = [
		{ name: 'Home', href: '/one' },
		{ name: 'Bio', href: '/bio' },
		{ name: 'Resume', href: '/three' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<nav className={navClass}>
			<ul className={listClass}>
				{navigation.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={linkClass}
					>
						{item.name}
					</Link>
				))}
			</ul>
		</nav>
	);
};
