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
			'HYVE is a gym renting private studios by the hour. Everything on this website is my work; I created the brand idendity, UI, UX, built the platform with React.js on the frontend, Firebase on the backend and Redux for state management. This production app features authentication, booking/availability logic, stripe gateway integration, mandrill transactional email integtation and Node.js cloud functions. ',
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
			"Foxtails is a property marketplace app I've build from the ground up using React on the frontend and firebase on the backend. Users are authenticated, can create, edit and delete their own listings and 'wishlist' property of interest. There are some features still under construction. ",
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
			'A web app combining React and Firebase v9 for storing customer reviews. Create update and delete reviews, synced in real-time with firebase onSnapshot.',
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
			'odist is a beauty eCommerce business run by my wife. Early on I had a major role in developing the brand aesthetic and visual identity for the website and marketing materials. Some CSS from a develpment perspective but largely managed by shopify templates.     ',
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
			'Welcome to my pesonal website. Build with React and framer motion for simple animations. Modular CSS powered by styled components',
		firebase: false,
		react: true,
		redux: false,
		sass: false,
		styled: true,
		photoshop: false,
		framer: true,
	},
];
