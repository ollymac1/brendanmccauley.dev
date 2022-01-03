import { HeaderContainer } from './Header.styles';
import logo from '../../../../assets/img/paua/Paua-50px.png';
function Header() {
	return (
		<HeaderContainer>
			<img src={logo} alt='Paua 2022' />
			<ul>
				<li>Fleets</li>
				<li>Prices</li>
				<li>Networks</li>
				<li>News</li>
				<li>About Us</li>
				<li>Jobs</li>
				<li>Contact Us</li>
			</ul>
			<div>
				<p>Sign-Up</p>
			</div>
		</HeaderContainer>
	);
}

export default Header;
