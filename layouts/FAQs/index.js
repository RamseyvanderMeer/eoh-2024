import Card from '@/card';
import { Fragment } from 'react';

const faqData = [
	{
		title: 'What kinds of exhibits can we expect?',
		content:
			'We have an exhibit for every major this year! Ranging from robotic hands, solar cars, and a coffee-serving robot, to an oobleck pool and DIY plastic, we will have something for everyone to experience engineering.'
	},
	{
		title: 'What kinds of special events will you have?',
		content:
			'We will have several different kinds of events, including a Tesla Coil concert, a Startup Showcase, and prospective student panels among many others!'
	},
	{
		title: 'Visitor’s Booth',
		content:
			'Have any questions? Need another visitor’s guide? Exhibit suggestions? Find our volunteers to answer your questions in the Campus Instructional Facility (CIF).'
	},
	{
		title: 'General Tours',
		content:
			'Want to learn more about the different resouces that UIUC has to offer and our various engineering buildings? Attend one of the ESTAR tours to learn more about our facilities and some history behind Grainger College of Engineering. <br/><ul><li>Friday: 10-11 am, 12-1 pm, 4-5 pm.</li><li>Saturday: 12-1 pm, 2-3 p, 4-5 pm.</li><li>Departs from South Side of Grainger Library next to Grainger Bob</li></ul>'
	}
];

const foodData = [
	{
		title: 'Food',
		content:
			"Watch out for our students’ favorite food trucks on Springfield Avenue! Specifically: <ul><li>Dave's Dogs</li><li>Chester BBQ</li><li>Burrito King</li><li>Kona Ice</li><li>La Paloma</li><li>Marrakesh Grill</li><li>Brien's Bistro (Saturday only)</li></ul>"
	}
];

const parkingData = [
	{
		title: 'Shuttle Services',
		content:
			"Provided Friday and Saturday from 8 am to 5:30 pm at the following stops:<ul><li>State Farm Center</li><li>Everitt Laboratory</li><li>Campus Instructional Facility (CIF)</li><li>Electrical and Computer Engineering Building (ECEB)</li><li>Siebel Center for Computer Science</li><li>Siebel Center for Design<br/>These stops will be indicated by signs and are also on the map in the Visitor's Guide"
	},
	{
		title: 'Parking',
		content:
			'On Friday, you can park for free at Lot B-22 or Lot E-14 ONLY. You can also pay for metered street parking. On Saturday, you may park in any University Lot for free as parking is not enforced on the weekend UNLESS it says parking is enforced 24/7.'
	},
	{
		title: 'Bus Drop Off',
		content:
			'School buses should drop off students and teachers at the designated EOH drop-off location at lot B-1. Bus drivers should then proceed to the Southwest Lot of the State Farm Center to park the bus and take the shuttle from there.'
	},
	{
		title: 'Street Closures',
		content:
			'Springfield Avenue will be closed from Wright St. to Mathews Ave. Mathews Ave. will also be closed from Green St. to Springfield Ave. These street closures will be enforced from 7 am to 5 pm. Only corporate sponsors, judging, emergency vehicles and food trucks may access these routes'
	}
];

const emergencyData = [
	{
		title: 'Missing Child',
		content:
			'Please report any case of a missing child to the Visitor’s Booth in CIF. Our volunteers throughout campus will be notified to keep a lookout for the lost child or parents of the lost child.'
	},
	{
		title: 'Medical Concerns',
		content:
			'In case of injury, immediately notify any nearby volunteer and go to the EMS tent over Boneyard Creek or at the North-East corner of Bardeen Quad'
	},
	{
		title: 'Local Hospital',
		link: {
			href:
				'https://www.google.com/maps/place/Carle+Foundation+Hospital/@40.1171314,-88.218066,17z/data=!4m14!1m7!3m6!1s0x880cd7719b423a01:0x1cbc0832642e6bd9!2sCarle+Foundation+Hospital!8m2!3d40.1171273!4d-88.2158773!16s%2Fm%2F0ddc3p2!3m5!1s0x880cd7719b423a01:0x1cbc0832642e6bd9!8m2!3d40.1171273!4d-88.2158773!16s%2Fm%2F0ddc3p2',
			text: 'Carle Foundation Hospital OSF Heart of Mary Medical Center'
		},
		content: ''
	},
	{
		title: 'Lost and Found',
		content:
			'Missing items can be brought to or found at the Visitor’s Booth in CIF between 9 am-5 pm on Friday and Saturday or at the Engineering Council Office (Engineering Hall 103C) any other time.'
	},
	{
		title: 'Other Emergencies',
		content: 'Approach any EOH volunteer in the Visitor’s Booth in the Campus Instructional Facility'
	}
];

export function FAQSection({}) {
	return (
		<Fragment>
			<div className="grid gap-x-5 gap-y-5 mb-5">
				<Card key="When is Engineering Open House 2023?" title="When is Engineering Open House 2023?">
					EOH 2023 will be on March 31 and April 1, 2023.
				</Card>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5">
				{faqData.map((faq) => (
					<Card key={faq.title} title={faq.title}>
						<div dangerouslySetInnerHTML={{ __html: faq.content }} />
					</Card>
				))}
			</div>
			<div className="grid gap-x-5 gap-y-5 mt-5">
				<Card key={'Bad Weather'} title={'Bad Weather'}>
					Check the website in case of bad weather to see where exhibits will be held. <br />
					<br /> Tornado Warning means that a tornado is imminent and an immediate danger to life. People
					outdoors must seek shelter inside the nearest building. Everyone must move to a pre-designated storm
					refuge area or a window-less interior room on the lowest floor level possible. <br />
					<br /> Severe Thunderstorm Warning means a severe thunderstorm is imminent. Severe Thunderstorms are
					capable of producing large hail, dangerous winds and tornadoes without warning. If outdoors, seek
					shelter inside a building immediately.
				</Card>
			</div>
		</Fragment>
	);
}

export function ParkingSection({}) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5">
			{parkingData.map((faq) => (
				<Card key={faq.title} title={faq.title}>
					<div dangerouslySetInnerHTML={{ __html: faq.content }} />
				</Card>
			))}
		</div>
	);
}

export function FoodSection({}) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-1 gap-x-5 gap-y-5">
			{foodData.map((faq) => (
				<Card key={faq.title} title={faq.title}>
					<div dangerouslySetInnerHTML={{ __html: faq.content }} />
				</Card>
			))}
		</div>
	);
}

export function EmergencySection({}) {
	return (
		<Fragment>
			<div className="grid grid-cols-1 lg:grid-cols-1 gap-x-5 gap-y-5">
				<Card key={'Inclement Weather'} title={'Inclement Weather'}>
				In the case of inclement or severe weather, seek shelter indoors. For a tornado watch or warning, seek shelter indoors away from windows and head to the lowest floor of the building.
				</Card>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-5 mt-5">
				{emergencyData.map((faq) => (
					<Card key={faq.title} title={faq.title}>
						<div dangerouslySetInnerHTML={{ __html: faq.content }} />
						{faq.link && (
							<a
								className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
								href="https://www.google.com/maps/place/Carle+Foundation+Hospital/@40.1171314,-88.218066,17z/data=!4m14!1m7!3m6!1s0x880cd7719b423a01:0x1cbc0832642e6bd9!2sCarle+Foundation+Hospital!8m2!3d40.1171273!4d-88.2158773!16s%2Fm%2F0ddc3p2!3m5!1s0x880cd7719b423a01:0x1cbc0832642e6bd9!8m2!3d40.1171273!4d-88.2158773!16s%2Fm%2F0ddc3p2"
							>
								{faq.link.text}
							</a>
						)}
					</Card>
				))}
			</div>
		</Fragment>
	);
}
