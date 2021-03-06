import MainLayout from '../components/mainLayout/MainLayout';
import Helmet from 'react-helmet';
import Button from '../components/button/Button';
import { BodyNarrow, ButtonGroupStyles, ImgStyles } from './Page.styles';
import profile from '../assets/img/bm_profile.webp';

function Index() {
	return (
		<MainLayout animated>
			<Helmet>
				<title>Brendan McCauley</title>
				<meta name='description' content='Brendan McCauley React Developer' />
			</Helmet>
			<BodyNarrow>
				<ImgStyles
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2.4 }}
				>
					<img src={profile} alt='' />
				</ImgStyles>
				<ButtonGroupStyles
					initial={{ opacity: 0 }}
					animate={{
						translateY: [-50, 0],
						opacity: [0, 0, 1],
					}}
					transition={{ delay: 2.5 }}
				>
					<Button to='/about'>ABOUt Me</Button>
					<Button to='/work'>My Work</Button>
				</ButtonGroupStyles>
			</BodyNarrow>
		</MainLayout>
	);
}

export default Index;
