import styled from 'styled-components';

export const HeroContainer = styled.div`
	height: 700px;
	width: 95%;
	max-width: 1140px;
	margin: auto;

	video {
		object-fit: cover;
		height: 700px;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -2;
	}

	@media only screen and (max-width: 1100px) {
		height: 300px;

		video {
			height: 300px;
		}
	}
`;

export const Overlay = styled.div`
	height: 700px;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	background: #000;
	opacity: 0.6;

	@media only screen and (max-width: 1100px) {
		height: 300px;
	}
`;

export const VideoOverlay = styled.div`
	height: 100%;

	div {
		padding-bottom: 10px;
		border-bottom: 0.5px solid #ffffffdb;

		h1 {
			letter-spacing: 1px;
			color: #ffffffdb;
		}
	}
`;
