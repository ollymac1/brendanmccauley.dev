import styled from 'styled-components';

export const PricingContainer = styled.div`
	width: 95%;
	max-width: 1140px;
	margin: auto;
`;

export const BodyStyles = styled.main`
	min-height: calc(100vh - 90px - 250px);
	margin-bottom: 30px;
`;

export const PageTitle = styled.h1`
	width: 100%;
	text-align: center;
	font-family: 'Open Sans', sans-serif;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.demoColors.pauaTeal};
	font-weight: bold;
	text-transform: capitalize;
`;

export const Announcement = styled.div`
	background: ${({ theme }) => theme.demoColors.pauaTeal};
	padding: 10px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	position: absolute;
	top: 670px;
	left: calc((100% - 1140px) / 2);
	width: 1140px;
	margin: auto;
	border-radius: 5px;
	@media only screen and (max-width: 1100px) {
		top: 239px;
		width: 100%;
		left: 0;
		text-align: center;
		gap: 5px;
		border-radius: 0;
		padding: 10px 30px;
	}

	h2,
	h3 {
		color: white;
	}

	h2 {
		font-size: 1rem;
	}

	h3 {
		font-size: 0.7rem;
	}
`;
