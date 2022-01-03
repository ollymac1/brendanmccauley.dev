import {
	FooterContainer,
	FooterContent,
	FooterLeft,
	FooterRight,
} from './Footer.styles';
import logo from '../../../../assets/img/paua/Paua_white.png';
import { AiOutlineMail } from 'react-icons/ai';

function Footer() {
	return (
		<FooterContainer>
			<FooterContent>
				<FooterLeft>
					<img src={logo} alt='Paua 2022' />
					<p>© PAUA TECH Limited. All rights reserved</p>
					<p>
						92 Station Road <br />
						Clacton On Sea
						<br />
						Essex
						<br />
						C015 1SG
						<br />
						United Kingdom
					</p>
				</FooterLeft>
				<FooterRight>
					<p>Company number: 12145853</p>
					<p>VAT number: 387 4960 40</p>
					<a href='mailto:info@pauatech.com'>
						<AiOutlineMail /> info@pauatech.com
					</a>
					<a href='/demo/paua'>Privacy Policy</a>
					<a href='/demo/paua'>Driver Terms & Conditions</a>
					<a href='/demo/paua'>Paua Business Terms & Conditions</a>
				</FooterRight>
			</FooterContent>
		</FooterContainer>
	);
}

export default Footer;
