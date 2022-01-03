import {
	EnterpriseContainer,
	PricingTableContainer,
	PricingTableStyles,
} from './PricingTable.styles';
import { products } from './products';
import PricingOption from './PricingOption/PricingOption';
import { Fade } from 'react-awesome-reveal';

function PricingTable() {
	return (
		<PricingTableContainer>
			<PricingTableStyles>
				<Fade cascade delay={500} triggerOnce>
					{products.map((product, index) => (
						<PricingOption key={index} product={product} />
					))}

					<EnterpriseContainer>
						<div>Save More</div>
						<div>With Enterprise</div>
						<div>Custom pricing for your company with more than 20 drivers</div>
						<div>contact us</div>
					</EnterpriseContainer>
				</Fade>
			</PricingTableStyles>
			<p>
				Our solution is only available to registered UK businesses at the
				moment.
			</p>
			<p> See network charging rates here.</p>
		</PricingTableContainer>
	);
}

export default PricingTable;
