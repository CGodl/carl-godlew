import { NavBar } from '@/components/Navigation';
import Particles from '@/components/particles';

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<NavBar />
			<Particles
				className='absolute inset-0 -z-10 animate-fade-in'
				quantity={100}
			/>
			<main>
				<div>{children}</div>
			</main>
		</>
	);
};

export default PortfolioLayout;
