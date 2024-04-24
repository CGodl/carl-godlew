import Link from 'next/link';

export const NavBar = () => {
	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Bio', href: '/' },
		{ name: 'Resume', href: '/' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<nav className='my-16 animate-fade-in '>
			<ul className='flex items-center justify-center gap-4'>
				{navigation.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className='text-sm duration-500 text-zinc-500 hover:text-zinc-300'
					>
						{item.name}
					</Link>
				))}
			</ul>
		</nav>
	);
};
