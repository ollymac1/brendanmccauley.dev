import { HeaderStyles, BrandingContainer } from './Header.styles';
import { motion, AnimatePresence } from 'framer-motion';
import FoxLogo from '../foxLogo/FoxLogo';

function Header() {
	return (
		<HeaderStyles>
			<BrandingContainer>
				<motion.div
					animate={{
						scale: [10, 1.5, 1.5, 1.5, 1],
						rotate: [0, 0, 0, 0, 0, 20, -20, 20, 0],
						translateY: [300, 80, 0],
					}}
					transition={{ duration: 2 }}
					drag
					dragConstraints={{
						top: 10,
						left: 0,
						right: 0,
						bottom: 0,
					}}
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
				<motion.h4
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2 }}
				>
					Full Stack Developer
				</motion.h4>
			</BrandingContainer>
		</HeaderStyles>
	);
}

export default Header;
