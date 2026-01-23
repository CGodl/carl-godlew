import Link from 'next/link';

export const NavBar = () => {
	const navigation = [
		{ name: 'Home', href: '/one' },
		{ name: 'Bio', href: '/two' },
		{ name: 'Resume', href: '/three' },
		{ name: 'Contact', href: '/contact' },
		
	];

	return (
		<nav className='fixed bottom-5 md:bottom-auto md:top-10 md:right-10 bg-slate-300 px-4 py-2 rounded-3xl backdrop-blur-sm w-fit bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'>
			<ul className='flex items-center justify-center gap-4'>
				{navigation.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className='text-sm duration-500 text-zinc-700'
					>
						{item.name}
					</Link>
				))}
			</ul>
		</nav>
	);
};
