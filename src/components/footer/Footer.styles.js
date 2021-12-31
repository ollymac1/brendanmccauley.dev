import styled from 'styled-components';

export const FooterStyles = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	font-size: 1.3rem;

	svg {
		&:hover {
			cursor: pointer;
			fill: ${({ theme }) => theme.colors.orange};
		}
	}
`;
