export const HeaderImage = () => {
	return (
		<>
			<section className="flex flex-col items-center justify-center w-full h-screen bg-[url('/spaceheader.png')] bg-cover bg-no-repeat relative">
				<div
					className="absolute inset-0 z-10 pointer-events-none"
					style={{
						background:
							'linear-gradient(to bottom, transparent 0%, rgba(11, 29, 38, 0.25) 45%, rgba(11, 29, 38, 0.65) 72%, rgba(11, 29, 38, 0.92) 88%, #0B1D26 100%)',
					}}
				/>

				{/* <div className=" absolute top-20 left-10 z-20">
                <h1 className="font-knewave text-4xl text-white">Prepared for</h1>
                <h1 className="font-knewave text-4xl text-white">Space and</h1>
                <h1 className="font-knewave text-4xl text-white">Beyond!</h1>
            </div> */}
				<div className=' absolute top-20 left-10 z-20'>
					<h1 className='font-knewave md:text-7xl text-4xl text-white'>Creating Web</h1>
					<h1 className='font-knewave md:text-7xl text-4xl text-white'>Experiences</h1>
					<h1 className='font-knewave md:text-7xl text-4xl text-white'>For The next</h1>
                    <h1 className='font-knewave md:text-7xl text-4xl text-white'>Frontier!</h1>
				</div>
			</section>
		</>
	);
};

