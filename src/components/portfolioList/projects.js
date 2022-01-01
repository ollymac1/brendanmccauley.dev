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
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut nesciunt cupiditate consequatur eos quae officia deserunt harum eveniet commodi dignissimos? Distinctio quae obcaecati hic perspiciatis totam sapiente ratione expedita delectus.',
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
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut nesciunt cupiditate consequatur eos quae officia deserunt harum eveniet commodi dignissimos? Distinctio quae obcaecati hic perspiciatis totam sapiente ratione expedita delectus.',
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
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut nesciunt cupiditate consequatur eos quae officia deserunt harum eveniet commodi dignissimos? Distinctio quae obcaecati hic perspiciatis totam sapiente ratione expedita delectus.',
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
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut nesciunt cupiditate consequatur eos quae officia deserunt harum eveniet commodi dignissimos? Distinctio quae obcaecati hic perspiciatis totam sapiente ratione expedita delectus.',
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
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut nesciunt cupiditate consequatur eos quae officia deserunt harum eveniet commodi dignissimos? Distinctio quae obcaecati hic perspiciatis totam sapiente ratione expedita delectus.',
		firebase: false,
		react: true,
		redux: false,
		sass: false,
		styled: true,
		photoshop: false,
		framer: true,
	},
];
