import {
	ImgStyles,
	PortfolioHeader,
	PortfolioBody,
	PortfolioDetails,
	PortfolioItemContainer,
	PortfolioTech,
	PortfolioLinks,
} from './PortfolioItem.styles';

import { AiFillGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';
import { DiReact, DiSass } from 'react-icons/di';
import {
	SiAdobephotoshop,
	SiFirebase,
	SiRedux,
	SiStyledcomponents,
	SiShopify,
} from 'react-icons/si';
import { FiFramer } from 'react-icons/fi';

function PortfolioItem({ project }) {
	return (
		<PortfolioItemContainer>
			<ImgStyles>
				<img src={project.img} alt={project.title} />
				<div />
			</ImgStyles>
			<PortfolioDetails>
				<PortfolioHeader>
					<h6>Featured Project</h6>
					<h4>{project.title}</h4>
				</PortfolioHeader>
				<PortfolioBody>
					<p>{project.description}</p>
				</PortfolioBody>
				<PortfolioTech>
					{project.firebase && (
						<div>
							<SiFirebase />
							Firebase
						</div>
					)}

					{project.react && (
						<div>
							<DiReact />
							React.js
						</div>
					)}
					{project.redux && (
						<div>
							<SiRedux />
							Redux
						</div>
					)}
					{project.sass && (
						<div>
							<DiSass />
							Sass
						</div>
					)}
					{project.styled && (
						<div>
							<SiStyledcomponents />
							Styled-components
						</div>
					)}
					{project.photoshop && (
						<div>
							<SiAdobephotoshop />
							Photoshop
						</div>
					)}
					{project.framer && (
						<div>
							<FiFramer />
							Framer
						</div>
					)}
					{project.shopify && (
						<div>
							<SiShopify />
							Shopify
						</div>
					)}
				</PortfolioTech>
				<PortfolioLinks>
					{project.github !== '' && (
						<a target='_blank' rel='noreferrer' href={project.github}>
							<AiFillGithub />
						</a>
					)}
					{project.link !== '' && (
						<a target='_blank' rel='noreferrer' href={project.link}>
							<GoLinkExternal />
						</a>
					)}
				</PortfolioLinks>
			</PortfolioDetails>
		</PortfolioItemContainer>
	);
}

export default PortfolioItem;
