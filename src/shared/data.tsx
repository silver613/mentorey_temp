import {
	IconArrowDown,
	IconArrowsRightLeft,
	IconBrandFacebook,
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTailwind,
	IconBrandTwitter,
	IconBulb,
	IconCheck,
	IconChevronDown,
	IconClock,
	IconComponents,
	IconDownload,
	IconHeadset,
	IconHelp,
	IconListCheck,
	IconMail,
	IconMapPin,
	IconMessages,
	IconPhoneCall,
	IconRocket,
	IconRss,
} from '@tabler/icons-react';
import {
	AnnouncementProps,
	CallToActionProps,
	ComparisonProps,
	ContactProps,
	ContentProps,
	FAQsProps,
	FeaturesProps,
	FooterProps,
	HeaderProps,
	HeroProps,
	PricingProps,
	SocialProofProps,
	StatsProps,
	StepsProps,
	TeamProps,
	TestimonialProps,
	CountryType,
	DropdownMenuProps,
} from './types';

import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import heroImg from '~/assets/images/banner.jpg';
import hero2Img from '~/assets/images/banner.jpg';
import gasImg from '~/assets/images/gas.jpg';
import nextJsLogo from '~/assets/images/logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import { nanoid } from '@reduxjs/toolkit';

// Announcement data
export const announcementData: AnnouncementProps = {
	title: 'NEW',
	callToAction: {
		text: 'This template is made with Next.js 13 using the new App Router »',
		href: 'https://nextjs.org/docs/app',
	},
	callToAction2: {
		text: 'Follow @onWidget on Twitter',
		href: 'https://twitter.com/intent/user?screen_name=onwidget',
	},
};

// Header data
export const headerData: HeaderProps = {
	links: [
		{
			label: 'Find a Coach',
			href: '/findcoach',
		},
		{
			label: 'Group Coach',
			href: '/seminar',
		},
		{
			label: 'Become a Teacher',
			href: '/beteacher',
		},
	],
	actions: [
		{
			text: 'Sign In',
			href: '/signin',
			targetBlank: false,
			btnType: 'primary',
		},
		{
			text: 'Register',
			href: '/signup',
			targetBlank: false,
			btnType: 'primary',
		},
	],
	isSticky: true,
	showToggleTheme: true,
	showRssFeed: false,
	position: 'right',
};

// Hero data
export const heroData: HeroProps = {
	title: <>Join the Large platform for online Coaches</>,
	subtitle: (
		<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione deleniti debitis eos esse impedit
			consectetur veritatis labore, nisi fuga nihil assumenda odit aliquam iure quidem repellendus veniam! Assumenda,
			dolore.
		</>
	),
	callToAction: {
		text: 'Get Started',
		href: 'https://github.com/onwidget/tailnext',
		targetBlank: true,
		btnType: 'primary',
	},
	callToAction2: {
		text: 'Learn more',
		href: '/',
	},
	image: {
		src: heroImg,
		alt: 'Hero TailNext',
	},
};

// Hero2 data
export const hero2Data: HeroProps = {
	title: 'Great companies are made by great people',
	subtitle:
		'Vivamus venenatis, lectus a pellentesque placerat, felis tellus ultrices eros, et aliquam sapien nibh sed sem. Fusce ut ante eget purus viverra malesuada. Morbi eget mi maximus, ultricies urna eget, tristique lorem. Fusce cursus venenatis quam, a blandit lectus vulputate id. Praesent id interdum orci, vitae condimentum dui. Fusce pulvinar ante eget mattis semper. Suspendisse in diam massa.',
	callToAction: {
		text: 'View jobs',
		href: 'https://www.linkedin.com/',
		targetBlank: true,
		btnType: 'primary',
	},
	callToAction2: {
		text: 'Contact us',
		href: '/contact',
	},
	image: {
		src: hero2Img,
		alt: 'Hero TailNext',
	},
};

// SocialProof data
export const socialProofData: SocialProofProps = {
	images: [
		{
			link: 'https://nextjs.org/',
			src: nextJsLogo,
			alt: 'NextJs Logo',
		},
		{
			link: 'https://react.dev/',
			src: reactLogo,
			alt: 'React Logo',
		},
		{
			link: 'https://tailwindcss.com/',
			src: tailwindCssLogo,
			alt: 'Tailwind CSS Logo',
		},
		{
			link: 'https://www.typescriptlang.org/',
			src: typescriptLogo,
			alt: 'Typescript Logo',
		},
	],
};

// FAQS data
export const faqsData: FAQsProps = {
	header: {
		title: 'Frequently Asked Questions',
		subtitle:
			'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
		highlight: 'FAQS',
	},
	items: [
		{
			title: 'Who we are and what we do?',
			description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
		},
		{
			title: 'What values and principles guide our work?',
			description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
		},
		{
			title: 'What is our experience?',
			description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
		},
		{
			title: 'What is our team like?',
			description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
		},
		{
			title: 'How do we engage with the community?',
			description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
		},
		{
			title: 'What support channels do we offer?',
			description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
		},
	],
};

// FAQS data 2
export const faqsData2: FAQsProps = {
	header: {
		title: 'Frequently Asked Questions',
		subtitle:
			'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
		highlight: 'FAQS',
	},
	items: [
		{
			title: 'What do I need to start?',
			description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
		},
		{
			title: "What's something that you completely don't understand?",
			description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
		},
		{
			title: "What's an example of when you changed your mind?",
			description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
		},
		{
			title: 'What is something that you would really like to try again?',
			description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
		},
		{
			title: 'If you could only ask one question to each person you meet, what would that question be?',
			description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
		},
	],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
	header: {
		title: 'Pricing FAQs',
		subtitle: 'Do you have other questions?',
		// highlight: 'FAQS',
		position: 'left',
	},
	items: [
		{
			title: 'Which plan is best for me?',
			description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
		},
		{
			title: 'What are my payment options?',
			description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
		},
		{
			title: 'How do I change my plan to a different one?',
			description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
		},
		{
			title: 'What happen at the end of my free trial?',
			description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
		},
		{
			title: 'Can I import data from other tools?',
			description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
		},
		{
			title: 'Can I cancel my plan at any time?',
			description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
		},
	],
	callToAction: {
		text: 'Contact us',
		href: '/contact',
		btnText: 'uppercase',
		btnType: 'primary',
	},
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
	header: {
		title: 'Frequently Asked Questions',
		subtitle:
			'Praesent rutrum purus in sem blandit, in consectetur mi pharetra. Ut sagittis sapien sit amet congue cursus. Nulla eu elementum ex, tincidunt semper nisi.',
		highlight: 'FAQS',
		position: 'center',
	},
	tabs: [
		{
			link: {
				label: 'General',
				href: '/tab1',
			},
			items: [
				{
					title: 'What do I need to start?',
					description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
				},
				{
					title: 'How to install the NextJS + Tailwind CSS template?',
					description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
				},
				{
					title: "What's something that you completely don't understand?",
					description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
				},
				{
					title: "What's an example of when you changed your mind?",
					description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
				},
				{
					title: 'What is something that you would really like to try again?',
					description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
				},
				{
					title: 'If you could only ask one question to each person you meet, what would that question be?',
					description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
				},
			],
		},
		{
			link: {
				label: 'Plans, prices and payments',
				href: '/tab2',
			},
			items: [
				{
					title: 'Which plan is best for me?',
					description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
				},
				{
					title: 'What are my payment options?',
					description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
				},
				{
					title: 'How do I change my plan to a different one?',
					description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
				},
				{
					title: 'What happen at the end of my free trial?',
					description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
				},
				{
					title: 'Can I import data from other tools?',
					description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
				},
				{
					title: 'Can I cancel my plan at any time?',
					description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
				},
			],
		},
		{
			link: {
				label: 'Others',
				href: '/tab3',
			},
			items: [
				{
					title: 'How do I download the template?',
					description: `In ullamcorper pellentesque ante, nec commodo ex euismod viverra. Phasellus facilisis, justo a bibendum pellentesque, nibh est egestas lectus, volutpat ullamcorper arcu ante ac dolor.`,
				},
				{
					title: 'How do I customize the template?',
					description: `Pellentesque semper euismod malesuada. Curabitur quis lectus tortor. Aliquam efficitur pretium tellus, ut sagittis turpis dignissim eget. Etiam scelerisque nec risus eget iaculis. Nunc maximus metus id felis dapibus, sed ullamcorper sapien faucibus.`,
				},
				{
					title: 'Does the template come with any tutorials or instructions?',
					description: `Sed sagittis arcu suscipit auctor suscipit. Nam dapibus risus vitae tristique fermentum. In egestas turpis elit, id gravida diam dictum eu. Ut dictum libero ut rhoncus egestas. Ut sit amet tortor blandit, faucibus tellus vitae, consequat purus. Nullam id odio enim.`,
				},
				{
					title: 'Are there any additional fees or charges for using the template?',
					description: `Fusce efficitur, augue et vulputate pharetra, augue turpis viverra turpis, id tempor purus eros sed erat. Curabitur blandit eget sem vitae malesuada.`,
				},
			],
		},
	],
};

// CallToAction data
export const callToActionData: CallToActionProps = {
	title: 'Online Coaching',
	subtitle:
		'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
	callToAction: {
		text: 'Get template',
		href: 'https://github.com/onwidget/tailnext',
		icon: IconDownload,
	},
	items: [
		{
			title: 'Online Coach',
			description: 'Aliquam sodales est lectus, quis.',
			href: 'https://github.com/onwidget/tailnext',
		},
		{
			title: 'Learn more',
			description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
			href: '/',
		},
		{
			title: 'Subscribe',
			description: 'Morbi orci nunc, euismod ac dui id, convallis.',
			form: {
				icon: IconMail,
				input: {
					type: 'email',
					name: 'email',
					autocomplete: 'email',
					placeholder: 'Enter your email address',
				},
				btn: {
					title: 'Subscribe',
					type: 'submit',
				},
			},
		},
	],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
	title: 'Still have questions?',
	subtitle:
		'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
	callToAction: {
		text: 'Contact us',
		href: '/contact',
		btnType: 'primary',
	},
};

// Feature data
export const featuresData: FeaturesProps = {
	header: {
		title: <>Our Most Popular Coaches</>,
		subtitle:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.',
		highlight: 'sponsored',
	},
	items: [
		{
			title: 'Next.Js + Tailwind CSS Integration',
			description:
				'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
			icon: IconBrandTailwind,
			link: {
				label: 'Discover now',
				href: '/',
			},
		},
		{
			title: 'Ready-to-use Components',
			description:
				'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
			icon: IconComponents,
			link: {
				label: 'Discover now',
				href: '/',
			},
		},
		{
			title: 'Best Practices',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
			icon: IconListCheck,
			link: {
				label: 'Discover now',
				href: '/',
			},
		},
		{
			title: 'Excellent Page Speed',
			description:
				'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
			icon: IconRocket,
			link: {
				label: 'Discover now',
				href: '/',
			},
		},
		{
			title: 'Search Engine Optimization (SEO)',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
			icon: IconArrowsRightLeft,
			link: {
				label: 'Discover now',
				href: '/',
			},
		},
		{
			title: 'Open to new ideas and contributions',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
			icon: IconBulb,
			link: {
				label: 'Discover now',
				href: '/',
			},
		},
	],
};

// Feature2 data
export const featuresData2: FeaturesProps = {
	header: {
		title: 'Support Center',
		subtitle: 'Looking for something in particular?',
	},
	items: [
		{
			title: 'Have a question?',
			description: 'See our frequently asked questions',
			icon: IconHelp,
			link: {
				href: '/faqs',
			},
		},
		{
			title: 'Chat with us',
			description: 'Live chat with our support team',
			icon: IconMessages,
			link: {
				href: '/',
			},
		},
		{
			title: 'Get help',
			description: 'Speak to our team today',
			icon: IconHeadset,
			link: {
				href: '/',
			},
		},
	],
};

// Feature data 3
export const featuresData3: FeaturesProps = {
	header: {
		title: 'Services',
	},
	items: [
		{
			title: 'Next.Js + Tailwind CSS Integration',
			description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
			icon: IconBrandTailwind,
		},
		{
			title: 'Ready-to-use Components',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			icon: IconComponents,
		},
		{
			title: 'Best Practices',
			description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
			icon: IconListCheck,
		},
		{
			title: 'Excellent Page Speed',
			description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
			icon: IconRocket,
		},
		{
			title: 'Search Engine Optimization (SEO)',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
			icon: IconArrowsRightLeft,
		},
		{
			title: 'Open to new ideas and contributions',
			description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
			icon: IconBulb,
		},
	],
};

// Content data
export const contentData: ContentProps = {
	header: {
		title: 'What we offer here on Coach',
		subtitle: 'Quando cetero his ne, eum admodum sapientem ut',
		highlight: 'Content',
	},
	content:
		'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
	items: [
		{
			title: 'Per ei quaeque sensibus',
			description:
				'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
		},
		{
			title: 'Cu imperdiet posidonium sed',
			description:
				'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
		},
		{
			title: 'Nulla omittam sadipscing mel ne',
			description:
				'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
		},
	],
	image: {
		src: cameraFrontImg,
		alt: 'Colorful Image',
	},
	isReversed: false,
	isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
	content:
		'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
	items: [
		{
			title: 'Per ei quaeque sensibus',
		},
		{
			title: 'Cu imperdiet posidonium sed',
		},
		{
			title: 'Nulla omittam sadipscing mel ne',
		},
		{
			title: 'Per ei quaeque sensibus',
		},
		{
			title: 'Cu imperdiet posidonium sed',
		},
		{
			title: 'Nulla omittam sadipscing mel ne',
		},
	],
	image: {
		src: cameraBackImg,
		alt: 'Colorful Image',
	},
	isReversed: true,
	isAfterContent: true,
};

// Steps data
export const stepsData: StepsProps = {
	title: 'Sed ac magna sit amet risus tristique interdum. hac.',
	items: [
		{
			title: 'Step 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
			icon: IconArrowDown,
		},
		{
			title: 'Step 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
			icon: IconArrowDown,
		},
		{
			title: 'Step 3',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
			icon: IconArrowDown,
		},
		{
			title: 'Ready!',
			icon: IconCheck,
		},
	],
	image: {
		src: gasImg,
		alt: 'Steps image',
	},
};

// Team data
export const teamData: TeamProps = {
	header: {
		title: 'Team Members',
		subtitle:
			'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
		// highlight: 'Team',
	},
	teams: [
		{
			name: 'Cindy Belcher',
			occupation: 'SEO Consultant',
			image: {
				src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
				alt: 'Cindy Belcher',
			},
			items: [
				{
					title: 'Know more on Twitter',
					icon: IconBrandTwitter,
					href: '#',
				},
				{
					title: 'Know more on Linkedin',
					icon: IconBrandLinkedin,
					href: '#',
				},
				{
					title: 'Contact by email',
					icon: IconMail,
					href: '#',
				},
			],
		},
		{
			name: 'Toby Foster',
			occupation: 'Marketing Tech',
			image: {
				src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
				alt: 'Toby Foster',
			},
			items: [
				{
					title: 'Know more on Twitter',
					icon: IconBrandTwitter,
					href: '#',
				},
				{
					title: 'Know more on Linkedin',
					icon: IconBrandLinkedin,
					href: '#',
				},
				{
					title: 'Contact by email',
					icon: IconMail,
					href: '#',
				},
			],
		},
		{
			name: 'Clark Bourne',
			occupation: 'Content Manager',
			image: {
				src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
				alt: 'Clark Bourne',
			},
			items: [
				{
					title: 'Know more on Twitter',
					icon: IconBrandTwitter,
					href: '#',
				},
				{
					title: 'Know more on Linkedin',
					icon: IconBrandLinkedin,
					href: '#',
				},
				{
					title: 'Contact by email',
					icon: IconMail,
					href: '#',
				},
			],
		},
		{
			name: 'Bella Chase',
			occupation: 'UX Designer',
			image: {
				src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
				alt: 'Bella Chase',
			},
			items: [
				{
					title: 'Know more on Twitter',
					icon: IconBrandTwitter,
					href: '#',
				},
				{
					title: 'Know more on Linkedin',
					icon: IconBrandLinkedin,
					href: '#',
				},
				{
					title: 'Contact by email',
					icon: IconMail,
					href: '#',
				},
			],
		},
	],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
	header: {
		title: 'What our customers say about us',
		subtitle:
			'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
		// highlight: 'Testimonial',
	},
	testimonials: [
		{
			name: 'Tayla Kirsten',
			occupation: 'Marketing Manager',
			comment:
				'Suspendisse mollis ante turpis, ut fermentum nulla finibus ac. Integer ut justo id dolor lobortis pharetra. Integer ultrices leo a nunc ullamcorper commodo. In id nulla et nibh pretium pretium non vel metus. Suspendisse dapibus quis lorem sit amet fermentum. Ut a dapibus justo. In faucibus molestie pretium. Cras eros orci, bibendum fringilla elit at, vehicula maximus eros. Aenean placerat aliquet mi, et pellentesque dolor gravida at.',
			image: {
				src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
				alt: '',
			},
			icon: IconBrandTwitter,
			href: '#',
		},
		{
			name: 'Silver Jordan',
			occupation: 'Senior Marketer',
			comment:
				'Mauris semper enim dolor, ac dictum sapien sollicitudin quis. Quisque id pharetra mi. Phasellus eu posuere lectus, vitae rhoncus velit. Nullam imperdiet purus quis dapibus vestibulum. Integer purus ex, hendrerit at elementum non, varius a nibh. Ut eget convallis mi. Morbi mattis, felis sit amet consectetur scelerisque, odio purus ornare sapien, in feugiat lorem tellus et magna. Pellentesque luctus dolor in ornare mattis.',
			image: {
				src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
				alt: '',
			},
			icon: IconBrandTwitter,
			href: '#',
		},
		{
			name: 'Kelsey Arden',
			occupation: 'Co-Founder & CEO',
			comment:
				'Sed malesuada rhoncus arcu, sit amet condimentum leo pharetra feugiat. In augue quam, venenatis nec dui in, auctor tempus libero. Aliquam tempus ex id metus viverra blandit. Proin varius venenatis tortor, a pellentesque enim malesuada a. Aliquam lectus magna, interdum eget odio non, consequat imperdiet ipsum.',
			image: {
				src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
				alt: '',
			},
			icon: IconBrandTwitter,
			href: '#',
		},
	],
};

// Pricing data
export const pricingData: PricingProps = {
	header: {
		title: 'Prices for each plan',
		subtitle:
			'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
		// highlight: 'Pricing',
	},
	prices: [
		{
			title: 'basic',
			value: 29,
			period: 'per month',
			texts: [
				'Etiam in libero',
				'Aenean ac nunc',
				'Cras scelerisque accumsan libero, et volutpat dolor tristique at',
				'In hac habitasse',
			],
			callToAction: {
				text: 'Free 7-day trial',
				href: '/',
			},
			hasRibbon: false,
		},
		{
			title: 'standard',
			value: 69,
			period: 'per month',
			texts: ['Proin vel laoreet', 'Ut efficitur egestas', 'Pellentesque ut nibh', 'Donec fringilla sem'],
			callToAction: {
				text: 'Free 15-day trial',
				href: '/',
			},
			hasRibbon: true,
			ribbonTitle: 'Popular',
		},
		{
			title: 'premium',
			value: 199,
			period: 'per month',
			texts: [
				'Curabitur suscipit risus',
				'Aliquam blandit malesuada',
				'Suspendisse sit amet',
				'Suspendisse auctor dui',
			],
			callToAction: {
				text: 'Free 30-day trial',
				href: '/',
			},
			hasRibbon: false,
		},
	],
};

// Comparison data
export const comparisonData: ComparisonProps = {
	header: {
		title: "What's available for each plan?",
		subtitle:
			'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
		// highlight: 'Comparison',
	},
	columns: [
		{
			title: 'compare plans',
			items: [
				{
					title: 'In vitae finibus',
				},
				{
					title: 'Cras sollicitudin',
				},
				{
					title: 'Suspendisse',
				},
				{
					title: 'Vestibulum ornare',
				},
				{
					title: 'In hendrerit',
				},
				{
					title: 'Ut pharetra',
				},
			],
		},
		{
			title: 'basic',
			items: [
				{
					title: 'Free 7-day trial',
				},
				{
					title: 'Limited',
				},
				{
					title: '$29',
				},
				{
					title: false,
				},
				{
					title: false,
				},
				{
					title: true,
				},
			],
			callToAction: {
				text: 'Get started',
				href: '/',
				btnType: 'primary',
			},
		},
		{
			title: 'standard',
			items: [
				{
					title: 'Free 15-day trial',
				},
				{
					title: 'Unlimited',
				},
				{
					title: '$69',
				},
				{
					title: false,
				},
				{
					title: true,
				},
				{
					title: true,
				},
			],
			callToAction: {
				text: 'Get started',
				href: '/',
				btnType: 'primary',
			},
		},
		{
			title: 'premium',
			items: [
				{
					title: 'Free 30-day trial',
				},
				{
					title: 'Unlimited',
				},
				{
					title: '$199',
				},
				{
					title: true,
				},
				{
					title: true,
				},
				{
					title: true,
				},
			],
			callToAction: {
				text: 'Get started',
				href: '/',
				btnType: 'primary',
			},
		},
	],
};

// Stats
export const statsData: StatsProps = {
	items: [
		{
			title: 13269,
			description: 'Downloads',
		},
		{
			title: 24.8,
			description: 'Stars',
		},
		{
			title: 1767.77,
			description: 'Forks',
		},
		{
			title: 484000,
			description: 'Users',
		},
	],
};

// Contact data
export const contactData: ContactProps = {
	header: {
		title: 'Get in Touch',
		subtitle: 'In hac habitasse platea dictumst',
		highlight: 'Contact',
	},
	content:
		'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
	items: [
		{
			title: 'Our Address',
			description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
			icon: IconMapPin,
		},
		{
			title: 'Contact',
			description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
			icon: IconPhoneCall,
		},
		{
			title: 'Working hours',
			description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
			icon: IconClock,
		},
	],
	form: {
		title: 'Ready to Get Started?',
		inputs: [
			{
				type: 'text',
				name: 'name',
				autocomplete: 'given-name',
				placeholder: 'Your name',
			},
			{
				type: 'email',
				name: 'email',
				autocomplete: 'email',
				placeholder: 'Your email address',
			},
		],
		textarea: {
			cols: 30,
			rows: 5,
			name: 'textarea',
			placeholder: 'Write your message...',
		},
		btn: {
			title: 'Send Message',
			type: 'submit',
		},
	},
};

// Contact2 data
export const contact2Data: ContactProps = {
	header: {
		title: 'Get in Touch',
		subtitle: 'In hac habitasse platea dictumst',
		highlight: 'Contact',
	},
	content:
		'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
	items: [
		{
			title: 'Our Address',
			description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
			icon: IconMapPin,
		},
		{
			title: 'Contact',
			description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
			icon: IconPhoneCall,
		},
		{
			title: 'Working hours',
			description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
			icon: IconClock,
		},
	],
	form: {
		title: 'Ready to Get Started?',
		description:
			'Mauris consequat, urna vel varius auctor, enim risus ornare felis, at hendrerit erat justo eu justo. Curabitur sagittis efficitur aliquam. Duis eget porttitor lectus, vel pharetra ex. Nam volutpat nibh ut porta egestas.',
		inputs: [
			{
				type: 'text',
				label: 'First name',
				name: 'name',
				autocomplete: 'given-name',
				placeholder: 'First name',
			},
			{
				type: 'text',
				label: 'Last name',
				name: 'lastName',
				placeholder: 'Last name',
			},
			{
				type: 'email',
				label: 'Email address',
				name: 'email',
				placeholder: 'Email address',
			},
		],
		radioBtns: {
			label: 'What is the reason for your contact?',
			radios: [
				{
					label: 'General inquiries',
				},
				{
					label: 'Technical help',
				},
				{
					label: 'Claims',
				},
				{
					label: 'Others',
				},
			],
		},
		textarea: {
			cols: 30,
			rows: 5,
			label: 'How can we help you?',
			name: 'textarea',
			placeholder: 'Write your message...',
		},
		checkboxes: [
			{
				label: 'Have you read our privacy policy?',
				value: '',
			},
			{
				label: 'Do you want to receive monthly updates by email?',
				value: '',
			},
		],
		btn: {
			title: 'Send Message',
			type: 'submit',
		},
	},
};

// Footer data
export const footerData: FooterProps = {
	title: 'Coach',
	links: [
		{
			label: 'Terms & Conditions',
			href: '/terms',
		},
		{
			label: 'Privacy Policy',
			href: '/privacy',
		},
	],
	columns: [
		{
			title: 'Lesson Coaches',
			links: [
				{
					label: 'Fitness',
					href: '/',
				},
				{
					label: 'Wellness',
					href: '/',
				},
				{
					label: 'Business',
					href: '/',
				},
				{
					label: 'Personal Development',
					href: '/',
				},
				{
					label: 'Cooking',
					href: '/',
				},
				{
					label: 'Mind set',
					href: '/',
				},
				{
					label: 'Language',
					href: '/',
				},
			],
		},
		{
			title: 'Train In',
			links: [
				{
					label: 'Fitness',
					href: '/',
				},
				{
					label: 'Wellness',
					href: '/',
				},
				{
					label: 'Business',
					href: '/',
				},
				{
					label: 'Personal Development',
					href: '/',
				},
				{
					label: 'Cooking',
					href: '/',
				},
				{
					label: 'Mind set',
					href: '/',
				},
				{
					label: 'Language',
					href: '/',
				},
			],
		},
		{
			title: 'Mods of Training',
			links: [
				{
					label: '1 on 1 training',
					href: '/',
				},
				{
					label: 'Group Classes',
					href: '/',
				},
			],
		},
		{
			title: 'Company',
			links: [
				{
					label: 'About',
					href: '/',
				},
				{
					label: 'Blog',
					href: '/blog',
				},
				{
					label: 'Careers',
					href: '/',
				},
				{
					label: 'Press',
					href: '/',
				},
				{
					label: 'Inclusion',
					href: '/',
				},
				{
					label: 'Social Impact',
					href: '/',
				},
				{
					label: 'Shop',
					href: '/',
				},
			],
		},
	],
	socials: [
		{ label: 'Twitter', icon: IconBrandTwitter, href: '#' },
		{ label: 'Instagram', icon: IconBrandInstagram, href: '#' },
		{ label: 'Facebook', icon: IconBrandFacebook, href: '#' },
		{ label: 'RSS', icon: IconRss, href: '#' },
		{ label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
	],
	footNote: (
		<div className="dark:text-slate-400 mr-4 text-sm">
			<span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
			Made by{' '}
			<a className="dark:text-gray-200 text-blue-600 hover:underline" href="#">
				{' '}
				BestWing
			</a>{' '}
			· All rights reserved.
		</div>
	),
};

// Footer2 data
export const footerData2: FooterProps = {
	links: [
		{
			label: 'Terms & Conditions',
			href: '/terms',
		},
		{
			label: 'Privacy Policy',
			href: '/privacy',
		},
	],
	columns: [
		{
			title: 'Address',
			texts: ['51 Phasellus Avenue Maecenas', 'Aliquam, AQ 52098'],
		},
		{
			title: 'Phone',
			texts: ['Reception: +105 123 4567', 'Office: +107 235 7890'],
		},
		{
			title: 'Email',
			texts: ['Office: info@example.com', 'Site: https://example.com'],
		},
	],
	socials: [
		{ label: 'Twitter', icon: IconBrandTwitter, href: '#' },
		{ label: 'Instagram', icon: IconBrandInstagram, href: '#' },
		{ label: 'Facebook', icon: IconBrandFacebook, href: '#' },
		{ label: 'RSS', icon: IconRss, href: '#' },
		{ label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
	],
	footNote: (
		<div className="dark:text-slate-400 mr-4 text-sm">
			<span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
			Made by{' '}
			<a className="dark:text-gray-200 text-blue-600 hover:underline" href="https://onwidget.com/">
				{' '}
				onWidget
			</a>{' '}
			· All rights reserved.
		</div>
	),
};

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
export const countries: readonly CountryType[] = [
	{ code: 'AD', label: 'Andorra', phone: '376' },
	{
		code: 'AE',
		label: 'United Arab Emirates',
		phone: '971',
	},
	{ code: 'AF', label: 'Afghanistan', phone: '93' },
	{
		code: 'AG',
		label: 'Antigua and Barbuda',
		phone: '1-268',
	},
	{ code: 'AI', label: 'Anguilla', phone: '1-264' },
	{ code: 'AL', label: 'Albania', phone: '355' },
	{ code: 'AM', label: 'Armenia', phone: '374' },
	{ code: 'AO', label: 'Angola', phone: '244' },
	{ code: 'AQ', label: 'Antarctica', phone: '672' },
	{ code: 'AR', label: 'Argentina', phone: '54' },
	{ code: 'AS', label: 'American Samoa', phone: '1-684' },
	{ code: 'AT', label: 'Austria', phone: '43' },
	{
		code: 'AU',
		label: 'Australia',
		phone: '61',
		suggested: true,
	},
	{ code: 'AW', label: 'Aruba', phone: '297' },
	{ code: 'AX', label: 'Alland Islands', phone: '358' },
	{ code: 'AZ', label: 'Azerbaijan', phone: '994' },
	{
		code: 'BA',
		label: 'Bosnia and Herzegovina',
		phone: '387',
	},
	{ code: 'BB', label: 'Barbados', phone: '1-246' },
	{ code: 'BD', label: 'Bangladesh', phone: '880' },
	{ code: 'BE', label: 'Belgium', phone: '32' },
	{ code: 'BF', label: 'Burkina Faso', phone: '226' },
	{ code: 'BG', label: 'Bulgaria', phone: '359' },
	{ code: 'BH', label: 'Bahrain', phone: '973' },
	{ code: 'BI', label: 'Burundi', phone: '257' },
	{ code: 'BJ', label: 'Benin', phone: '229' },
	{ code: 'BL', label: 'Saint Barthelemy', phone: '590' },
	{ code: 'BM', label: 'Bermuda', phone: '1-441' },
	{ code: 'BN', label: 'Brunei Darussalam', phone: '673' },
	{ code: 'BO', label: 'Bolivia', phone: '591' },
	{ code: 'BR', label: 'Brazil', phone: '55' },
	{ code: 'BS', label: 'Bahamas', phone: '1-242' },
	{ code: 'BT', label: 'Bhutan', phone: '975' },
	{ code: 'BV', label: 'Bouvet Island', phone: '47' },
	{ code: 'BW', label: 'Botswana', phone: '267' },
	{ code: 'BY', label: 'Belarus', phone: '375' },
	{ code: 'BZ', label: 'Belize', phone: '501' },
	{
		code: 'CA',
		label: 'Canada',
		phone: '1',
		suggested: true,
	},
	{
		code: 'CC',
		label: 'Cocos (Keeling) Islands',
		phone: '61',
	},
	{
		code: 'CD',
		label: 'Congo, Democratic Republic of the',
		phone: '243',
	},
	{
		code: 'CF',
		label: 'Central African Republic',
		phone: '236',
	},
	{
		code: 'CG',
		label: 'Congo, Republic of the',
		phone: '242',
	},
	{ code: 'CH', label: 'Switzerland', phone: '41' },
	{ code: 'CI', label: "Cote d'Ivoire", phone: '225' },
	{ code: 'CK', label: 'Cook Islands', phone: '682' },
	{ code: 'CL', label: 'Chile', phone: '56' },
	{ code: 'CM', label: 'Cameroon', phone: '237' },
	{ code: 'CN', label: 'China', phone: '86' },
	{ code: 'CO', label: 'Colombia', phone: '57' },
	{ code: 'CR', label: 'Costa Rica', phone: '506' },
	{ code: 'CU', label: 'Cuba', phone: '53' },
	{ code: 'CV', label: 'Cape Verde', phone: '238' },
	{ code: 'CW', label: 'Curacao', phone: '599' },
	{ code: 'CX', label: 'Christmas Island', phone: '61' },
	{ code: 'CY', label: 'Cyprus', phone: '357' },
	{ code: 'CZ', label: 'Czech Republic', phone: '420' },
	{
		code: 'DE',
		label: 'Germany',
		phone: '49',
		suggested: true,
	},
	{ code: 'DJ', label: 'Djibouti', phone: '253' },
	{ code: 'DK', label: 'Denmark', phone: '45' },
	{ code: 'DM', label: 'Dominica', phone: '1-767' },
	{
		code: 'DO',
		label: 'Dominican Republic',
		phone: '1-809',
	},
	{ code: 'DZ', label: 'Algeria', phone: '213' },
	{ code: 'EC', label: 'Ecuador', phone: '593' },
	{ code: 'EE', label: 'Estonia', phone: '372' },
	{ code: 'EG', label: 'Egypt', phone: '20' },
	{ code: 'EH', label: 'Western Sahara', phone: '212' },
	{ code: 'ER', label: 'Eritrea', phone: '291' },
	{ code: 'ES', label: 'Spain', phone: '34' },
	{ code: 'ET', label: 'Ethiopia', phone: '251' },
	{ code: 'FI', label: 'Finland', phone: '358' },
	{ code: 'FJ', label: 'Fiji', phone: '679' },
	{
		code: 'FK',
		label: 'Falkland Islands (Malvinas)',
		phone: '500',
	},
	{
		code: 'FM',
		label: 'Micronesia, Federated States of',
		phone: '691',
	},
	{ code: 'FO', label: 'Faroe Islands', phone: '298' },
	{
		code: 'FR',
		label: 'France',
		phone: '33',
		suggested: true,
	},
	{ code: 'GA', label: 'Gabon', phone: '241' },
	{ code: 'GB', label: 'United Kingdom', phone: '44' },
	{ code: 'GD', label: 'Grenada', phone: '1-473' },
	{ code: 'GE', label: 'Georgia', phone: '995' },
	{ code: 'GF', label: 'French Guiana', phone: '594' },
	{ code: 'GG', label: 'Guernsey', phone: '44' },
	{ code: 'GH', label: 'Ghana', phone: '233' },
	{ code: 'GI', label: 'Gibraltar', phone: '350' },
	{ code: 'GL', label: 'Greenland', phone: '299' },
	{ code: 'GM', label: 'Gambia', phone: '220' },
	{ code: 'GN', label: 'Guinea', phone: '224' },
	{ code: 'GP', label: 'Guadeloupe', phone: '590' },
	{ code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
	{ code: 'GR', label: 'Greece', phone: '30' },
	{
		code: 'GS',
		label: 'South Georgia and the South Sandwich Islands',
		phone: '500',
	},
	{ code: 'GT', label: 'Guatemala', phone: '502' },
	{ code: 'GU', label: 'Guam', phone: '1-671' },
	{ code: 'GW', label: 'Guinea-Bissau', phone: '245' },
	{ code: 'GY', label: 'Guyana', phone: '592' },
	{ code: 'HK', label: 'Hong Kong', phone: '852' },
	{
		code: 'HM',
		label: 'Heard Island and McDonald Islands',
		phone: '672',
	},
	{ code: 'HN', label: 'Honduras', phone: '504' },
	{ code: 'HR', label: 'Croatia', phone: '385' },
	{ code: 'HT', label: 'Haiti', phone: '509' },
	{ code: 'HU', label: 'Hungary', phone: '36' },
	{ code: 'ID', label: 'Indonesia', phone: '62' },
	{ code: 'IE', label: 'Ireland', phone: '353' },
	{ code: 'IL', label: 'Israel', phone: '972' },
	{ code: 'IM', label: 'Isle of Man', phone: '44' },
	{ code: 'IN', label: 'India', phone: '91' },
	{
		code: 'IO',
		label: 'British Indian Ocean Territory',
		phone: '246',
	},
	{ code: 'IQ', label: 'Iraq', phone: '964' },
	{
		code: 'IR',
		label: 'Iran, Islamic Republic of',
		phone: '98',
	},
	{ code: 'IS', label: 'Iceland', phone: '354' },
	{ code: 'IT', label: 'Italy', phone: '39' },
	{ code: 'JE', label: 'Jersey', phone: '44' },
	{ code: 'JM', label: 'Jamaica', phone: '1-876' },
	{ code: 'JO', label: 'Jordan', phone: '962' },
	{
		code: 'JP',
		label: 'Japan',
		phone: '81',
		suggested: true,
	},
	{ code: 'KE', label: 'Kenya', phone: '254' },
	{ code: 'KG', label: 'Kyrgyzstan', phone: '996' },
	{ code: 'KH', label: 'Cambodia', phone: '855' },
	{ code: 'KI', label: 'Kiribati', phone: '686' },
	{ code: 'KM', label: 'Comoros', phone: '269' },
	{
		code: 'KN',
		label: 'Saint Kitts and Nevis',
		phone: '1-869',
	},
	{
		code: 'KP',
		label: "Korea, Democratic People's Republic of",
		phone: '850',
	},
	{ code: 'KR', label: 'Korea, Republic of', phone: '82' },
	{ code: 'KW', label: 'Kuwait', phone: '965' },
	{ code: 'KY', label: 'Cayman Islands', phone: '1-345' },
	{ code: 'KZ', label: 'Kazakhstan', phone: '7' },
	{
		code: 'LA',
		label: "Lao People's Democratic Republic",
		phone: '856',
	},
	{ code: 'LB', label: 'Lebanon', phone: '961' },
	{ code: 'LC', label: 'Saint Lucia', phone: '1-758' },
	{ code: 'LI', label: 'Liechtenstein', phone: '423' },
	{ code: 'LK', label: 'Sri Lanka', phone: '94' },
	{ code: 'LR', label: 'Liberia', phone: '231' },
	{ code: 'LS', label: 'Lesotho', phone: '266' },
	{ code: 'LT', label: 'Lithuania', phone: '370' },
	{ code: 'LU', label: 'Luxembourg', phone: '352' },
	{ code: 'LV', label: 'Latvia', phone: '371' },
	{ code: 'LY', label: 'Libya', phone: '218' },
	{ code: 'MA', label: 'Morocco', phone: '212' },
	{ code: 'MC', label: 'Monaco', phone: '377' },
	{
		code: 'MD',
		label: 'Moldova, Republic of',
		phone: '373',
	},
	{ code: 'ME', label: 'Montenegro', phone: '382' },
	{
		code: 'MF',
		label: 'Saint Martin (French part)',
		phone: '590',
	},
	{ code: 'MG', label: 'Madagascar', phone: '261' },
	{ code: 'MH', label: 'Marshall Islands', phone: '692' },
	{
		code: 'MK',
		label: 'Macedonia, the Former Yugoslav Republic of',
		phone: '389',
	},
	{ code: 'ML', label: 'Mali', phone: '223' },
	{ code: 'MM', label: 'Myanmar', phone: '95' },
	{ code: 'MN', label: 'Mongolia', phone: '976' },
	{ code: 'MO', label: 'Macao', phone: '853' },
	{
		code: 'MP',
		label: 'Northern Mariana Islands',
		phone: '1-670',
	},
	{ code: 'MQ', label: 'Martinique', phone: '596' },
	{ code: 'MR', label: 'Mauritania', phone: '222' },
	{ code: 'MS', label: 'Montserrat', phone: '1-664' },
	{ code: 'MT', label: 'Malta', phone: '356' },
	{ code: 'MU', label: 'Mauritius', phone: '230' },
	{ code: 'MV', label: 'Maldives', phone: '960' },
	{ code: 'MW', label: 'Malawi', phone: '265' },
	{ code: 'MX', label: 'Mexico', phone: '52' },
	{ code: 'MY', label: 'Malaysia', phone: '60' },
	{ code: 'MZ', label: 'Mozambique', phone: '258' },
	{ code: 'NA', label: 'Namibia', phone: '264' },
	{ code: 'NC', label: 'New Caledonia', phone: '687' },
	{ code: 'NE', label: 'Niger', phone: '227' },
	{ code: 'NF', label: 'Norfolk Island', phone: '672' },
	{ code: 'NG', label: 'Nigeria', phone: '234' },
	{ code: 'NI', label: 'Nicaragua', phone: '505' },
	{ code: 'NL', label: 'Netherlands', phone: '31' },
	{ code: 'NO', label: 'Norway', phone: '47' },
	{ code: 'NP', label: 'Nepal', phone: '977' },
	{ code: 'NR', label: 'Nauru', phone: '674' },
	{ code: 'NU', label: 'Niue', phone: '683' },
	{ code: 'NZ', label: 'New Zealand', phone: '64' },
	{ code: 'OM', label: 'Oman', phone: '968' },
	{ code: 'PA', label: 'Panama', phone: '507' },
	{ code: 'PE', label: 'Peru', phone: '51' },
	{ code: 'PF', label: 'French Polynesia', phone: '689' },
	{ code: 'PG', label: 'Papua New Guinea', phone: '675' },
	{ code: 'PH', label: 'Philippines', phone: '63' },
	{ code: 'PK', label: 'Pakistan', phone: '92' },
	{ code: 'PL', label: 'Poland', phone: '48' },
	{
		code: 'PM',
		label: 'Saint Pierre and Miquelon',
		phone: '508',
	},
	{ code: 'PN', label: 'Pitcairn', phone: '870' },
	{ code: 'PR', label: 'Puerto Rico', phone: '1' },
	{
		code: 'PS',
		label: 'Palestine, State of',
		phone: '970',
	},
	{ code: 'PT', label: 'Portugal', phone: '351' },
	{ code: 'PW', label: 'Palau', phone: '680' },
	{ code: 'PY', label: 'Paraguay', phone: '595' },
	{ code: 'QA', label: 'Qatar', phone: '974' },
	{ code: 'RE', label: 'Reunion', phone: '262' },
	{ code: 'RO', label: 'Romania', phone: '40' },
	{ code: 'RS', label: 'Serbia', phone: '381' },
	{ code: 'RU', label: 'Russian Federation', phone: '7' },
	{ code: 'RW', label: 'Rwanda', phone: '250' },
	{ code: 'SA', label: 'Saudi Arabia', phone: '966' },
	{ code: 'SB', label: 'Solomon Islands', phone: '677' },
	{ code: 'SC', label: 'Seychelles', phone: '248' },
	{ code: 'SD', label: 'Sudan', phone: '249' },
	{ code: 'SE', label: 'Sweden', phone: '46' },
	{ code: 'SG', label: 'Singapore', phone: '65' },
	{ code: 'SH', label: 'Saint Helena', phone: '290' },
	{ code: 'SI', label: 'Slovenia', phone: '386' },
	{
		code: 'SJ',
		label: 'Svalbard and Jan Mayen',
		phone: '47',
	},
	{ code: 'SK', label: 'Slovakia', phone: '421' },
	{ code: 'SL', label: 'Sierra Leone', phone: '232' },
	{ code: 'SM', label: 'San Marino', phone: '378' },
	{ code: 'SN', label: 'Senegal', phone: '221' },
	{ code: 'SO', label: 'Somalia', phone: '252' },
	{ code: 'SR', label: 'Suriname', phone: '597' },
	{ code: 'SS', label: 'South Sudan', phone: '211' },
	{
		code: 'ST',
		label: 'Sao Tome and Principe',
		phone: '239',
	},
	{ code: 'SV', label: 'El Salvador', phone: '503' },
	{
		code: 'SX',
		label: 'Sint Maarten (Dutch part)',
		phone: '1-721',
	},
	{
		code: 'SY',
		label: 'Syrian Arab Republic',
		phone: '963',
	},
	{ code: 'SZ', label: 'Swaziland', phone: '268' },
	{
		code: 'TC',
		label: 'Turks and Caicos Islands',
		phone: '1-649',
	},
	{ code: 'TD', label: 'Chad', phone: '235' },
	{
		code: 'TF',
		label: 'French Southern Territories',
		phone: '262',
	},
	{ code: 'TG', label: 'Togo', phone: '228' },
	{ code: 'TH', label: 'Thailand', phone: '66' },
	{ code: 'TJ', label: 'Tajikistan', phone: '992' },
	{ code: 'TK', label: 'Tokelau', phone: '690' },
	{ code: 'TL', label: 'Timor-Leste', phone: '670' },
	{ code: 'TM', label: 'Turkmenistan', phone: '993' },
	{ code: 'TN', label: 'Tunisia', phone: '216' },
	{ code: 'TO', label: 'Tonga', phone: '676' },
	{ code: 'TR', label: 'Turkey', phone: '90' },
	{
		code: 'TT',
		label: 'Trinidad and Tobago',
		phone: '1-868',
	},
	{ code: 'TV', label: 'Tuvalu', phone: '688' },
	{
		code: 'TW',
		label: 'Taiwan, Republic of China',
		phone: '886',
	},
	{
		code: 'TZ',
		label: 'United Republic of Tanzania',
		phone: '255',
	},
	{ code: 'UA', label: 'Ukraine', phone: '380' },
	{ code: 'UG', label: 'Uganda', phone: '256' },
	{
		code: 'US',
		label: 'United States',
		phone: '1',
		suggested: true,
	},
	{ code: 'UY', label: 'Uruguay', phone: '598' },
	{ code: 'UZ', label: 'Uzbekistan', phone: '998' },
	{
		code: 'VA',
		label: 'Holy See (Vatican City State)',
		phone: '379',
	},
	{
		code: 'VC',
		label: 'Saint Vincent and the Grenadines',
		phone: '1-784',
	},
	{ code: 'VE', label: 'Venezuela', phone: '58' },
	{
		code: 'VG',
		label: 'British Virgin Islands',
		phone: '1-284',
	},
	{
		code: 'VI',
		label: 'US Virgin Islands',
		phone: '1-340',
	},
	{ code: 'VN', label: 'Vietnam', phone: '84' },
	{ code: 'VU', label: 'Vanuatu', phone: '678' },
	{ code: 'WF', label: 'Wallis and Futuna', phone: '681' },
	{ code: 'WS', label: 'Samoa', phone: '685' },
	{ code: 'XK', label: 'Kosovo', phone: '383' },
	{ code: 'YE', label: 'Yemen', phone: '967' },
	{ code: 'YT', label: 'Mayotte', phone: '262' },
	{ code: 'ZA', label: 'South Africa', phone: '27' },
	{ code: 'ZM', label: 'Zambia', phone: '260' },
	{ code: 'ZW', label: 'Zimbabwe', phone: '263' },
];

export const LanguageData: DropdownMenuProps = {
	title: 'Language',
	items: [
		{
			key: nanoid(),
			label: 'Abkhaz',
			value: 'ab',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Afar',
			value: 'aa',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Afrikaans',
			value: 'af',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Akan',
			value: 'ak',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Albanian',
			value: 'sq',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Amharic',
			value: 'am',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Arabic',
			value: 'ar',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Aragonese',
			value: 'an',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Armenian',
			value: 'hy',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Assamese',
			value: 'as',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Avaric',
			value: 'av',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Avestan',
			value: 'ae',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Aymara',
			value: 'ay',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Azerbaijani',
			value: 'az',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Bambara',
			value: 'bm',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Bashkir',
			value: 'ba',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Basque',
			value: 'eu',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Belarusian',
			value: 'be',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Bengali',
			value: 'bn',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Bihari',
			value: 'bh',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Bislama',
			value: 'bi',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Bosnian',
			value: 'bs',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Breton',
			value: 'br',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Bulgarian',
			value: 'bg',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Burmese',
			value: 'my',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Catalan',
			value: 'ca',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Chamorro',
			value: 'ch',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Chechen',
			value: 'ce',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Chichewa',
			value: 'ny',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Chinese',
			value: 'zh',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Chuvash',
			value: 'cv',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Cornish',
			value: 'kw',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Corsican',
			value: 'co',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Cree',
			value: 'cr',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Croatian',
			value: 'hr',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Czech',
			value: 'cs',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Danish',
			value: 'da',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Divehi',
			value: 'dv',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Dutch',
			value: 'nl',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Dzongkha',
			value: 'dz',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'English',
			value: 'en',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Esperanto',
			value: 'eo',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Estonian',
			value: 'et',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Ewe',
			value: 'ee',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Faroese',
			value: 'fo',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Fijian',
			value: 'fj',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Finnish',
			value: 'fi',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'French',
			value: 'fr',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Fula',
			value: 'ff',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Galician',
			value: 'gl',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Ganda',
			value: 'lg',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Georgian',
			value: 'ka',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'German',
			value: 'de',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Greek',
			value: 'el',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Guaraní',
			value: 'gn',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Gujarati',
			value: 'gu',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Haitian',
			value: 'ht',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Hausa',
			value: 'ha',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Hebrew',
			value: 'he',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Herero',
			value: 'hz',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Hindi',
			value: 'hi',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Hiri Motu',
			value: 'ho',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Hungarian',
			value: 'hu',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Icelandic',
			value: 'is',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Ido',
			value: 'io',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Igbo',
			value: 'ig',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Indonesian',
			value: 'id',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Interlingua',
			value: 'ia',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Interlingue',
			value: 'ie',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Inuktitut',
			value: 'iu',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Inupiaq',
			value: 'ik',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Irish',
			value: 'ga',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Italian',
			value: 'it',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Japanese',
			value: 'ja',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Javanese',
			value: 'jv',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Kalaallisut',
			value: 'kl',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Kannada',
			value: 'kn',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Kanuri',
			value: 'kr',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Kashmiri',
			value: 'ks',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Kazakh',
			value: 'kk',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Khmer',
			value: 'km',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Kikuyu',
			value: 'ki',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Kinyarwanda',
			value: 'rw',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Kirundi',
			value: 'rn',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Komi',
			value: 'kv',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Kongo',
			value: 'kg',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Korean',
			value: 'ko',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Kurdish',
			value: 'ku',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Kwanyama',
			value: 'kj',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Kyrgyz',
			value: 'ky',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Lao',
			value: 'lo',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Latin',
			value: 'la',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Latvian',
			value: 'lv',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Limburgish',
			value: 'li',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Lingala',
			value: 'ln',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Lithuanian',
			value: 'lt',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Luba-Katanga',
			value: 'lu',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Luxembourgish',
			value: 'lb',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Macedonian',
			value: 'mk',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Malagasy',
			value: 'mg',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Malay',
			value: 'ms',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Malayalam',
			value: 'ml',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Maltese',
			value: 'mt',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Manx',
			value: 'gv',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Maori',
			value: 'mi',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Marathi',
			value: 'mr',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Marshallese',
			value: 'mh',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Mongolian',
			value: 'mn',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Nauru',
			value: 'na',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Navajo',
			value: 'nv',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Ndonga',
			value: 'ng',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Nepali',
			value: 'ne',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'North Ndebele',
			value: 'nd',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Northern Sami',
			value: 'se',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Norwegian Bokmål',
			value: 'nb',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Norwegian Nynorsk',
			value: 'nn',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Norwegian',
			value: 'no',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Nuosu',
			value: 'ii',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Occitan',
			value: 'oc',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Ojibwe',
			value: 'oj',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Oriya',
			value: 'or',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Oromo',
			value: 'om',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Ossetian',
			value: 'os',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Pali',
			value: 'pi',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Panjabi',
			value: 'pa',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Pashto',
			value: 'ps',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Persian',
			value: 'fa',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Polish',
			value: 'pl',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Portuguese',
			value: 'pt',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Quechua',
			value: 'qu',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Romanian',
			value: 'ro',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Romansh',
			value: 'rm',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Rundi',
			value: 'rn',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Russian',
			value: 'ru',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Samoan',
			value: 'sm',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Sango',
			value: 'sg',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Sanskrit',
			value: 'sa',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Sardinian',
			value: 'sc',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Scottish Gaelic',
			value: 'gd',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Serbian',
			value: 'sr',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Shona',
			value: 'sn',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Sindhi',
			value: 'sd',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Sinhala',
			value: 'si',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Slovak',
			value: 'sk',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Slovene',
			value: 'sl',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Somali',
			value: 'so',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Southern Ndebele',
			value: 'nr',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Southern Sotho',
			value: 'st',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Spanish',
			value: 'es',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Sundanese',
			value: 'su',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Swahili',
			value: 'sw',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Swati',
			value: 'ss',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Swedish',
			value: 'sv',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Tagalog',
			value: 'tl',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Tahitian',
			value: 'ty',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Tajik',
			value: 'tg',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Tamil',
			value: 'ta',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Tatar',
			value: 'tt',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Telugu',
			value: 'te',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Thai',
			value: 'th',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Tibetan',
			value: 'bo',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Tigrinya',
			value: 'ti',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Tonga',
			value: 'to',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Tsonga',
			value: 'ts',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Tswana',
			value: 'tn',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Turkish',
			value: 'tr',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Turkmen',
			value: 'tk',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Twi',
			value: 'tw',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Uighur',
			value: 'ug',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Ukrainian',
			value: 'uk',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Urdu',
			value: 'ur',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Uzbek',
			value: 'uz',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Venda',
			value: 've',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Vietnamese',
			value: 'vi',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Volapük',
			value: 'vo',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Walloon',
			value: 'wa',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Welsh',
			value: 'cy',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Western Frisian',
			value: 'fy',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Wolof',
			value: 'wo',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Xhosa',
			value: 'xh',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Yiddish',
			value: 'yi',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Yoruba',
			value: 'yo',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Zhuang',
			value: 'za',
			type: 'lang',
		},
		{
			key: nanoid(),
			label: 'Zulu',
			value: 'zu',
			type: 'lang',
		},
	],
};

export const Timezones = [
	{
		value: 'Dateline Standard Time',
		abbr: 'DST',
		offset: -12,
		isdst: false,
		text: '(UTC-12:00) International Date Line West',
		utc: ['Etc/GMT+12'],
	},
	{
		value: 'UTC-11',
		abbr: 'U',
		offset: -11,
		isdst: false,
		text: '(UTC-11:00) Coordinated Universal Time-11',
		utc: ['Etc/GMT+11', 'Pacific/Midway', 'Pacific/Niue', 'Pacific/Pago_Pago'],
	},
	{
		value: 'Hawaiian Standard Time',
		abbr: 'HST',
		offset: -10,
		isdst: false,
		text: '(UTC-10:00) Hawaii',
		utc: ['Etc/GMT+10', 'Pacific/Honolulu', 'Pacific/Johnston', 'Pacific/Rarotonga', 'Pacific/Tahiti'],
	},
	{
		value: 'Alaskan Standard Time',
		abbr: 'AKDT',
		offset: -8,
		isdst: true,
		text: '(UTC-09:00) Alaska',
		utc: ['America/Anchorage', 'America/Juneau', 'America/Nome', 'America/Sitka', 'America/Yakutat'],
	},
	{
		value: 'Pacific Standard Time (Mexico)',
		abbr: 'PDT',
		offset: -7,
		isdst: true,
		text: '(UTC-08:00) Baja California',
		utc: ['America/Santa_Isabel'],
	},
	{
		value: 'Pacific Daylight Time',
		abbr: 'PDT',
		offset: -7,
		isdst: true,
		text: '(UTC-07:00) Pacific Time (US & Canada)',
		utc: ['America/Los_Angeles', 'America/Tijuana', 'America/Vancouver'],
	},
	{
		value: 'Pacific Standard Time',
		abbr: 'PST',
		offset: -8,
		isdst: false,
		text: '(UTC-08:00) Pacific Time (US & Canada)',
		utc: ['America/Los_Angeles', 'America/Tijuana', 'America/Vancouver', 'PST8PDT'],
	},
	{
		value: 'US Mountain Standard Time',
		abbr: 'UMST',
		offset: -7,
		isdst: false,
		text: '(UTC-07:00) Arizona',
		utc: [
			'America/Creston',
			'America/Dawson',
			'America/Dawson_Creek',
			'America/Hermosillo',
			'America/Phoenix',
			'America/Whitehorse',
			'Etc/GMT+7',
		],
	},
	{
		value: 'Mountain Standard Time (Mexico)',
		abbr: 'MDT',
		offset: -6,
		isdst: true,
		text: '(UTC-07:00) Chihuahua, La Paz, Mazatlan',
		utc: ['America/Chihuahua', 'America/Mazatlan'],
	},
	{
		value: 'Mountain Standard Time',
		abbr: 'MDT',
		offset: -6,
		isdst: true,
		text: '(UTC-07:00) Mountain Time (US & Canada)',
		utc: [
			'America/Boise',
			'America/Cambridge_Bay',
			'America/Denver',
			'America/Edmonton',
			'America/Inuvik',
			'America/Ojinaga',
			'America/Yellowknife',
			'MST7MDT',
		],
	},
	{
		value: 'Central America Standard Time',
		abbr: 'CAST',
		offset: -6,
		isdst: false,
		text: '(UTC-06:00) Central America',
		utc: [
			'America/Belize',
			'America/Costa_Rica',
			'America/El_Salvador',
			'America/Guatemala',
			'America/Managua',
			'America/Tegucigalpa',
			'Etc/GMT+6',
			'Pacific/Galapagos',
		],
	},
	{
		value: 'Central Standard Time',
		abbr: 'CDT',
		offset: -5,
		isdst: true,
		text: '(UTC-06:00) Central Time (US & Canada)',
		utc: [
			'America/Chicago',
			'America/Indiana/Knox',
			'America/Indiana/Tell_City',
			'America/Matamoros',
			'America/Menominee',
			'America/North_Dakota/Beulah',
			'America/North_Dakota/Center',
			'America/North_Dakota/New_Salem',
			'America/Rainy_River',
			'America/Rankin_Inlet',
			'America/Resolute',
			'America/Winnipeg',
			'CST6CDT',
		],
	},
	{
		value: 'Central Standard Time (Mexico)',
		abbr: 'CDT',
		offset: -5,
		isdst: true,
		text: '(UTC-06:00) Guadalajara, Mexico City, Monterrey',
		utc: ['America/Bahia_Banderas', 'America/Cancun', 'America/Merida', 'America/Mexico_City', 'America/Monterrey'],
	},
	{
		value: 'Canada Central Standard Time',
		abbr: 'CCST',
		offset: -6,
		isdst: false,
		text: '(UTC-06:00) Saskatchewan',
		utc: ['America/Regina', 'America/Swift_Current'],
	},
	{
		value: 'SA Pacific Standard Time',
		abbr: 'SPST',
		offset: -5,
		isdst: false,
		text: '(UTC-05:00) Bogota, Lima, Quito',
		utc: [
			'America/Bogota',
			'America/Cayman',
			'America/Coral_Harbour',
			'America/Eirunepe',
			'America/Guayaquil',
			'America/Jamaica',
			'America/Lima',
			'America/Panama',
			'America/Rio_Branco',
			'Etc/GMT+5',
		],
	},
	{
		value: 'Eastern Standard Time',
		abbr: 'EDT',
		offset: -4,
		isdst: true,
		text: '(UTC-05:00) Eastern Time (US & Canada)',
		utc: [
			'America/Detroit',
			'America/Havana',
			'America/Indiana/Petersburg',
			'America/Indiana/Vincennes',
			'America/Indiana/Winamac',
			'America/Iqaluit',
			'America/Kentucky/Monticello',
			'America/Louisville',
			'America/Montreal',
			'America/Nassau',
			'America/New_York',
			'America/Nipigon',
			'America/Pangnirtung',
			'America/Port-au-Prince',
			'America/Thunder_Bay',
			'America/Toronto',
			'EST5EDT',
		],
	},
	{
		value: 'US Eastern Standard Time',
		abbr: 'UEDT',
		offset: -4,
		isdst: true,
		text: '(UTC-05:00) Indiana (East)',
		utc: ['America/Indiana/Marengo', 'America/Indiana/Vevay', 'America/Indianapolis'],
	},
	{
		value: 'Venezuela Standard Time',
		abbr: 'VST',
		offset: -4.5,
		isdst: false,
		text: '(UTC-04:30) Caracas',
		utc: ['America/Caracas'],
	},
	{
		value: 'Paraguay Standard Time',
		abbr: 'PYT',
		offset: -4,
		isdst: false,
		text: '(UTC-04:00) Asuncion',
		utc: ['America/Asuncion'],
	},
	{
		value: 'Atlantic Standard Time',
		abbr: 'ADT',
		offset: -3,
		isdst: true,
		text: '(UTC-04:00) Atlantic Time (Canada)',
		utc: [
			'America/Glace_Bay',
			'America/Goose_Bay',
			'America/Halifax',
			'America/Moncton',
			'America/Thule',
			'Atlantic/Bermuda',
		],
	},
	{
		value: 'Central Brazilian Standard Time',
		abbr: 'CBST',
		offset: -4,
		isdst: false,
		text: '(UTC-04:00) Cuiaba',
		utc: ['America/Campo_Grande', 'America/Cuiaba'],
	},
	{
		value: 'SA Western Standard Time',
		abbr: 'SWST',
		offset: -4,
		isdst: false,
		text: '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
		utc: [
			'America/Anguilla',
			'America/Antigua',
			'America/Aruba',
			'America/Barbados',
			'America/Blanc-Sablon',
			'America/Boa_Vista',
			'America/Curacao',
			'America/Dominica',
			'America/Grand_Turk',
			'America/Grenada',
			'America/Guadeloupe',
			'America/Guyana',
			'America/Kralendijk',
			'America/La_Paz',
			'America/Lower_Princes',
			'America/Manaus',
			'America/Marigot',
			'America/Martinique',
			'America/Montserrat',
			'America/Port_of_Spain',
			'America/Porto_Velho',
			'America/Puerto_Rico',
			'America/Santo_Domingo',
			'America/St_Barthelemy',
			'America/St_Kitts',
			'America/St_Lucia',
			'America/St_Thomas',
			'America/St_Vincent',
			'America/Tortola',
			'Etc/GMT+4',
		],
	},
	{
		value: 'Pacific SA Standard Time',
		abbr: 'PSST',
		offset: -4,
		isdst: false,
		text: '(UTC-04:00) Santiago',
		utc: ['America/Santiago', 'Antarctica/Palmer'],
	},
	{
		value: 'Newfoundland Standard Time',
		abbr: 'NDT',
		offset: -2.5,
		isdst: true,
		text: '(UTC-03:30) Newfoundland',
		utc: ['America/St_Johns'],
	},
	{
		value: 'E. South America Standard Time',
		abbr: 'ESAST',
		offset: -3,
		isdst: false,
		text: '(UTC-03:00) Brasilia',
		utc: ['America/Sao_Paulo'],
	},
	{
		value: 'Argentina Standard Time',
		abbr: 'AST',
		offset: -3,
		isdst: false,
		text: '(UTC-03:00) Buenos Aires',
		utc: [
			'America/Argentina/La_Rioja',
			'America/Argentina/Rio_Gallegos',
			'America/Argentina/Salta',
			'America/Argentina/San_Juan',
			'America/Argentina/San_Luis',
			'America/Argentina/Tucuman',
			'America/Argentina/Ushuaia',
			'America/Buenos_Aires',
			'America/Catamarca',
			'America/Cordoba',
			'America/Jujuy',
			'America/Mendoza',
		],
	},
	{
		value: 'SA Eastern Standard Time',
		abbr: 'SEST',
		offset: -3,
		isdst: false,
		text: '(UTC-03:00) Cayenne, Fortaleza',
		utc: [
			'America/Araguaina',
			'America/Belem',
			'America/Cayenne',
			'America/Fortaleza',
			'America/Maceio',
			'America/Paramaribo',
			'America/Recife',
			'America/Santarem',
			'Antarctica/Rothera',
			'Atlantic/Stanley',
			'Etc/GMT+3',
		],
	},
	{
		value: 'Greenland Standard Time',
		abbr: 'GDT',
		offset: -3,
		isdst: true,
		text: '(UTC-03:00) Greenland',
		utc: ['America/Godthab'],
	},
	{
		value: 'Montevideo Standard Time',
		abbr: 'MST',
		offset: -3,
		isdst: false,
		text: '(UTC-03:00) Montevideo',
		utc: ['America/Montevideo'],
	},
	{
		value: 'Bahia Standard Time',
		abbr: 'BST',
		offset: -3,
		isdst: false,
		text: '(UTC-03:00) Salvador',
		utc: ['America/Bahia'],
	},
	{
		value: 'UTC-02',
		abbr: 'U',
		offset: -2,
		isdst: false,
		text: '(UTC-02:00) Coordinated Universal Time-02',
		utc: ['America/Noronha', 'Atlantic/South_Georgia', 'Etc/GMT+2'],
	},
	{
		value: 'Mid-Atlantic Standard Time',
		abbr: 'MDT',
		offset: -1,
		isdst: true,
		text: '(UTC-02:00) Mid-Atlantic - Old',
		utc: [],
	},
	{
		value: 'Azores Standard Time',
		abbr: 'ADT',
		offset: 0,
		isdst: true,
		text: '(UTC-01:00) Azores',
		utc: ['America/Scoresbysund', 'Atlantic/Azores'],
	},
	{
		value: 'Cape Verde Standard Time',
		abbr: 'CVST',
		offset: -1,
		isdst: false,
		text: '(UTC-01:00) Cape Verde Is.',
		utc: ['Atlantic/Cape_Verde', 'Etc/GMT+1'],
	},
	{
		value: 'Morocco Standard Time',
		abbr: 'MDT',
		offset: 1,
		isdst: true,
		text: '(UTC) Casablanca',
		utc: ['Africa/Casablanca', 'Africa/El_Aaiun'],
	},
	{
		value: 'UTC',
		abbr: 'UTC',
		offset: 0,
		isdst: false,
		text: '(UTC) Coordinated Universal Time',
		utc: ['America/Danmarkshavn', 'Etc/GMT'],
	},
	{
		value: 'GMT Standard Time',
		abbr: 'GMT',
		offset: 0,
		isdst: false,
		text: '(UTC) Edinburgh, London',
		utc: ['Europe/Isle_of_Man', 'Europe/Guernsey', 'Europe/Jersey', 'Europe/London'],
	},
	{
		value: 'British Summer Time',
		abbr: 'BST',
		offset: 1,
		isdst: true,
		text: '(UTC+01:00) Edinburgh, London',
		utc: ['Europe/Isle_of_Man', 'Europe/Guernsey', 'Europe/Jersey', 'Europe/London'],
	},
	{
		value: 'GMT Standard Time',
		abbr: 'GDT',
		offset: 1,
		isdst: true,
		text: '(UTC) Dublin, Lisbon',
		utc: ['Atlantic/Canary', 'Atlantic/Faeroe', 'Atlantic/Madeira', 'Europe/Dublin', 'Europe/Lisbon'],
	},
	{
		value: 'Greenwich Standard Time',
		abbr: 'GST',
		offset: 0,
		isdst: false,
		text: '(UTC) Monrovia, Reykjavik',
		utc: [
			'Africa/Abidjan',
			'Africa/Accra',
			'Africa/Bamako',
			'Africa/Banjul',
			'Africa/Bissau',
			'Africa/Conakry',
			'Africa/Dakar',
			'Africa/Freetown',
			'Africa/Lome',
			'Africa/Monrovia',
			'Africa/Nouakchott',
			'Africa/Ouagadougou',
			'Africa/Sao_Tome',
			'Atlantic/Reykjavik',
			'Atlantic/St_Helena',
		],
	},
	{
		value: 'W. Europe Standard Time',
		abbr: 'WEDT',
		offset: 2,
		isdst: true,
		text: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
		utc: [
			'Arctic/Longyearbyen',
			'Europe/Amsterdam',
			'Europe/Andorra',
			'Europe/Berlin',
			'Europe/Busingen',
			'Europe/Gibraltar',
			'Europe/Luxembourg',
			'Europe/Malta',
			'Europe/Monaco',
			'Europe/Oslo',
			'Europe/Rome',
			'Europe/San_Marino',
			'Europe/Stockholm',
			'Europe/Vaduz',
			'Europe/Vatican',
			'Europe/Vienna',
			'Europe/Zurich',
		],
	},
	{
		value: 'Central Europe Standard Time',
		abbr: 'CEDT',
		offset: 2,
		isdst: true,
		text: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
		utc: [
			'Europe/Belgrade',
			'Europe/Bratislava',
			'Europe/Budapest',
			'Europe/Ljubljana',
			'Europe/Podgorica',
			'Europe/Prague',
			'Europe/Tirane',
		],
	},
	{
		value: 'Romance Standard Time',
		abbr: 'RDT',
		offset: 2,
		isdst: true,
		text: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
		utc: ['Africa/Ceuta', 'Europe/Brussels', 'Europe/Copenhagen', 'Europe/Madrid', 'Europe/Paris'],
	},
	{
		value: 'Central European Standard Time',
		abbr: 'CEDT',
		offset: 2,
		isdst: true,
		text: '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
		utc: ['Europe/Sarajevo', 'Europe/Skopje', 'Europe/Warsaw', 'Europe/Zagreb'],
	},
	{
		value: 'W. Central Africa Standard Time',
		abbr: 'WCAST',
		offset: 1,
		isdst: false,
		text: '(UTC+01:00) West Central Africa',
		utc: [
			'Africa/Algiers',
			'Africa/Bangui',
			'Africa/Brazzaville',
			'Africa/Douala',
			'Africa/Kinshasa',
			'Africa/Lagos',
			'Africa/Libreville',
			'Africa/Luanda',
			'Africa/Malabo',
			'Africa/Ndjamena',
			'Africa/Niamey',
			'Africa/Porto-Novo',
			'Africa/Tunis',
			'Etc/GMT-1',
		],
	},
	{
		value: 'Namibia Standard Time',
		abbr: 'NST',
		offset: 1,
		isdst: false,
		text: '(UTC+01:00) Windhoek',
		utc: ['Africa/Windhoek'],
	},
	{
		value: 'GTB Standard Time',
		abbr: 'GDT',
		offset: 3,
		isdst: true,
		text: '(UTC+02:00) Athens, Bucharest',
		utc: ['Asia/Nicosia', 'Europe/Athens', 'Europe/Bucharest', 'Europe/Chisinau'],
	},
	{
		value: 'Middle East Standard Time',
		abbr: 'MEDT',
		offset: 3,
		isdst: true,
		text: '(UTC+02:00) Beirut',
		utc: ['Asia/Beirut'],
	},
	{
		value: 'Egypt Standard Time',
		abbr: 'EST',
		offset: 2,
		isdst: false,
		text: '(UTC+02:00) Cairo',
		utc: ['Africa/Cairo'],
	},
	{
		value: 'Syria Standard Time',
		abbr: 'SDT',
		offset: 3,
		isdst: true,
		text: '(UTC+02:00) Damascus',
		utc: ['Asia/Damascus'],
	},
	{
		value: 'E. Europe Standard Time',
		abbr: 'EEDT',
		offset: 3,
		isdst: true,
		text: '(UTC+02:00) E. Europe',
		utc: [
			'Asia/Nicosia',
			'Europe/Athens',
			'Europe/Bucharest',
			'Europe/Chisinau',
			'Europe/Helsinki',
			'Europe/Kiev',
			'Europe/Mariehamn',
			'Europe/Nicosia',
			'Europe/Riga',
			'Europe/Sofia',
			'Europe/Tallinn',
			'Europe/Uzhgorod',
			'Europe/Vilnius',
			'Europe/Zaporozhye',
		],
	},
	{
		value: 'South Africa Standard Time',
		abbr: 'SAST',
		offset: 2,
		isdst: false,
		text: '(UTC+02:00) Harare, Pretoria',
		utc: [
			'Africa/Blantyre',
			'Africa/Bujumbura',
			'Africa/Gaborone',
			'Africa/Harare',
			'Africa/Johannesburg',
			'Africa/Kigali',
			'Africa/Lubumbashi',
			'Africa/Lusaka',
			'Africa/Maputo',
			'Africa/Maseru',
			'Africa/Mbabane',
			'Etc/GMT-2',
		],
	},
	{
		value: 'FLE Standard Time',
		abbr: 'FDT',
		offset: 3,
		isdst: true,
		text: '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
		utc: [
			'Europe/Helsinki',
			'Europe/Kiev',
			'Europe/Mariehamn',
			'Europe/Riga',
			'Europe/Sofia',
			'Europe/Tallinn',
			'Europe/Uzhgorod',
			'Europe/Vilnius',
			'Europe/Zaporozhye',
		],
	},
	{
		value: 'Turkey Standard Time',
		abbr: 'TDT',
		offset: 3,
		isdst: false,
		text: '(UTC+03:00) Istanbul',
		utc: ['Europe/Istanbul'],
	},
	{
		value: 'Israel Standard Time',
		abbr: 'JDT',
		offset: 3,
		isdst: true,
		text: '(UTC+02:00) Jerusalem',
		utc: ['Asia/Jerusalem'],
	},
	{
		value: 'Libya Standard Time',
		abbr: 'LST',
		offset: 2,
		isdst: false,
		text: '(UTC+02:00) Tripoli',
		utc: ['Africa/Tripoli'],
	},
	{
		value: 'Jordan Standard Time',
		abbr: 'JST',
		offset: 3,
		isdst: false,
		text: '(UTC+03:00) Amman',
		utc: ['Asia/Amman'],
	},
	{
		value: 'Arabic Standard Time',
		abbr: 'AST',
		offset: 3,
		isdst: false,
		text: '(UTC+03:00) Baghdad',
		utc: ['Asia/Baghdad'],
	},
	{
		value: 'Kaliningrad Standard Time',
		abbr: 'KST',
		offset: 3,
		isdst: false,
		text: '(UTC+02:00) Kaliningrad',
		utc: ['Europe/Kaliningrad'],
	},
	{
		value: 'Arab Standard Time',
		abbr: 'AST',
		offset: 3,
		isdst: false,
		text: '(UTC+03:00) Kuwait, Riyadh',
		utc: ['Asia/Aden', 'Asia/Bahrain', 'Asia/Kuwait', 'Asia/Qatar', 'Asia/Riyadh'],
	},
	{
		value: 'E. Africa Standard Time',
		abbr: 'EAST',
		offset: 3,
		isdst: false,
		text: '(UTC+03:00) Nairobi',
		utc: [
			'Africa/Addis_Ababa',
			'Africa/Asmera',
			'Africa/Dar_es_Salaam',
			'Africa/Djibouti',
			'Africa/Juba',
			'Africa/Kampala',
			'Africa/Khartoum',
			'Africa/Mogadishu',
			'Africa/Nairobi',
			'Antarctica/Syowa',
			'Etc/GMT-3',
			'Indian/Antananarivo',
			'Indian/Comoro',
			'Indian/Mayotte',
		],
	},
	{
		value: 'Moscow Standard Time',
		abbr: 'MSK',
		offset: 3,
		isdst: false,
		text: '(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk',
		utc: ['Europe/Kirov', 'Europe/Moscow', 'Europe/Simferopol', 'Europe/Volgograd', 'Europe/Minsk'],
	},
	{
		value: 'Samara Time',
		abbr: 'SAMT',
		offset: 4,
		isdst: false,
		text: '(UTC+04:00) Samara, Ulyanovsk, Saratov',
		utc: ['Europe/Astrakhan', 'Europe/Samara', 'Europe/Ulyanovsk'],
	},
	{
		value: 'Iran Standard Time',
		abbr: 'IDT',
		offset: 4.5,
		isdst: true,
		text: '(UTC+03:30) Tehran',
		utc: ['Asia/Tehran'],
	},
	{
		value: 'Arabian Standard Time',
		abbr: 'AST',
		offset: 4,
		isdst: false,
		text: '(UTC+04:00) Abu Dhabi, Muscat',
		utc: ['Asia/Dubai', 'Asia/Muscat', 'Etc/GMT-4'],
	},
	{
		value: 'Azerbaijan Standard Time',
		abbr: 'ADT',
		offset: 5,
		isdst: true,
		text: '(UTC+04:00) Baku',
		utc: ['Asia/Baku'],
	},
	{
		value: 'Mauritius Standard Time',
		abbr: 'MST',
		offset: 4,
		isdst: false,
		text: '(UTC+04:00) Port Louis',
		utc: ['Indian/Mahe', 'Indian/Mauritius', 'Indian/Reunion'],
	},
	{
		value: 'Georgian Standard Time',
		abbr: 'GET',
		offset: 4,
		isdst: false,
		text: '(UTC+04:00) Tbilisi',
		utc: ['Asia/Tbilisi'],
	},
	{
		value: 'Caucasus Standard Time',
		abbr: 'CST',
		offset: 4,
		isdst: false,
		text: '(UTC+04:00) Yerevan',
		utc: ['Asia/Yerevan'],
	},
	{
		value: 'Afghanistan Standard Time',
		abbr: 'AST',
		offset: 4.5,
		isdst: false,
		text: '(UTC+04:30) Kabul',
		utc: ['Asia/Kabul'],
	},
	{
		value: 'West Asia Standard Time',
		abbr: 'WAST',
		offset: 5,
		isdst: false,
		text: '(UTC+05:00) Ashgabat, Tashkent',
		utc: [
			'Antarctica/Mawson',
			'Asia/Aqtau',
			'Asia/Aqtobe',
			'Asia/Ashgabat',
			'Asia/Dushanbe',
			'Asia/Oral',
			'Asia/Samarkand',
			'Asia/Tashkent',
			'Etc/GMT-5',
			'Indian/Kerguelen',
			'Indian/Maldives',
		],
	},
	{
		value: 'Yekaterinburg Time',
		abbr: 'YEKT',
		offset: 5,
		isdst: false,
		text: '(UTC+05:00) Yekaterinburg',
		utc: ['Asia/Yekaterinburg'],
	},
	{
		value: 'Pakistan Standard Time',
		abbr: 'PKT',
		offset: 5,
		isdst: false,
		text: '(UTC+05:00) Islamabad, Karachi',
		utc: ['Asia/Karachi'],
	},
	{
		value: 'India Standard Time',
		abbr: 'IST',
		offset: 5.5,
		isdst: false,
		text: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
		utc: ['Asia/Kolkata', 'Asia/Calcutta'],
	},
	{
		value: 'Sri Lanka Standard Time',
		abbr: 'SLST',
		offset: 5.5,
		isdst: false,
		text: '(UTC+05:30) Sri Jayawardenepura',
		utc: ['Asia/Colombo'],
	},
	{
		value: 'Nepal Standard Time',
		abbr: 'NST',
		offset: 5.75,
		isdst: false,
		text: '(UTC+05:45) Kathmandu',
		utc: ['Asia/Kathmandu'],
	},
	{
		value: 'Central Asia Standard Time',
		abbr: 'CAST',
		offset: 6,
		isdst: false,
		text: '(UTC+06:00) Nur-Sultan (Astana)',
		utc: [
			'Antarctica/Vostok',
			'Asia/Almaty',
			'Asia/Bishkek',
			'Asia/Qyzylorda',
			'Asia/Urumqi',
			'Etc/GMT-6',
			'Indian/Chagos',
		],
	},
	{
		value: 'Bangladesh Standard Time',
		abbr: 'BST',
		offset: 6,
		isdst: false,
		text: '(UTC+06:00) Dhaka',
		utc: ['Asia/Dhaka', 'Asia/Thimphu'],
	},
	{
		value: 'Myanmar Standard Time',
		abbr: 'MST',
		offset: 6.5,
		isdst: false,
		text: '(UTC+06:30) Yangon (Rangoon)',
		utc: ['Asia/Rangoon', 'Indian/Cocos'],
	},
	{
		value: 'SE Asia Standard Time',
		abbr: 'SAST',
		offset: 7,
		isdst: false,
		text: '(UTC+07:00) Bangkok, Hanoi, Jakarta',
		utc: [
			'Antarctica/Davis',
			'Asia/Bangkok',
			'Asia/Hovd',
			'Asia/Jakarta',
			'Asia/Phnom_Penh',
			'Asia/Pontianak',
			'Asia/Saigon',
			'Asia/Vientiane',
			'Etc/GMT-7',
			'Indian/Christmas',
		],
	},
	{
		value: 'N. Central Asia Standard Time',
		abbr: 'NCAST',
		offset: 7,
		isdst: false,
		text: '(UTC+07:00) Novosibirsk',
		utc: ['Asia/Novokuznetsk', 'Asia/Novosibirsk', 'Asia/Omsk'],
	},
	{
		value: 'China Standard Time',
		abbr: 'CST',
		offset: 8,
		isdst: false,
		text: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
		utc: ['Asia/Hong_Kong', 'Asia/Macau', 'Asia/Shanghai'],
	},
	{
		value: 'North Asia Standard Time',
		abbr: 'NAST',
		offset: 8,
		isdst: false,
		text: '(UTC+08:00) Krasnoyarsk',
		utc: ['Asia/Krasnoyarsk'],
	},
	{
		value: 'Singapore Standard Time',
		abbr: 'MPST',
		offset: 8,
		isdst: false,
		text: '(UTC+08:00) Kuala Lumpur, Singapore',
		utc: [
			'Asia/Brunei',
			'Asia/Kuala_Lumpur',
			'Asia/Kuching',
			'Asia/Makassar',
			'Asia/Manila',
			'Asia/Singapore',
			'Etc/GMT-8',
		],
	},
	{
		value: 'W. Australia Standard Time',
		abbr: 'WAST',
		offset: 8,
		isdst: false,
		text: '(UTC+08:00) Perth',
		utc: ['Antarctica/Casey', 'Australia/Perth'],
	},
	{
		value: 'Taipei Standard Time',
		abbr: 'TST',
		offset: 8,
		isdst: false,
		text: '(UTC+08:00) Taipei',
		utc: ['Asia/Taipei'],
	},
	{
		value: 'Ulaanbaatar Standard Time',
		abbr: 'UST',
		offset: 8,
		isdst: false,
		text: '(UTC+08:00) Ulaanbaatar',
		utc: ['Asia/Choibalsan', 'Asia/Ulaanbaatar'],
	},
	{
		value: 'North Asia East Standard Time',
		abbr: 'NAEST',
		offset: 8,
		isdst: false,
		text: '(UTC+08:00) Irkutsk',
		utc: ['Asia/Irkutsk'],
	},
	{
		value: 'Japan Standard Time',
		abbr: 'JST',
		offset: 9,
		isdst: false,
		text: '(UTC+09:00) Osaka, Sapporo, Tokyo',
		utc: ['Asia/Dili', 'Asia/Jayapura', 'Asia/Tokyo', 'Etc/GMT-9', 'Pacific/Palau'],
	},
	{
		value: 'Korea Standard Time',
		abbr: 'KST',
		offset: 9,
		isdst: false,
		text: '(UTC+09:00) Seoul',
		utc: ['Asia/Pyongyang', 'Asia/Seoul'],
	},
	{
		value: 'Cen. Australia Standard Time',
		abbr: 'CAST',
		offset: 9.5,
		isdst: false,
		text: '(UTC+09:30) Adelaide',
		utc: ['Australia/Adelaide', 'Australia/Broken_Hill'],
	},
	{
		value: 'AUS Central Standard Time',
		abbr: 'ACST',
		offset: 9.5,
		isdst: false,
		text: '(UTC+09:30) Darwin',
		utc: ['Australia/Darwin'],
	},
	{
		value: 'E. Australia Standard Time',
		abbr: 'EAST',
		offset: 10,
		isdst: false,
		text: '(UTC+10:00) Brisbane',
		utc: ['Australia/Brisbane', 'Australia/Lindeman'],
	},
	{
		value: 'AUS Eastern Standard Time',
		abbr: 'AEST',
		offset: 10,
		isdst: false,
		text: '(UTC+10:00) Canberra, Melbourne, Sydney',
		utc: ['Australia/Melbourne', 'Australia/Sydney'],
	},
	{
		value: 'West Pacific Standard Time',
		abbr: 'WPST',
		offset: 10,
		isdst: false,
		text: '(UTC+10:00) Guam, Port Moresby',
		utc: [
			'Antarctica/DumontDUrville',
			'Etc/GMT-10',
			'Pacific/Guam',
			'Pacific/Port_Moresby',
			'Pacific/Saipan',
			'Pacific/Truk',
		],
	},
	{
		value: 'Tasmania Standard Time',
		abbr: 'TST',
		offset: 10,
		isdst: false,
		text: '(UTC+10:00) Hobart',
		utc: ['Australia/Currie', 'Australia/Hobart'],
	},
	{
		value: 'Yakutsk Standard Time',
		abbr: 'YST',
		offset: 9,
		isdst: false,
		text: '(UTC+09:00) Yakutsk',
		utc: ['Asia/Chita', 'Asia/Khandyga', 'Asia/Yakutsk'],
	},
	{
		value: 'Central Pacific Standard Time',
		abbr: 'CPST',
		offset: 11,
		isdst: false,
		text: '(UTC+11:00) Solomon Is., New Caledonia',
		utc: [
			'Antarctica/Macquarie',
			'Etc/GMT-11',
			'Pacific/Efate',
			'Pacific/Guadalcanal',
			'Pacific/Kosrae',
			'Pacific/Noumea',
			'Pacific/Ponape',
		],
	},
	{
		value: 'Vladivostok Standard Time',
		abbr: 'VST',
		offset: 11,
		isdst: false,
		text: '(UTC+11:00) Vladivostok',
		utc: ['Asia/Sakhalin', 'Asia/Ust-Nera', 'Asia/Vladivostok'],
	},
	{
		value: 'New Zealand Standard Time',
		abbr: 'NZST',
		offset: 12,
		isdst: false,
		text: '(UTC+12:00) Auckland, Wellington',
		utc: ['Antarctica/McMurdo', 'Pacific/Auckland'],
	},
	{
		value: 'UTC+12',
		abbr: 'U',
		offset: 12,
		isdst: false,
		text: '(UTC+12:00) Coordinated Universal Time+12',
		utc: [
			'Etc/GMT-12',
			'Pacific/Funafuti',
			'Pacific/Kwajalein',
			'Pacific/Majuro',
			'Pacific/Nauru',
			'Pacific/Tarawa',
			'Pacific/Wake',
			'Pacific/Wallis',
		],
	},
	{
		value: 'Fiji Standard Time',
		abbr: 'FST',
		offset: 12,
		isdst: false,
		text: '(UTC+12:00) Fiji',
		utc: ['Pacific/Fiji'],
	},
	{
		value: 'Magadan Standard Time',
		abbr: 'MST',
		offset: 12,
		isdst: false,
		text: '(UTC+12:00) Magadan',
		utc: ['Asia/Anadyr', 'Asia/Kamchatka', 'Asia/Magadan', 'Asia/Srednekolymsk'],
	},
	{
		value: 'Kamchatka Standard Time',
		abbr: 'KDT',
		offset: 13,
		isdst: true,
		text: '(UTC+12:00) Petropavlovsk-Kamchatsky - Old',
		utc: ['Asia/Kamchatka'],
	},
	{
		value: 'Tonga Standard Time',
		abbr: 'TST',
		offset: 13,
		isdst: false,
		text: "(UTC+13:00) Nuku'alofa",
		utc: ['Etc/GMT-13', 'Pacific/Enderbury', 'Pacific/Fakaofo', 'Pacific/Tongatapu'],
	},
	{
		value: 'Samoa Standard Time',
		abbr: 'SST',
		offset: 13,
		isdst: false,
		text: '(UTC+13:00) Samoa',
		utc: ['Pacific/Apia'],
	},
];
