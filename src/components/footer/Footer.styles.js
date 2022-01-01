import styled from 'styled-components';

export const FooterStyles = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	font-size: 1.3rem;

	svg {
		transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		&:hover {
			cursor: pointer;
			fill: ${({ theme }) => theme.colors.orange};
			transform: rotate(20deg);
		}
	}
`;
