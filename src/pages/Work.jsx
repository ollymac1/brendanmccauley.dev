import MainLayout from '../components/mainLayout/MainLayout';
import { Body } from './Page.styles';
import PortfolioList from '../components/portfolioList/PortfolioList';
import Button from '../components/button/Button';

function Work() {
	return (
		<MainLayout>
			<Body>
				<PortfolioList />
				<Button to='/about'>About Me</Button>
			</Body>
		</MainLayout>
	);
}

export default Work;
