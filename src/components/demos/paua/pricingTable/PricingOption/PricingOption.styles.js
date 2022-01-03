import styled from 'styled-components';

export const PricingOptionContainer = styled.div``;
export const Footer = styled.div`
	width: 100%;
	height: 100%;
`;

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	color: #414141;
	width: 100%;
	padding: 10px;
`;

export const Title = styled.h3`
	color: #414141;
	font-size: 1.2rem;
	font-weight: bold;
	letter-spacing: 1px;
	text-align: center;
	width: 100%;
	padding: 20px 0;
	border-bottom: 1px solid #e5e5e5;
`;

export const Price = styled.div`
	display: flex;
	gap: 5px;
	justify-content: center;
	width: 100%;
	padding: 20px 5px;

	div {
		display: flex;
		gap: 5px;
		font-size: 1rem;
		font-weight: bold;
		color: ${({ theme }) => theme.demoColors.pauaPink};
		p {
			font-weight: 300;
			color: #414141;
		}
	}
`;

export const SignUp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	button {
		background: ${({ theme }) => theme.demoColors.pauaPink};
		width: 200%;
		padding: 10px 30px;
		letter-spacing: 2px;
		border: none;
		border-radius: 2px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		color: white;
		cursor: pointer;
		transition: 1s all cubic-bezier(0.175, 0.885, 0.32, 1.275);

		&:hover {
			background: #d82b87;
		}
	}
`;
export const Features = styled.div`
	width: 100%;
`;
