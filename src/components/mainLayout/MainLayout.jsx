import Header from '../header/Header';
import Footer from '../footer/Footer';
import { MainLayoutStyles, Overlay } from './MainLayout.styles';

function MainLayout({ children, animated }) {
	return (
		<MainLayoutStyles>
			<Overlay>
				<Header animated={animated} />
				{children}
				<Footer />
			</Overlay>
		</MainLayoutStyles>
	);
}

export default MainLayout;
