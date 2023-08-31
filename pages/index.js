import Head from 'next/head';
import { Fragment } from 'react';

import Section from '@/section';
import { EmergencySection, FAQSection, FoodSection, ParkingSection } from '@layouts/FAQs';
import Title from '@layouts/Title';
import Exhibits from '@layouts/Exhibits';
import SpecialEvents from '@layouts/SpecialEvents';
import AttendEOH from '@layouts/AttendEOH';
import AboutUs from '@layouts/AboutUs';
import Sponsors from '@layouts/Sponsors';
import EOHEvents from '@layouts/EOHEvents';
import Awards from '@layouts/Awards';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>EOH 2024</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Title />
				{/* <Section color="white" title="Keynote Speaker" id="attend-eoh">
					<AttendEOH />
				</Section> */}
				<Section color="white" title="EOH 2023 Awards" id="awards">
					<Awards />
				</Section>
				<Section color="theme" title="EOH Events" id="featured-events" wide>
					<EOHEvents />
				</Section>
				<Section color="white" title="Director's Note" id="about-us">
					<AboutUs />
				</Section>
				<Section color="theme" title="Special Events Timeline" id="special-events" wide>
					<SpecialEvents />
				</Section>
				<Section color="white" title="Exhibits" id="exhibits" wide>
					<Exhibits />
				</Section>
				<Section color="theme" id="faqs" /> {/* For scrolling links purposes */}
				<Section color="theme" title="Event FAQs" id="event-faqs" wide>
					<FAQSection />
				</Section>
				<Section color="theme" title="Parking FAQs" id="parking-faqs" wide>
					<ParkingSection />
				</Section>
				<Section color="theme" title="Food FAQs" id="food-faqs" wide>
					<FoodSection />
				</Section>
				<Section color="theme" title="Emergency FAQs" id="emergency-faqs" wide>
					<EmergencySection />
				</Section>
				<Section color="white" title="Sponsors" id="sponsors">
					<Sponsors />
					<div className="h-10" />
				</Section>
			</main>
		</Fragment>
	);
}
