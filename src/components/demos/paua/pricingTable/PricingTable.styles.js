import styled from 'styled-components';
import bg from '../../../../assets/img/paua/woman-on-phone.png';

export const PricingTableStyles = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 20px;
`;

export const PricingTableContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: 100%;
	p {
		font-size: 0.8rem;
	}
`;

export const EnterpriseContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	text-align: right;
	padding: 30px;
	border-radius: 2px;
	color: white;
	background: ${({ theme }) => theme.demoColors.pauaPink};
	background-image: url(${bg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;

	@media only screen and (max-width: 989px) {
		width: calc(200% + 20px);
	}

	@media only screen and (max-width: 653px) {
		width: 100%;
	}

	div {
		&:nth-child(1) {
			font-size: 1.7rem;
		}

		&:nth-child(2) {
			font-size: 2rem;
			font-weight: bold;
		}

		&:nth-child(3) {
			font-size: 0.9rem;
			margin-top: 5px;
			width: 80%;
		}

		&:nth-child(4) {
			font-size: 0.9rem;
			margin-top: 20px;
			background: ${({ theme }) => theme.demoColors.pauaTeal};
			padding: 10px 20px;
			border-radius: 5px;
			text-transform: uppercase;
			cursor: pointer;

			&:hover {
				background: #0aa6b5;
			}
		}
	}
`;
