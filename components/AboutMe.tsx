import { Card, CardImage } from './ui/card';

const AboutMe = () => {
	const BentoGrid = () => {
		return (
			<div>
				<div className='flex'>
					<Card className='rounded-lg h-[420px] w-[420px]'>
						<CardImage
							src='/spainForgot.jpg'
							alt='Picture of Carl Godlewski'
							style={{ height: '100%', width: '100%' }}
						/>
					</Card>

					<div className='grid grid-row-4 gap-2 ml-4'>
						<Card className='rounded-lg h-[100px] w-[100px]'>
							<CardImage
								src='/spainCordoba.jpg'
								alt='Picture of Carl Godlewski'
								style={{ height: '100%', width: '100%' }}
							/>
						</Card>
						<Card className='rounded-lg h-[100px] w-[100px]'>
							<CardImage
								src='/spainCordoba.jpg'
								alt='Picture of Carl Godlewski'
								style={{ height: '100%', width: '100%' }}
							/>
						</Card>
						<Card className='rounded-lg h-[100px] w-[100px]'>
							<CardImage
								src='/spainCordoba.jpg'
								alt='Picture of Carl Godlewski'
								style={{ height: '100%', width: '100%' }}
							/>
						</Card>
						<Card className='rounded-lg h-[100px] w-[100px]'>
							<CardImage
								src='/spainCordoba.jpg'
								alt='Picture of Carl Godlewski'
								style={{ height: '100%', width: '100%' }}
							/>
						</Card>
					</div>
				</div>
				<div className='flex mt-4'>
					<Card className='rounded-lg h-[100px] w-[100px]'>
						<CardImage
							src='/spainForgot.jpg'
							alt='Picture of Carl Godlewski'
							style={{ height: '100%', width: '100%' }}
						/>
					</Card>
					<Card className='rounded-lg h-[100px] w-[100px]'>
						<CardImage
							src='/spainForgot.jpg'
							alt='Picture of Carl Godlewski'
							style={{ height: '100%', width: '100%' }}
						/>
					</Card>
					<Card className='rounded-lg h-[100px] w-[100px]'>
						<CardImage
							src='/spainForgot.jpg'
							alt='Picture of Carl Godlewski'
							style={{ height: '100%', width: '100%' }}
						/>
					</Card>
					<Card className='rounded-lg h-[100px] w-[100px]'>
						<CardImage
							src='/spainForgot.jpg'
							alt='Picture of Carl Godlewski'
							style={{ height: '100%', width: '100%' }}
						/>
					</Card>
					<Card className='rounded-lg h-[100px] w-[100px]'>
						<CardImage
							src='/spainForgot.jpg'
							alt='Picture of Carl Godlewski'
							style={{ height: '100%', width: '100%' }}
						/>
					</Card>
				</div>
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
						Software Engineer with experience in Ruby on Rails, Javascript,
						React, Rails, Redux, SQL, and MERN development. My passion is using
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
