import Card from '../card/card';
import {
	Features,
	SignUp,
	PricingOptionContainer,
	Title,
	Price,
	Footer,
} from './PricingOption.styles';

import './accordion.css';

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

function PricingOption({ product }) {
	return (
		<PricingOptionContainer>
			<Card>
				<Title>{product.title}</Title>
				<Price>
					<div>
						<span>£</span>
						{product.price}
						<p>per driver per month</p>
					</div>
					+
					<div>
						{product.serviceFee}
						<span>%</span>
						<p>transaction fee</p>
					</div>
				</Price>
				<Footer>
					<Features>
						<Accordion allowZeroExpanded>
							{product.attributes.map((attribute, index) => (
								<AccordionItem key={index}>
									<AccordionItemHeading>
										<AccordionItemButton>{attribute.title}</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>{attribute.body}</p>
									</AccordionItemPanel>
								</AccordionItem>
							))}
						</Accordion>
					</Features>
					<SignUp>
						<button>SIGN-UP</button>
					</SignUp>
				</Footer>
			</Card>
		</PricingOptionContainer>
	);
}

export default PricingOption;
