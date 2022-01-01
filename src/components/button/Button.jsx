import { ButtonStyles, Container } from './Button.styles';
import { Link } from 'react-router-dom';

function Button({ children, to, onClick }) {
	return (
		<Container>
			<Link to={!to ? '' : to}>
				<ButtonStyles onClick={onClick}>{children}</ButtonStyles>
			</Link>
		</Container>
	);
}

export default Button;
