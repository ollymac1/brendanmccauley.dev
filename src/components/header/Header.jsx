import { HeaderStyles, BrandingContainer } from './Header.styles';
import { motion } from 'framer-motion';
import FoxLogo from '../foxLogo/FoxLogo';

function Header({ animated }) {
	return (
		<HeaderStyles>
			{animated ? (
				<BrandingContainer>
					<motion.div
						animate={{
							scale: [5, 1.5, 1],
							rotate: [0, 0, 0, 0, 0, 0, -15, 10, -10, 5, -5, 0],
							translateY: [300, 80, 0],
						}}
						transition={{ duration: 2 }}
					>
						<FoxLogo mb={`10px`} />
					</motion.div>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.7 }}
					>
						Brendan McCauley
					</motion.h1>
					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2 }}
					>
						Full Stack Developer
					</motion.h2>
				</BrandingContainer>
			) : (
				<BrandingContainer>
					<FoxLogo mb={`10px`} />
					<h1>Brendan McCauley</h1>
					<h2>Full Stack Developer</h2>
				</BrandingContainer>
			)}
		</HeaderStyles>
	);
}

export default Header;
