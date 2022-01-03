import MainLayout from '../components/mainLayout/MainLayout';
import { Body } from './Page.styles';
import PortfolioList from '../components/portfolioList/PortfolioList';
import Button from '../components/button/Button';
import Helmet from 'react-helmet';

function Work() {
	return (
		<MainLayout>
			<Helmet>
				<title>WORK | Brendan McCauley</title>
				<meta name='description' content='Brendan McCauley portfolio' />
			</Helmet>
			<Body>
				<PortfolioList />
				<Button to='/about'>About Me</Button>
			</Body>
		</MainLayout>
	);
}

export default Work;
