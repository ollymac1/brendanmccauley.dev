import Header from '../header/Header';
import Footer from '../footer/Footer';
import { MainLayoutStyles, Overlay } from './MainLayout.styles';
import Scroll from '../../utils/Scroll';

function MainLayout({ children, animated }) {
	return (
		<MainLayoutStyles>
			<Scroll />
			<Overlay>
				<Header animated={animated} />
				{children}
				<Footer />
			</Overlay>
		</MainLayoutStyles>
	);
}

export default MainLayout;
