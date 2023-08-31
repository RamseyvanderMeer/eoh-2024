import { Fragment } from 'react';
import Header from '@/header';
import Footer from '@/footer';

const LINKTREE_URL = 'https://linktr.ee/eoh2023';
const FB_URL = 'https://www.facebook.com/EngineeringOpenHouse/';
const INSTA_URL = 'https://www.instagram.com/eoh_illinois/';
const TWITTER_URL = 'https://twitter.com/IllinoisEOH';
const CONTACT_US = '/contact-us';

const SOCIALS = { LINKTREE_URL, FB_URL, INSTA_URL, TWITTER_URL };

const HEADER_ITEMS = [
    // {
    //     text: "Attend EOH",
    //     href: "/#attend-eoh",  
    //     menuItems: [
    //         {
    //             text: 'Field Trips',
    //             href: '/field-trips'
    //         }
    //     ]
    // },
    {
        text: "About Us",
        href: "/#about-us",
        menuItems: [
            {
                text: 'History',
                href: 'https://grainger.illinois.edu/news/features/EOH-100'
            },
            {
                text: 'Contact Us',
                href: CONTACT_US
            },
        ]
    },
    {
        text: "Events",
        href: "/#special-events",
        menuItems: [
            {
                text: 'Featured Events',
                href: '/#featured-events'
            },
            {
                text: 'Timeline',
                href: "/#special-events"
            }
        ]
    },
    // {
    //     text: "Exhibits",
    //     href: "/#exhibits"
    // },
    {
        text: "FAQs",
        href: "/#faqs",
        menuItems: [
            {
                text: "Event FAQs",
                href: "/#event-faqs"
            },
            {
                text: "Parking FAQs",
                href: "/#parking-faqs"
            },
            {
                text: "Food FAQs",
                href: "/#food-faqs"
            },
            {
                text: "Emergency FAQs",
                href: "/#emergency-faqs"
            },
            // {
            //     text: "Field Trips FAQs",
            //     href: "/#field-trips-faqs"
            // }
        ]
    },
    {
        text: "Sponsors",
        href: "/#sponsors"
    },
    {
        text: "Logo Competition",
        href: "https://forms.gle/b7YXtgVmpy3gWWHY9"
    },
    {
        text: "2024 Mailing List",
        href: "https://forms.gle/A7QqftMGGXKgbBmv5"
    },
    // {
    //     text: "Visitor's Guide",
    //     href: "https://drive.google.com/file/d/1NJ4gNMKRTRc73-L5W2Bsesau-OZ5bsKc/view?usp=share_link",
    //     target: "_blank",
    //     type: "big"
    // },
    {
        text: 'Linktree',
        href: LINKTREE_URL,
        type: 'mail'
    }
];

export default function BasicApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Header headerItems={HEADER_ITEMS} />
            <div className="w-screen main-content">
                <Component {...pageProps} />
            </div>
            <Footer socials={SOCIALS} />
        </Fragment>
    );
}
