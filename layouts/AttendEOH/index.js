import Button from '@/button';

export default function AttendEOH() {
	return (
		<div className="lg:col-span-3 mb-10 text-center font-montserrat">
			<p>
			Our keynote speaker this year was <span className='font-bold'>Todd Little</span> who is the chief architect at Oracle and an Alumni of The Grainger College of Engineering. With more than 40 years of software architecture and development experience, he has also received two patents for methods allowing design patterns in a UML modeling tool to control the generation of software artifacts.
			<br />
			<br />
			<p className='mb-2'>
				Click below to watch a recording of the Keynote Speaker 2023 livestream!
			</p>
			<Button
				type="big"
				href="https://www.twitch.tv/videos/1782070662"
				target="_blank"
			>
				Keynote Speaker 2023
			</Button>
			</p>
			
		</div>
	);
}
