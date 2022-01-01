import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	a {
		width: 100%;
	}
`;

export const ButtonStyles = styled.button`
	background: ${({ theme }) => theme.colors.orange2};
	color: ${({ theme }) => theme.colors.black};
	text-transform: uppercase;
	border: none;
	padding: 10px 20px;
	width: 100%;
	cursor: pointer;
	font-size: 0.7rem;
	letter-spacing: 1px;

	&:hover {
		background: ${({ theme }) => theme.colors.orange3};
		transform: scale(1.02);
		transform: translateY(-1px);
	}

	&:active {
		transform: scale(1);
		transform: translateY(0);
	}

	a {
		width: 100%;
	}
`;
