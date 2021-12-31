import { HeaderStyles, BrandingContainer } from './Header.styles';
import FoxLogo from '../foxLogo/FoxLogo';

function Header() {
	return (
		<HeaderStyles>
			<BrandingContainer>
				<FoxLogo height={`70px`} mb={`30px`} />
				<h1>Brendan McCauley</h1>
				<h4>Full Stack Developer</h4>
			</BrandingContainer>
		</HeaderStyles>
	);
}

export default Header;
