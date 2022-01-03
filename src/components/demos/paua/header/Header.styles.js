import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	align-items: center;
	height: 55px;
	width: 95%;
	margin: auto;

	@media only screen and (max-width: 1050px) {
		grid-template-columns: 1fr 1fr;
	}

	img {
		height: 30%;
	}

	ul {
		color: ${({ theme }) => theme.demoColors.pauaTeal};
		text-decoration: none;
		list-style: none;
		display: flex;
		justify-content: center;
		gap: 30px;
		font-family: 'Oxygen', sans-serif;
		letter-spacing: 1px;
		font-weight: bold;

		@media only screen and (max-width: 1050px) {
			display: none;
		}

		li {
			cursor: pointer;
			white-space: nowrap;
			&:hover {
				color: ${({ theme }) => theme.demoColors.pauaPink};
			}

			&:nth-child(2) {
				color: ${({ theme }) => theme.demoColors.pauaPink};
			}
		}
	}

	div {
		display: flex;
		justify-content: flex-end;

		p {
			background: ${({ theme }) => theme.demoColors.pauaPink};
			padding: 5px 15px;
			border-radius: 5px;
			text-transform: uppercase;
			font-family: 'Oxygen', sans-serif;
			font-size: 0.7rem;
			letter-spacing: 1px;
			cursor: pointer;
			transition: 1s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
			color: white;
			&:hover {
				background: ${({ theme }) => theme.demoColors.pauaPinkHover};
			}
		}
	}
`;
