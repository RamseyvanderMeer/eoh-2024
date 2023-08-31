import { Fragment, useState } from 'react';
import Button from '@/button';
import Link from 'next/link';
import MobileMenu from '@/mobile-menu';

export default function Header({ headerItems }) {
	const [menuOpen, setMenuOpen] = useState(false);

	// hardcore js right here
	let mobileMenu = [];
	headerItems.forEach((item) => {
		if (typeof item.menuItems === 'undefined') {
			mobileMenu.push(item);
		} else {
			if (item.href && !item.noMobile) mobileMenu.push({ text: item.text, href: item.href, type: item.type });
			item.menuItems.forEach((item) => {
				mobileMenu.push(item);
			});
		}
	});

	return (
		<Fragment>
			{/* Mobile */}
			<div className="block fixed top-0 lg:hidden w-screen h-24 bg-white z-10 flex flex-col justify-center">
				<div className="w-screen flex justify-center flex-row w-full">
					<Link href="/">
						<img
							src="/logo-2024.png"
							className="absolute left-6 top-2 h-20 cursor-pointer object-contain"
						/>
					</Link>

					<img
						src="/assets/ui/menu.svg"
						className="absolute right-0 top-8 h-10 mr-10 cursor-pointer object-contain"
						onClick={() => setMenuOpen(!menuOpen)}
					/>
				</div>
			</div>
			<MobileMenu menuOpen={menuOpen} items={mobileMenu} kill={() => setMenuOpen(false)} />

			{/* Desktop */}
			<div className="hidden lg:block fixed top-0 w-screen h-20 shadow-md bg-white z-10 flex flex-col justify-center">
				<div className="w-3/4 m-auto py-0">
					<nav className="flex flex-row w-full">
						<Link href="/">
							<img
								src="/logo-2024-cropped.png"
								className="h-16 mt-3 mr-10 cursor-pointer"
								draggable={false}
							/>
						</Link>
						<div className="mt-6 flex flex-row w-full justify-end">
							{headerItems.map(({ type, text, href, target, menuItems }) => (
								<Button
									key={text}
									type={type}
									text={text}
									href={href}
									target={target}
									menuItems={menuItems}
									className={`${typeof type === 'undefined' ? 'mr-6' : 'mr-3'} uppercase text-center`}
									flyoutClassName={
										'uppercase text-center font-bold text-sm hover:text-theme-red transition delay-150 duration-200 ease-in-out'
									}
									style={{ fontWeight: 700, fontSize: 14 }}
									multiline
								>
									{text}
								</Button>
							))}
						</div>
					</nav>
				</div>
			</div>
		</Fragment>
	);
}
