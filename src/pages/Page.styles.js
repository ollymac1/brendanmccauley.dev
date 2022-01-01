import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BodyStyles = styled.div`
	max-width: 400px;
	margin: auto;
`;

export const ImgStyles = styled(motion.div)`
	width: 100%;
	height: 500px;

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
