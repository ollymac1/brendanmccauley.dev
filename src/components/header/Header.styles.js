import styled from 'styled-components';

export const HeaderStyles = styled.header`
	display: flex;
	justify-content: center;
`;

export const BrandingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h4 {
		letter-spacing: 9.3px;
		margin-left: 2px;
		margin-top: -10px;

		@media only screen and (max-width: 1100px) {
			font-size: 0.7rem;
			letter-spacing: 5.3px;
			margin-top: -6px;
			margin-left: 0px;
		}
	}
`;
