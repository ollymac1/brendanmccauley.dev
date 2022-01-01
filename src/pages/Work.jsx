import MainLayout from '../components/mainLayout/MainLayout';
import Search from '../components/search/Search';
import { Body } from './Page.styles';
import PortfolioList from '../components/portfolioList/PortfolioList';

function Work() {
	return (
		<MainLayout>
			<Body>
				<Search placeholder='Search by technology' />
				<PortfolioList />
			</Body>
		</MainLayout>
	);
}

export default Work;
