import styled from 'styled-components';

export const PortfolioItemContainer = styled.div`
	display: flex;
	background: ${({ theme }) => theme.colors.navy};
	//padding: 20px;
	height: 300px;
	width: 100%;
	display: flex;
	border-radius: 5px;

	align-items: center;
`;

export const ImgStyles = styled.div`
	position: relative;
	height: 100%;
	width: 55%;

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	div {
		position: absolute;
		top: 0;
		background: ${({ theme }) => theme.colors.navy};
		opacity: 0.7;
		height: 100%;
		width: 100%;
		cursor: pointer;
		transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

		&:hover {
			opacity: 0;
		}
	}
`;

export const PortfolioDetails = styled.div`
	height: 100%;
	width: 45%;
	padding: 20px;
	position: relative;
`;

export const PortfolioHeader = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	h6 {
		color: white;
	}

	h4 {
		font-size: 1.5rem;
	}
`;
export const PortfolioBody = styled.div`
	position: relative;
	width: 130%;
	left: -30%;
	border-radius: 5px;
	padding: 20px;
	font-size: 0.7rem;
	background: #101725;
	box-shadow: 0 20px 30px -15px ${({ theme }) => theme.colors.nav2};
	text-align: right;
`;
export const PortfolioTech = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	gap: 5px;
	margin-top: -10px;
	margin-right: 10px;
	z-index: 2;
	div {
		font-size: 0.7rem;
		color: black;
		background: ${({ theme }) => theme.colors.orange2};
		padding: 5px;
		border-radius: 5px;
	}
`;
export const PortfolioLinks = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;

	svg {
		fill: white;
		font-size: 1.2rem;
		margin: 5px;
	}
`;
