import Button from '@/button';

export default function HomeVideo() {
	return (
		<div className="bg-theme-red relative">
			<div id="home-top-video-o" className="block lg:hidden" />
			<div id="home-top-video-o" className="hidden lg:block">
				{/*<video
					className="absolute not-sr-only"
					id="main-video"
					style={{ zIndex: -1, height: '150vh', objectFit: 'cover' }}
					src="assets/trimmed_slowed_bg.mp4"
					type="video/mp4"
					frameBorder="0"
					alt=""
					width={1970}
					controls={false}
					autoPlay
					loop
					muted
				/>*/}
			</div>
			<div className="w-3/4 h-full m-auto lg:ml-20 pt-20 relative" style={{ zIndex: 3 }}>
				<h1
					className="font-montserrat uppercase lg:text-6xl text-3xl text-center text-white font-bold mt-10"
					style={{ fontFamily: 'Mokoto' }}
				>
					Engineering Open House
				</h1>
				<h2
					className="lg:text-2xl texl-xl text-center text-white font-light font-roboto mt-2"
					style={{ opacity: 1 }}
				>
					<span className="lg:text-lg text-sm">at the</span> UNIVERSITY OF ILLINOIS URBANA-CHAMPAIGN{' '}
					<span className="lg:text-lg text-sm">presents</span>
				</h2>
				<div className="h-2" />
				<h1
					className="font-montserrat uppercase lg:text-6xl text-5xl lg:mb-10 text-center text-white font-bold mt-10"
					style={{ fontFamily: 'Mokoto' }}
				>
					Aspire to Inspire
				</h1>
				<div className="h-10 lg:h-2" />
				<h1
					className="font-montserrat uppercase lg:text-4xl text-xl text-center text-white font-bold"
					style={{ fontFamily: 'Mokoto' }}
				>
					Coming Soon 2024
				</h1>
				{/* <h3
					className="font-montserrat uppercase lg:text-4xl text-xl text-center text-white font-bold"
					style={{ fontFamily: 'Mokoto' }}
				>
					9 am - 4 pm each day
				</h3> */}
				<div className="h-10" />
				{/*<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-10">
                    <div id="home-info-panel" className="max-w-lg">
                        <div className="flex flex-row gap-4 items-center">
                            <img src="/assets/ui/clock.svg" alt="" className="select-none" />
                            <div className="font-lovelo text-2xl text-white font-medium">
                                <span className="font-bold">Friday, March 31</span> and <span className="font-bold">Saturday, April 1</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <img src="/assets/ui/location.svg" className="select-none" alt="" />
                            <div className="font-lovelo text-2xl text-white font-medium">
                            <span className="font-bold">Bardeen</span> and <span className="font-bold">Engineering Quads</span> at <span className="font-bold">UIUC</span> in <span className="font-bold">Champaign, IL</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <img src="/assets/ui/users.svg" className="select-none" alt="" />
                            <div className="font-lovelo text-2xl text-white font-medium">
                                Open to <span className="font-bold">Adults/College Students</span>, <span className="font-bold">High Schoolers</span>, and <span className="font-bold">Grade Schoolers</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col items-center justify-center">
                        <div>
                            <div className="font-lovelo text-md font-light text-white max-w-sm m-auto text-center">
                                Join our Mailing List in order to stay updated on EOH events as well as if you're interested in hosting an exhibit!
                            </div>
                            <div className="h-4" />
                            <div className="m-auto text-center">
                                <Button type="big" className="px-2 rounded-none drop-shadow-md" href="https://docs.google.com/forms/d/e/1FAIpQLSfqb9PElSkNEclAuJcRrnbsCbjXUVyB20nAJDwxZSFYL0zFdw/viewform">
                                    Join Our Mailing List!
                                </Button>
                            </div>
                        </div>
                    </div>
    </div>*/}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white text-xl lg:text-2xl uppercase font-bold items-center pb-10">
					<div className="max-w-48 m-auto">
						<span className="text-white lg:text-3xl text-2xl" style={{ fontFamily: 'Mokoto' }}>
							2
						</span>{' '}
						<br /> Days
					</div>
					<div className="max-w-48 m-auto">
						<span className="text-white lg:text-3xl text-2xl" style={{ fontFamily: 'Mokoto' }}>
							35,000+
						</span>{' '}
						<br /> Attendees
					</div>
					<div className="max-w-48 m-auto">
						<span className="text-white lg:text-3xl text-2xl" style={{ fontFamily: 'Mokoto' }}>
							250+
						</span>{' '}
						<br /> Students Involved
					</div>
					<div className="max-w-48 m-auto">
						<span className="text-white lg:text-3xl text-2xl" style={{ fontFamily: 'Mokoto' }}>
							200+
						</span>{' '}
						<br /> Student Run Exhibits
					</div>
				</div>
			</div>
			{/* <img
				className="hidden lg:block absolute bottom-0 right-0"
				src="/assets/images/graphic_1.png"
				not-sr-only
				style={{ width: 300, zIndex: 2 }}
			/> */}
			{/* <img
				className="hidden lg:block absolute right-0"
				src="/assets/images/graphic_2.png"
				not-sr-only
				style={{ width: 1000, zIndex: 2, bottom: 150, transform: 'rotate(15deg)' }}
			/>
			<img
				className="hidden xl:block absolute"
				src="/assets/images/graphic_3.png"
				not-sr-only
				style={{ width: 700, zIndex: 1, bottom: 180, left: -200, transform: 'rotate(-15deg)' }}
			/> */}
		</div>
	);
}
