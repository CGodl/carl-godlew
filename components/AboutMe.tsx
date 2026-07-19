import { Card, CardImage } from './ui/card';

const AboutMe = () => {
	const bentoImages = [];

	const BentoGrid = () => {
		return (
			<div className='grid grid-cols-5 grid-rows-5 gap-2'>
				<Card className='rounded-lg col-span-4 row-span-4'>
					<CardImage
						src='/spainForgot.jpg'
						alt='Picture of Carl Godlewski'
						style={{ height: '100%', width: '100%' }}
					/>
				</Card>
				<Card className='col-start-5 rounded-lg'>
					<CardImage
						src='/spainForgot.jpg'
						alt='Picture of Carl Godlewski'
						style={{ height: '100%', width: '100%' }}
					/>
				</Card>

				<Card className='col-start-5 row-start-2 rounded-lg'>
					<CardImage
						src='/spainCordoba.jpg'
						alt='Picture of Carl Godlewski'
						style={{ height: '100%', width: '100%' }}
					/>
				</Card>
				<Card className='col-start-5 row-start-3 rounded-lg'>
					<CardImage
						src='/spainCordoba.jpg'
						alt='Picture of Carl Godlewski'
						style={{ height: '100%', width: '100%' }}
					/>
				</Card>
				<Card className='col-start-5 row-start-4 rounded-lg'>
					<CardImage
						src='/spainCordoba.jpg'
						alt='Picture of Carl Godlewski'
						style={{ height: '100%', width: '100%' }}
					/>
				</Card>
				<Card className='row-start-5 rounded-lg'>
					<CardImage
						src='/spainCordoba.jpg'
						alt='Picture of Carl Godlewski'
						style={{ height: '100%', width: '100%' }}
					/>
				</Card>

				<Card className='row-start-5 rounded-lg'>
					<CardImage
						src='/spainForgot.jpg'
						alt='Picture of Carl Godlewski'
						style={{ height: '100%', width: '100%' }}
					/>
				</Card>
				<Card className='row-start-5 rounded-lg'>
					<CardImage
						src='/spainForgot.jpg'
						alt='Picture of Carl Godlewski'
						style={{ height: '100%', width: '100%' }}
					/>
				</Card>
				<Card className='row-start-5 rounded-lg'>
					<CardImage
						src='/spainForgot.jpg'
						alt='Picture of Carl Godlewski'
						style={{ height: '100%', width: '100%' }}
					/>
				</Card>
				<Card className='row-start-5 rounded-lg'>
					<CardImage
						src='/spainForgot.jpg'
						alt='Picture of Carl Godlewski'
						style={{ height: '100%', width: '100%' }}
					/>
				</Card>
			</div>
		);
	};

	return (
		<div>
			<h2 className='text-4xl font-extrabold'>About Me</h2>
			<div className='grid grid-cols-2'>
				<BentoGrid />
				<div>
					<h4>
						Full-Stack Software Engineer with extensive experience working in NextJs, React, TypeScript, Python, and SQL. My passion is using
						my experiences and know-how to develop solutions to challenges in
						the tech sphere.
					</h4>
					<br />
					<br />
					<p>
						Coming from my previous career as a Swaps Compliance Examiner my
						non-technical experience includes leadership, management,
						interviewing subject matter experts, and working in a team setting
						to complete projects. Some of my previous work includes projects
						that encompass my interests in budget management, travel, and
						organizing projects (Click here for a list of my most recent
						projects or click here to see my resume). I am currently interested
						in learning more about blockchain development and working through
						courses to realize this goal.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
