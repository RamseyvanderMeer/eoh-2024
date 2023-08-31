import { Component } from 'react';
import Button from '@/button';

export default class Modal extends Component {
	handleOutsideClick = (e) => {
		if (!this.node) {
			return;
		} else if (!this.node.contains(e.target)) {
			this.props.goAway();
		}
	};

	render() {
		const {
			goAway,
			times,
			urls,
			color,
			event,
			location,
			onClickArg,
			description,
			descriptionLong,
			tag1,
			tag2,
			tag3,
			rsoName
		} = this.props;
		let cleaned_urls = [];
		if (urls) {
			cleaned_urls = urls.split(', ').map((url) => {
				if (!url.includes('https://') && !url.includes('http://') && !url.includes('@')) {
					const l = 'https://' + url;
					return { href: l, text: l };
				}
				if (url.includes('@')) {
					const l = 'mailto:' + url;
					return { href: l, text: url };
				}
				return { href: url, text: url };
			});
		}

		const locationBit = location ? (
			<a
				className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
				href={'https://www.google.com/maps/search/?api=1&query=uiuc+' + location.split(' ').join('+')}
				target="_blank"
			>
				{location}
			</a>
		) : null;

		return (
			<div
				className="fixed z-10 inset-0 overflow-y-auto"
				aria-labelledby="modal-title"
				role="dialog"
				aria-modal="true"
				onClick={this.handleOutsideClick}
			>
				<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
					<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
						&#8203;
					</span>
					<div
						ref={(node) => {
							this.node = node;
						}}
						className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
					>
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
									<img src="/assets/images/logo_main_365x293.png" />
								</div>
								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
										{event}
									</h3>
									{location && !times ? (
										<p className="text-sm mt-2 mb-4">
											{rsoName && (
												<span className="font-medium">
													RSO, Group, Lab, or Dept:{' '}
													<span className="text-theme-red">{rsoName}</span>
													<br />
												</span>
											)}{' '}
											{tag1 && (
												<span>
													Tags: {tag1}, {tag2}, {tag3} <br />
												</span>
											)}
											At {locationBit}
										</p>
									) : null}
									{times && location ? (
										<p className="text-sm mt-2 mb-4">
											{times} @ {locationBit}
										</p>
									) : null}
									{cleaned_urls.length ? (
										<div className="mb-2">
											<p className="text-sm">
												Learn about the organization at:
												<br />
												{cleaned_urls.map((url, i) => (
													<span>
														<a
															className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
															target="_blank"
															key={i}
															href={url.href}
														>
															{url.text}
														</a>
														,&nbsp;
													</span>
												))}
											</p>
										</div>
									) : null}
									<div className="mt-2">
										<p
											className="text-sm text-gray-700"
											dangerouslySetInnerHTML={{ __html: description }}
											style={{ wordBreak: 'break-word' }}
										/>
									</div>
									{/*descriptionLong ? (
									<div className="mt-2 h-48 overflow-y-scroll">
										<p className="text-sm text-gray-400">{descriptionLong}</p>
									</div>
								) : null*/}
								</div>
							</div>
						</div>
						<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							<button
								type="button"
								className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
								onClick={() => goAway()}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
