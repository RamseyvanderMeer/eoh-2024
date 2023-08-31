import { Fragment } from 'react';
import Content from '@/content';
import Head from 'next/head';
import Bubble from '@/bubble';
import Button from '@/button';
import SponsorCard from '@/sponsor-card';
import MeetTheCommittee from 'pages/about-us/meet-the-committee';
import Section from '@/section';

export default function ContactUsPage() {
	return (
		<Fragment>
			<Content title="Contact Us">
				<div className="lg:col-span-3 mb-10">
					<p className="text-center font-montserrat">
						If you have any questions or concerns regarding Engineering Open House 2023,
						<br />
						please contact the most appropriate director for your matter.
						<br />
						<br />
						If you are not sure which director to contact, please email{' '}
						<span className="font-montserrat underline font-bold">
							<a href="mailto:eoh@ec.illinois.edu">eoh@ec.illinois.edu</a>
						</span>.
					</p>
				</div>
				<div>
					<div className="mt-2 mb-10 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 flex justify-center">
						<div>
							<p className="font-montserrat font-bold w-5/6 mx-auto mt-2 mb-2">Director of Advancement</p>
							<p className="font-montserrat underline w-5/6 mx-auto mt-2 mb-2">
								<a href="mailto:eoh-advancement@ec.illinois.edu">eoh-advancement@ec.illinois.edu</a>
							</p>
						</div>

						<div>
							<p className="font-montserrat font-bold w-5/6 mx-auto mt-2 mb-2">Director of Corporate</p>
							<p className="font-montserrat underline w-5/6 mx-auto mt-2 mb-2">
								<a href="mailto:eoh-corporate@ec.illinois.edu">eoh-corporate@ec.illinois.edu</a>
							</p>
						</div>

						<div>
							<p className="font-montserrat font-bold w-5/6 mx-auto mt-2 mb-2">Director of Exhibits</p>
							<p className="font-montserrat underline w-5/6 mx-auto mt-2 mb-2">
								<a href="mailto:eoh-exhibits@ec.illinois.edu">eoh-exhibits@ec.illinois.edu</a>
							</p>
						</div>

						<div>
							<p className="font-montserrat font-bold w-5/6 mx-auto mt-2 mb-2">Director of External</p>
							<p className="font-montserrat underline w-5/6 mx-auto mt-2 mb-2">
								<a href="mailto:eoh-external@ec.illinois.edu">eoh-external@ec.illinois.edu</a>
							</p>
						</div>

						<div>
							<p className="font-montserrat font-bold w-5/6 mx-auto mt-2 mb-2">Director of Facilities</p>
							<p className="font-montserrat underline w-5/6 mx-auto mt-2 mb-2">
								<a href="mailto: eoh-facilities@ec.illinois.edu"> eoh-facilities@ec.illinois.edu</a>
							</p>
						</div>

						<div>
							<p className="font-montserrat font-bold w-5/6 mx-auto mt-2 mb-2">Director of Internal</p>
							<p className="font-montserrat underline w-5/6 mx-auto mt-2 mb-2">
								<a href="mailto:eoh-internal@ec.illinois.edu">eoh-internal@ec.illinois.edu</a>
							</p>
						</div>

						<div>
							<p className="font-montserrat font-bold w-5/6 mx-auto mt-2 mb-2">Director of Judging</p>
							<p className="font-montserrat underline w-5/6 mx-auto mt-2 mb-2">
								<a href="mailto:eoh-judging@ec.illinois.edu"> eoh-judging@ec.illinois.edu</a>
							</p>
						</div>

						<div>
							<p className="font-montserrat font-bold w-5/6 mx-auto mt-2 mb-2">Director of Safety</p>
							<p className="font-montserrat underline w-5/6 mx-auto mt-2 mb-2">
								<a href="mailto:eoh-safety@ec.illinois.edu">eoh-safety@ec.illinois.edu</a>
							</p>
						</div>

						<div>
							<p className="font-montserrat font-bold w-5/6 mx-auto mt-2 mb-2">Director of Technology</p>
							<p className="font-montserrat underline w-5/6 mx-auto mt-2 mb-2">
								<a href="mailto:eoh-tech@ec.illinois.edu">eoh-tech@ec.illinois.edu</a>
							</p>
						</div>

						<div>
							<p className="font-montserrat font-bold w-5/6 mx-auto mt-2 mb-2">Director of Visitors</p>
							<p className="font-montserrat underline w-5/6 mx-auto mt-2 mb-2">
								<a href="mailto:eoh-visitors@ec.illinois.edu">eoh-visitors@ec.illinois.edu</a>
							</p>
						</div>

						<div>
							<p className="font-montserrat font-bold w-5/6 mx-auto mt-2 mb-2">Treasurer</p>
							<p className="font-montserrat underline w-5/6 mx-auto mt-2 mb-2">
								<a href="mailto:eoh-treasurer@ec.illinois.edu">eoh-treasurer@ec.illinois.edu</a>
							</p>
						</div>
					</div>
				</div>
			</Content>
			<Section title="Committee Members" wide>
				<MeetTheCommittee />
			</Section>
		</Fragment>
	);
}
