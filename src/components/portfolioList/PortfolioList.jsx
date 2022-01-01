import PortfolioItem from '../../components/portfolioItem/PortfolioItem';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioListStyles } from './PortfolioList.styles';
import { projects } from './projects';

function PortfolioList() {
	return (
		<>
			<PortfolioListStyles>
				<AnimatePresence>
					{projects.map((project, index) => (
						<motion.div
							animate={
								({ opacity: 0.8 },
								{ translateY: [100, 50, -50, 20, -20, 10, 0] })
							}
							whileHover={{ scale: 1.01, opacity: 1 }}
							initial={({ opacity: 0 }, { translateY: 200 })}
						>
							<PortfolioItem key={index} project={project} />
						</motion.div>
					))}
				</AnimatePresence>
			</PortfolioListStyles>
		</>
	);
}

export default PortfolioList;
