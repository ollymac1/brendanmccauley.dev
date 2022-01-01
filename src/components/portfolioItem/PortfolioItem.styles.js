import styled from 'styled-components';

export const PortfolioItemContainer = styled.div`
	display: flex;
	background: ${({ theme }) => theme.colors.navy};
	padding: 10px;
	height: 320px;
	width: 100%;
	display: flex;
	border-radius: 5px;
	align-items: center;

	@media only screen and (max-width: 1100px) {
		//height: 350px;
		height: auto;
	}
`;

export const ImgStyles = styled.div`
	position: relative;
	height: 90%;
	width: 55%;
	margin-left: 10px;

	@media only screen and (max-width: 1100px) {
		display: none;
	}

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

	@media only screen and (max-width: 1100px) {
		width: 100%;
	}
`;

export const PortfolioHeader = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	h6 {
		color: white;
		letter-spacing: 1px;
	}

	h4 {
		font-size: 1.5rem;
		white-space: nowrap;
	}
`;
export const PortfolioBody = styled.div`
	position: relative;
	width: 140%;
	left: -40%;
	border-radius: 5px;
	padding: 20px;
	font-size: 0.8rem;
	background: #101725;
	box-shadow: 0 20px 30px -15px ${({ theme }) => theme.colors.nav2};
	text-align: right;

	@media only screen and (max-width: 1100px) {
		width: 100%;
		position: static;
	}
`;
export const PortfolioTech = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	gap: 5px;
	margin-top: -12px;
	margin-right: 10px;
	z-index: 2;
	@media only screen and (max-width: 1100px) {
		flex-wrap: wrap;
	}
	div {
		display: flex;
		align-items: center;
		gap: 3px;
		font-size: 0.7rem;
		color: black;
		background: ${({ theme }) => theme.colors.orange2};
		padding: 5px;
		border-radius: 5px;
		white-space: nowrap;
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
		transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		cursor: pointer;

		&:hover {
			transform: scale(1.2);
		}
	}
`;
