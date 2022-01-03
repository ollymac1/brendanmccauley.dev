import styled from 'styled-components';

export const FooterContainer = styled.footer`
	display: flex;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.demoColors.pauaTeal};
	height: 250px;
`;

export const FooterContent = styled.div`
	width: 95%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items:flex-end ;
	P {
		font-size: 0.6rem;
		color: white;
	}
`;

export const FooterLeft = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	justify-content: center;

	img {
		height: 30px;
	}
`;

export const FooterRight = styled.div`
	text-align: right;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 5px;

	a {
		font-size: 0.6rem;
		color: white;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1px;
		cursor: pointer;
		transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s all;
		letter-spacing: 1px;

		&:hover {
			color: ${({ theme }) => theme.demoColors.pauaPink};
		}
	}
`;
