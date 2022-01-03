import styled from 'styled-components';

export const KeyPointsContainer = styled.section`
	display: flex;
	width: 100%;
	align-items: center;
	flex-direction: column;
	margin-top: 50px;

	h3 {
		font-size: 2rem;
		color: #414141;
		font-weight: bold;
		text-transform: uppercase;
		margin-bottom: 40px;
		text-align: center;
	}
`;

export const List = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 1fr;
	gap: 50px;

	@media only screen and (max-width: 660px) {
		grid-template-columns: 1fr;
	}
`;

export const KeyPoint = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 30%;
	}

	h4 {
		font-size: 1.3rem;
		color: #414141;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	p {
		color: #414141;
		padding: 0 25px;
	}
`;
