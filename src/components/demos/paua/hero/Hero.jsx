import video from '../../../../assets/img/paua/charging_overview_hero.webm';
import video2 from '../../../../assets/img/paua/charging_overview_hero.mp4';
import video3 from '../../../../assets/img/paua/charging_overview_hero.ogg';
import poster from '../../../../assets/img/paua/charging_overview_hero.webp';
import { HeroContainer, VideoOverlay, Overlay } from './Hero.styles';

function Hero() {
	return (
		<HeroContainer>
			<video
				playsInline='playsinline'
				autoPlay='autoplay'
				muted
				loop
				poster={poster}
			>
				<source src={video} type='video/webm' />
				<source src={video2} type='video/mp4' />
				<source src={video3} type='video/oog' />
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
