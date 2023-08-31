import { useState, Component } from 'react';
import { getHost } from '@utilities/host.js';
import ScheduleItem from '@/schedule-item';

const TIMES = [
	'9:00 am',
	'9:30 am',
	'10:00 am',
	'10:30 am',
	'11:00 am',
	'11:30 am',
	'12:00 pm',
	'12:30 pm',
	'1:00 pm',
	'1:30 pm',
	'2:00 pm',
	'2:30 pm',
	'3:00 pm',
	'3:30 pm',
	'4:00 pm',
	'4:30 pm',
	'5:00 pm',
	'5:30 pm',
	'6:00 pm',
	'6:30 pm',
	'7:00 pm',
	'7:30 pm',
	'8:00 pm',
	'8:30 pm',
	'9:00 pm'
];

export default class SpecialEvents extends Component {
	constructor(props) {
		super(props);

		this.state = {
			specialEvents: [],
			day: 0
		};
	}

	componentDidMount() {
		if (!this.state.specialEvents.length) {
			fetch(getHost() + '/assets/data/scheduled_events.json', {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
			}).catch(console.log)
				.then((response) => response.json())
				.then((result) => this.setState({ specialEvents: result.specialEvents }));
		}
	}

	render() {
		const { day, specialEvents } = this.state;

		console.log(specialEvents);

		const fridayEvents = specialEvents.filter(({ timesFridayArr }) => timesFridayArr);
		fridayEvents.sort((o1, o2) => TIMES.indexOf(o1.timesFridayArr[0][0]) - TIMES.indexOf(o2.timesFridayArr[0][0]));

		const saturdayEvents = specialEvents.filter(({ timesSaturdayArr }) => timesSaturdayArr);
		saturdayEvents.sort(
			(o1, o2) => TIMES.indexOf(o1.timesSaturdayArr[0][0]) - TIMES.indexOf(o2.timesSaturdayArr[0][0])
		);

		const events = day ? saturdayEvents : fridayEvents;

		return (
			<div className="relative">
				<div className="mx-auto w-44 block">
					<span className="text-white text-sm text-center font-medium block font-light">See events on: </span>
					<div className="inline-flex text-white text-sm my-2 font-medium items-center">
						<span>Friday</span>
						<label className="relative inline-flex items-center mx-5 cursor-pointer">
							<input
								type="checkbox"
								value={day}
								className="sr-only peer"
								onClick={() => {
									this.setState({ day: !day });
								}}
							/>
							<div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600" />
							<span className="ml-3">Saturday</span>
						</label>
					</div>
				</div>
				<br />
				<div className="relative">
					<div className="pl-0 lg:pl-5 font-light font-roboto text-xs text-white text-center lg:text-left">
						Click on an event to see more details!
					</div>
					{TIMES.map((time, i) => (
						<div
							className="hidden lg:block bg-gray-100 absolute"
							style={{
								opacity: '0.4',
								width: '2px',
								height: '100%',
								top: '-2px',
								right: `${i * 24 + 15}px`
							}}
						/>
					))}
					<div
						className="hidden lg:block bg-white ml-auto relative"
						style={{ width: '37.5rem', height: '3px', marginTop: '30px' }}
					>
						{TIMES.map((time, i) => (
							<div>
								{/* <div className="bg-gray-100 absolute" style={{ opacity: "0.4", width: "2px", height: "200px", top: "-2px", left: `${i * 24 + 15}px`}}></div> */}
								<p
									className="font-light font-roboto text-xs absolute text-white text-center"
									style={{ top: `${i % 2 ? '-40px' : '16px'}`, left: `${i * 24 - 5}px` }}
								>
									{time.split(' ')[0]}
									<br />
									{time.split(' ')[1]}
								</p>
							</div>
						))}
					</div>
					<div className="mt-10">
						{events.map(
							({
								specialEventName,
								timingsFriday,
								timingsSaturday,
								location,
								timesFridayArr,
								timesSaturdayArr,
								visGuideDescription
							}) => (
								<div className="flex">
									<div
										className="hidden lg:block pr-5 pb-2 flex-grow inline-block transition transition-delay-100 hover:bg-red-800"
										style={{ maxWidth: 'calc(100% - 39.5rem)' }}
									>
										<ScheduleItem
											event={specialEventName}
											location={location}
											shortTimes={day ? timingsSaturday : timingsFriday}
											TIMES={'Friday at ' + timingsFriday + ' - Saturday at ' + timingsSaturday}
											description={visGuideDescription}
										/>
									</div>
									<div className="block lg:hidden pr-5 pb-2 flex-grow inline-block transition transition-delay-100 hover:bg-red-800">
										<ScheduleItem
											event={specialEventName}
											location={location}
											shortTimes={day ? timingsSaturday : timingsFriday}
											TIMES={'Friday at ' + timingsFriday + ' - Saturday at ' + timingsSaturday}
											description={visGuideDescription}
										/>
									</div>
									<div
										className="hidden lg:block relative inline-flex ml-auto"
										style={{ width: '37.5rem' }}
									>
										{(day ? timesSaturdayArr : timesFridayArr).map(([ v1, v2 ]) => (
											<div
												className="bg-theme-yellow ml-auto absolute"
												style={{
													width: `${(TIMES.indexOf(v2) - TIMES.indexOf(v1)) * 24}px`,
													height: '6px',
													top: 10,
													left: `${TIMES.indexOf(v1) * 24 + 7}px`
												}}
											/>
										))}
									</div>
								</div>
							)
						)}
					</div>
					<div
						className="hidden lg:block bg-white ml-auto relative"
						style={{ width: '37.5rem', height: '3px', marginTop: '50px', marginBottom: '50px' }}
					>
						{TIMES.map((time, i) => (
							<div>
								{/* <div className="bg-gray-100 absolute" style={{ opacity: "0.4", width: "2px", height: "200px", top: "-2px", left: `${i * 24 + 15}px`}}></div> */}
								<p
									className="font-light font-roboto text-xs absolute text-white text-center"
									style={{ top: `${i % 2 ? '-40px' : '16px'}`, left: `${i * 24 - 5}px` }}
								>
									{time.split(' ')[0]}
									<br />
									{time.split(' ')[1]}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
