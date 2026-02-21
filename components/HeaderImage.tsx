export const HeaderImage = () => {
	return (
		<>
			<section className="flex flex-col items-center justify-center w-full h-screen bg-[url('/spaceheader.png')] bg-cover bg-no-repeat relative">
				<div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,29,38,0)_0%,rgba(11,29,38,0)_40%,rgba(11,29,38,0.8)_100%)] z-10' />

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

