import hyve from '../../assets/img/portfolio/hyve.avif';
import foxtails from '../../assets/img/portfolio/foxtails.avif';
import feedback from '../../assets/img/portfolio/feedback.avif';
import bm from '../../assets/img/portfolio/bm-dev.avif';
import odist from '../../assets/img/portfolio/odist.avif';

export const projects = [
	{
		title: 'HYVE Gym & Private Studios',
		img: `${hyve}`,
		link: 'https://www.trainhyve.com',
		github: '',
		description:
			'HYVE gym offers private studios for rent by the hour. I worked extensively on this project to create the brand/visual identity, UI, UX, built the platform with React.js on the frontend, Firebase on the backend and Redux for state management. This production app features authentication, booking/availability logic, Stripe gateway integration, mandrill transactional email and Node.js cloud functions. ',
		firebase: true,
		react: true,
		redux: true,
		sass: true,
		styled: false,
		photoshop: true,
	},
	{
		title: 'Foxtails Property',
		img: `${foxtails}`,
		link: 'https://thirsty-babbage-ed6e1d.netlify.app/',
		github: 'https://github.com/ollymac1/property-marketplace',
		description:
			"Foxtails is a property marketplace app I built from the ground up using React on the frontend and Firebase v9 on the backend. Authenticated users are able to create, edit, and delete their own listings and 'wishlist' properties of interest. There are some features still under construction.",
		firebase: true,
		react: true,
		redux: false,
		sass: false,
		styled: true,
		photoshop: true,
	},

	{
		title: 'Feedback App',
		img: `${feedback}`,
		link: 'https://distracted-bartik-5f3c8f.netlify.app/',
		github: 'https://github.com/ollymac1/feedback-app',
		description:
			'A web app combining React and Firebase v9 for storing customer reviews. Create update and delete reviews, synced in real-time with Firebase onSnapshot.',
		firebase: true,
		react: true,
		redux: false,
		sass: false,
		styled: false,
		photoshop: false,
	},
	{
		title: 'odist.com',
		img: `${odist}`,
		link: 'https://www.odist.com',
		github: '',
		description:
			"odist is my wife's beauty eCommerce business. Early on, I played a critical role in establishing the brand aesthetic and visual identity for the website and marketing materials. There is some CSS involved from a development perspective, but most of it is handled by Shopify's templates.",
		firebase: false,
		react: false,
		redux: false,
		sass: false,
		styled: false,
		photoshop: true,
		framer: false,
		shopify: true,
	},
	{
		title: 'Brendan McCauley.dev',
		img: `${bm}`,
		link: 'https://brendanmccauley.dev',
		github: 'https://github.com/ollymac1/brendanmccauley.dev',
		description:
			'Welcome to my personal website. Build with React and framer motion for simple animations. Modular CSS powered by styled components.',
		firebase: false,
		react: true,
		redux: false,
		sass: false,
		styled: true,
		photoshop: false,
		framer: true,
	},
];
