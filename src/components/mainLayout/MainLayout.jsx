import Header from '../header/Header';
import Footer from '../footer/Footer';
import { MainLayoutStyles, Overlay } from './MainLayout.styles';

function MainLayout({ children }) {
	return (
		<MainLayoutStyles>
			<Overlay>
				<Header />
				<div>{children}</div>
				<Footer />
			</Overlay>
		</MainLayoutStyles>
	);
}

export default MainLayout;
