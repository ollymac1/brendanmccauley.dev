import Footer from '../footer/Footer';
import Header from '../header/Header';
import Helmet from 'react-helmet';
import { PricingContainer, BodyStyles, Announcement } from './Pricing.styles';
import Hero from '../hero/Hero';
import PricingTable from '../pricingTable/PricingTable';
import KeyPoints from '../keyPoints/KeyPoints';

function Pricing() {
	return (
		<>
			<Helmet>
				<title>PAUA Pricing</title>
				<meta name='description' content='Paua pricing demo' />
			</Helmet>
			<Header />
			<Hero />
			<Announcement>
				<h2>
					£300 of free charging to use in the first month of your membership
				</h2>
				<h3>
					Offer limited to the first 25 fleets who sign up until the end of Jan
					2022
				</h3>
			</Announcement>
			<PricingContainer>
				<BodyStyles>
					<PricingTable />
					<KeyPoints />
				</BodyStyles>
			</PricingContainer>
			<Footer />
		</>
	);
}

export default Pricing;
