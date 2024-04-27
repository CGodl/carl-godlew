import Link from 'next/link';

export const NavBar = () => {
	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Bio', href: '/' },
		{ name: 'Resume', href: '/' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<nav className='bg-slate-300 px-4 py-2 rounded-3xl backdrop-blur-sm w-fit'>
			<ul className='flex items-center justify-center gap-4'>
				{navigation.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className='text-sm duration-500 text-zinc-500'
					>
						{item.name}
					</Link>
				))}
			</ul>
		</nav>
	);
};
