import {
	ImgStyles,
	PortfolioHeader,
	PortfolioBody,
	PortfolioDetails,
	PortfolioItemContainer,
	PortfolioTech,
	PortfolioLinks,
} from './PortfolioItem.styles';
import hyve from '../../assets/img/portfolio/hyve.png';
import { AiFillGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';

function PortfolioItem() {
	return (
		<PortfolioItemContainer>
			<ImgStyles>
				<img src={hyve} alt='' />
				<div />
			</ImgStyles>
			<PortfolioDetails>
				<PortfolioHeader>
					<h6>Featured Project</h6>
					<h4>HYVE Gym & Fitness Studios</h4>
				</PortfolioHeader>
				<PortfolioBody>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Perspiciatis totam molestiae quam quo odit commodi voluptatibus fuga
						aliquam atque officia tenetur porro, natus praesentium maiores sunt
						omnis! Obcaecati, explicabo facilis.
					</p>
				</PortfolioBody>
				<PortfolioTech>
					<div>Firebase</div>
					<div>React.js</div>
					<div>Photoshop</div>
				</PortfolioTech>
				<PortfolioLinks>
					<AiFillGithub />
					<GoLinkExternal />
				</PortfolioLinks>
			</PortfolioDetails>
		</PortfolioItemContainer>
	);
}

export default PortfolioItem;
