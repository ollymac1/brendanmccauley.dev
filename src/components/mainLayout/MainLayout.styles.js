import styled from 'styled-components';
import background from '../../assets/img/bm_background.webp';
import backgroundMobile from '../../assets/img/bm_background_mobile.jpg';

export const MainLayoutStyles = styled.div`
	background: url(${background}) no-repeat center center fixed;
	background-size: cover;
	min-height: 100vh;

	@media only screen and (max-width: 780px) {
		background: url(${backgroundMobile}) no-repeat center center fixed;
	}
`;

export const Overlay = styled.div`
	background: rgba(13, 18, 32, 0.95);
	min-height: 100vh;
	//opacity: 0.96;
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
