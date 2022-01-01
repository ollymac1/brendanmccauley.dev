import MainLayout from '../components/mainLayout/MainLayout';
import Button from '../components/button/Button';
import { BodyStyles, ButtonGroupStyles, ImgStyles } from './Page.styles';
import profile from '../assets/img/bm_profile.webp';

function Index() {
	return (
		<MainLayout>
			<BodyStyles>
				<ImgStyles
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2.8 }}
				>
					<img src={profile} alt='' />
				</ImgStyles>
				<ButtonGroupStyles
					initial={{ opacity: 0 }}
					animate={{
						translateY: [-50, 0],
						opacity: [0, 0, 1],
					}}
					transition={{ delay: 3 }}
				>
					<Button to='/about'>ABOUt Me</Button>
					<Button to='/work'>My Work</Button>
				</ButtonGroupStyles>
			</BodyStyles>
		</MainLayout>
	);
}

export default Index;
