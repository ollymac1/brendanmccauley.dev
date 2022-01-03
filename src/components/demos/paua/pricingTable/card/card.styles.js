import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  50% {
    background-position: 100% 50%;
  }

 
`;

export const CardContainer = styled.div`
	--border-width: 2px;
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 0px;
	align-items: flex-start;
	justify-content: space-between;
	min-height: 550px;
	background: #fff;
	border-radius: 2px;

	&::after {
		position: absolute;
		content: '';
		top: calc(-1 * var(--border-width));
		left: calc(-1 * var(--border-width));
		z-index: -1;
		width: calc(100% + var(--border-width) * 2);
		height: calc(100% + var(--border-width) * 2);
		background: linear-gradient(
			60deg,
			#ff33cc,
			#c143a2,
			#f268cf,
			#ffd8f5,
			#f990df,
			#ffd8f5
		);
		background-size: 300% 300%;
		background-position: 0 50%;
		border-radius: calc(2 * var(--border-width));
		animation: ${rotate} 4s alternate infinite;
	}
`;
