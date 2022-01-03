import video from '../../../../assets/img/paua/charging_overview_hero.webm';
import { HeroContainer, VideoOverlay, Overlay } from './Hero.styles';

function Hero() {
	return (
		<HeroContainer>
			<video playsInline autoPlay='autoplay' muted loop>
				<source src={video} type='video/webm' />
			</video>
			<Overlay />
			<VideoOverlay>
				<div>
					<h1>Pricing</h1>
				</div>
			</VideoOverlay>
		</HeroContainer>
	);
}

export default Hero;
