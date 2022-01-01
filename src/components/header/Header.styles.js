import styled from 'styled-components';

export const HeaderStyles = styled.header`
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
	position: sticky;
`;

export const BrandingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	svg {
		height: 70px;

		@media only screen and (max-width: 1100px) {
			height: 50px;
		}
	}

	h2 {
		letter-spacing: 9.3px;
		margin-left: 2px;
		margin-top: -10px;
		font-size: 1rem;

		@media only screen and (max-width: 1100px) {
			font-size: 0.7rem;
			letter-spacing: 5.3px;
			margin-top: -5px;
			margin-left: 0px;
		}
	}
`;
