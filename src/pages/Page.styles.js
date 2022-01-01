import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BodyNarrow = styled.main`
	max-width: 320px;
	margin: auto;
`;

export const Body = styled.main`
	width: 800px;
	max-width: 98%;

	margin: auto;
	display: flex;
	flex-direction: column;

	h3 {
		margin-bottom: 20px;
		margin-top: 40px;
	}

	h4 {
		margin-bottom: 10px;
	}
	p {
		margin-bottom: 10px;
	}

	span {
		color: ${({ theme }) => theme.colors.orange3};
	}
`;

export const ImgStyles = styled(motion.div)`
	width: 100%;
	height: 400px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const ButtonGroupStyles = styled(motion.div)`
	display: flex;
	gap: 5px;
	margin-top: 5px;
`;

export const Long = styled.div``;

export const Short = styled.div``;
export const Common = styled.div`
	margin-bottom: 10px;

	button {
		margin-top: 10px;
	}
`;
